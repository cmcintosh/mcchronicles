# McChronicles — Game Design Specification

> **Target:** 20-hour JRPG with balanced progression, deep combat, and rich economy
> **Engine:** Three.js + Vite (browser-based)
> **Current State:** 5 characters, 61 abilities, 30 monsters, ~50 items, 8 regions

---

## 1. Progression System

### Level Cap
- **First playthrough:** Level 50
- **New Game+:** Level 99

### XP Curve Formula
```
XP_to_next_level = base_xp * (level ^ 1.5) * difficulty_multiplier

base_xp = 50
difficulty_multiplier = 1.0 (normal), 1.3 (hard), 0.7 (easy)
```

**XP Table (selected levels):**
| Level | XP to Next | Cumulative |
|-------|-----------|------------|
| 1 | 50 | 0 |
| 5 | 559 | 1,365 |
| 10 | 1,581 | 7,050 |
| 15 | 2,902 | 19,340 |
| 20 | 4,472 | 38,660 |
| 25 | 6,250 | 65,950 |
| 30 | 8,216 | 102,450 |
| 35 | 10,351 | 148,750 |
| 40 | 12,649 | 205,500 |
| 45 | 15,096 | 273,400 |
| 50 | 17,678 | 353,125 |

### Stat Growth Per Character
Base stats at level 1 and growth per level:

| Character | HP | MP | ATK | DEF | MAG | RES | SPD | LUCK | Role |
|-----------|-----|-----|-----|-----|-----|-----|-----|------|------|
| Ronald | 120 | 30 | 12 | 10 | 8 | 8 | 10 | 12 | Balanced/Leader |
| Grimace | 180 | 15 | 10 | 15 | 5 | 12 | 6 | 8 | Tank |
| Birdie | 90 | 25 | 8 | 6 | 10 | 8 | 16 | 14 | Scout/Speed |
| Big Mac | 160 | 20 | 14 | 14 | 6 | 10 | 7 | 6 | Off-Tank/Physical |
| Mac Tonight | 100 | 40 | 7 | 7 | 14 | 10 | 12 | 10 | Mage/Bard |
| Professor Fry | 95 | 45 | 6 | 6 | 13 | 12 | 9 | 8 | Support/Crafter |
| Happy Meal Kid | 110 | 30 | 9 | 8 | 9 | 9 | 14 | 20 | Wildcard |
| Captain Croissant | 130 | 20 | 16 | 9 | 8 | 7 | 15 | 10 | Dual-Wield DPS |

**Growth per level:** HP ×1.08, MP ×1.06, ATK ×1.05, DEF ×1.05, MAG ×1.05, RES ×1.05, SPD ×1.03, LUCK ×1.02

### Ability Unlock Schedule
- **Level 1:** 3 starting abilities (Attack, Defend, 1 unique)
- **Levels 2-10:** 1 ability every 2 levels (5 abilities)
- **Levels 11-30:** 1 ability every 3 levels (7 abilities)
- **Levels 31-50:** 1 ability every 5 levels (4 abilities)
- **Quest-gated:** 2-3 abilities per character (character quest rewards)
- **Ultimate:** 1 per character, unlocked at level 40 + story progression

**Total per character:** ~15-18 abilities
**Total across 8 characters:** ~120-144 abilities

### Party Size
- **Active in battle:** 4
- **Reserve:** 4 (can swap during battle, costs 1 turn)
- **Total party:** 8 (by end of game)

---

## 2. Battle System Design

### Turn Order: Speed-Based CTB (Conditional Turn-Based)
- Each combatant has a CT (Charge Time) that fills based on SPD stat
- When CT reaches 100, that combatant acts
- After acting, CT resets to 0 and fills again
- Faster characters act more frequently
- Turn order displayed in sidebar (next 8 turns)

### Action Types
1. **Attack** — Basic physical attack (no MP cost)
2. **Magic/Abilities** — Character-specific abilities (MP cost varies)
3. **Items** — Use consumable items (no turn cost for healing items in easy mode)
4. **Defend** — Reduce damage by 50% for 1 turn, recover 5% MP
5. **Flee** — Attempt to escape (success rate = 50% + SPD difference)
6. **Cook** — Use cooking system mid-battle (if unlocked)
7. **Swap** — Switch active party member with reserve (costs 1 turn)

