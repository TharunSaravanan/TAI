import { AgentStatus } from "../stores/useStore";

// --- Web Audio API sound generation ---

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    audioCtx = new AudioContext();
  }
  return audioCtx;
}

function playTone(frequency: number, duration: number, type: OscillatorType = "sine", volume = 0.15) {
  const ctx = getAudioContext();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(frequency, ctx.currentTime);
  gain.gain.setValueAtTime(volume, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + duration);
}

// Pleasant two-tone chime for "agent finished"
function playIdleSound() {
  playTone(880, 0.15, "sine", 0.12);
  setTimeout(() => playTone(1174.66, 0.25, "sine", 0.10), 120);
}

// Attention sound for "needs input"
function playNeedsInputSound() {
  playTone(659.25, 0.12, "triangle", 0.14);
  setTimeout(() => playTone(783.99, 0.12, "triangle", 0.12), 100);
  setTimeout(() => playTone(659.25, 0.18, "triangle", 0.10), 200);
}

// --- Browser Notifications ---

let notificationPermission: NotificationPermission = "default";

export function requestNotificationPermission() {
  if ("Notification" in window && Notification.permission === "default") {
    Notification.requestPermission().then((perm) => {
      notificationPermission = perm;
    });
  } else if ("Notification" in window) {
    notificationPermission = Notification.permission;
  }
}

function showBrowserNotification(title: string, body: string) {
  if (!("Notification" in window)) return;
  if (Notification.permission !== "granted") return;
  // Don't notify if the tab is focused
  if (document.hasFocus()) return;

  new Notification(title, {
    body,
    icon: "/favicon.ico",
    silent: true, // We play our own sound
  });
}

// --- Main notification handler ---

// Track previous status per node to detect transitions
const previousStatuses = new Map<string, AgentStatus>();

export function notifyStatusChange(
  nodeId: string,
  newStatus: AgentStatus,
  agentName: string,
) {
  const prevStatus = previousStatuses.get(nodeId);
  previousStatuses.set(nodeId, newStatus);

  // Only notify on meaningful transitions
  if (prevStatus === newStatus) return;

  // Agent finished working -> idle
  if (newStatus === "idle" && (prevStatus === "running" || prevStatus === "tool_calling")) {
    playIdleSound();
    showBrowserNotification(
      `${agentName} finished`,
      "Agent has completed its task and is now idle.",
    );
  }

  // Agent needs input/permission
  if (newStatus === "waiting_input" && prevStatus !== "waiting_input") {
    playNeedsInputSound();
    showBrowserNotification(
      `${agentName} needs input`,
      "Agent is waiting for your input or permission.",
    );
  }

  // Agent errored
  if (newStatus === "error" && prevStatus !== "error") {
    playTone(330, 0.3, "sawtooth", 0.08);
    showBrowserNotification(
      `${agentName} error`,
      "Agent encountered an error.",
    );
  }
}

export function clearNodeStatus(nodeId: string) {
  previousStatuses.delete(nodeId);
}
