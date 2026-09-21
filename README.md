# JustPLC ⚡

Visual logic editor for PLCs. Build automation with nodes, not boilerplate.

JustPLC is a cross-platform desktop app for designing PLC control logic as a node graph — drag blocks, wire them up, watch live state. Early-stage, open source, built with Electron + React + TypeScript.

> Status: **pre-alpha / active prototype**. Core shell + graph editor exist. Logic engine, PLC drivers, and project persistence are on the roadmap.

## What it looks like

```
┌──────────────────────────────────────────────┐
│ TitleBar  File Edit Selection Go      _ □ X │
├──────────┬───────────────────┬───────────────┤
│          │                   │               │
│  Nodes   │    Graph Editor   │   PLC State   │
│  Picker  │   (React Flow)    │               │
│          │                   │               │
├──────────┴───────────────────┴───────────────┤
│ Bottom Bar — status / logs                   │
└──────────────────────────────────────────────┘
```

Panels are resizable. Window is frameless with a custom title bar.

## Features

Done now:
- 🖥️ Frameless Electron shell with custom minimize / maximize / close
- 🧩 Node graph canvas powered by `@xyflow/react` — pan, zoom, drag, connect
- 🎛️ 3-pane IDE layout: Nodes Picker | Graph | PLC State + bottom status bar
- ↔️ Resizable panels via `react-resizable-panels`
- 🎨 Dark-themed base styles, Lucide icons

Next up (roadmap):
- [ ] Real function-block library (AND/OR/NOT, timers, counters, comparators, I/O)
- [ ] Drag-from-palette to canvas + inspector for node parameters
- [ ] Project save / load (JSON), undo / redo
- [ ] Local simulation / live debug mode
- [ ] PLC targets: Modbus, OPC UA, Siemens S7 export / codegen
- [ ] Structured Text / FBD export

Have an opinion on what matters first? Open an issue.

## Tech stack

- **Desktop:** Electron 44, electron-vite, electron-builder
- **UI:** React 19, TypeScript 5, Vite 7
- **Graph:** @xyflow/react 12
- **Layout:** react-resizable-panels 4, lucide-react
- **Quality:** ESLint + Prettier + `tsc --noEmit`

## Quickstart

Prerequisites: Node.js 20+ and npm.

```bash
git clone https://github.com/WladekW/JustPLC.git
cd JustPLC
npm install
npm run dev
```

Build installers:

```bash
# Windows
npm run build:win

# macOS
npm run build:mac

# Linux
npm run build:linux
```

Other scripts:

```bash
npm run typecheck   # node + web typechecks
npm run lint        # eslint
npm run format      # prettier --write .
npm start           # preview production build
```

## Project structure

```
src/
  main/                 # Electron main process (window, IPC, title-bar controls)
  preload/              # Secure bridge (window.windowControls, etc.)
  renderer/src/
    layouts/            # TitleBar, LeftPanel, GraphPanel, RightPanel, BottomBar
    components/nodes/   # Custom React Flow nodes (TestNode today, FB library tomorrow)
    assets/             # base.css, main.css, icons
resources/icon.png      # app icon
electron-builder.yml    # productName: Just PLC, win/mac/linux targets
```

Key files:
- `src/renderer/src/App.tsx` — grid shell + resizable central group
- `src/renderer/src/layouts/GraphPanel.tsx` — React Flow canvas
- `src/main/index.ts` — frameless `BrowserWindow` + `window-minimize/maximize/close` IPC

## How it works (today)

1. `main` creates a frameless window, exposes window controls over IPC.
2. `preload` bridges `window.windowControls` safely to the renderer.
3. `App.tsx` composes TitleBar + 3 resizable panels + BottomBar.
4. `GraphPanel.tsx` renders a `ReactFlow` canvas with custom `nodeTypes`.

No backend, no PLC connection yet — that's the fun part to build.

## Contributing

Prototype stage = high impact per PR. Good first areas:
- New node types in `src/renderer/src/components/nodes/`
- Palette drag-and-drop in `LeftPanel.tsx`
- Property inspector in `RightPanel.tsx`
- Simulation tick / evaluation engine

```bash
npm run dev       # hack
npm run typecheck # must pass
npm run lint      # must pass
```

Open a PR against `main`. Keep it small and typed.

## License

No license file yet. If you plan to use or contribute, treat as all-rights-reserved until the author adds one (MIT suggested).

---
Built for people who'd rather wire blocks than fight ladder-logic editors.
