// Story beats, dialogue, and cutscenes

export const STORY_BEATS = {
  game_start: {
    id: 'game_start',
    dialogue: [
      { speaker: 'Narrator', text: 'In a world where burgers are life and fries are freedom...' },
      { speaker: 'Narrator', text: 'A darkness fell upon the McWorld.' },
      { speaker: 'Narrator', text: 'The Hamburglar, once a petty thief, seized the Golden Arches...' },
      { speaker: 'Narrator', text: 'And stole every burger in the land.' },
      { speaker: 'Narrator', text: 'Only a band of brave mascots could restore order.' },
      { speaker: 'Narrator', text: 'This... is their story.' },
    ],
    after: 'fry_valley_intro',
  },

  fry_valley_intro: {
    id: 'fry_valley_intro',
    dialogue: [
      { speaker: 'Ronald', text: 'Ah, Fry Valley! Home sweet home.' },
      { speaker: 'Grimace', text: 'It\'s so peaceful here. Or... it used to be.' },
      { speaker: 'Birdie', text: 'Look! Nuggets! They seem... different.' },
      { speaker: 'Ronald', text: 'Don\'t worry, friends. Whatever\'s happening, we\'ll figure it out.' },
      { speaker: 'Ronald', text: 'Let\'s talk to the locals and see what\'s going on.' },
    ],
  },

  burger_highlands_intro: {
    id: 'burger_highlands_intro',
    dialogue: [
      { speaker: 'Grimace', text: 'The mountains are so steep! My legs are tired.' },
      { speaker: 'Birdie', text: 'I can fly over them! ...Oh wait, I can\'t actually fly in this game.' },
      { speaker: 'Ronald', text: 'Stay focused. The Hamburglar\'s lieutenant is supposed to be here.' },
      { speaker: 'Ronald', text: 'And I heard Officer Big Mac is patrolling these peaks!' },
    ],
  },

  meet_officer_big_mac: {
    id: 'meet_officer_big_mac',
    dialogue: [
      { speaker: 'Officer Big Mac', text: 'Halt! Who goes there?' },
      { speaker: 'Ronald', text: 'Officer! It\'s me, Ronald. We\'re here to stop the Hamburglar.' },
      { speaker: 'Officer Big Mac', text: 'Ronald McDonald? By the golden arches, it\'s really you!' },
      { speaker: 'Officer Big Mac', text: 'I\'ve been fighting these burger bandits for weeks.' },
      { speaker: 'Officer Big Mac', text: 'The Hamburglar has lieutenants everywhere. They\'re organized!' },
      { speaker: 'Ronald', text: 'We could use your strength, Officer. Will you join us?' },
      { speaker: 'Officer Big Mac', text: 'It would be an honor! Justice must be served... with fries!' },
    ],
    unlocks: ['bigmac'],
  },

  mcflurry_tundra_intro: {
    id: 'mcflurry_tundra_intro',
    dialogue: [
      { speaker: 'Birdie', text: 'Brrr! It\'s freezing! My feathers are icing up!' },
      { speaker: 'Grimace', text: 'I\'m so cold I think I\'m turning blue... er, bluer.' },
      { speaker: 'Ronald', text: 'The McFlurry Elementals are powerful here. We need to be careful.' },
      { speaker: 'Officer Big Mac', text: 'I sense dark magic. Someone is controlling the ice.' },
    ],
  },

  meet_mac_tonight: {
    id: 'meet_mac_tonight',
    dialogue: [
      { speaker: 'Mac Tonight', text: '♪ Underneath the moonlight... ♪ Oh, hello there!' },
      { speaker: 'Ronald', text: 'Mac Tonight! The famous moon bard! What are you doing out here?' },
      { speaker: 'Mac Tonight', text: 'I was performing at the ice palace, but the Hamburglar\'s goons crashed my gig.' },
      { speaker: 'Mac Tonight', text: 'They said my music was "too cool." Can you imagine?' },
      { speaker: 'Ronald', text: 'We could really use your musical talents. Will you join us?' },
      { speaker: 'Mac Tonight', text: 'Anything for a chance to perform again. Let\'s jam!' },
    ],
    unlocks: ['mactonight'],
  },

  happy_meal_forest_intro: {
    id: 'happy_meal_forest_intro',
    dialogue: [
      { speaker: 'Birdie', text: 'The Happy Meal Forest! I love it here. So many toys!' },
      { speaker: 'Ronald', text: 'Something\'s wrong. The trees look... darker than usual.' },
      { speaker: 'Grimace', text: 'I hear something in the bushes. Is it... a dragon?' },
      { speaker: 'Ronald', text: 'Stay on guard. The Hamburglar\'s influence reaches everywhere.' },
    ],
  },

  drive_thru_desert_intro: {
    id: 'drive_thru_desert_intro',
    dialogue: [
      { speaker: 'Grimace', text: 'So... much... sand. Can we get a McFlurry?' },
      { speaker: 'Birdie', text: 'Look! There\'s a Drive-Thru in the middle of nowhere!' },
      { speaker: 'Ronald', text: 'The Condiment King is supposed to be out here. Stay sharp.' },
      { speaker: 'Officer Big Mac', text: 'I\'ve been waiting for this. Let\'s serve justice — extra crispy!' },
    ],
  },

  mccafe_springs_intro: {
    id: 'mccafe_springs_intro',
    dialogue: [
      { speaker: 'Ronald', text: 'McCafe Springs! The hub of the McWorld.' },
      { speaker: 'Ronald', text: 'We can rest, shop, and save our progress here.' },
      { speaker: 'Mac Tonight', text: 'I could use a warm coffee after that tundra!' },
    ],
  },

  play_place_plains_intro: {
    id: 'play_place_plains_intro',
    dialogue: [
      { speaker: 'Birdie', text: 'The PlayPlace! I always wanted to explore one of these!' },
      { speaker: 'Grimace', text: 'It\'s... a lot bigger from the inside.' },
      { speaker: 'Ronald', text: 'This labyrinth leads to the Golden Arches Castle. We\'re close!' },
      { speaker: 'Officer Big Mac', text: 'The final stretch. Everyone, stay sharp. We end this now.' },
    ],
  },

  golden_arches_castle_intro: {
    id: 'golden_arches_castle_intro',
    dialogue: [
      { speaker: 'Ronald', text: 'The Golden Arches Castle. The Hamburglar\'s fortress.' },
      { speaker: 'Grimace', text: 'He has so many stolen burgers in there...' },
      { speaker: 'Birdie', text: 'It\'s now or never!' },
      { speaker: 'Officer Big Mac', text: 'For justice! For burgers! For the McWorld!' },
      { speaker: 'Mac Tonight', text: 'Let\'s give them one final performance to remember.' },
    ],
  },

  final_boss: {
    id: 'final_boss',
    dialogue: [
      { speaker: 'Hamburglar', text: 'Robble robble! You\'ve made it this far, have you?' },
      { speaker: 'Ronald', text: 'Hamburglar! Return the burgers you\'ve stolen!' },
      { speaker: 'Hamburglar', text: 'Why should I? I took them fair and square!' },
      { speaker: 'Officer Big Mac', text: 'Theft is not fair, criminal!' },
      { speaker: 'Hamburglar', text: 'You don\'t understand. I was always the villain.' },
      { speaker: 'Hamburglar', text: 'Everyone loved Ronald, Grimace, and Birdie. But me?' },
      { speaker: 'Hamburglar', text: 'I was always the one who stole. The one who was chased.' },
      { speaker: 'Hamburglar', text: 'So I decided... if they call me a thief, I\'ll be the BEST thief!' },
      { speaker: 'Ronald', text: 'It doesn\'t have to be this way. We can be friends.' },
      { speaker: 'Hamburglar', text: '...Robble. You always say that. But this time...' },
      { speaker: 'Hamburglar', text: 'This time I have my most powerful lieutenants!' },
      { speaker: 'Hamburglar', text: 'Defeat them all, and I\'ll fight you myself!' },
    ],
  },

  victory: {
    id: 'victory',
    dialogue: [
      { speaker: 'Hamburglar', text: 'You... you beat me. Fair and square.' },
      { speaker: 'Ronald', text: 'It\'s over, Hamburglar. Let\'s go home.' },
      { speaker: 'Hamburglar', text: '...Can I have a Happy Meal?' },
      { speaker: 'Ronald', text: '...Of course you can. You always could.' },
      { speaker: 'Narrator', text: 'And so, the McDonald\'s heroes saved the McWorld.' },
      { speaker: 'Narrator', text: 'The burgers were returned. The arches shone golden once more.' },
      { speaker: 'Narrator', text: 'And the Hamburglar? He got his Happy Meal.' },
      { speaker: 'Narrator', text: 'THE END.' },
    ],
  },

  nemesis_defeated: {
    id: 'nemesis_defeated',
    dialogue: [
      { speaker: 'Narrator', text: 'A Hamburglar lieutenant has been defeated!' },
    ],
  },

  nemesis_escaped: {
    id: 'nemesis_escaped',
    dialogue: [
      { speaker: 'Narrator', text: 'The lieutenant escaped! They will return stronger...' },
    ],
  },

  nemesis_promoted: {
    id: 'nemesis_promoted',
    dialogue: [
      { speaker: 'Narrator', text: 'A lieutenant has been promoted! The hierarchy shifts.' },
    ],
  },
};

