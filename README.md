# McChronicles: The Happy Meal Quest

A McDonald's-themed JRPG inspired by Ni no Kuni, built with Three.js. Features a Nemesis system from Shadow of Mordor, ATB combat, 8 regions, and all-procedural assets.

## Quick Start

```bash
cd mcchronicles
npm install
npm run dev
```

## Features

- **Toon-shaded 3D** — Custom cell-shading shaders (Ni no Kuni style)
- **ATB Combat** — Active Time Battle system with real-time positioning
- **Nemesis System** — Procedural Hamburglar lieutenants with memory, grudges, and hierarchy
- **8 Regions** — Fry Valley, Burger Highlands, McFlurry Tundra, Happy Meal Forest, Drive-Thru Desert, McCafe Springs, PlayPlace Plains, Golden Arches Castle
- **5 Playable Characters** — Ronald McDonald, Grimace, Birdie, Officer Big Mac, Mac Tonight
- **30+ Monster Types** — Menu items come to life as enemies
- **Procedural Everything** — All 3D models, textures, and audio generated in-code
- **Save System** — localStorage autosave + manual saves

## Tech Stack

- Three.js r160+ (3D engine)
- Vite (build tooling)
- Web Audio API (procedural audio)
- Canvas API (procedural textures)
- Custom GLSL shaders (toon shading)

## Controls

- **WASD / Arrow Keys** — Move character
- **Enter / Space** — Interact / Confirm
- **Escape** — Menu / Back
- **Shift** — Sprint
- **1-4** — Party member selection in battle
