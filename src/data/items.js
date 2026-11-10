// Item database — consumables, equipment, key items

export const ITEM_TYPES = {
  CONSUMABLE: 'consumable',
  EQUIPMENT: 'equipment',
  ACCESSORY: 'accessory',
  KEY_ITEM: 'key_item',
  CRAFT: 'craft',
};

export const ITEMS = {
  // === Consumables ===
  mc_flurry_potion: {
    id: 'mc_flurry_potion', name: 'McFlurry Potion', type: 'consumable',
    effect: 'heal_hp', power: 60, target: 'ally',
    description: 'A refreshing McFlurry that restores 60 HP.',
    price: 50, stackable: true,
  },
  big_mc_flurry: {
    id: 'big_mc_flurry', name: 'Big McFlurry', type: 'consumable',
    effect: 'heal_hp', power: 150, target: 'ally',
    description: 'A large McFlurry that restores 150 HP.',
    price: 120, stackable: true,
  },
  mc_muffin: {
    id: 'mc_muffin', name: 'McMuffin', type: 'consumable',
    effect: 'heal_mp', power: 30, target: 'ally',
    description: 'A warm McMuffin that restores 30 MP.',
    price: 40, stackable: true,
  },
  happy_meal_box: {
    id: 'happy_meal_box', name: 'Happy Meal Box', type: 'consumable',
    effect: 'heal_both', power: 80, target: 'ally',
    description: 'A full Happy Meal that restores 80 HP and 80 MP.',
    price: 100, stackable: true,
  },
  egg_mcmuffin: {
    id: 'egg_mcmuffin', name: 'Egg McMuffin', type: 'consumable',
    effect: 'revive', power: 0.5, target: 'ally',
    description: 'Revives a fallen ally with 50% HP.',
    price: 200, stackable: true,
  },
  arch_deluxe: {
    id: 'arch_deluxe', name: 'Arch Deluxe', type: 'consumable',
    effect: 'heal_both', power: 200, target: 'ally',
    description: 'A gourmet burger that restores 200 HP and 200 MP.',
    price: 300, stackable: true,
  },
  mc_rib_sauce: {
    id: 'mc_rib_sauce', name: 'McRib Sauce', type: 'consumable',
    effect: 'cure_status', power: 0, target: 'ally',
    description: 'Cures all status ailments.',
    price: 60, stackable: true,
  },
  sprite_bottle: {
    id: 'sprite_bottle', name: 'Sprite Bottle', type: 'consumable',
    effect: 'buff_agi', power: 0, target: 'ally', status: ['agi_up'],
    description: 'Boosts an ally\'s agility.',
    price: 80, stackable: true,
  },

  // === Equipment (Armor) ===
  arch_armor: {
    id: 'arch_armor', name: 'Arch Armor', type: 'equipment', slot: 'armor',
    statBoost: { def: 15, hp: 30 },
    description: 'Golden arches armor. Boosts DEF and HP.',
    price: 500,
  },
  big_mac_armor: {
    id: 'big_mac_armor', name: 'Big Mac Armor', type: 'equipment', slot: 'armor',
    statBoost: { def: 25, hp: 50, atk: 10 },
    description: 'A legendary patty-stacked armor.',
    price: 1500,
  },
  fry_suit: {
    id: 'fry_suit', name: 'Fry Suit', type: 'equipment', slot: 'armor',
    statBoost: { def: 10, agi: 8, mag: 10 },
    description: 'A suit made of golden fries.',
    price: 800,
  },
  grimace_hide: {
    id: 'grimace_hide', name: 'Grimace Hide', type: 'equipment', slot: 'armor',
    statBoost: { def: 30, hp: 60 },
    description: 'Thick purple hide that absorbs damage.',
    price: 1200,
  },

  // === Equipment (Weapons) ===
  fry_wand: {
    id: 'fry_wand', name: 'Fry Wand', type: 'equipment', slot: 'weapon',
    statBoost: { mag: 15, mp: 20 },
    description: 'A wand tipped with a golden fry.',
    price: 600,
  },
  mc_shake_maul: {
    id: 'mc_shake_maul', name: 'McShake Maul', type: 'equipment', slot: 'weapon',
    statBoost: { atk: 20, def: 5 },
    description: 'A heavy maul made of a milkshake cup.',
    price: 700,
  },
  feather_darts_weapon: {
    id: 'feather_darts_weapon', name: 'Feather Darts', type: 'equipment', slot: 'weapon',
    statBoost: { atk: 12, agi: 15 },
    description: 'A set of razor-sharp feather darts.',
    price: 650,
  },
  sesame_sword: {
    id: 'sesame_sword', name: 'Sesame Sword', type: 'equipment', slot: 'weapon',
    statBoost: { atk: 25, def: 10, mag: 8 },
    description: 'A holy sword topped with sesame seeds.',
    price: 1000,
  },
  moon_mic: {
    id: 'moon_mic', name: 'Moon Mic', type: 'equipment', slot: 'weapon',
    statBoost: { mag: 18, mp: 25 },
    description: 'A microphone that channels lunar energy.',
    price: 800,
  },

  // === Accessories ===
  happy_meal_charm: {
    id: 'happy_meal_charm', name: 'Happy Meal Charm', type: 'accessory', slot: 'accessory',
    statBoost: { hp: 20, mp: 20, luck: 5 },
    description: 'A charm from a Happy Meal toy.',
    price: 400,
  },
  golden_arch_charm: {
    id: 'golden_arch_charm', name: 'Golden Arch Charm', type: 'accessory', slot: 'accessory',
    statBoost: { hp: 50, mp: 50, atk: 10, def: 10 },
    description: 'A legendary charm bearing the golden arches.',
    price: 2000,
  },
  ketchup_packet: {
    id: 'ketchup_packet', name: 'Ketchup Packet', type: 'accessory', slot: 'accessory',
    statBoost: { atk: 5 },
    description: 'A small packet of ketchup. Slightly boosts ATK.',
    price: 50,
  },
  badge_of_order: {
    id: 'badge_of_order', name: 'Badge of Order', type: 'accessory', slot: 'accessory',
    statBoost: { def: 15, mag: 10 },
    description: 'An officer\'s badge that radiates authority.',
    price: 600,
  },
  sunglasses: {
    id: 'sunglasses', name: 'Cool Sunglasses', type: 'accessory', slot: 'accessory',
    statBoost: { agi: 10, mag: 8 },
    description: 'Shady sunglasses that boost AGI.',
    price: 350,
  },

  // === Craft Materials ===
  patty_fragment: {
    id: 'patty_fragment', name: 'Patty Fragment', type: 'craft',
    description: 'A fragment of a burger patty. Crafting material.',
    price: 10, stackable: true,
  },
  cheese_scrap: {
    id: 'cheese_scrap', name: 'Cheese Scrap', type: 'craft',
    description: 'A scrap of melted cheese. Crafting material.',
    price: 8, stackable: true,
  },
  hash_brown_shard: {
    id: 'hash_brown_shard', name: 'Hash Brown Shard', type: 'craft',
    description: 'A crispy shard of hash brown. Crafting material.',
    price: 5, stackable: true,
  },
  fish_scale: {
    id: 'fish_scale', name: 'Fish Scale', type: 'craft',
    description: 'A shimmering fish scale. Crafting material.',
    price: 15, stackable: true,
  },
  egg_fragment: {
    id: 'egg_fragment', name: 'Egg Fragment', type: 'craft',
    description: 'A fragment of a McMuffin egg. Crafting material.',
    price: 12, stackable: true,
  },
  onion_ring: {
    id: 'onion_ring', name: 'Onion Ring', type: 'craft',
    description: 'A perfectly circular onion ring. Crafting material.',
    price: 10, stackable: true,
  },
  feather: {
    id: 'feather', name: 'Feather', type: 'craft',
    description: 'A colorful feather. Crafting material.',
    price: 8, stackable: true,
  },
  rib_bone: {
    id: 'rib_bone', name: 'Rib Bone', type: 'craft',
    description: 'A McRib bone. Crafting material.',
    price: 20, stackable: true,
  },
  syrup_bottle: {
    id: 'syrup_bottle', name: 'Syrup Bottle', type: 'craft',
    description: 'A bottle of hotcake syrup. Crafting material.',
    price: 15, stackable: true,
  },
  cookie_chunk: {
    id: 'cookie_chunk', name: 'Cookie Chunk', type: 'craft',
    description: 'A chunk of cookie. Crafting material.',
    price: 10, stackable: true,
  },
  apple_pie_scale: {
    id: 'apple_pie_scale', name: 'Apple Pie Scale', type: 'craft',
    description: 'A crispy scale from an Apple Pie Dragon. Crafting material.',
    price: 25, stackable: true,
  },
  mcflurry_shard: {
    id: 'mcflurry_shard', name: 'McFlurry Shard', type: 'craft',
    description: 'A shard of McFlurry ice. Crafting material.',
    price: 20, stackable: true,
  },
  bacon_strip: {
    id: 'bacon_strip', name: 'Bacon Strip', type: 'craft',
    description: 'A crispy bacon strip. Crafting material.',
    price: 15, stackable: true,
  },
  coffee_ground: {
    id: 'coffee_ground', name: 'Coffee Ground', type: 'craft',
    description: 'Used coffee grounds. Crafting material.',
    price: 8, stackable: true,
  },
  ranch_drip: {
    id: 'ranch_drip', name: 'Ranch Drip', type: 'craft',
    description: 'A drip of ranch dressing. Crafting material.',
    price: 12, stackable: true,
  },
  tea_leaf: {
    id: 'tea_leaf', name: 'Tea Leaf', type: 'craft',
    description: 'A sweet tea leaf. Crafting material.',
    price: 10, stackable: true,
  },
  sprite_bottle_craft: {
    id: 'sprite_bottle_craft', name: 'Sprite Bottle (Craft)', type: 'craft',
    description: 'An empty Sprite bottle. Crafting material.',
    price: 18, stackable: true,
  },
  coke_can: {
    id: 'coke_can', name: 'Coke Can', type: 'craft',
    description: 'A crushed Coke can. Crafting material.',
    price: 20, stackable: true,
  },
  melted_cheese: {
    id: 'melted_cheese', name: 'Melted Cheese', type: 'craft',
    description: 'A glob of melted cheese. Crafting material.',
    price: 15, stackable: true,
  },
  nugget_crown: {
    id: 'nugget_crown', name: 'Nugget Crown', type: 'craft',
    description: 'A crown from a McNugget King. Rare crafting material.',
    price: 50, stackable: true,
  },
  condiment_crown: {
    id: 'condiment_crown', name: 'Condiment Crown', type: 'craft',
    description: 'The crown of the Condiment King. Legendary crafting material.',
    price: 200, stackable: true,
  },
  big_mac_crown: {
    id: 'big_mac_crown', name: 'Big Mac Crown', type: 'craft',
    description: 'A crown from a Big Mac Brute. Rare crafting material.',
    price: 60, stackable: true,
  },
  deluxe_patty: {
    id: 'deluxe_patty', name: 'Deluxe Patty', type: 'craft',
    description: 'A premium patty from a Deluxe Quarter Pounder.',
    price: 45, stackable: true,
  },
  tortilla_scrap: {
    id: 'tortilla_scrap', name: 'Tortilla Scrap', type: 'craft',
    description: 'A scrap of tortilla. Crafting material.',
    price: 5, stackable: true,
  },
  mustard_jar: {
    id: 'mustard_jar', name: 'Mustard Jar', type: 'craft',
    description: 'A jar of mustard. Crafting material.',
    price: 18, stackable: true,
  },
  sundae_drip: {
    id: 'sundae_drip', name: 'Sundae Drip', type: 'craft',
    description: 'A drip of sundae. Crafting material.',
    price: 10, stackable: true,
  },
  parfait_glass: {
    id: 'parfait_glass', name: 'Parfait Glass', type: 'craft',
    description: 'A shard of parfait glass. Crafting material.',
    price: 14, stackable: true,
  },
  english_muffin: {
    id: 'english_muffin', name: 'English Muffin', type: 'craft',
    description: 'An English muffin. Crafting material.',
    price: 12, stackable: true,
  },

  // === Key Items ===
  golden_fry_key: {
    id: 'golden_fry_key', name: 'Golden Fry Key', type: 'key_item',
    description: 'A key shaped like a golden fry. Opens the Golden Arches Castle.',
    price: 0,
  },
  hamburglar_mask: {
    id: 'hamburglar_mask', name: 'Hamburglar\'s Mask', type: 'key_item',
    description: 'The mask of the Hamburglar. A key story item.',
    price: 0,
  },
  happy_meal_map: {
    id: 'happy_meal_map', name: 'Happy Meal Map', type: 'key_item',
    description: 'A map of the McWorld. Shows all discovered regions.',
    price: 0,
  },
  fry_kid_whistle: {
    id: 'fry_kid_whistle', name: 'Fry Kid Whistle', type: 'key_item',
    description: 'A whistle that calls Fry Kids. Used to collect familiars.',
    price: 0,
  },
};

// Shop inventories per region
export const SHOPS = {
  mccafe_springs: [
    'mc_flurry_potion', 'big_mc_flurry', 'mc_muffin', 'happy_meal_box',
    'egg_mcmuffin', 'mc_rib_sauce', 'arch_armor', 'fry_suit',
    'happy_meal_charm', 'ketchup_packet', 'sunglasses',
  ],
  fry_valley: [
    'mc_flurry_potion', 'mc_muffin', 'ketchup_packet',
  ],
  burger_highlands: [
    'mc_flurry_potion', 'mc_muffin', 'mc_rib_sauce',
  ],
};