### Status Effects (12 total)
| Effect | Type | Duration | Effect |
|--------|------|----------|--------|
| Poison | Debuff | 3-5 turns | 5% max HP damage per turn |
| Burn | Debuff | 3 turns | 7% max HP damage, -10% ATK |
| Freeze | Debuff | 2 turns | Cannot act, fire damage thaws |
| Stun | Debuff | 1-2 turns | Cannot act |
| Sleep | Debuff | 2-3 turns | Cannot act, damage wakes |
| Confuse | Debuff | 2-3 turns | Random actions |
| ATK Up | Buff | 3-5 turns | +25% ATK |
| DEF Up | Buff | 3-5 turns | +25% DEF |
| SPD Up | Buff | 3-5 turns | +25% SPD |
| Regen | Buff | 3-5 turns | Recover 5% HP per turn |
| Reflect | Buff | 2 turns | Reflect magic back to caster |
| Shield | Buff | 1 turn | Absorb next attack |

### Elemental System (7 elements)
| Element | Strong Against | Weak Against |
|---------|---------------|-------------|
| Fire (Frying) | Ice, Plant | Water, Earth |
| Ice (Frozen) | Wind, Earth | Fire, Blunt |
| Electric | Water, Metal | Earth, Ground |
| Holy | Dark, Undead | Shadow, Void |
| Dark | Holy, Light | Holy, Radiant |
| Salt | Slime, Water | Salt-immune |
| Neutral | None | None |

### Combo/Synergy System
- When two adjacent party members (in turn order) both attack the same enemy consecutively, a **Combo** triggers
- Combo damage = sum of both attacks × 1.25
- Special combo abilities unlock at higher levels (unique pair attacks)
- Example: Ronald + Grimace = "McSlam Combo" (1.5x damage + stun chance)

### Critical Hit System
- Base crit chance: 5% + (LUCK / 10)
- Crit damage: 1.5x normal damage
- Crit can apply to physical and magical attacks
- Some abilities have guaranteed crit conditions (e.g., from behind, vs frozen)

### Encounter Rate
- **Overworld:** Random encounter every 20-40 steps (varies by region)
- **Dungeon:** Fixed encounters + random every 15-30 steps
- **Boss rooms:** No random encounters in boss room or 1 room before
- **Safe zones:** No encounters in towns, save rooms, post-boss areas

### Preemptive/Surprise Attacks
- **Preemptive (party advantage):** 10% chance if party initiates contact. Party gets first turn, enemy CT starts at 50.
- **Surprise (enemy advantage):** 10% chance if enemy initiates. Enemy gets first turn, party CT starts at 50.
- **Ambush (guaranteed):** Story encounters where enemy is waiting.

---

## 3. Monster Design (70 monsters total)

### Monster Families (14 families × 5 variations = 70)

