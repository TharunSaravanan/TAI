import { AgentStatus } from "../../stores/useStore";

interface StickmanProps {
  status: AgentStatus;
  color: string;
  size?: number;
}

// Running stickman - mid-stride, arms pumping
function RunningStickman({ color, size }: { color: string; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* head */}
      <circle cx="12" cy="4" r="2.5" stroke={color} strokeWidth="1.5" fill="none" />
      {/* body */}
      <line x1="12" y1="6.5" x2="12" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* left arm - back */}
      <line x1="12" y1="9" x2="8" y2="7" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* right arm - forward */}
      <line x1="12" y1="9" x2="16" y2="11" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* left leg - forward */}
      <line x1="12" y1="14" x2="8" y2="19" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* right leg - back */}
      <line x1="12" y1="14" x2="16" y2="18" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* motion lines */}
      <line x1="5" y1="10" x2="3" y2="10" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <line x1="5" y1="12" x2="2" y2="12" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

// Tool calling stickman - hammering / working with a tool
function ToolCallingStickman({ color, size }: { color: string; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* head */}
      <circle cx="10" cy="4" r="2.5" stroke={color} strokeWidth="1.5" fill="none" />
      {/* body */}
      <line x1="10" y1="6.5" x2="10" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* left arm down */}
      <line x1="10" y1="9" x2="6" y2="12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* right arm up holding wrench */}
      <line x1="10" y1="9" x2="15" y2="5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* wrench */}
      <line x1="15" y1="5" x2="18" y2="2" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="19" cy="1.5" r="1.2" stroke={color} strokeWidth="1" fill="none" />
      {/* legs standing */}
      <line x1="10" y1="14" x2="7" y2="19" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="14" x2="13" y2="19" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* sparks */}
      <line x1="17" y1="4" x2="19" y2="3" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <line x1="18" y1="5" x2="20" y2="5" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

// Waiting input stickman - hand raised, waving
function WaitingStickman({ color, size }: { color: string; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* head */}
      <circle cx="12" cy="4" r="2.5" stroke={color} strokeWidth="1.5" fill="none" />
      {/* open mouth (calling out) */}
      <circle cx="13.2" cy="4.5" r="0.6" fill={color} />
      {/* body */}
      <line x1="12" y1="6.5" x2="12" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* left arm relaxed */}
      <line x1="12" y1="9" x2="8" y2="12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* right arm raised waving */}
      <line x1="12" y1="9" x2="16" y2="5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="5" x2="18" y2="3" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* legs */}
      <line x1="12" y1="14" x2="9" y2="19" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="14" x2="15" y2="19" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* speech/attention marks */}
      <text x="19" y="4" fontSize="5" fill={color} opacity="0.7" fontWeight="bold">!</text>
    </svg>
  );
}

// Idle stickman - sitting/leaning, relaxed
function IdleStickman({ color, size }: { color: string; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* head */}
      <circle cx="10" cy="5" r="2.5" stroke={color} strokeWidth="1.5" fill="none" />
      {/* body - leaning back slightly */}
      <line x1="10" y1="7.5" x2="11" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* arms crossed/relaxed */}
      <line x1="10" y1="10" x2="7" y2="12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="10" x2="14" y2="11" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* legs - one crossed */}
      <line x1="11" y1="14" x2="8" y2="19" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="11" y1="14" x2="15" y2="18" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="15" y1="18" x2="13" y2="19" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* zzz */}
      <text x="15" y="4" fontSize="4" fill={color} opacity="0.5" fontWeight="bold">z</text>
      <text x="17" y="2.5" fontSize="3.5" fill={color} opacity="0.35" fontWeight="bold">z</text>
    </svg>
  );
}

// Disconnected stickman - lying down / fallen
function DisconnectedStickman({ color, size }: { color: string; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* head */}
      <circle cx="4" cy="14" r="2.5" stroke={color} strokeWidth="1.5" fill="none" />
      {/* X eyes */}
      <line x1="3" y1="13.2" x2="4" y2="14.2" stroke={color} strokeWidth="0.8" strokeLinecap="round" />
      <line x1="4" y1="13.2" x2="3" y2="14.2" stroke={color} strokeWidth="0.8" strokeLinecap="round" />
      {/* body - horizontal */}
      <line x1="6.5" y1="14" x2="14" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* arms flopped */}
      <line x1="9" y1="14" x2="8" y2="17" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="14" x2="11" y2="11" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* legs */}
      <line x1="14" y1="14" x2="17" y2="12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14" y1="14" x2="17" y2="16" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Error stickman - distressed, hands on head
function ErrorStickman({ color, size }: { color: string; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* head */}
      <circle cx="12" cy="5" r="2.5" stroke={color} strokeWidth="1.5" fill="none" />
      {/* X eyes */}
      <line x1="11" y1="4.3" x2="11.8" y2="5.1" stroke={color} strokeWidth="0.8" strokeLinecap="round" />
      <line x1="11.8" y1="4.3" x2="11" y2="5.1" stroke={color} strokeWidth="0.8" strokeLinecap="round" />
      <line x1="12.5" y1="4.3" x2="13.3" y2="5.1" stroke={color} strokeWidth="0.8" strokeLinecap="round" />
      <line x1="13.3" y1="4.3" x2="12.5" y2="5.1" stroke={color} strokeWidth="0.8" strokeLinecap="round" />
      {/* body */}
      <line x1="12" y1="7.5" x2="12" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* arms up on head - distressed */}
      <line x1="12" y1="9" x2="8" y2="5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="5" x2="9" y2="3" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="9" x2="16" y2="5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="5" x2="15" y2="3" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* legs */}
      <line x1="12" y1="14" x2="9" y2="19" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="14" x2="15" y2="19" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const stickmanMap: Record<AgentStatus, React.FC<{ color: string; size: number }>> = {
  running: RunningStickman,
  tool_calling: ToolCallingStickman,
  waiting_input: WaitingStickman,
  idle: IdleStickman,
  disconnected: DisconnectedStickman,
  error: ErrorStickman,
};

export function Stickman({ status, color, size = 20 }: StickmanProps) {
  const Component = stickmanMap[status] || IdleStickman;
  return <Component color={color} size={size} />;
}
