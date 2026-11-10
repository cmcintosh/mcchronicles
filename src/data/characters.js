// Character definitions — stats, abilities, growth curves, equipment

export const CHARACTERS = {
  ronald: {
    id: 'ronald',
    name: 'Ronald McDonald',
    title: 'The Fry-Mage',
    role: 'Healer + Elemental Magic',
    description: 'A cheerful mage with fiery fries and healing ketchup. The heart of the party.',
    color: 0xff0000,
    accentColor: 0xffff00,
    baseStats: {
      hp: 80, mp: 60, atk: 15, def: 12, agi: 14, mag: 20,
    },
    growth: {
      hp: 8, mp: 6, atk: 2.2, def: 1.8, agi: 2.0, mag: 3.0,
    },
    element: 'fire',
    weapon: 'Fry Wand',
    armor: 'Happy Meal Cloak',
    accessory: 'Golden Arch Charm',
    abilityTree: [
      { level: 1, ability: 'fry_storm' },
      { level: 1, ability: 'ketchup_heal' },
      { level: 5, ability: 'mustard_shield' },
      { level: 10, ability: 'fry_lance' },
      { level: 15, ability: 'ketchup_splash' },
      { level: 20, ability: 'happy_meal' },
      { level: 30, ability: 'mustard_barrier' },
      { level: 40, ability: 'golden_fry_lance' },
      { level: 50, ability: 'mc_flurry_blizzard' },
    ],
    portraitColors: { skin: 0xffccaa, hair: 0xff3322, body: 0xffcc00, accent: 0xff0000 },
  },

  grimace: {
    id: 'grimace',
    name: 'Grimace',
    title: 'The McTank',
    role: 'Heavy Tank + Taunt',
    description: 'A big purple friend who takes hits so others do not have to.',
    color: 0x9933cc,
    accentColor: 0xffcc00,
    baseStats: {
      hp: 150, mp: 20, atk: 18, def: 25, agi: 6, mag: 8,
    },
    growth: {
      hp: 15, mp: 1.5, atk: 2.5, def: 3.5, agi: 0.8, mag: 1.0,
    },
    element: 'earth',
    weapon: 'McShake Maul',
    armor: 'Grimace Hide',
    accessory: 'Purple Charm',
    abilityTree: [
      { level: 1, ability: 'grimace_slam' },
      { level: 1, ability: 'purple_body' },
      { level: 5, ability: 'grimace_guard' },
      { level: 10, ability: 'shake_quake' },
      { level: 15, ability: 'purple_pound' },
      { level: 20, ability: 'grimace_roar' },
      { level: 30, ability: 'shake_storm' },
      { level: 40, ability: 'grimace_fortress' },
      { level: 50, ability: 'purple_titan' },
    ],
    portraitColors: { skin: 0x9933cc, hair: 0x8822aa, body: 0x9933cc, accent: 0xffcc00 },
  },

  birdie: {
    id: 'birdie',
    name: 'Birdie the Early Bird',
    title: 'The Sky-Scout',
    role: 'Ranged Speed Attacker + Debuffs',
    description: 'Fast as the morning sun, Birdie strikes from afar and weakens foes.',
    color: 0xff69b4,
    accentColor: 0xffff00,
    baseStats: {
      hp: 70, mp: 35, atk: 16, def: 10, agi: 25, mag: 14,
    },
    growth: {
      hp: 6, mp: 4, atk: 2.8, def: 1.5, agi: 3.5, mag: 2.0,
    },
    element: 'air',
    weapon: 'Feather Darts',
    armor: 'Sky Vest',
    accessory: 'Morning Charm',
    abilityTree: [
      { level: 1, ability: 'feather_darts' },
      { level: 1, ability: 'breakfast_blitz' },
      { level: 5, ability: 'egg_bomb' },
      { level: 10, ability: 'morning_song' },
      { level: 15, ability: 'dive_bomb' },
      { level: 20, ability: 'dawn_chorus' },
      { level: 30, ability: 'sky_dance' },
      { level: 40, ability: 'hurricane_feathers' },
      { level: 50, ability: 'sunny_side_up' },
    ],
    portraitColors: { skin: 0xff69b4, hair: 0xffcccc, body: 0xff69b4, accent: 0xffff00 },
  },

  bigmac: {
    id: 'bigmac',
    name: 'Officer Big Mac',
    title: 'The McCrusader',
    role: 'Paladin — Tank + Holy Attacks',
    description: 'A burger-headed knight of the law. Justice never tasted so good.',
    color: 0x8b4513,
    accentColor: 0xffd700,
    baseStats: {
      hp: 130, mp: 40, atk: 20, def: 22, agi: 8, mag: 16,
    },
    growth: {
      hp: 12, mp: 3.5, atk: 3.0, def: 3.0, agi: 1.2, mag: 2.5,
    },
    element: 'holy',
    weapon: 'Sesame Sword',
    armor: 'Double Patty Armor',
    accessory: 'Badge of Order',
    abilityTree: [
      { level: 1, ability: 'big_mac_smash' },
      { level: 1, ability: 'sesame_shield' },
      { level: 5, ability: 'mcgriddle_charge' },
      { level: 10, ability: 'special_sauce_smite' },
      { level: 15, ability: 'lettuce_wall' },
      { level: 20, ability: 'triple_stack' },
      { level: 30, ability: 'sesame_sanctuary' },
      { level: 40, ability: 'big_mac_judgment' },
      { level: 50, ability: 'special_sauce_storm' },
    ],
    portraitColors: { skin: 0xd4a017, hair: 0x8b4513, body: 0x8b4513, accent: 0xffd700 },
  },

  mactonight: {
    id: 'mactonight',
    name: 'Mac Tonight',
    title: 'The Moon-Bard',
    role: 'Support — Buffs, Debuffs, Minor Healing',
    description: 'A cool crescent moon crooner who buffs allies and debuffs enemies.',
    color: 0x2a2a4a,
    accentColor: 0xccccff,
    baseStats: {
      hp: 85, mp: 55, atk: 12, def: 12, agi: 16, mag: 18,
    },
    growth: {
      hp: 7, mp: 5.5, atk: 1.8, def: 1.8, agi: 2.5, mag: 2.8,
    },
    element: 'dark',
    weapon: 'Moon Mic',
    armor: 'Midnight Suit',
    accessory: 'Sunglasses',
    abilityTree: [
      { level: 1, ability: 'moon_melody' },
      { level: 1, ability: 'nightjam' },
      { level: 5, ability: 'mac_jazz' },
      { level: 10, ability: 'moonlight_serenade' },
      { level: 15, ability: 'blue_moon' },
      { level: 20, ability: 'midnight_blues' },
      { level: 30, ability: 'eclipse' },
      { level: 40, ability: 'moon_sonata' },
      { level: 50, ability: 'lunar_eclipse' },
    ],
    portraitColors: { skin: 0xccccff, hair: 0x2a2a4a, body: 0x2a2a4a, accent: 0xffff00 },
  },
};

// Starting party composition
export const STARTING_PARTY = ['ronald', 'grimace', 'birdie'];
export const RECRUIT_ORDER = ['bigmac', 'mactonight'];

// Character unlock points in the story
export const CHARACTER_UNLOCK = {
  bigmac: { region: 'burger_highlands', storyBeat: 'meet_officer_big_mac' },
  mactonight: { region: 'mcflurry_tundra', storyBeat: 'meet_mac_tonight' },
};
