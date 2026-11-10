# Implementation Roadmap — McChronicles

## Overview
20-hour JRPG built in Three.js, deployed at mcchronicles.wembassy.com

## Phase 1: Foundation (Parallel) — No blockers

### 1A. Visual Quality Overhaul (#10)
**Owner:** technical-artist
**Timeline:** 3-4 days
**Deliverables:**
- Post-processing pipeline (EffectComposer + Bloom + Outline + FXAA)
- Procedural sky dome shader with per-region colors
- Terrain vertex displacement + multi-color vertex painting
- 4 tree types + InstancedMesh grass + flowers
- Detailed structures (houses, shops, inns, Golden Arches, castle)
- Golden-hour lighting + 4096 shadows
- Per-region particle systems (7 types)
- JRPG camera angle (0, 6, 10) with smoothing
- Character/monster model improvements + outlines
- Title screen 3D background

### 1B. Story Act 1 (#11)
**Owner:** narrative-designer
**Timeline:** 3-4 days
**Deliverables:**
- 18 story beats (dialogue scripts, triggers, quest log entries)
- Fry Village, Fry Fields, Fry Caverns, Sesame Pass, Mt. Double-Patty, McCafe Springs (first visit)
- Tutorial combat + first mini-boss + first sub-villain
- Big Mac recruitment
- ~120 voice files (edge-tts)
- 15 new backdrop images
- Region-story mapping data

### 1C. Audio System (#20)
**Owner:** game-audio-engineer
**Timeline:** 3-4 days
**Deliverables:**
- AudioEngine.js (Web Audio API + buses)
- SfxEngine.js (100+ procedural SFX)
- MusicEngine.js (Tone.js, 20 tracks)
- AmbientEngine.js (8 region soundscapes)
- Dynamic music transitions
- Voice batch generation script

## Phase 2: Expansion — After #11

### 2A. Story Act 2 (#12)
**Owner:** narrative-designer
**Timeline:** 4-5 days
**Deliverables:**
- 24 story beats (Mac Tonight + Professor Fry recruitment)
- McFlurry Tundra, Drive-Thru Desert, Happy Meal Forest, Play Place Plains
- Condiment King Ketchup + Mustard boss battles
- Hamburglar reveal + Grimace capture
- ~160 voice files

### 2B. Side Quests (#16)
**Owner:** narrative-designer + game-designer
**Timeline:** 4-5 days (parallel with story)
**Deliverables:**
- 40 side quests (10 fetch, 8 bounty, 7 puzzle, 8 character, 7 hidden)
- Quest board in McCafe Springs
- Quest tracking system
- ~200 voice files for quest dialogue

### 2C. Battle System & Balance (#18)
**Owner:** game-designer
**Timeline:** 3-4 days
**Deliverables:**
- CTB turn order system
- 12 status effects + 7 elements
- Combo/synergy system
- 70 monster stat blocks
- 14 boss encounters with mechanics
- 120+ abilities (per character unlock schedule)
- Equipment system (weapons, armor, accessories, set bonuses)
- 200+ items with economy
- Difficulty curve implementation
- Save/load integration

## Phase 3: Content Build — After #10 + #11

### 3A. UI/UX Overhaul (#19)
**Owner:** frontend-dev
**Timeline:** 3-4 days
**Deliverables:**
- Title screen (3D bg + styled menu)
- JRPG HUD (HP/MP bars, minimap, compass, party display)
- Battle UI (command menu, target selection, damage numbers, turn order)
- Menu system (items, equipment, abilities, party, quests, map, cook, settings, save)
- Dialogue system (ornate box, portraits, text speed, voice)
- Visual style (fonts, colors, borders, transitions)

### 3B. Region & Level Design (#21)
**Owner:** level-designer
**Timeline:** 4-5 days
**Deliverables:**
- All 10 regions with sub-areas
- 25+ dungeons/towns/landmarks
- Dungeon mechanics (puzzles, switches, keys, ice sliding, mirage)
- Save point placement
- Treasure chest placement
- World map flow
- Fast travel system

## Phase 4: Deep Content — After #12

### 4A. Story Act 3 (#13)
**Owner:** narrative-designer
**Timeline:** 3-4 days
**Deliverables:**
- 24 story beats (Happy Meal Kid recruitment, Memory Grove, Grimace rescue, McLord reveal)
- Forgotten Path, Memory Grove, Hamburglar's Hideout, Shadow Rift
- Condiment King BBQ boss
- ~160 voice files