// Side quests
export const SIDE_QUESTS = [
  {
    id: 'lost_child_quest',
    name: 'The Lost Child',
    giver: 'Lost Child',
    region: 'happy_meal_forest',
    description: 'A child got lost in the Happy Meal Forest. Help them reach McCafe Springs.',
    objective: 'Escort the lost child to McCafe Springs',
    reward: { gold: 100, items: ['happy_meal_charm'] },
  },
  {
    id: 'condiment_king_bounty',
    name: 'Condiment King Bounty',
    giver: 'Quest Giver',
    region: 'mccafe_springs',
    description: 'The Condiment King is terrorizing the Drive-Thru Desert. Defeat him!',
    objective: 'Defeat The Condiment King in Drive-Thru Desert',
    reward: { gold: 500, items: ['big_mac_armor'] },
  },
  {
    id: 'nugget_extermination',
    name: 'Nugget Extermination',
    giver: 'Old Fry Farmer',
    region: 'fry_valley',
    description: 'The McNugget Goblins are ruining the crops. Defeat 10 of them.',
    objective: 'Defeat 10 McNugget Goblins in Fry Valley',
    reward: { gold: 80, items: ['mc_flurry_potion', 'mc_flurry_potion'] },
  },
  {
    id: 'ice_palace_concert',
    name: 'Ice Palace Concert',
    giver: 'Frozen Fry Kid',
    region: 'mcflurry_tundra',
    description: 'Mac Tonight\'s concert was interrupted. Clear the ice palace of enemies.',
    objective: 'Defeat 15 enemies in McFlurry Tundra',
    reward: { gold: 200, items: ['arch_deluxe'] },
  },
  {
    id: 'tube_guardian_challenge',
    name: 'The Tube Guardian\'s Challenge',
    giver: 'Tube Guardian',
    region: 'play_place_plains',
    description: 'The Tube Guardian challenges you. Defeat 5 elite monsters in the labyrinth.',
    objective: 'Defeat 5 elite monsters in PlayPlace Plains',
    reward: { gold: 400, items: ['golden_arch_charm'] },
  },
  {
    id: 'familiar_collector',
    name: 'Familiar Collector',
    giver: 'Familiar Keeper',
    region: 'mccafe_springs',
    description: 'Collect 5 different Fry Kid familiars from across the McWorld.',
    objective: 'Collect 5 unique familiars',
    reward: { gold: 300, items: ['golden_arch_charm'] },
  },
  {
    id: 'highland_patrol',
    name: 'Highland Patrol',
    giver: 'Highland Guard',
    region: 'burger_highlands',
    description: 'Patrol the highlands and defeat 8 enemies to secure the mountain pass.',
    objective: 'Defeat 8 enemies in Burger Highlands',
    reward: { gold: 150, items: ['arch_armor'] },
  },
  {
    id: 'desert_explorer',
    name: 'Desert Explorer',
    giver: 'Sand Surfer',
    region: 'drive_thru_desert',
    description: 'Find all 3 treasure chests in the Drive-Thru Desert.',
    objective: 'Find all treasures in Drive-Thru Desert',
    reward: { gold: 250, items: ['big_mc_flurry', 'big_mc_flurry'] },
  },
  {
    id: 'master_chef',
    name: 'The Master Chef',
    giver: 'Shopkeeper',
    region: 'mccafe_springs',
    description: 'Bring the shopkeeper 5 cheese scraps and 3 patty fragments for a special recipe.',
    objective: 'Collect 5 cheese scraps and 3 patty fragments',
    reward: { gold: 200, items: ['arch_deluxe', 'arch_deluxe'] },
  },
  {
    id: 'toy_retrieval',
    name: 'Toy Retrieval',
    giver: 'Forest Toy Maker',
    region: 'happy_meal_forest',
    description: 'The Hamburglar stole 10 Happy Meal toys. Find them by defeating forest enemies.',
    objective: 'Defeat 10 enemies in Happy Meal Forest',
    reward: { gold: 180, items: ['fry_kid_whistle'] },
  },
];
