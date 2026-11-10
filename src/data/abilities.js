// Ability database — all skills and spells for party members and enemies

export const ELEMENTS = {
  fire: { name: 'Fire', color: 0xff4400, icon: '🔥' },
  ice: { name: 'Ice', color: 0x44aaff, icon: '❄️' },
  water: { name: 'Water', color: 0x0066ff, icon: '💧' },
  earth: { name: 'Earth', color: 0x8b6914, icon: '🪨' },
  holy: { name: 'Holy', color: 0xffdd44, icon: '✨' },
  dark: { name: 'Dark', color: 0x6633aa, icon: '🌑' },
  air: { name: 'Air', color: 0xaaffcc, icon: '🌬️' },
  fry: { name: 'Fry', color: 0xffaa00, icon: '🍟' },
  physical: { name: 'Physical', color: 0xcccccc, icon: '⚔️' },
};

export const STATUS_EFFECTS = {
  burn: { name: 'Burn', color: 0xff4400, duration: 3, tickDamage: 0.05 },
  freeze: { name: 'Freeze', color: 0x44aaff, duration: 2, skipTurn: true },
  slow: { name: 'Slow', color: 0x6688aa, duration: 3, atbMultiplier: 0.5 },
  sleep: { name: 'Sleep', color: 0xaaaaff, duration: 2, skipTurn: true, wakeOnDamage: true },
  poison: { name: 'Poison', color: 0x88cc44, duration: 4, tickDamage: 0.08 },
  stun: { name: 'Stunned', color: 0xffcc00, duration: 1, skipTurn: true },
  atk_up: { name: 'ATK Up', color: 0xff6666, duration: 3, statMod: { atk: 1.3 } },
  atk_down: { name: 'ATK Down', color: 0x6666ff, duration: 3, statMod: { atk: 0.7 } },
  def_up: { name: 'DEF Up', color: 0x66ff66, duration: 3, statMod: { def: 1.3 } },
  def_down: { name: 'DEF Down', color: 0xff66ff, duration: 3, statMod: { def: 0.7 } },
  agi_up: { name: 'AGI Up', color: 0x66ffff, duration: 3, statMod: { agi: 1.3 } },
  agi_down: { name: 'AGI Down', color: 0xff9966, duration: 3, statMod: { agi: 0.7 } },
  taunt: { name: 'Taunt', color: 0xff4444, duration: 2, forcesTarget: true },
  cover: { name: 'Cover', color: 0x44ff44, duration: 2, redirectsDamage: true },
  regen: { name: 'Regen', color: 0x44ff88, duration: 3, tickHeal: 0.05 },
  mp_regen: { name: 'MP Regen', color: 0x4488ff, duration: 3, tickMP: 0.1 },
};

export const ABILITY_TYPES = {
  ATTACK: 'attack',
  HEAL: 'heal',
  BUFF: 'buff',
  DEBUFF: 'debuff',
  AOE: 'aoe',
  UTILITY: 'utility',
  ULTIMATE: 'ultimate',
};