### 4B. Story Act 4 (#14) — After #13
**Owner:** narrative-designer
**Timeline:** 3-4 days
**Deliverables:**
- 18 story beats (Captain Croissant recruitment, corrupted labyrinth, castle assault)
- French Quarter, Corrupted Labyrinth, Secret Sauce Sanctum, Golden Arches Castle
- Condiment King Secret Sauce boss (4-phase)
- Hamburglar emotional battle + redemption
- ~120 voice files

### 4C. New Characters (#22) — After #10 + #12
**Owner:** narrative-designer + technical-artist
**Timeline:** 2-3 days
**Deliverables:**
- Professor Fry (character data, 3D model, 15 abilities, voice, quest)
- Happy Meal Kid (character data, 3D model, 12 abilities, voice, quest)
- Captain Croissant (character data, 3D model, 15 abilities, voice, quest)

## Phase 5: Finale — After #14

### 5A. Story Act 5 (#15)
**Owner:** narrative-designer
**Timeline:** 2-3 days
**Deliverables:**
- 12 story beats (Shadow Realm, shadow battles, McLord final boss 4-phase, epilogue)
- Shadow Realm, Shadow Mirrors, McLord's Throne
- ~80 voice files
- Ending montage

## Phase 6: Optional Content — After #15 + #16

### 6A. Optional Content (#17)
**Owner:** game-designer + narrative-designer
**Timeline:** 3-4 days
**Deliverables:**
- 10 familiars (collection + passive bonuses)
- 15 cooking recipes (crafting system)
- 4 mini-games
- Superboss: The Original Fry Lord (level 99)
- Post-game dungeon: Breakfast Kingdom (5 floors)
- Breakfast King boss (5-phase)
- New Game+ mode

## Phase 7: Polish — After #10

### 7A. Performance Optimization (#24)
**Owner:** optimization-arch
**Timeline:** 2-3 days
**Deliverables:**
- 60fps optimization (InstancedMesh, frustum culling, LOD)
- Post-processing budget verification
- Bundle size <1.5MB
- Region streaming
- Cross-browser testing

## Phase 8: Voice + QA — After all content

### 8A. Voice Generation (#23)
**Owner:** game-audio-engineer
**Timeline:** 2-3 days
**Deliverables:**
- 1,135 new edge-tts voice files
- Batch generation script
- Voice compression
- Per-region voice loading

### 8B. QA & Testing (#25)
**Owner:** qa
**Timeline:** 3-4 days
**Deliverables:**
- Automated tests (battle, progression, economy, save/load, quests)
- Full playthrough (all 5 acts)
- All 40 side quests verified
- All optional content verified
- Edge case testing
- Visual QA (screenshots vs reference)
- Audio QA
- Cross-browser testing

## Timeline Summary

| Phase | Duration | Start | End |
|-------|----------|-------|-----|
| Phase 1 (Foundation) | 3-4 days | Day 1 | Day 4 |
| Phase 2 (Expansion) | 4-5 days | Day 4 | Day 9 |
| Phase 3 (Content Build) | 4-5 days | Day 5 | Day 10 |
| Phase 4 (Deep Content) | 6-8 days | Day 9 | Day 17 |
| Phase 5 (Finale) | 2-3 days | Day 17 | Day 20 |
| Phase 6 (Optional) | 3-4 days | Day 20 | Day 24 |
| Phase 7 (Polish) | 2-3 days | Day 5 | Day 8 |
| Phase 8 (Voice + QA) | 5-7 days | Day 24 | Day 31 |
| **Total** | **~31 days** | | |

Note: Phases overlap because multiple agents work in parallel.

## Execution Strategy

1. **Spawn 3 parallel agents** for Phase 1 (visuals, story, audio)
2. **After Act 1 completes:** Spawn Act 2 + Side Quests + Battle System agents
3. **After Visual Quality completes:** Spawn UI/UX + Region Design agents
4. **Continue cascading** as dependencies resolve
5. **QA continuously** — each phase should be tested before marking complete
6. **Deploy frequently** — push to mcchronicles.wembassy.com after each phase

## Definition of Done (per phase)

- [ ] Code written and committed
- [ ] Build passes (no errors)
- [ ] Deployed to mcchronicles.wembassy.com
- [ ] Browser QA — screenshots taken and reviewed
- [ ] Issue updated with status and notes
- [ ] No regressions in prior phases