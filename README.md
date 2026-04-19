# TAI

https://github.com/user-attachments/assets/0a1979ab-f093-447d-8fe7-bcf6830051ee

**A better way to manage your AI coding agents.**

There are plenty of AI agent suites out there, but most of them feel clunky, lack real-time visibility, or just don't fit the way I actually work. TAI is my personal take on what an AI agent dashboard should be — built with a focus on quality-of-life and efficiency above everything else. It's actively evolving as I strip out friction and add the features that actually matter.

## Why TAI?

Running multiple AI agents across different tasks shouldn't feel like juggling terminal tabs. TAI puts every agent on an infinite canvas where you can see exactly what's happening at a glance — no tab switching, no guesswork, no wasted time.

## What It Does

### Visual Agent Dashboard
Every agent lives as a card on a drag-and-drop canvas. You see its current status (working, idle, waiting for input, calling tools), the git branch it's on, and the directory it's operating in — all without clicking into anything.

### Multi-Agent Orchestration
Spin up as many agents as you need — Claude Code, OpenCode, or Ralph Loop — each running in parallel. Spawn them individually or in bulk, restart them with custom args, and let TAI handle session persistence so nothing is lost between restarts.

### Workspace Organization
Group agents into categories by project or team, assign custom names and colors, and arrange everything on the canvas however makes sense to you. The layout persists across sessions.

### Real-Time Status Tracking
TAI hooks directly into agent processes to track state changes as they happen. For Claude Code agents, a bundled plugin provides precise status detection through hooks rather than relying on terminal output parsing.

### Integrated Terminal
Click any agent node to drop into its live terminal. Full xterm.js integration with real-time I/O streaming over WebSocket — it's like having every terminal open at once without the mess.

### Ticket-Driven Workflows (Coming Soon)
Linear integration is in progress — start sessions directly from tickets, auto-create isolated branches, and keep ticket context visible on each agent node.

## Getting Started

```bash
git clone https://github.com/TharunSaravanan/TAI.git
cd TAI

bun install
cd client && bun install && cd ..

bun run dev  # Server on :4242, UI on :6969
```

Open `http://localhost:6969`, hit "+" to spawn an agent, and you're running.

## Requirements

- Bun 1.0+
- At least one supported agent CLI: Claude Code, OpenCode, or Ralph Loop

The Claude Code plugin is auto-installed on first run — no setup needed.

## Tech Stack

- **Runtime**: Bun
- **Backend**: Hono + WebSockets + bun-pty
- **Frontend**: React + React Flow + xterm.js + Framer Motion
- **State**: Zustand

## Roadmap

This is an ongoing project. The goal is to make TAI the most efficient and ergonomic way to run parallel AI agents. Planned improvements include:

- Linear / GitHub Issues integration for ticket-driven workflows
- Smarter agent lifecycle management
- Better notification and alerting when agents need attention
- Performance and UX refinements across the board

## License

MIT
