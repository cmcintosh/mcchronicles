# Issue Tracker — McChronicles

## Planning Tickets
| # | Title | Labels | Status |
|---|-------|--------|--------|
| [#1](https://github.com/cmcintosh/mcchronicles/issues/1) | Wayfinder Map | wayfinder:map | ✅ Complete |
| #2 | Art Direction (superseded by #10) | wayfinder:prototype | 🟡 Superseded |
| #3 | Story Architecture (superseded by #11-#15) | wayfinder:grilling | 🟡 Superseded |
| #4 | Battle Balance (superseded by #18) | wayfinder:grilling | 🟡 Superseded |
| #5 | Level Design (superseded by #21) | wayfinder:prototype | 🟡 Superseded |
| #6 | Audio System (superseded by #20) | wayfinder:research | 🟡 Superseded |
| #7 | UI/UX (superseded by #19) | wayfinder:prototype | 🟡 Superseded |
| #8 | Content Expansion (superseded by #16, #17, #22) | wayfinder:task | 🟡 Superseded |
| #9 | Performance (superseded by #24) | wayfinder:research | 🟡 Superseded |

## Epic Implementation Tickets
| # | Title | Labels | Owner | Blocked By | Status |
|---|-------|--------|-------|------------|--------|
| [#10](https://github.com/cmcintosh/mcchronicles/issues/10) | EPIC: Visual Quality Overhaul | visuals, epic | technical-artist | — | ⬜ |
| [#11](https://github.com/cmcintosh/mcchronicles/issues/11) | EPIC: Story Act 1 (Hours 1-4) | story, epic | narrative-designer | — | ⬜ |
| [#12](https://github.com/cmcintosh/mcchronicles/issues/12) | EPIC: Story Act 2 (Hours 4-8) | story, epic | narrative-designer | #11 | ⬜ |
| [#13](https://github.com/cmcintosh/mcchronicles/issues/13) | EPIC: Story Act 3 (Hours 8-12) | story, epic | narrative-designer | #12 | ⬜ |
| [#14](https://github.com/cmcintosh/mcchronicles/issues/14) | EPIC: Story Act 4 (Hours 12-16) | story, epic | narrative-designer | #13 | ⬜ |
| [#15](https://github.com/cmcintosh/mcchronicles/issues/15) | EPIC: Story Act 5 (Hours 16-20) | story, epic | narrative-designer | #14 | ⬜ |
| [#16](https://github.com/cmcintosh/mcchronicles/issues/16) | EPIC: Side Quests (40 total) | content, epic | narrative+game-designer | #11 | ⬜ |
| [#17](https://github.com/cmcintosh/mcchronicles/issues/17) | EPIC: Optional Content | content, epic | game-designer | #15, #16 | ⬜ |
| [#18](https://github.com/cmcintosh/mcchronicles/issues/18) | EPIC: Battle System & Balance | combat, epic | game-designer | #11 | ⬜ |
| [#19](https://github.com/cmcintosh/mcchronicles/issues/19) | EPIC: UI/UX Overhaul | ui, epic | frontend-dev | #10 | ⬜ |
| [#20](https://github.com/cmcintosh/mcchronicles/issues/20) | EPIC: Audio System | audio, epic | game-audio-engineer | — | ⬜ |
| [#21](https://github.com/cmcintosh/mcchronicles/issues/21) | EPIC: Region & Level Design | epic | level-designer | #10, #11 | ⬜ |
| [#22](https://github.com/cmcintosh/mcchronicles/issues/22) | EPIC: New Characters (3) | content, epic | narrative+tech-artist | #10, #12, #13, #14 | ⬜ |
| [#23](https://github.com/cmcintosh/mcchronicles/issues/23) | EPIC: Voice Generation (1,135 files) | audio, content, epic | game-audio-engineer | #11-#15 | ⬜ |
| [#24](https://github.com/cmcintosh/mcchronicles/issues/24) | EPIC: Performance Optimization | performance, epic | optimization-arch | #10 | ⬜ |
| [#25](https://github.com/cmcintosh/mcchronicles/issues/25) | EPIC: QA & Testing | epic | qa | ALL | ⬜ |

## Dependency Graph
```
Phase 1 (Parallel):
  #10 (Visuals) ──────────────┐
  #11 (Story Act 1) ─────┐    │
  #20 (Audio) ──────┐    │    │
                    │    │    │
Phase 2:            │    │    │
  #12 (Act 2) ←─────┘    │    │
  #16 (Side Quests) ←────┘    │
  #18 (Battle System) ←───┘   │
                              │
Phase 3:                      │
  #19 (UI/UX) ←───────────────┘
  #21 (Regions) ←── #10 + #11
  #24 (Performance) ←── #10

Phase 4:
  #13 (Act 3) ←── #12
  #14 (Act 4) ←── #13
  #22 (Characters) ←── #10 + #12 + #13 + #14

Phase 5:
  #15 (Act 5) ←── #14

Phase 6:
  #17 (Optional) ←── #15 + #16

Phase 7:
  #23 (Voice) ←── #11 through #15
  #25 (QA) ←── ALL
```

## Status Legend
⬜ Not started | 🔄 In progress | ⏸️ Blocked | ✅ Complete | 🟡 Superseded