export const ABILITIES = {
  // === Ronald McDonald — Fry-Mage ===
  fry_storm: {
    id: 'fry_storm', name: 'Fry Storm', character: 'ronald', type: 'aoe',
    element: 'fire', mpCost: 12, power: 0.8, target: 'enemies',
    description: 'Rain fiery fries on all enemies.',
    unlockLevel: 1,
  },
  ketchup_heal: {
    id: 'ketchup_heal', name: 'Ketchup Heal', character: 'ronald', type: 'heal',
    element: 'fire', mpCost: 8, power: 1.5, target: 'ally',
    description: 'Restore HP to one ally with ketchup magic.',
    unlockLevel: 1,
  },
  mustard_shield: {
    id: 'mustard_shield', name: 'Mustard Shield', character: 'ronald', type: 'buff',
    element: 'fire', mpCost: 10, power: 0, target: 'ally',
    status: ['def_up'], description: 'Boost an ally\'s defense with golden mustard.',
    unlockLevel: 5,
  },
  fry_lance: {
    id: 'fry_lance', name: 'Fry Lance', character: 'ronald', type: 'attack',
    element: 'fire', mpCost: 14, power: 1.6, target: 'enemy',
    description: 'A piercing lance of solidified fry grease.',
    unlockLevel: 10,
  },
  ketchup_splash: {
    id: 'ketchup_splash', name: 'Ketchup Splash', character: 'ronald', type: 'heal',
    element: 'fire', mpCost: 18, power: 1.2, target: 'allies',
    description: 'Heal the whole party with a wave of ketchup.',
    unlockLevel: 15,
  },
  happy_meal: {
    id: 'happy_meal', name: 'Happy Meal', character: 'ronald', type: 'heal',
    element: 'holy', mpCost: 30, power: 2.0, target: 'allies',
    status: ['regen'], description: 'Full party heal with a side of joy.',
    unlockLevel: 20,
  },
  mustard_barrier: {
    id: 'mustard_barrier', name: 'Mustard Barrier', character: 'ronald', type: 'buff',
    element: 'fire', mpCost: 22, power: 0, target: 'allies',
    status: ['def_up'], description: 'Party-wide defense boost.',
    unlockLevel: 30,
  },
  golden_fry_lance: {
    id: 'golden_fry_lance', name: 'Golden Fry Lance', character: 'ronald', type: 'ultimate',
    element: 'fire', mpCost: 45, power: 3.5, target: 'enemy',
    status: ['burn'], description: 'A legendary golden fry that pierces all defenses.',
    unlockLevel: 40,
  },
  mc_flurry_blizzard: {
    id: 'mc_flurry_blizzard', name: 'McFlurry Blizzard', character: 'ronald', type: 'ultimate',
    element: 'ice', mpCost: 50, power: 2.5, target: 'enemies',
    status: ['freeze'], description: 'An ice storm of McFlurry proportions.',
    unlockLevel: 50,
  },

  // === Grimace — McTank ===
  grimace_slam: {
    id: 'grimace_slam', name: 'Grimace Slam', character: 'grimace', type: 'attack',
    element: 'earth', mpCost: 5, power: 1.8, target: 'enemy',
    description: 'A heavy body slam.',
    unlockLevel: 1,
  },
  purple_body: {
    id: 'purple_body', name: 'Purple Body', character: 'grimace', type: 'buff',
    element: 'earth', mpCost: 8, power: 0, target: 'self',
    status: ['taunt', 'def_up'], description: 'Taunt enemies and boost DEF.',
    unlockLevel: 1,
  },
  grimace_guard: {
    id: 'grimace_guard', name: 'Grimace Guard', character: 'grimace', type: 'buff',
    element: 'earth', mpCost: 6, power: 0, target: 'ally',
    status: ['cover'], description: 'Take damage meant for an ally.',
    unlockLevel: 5,
  },
  shake_quake: {
    id: 'shake_quake', name: 'Shake Quake', character: 'grimace', type: 'aoe',
    element: 'earth', mpCost: 15, power: 1.0, target: 'enemies',
    status: ['stun'], description: 'Ground-shaking AoE that may stun.',
    unlockLevel: 10,
  },
  purple_pound: {
    id: 'purple_pound', name: 'Purple Pound', character: 'grimace', type: 'attack',
    element: 'earth', mpCost: 12, power: 2.2, target: 'enemy',
    status: ['def_down'], description: 'A crushing blow that lowers enemy DEF.',
    unlockLevel: 15,
  },
  grimace_roar: {
    id: 'grimace_roar', name: 'Grimace Roar', character: 'grimace', type: 'debuff',
    element: 'earth', mpCost: 14, power: 0, target: 'enemies',
    status: ['atk_down'], description: 'A terrifying roar that weakens all enemies.',
    unlockLevel: 20,
  },
  shake_storm: {
    id: 'shake_storm', name: 'Shake Storm', character: 'grimace', type: 'aoe',
    element: 'earth', mpCost: 25, power: 1.5, target: 'enemies',
    status: ['slow'], description: 'A storm of milkshakes slows all enemies.',
    unlockLevel: 30,
  },
  grimace_fortress: {
    id: 'grimace_fortress', name: 'Grimace Fortress', character: 'grimace', type: 'buff',
    element: 'earth', mpCost: 20, power: 0, target: 'allies',
    status: ['def_up', 'cover'], description: 'Become the ultimate fortress for the party.',
    unlockLevel: 40,
  },
  purple_titan: {
    id: 'purple_titan', name: 'Purple Titan', character: 'grimace', type: 'ultimate',
    element: 'earth', mpCost: 45, power: 3.0, target: 'enemies',
    status: ['stun', 'def_down'], description: 'Grimace becomes a titan and crushes all.',
    unlockLevel: 50,
  },

  // === Birdie — Sky-Scout ===
  feather_darts: {
    id: 'feather_darts', name: 'Feather Darts', character: 'birdie', type: 'attack',
    element: 'air', mpCost: 4, power: 0.6, target: 'enemy', hits: 3,
    description: 'Throw 3 feather darts at one enemy.',
    unlockLevel: 1,
  },
  breakfast_blitz: {
    id: 'breakfast_blitz', name: 'Breakfast Blitz', character: 'birdie', type: 'attack',
    element: 'air', mpCost: 8, power: 1.4, target: 'enemy',
    description: 'A speedy rush attack that strikes first.',
    unlockLevel: 1, priority: true,
  },
  egg_bomb: {
    id: 'egg_bomb', name: 'Egg Bomb', character: 'birdie', type: 'aoe',
    element: 'air', mpCost: 14, power: 1.1, target: 'enemies',
    status: ['atk_down'], description: 'Bomb all enemies with explosive eggs.',
    unlockLevel: 5,
  },
  morning_song: {
    id: 'morning_song', name: 'Morning Song', character: 'birdie', type: 'buff',
    element: 'air', mpCost: 10, power: 0, target: 'allies',
    status: ['agi_up'], description: 'A cheerful song that boosts party AGI.',
    unlockLevel: 10,
  },
  dive_bomb: {
    id: 'dive_bomb', name: 'Dive Bomb', character: 'birdie', type: 'attack',
    element: 'air', mpCost: 12, power: 1.9, target: 'enemy',
    description: 'A devastating aerial dive attack.',
    unlockLevel: 15,
  },
  dawn_chorus: {
    id: 'dawn_chorus', name: 'Dawn Chorus', character: 'birdie', type: 'debuff',
    element: 'air', mpCost: 16, power: 0, target: 'enemies',
    status: ['agi_down'], description: 'A chorus that slows all enemies.',
    unlockLevel: 20,
  },
  sky_dance: {
    id: 'sky_dance', name: 'Sky Dance', character: 'birdie', type: 'buff',
    element: 'air', mpCost: 18, power: 0, target: 'allies',
    status: ['agi_up', 'atk_up'], description: 'A dance that boosts ATK and AGI.',
    unlockLevel: 30,
  },
  hurricane_feathers: {
    id: 'hurricane_feathers', name: 'Hurricane Feathers', character: 'birdie', type: 'aoe',
    element: 'air', mpCost: 28, power: 1.8, target: 'enemies',
    hits: 2, description: 'A hurricane of feathers hits all enemies twice.',
    unlockLevel: 40,
  },
  sunny_side_up: {
    id: 'sunny_side_up', name: 'Sunny Side Up', character: 'birdie', type: 'ultimate',
    element: 'holy', mpCost: 45, power: 2.8, target: 'enemies',
    status: ['burn', 'atk_down'], description: 'A solar egg explosion sears all enemies.',
    unlockLevel: 50,
  },

  // === Officer Big Mac — McCrusader ===
  big_mac_smash: {
    id: 'big_mac_smash', name: 'Big Mac Smash', character: 'bigmac', type: 'attack',
    element: 'holy', mpCost: 6, power: 1.7, target: 'enemy',
    description: 'A holy smash with the sesame sword.',
    unlockLevel: 1,
  },
  sesame_shield: {
    id: 'sesame_shield', name: 'Sesame Shield', character: 'bigmac', type: 'buff',
    element: 'holy', mpCost: 12, power: 0, target: 'allies',
    status: ['def_up'], description: 'Party-wide defense boost with sesame seeds.',
    unlockLevel: 1,
  },
  mcgriddle_charge: {
    id: 'mcgriddle_charge', name: 'McGriddle Charge', character: 'bigmac', type: 'attack',
    element: 'holy', mpCost: 10, power: 1.5, target: 'enemy',
    description: 'A charging rush attack.',
    unlockLevel: 5,
  },
  special_sauce_smite: {
    id: 'special_sauce_smite', name: 'Special Sauce Smite', character: 'bigmac', type: 'aoe',
    element: 'holy', mpCost: 18, power: 1.2, target: 'enemies',
    description: 'Holy AoE smite with special sauce.',
    unlockLevel: 10,
  },
  lettuce_wall: {
    id: 'lettuce_wall', name: 'Lettuce Wall', character: 'bigmac', type: 'buff',
    element: 'holy', mpCost: 14, power: 0, target: 'allies',
    status: ['def_up', 'regen'], description: 'A wall of lettuce that heals and protects.',
    unlockLevel: 15,
  },
  triple_stack: {
    id: 'triple_stack', name: 'Triple Stack', character: 'bigmac', type: 'attack',
    element: 'holy', mpCost: 16, power: 2.0, target: 'enemy', hits: 3,
    description: 'Three consecutive holy strikes.',
    unlockLevel: 20,
  },
  sesame_sanctuary: {
    id: 'sesame_sanctuary', name: 'Sesame Sanctuary', character: 'bigmac', type: 'buff',
    element: 'holy', mpCost: 22, power: 0, target: 'allies',
    status: ['def_up', 'regen'], description: 'A sanctuary that heals and shields.',
    unlockLevel: 30,
  },
  big_mac_judgment: {
    id: 'big_mac_judgment', name: 'Big Mac Judgment', character: 'bigmac', type: 'attack',
    element: 'holy', mpCost: 30, power: 2.8, target: 'enemy',
    status: ['def_down'], description: 'A judgment strike that shatters defenses.',
    unlockLevel: 40,
  },
  special_sauce_storm: {
    id: 'special_sauce_storm', name: 'Special Sauce Storm', character: 'bigmac', type: 'ultimate',
    element: 'holy', mpCost: 50, power: 3.2, target: 'enemies',
    status: ['def_down'], description: 'The ultimate special sauce storm.',
    unlockLevel: 50,
  },

  // === Mac Tonight — Moon-Bard ===
  moon_melody: {
    id: 'moon_melody', name: 'Moon Melody', character: 'mactonight', type: 'buff',
    element: 'dark', mpCost: 8, power: 0, target: 'allies',
    status: ['atk_up'], description: 'A melody that boosts party ATK.',
    unlockLevel: 1,
  },
  nightjam: {
    id: 'nightjam', name: 'Nightjam', character: 'mactonight', type: 'debuff',
    element: 'dark', mpCost: 8, power: 0, target: 'enemies',
    status: ['atk_down'], description: 'A jam that lowers enemy ATK.',
    unlockLevel: 1,
  },
  mac_jazz: {
    id: 'mac_jazz', name: 'Mac Jazz', character: 'mactonight', type: 'buff',
    element: 'dark', mpCost: 10, power: 0, target: 'allies',
    status: ['mp_regen'], description: 'Smooth jazz that regenerates MP.',
    unlockLevel: 5,
  },
  moonlight_serenade: {
    id: 'moonlight_serenade', name: 'Moonlight Serenade', character: 'mactonight', type: 'utility',
    element: 'dark', mpCost: 14, power: 0.5, target: 'enemies',
    status: ['sleep'], description: 'A serenade that puts enemies to sleep and heals party.',
    unlockLevel: 10,
  },
  blue_moon: {
    id: 'blue_moon', name: 'Blue Moon', character: 'mactonight', type: 'heal',
    element: 'dark', mpCost: 16, power: 1.3, target: 'ally',
    status: ['regen'], description: 'Heal an ally and grant regen.',
    unlockLevel: 15,
  },
  midnight_blues: {
    id: 'midnight_blues', name: 'Midnight Blues', character: 'mactonight', type: 'debuff',
    element: 'dark', mpCost: 18, power: 0, target: 'enemies',
    status: ['atk_down', 'def_down'], description: 'A blues number that weakens all enemies.',
    unlockLevel: 20,
  },
  eclipse: {
    id: 'eclipse', name: 'Eclipse', character: 'mactonight', type: 'utility',
    element: 'dark', mpCost: 22, power: 0, target: 'enemies',
    status: ['stun', 'agi_down'], description: 'Block out the sun, stunning all enemies.',
    unlockLevel: 30,
  },
  moon_sonata: {
    id: 'moon_sonata', name: 'Moon Sonata', character: 'mactonight', type: 'buff',
    element: 'dark', mpCost: 28, power: 0, target: 'allies',
    status: ['atk_up', 'def_up', 'agi_up'], description: 'A grand sonata that boosts all stats.',
    unlockLevel: 40,
  },
  lunar_eclipse: {
    id: 'lunar_eclipse', name: 'Lunar Eclipse', character: 'mactonight', type: 'ultimate',
    element: 'dark', mpCost: 50, power: 2.5, target: 'enemies',
    status: ['stun', 'atk_down', 'def_down'], description: 'The ultimate performance.',
    unlockLevel: 50,
  },

  // === Enemy Abilities ===
  enemy_bite: {
    id: 'enemy_bite', name: 'Bite', type: 'attack', element: 'physical',
    mpCost: 0, power: 1.0, target: 'enemy', description: 'A basic bite.',
  },
  enemy_swarm: {
    id: 'enemy_swarm', name: 'Swarm', type: 'attack', element: 'physical',
    mpCost: 0, power: 0.5, target: 'enemy', hits: 3, description: 'Multiple weak hits.',
  },
  enemy_slam: {
    id: 'enemy_slam', name: 'Slam', type: 'attack', element: 'physical',
    mpCost: 0, power: 1.5, target: 'enemy', description: 'A heavy slam.',
  },
  enemy_fire_breath: {
    id: 'enemy_fire_breath', name: 'Fire Breath', type: 'aoe', element: 'fire',
    mpCost: 0, power: 1.0, target: 'enemies', status: ['burn'], description: 'Fire AoE.',
  },
  enemy_ice_breath: {
    id: 'enemy_ice_breath', name: 'Ice Breath', type: 'aoe', element: 'ice',
    mpCost: 0, power: 0.9, target: 'enemies', status: ['slow'], description: 'Ice AoE.',
  },
  enemy_water_jet: {
    id: 'enemy_water_jet', name: 'Water Jet', type: 'attack', element: 'water',
    mpCost: 0, power: 1.3, target: 'enemy', description: 'A jet of water.',
  },
  enemy_heal: {
    id: 'enemy_heal', name: 'Heal', type: 'heal', element: 'holy',
    mpCost: 0, power: 1.0, target: 'ally', description: 'Heal an ally.',
  },
  enemy_buff: {
    id: 'enemy_buff', name: 'Battle Cry', type: 'buff', element: 'physical',
    mpCost: 0, power: 0, target: 'allies', status: ['atk_up'], description: 'ATK buff.',
  },
  enemy_debuff: {
    id: 'enemy_debuff', name: 'Intimidate', type: 'debuff', element: 'dark',
    mpCost: 0, power: 0, target: 'enemies', status: ['def_down'], description: 'DEF debuff.',
  },
  enemy_poison_spit: {
    id: 'enemy_poison_spit', name: 'Poison Spit', type: 'attack', element: 'water',
    mpCost: 0, power: 0.8, target: 'enemy', status: ['poison'], description: 'Poison attack.',
  },
  enemy_drain: {
    id: 'enemy_drain', name: 'MP Drain', type: 'utility', element: 'dark',
    mpCost: 0, power: 0, target: 'enemy', drainMP: 15, description: 'Drain MP from target.',
  },
  enemy_fizz: {
    id: 'enemy_fizz', name: 'Fizz Blast', type: 'aoe', element: 'water',
    mpCost: 0, power: 1.1, target: 'enemies', status: ['atk_down'], description: 'Carbonated AoE.',
  },
  enemy_lightning: {
    id: 'enemy_lightning', name: 'Spark', type: 'attack', element: 'air',
    mpCost: 0, power: 1.4, target: 'enemy', description: 'Electric spark.',
  },
  enemy_steal: {
    id: 'enemy_steal', name: 'Steal', type: 'utility', element: 'dark',
    mpCost: 0, power: 0, target: 'enemy', description: 'Steals items or HP.',
  },
  enemy_acid: {
    id: 'enemy_acid', name: 'Acid Splash', type: 'attack', element: 'water',
    mpCost: 0, power: 1.0, target: 'enemy', status: ['def_down'], description: 'Acid that lowers DEF.',
  },
};

// Helper: get abilities for a character at a given level
export function getAbilitiesForLevel(characterId, level) {
  const character = CHARACTERS_DATA[characterId];
  if (!character) return [];
  return character.abilityTree
    .filter((entry) => level >= entry.level)
    .map((entry) => ABILITIES[entry.ability])
    .filter(Boolean);
}

// Re-export characters for ability tree lookup
import { CHARACTERS as CHARACTERS_DATA } from './characters.js';