| Family | Regions | Level Range | Element | Weak To |
|--------|---------|------------|---------|---------|
| McNugget Goblin | Fry Valley, Happy Meal Forest | 1-15 | Neutral | Fire |
| Fry Elemental | Fry Valley | 1-12 | Fire | Ice |
| Burger Beast | Burger Highlands, Play Place Plains | 5-20 | Earth | Electric |
| Ice Cream Elemental | McFlurry Tundra | 8-25 | Ice | Fire |
| Sand Creeper | Drive-Thru Desert | 10-25 | Earth | Ice |
| Toy Soldier | Happy Meal Forest | 12-28 | Neutral | Fire |
| Tube Crawler | Play Place Plains | 15-30 | Neutral | Electric |
| Shadow Creeper | Shadow Rift, Shadow Realm | 20-45 | Dark | Holy |
| Comicfoil Grunt | All regions (Hamburglar's forces) | 5-35 | Neutral | Varies |
| Condiment Slime | Drive-Thru Desert, Play Place Plains | 8-30 | Varies | Counter-element |
| Coffee Spirit | McCafe Springs | 10-25 | Electric | Earth |
| Pastry Golem | French Quarter | 25-40 | Earth | Fire |
| Breakfast Bandit | Breakfast Kingdom (post-game) | 45-55 | Fire | Ice |
| Shadow Remnant | Shadow Realm, post-game | 40-60 | Dark | Holy |

### Boss Monsters (14 total)

| Boss | Chapter | Location | HP | Level | Phase(s) | Key Mechanics |
|------|---------|----------|-----|-------|----------|---------------|
| Corrupted Fry Golem | Ch.2 | Fry Caverns | 800 | 5 | 1 | High DEF, weak to magic |
| Fry Snatcher | Ch.2 | Fry Caverns | 1200 | 8 | 2 | Steals MP, summons adds |
| Onion Ring Wraith | Ch.4 | Mt. Double-Patty | 1800 | 12 | 1 | AoE confuse, dark element |
| McFlurry Elemental Lord | Ch.5 | Ice Palace | 3000 | 18 | 3 | Ice AoE, freeze, phase 3 enrage |
| Condiment King Ketchup | Ch.6 | Condiment Citadel | 5000 | 22 | 3 | Fire/acid, splash damage, summons Ketchup Slimes |
| Happy Meal Dragon | Ch.7 | Happy Meal Forest | 3500 | 20 | 2 | Flying (ranged only), breath weapon |
| Condiment King Mustard | Ch.8 | Mustard's Domain | 6000 | 28 | 3 | Traps, illusions, debuff stacks |
| Hamburglar's Right Hand | Ch.12 | Hideout | 7000 | 32 | 2 | Robotic, high ATK, stun immunity |
| Condiment King BBQ | Ch.13 | Shadow Rift | 8000 | 35 | 2 | DoT smoke, high DEF, counter-attacks |
| Shadow Crepe | Ch.14 | French Quarter | 6000 | 38 | 1 | Fast, sweeps, light weak |
| Condiment King Secret Sauce | Ch.15 | Secret Sauce Sanctum | 12000 | 42 | 4 | All elements, adapts strategy, multi-phase |
| Shadow Hamburglar | Ch.16 | Castle Floor 3 | 9000 | 45 | 2 | Mirrors party abilities |
| Hamburglar | Ch.17 | Heart of the Arches | 15000 | 48 | 3 | Emotional battle, mid-fight dialogue, phase 3 = McLord influence |
| McLord of Shadows | Ch.20 | McLord's Throne | 25000 | 50 | 4 | Shadow magic → Engine absorption → Shadow That Eats → Golden Arch Purification |

**Superbosses:**
| Boss | Location | HP | Level | Special |
|------|---------|-----|-------|---------|
| The Original Fry Lord | Ancient Fry Temple | 50000 | 99 | Adapts to player strategy, counters repeated tactics |
| Breakfast King | Breakfast Kingdom | 40000 | 55 | 5-phase: Cereal Slash, Egg Bomb, Pancake Press, Coffee Storm, Breakfast Finale |

---

## 4. Ability Design (120+ abilities)

### Ronald McDonald — McCrusader (Balanced/Leader) — 15 abilities
| Level | Ability | MP | Type | Power | Effect |
|-------|---------|-----|------|-------|--------|
| 1 | McSlash | 0 | Physical | 1.0x ATK | Basic attack |
| 1 | Defend | 0 | Support | — | 50% damage reduction, +5% MP |
| 1 | Inspire | 8 | Buff | — | ATK Up +25% to one ally (3 turns) |
| 3 | Happy Meal Slash | 5 | Physical | 1.3x ATK | +10% crit chance |
| 6 | McHeal | 12 | Healing | 30% MAG | Heal one ally |
| 9 | Double Arch | 15 | Physical | 1.5x ATK | Two hits |
| 12 | Rally Cry | 20 | Buff | — | ATK+SPD Up to all allies (3 turns) |
| 15 | McSlash Duo | 18 | Physical | 1.2x ATK | Hit all enemies (weak) |
| 20 | Golden Fry Lance | 22 | Physical | 2.0x ATK | Pierce DEF, fire element |
| 25 | McParty Heal | 25 | Healing | 25% MAG | Heal all allies |
| 30 | Triple Arch | 28 | Physical | 1.4x ATK | Three hits, each can crit |
| 35 | Big Mac Judgment | 30 | Magical | 1.8x MAG | Holy damage, stun chance |
| 40 | McDetermination | 35 | Buff | — | Full party: ATK+DEF Up (3 turns), cure status |
| 45 | Golden Arch Strike | 40 | Physical | 2.5x ATK | Holy/fire, guaranteed crit on frozen |
| 50 | **ULTIMATE: McWorld Finale** | 60 | Physical | 4.0x ATK | All enemies, cinematic, requires full party alive |

### Grimace — McTank (Tank/Protector) — 15 abilities
| Level | Ability | MP | Type | Power | Effect |
|-------|---------|-----|------|-------|--------|
| 1 | Purple Pound | 0 | Physical | 1.0x ATK | Basic attack |
| 1 | Defend | 0 | Support | — | 50% damage reduction, +5% MP |
| 1 | Grimace Guard | 10 | Buff | — | Taunt + DEF Up 50% (2 turns) |
| 4 | Body Slam | 8 | Physical | 1.5x ATK | Stun chance 30% |
| 8 | Grimace Fort | 15 | Buff | — | Shield on all allies (absorb 1 attack) |
| 12 | Purple Body | 18 | Physical | 1.8x ATK | Recoil 10% HP |
| 16 | Shake Quake | 20 | Physical | 1.3x ATK | All enemies, knockback |
| 20 | Grimace Slam | 22 | Physical | 2.0x ATK | +50% vs frozen |
| 25 | Guard Stance | 15 | Buff | — | DEF Up 75% (2 turns), taunt |
| 30 | Purple Titan | 28 | Buff | — | Grimace: HP +50%, DEF +50% (3 turns) |
| 35 | Shake Storm | 30 | Physical | 1.5x ATK | All enemies, 30% stun |
| 40 | Grimace Fortress | 35 | Buff | — | All allies: Shield + DEF Up (2 turns) |
| 45 | Purple Pound MAX | 38 | Physical | 2.8x ATK | Ignores 50% DEF |
| 50 | **ULTIMATE: Grimace Embrace** | 55 | Support | — | Full party: Full HP heal + Shield + Regen (3 turns) |

### Birdie — SkyScout (Speed/DPS) — 14 abilities
| Level | Ability | MP | Type | Power | Effect |
|-------|---------|-----|------|-------|--------|
| 1 | Peck | 0 | Physical | 1.0x ATK | Basic attack |
| 1 | Defend | 0 | Support | — | 50% damage reduction |
| 1 | Feather Darts | 6 | Physical | 0.8x ATK | Hit 2 enemies |
| 4 | Sky Dance | 10 | Buff | — | Birdie: SPD Up 50% + evasion Up (3 turns) |
| 8 | Dive Bomb | 12 | Physical | 1.8x ATK | From above, ignores DEF |
| 12 | Morning Song | 14 | Healing | 20% MAG | Heal one ally + cure sleep/confuse |
| 16 | Feather Storm | 18 | Physical | 1.0x ATK | Hit all enemies (4 hits) |
| 20 | Hurricane Feathers | 22 | Physical | 1.5x ATK | All enemies, wind, 20% confuse |
| 25 | Dawn Chorus | 20 | Buff | — | All allies: SPD Up + Regen (3 turns) |
| 30 | Eagle Dive | 25 | Physical | 2.2x ATK | Guaranteed crit if target < 50% HP |
| 35 | Sky Dance MAX | 22 | Buff | — | Birdie: SPD Up 100% + 50% evasion (2 turns) |
| 40 | Blue Moon | 30 | Magical | 1.8x MAG | Ice damage, freeze chance |
| 45 | Sunny Side Up | 35 | Healing | 40% MAG | Heal all allies + cure burn/poison |
| 50 | **ULTIMATE: Sky Legion** | 50 | Physical | 3.5x ATK | All enemies, 5 hits, each can crit, +50% vs flying |

### Officer Big Mac — McTank/Physical — 15 abilities
(Similar structure — law enforcement themed attacks, defensive abilities, judgment mechanics)

### Mac Tonight — MoonBard (Mage/Bard) — 15 abilities
(Music-themed magical attacks, buff songs, debuff songs, moon-themed spells)

### Professor Fry — FryMage (Support/Crafter) — 15 abilities
(Lightning spells, invention-themed buffs/debuffs, crafting-related abilities, area denial)

### Happy Meal Kid — Wildcard — 12 abilities
(Random effects from Happy Meal Box: damage, heal, buff, debuff, summon toy, random item)

### Captain Croissant — DualBlade (Melee DPS) — 15 abilities
(Dual-wield attacks, light element, mobility skills, flanking bonuses)

### Combo Abilities (8 pair combos)
| Pair | Ability | MP | Effect |
|------|---------|-----|--------|
| Ronald + Grimace | McSlam Combo | 20 | 1.5x both ATK, stun chance |
| Ronald + Birdie | Sky Arch | 18 | Aerial + ground combo, high crit |
| Grimace + Big Mac | Fortress Break | 25 | 2x physical, ignores DEF |
| Mac Tonight + Professor Fry | Storm Symphony | 30 | Electric + sound, AoE |
| Birdie + Croissant | Twin Sky | 22 | Dual aerial slash, bleed |
| Happy Meal Kid + Any | Surprise! | 15 | Random combo effect |
| Big Mac + Croissant | Law Blade | 25 | High damage, marks target |
| Ronald + All | McWorld Combo | 80 | Requires all 4 active, massive damage |

---

## 5. Equipment System

### Weapon Types (5 categories, 8 character-specific)
| Character | Weapon Type | Tiers (buy/find) |
|-----------|-------------|-------------------|
| Ronald | Fry Sword | Wooden → Iron → Silver → Golden → McLegendary |
| Grimace | McHammer | Plastic → Stone → Iron → Steel → Purple Titan |
| Birdie | Feather Daggers | Wooden → Sharp → Silver → Storm → Sky King |
| Big Mac | Nightstick | Wooden → Iron → Steel → Officer → Commander |
| Mac Tonight | Moon Sax | Student → Jazz → Soul → Moonlight → Cosmic |
| Professor Fry | Fry-Launcher | Basic → Modified → Advanced → Prototype → Master |
| Happy Meal Kid | Happy Box | Small → Medium → Large → Deluxe → Mystery |
| Captain Croissant | Twin Bread Blades | Butter → Croissant → Brioche → Baguette → Éclair |

### Armor (3 types × 3 tiers = 9 base armors)
| Type | Tier 1 (Lv5) | Tier 2 (Lv20) | Tier 3 (Lv40) |
|------|-------------|---------------|---------------|
| Light | Paper Armor (DEF+3) | Silk Vest (DEF+8) | Sky Cloak (DEF+15, SPD+5) |
| Medium | Cotton Uniform (DEF+5) | Leather Armor (DEF+12) | Battle Suit (DEF+22, ATK+3) |
| Heavy | Iron Plate (DEF+8) | Steel Armor (DEF+18) | McFortress Plate (DEF+30, HP+50) |

### Accessories (12 types)
| Accessory | Effect | Source |
|-----------|--------|--------|
| Ring of Strength | +5 ATK | Shop (Lv15) |
| Ring of Guarding | +5 DEF | Shop (Lv15) |
| Amulet of Mana | +15 MP | Shop (Lv20) |
| Charm of Speed | +5 SPD | Side quest SQ27 |
| Lucky Horseshoe | +10 LUCK | Hidden discovery |
| Arch Charm | +10% all stats | Condiment King bounty |
| Frost Charm | +25% Ice RES | SQ08 |
| Fire Charm | +25% Fire RES | Ketchup defeat |
| Shadow Cloak | +25% Dark RES | SQ13 |
| Detective Badge | +10% EXP | SQ28 |
| Moon Sheet Music | +15 MAG | SQ29 |
| Founder's Medal | +20% EXP | SQ37 |

### Set Bonuses
| Set (3 pieces) | Bonus |
|----------------|--------|
| Golden Set (weapon+armor+accessory) | +15% all stats, +10% crit |
| Officer Set (weapon+heavy armor+badge) | +20% DEF, taunt effectiveness +50% |
| Sky Set (daggers+light armor+charm) | +25% SPD, evasion +20% |
| Scholar Set (launcher+medium armor+amulet) | +20% MAG, MP regen +2/turn |

---

## 6. Item/Economy Design (200+ items)

### Consumables (40 items)
| Item | Effect | Price | Where to Buy |
|------|--------|-------|--------------|
| Small Fries | Restore 30 HP | 20g | All shops |
| Medium Fries | Restore 60 HP | 50g | All shops |
| Large Fries | Restore 100 HP | 100g | All shops |
| Small Shake | Restore 20 MP | 30g | All shops |
| Medium Shake | Restore 40 MP | 70g | All shops |
| Large Shake | Restore 80 MP | 150g | All shops |
| Happy Meal | Restore 50 HP + 50 MP | 120g | All shops |
| Big Mac | Restore 150 HP | 200g | McCafe Springs+ |
| Quarter Pounder | Restore 100 HP, +5 ATK (3 turns) | 180g | McCafe Springs+ |
| McRib | Restore 80 HP, +10 ATK (2 turns) | 200g | Drive-Thru Desert+ |
| McFlurry | Restore 40 MP, cure burn | 80g | McFlurry Tundra+ |
| McMocha | Restore 30 MP, +10% SPD (5 turns) | 90g | McCafe Springs+ |
| Espresso Elixir | Full MP restore | 300g | McCafe Springs only |
| Revival Burger | Revive KO'd ally at 50% HP | 250g | All shops |
| Grand Mac | Restore 200 HP | 350g | McCafe Springs+ |
| McWorld Special | Full HP+MP to party, all buffs | 500g | Post-game only |
| Antidote | Cure poison | 15g | All shops |
| Eye Drops | Cure blind/confuse | 15g | All shops |
| Ice Pack | Cure burn | 15g | All shops |
| Heater | Cure freeze | 15g | All shops |
| Smelling Salts | Cure stun/sleep | 20g | All shops |
| Calm Burger | Cure confuse/berserk | 25g | All shops |
| Remedy | Cure all status | 100g | McCafe Springs+ |
| ... (16 more: tier variants, special consumables) | | | |

### Key Items (20 items)
| Item | Chapter | Use |
|------|---------|-----|
| Hamburglar Emblem | Ch.2 | Proof of Hamburglar's involvement |
| Condiment King Map | Ch.6 | Shows all 4 CK locations |
| Robble Detector | Ch.7 | Detects Robble Engine activity |
| Hamburglar's Letters | Ch.11 | Backstory lore items (5 letters) |
| Shadow Shard | Ch.13 | Portal energy sample |
| French Quarter Key | Ch.14 | Access to French Quarter |
| Castle Siege Plans | Ch.15 | Assault plans for Golden Arches Castle |
| Heart of the Arches Key | Ch.16 | Access to final dungeon |
| ... (12 more quest-specific key items) | | |

### Crafting Materials (30 items)
| Material | Source | Use |
|----------|--------|-----|
| Patty | Monster drops (Burger Beasts) | Cooking |
| Cheese | Shop, drops (Burger Beasts) | Cooking |
| Bun | Shop, drops (McNugget Goblins) | Cooking |
| Lettuce | Gather (Fry Valley, Happy Meal Forest) | Cooking |
| Potato | Gather (Fry Valley) | Cooking |
| Salt | Gather (Drive-Thru Desert) | Cooking |
| Ice Cream | Gather (McFlurry Tundra) | Cooking |
| Coffee Bean | Gather (McCafe Springs caves) | Cooking |
| Nugget Meat | Drops (McNugget Goblins) | Cooking |
| Rib | Drops (Burger Beasts, desert enemies) | Cooking |
| Fish | Gather (McCafe Springs) | Cooking |
| BBQ Sauce | Drops (Condiment King Ketchup) | Cooking |
| Purple Herb | Gather (Happy Meal Forest) | Cooking |
| Mystery Meat | Drops (various) | Cooking |
| ... (15 more: special ingredients, regional gathers) | | |

### Monster Gold Drops
| Monster Level | Gold Drop |
|---------------|-----------|
| 1-10 | 5-15g |
| 11-20 | 15-40g |
| 21-30 | 40-80g |
| 31-40 | 80-150g |
| 41-50 | 150-300g |
| 51-99 (post-game) | 300-600g |

### Treasure Chest Values
| Chest Type | Gold Range | Item Rarity |
|------------|-----------|-------------|
| Wooden | 10-50g | Common |
| Iron | 50-150g | Common-Uncommon |
| Silver | 150-400g | Uncommon-Rare |
| Golden | 400-1000g | Rare-Epic |
| McLegendary | 1000-2500g | Epic-Legendary |

---

## 7. Crafting/Cooking System

### Overview
McDonald's-themed cooking system. Collect ingredients from monster drops and world gathering. Cook at any kitchen station (McCafe Springs, Toy Village, French Quarter, portable camp unlocked by Professor Fry).

### Recipes (15 total — see issue #17 for full list)
- Cooked food provides healing + buffs
- Some recipes are quest rewards, some found, some bought
- Portable camp: unlocked Ch.7 with Professor Fry, allows cooking in dungeons (1 use per dungeon)

### Cooking Mini-Game
- Optional timing mini-game when cooking
- Perfect timing = 1.2x effect
- Failed timing = normal effect (no penalty)
- Can skip mini-game in settings

---

## 8. Familiar/Pet System

### Overview
Collect 10 Fry Kid familiars that provide passive bonuses. Found in regions, earned from quests, or assembled from fragments.

### Collection
- Each familiar is found in a specific location or earned from a quest
- Talk to Familiar Keeper NPC in McCafe Springs to manage familiars
- Max 3 active familiars at once (passive bonuses apply to whole party)
- Familiars don't participate in combat directly — passive bonuses only

### Familiar Details (see issue #17 for full list)

---

## 9. Nemesis System Integration

### Overview
The existing Nemesis System generates recurring enemies that remember the player.
- **Integration:** Nemesis enemies appear as enhanced random encounters
- **Trigger:** After defeating a Condiment King, a nemesis version of that element appears
- **Escalation:** Each time you defeat a nemesis, they return stronger with new abilities
- **Reward:** Defeating a nemesis 3 times yields a unique accessory
- **Post-game:** Nemesis versions of all bosses available in Shadow Realm

---

## 10. Difficulty Curve

### Difficulty Over Playtime (Text Graph)
```
Difficulty
100% |                                                    ____McLord
     |                                              ____/    (4 phases)
 80% |                                    ____ Secret Sauce
     |                              ____/         (multi-phase)
 60% |                    ____ Hamburglar           (emotional)
     |              ____/     /
 40% |        ____ BBQ          Shadow Hamburglar
     |  ____/    /              /
 20% | Ketchup  Mustard    Castle
     | /    \  /    \     /
  0% | Start  Fry   Tundra  Desert  Forest Plains  Rift Quarter Labyrinth Castle Heart Shadow
     +----------------------------------------------------------------------->
      0h     2h     4h      6h     8h    10h    12h   14h    15h    16h   18h   20h
```

### Difficulty Spikes
1. **Ch.6 (Ketchup):** First real boss — teaches boss mechanics
2. **Ch.9 (Hamburglar):** Dramatic shift — party loses a member
3. **Ch.13 (BBQ + McLord reveal):** Reality warping — new mechanics
4. **Ch.15 (Secret Sauce):** Hardest non-final boss — 4 phases
5. **Ch.17 (Hamburglar):** Emotional battle — unconventional mechanics
6. **Ch.20 (McLord):** Final boss — 4 phases, requires all systems

### Save Point Distribution
- Every dungeon: save point at entrance, before boss room
- Overworld: save points at towns and key landmarks
- No save points during boss battles (except phase transitions in final boss)
- Auto-save: after every story beat and region transition

### Game Over Handling
- **Normal:** Party respawns at last save point with full HP/MP. Lose 10% of current gold.
- **Easy:** Party respawns at last save point, no penalty.
- **Hard:** Party respawns at last save point, lose 20% gold and 10% XP toward next level.

---

## 11. Side Quest Design Framework

### Categories
| Category | Count | Reward Type | Avg Time |
|----------|-------|-------------|----------|
| Fetch | 10 | Gold + items | 12-25 min |
| Bounty | 8 | Gold + equipment | 20-30 min |
| Puzzle | 7 | Gold + unique items | 15-30 min |
| Character | 8 | Bond + unique ability/item | 15-30 min |
| Hidden | 7 | Gold + rare items | 15-40 min |

### Trigger System
- Quest board in McCafe Springs (bounties, fetch)
- NPC dialogue in towns (character quests, fetch)
- Discovering hidden areas (hidden quests)
- Story progression unlocks (puzzle quests)

### Reward Scaling
- Quest rewards scale with region level
- Character quest rewards: bond level +5, unique item
- Hidden discovery rewards: rare/epic items, lore

---

## Appendix: Stat Formulas

### Damage Calculation
```
Physical damage = (ATK * abilityPower * critMultiplier * elementMultiplier) - (DEF * 0.5)
Magical damage = (MAG * abilityPower * critMultiplier * elementMultiplier) - (RES * 0.5)
elementMultiplier = 1.5 (weak), 0.75 (resist), 0.0 (immune), 1.0 (neutral)
critMultiplier = 1.5 (crit), 1.0 (normal)
```

### Healing Calculation
```
Heal amount = MAG * abilityPower * (1 + LUCK * 0.01)
```

### XP Reward
```
XP = monsterBaseXP * (1 + (monsterLevel - partyLevel) * 0.1)
Minimum XP = monsterBaseXP * 0.5
```

---

*Document Version: 1.0*
*Created: 2026-11-10*
*Author: Spock (CTO), Wembassy*
*Status: READY FOR IMPLEMENTATION*