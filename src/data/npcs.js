// NPC dialogue data — Act 1 NPCs
// Each NPC has location, dialogue trees, and quest associations
// Dialogue conditions: first_meeting, after_beat_XXX, quest_available, quest_complete, default

export const NPCS = {
  // ============================================================
  // FRY VILLAGE NPCs
  // ============================================================

  elder_mcnugget: {
    id: 'elder_mcnugget',
    name: 'Elder McNugget',
    location: 'Fry Village',
    region: 'fry_valley',
    position: { x: 0, z: -20 },
    description: 'An ancient, wise nugget. The oldest resident of Fry Village. He remembers the founding of McDonaldland.',
    dialogue: [
      {
        condition: 'first_meeting',
        lines: [
          { speaker: 'Elder McNugget', text: 'Ah, a young adventurer! I am Elder McNugget. I\'ve lived in this village since the very first Happy Meal was served.' },
          { speaker: 'Elder McNugget', text: 'The Golden Arches above our village are the source of all magic in the McWorld. Without them, our kitchens would go cold, our items would lose their power, and our world would... dim.' },
          { speaker: 'Elder McNugget', text: 'If you ever have questions about the old ways, the Arches, or the Great Recipe, come find me. This old nugget still has a few crumbs of wisdom left!' },
        ],
      },
      {
        condition: 'after_beat_003',
        lines: [
          { speaker: 'Elder McNugget', text: 'So... the Arches have begun to flicker. I feared this day would come.' },
          { speaker: 'Elder McNugget', text: 'Long ago, the Arches were anchored by the Great Recipe — a binding between magic and meal. Someone has stolen it, and the Arches are losing their grip on reality.' },
          { speaker: 'Elder McNugget', text: 'A tip, young one: when the Arches flicker, wild encounters become more aggressive. Save your progress at any Golden Counter before venturing into uncertain territory.' },
          { speaker: 'Elder McNugget', text: 'Go speak with the Old Fry Farmer. He knows the valley better than anyone, and he\'ll point you toward the goblin problem. The corruption and the theft are connected, I\'m sure of it.' },
        ],
      },
      {
        condition: 'after_beat_004',
        lines: [
          { speaker: 'Elder McNugget', text: 'The Great Recipe was created when the first Arches were raised. It binds magic to food, food to joy, and joy to the land itself.' },
          { speaker: 'Elder McNugget', text: 'Whoever stole it must have known the old protections. That narrows the list considerably. Think, Ronald — who else knows the old ways?' },
          { speaker: 'Elder McNugget', text: 'Be careful on your journey. The corruption you saw in the goblins is spreading. It turns good food bad, and good hearts cold.' },
          { speaker: 'Elder McNugget', text: 'A word of advice: corrupted enemies hit harder but have weaker defense. Use aggressive abilities when facing them — the darkness makes them brittle.' },
        ],
      },
      {
        condition: 'after_beat_006',
        lines: [
          { speaker: 'Elder McNugget', text: 'The goblins are corrupted, you say? Yes... I feared as much. The dark energy leaking from the Arches is twisting the creatures of the valley.' },
          { speaker: 'Elder McNugget', text: 'In the old days, Nugget Goblins were gentle beings. They tended the potato gardens and sang harvest songs. What has been done to them is a grave sin.' },
          { speaker: 'Elder McNugget', text: 'Ronald, remember: mercy is not weakness. If you can purify corrupted enemies rather than destroy them, the McWorld will remember. Some battles are won not with swords, but with compassion.' },
        ],
      },
      {
        condition: 'after_beat_011',
        lines: [
          { speaker: 'Elder McNugget', text: 'The Hamburglar\'s emblem? Then it IS him. I had hoped he had found peace somewhere.' },
          { speaker: 'Elder McNugget', text: 'Ronald, I must tell you something. The Hamburglar was not always a thief. He was once a beloved mascot — loved by the children, welcomed at every table.' },
          { speaker: 'Elder McNugget', text: 'But times changed. New mascots came. His role... diminished. And instead of talking to him, we simply... stopped inviting him. That is our shame as much as his.' },
          { speaker: 'Elder McNugget', text: 'I am not saying what he did is right. But I am saying: try to understand. Understanding is the first step to healing. Now go — the highlands await.' },
          { speaker: 'Elder McNugget', text: 'One more thing: the highlands are cold. Ice-type enemies lurk on the upper slopes. Fire abilities and warm items will serve you well. Visit the Ketchup Merchant before you leave — he stocks travel supplies.' },
        ],
      },
      {
        condition: 'after_beat_012',
        lines: [
          { speaker: 'Elder McNugget', text: 'The Condiment King has fallen... or rather, been freed. I felt the shift in the Arches when it happened. A small brightness returned.' },
          { speaker: 'Elder McNugget', text: 'But the Great Recipe is still missing. One freed mascot does not solve the whole problem. The Hamburglar still holds the key.' },
          { speaker: 'Elder McNugget', text: 'Continue north, Ronald. The highlands will test you in new ways. Remember what I said about mercy — not every enemy is truly your enemy.' },
        ],
      },
      {
        condition: 'after_beat_016',
        lines: [
          { speaker: 'Elder McNugget', text: 'Officer Big Mac is safe! The Arches sang a brighter note when he was freed. He always was one of the strongest among us.' },
          { speaker: 'Elder McNugget', text: 'With Big Mac at your side, the Comicfoil forces will think twice before engaging. But the Hamburglar is still out there, and the summit of Mount Double-Patty grows darker by the day.' },
          { speaker: 'Elder McNugget', text: 'Steel yourself, Ronald. The final confrontation of this act approaches. Make sure your party is rested, your items stocked, and your heart steady.' },
        ],
      },
      {
        condition: 'after_beat_018',
        lines: [
          { speaker: 'Elder McNugget', text: 'The Hamburglar... you faced him. And you chose mercy. I am proud of you, Ronald.' },
          { speaker: 'Elder McNugget', text: 'The Arches are already responding. The flickering has slowed. Not stopped — but slowed. Whatever the Hamburglar took, he was only the beginning.' },
          { speaker: 'Elder McNugget', text: 'Rest now, hero. But not for too long. I sense shadows beyond the horizon — greater threats that even the Great Recipe cannot fully explain. The McWorld is larger than Act 1 of this story.' },
          { speaker: 'Elder McNugget', text: 'When you are ready, I have more to tell you about the old world. About the Time Before Arches. But that is a tale for another day.' },
        ],
      },
      {
        condition: 'default',
        lines: [
          { speaker: 'Elder McNugget', text: 'The Arches are still flickering. Please hurry, Ronald. The McWorld is counting on you.' },
          { speaker: 'Elder McNugget', text: 'Remember: every great journey starts with a single fry. Or was it a single step? I can never remember.' },
          { speaker: 'Elder McNugget', text: 'If you\'re stuck, talk to the villagers. Each one knows something different about the valley. Knowledge is the best seasoning.' },
        ],
      },
    ],
    questGiver: false,
    tutorialInfo: true,
  },

  old_fry_farmer: {
    id: 'old_fry_farmer',
    name: 'Old Fry Farmer',
    location: 'Fry Village',
    region: 'fry_valley',
    position: { x: 20, z: 15 },
    description: 'A weathered farmer who has tended the fry fields his whole life. Knows every road in the McWorld.',
    dialogue: [
      {
        condition: 'first_meeting',
        lines: [
          { speaker: 'Old Fry Farmer', text: 'Welcome to Fry Valley, young adventurer! I\'ve been farming these fields since before you were a gleam in the Arches\' eye.' },
          { speaker: 'Old Fry Farmer', text: 'The golden grass here grows from the fries of old. Each stalk is a strand of potato magic. Beautiful, isn\'t it?' },
          { speaker: 'Old Fry Farmer', text: 'But lately... the fields have been sick. Dark patches spreading. And those McNugget Goblins — they\'re ruining my crops!' },
          { speaker: 'Old Fry Farmer', text: 'Here\'s a farming tip that works in combat too: know your terrain. Enemies in the fry fields are weak to fire — the dry grass goes up like kindling. But up in the mountains? Different story entirely.' },
        ],
      },
      {
        condition: 'quest_available',
        questId: 'SQ02',
        lines: [
          { speaker: 'Old Fry Farmer', text: 'Say, you look like you can handle yourself. Those McNugget Goblins have been ruining my crops something terrible.' },
          { speaker: 'Old Fry Farmer', text: 'If you can defeat 10 of the little blighters, I\'ll reward you with some McFlurry Potions from my cellar. What do you say?' },
          { speaker: 'Old Fry Farmer', text: 'You\'ll find them all over Fry Valley, especially in the fields to the south. Good luck!' },
        ],
      },
      {
        condition: 'quest_complete',
        questId: 'SQ02',
        lines: [
          { speaker: 'Old Fry Farmer', text: 'By the Arches, you did it! Ten fewer goblins trampling my crops. Here are those McFlurry Potions I promised — they\'ll cool you down in a pinch.' },
          { speaker: 'Old Fry Farmer', text: 'You know, you remind me of a young mascot I knew years ago. Full of fire, that one. Went by the name of Hamburglar, actually. Before everything went sideways.' },
          { speaker: 'Old Fry Farmer', text: 'Anyway, don\'t mind an old farmer\'s rambling. You\'ve got a world to save. And if you need directions, you know where to find me.' },
        ],
      },
      {
        condition: 'after_beat_004',
        lines: [
          { speaker: 'Old Fry Farmer', text: 'The Great Recipe is gone? Well, that explains why my crops are growing sideways. I thought it was just bad fertilizer!' },
          { speaker: 'Old Fry Farmer', text: 'Listen, Ronald. The fry fields hold old magic — older than the village itself. If the Recipe was stolen, the land will tell us. You just have to know how to listen.' },
          { speaker: 'Old Fry Farmer', text: 'Pro tip: explore the edges of every map. Hidden paths often lead to treasure or lore stones. I found a whole cave system just by following a strange smell last spring.' },
        ],
      },
      {
        condition: 'after_beat_006',
        lines: [
          { speaker: 'Old Fry Farmer', text: 'Corrupted goblins, dark energy, stolen Recipes... it\'s a lot to take in, isn\'t it?' },
          { speaker: 'Old Fry Farmer', text: 'When I was young, the goblins were our friends. We\'d share harvest festivals with them. They loved the potato songs.' },
          { speaker: 'Old Fry Farmer', text: 'If you find a way to cleanse the corruption, you\'d be healing more than just monsters. You\'d be healing old friendships. And that\'s worth more than any quest reward.' },
        ],
      },
      {
        condition: 'after_beat_011',
        lines: [
          { speaker: 'Old Fry Farmer', text: 'So, you found the Hamburglar\'s mark, did you? I was afraid of this.' },
          { speaker: 'Old Fry Farmer', text: 'I remember the Hamburglar from the old days. He used to be welcome here. Before he started stealing, he was part of the community.' },
          { speaker: 'Old Fry Farmer', text: 'But something changed in him. Got bitter. Got cold. People stopped inviting him to things. After a while, he just... vanished.' },
          { speaker: 'Old Fry Farmer', text: 'If he\'s collecting magic, he\'ll want the high ground. Head north to the Burger Highlands. Sesame Pass cuts through the mountains. Beyond that, you\'ll find Mount Double-Patty.' },
          { speaker: 'Old Fry Farmer', text: 'I\'ve also heard that Officer Big Mac has been patrolling up there. If anyone knows about Hamburglar\'s movements, it\'d be him.' },
          { speaker: 'Old Fry Farmer', text: 'Here, take these supplies. McFlurry Potions for the cold mountain air, and a map of the highland trails. Safe travels!' },
          { speaker: 'Old Fry Farmer', text: 'And Ronald — watch out for sesame seed avalanches on the pass. They sound funny until you\'re buried in seeds up to your neck.' },
        ],
      },
      {
        condition: 'after_beat_016',
        lines: [
          { speaker: 'Old Fry Farmer', text: 'Big Mac is free! Ha! That\'s the best news I\'ve heard all season. He always was a tough one — took three Comicfoil grunts just to slow him down.' },
          { speaker: 'Old Fry Farmer', text: 'The highlands are in better hands now. But don\'t let your guard down — the Hamburglar\'s still got his hideout on the summit.' },
          { speaker: 'Old Fry Farmer', text: 'When you\'re ready for the final push, make sure your party\'s levels are up. The enemies on Mount Double-Patty don\'t mess around. I\'d say level 12 minimum, but you\'re the hero here.' },
        ],
      },
      {
        condition: 'after_beat_018',
        lines: [
          { speaker: 'Old Fry Farmer', text: 'You did it, Ronald. You actually did it. The fields are already looking greener — I swear the fries grew an inch overnight!' },
          { speaker: 'Old Fry Farmer', text: 'The Hamburglar\'s been given a second chance? Well... if you trust him, I trust you. The land forgives faster than people do, anyway.' },
          { speaker: 'Old Fry Farmer', text: 'Take a rest, hero. But when you\'re ready, there are more valleys beyond the highlands. The McWorld is bigger than any of us knew.' },
        ],
      },
      {
        condition: 'default',
        lines: [
          { speaker: 'Old Fry Farmer', text: 'Beware the Nugget Goblins — they come in packs! And they\'re not as friendly as they used to be.' },
          { speaker: 'Old Fry Farmer', text: 'If you seek the Hamburglar, head north to the Burger Highlands. But be careful of the mountain pass.' },
          { speaker: 'Old Fry Farmer', text: 'My crops are everything to me. If you can thin out those goblins, I\'d be mighty grateful.' },
          { speaker: 'Old Fry Farmer', text: 'Tip from an old farmer: keep your party balanced. A healer, a tank, and a damage-dealer will get you through most fights. Don\'t put all your ketchup in one bottle!' },
        ],
      },
    ],
    questGiver: true,
    quests: ['SQ02'],
  },

  ketchup_merchant: {
    id: 'ketchup_merchant',
    name: 'Ketchup Merchant',
    location: 'Fry Village',
    region: 'fry_valley',
    position: { x: -15, z: -10 },
    description: 'A cheerful merchant selling ketchup-based items. Always has a red stain somewhere on his clothes.',
    dialogue: [
      {
        condition: 'first_meeting',
        lines: [
          { speaker: 'Ketchup Merchant', text: 'Welcome, welcome! Ketchup Merchant at your service! Finest condiments in all of Fry Valley!' },
          { speaker: 'Ketchup Merchant', text: 'You look like an adventurer. Let me give you a free tip — literally! Ketchup Potions restore HP, but Mustard Potions cure status effects. Different condiments for different problems!' },
          { speaker: 'Ketchup Merchant', text: 'And if you ever find yourself frozen — and I don\'t mean cold, I mean magically frozen — a splash of hot sauce will thaw you right out. I sell that too, naturally.' },
        ],
      },
      {
        condition: 'after_beat_003',
        lines: [
          { speaker: 'Ketchup Merchant', text: 'Oh my, the Arches are flickering! I dropped ALL my ketchup bottles when I heard. There was red everywhere!' },
          { speaker: 'Ketchup Merchant', text: 'It was actually kind of beautiful, in a messy sort of way. But the important thing is — please fix the Arches! My ketchup won\'t stay fresh without the magic!' },
          { speaker: 'Ketchup Merchant', text: 'When the Arches flicker, item potency drops by about ten percent. So if a Ketchup Potion usually heals 50 HP, it might only heal 45 right now. Keep that in mind when you\'re stocking up!' },
        ],
      },
      {
        condition: 'after_beat_004',
        lines: [
          { speaker: 'Ketchup Merchant', text: 'The Great Recipe is gone? Oh, this is bad. The Recipe is what gives condiments their magical properties!' },
          { speaker: 'Ketchup Merchant', text: 'I\'ve got a limited supply of enhanced items left. Once they\'re gone, I can\'t restock until the magic returns. You\'d better buy what you need now.' },
          { speaker: 'Ketchup Merchant', text: 'Word of advice: stock up on healing items before any big encounter. I know it sounds obvious, but you\'d be surprised how many heroes forget. There\'s no shop on Mount Double-Patty!' },
        ],
      },
      {
        condition: 'after_beat_006',
        lines: [
          { speaker: 'Ketchup Merchant', text: 'Corrupted goblins? In MY fields? That\'s terrible for business! Who wants to shop next to a dark energy zone?' },
          { speaker: 'Ketchup Merchant', text: 'I\'ve started carrying defensive items too — Bun Shields, Sesame Armor, the works. If you\'re heading into corrupted areas, you\'ll want protection.' },
        ],
      },
      {
        condition: 'after_beat_011',
        lines: [
          { speaker: 'Ketchup Merchant', text: 'The Hamburglar! I knew it! He stole a whole case of special sauce from me last year. SPECIAL SAUCE! Do you know how much that\'s worth?' },
          { speaker: 'Ketchup Merchant', text: 'If you\'re heading to the highlands, I\'ve got cold-weather supplies. McFlurry Potions, Hot Mustard Bombs — very effective against ice enemies. Trust me, you\'ll need them up there.' },
          { speaker: 'Ketchup Merchant', text: 'And here\'s a combat tip: ice enemies are weak to fire, obviously. But they\'re ALSO weak to salt. Salt Shaker items do double damage to Frozen Fry enemies. I sell those too, by the way.' },
        ],
      },
      {
        condition: 'after_beat_018',
        lines: [
          { speaker: 'Ketchup Merchant', text: 'The Hamburglar is redeemed! Does this mean he\'ll return my special sauce? ...No? Well, it was worth asking.' },
          { speaker: 'Ketchup Merchant', text: 'Business is already picking up. The Arches are stabilizing, and my ketchup is glowing again — in a good way, not in a corrupted way. There\'s a difference!' },
          { speaker: 'Ketchup Merchant', text: 'Thanks for saving the world, Ronald. It\'s good for the economy!' },
        ],
      },
      {
        condition: 'default',
        lines: [
          { speaker: 'Ketchup Merchant', text: 'Ketchup for sale! Fresh and red! The finest in all of Fry Valley!' },
          { speaker: 'Ketchup Merchant', text: 'A pinch of ketchup can heal the mightiest warrior. Or at least make things taste better. That\'s basically the same thing, right?' },
          { speaker: 'Ketchup Merchant', text: 'You seem strong. Be careful out there — I\'ve heard the goblins are getting worse. Darker. Meaner. Not ketchup-mean. Actually-mean.' },
          { speaker: 'Ketchup Merchant', text: 'Save your gold for items! Equipment is nice, but potions win battles. You can\'t swing a sword when you\'re at 1 HP.' },
        ],
      },
    ],
    questGiver: false,
    shopkeeper: true,
  },

  fry_village_villager_1: {
    id: 'fry_village_villager_1',
    name: 'Villager Pam',
    location: 'Fry Village',
    region: 'fry_valley',
    position: { x: 10, z: 5 },
    description: 'A friendly villager who loves to gossip.',
    dialogue: [
      {
        condition: 'first_meeting',
        lines: [
          { speaker: 'Villager Pam', text: 'Oh, hello Ronald! Beautiful morning, isn\'t it? Well, it was, until the Arches started acting up.' },
          { speaker: 'Villager Pam', text: 'I heard the Elder McNugget knows all about the Arches. He\'s been around forever. You should talk to him if you haven\'t already.' },
          { speaker: 'Villager Pam', text: 'My kids love your shows, by the way. The one where you pulled the endless fries out of your hat? Classic!' },
        ],
      },
      {
        condition: 'after_beat_003',
        lines: [
          { speaker: 'Villager Pam', text: 'The Arches are flickering! I was hanging laundry and all my clothes turned inside-out. The magic is getting unstable!' },
          { speaker: 'Villager Pam', text: 'My neighbor swears she saw a dark figure near the Arches last week. She said it was stripey. Like old-fashioned prison pajamas. Weird, right?' },
        ],
      },
      {
        condition: 'after_beat_006',
        lines: [
          { speaker: 'Villager Pam', text: 'The goblins are CORRUPTED? Oh my goodness! My kids aren\'t allowed in the fields anymore. Not until this is sorted out.' },
          { speaker: 'Villager Pam', text: 'Please be careful, Ronald. We\'re all counting on you.' },
          { speaker: 'Villager Pam', text: 'And if you see my kids near the cave entrance, send them home! They keep sneaking off to look for "adventure." They get it from their father.' },
        ],
      },
      {
        condition: 'after_beat_011',
        lines: [
          { speaker: 'Villager Pam', text: 'The Hamburglar? Really? I used to have a Hamburglar lunchbox when I was little. My mom threw it away after he went rogue.' },
          { speaker: 'Villager Pam', text: 'I kind of feel bad for him, to be honest. Not for the stealing — for the being alone part. Nobody deserves to be forgotten.' },
          { speaker: 'Villager Pam', text: 'But don\'t tell my kids I said that. They think the Hamburglar is the scariest thing since the McRib disappearance.' },
        ],
      },
      {
        condition: 'after_beat_018',
        lines: [
          { speaker: 'Villager Pam', text: 'Ronald, you\'re back! And the Arches are stable again! My laundry is right-side out for the first time in weeks!' },
          { speaker: 'Villager Pam', text: 'The kids have been telling everyone at school that they met the real Ronald McDonald. They\'re absolutely insufferable now. Thank you.' },
          { speaker: 'Villager Pam', text: 'You\'re always welcome here, you know that? Fry Village is your home, Ronald. Come back anytime.' },
        ],
      },
      {
        condition: 'default',
        lines: [
          { speaker: 'Villager Pam', text: 'Lovely day, isn\'t it? Well, ignoring the flickering magic sky.' },
          { speaker: 'Villager Pam', text: 'Have you talked to Gretha? Her pies are the best in the village. They\'re also magically delicious — literally. The Arches bless her oven.' },
          { speaker: 'Villager Pam', text: 'Tip for a newcomer: check behind waterfalls and under bridges. The McWorld is full of hidden items. My kids find them all the time!' },
        ],
      },
    ],
    questGiver: false,
  },

  fry_village_villager_2: {
    id: 'fry_village_villager_2',
    name: 'Villager Tom',
    location: 'Fry Village',
    region: 'fry_valley',
    position: { x: -5, z: 10 },
    description: 'A young man who dreams of adventure.',
    dialogue: [
      {
        condition: 'first_meeting',
        lines: [
          { speaker: 'Villager Tom', text: 'Whoa, it\'s Ronald McDonald! I\'ve always wanted to be an adventurer like you!' },
          { speaker: 'Villager Tom', text: 'Did you know the fry fields to the south have been really weird lately? There are these dark trails on the ground. Golden light, just... leaking out of the soil.' },
          { speaker: 'Villager Tom', text: 'I tried following them once, but they led to the caves and I chickened out. Those caves are SPOOKY.' },
          { speaker: 'Villager Tom', text: 'Oh! Combat tip I learned from a traveling warrior: press the guard button right before an enemy attacks to block. The timing is tight, but it reduces damage by half! I\'ve never actually done it, but the warrior seemed to know what he was talking about.' },
        ],
      },
      {
        condition: 'after_beat_004',
        lines: [
          { speaker: 'Villager Tom', text: 'You\'re investigating the Arches? That is SO COOL. Can I come with you? ...No? Okay, I understand.' },
          { speaker: 'Villager Tom', text: 'I\'ve been practicing with a stick sword. I\'m getting pretty good! I can almost hit a target from five feet away. That\'s good, right?' },
        ],
      },
      {
        condition: 'after_beat_006',
        lines: [
          { speaker: 'Villager Tom', text: 'The goblins are corrupted?! I KNEW those dark trails were bad news! I\'m glad I didn\'t go into those caves.' },
          { speaker: 'Villager Tom', text: 'I overheard some merchants talking about a "Fry Golem" in the caves. Apparently it\'s made of corrupted fry magic. That sounds terrifying and AWESOME at the same time.' },
        ],
      },
      {
        condition: 'after_beat_011',
        lines: [
          { speaker: 'Villager Tom', text: 'You went INTO the caves? And fought a FRY GOLEM? That is SO COOL!' },
          { speaker: 'Villager Tom', text: 'And the Hamburglar is behind it all? I... I actually kind of remember him. My mom used to tell stories. She said he was funny, in a scary sort of way.' },
          { speaker: 'Villager Tom', text: 'When I grow up, I want to be brave like you, Ronald!' },
          { speaker: 'Villager Tom', text: 'Did you know you can dodge-roll to avoid enemy attacks in the field? If you time it right, you can even avoid triggering battles entirely. Not that I\'ve ever tried — I\'ve never left the village. But I read it in an adventurer\'s guide!' },
        ],
      },
      {
        condition: 'after_beat_016',
        lines: [
          { speaker: 'Villager Tom', text: 'Officer Big Mac is free?! He\'s even cooler than in the stories! They say he once arrested fifty Comicfoil grunts single-handedly!' },
          { speaker: 'Villager Tom', text: 'I want to join the McWorld Guard when I grow up. I\'ll be the youngest guard ever! ...Don\'t tell my mom I said that.' },
        ],
      },
      {
        condition: 'after_beat_018',
        lines: [
          { speaker: 'Villager Tom', text: 'You faced the Hamburglar and WON! And you gave him a second chance?! You\'re not just a hero — you\'re a LEGEND!' },
          { speaker: 'Villager Tom', text: 'I\'m going to write a ballad about you. It\'s called "The Ballad of Ronald and the Hamburglar\'s Redemption." I\'ve already got the first verse: "Through fry fields dark and mountains steep, one clown faced danger, made villains weep..."' },
          { speaker: 'Villager Tom', text: 'It\'s a work in progress. But you\'re going to love it!' },
        ],
      },
      {
        condition: 'default',
        lines: [
          { speaker: 'Villager Tom', text: 'Someday I\'m going to leave this village and see the whole McWorld!' },
          { speaker: 'Villager Tom', text: 'Have you been to the caves? I hear there\'s something big living in there. I\'m too scared to check myself.' },
          { speaker: 'Villager Tom', text: 'Exploration tip: talk to everyone you meet! NPCs — I mean, villagers — know all sorts of useful things. Even me!' },
        ],
      },
    ],
    questGiver: false,
  },

  fry_village_villager_3: {
    id: 'fry_village_villager_3',
    name: 'Villager Gretha',
    location: 'Fry Village',
    region: 'fry_valley',
    position: { x: 8, z: -8 },
    description: 'An old woman who bakes the best pies in the village.',
    dialogue: [
      {
        condition: 'first_meeting',
        lines: [
          { speaker: 'Villager Gretha', text: 'Ronald, dearie! Have you noticed the kitchen magic has been off? My oven won\'t hold a steady temperature anymore.' },
          { speaker: 'Villager Gretha', text: 'Last week I tried baking an apple pie and it came out as cold as a McFlurry! AN APPLE PIE, Ronald! Cold!' },
          { speaker: 'Villager Gretha', text: 'If something doesn\'t fix the Arches soon, I\'ll have to start eating everything raw. And raw fries are NOT pleasant, dearie. Trust me.' },
        ],
      },
      {
        condition: 'after_beat_003',
        lines: [
          { speaker: 'Villager Gretha', text: 'The Arches are flickering! I knew it! My pie crusts have been falling flat for days. This is serious!' },
          { speaker: 'Villager Gretha', text: 'You go find whoever did this, Ronald. And when you come back, I\'ll have the biggest, warmest apple pie waiting for you. Assuming the oven still works.' },
          { speaker: 'Villager Gretha', text: 'Here\'s something useful: cooked food items restore more HP than raw ones. My pies heal 80 HP — twice what a standard potion does. And they taste better, if I do say so myself!' },
        ],
      },
      {
        condition: 'after_beat_004',
        lines: [
          { speaker: 'Villager Gretha', text: 'The Great Recipe is stolen? Oh dear, oh dear. That Recipe is what makes my pies special. Without it, they\'re just... pies. Good pies, mind you, but not MAGICAL pies.' },
          { speaker: 'Villager Gretha', text: 'I remember when the Recipe was first written. The smell of it! Paprika, joy, a hint of nostalgia, and something else... something you can\'t quite name. That\'s the magic ingredient, they say. The thing you can\'t name.' },
        ],
      },
      {
        condition: 'after_beat_006',
        lines: [
          { speaker: 'Villager Gretha', text: 'Corrupted goblins, you say? You know, I used to leave pies on my windowsill. The goblins would sneak up and take them. They always left a little potato in return — a trade!' },
          { speaker: 'Villager Gretha', text: 'Now they just smash the pies. Something has turned their hearts sour. Like milk left in the sun.' },
          { speaker: 'Villager Gretha', text: 'If you find a way to uncorrupt them, I\'ll bake a celebration pie the size of a wagon wheel. I mean it.' },
        ],
      },
      {
        condition: 'after_beat_011',
        lines: [
          { speaker: 'Villager Gretha', text: 'The Hamburglar! I remember when he used to steal pies from my windowsill. He was a gentleman about it, at least — always left a thank-you note.' },
          { speaker: 'Villager Gretha', text: 'One time he stole a pie right out of the oven. I chased him with a rolling pin for three blocks! We both laughed about it later. Well, I laughed. He ran faster.' },
          { speaker: 'Villager Gretha', text: 'If you\'re heading to the highlands, take my Hot Apple Pie with you. It\'s a healing item AND a hand-warmer. Two birds, one pie!' },
        ],
      },
      {
        condition: 'after_beat_018',
        lines: [
          { speaker: 'Villager Gretha', text: 'Ronald, dearie! The oven is working perfectly again! I\'ve baked you a celebration pie — it\'s on the windowsill. Still warm!' },
          { speaker: 'Villager Gretha', text: 'And the Hamburglar is redeemed? Well, if he wants to come back and steal a pie now and then, I won\'t chase him with the rolling pin. Maybe just a stern look.' },
          { speaker: 'Villager Gretha', text: 'You\'ve done good, Ronald. Real good. Now eat your pie before it gets cold. There\'s nothing sadder than a cold pie.' },
        ],
      },
      {
        condition: 'default',
        lines: [
          { speaker: 'Villager Gretha', text: 'My pies are the best in the valley. Don\'t let anyone tell you otherwise!' },
          { speaker: 'Villager Gretha', text: 'If you\'re hungry, I always have leftovers. HP restoration on the house!' },
          { speaker: 'Villager Gretha', text: 'Save your game at the Golden Counter in the village square, dearie. You never know when you\'ll need to start over. Life is like a pie — sometimes it falls, and you\'ve got to bake a new one.' },
        ],
      },
    ],
    questGiver: false,
  },

  // ============================================================
  // NEW FRY VALLEY NPCs
  // ============================================================

  lost_mcnugget: {
    id: 'lost_mcnugget',
    name: 'Lost McNugget',
    location: 'Fry Fields',
    region: 'fry_valley',
    position: { x: -25, z: 30 },
    description: 'A small, golden-brown McNugget with wide, frightened eyes. It clutches a tiny crumb like a safety blanket.',
    dialogue: [
      {
        condition: 'first_meeting',
        lines: [
          { speaker: 'Lost McNugget', text: 'Oh! Oh no! A-are you... are you going to eat me? Please don\'t eat me!' },
          { speaker: 'Lost McNugget', text: 'I... I got separated from my box family. We were a six-piece, and then there was a loud noise and everything scattered!' },
          { speaker: 'Lost McNugget', text: 'My brothers and sisters are out there somewhere. I can hear them calling, but I\'m too scared to move. The goblins keep chasing me!' },
          { speaker: 'Lost McNugget', text: 'You\'re Ronald McDonald? THE Ronald? Oh, I\'ve heard stories! You\'re nice, right? You won\'t dip me in sauce?' },
        ],
      },
      {
        condition: 'quest_available',
        questId: 'SQ07',
        lines: [
          { speaker: 'Lost McNugget', text: 'Ronald, please help me! I need to get back to Fry Village, but the path is full of goblins.' },
          { speaker: 'Lost McNugget', text: 'If you escort me home, my box family will be so grateful! We\'ll... we\'ll give you our special Sauce of Gratitude! It\'s legendary!' },
          { speaker: 'Lost McNugget', text: 'Just... stay close, okay? And don\'t let the big goblins near me. I\'m only bite-sized.' },
        ],
      },
      {
        condition: 'quest_complete',
        questId: 'SQ07',
        lines: [
          { speaker: 'Lost McNugget', text: 'We made it! We actually made it! I can see my box family! BROTHERS! SISTERS! I\'M HOME!' },
          { speaker: 'Lost McNugget', text: '*sniff* Thank you, Ronald. I\'ll never forget what you did. I was so scared out there. I thought I was a goner.' },
          { speaker: 'Lost McNugget', text: 'Here — the Sauce of Gratitude, as promised. It boosts all your stats temporarily. And it tastes amazing on everything. Even fries. ESPECIALLY fries.' },
        ],
      },
      {
        condition: 'after_beat_006',
        lines: [
          { speaker: 'Lost McNugget', text: 'Ronald! The goblins are corrupted? I... I noticed they were different. Meaner. Their eyes used to be warm, like honey. Now they\'re cold, like freezer burn.' },
          { speaker: 'Lost McNugget', text: 'I feel sorry for them, honestly. Being corrupted must be awful — like being a McNugget without any dipping sauce. Just... incomplete.' },
        ],
      },
      {
        condition: 'after_beat_011',
        lines: [
          { speaker: 'Lost McNugget', text: 'The Hamburglar did this? The one from the stories? But... he used to be friends with everyone, right?' },
          { speaker: 'Lost McNugget', text: 'My box family says they remember him. He used to visit the village and do magic tricks. Card tricks, mostly. He wasn\'t very good at them, but everyone clapped because he tried so hard.' },
          { speaker: 'Lost McNugget', text: 'Maybe if people had clapped a little louder, things would be different. ...That\'s a sad thought, isn\'t it?' },
        ],
      },
      {
        condition: 'after_beat_018',
        lines: [
          { speaker: 'Lost McNugget', text: 'Ronald! You\'re back! Look at me — I\'ve grown! Well, not really. I\'m still bite-sized. But I feel bigger on the inside!' },
          { speaker: 'Lost McNugget', text: 'My box family and I are doing great. We\'ve started a little support group for nuggets who\'ve been through scary experiences. We call it "The Crispy Circle."' },
          { speaker: 'Lost McNugget', text: 'You\'re always welcome at our meetings, Ronald. We saved you the comfy chair!' },
        ],
      },
      {
        condition: 'default',
        lines: [
          { speaker: 'Lost McNugget', text: 'Hi Ronald! I\'m doing much better now. The village feels safe again.' },
          { speaker: 'Lost McNugget', text: 'If you ever find other lost nuggets in the fields, let me know! The Crispy Circle is always accepting new members.' },
          { speaker: 'Lost McNugget', text: 'Tip: escort quests go faster if you stay ahead of your escortee. Enemies spawn behind you, so keep moving forward!' },
        ],
      },
    ],
    questGiver: true,
    quests: ['SQ07'],
  },

  fry_snatcher_reformed: {
    id: 'fry_snatcher_reformed',
    name: 'Reformed Fry Snatcher',
    location: 'Fry Village',
    region: 'fry_valley',
    position: { x: -20, z: 5 },
    description: 'A former fry snatcher with downcast eyes and a patched-up outfit. Trying hard to be better.',
    dialogue: [
      {
        condition: 'first_meeting',
        lines: [
          { speaker: 'Reformed Fry Snatcher', text: '...You\'re staring at me. I get that a lot. Yeah, I\'m the one who used to snatch fries from the fields.' },
          { speaker: 'Reformed Fry Snatcher', text: 'I know, I know. It was wrong. But you try being hungry and watching everyone else eat golden fries while you\'ve got nothing. It messes with your head.' },
          { speaker: 'Reformed Fry Snatcher', text: 'Ronald gave me a second chance. Told me I could change. So... I\'m trying. It\'s hard, though. Every time I see a fry, my hand twitches.' },
        ],
      },
      {
        condition: 'after_beat_011',
        lines: [
          { speaker: 'Reformed Fry Snatcher', text: 'So you found out about the Hamburglar. Yeah... I used to work for him. Not by choice — well, kind of by choice. It\'s complicated.' },
          { speaker: 'Reformed Fry Snatcher', text: 'He promised me a place where I\'d belong. Said the McWorld didn\'t want people like me. And you know what? He was right. At the time, nobody DID want me.' },
          { speaker: 'Reformed Fry Snatcher', text: 'But the Hamburglar doesn\'t care about you. You\'re just a tool to him. The moment I stopped being useful, he dropped me like a hot patty.' },
          { speaker: 'Reformed Fry Snatcher', text: 'His organization — the Comicfoil — they\'re not an army. They\'re lost people. Misfits who got told they didn\'t fit anywhere else. Remember that when you fight them.' },
          { speaker: 'Reformed Fry Snatcher', text: 'Combat tip: Comicfoil grunts carry Sesame Shields. Break the shield first, then attack. The shields block frontal attacks but not side hits. Flank them!' },
        ],
      },
      {
        condition: 'after_beat_012',
        lines: [
          { speaker: 'Reformed Fry Snatcher', text: 'The Condiment King is free? Ha! I remember him. He was one of the few Comicfoil officers who was actually nice to the grunts.' },
          { speaker: 'Reformed Fry Snatcher', text: 'He used to bring us mustard packets in the winter. Said a warm stomach makes a warm heart. Maybe that\'s why he got corrupted so easily — he was already soft.' },
          { speaker: 'Reformed Fry Snatcher', text: 'I\'m glad he\'s okay. The Hamburglar will not be. He doesn\'t take kindly to defection. Or failure. Or pretty much anything that isn\'t stealing.' },
        ],
      },
      {
        condition: 'after_beat_016',
        lines: [
          { speaker: 'Reformed Fry Snatcher', text: 'Big Mac is free? Good. He\'s the one who arrested me, actually. Was firm but fair. Didn\'t rough me up or anything.' },
          { speaker: 'Reformed Fry Snatcher', text: 'He told me, "You\'re not a bad kid. You just made bad choices." I think about that a lot. Still trying to make better choices.' },
          { speaker: 'Reformed Fry Snatcher', text: 'If you\'re going to the summit, watch out for the Hamburglar\'s right-hand... whatever it is. I never saw it clearly. Just shadows and stripes.' },
        ],
      },
      {
        condition: 'after_beat_018',
        lines: [
          { speaker: 'Reformed Fry Snatcher', text: 'He\'s... redeemed? The Hamburglar is redeemed?' },
          { speaker: 'Reformed Fry Snatcher', text: '*sits down* I need a minute. I spent years hating him for abandoning me. And now he\'s... what, a good guy again?' },
          { speaker: 'Reformed Fry Snatcher', text: '...Good for him. If HE can change, then maybe there\'s hope for all of us. Even us fry snatchers.' },
        ],
      },
      {
        condition: 'default',
        lines: [
          { speaker: 'Reformed Fry Snatcher', text: 'I\'m trying to stay clean. No snatching. It\'s been three weeks now.' },
          { speaker: 'Reformed Fry Snatcher', text: 'The village is slowly warming up to me. Pam said good morning yesterday. That\'s progress!' },
          { speaker: 'Reformed Fry Snatcher', text: 'If you want to know about the Comicfoil\'s tactics, just ask. I know all their patterns. Literally — I used to be one of them.' },
        ],
      },
    ],
    questGiver: false,
  },

  village_kids: {
    id: 'village_kids',
    name: 'Village Kids',
    location: 'Fry Village Square',
    region: 'fry_valley',
    position: { x: 5, z: 0 },
    description: 'A group of three energetic kids — a Nugget, a Small Fry, and a Cookie — playing near the village square.',
    dialogue: [
      {
        condition: 'first_meeting',
        lines: [
          { speaker: 'Nugget Kid', text: 'It\'s Ronald McDonald! Guys, GUYS! It\'s really him!' },
          { speaker: 'Small Fry Kid', text: 'Are you here to do a show? Please do a show! Do the one with the infinite fries!' },
          { speaker: 'Cookie Kid', text: 'I want to be an adventurer like you! I\'ve been practicing with a pretend sword. It\'s a stick. But it\'s a VERY good stick.' },
          { speaker: 'Nugget Kid', text: 'We\'re going to form a party when we grow up! Nugget, Fry, and Cookie — the greatest adventure team EVER!' },
        ],
      },
      {
        condition: 'after_beat_003',
        lines: [
          { speaker: 'Small Fry Kid', text: 'The Arches are flickering! Is it because of the scary magic? My mom says the world is broken.' },
          { speaker: 'Cookie Kid', text: 'It\'s NOT broken, it\'s just... glitchy. Like when the ice cream machine breaks. It\'ll get fixed, right?' },
          { speaker: 'Nugget Kid', text: 'Ronald will fix it! Ronald fixes everything! ...Right, Ronald?' },
        ],
      },
      {
        condition: 'after_beat_006',
        lines: [
          { speaker: 'Nugget Kid', text: 'The goblins are bad now? We used to play hide and seek with them! They were really good at hiding.' },
          { speaker: 'Small Fry Kid', text: 'My combat tip: if you press the attack button three times fast, you do a combo! I learned it from watching Ronald fight!' },
          { speaker: 'Cookie Kid', text: 'My exploration tip: look for shiny things on the ground! I found a McCoin behind Gretha\'s house last week. Shiny things are ALWAYS good!' },
        ],
      },
      {
        condition: 'after_beat_011',
        lines: [
          { speaker: 'Cookie Kid', text: 'The Hamburglar! We know about him! Our parents told us not to talk about him, but we do anyway.' },
          { speaker: 'Nugget Kid', text: 'They say he steals everything. Even things that aren\'t food! Once he stole a whole rainbow! ...Okay, I made that part up.' },
          { speaker: 'Small Fry Kid', text: 'Save tip: my big sister says you should save before every boss. She lost two hours of progress once because she forgot. She was SO mad!' },
          { speaker: 'Cookie Kid', text: 'When you fight bad guys, use the right element! Fire beats ice, ice beats plants, plants beat... uh... what beats plants? My stick beats plants!' },
        ],
      },
      {
        condition: 'after_beat_016',
        lines: [
          { speaker: 'Nugget Kid', text: 'Officer Big Mac is the COOLEST! He\'s like a superhero, but made of burger!' },
          { speaker: 'Small Fry Kid', text: 'When I grow up, I\'m going to be as strong as Big Mac! I\'m doing push-ups every day. I can do two now. TWO!' },
          { speaker: 'Cookie Kid', text: 'We made a Ronald fan club! We have three members. Well, four if you count my dog. He\'s an honorary member.' },
        ],
      },
      {
        condition: 'after_beat_018',
        lines: [
          { speaker: 'Nugget Kid', text: 'RONALD! You\'re BACK! Did you win? Did you save the world?!' },
          { speaker: 'Small Fry Kid', text: 'My mom says the Arches stopped flickering. That means you did it! I KNEW you would!' },
          { speaker: 'Cookie Kid', text: 'When we grow up, we\'re going to be heroes just like you. The three of us. The Crunchy Trio! That\'s our team name. We\'re still working on it.' },
          { speaker: 'Nugget Kid', text: 'Thank you, Ronald. You\'re the best hero in the whole McWorld. And the best clown. But mostly the best hero!' },
        ],
      },
      {
        condition: 'default',
        lines: [
          { speaker: 'Small Fry Kid', text: 'Wanna play tag? You\'re it! ...Actually, you\'re probably too busy saving the world. Never mind.' },
          { speaker: 'Cookie Kid', text: 'Combat tip from us: don\'t forget to defend! Blocking is boring but it keeps you alive. My stick broke because I didn\'t block.' },
          { speaker: 'Nugget Kid', text: 'Exploration tip: if you see a crack in a wall, try walking into it! Sometimes there are secret areas. Sometimes there are just walls. But it\'s worth trying!' },
        ],
      },
    ],
    questGiver: false,
  },

  // ============================================================
  // BURGER HIGHLANDS NPCs
  // ============================================================

  highland_guard: {
    id: 'highland_guard',
    name: 'Highland Guard',
    location: 'Sesame Pass',
    region: 'burger_highlands',
    position: { x: 15, z: 20 },
    description: 'A stern but friendly guard stationed at the Sesame Pass checkpoint.',
    dialogue: [
      {
        condition: 'first_meeting',
        lines: [
          { speaker: 'Highland Guard', text: 'Halt! State your business, travelers. The Sesame Pass is not a place for casual strolls.' },
          { speaker: 'Highland Guard', text: 'Organized bandits have been attacking travelers. They wear uniforms — dark stripes, like a prisoner\'s outfit. They call themselves the Comicfoil.' },
          { speaker: 'Highland Guard', text: 'Officer Big Mac was last seen near the eastern ridge. But he was surrounded by Comicfoil grunts last we heard.' },
          { speaker: 'Highland Guard', text: 'Listen, if you\'re heading up the pass, keep your party tight. The Comicfoil like to ambush from higher ground. Watch the cliffs above you — sesame seeds falling is a sign they\'re up there.' },
        ],
      },
      {
        condition: 'quest_available',
        questId: 'SQ03',
        lines: [
          { speaker: 'Highland Guard', text: 'The highlands have been crawling with enemies. If you can thin their numbers while you\'re up there, it would help us enormously.' },
          { speaker: 'Highland Guard', text: 'Defeat eight of the blighters and I\'ll reward you with some Arch Armor. Finest protection in the highlands!' },
          { speaker: 'Highland Guard', text: 'Also — there\'s a baker in the highlands who\'s been looking for sesame seeds. If you find any on the enemies, she\'d be grateful.' },
          { speaker: 'Highland Guard', text: 'Combat tip: Comicfoil grunts attack in patterns. Three hits, then they pause. Count their strikes and counterattack during the pause. It\'s like a dance, but with more punching.' },
        ],
      },
      {
        condition: 'quest_complete',
        questId: 'SQ03',
        lines: [
          { speaker: 'Highland Guard', text: 'Eight enemies defeated! Outstanding work, soldier! The pass is noticeably calmer already.' },
          { speaker: 'Highland Guard', text: 'Here\'s your Arch Armor as promised. It boosts defense and reduces ice damage by 25%. You\'ll need that up here — the mountain gets COLD.' },
          { speaker: 'Highland Guard', text: 'My deputy is stationed further up the pass. He\'s got a lead on some Hamburglar graffiti that needs cleaning up. Talk to him if you want another job.' },
        ],
      },
      {
        condition: 'after_beat_012',
        lines: [
          { speaker: 'Highland Guard', text: 'The Condiment King has been freed? That\'s wonderful news! He was always more confused than evil, if you ask me.' },
          { speaker: 'Highland Guard', text: 'But the Comicfoil are still active up here. Without the Condiment King to direct them, they\'ve gotten... disorganized. More dangerous, actually. A disorganized enemy is unpredictable.' },
          { speaker: 'Highland Guard', text: 'Watch for stragglers on the mountain paths. They\'re setting up traps now — tripwires made of cheese strings. Sounds silly until you\'re dangling upside down.' },
        ],
      },
      {
        condition: 'after_beat_016',
        lines: [
          { speaker: 'Highland Guard', text: 'You rescued Officer Big Mac! Outstanding work! I knew you had it in you.' },
          { speaker: 'Highland Guard', text: 'With the Big Mac on the case, those Comicfoil grunts won\'t know what hit them. The pass is already safer — I can feel it.' },
          { speaker: 'Highland Guard', text: 'Good luck on the summit, heroes. The McWorld is behind you all the way!' },
          { speaker: 'Highland Guard', text: 'One last tip: the final ascent has no save points. Make sure you save HERE before going further. I can\'t tell you how many adventurers I\'ve seen rush in unprepared. Don\'t be that adventurer.' },
        ],
      },
      {
        condition: 'after_beat_018',
        lines: [
          { speaker: 'Highland Guard', text: 'The Hamburglar is defeated! Or... redeemed? Either way, the highlands are peaceful for the first time in months!' },
          { speaker: 'Highland Guard', text: 'I\'ve already filed the paperwork. Which, in the McWorld, involves a lot of ketchup stamps. It\'s very official and very messy.' },
          { speaker: 'Highland Guard', text: 'Thank you, Ronald. From all of us guarding this pass. We won\'t forget what you did.' },
        ],
      },
      {
        condition: 'default',
        lines: [
          { speaker: 'Highland Guard', text: 'The Highlands are dangerous. Are you prepared?' },
          { speaker: 'Highland Guard', text: 'Officer Big Mac was seen patrolling the eastern ridge. He could use backup.' },
          { speaker: 'Highland Guard', text: 'Hamburglar\'s lieutenant has taken over the mountain pass! Be on your guard.' },
          { speaker: 'Highland Guard', text: 'Save your game at the checkpoint before heading deeper. There\'s no Golden Counter past this point.' },
        ],
      },
    ],
    questGiver: true,
    quests: ['SQ03', 'SQ09'],
  },

  highland_baker: {
    id: 'highland_baker',
    name: 'Highland Baker',
    location: 'Sesame Pass',
    region: 'burger_highlands',
    position: { x: 25, z: 10 },
    description: 'A baker who set up shop along the mountain trail, selling fresh buns to travelers.',
    dialogue: [
      {
        condition: 'first_meeting',
        lines: [
          { speaker: 'Highland Baker', text: 'Oh, hello there! I\'m the Highland Baker. I make the freshest buns this side of Mount Double-Patty!' },
          { speaker: 'Highland Baker', text: 'You might be wondering — why set up a bakery on a mountain trail? Because hungry adventurers need carbs, that\'s why! Strategic baking, I call it.' },
          { speaker: 'Highland Baker', text: 'My buns are made with highland wheat and mountain spring water. The magic in the Arches makes them rise perfectly. Well, USUALLY perfectly. The flickering has been... deflating things.' },
        ],
      },
      {
        condition: 'quest_available',
        questId: 'SQ09',
        lines: [
          { speaker: 'Highland Baker', text: 'But I\'ve run low on sesame seeds. The highland enemies carry them sometimes — they get stuck in their armor, I suppose.' },
          { speaker: 'Highland Baker', text: 'If you can collect 15 sesame seeds for me, I\'ll make you a Bun Shield! It\'s... well, it\'s a shield made of a very sturdy bun. Don\'t laugh, it works!' },
          { speaker: 'Highland Baker', text: 'The seeds are more common on the upper paths. Watch out for the Sesame Sprayers up there — they\'re annoying but drop seeds every time.' },
        ],
      },
      {
        condition: 'quest_complete',
        questId: 'SQ09',
        lines: [
          { speaker: 'Highland Baker', text: 'Fifteen sesame seeds! Beautiful! Let me get baking right away!' },
          { speaker: 'Highland Baker', text: '*kneading furiously* And... DONE! The Bun Shield! It blocks physical attacks AND smells amazing. Enemies will be too distracted by the scent to fight properly!' },
          { speaker: 'Highland Baker', text: 'Okay, that last part might be an exaggeration. But it IS a solid shield. And it never goes stale! Magic baking, my friend.' },
        ],
      },
      {
        condition: 'after_beat_012',
        lines: [
          { speaker: 'Highland Baker', text: 'The Condiment King is free? I hope he\'s okay. He was my best customer! Always ordered mustard buns. Mustard buns! Can you imagine? Not everyone\'s cup of tea, but he loved them.' },
          { speaker: 'Highland Baker', text: 'With the Arches still flickering, my buns are only rising to about 80% capacity. They\'re... a little flat. Still tasty, but flat.' },
        ],
      },
      {
        condition: 'after_beat_016',
        lines: [
          { speaker: 'Highland Baker', text: 'Big Mac is free! He used to buy my buns every morning. Twenty buns. Every. Single. Morning. That man has an appetite.' },
          { speaker: 'Highland Baker', text: 'I\'ve already prepared a celebration batch for when he comes through. Assuming the Arches cooperate and let them rise properly!' },
        ],
      },
      {
        condition: 'after_beat_018',
        lines: [
          { speaker: 'Highland Baker', text: 'The Arches are stable! Look at these buns — they\'re rising like they haven\'t risen in months! Perfect, golden, fluffy!' },
          { speaker: 'Highland Baker', text: 'I\'m naming a new bun after you. The Ronald Bun. It\'s got ketchup filling and a smiley face on top. Kids are going to LOVE it.' },
          { speaker: 'Highland Baker', text: 'Stop by anytime, hero. First bun\'s on the house. Well, ALL buns are on the house for you, actually. I insist!' },
        ],
      },
      {
        condition: 'default',
        lines: [
          { speaker: 'Highland Baker', text: 'Fresh buns for sale! Get your fresh buns! Oh, wait — I\'m out of sesame seeds. Could you help with that?' },
          { speaker: 'Highland Baker', text: 'The mountain air is perfect for baking. If only I had more ingredients!' },
          { speaker: 'Highland Baker', text: 'Tip: food items heal more than potions, but they take longer to use in combat. Save the big meals for after the fight!' },
        ],
      },
    ],
    questGiver: true,
    quests: ['SQ09'],
  },

  wandering_monk: {
    id: 'wandering_monk',
    name: 'Wandering Monk',
    location: 'Burger Highlands',
    region: 'burger_highlands',
    position: { x: -30, z: -15 },
    description: 'A mysterious monk who wanders the highlands, sensing the world\'s spiritual state.',
    dialogue: [
      {
        condition: 'first_meeting',
        lines: [
          { speaker: 'Wandering Monk', text: 'I sense a great darkness in these mountains. The Hamburglar has been stealing burgers across the land.' },
          { speaker: 'Wandering Monk', text: 'You must gather all the heroes. Only together can you stop him. The Condiment Kings are merely the beginning. There are shadows behind the throne.' },
          { speaker: 'Wandering Monk', text: 'When the Arches flicker, it is not just the magic that fades. It is the hope of the McWorld itself. Guard that hope well, Ronald.' },
          { speaker: 'Wandering Monk', text: 'I am a student of the Old Arches. Before the Golden Arches stood, there were other signs — older, deeper, carved into the bedrock of the world. They sleep now, but they remember.' },
        ],
      },
      {
        condition: 'after_beat_004',
        lines: [
          { speaker: 'Wandering Monk', text: 'The Great Recipe is stolen. Yes, I felt the tremor when it was taken. It was like the world held its breath.' },
          { speaker: 'Wandering Monk', text: 'The Recipe is not merely a document, Ronald. It is a covenant — a promise between the land and its people. Food nourishes the body; magic nourishes the spirit. The Recipe binds both.' },
          { speaker: 'Wandering Monk', text: 'Whoever stole it understood this. They knew that breaking the Recipe would break the connection between magic and meal. The question is: why? What do they gain from a world without magic?' },
        ],
      },
      {
        condition: 'after_beat_011',
        lines: [
          { speaker: 'Wandering Monk', text: 'The Hamburglar. So it is as I feared — and as I hoped.' },
          { speaker: 'Wandering Monk', text: 'I met him once, years ago. He came to the highlands seeking solitude. He sat on a rock for three days, just watching the sun rise and set over the Arches.' },
          { speaker: 'Wandering Monk', text: 'He asked me, "If a person is forgotten, do they still exist?" I did not have an answer then. I do not have one now. But the question has haunted me ever since.' },
          { speaker: 'Wandering Monk', text: 'Spiritual tip: belief shapes reality in the McWorld. If you believe a path exists, it often does. Look for the subtle signs — oddly shaped rocks, unusual fry patterns, arches in the distance. They guide you to hidden places.' },
        ],
      },
      {
        condition: 'after_beat_012',
        lines: [
          { speaker: 'Wandering Monk', text: 'The Condiment King is freed. One chain broken. But the Hamburglar holds more chains than you know.' },
          { speaker: 'Wandering Monk', text: 'There are others — mascots who were cast aside, forgotten, diminished. The Hamburglar has been gathering them. Giving them purpose. Twisted purpose, but purpose nonetheless.' },
          { speaker: 'Wandering Monk', text: 'To break the chains, you must not only defeat them — you must remind them who they were. Identity is the strongest magic of all.' },
        ],
      },
      {
        condition: 'after_beat_016',
        lines: [
          { speaker: 'Wandering Monk', text: 'Officer Big Mac walks free. Good. He is one of the Anchors — mascots whose presence stabilizes the Arches.' },
          { speaker: 'Wandering Monk', text: 'With Big Mac free, the Arches have regained perhaps 15% of their stability. Not enough. But a start.' },
          { speaker: 'Wandering Monk', text: 'The summit awaits, Ronald. What you find there will change everything. Prepare your spirit as well as your party. The final battle of this act is not just about strength — it is about understanding.' },
        ],
      },
      {
        condition: 'after_beat_018',
        lines: [
          { speaker: 'Wandering Monk', text: 'It is done. The Hamburglar has been shown mercy, and the Arches have responded in kind.' },
          { speaker: 'Wandering Monk', text: 'You have completed the first act of a much larger story, Ronald. The McWorld is vast, and the forces that threaten it go beyond any one thief.' },
          { speaker: 'Wandering Monk', text: 'There are other lands — the Desert of Desaturation, the Ice Cream Tundra, the Deep Fry Dimension. Each holds its own mysteries, its own forgotten mascots, its own broken covenants.' },
          { speaker: 'Wandering Monk', text: 'But for now, rest. You have earned it. The monk smiles. The Arches shine a little brighter. The world takes a breath, and begins to heal.' },
        ],
      },
      {
        condition: 'default',
        lines: [
          { speaker: 'Wandering Monk', text: 'The wind carries whispers. Listen, and you will find your path.' },
          { speaker: 'Wandering Monk', text: 'If you seek hidden knowledge, look where the Arches\' light does not reach. Shadows are not always enemies — sometimes they are simply unexplored.' },
          { speaker: 'Wandering Monk', text: 'Save your progress often, traveler. The mountain remembers, but only if you give it something to remember.' },
        ],
      },
    ],
    questGiver: false,
  },

  // ============================================================
  // NEW BURGER HIGHLANDS NPCs
  // ============================================================

  comicfoil_defector: {
    id: 'comicfoil_defector',
    name: 'Comicfoil Defector',
    location: 'Sesame Pass',
    region: 'burger_highlands',
    position: { x: 10, z: -25 },
    description: 'A nervous figure in a tattered black-and-white striped uniform, hiding behind a rock outcropping.',
    dialogue: [
      {
        condition: 'first_meeting',
        lines: [
          { speaker: 'Comicfoil Defector', text: 'D-don\'t hurt me! I\'m not fighting anymore! I QUIT!' },
          { speaker: 'Comicfoil Defector', text: 'I know what you\'re thinking — another Comicfoil grunt. But I\'m done. I\'m OUT. I couldn\'t... I couldn\'t keep doing what they asked.' },
          { speaker: 'Comicfoil Defector', text: 'You\'re Ronald McDonald, aren\'t you? The boss talks about you constantly. Says you\'re the reason everything went wrong for him. Says you forgot about him.' },
          { speaker: 'Comicfoil Defector', text: 'I\'m not here to fight. I just want to go home. But home doesn\'t want me back, and the Comicfoil will catch me if I try to leave through the main pass.' },
        ],
      },
      {
        condition: 'after_beat_011',
        lines: [
          { speaker: 'Comicfoil Defector', text: 'So you\'ve seen the Hamburglar\'s emblem. Then you know it\'s him. I can tell you more — if you promise not to punch me.' },
          { speaker: 'Comicfoil Defector', text: 'The Comicfoil isn\'t big. Maybe fifty grunts total. We\'re not soldiers — we\'re cooks, cleaners, former mascots who lost their jobs. People who had nowhere else to go.' },
          { speaker: 'Comicfoil Defector', text: 'The Hamburglar gave us uniforms. Stripes, like his. Said it made us a family. And for a while, it felt like one. He remembered our names. He asked about our days.' },
          { speaker: 'Comicfoil Defector', text: 'Then he started... changing. The missions got darker. Stealing magic instead of burgers. Corrupting creatures instead of pranking them. He said it was for the "greater good," but I never saw the good.' },
          { speaker: 'Comicfoil Defector', text: 'Enemy intel: the Comicfoil has three types — Grunts (weak, shielded), Bruisers (strong, slow, no shield), and Sneaks (fast, invisible until they attack). Watch for Sneaks in the mountain paths. They hide behind sesame rocks.' },
        ],
      },
      {
        condition: 'after_beat_012',
        lines: [
          { speaker: 'Comicfoil Defector', text: 'The Condiment King is free? Good. He was always kind of... confused. Like he was under a spell he didn\'t understand.' },
          { speaker: 'Comicfoil Defector', text: 'Rumor among the grunts was that the Condiment King didn\'t choose to serve the Hamburglar. He was... recruited. Not gently, either. The Hamburglar has a way of finding your weak spot and pressing until you fold.' },
          { speaker: 'Comicfoil Defector', text: 'If other "lieutenants" are similar, they might not all be willing servants. Keep that in mind.' },
        ],
      },
      {
        condition: 'after_beat_016',
        lines: [
          { speaker: 'Comicfoil Defector', text: 'Big Mac is free? Then... then maybe I can go home after all. Big Mac always gave people second chances. Even us grunts.' },
          { speaker: 'Comicfoil Defector', text: 'If you see him, tell him... tell him I\'m sorry. I didn\'t want any of this. I just wanted to belong somewhere.' },
          { speaker: 'Comicfoil Defector', text: 'Combat tip for the summit: the Hamburglar uses illusion magic. He\'ll create fake copies of himself. The real one casts a shadow; the fakes don\'t. Watch the ground, not the Hamburglars.' },
        ],
      },
      {
        condition: 'after_beat_018',
        lines: [
          { speaker: 'Comicfoil Defector', text: 'He\'s... redeemed? The boss is redeemed?' },
          { speaker: 'Comicfoil Defector', text: '*wipes eyes* Maybe... maybe there\'s a path back for all of us. If even the Hamburglar can find his way home, maybe I can too.' },
          { speaker: 'Comicfoil Defector', text: 'Thank you, Ronald. For everything. I\'m going to try to go back to my village. I don\'t know if they\'ll accept me. But I\'m going to try. That\'s all anyone can do, right?' },
        ],
      },
      {
        condition: 'default',
        lines: [
          { speaker: 'Comicfoil Defector', text: 'I\'m staying hidden for now. It\'s safer here.' },
          { speaker: 'Comicfoil Defector', text: 'If you need intel on the Comicfoil, I\'m your... well, I was going to say "your man," but I\'m not really anyone\'s man right now. Just ask.' },
          { speaker: 'Comicfoil Defector', text: 'Watch the upper paths. The Sneaks like to hide behind the big sesame boulders. If you see a boulder that looks TOO round, it might be a Sneak crouching.' },
        ],
      },
    ],
    questGiver: false,
  },

  mountain_explorer: {
    id: 'mountain_explorer',
    name: 'Mountain Explorer',
    location: 'Burger Highlands',
    region: 'burger_highlands',
    position: { x: -15, z: 30 },
    description: 'An eccentric figure in a pith helmet covered in sesame seeds, carrying a map that is three times their body size.',
    dialogue: [
      {
        condition: 'first_meeting',
        lines: [
          { speaker: 'Mountain Explorer', text: 'AH! Fellow traveler! You find me at a most inopportune moment — I\'ve just survived a sesame seed avalanche!' },
          { speaker: 'Mountain Explorer', text: 'You haven\'t experienced terror until you\'ve been buried alive in sesame seeds. They get EVERYWHERE. I\'m still finding them in places I\'d rather not discuss.' },
          { speaker: 'Mountain Explorer', text: 'I am the Mountain Explorer! Cartographer of the Burger Highlands, chart-maker of Sesame Pass, and the only person to have mapped every sesame seed deposit in the range! Well, except for the ones that avalanched on me just now.' },
          { speaker: 'Mountain Explorer', text: 'My map is 90% complete! The remaining 10% is labeled "Here Be Sesame Dragons," which I hope is inaccurate.' },
        ],
      },
      {
        condition: 'after_beat_004',
        lines: [
          { speaker: 'Mountain Explorer', text: 'The Great Recipe is stolen? Fascinating! Terrible, yes, but FASCINATING from a cartographic perspective!' },
          { speaker: 'Mountain Explorer', text: 'You see, the Recipe\'s magic influenced the geography of the McWorld. Paths that existed yesterday may not exist today. I\'ve had to redraw my maps SIX TIMES this week!' },
          { speaker: 'Mountain Explorer', text: 'Treasure tip: when the Arches flicker, hidden areas become visible for a short time. If you see a shimmer in the air, walk toward it! That\'s a secret area revealing itself. They disappear when the Arches stabilize, so be quick!' },
        ],
      },
      {
        condition: 'after_beat_011',
        lines: [
          { speaker: 'Mountain Explorer', text: 'The Hamburglar! Yes, I\'ve seen his operatives on the mountain. They keep to the higher paths — the ones I haven\'t mapped yet. Suspiciously high paths. Almost like they KNOW my maps are incomplete there.' },
          { speaker: 'Mountain Explorer', text: 'I\'ve been tracking unusual activity near the summit. There\'s a hidden cave system behind the northern ridge. I\'d explore it myself, but the last time I entered a cave, I was chased by a very territorial Fry Golem for forty-five minutes.' },
          { speaker: 'Mountain Explorer', text: 'Exploration tip: the cave system behind the northern ridge has TWO entrances. The main one is guarded, but there\'s a second entrance behind a waterfall on the western face. Use that one to skip the guards!' },
        ],
      },
      {
        condition: 'after_beat_012',
        lines: [
          { speaker: 'Mountain Explorer', text: 'The Condiment King is freed! I met him once, you know. He offered me a mustard sandwich. I politely declined. Mustard at high altitude is... unpredictable.' },
          { speaker: 'Mountain Explorer', text: 'I\'ve noticed the mountain paths have been shifting less since the King was freed. The magic is stabilizing — slightly. My maps are only being redrawn twice a week now instead of daily!' },
          { speaker: 'Mountain Explorer', text: 'Hidden path tip: look for cracks in the mountain walls that glow with golden light. Those are stable paths. Cracks with DARK light are corrupted and lead to dangerous areas. Know the difference!' },
        ],
      },
      {
        condition: 'after_beat_016',
        lines: [
          { speaker: 'Mountain Explorer', text: 'Officer Big Mac is free! Excellent! He\'s the only person who never laughed at my sesame seed avalanche stories. Well, he laughed once. But he apologized immediately.' },
          { speaker: 'Mountain Explorer', text: 'I\'ve completed my map of the summit approach. Here, let me describe it for you: three switchbacks, two ambush points, and one extremely angry boulder that I\'ve named "Gerald." Avoid Gerald.' },
          { speaker: 'Mountain Explorer', text: 'Summit tip: there\'s a save point hidden in a crevice halfway up the final ascent. It\'s behind the third switchback, on the left side. Easy to miss! Save there before the final push.' },
        ],
      },
      {
        condition: 'after_beat_018',
        lines: [
          { speaker: 'Mountain Explorer', text: 'The Arches are stable! My maps are finally ACCURATE! I can publish the definitive atlas of the Burger Highlands!' },
          { speaker: 'Mountain Explorer', text: 'No more redraws! No more sesame avalanches shifting the terrain! Well, sesame avalanches will still happen. They\'re a natural phenomenon. But at least the PATHS won\'t move anymore!' },
          { speaker: 'Mountain Explorer', text: 'I\'m dedicating my atlas to you, Ronald. "The McDonald Highlands: A Complete Cartography — Dedicated to the Hero Who Stabilized the Arches (and Didn\'t Laugh at My Sesame Seed Stories)."' },
        ],
      },
      {
        condition: 'default',
        lines: [
          { speaker: 'Mountain Explorer', text: 'I\'ve mapped 47 hidden paths in these highlands! Well, 46. The 47th was a dead end. Into a sesame pit. I don\'t want to talk about it.' },
          { speaker: 'Mountain Explorer', text: 'Treasure hunting tip: check behind waterfalls. ALWAYS check behind waterfalls. I\'ve found four treasure chests behind waterfalls in these mountains. And one very angry Fry Golem. Behind a waterfall. In a cave. It was a bad day.' },
          { speaker: 'Mountain Explorer', text: 'If you\'re looking for hidden paths, watch for unusual fry formations on the ground. They mark secret trailheads. The more golden the fry, the better the path!' },
        ],
      },
    ],
    questGiver: false,
  },

  big_mac_deputy: {
    id: 'big_mac_deputy',
    name: 'Big Mac\'s Deputy',
    location: 'Sesame Pass Checkpoint',
    region: 'burger_highlands',
    position: { x: 18, z: 25 },
    description: 'A loyal deputy in a badge-shaped helmet, standing guard at the checkpoint. Looks worried but determined.',
    dialogue: [
      {
        condition: 'first_meeting',
        lines: [
          { speaker: 'Big Mac\'s Deputy', text: 'Hold up, traveler. I\'m Big Mac\'s Deputy. The officer went ahead to the eastern ridge three days ago and hasn\'t come back.' },
          { speaker: 'Big Mac\'s Deputy', text: 'He took four guards with him. Last report said they were surrounded by Comicfoil. He told me to stay here and hold the checkpoint. Said, "Don\'t follow me, kid. Hold the line."' },
          { speaker: 'Big Mac\'s Deputy', text: 'I\'ve been holding the line. But if you\'re heading up there... would you look for him? He\'s tough, but even Big Mac can\'t fight forever.' },
          { speaker: 'Big Mac\'s Deputy', text: 'Big Mac is the bravest mascot I\'ve ever known. When the Comicfoil first appeared, he didn\'t run. He stood in the middle of the pass and said, "You shall not pass. Not on my watch. Not ever." He\'s been standing there ever since.' },
        ],
      },
      {
        condition: 'quest_available',
        questId: 'SQ10',
        lines: [
          { speaker: 'Big Mac\'s Deputy', text: 'Actually, while you\'re up here — there\'s another problem. The Comicfoil have been spray-painting graffiti all over the pass. Hamburglar\'s mark, slogans, the works.' },
          { speaker: 'Big Mac\'s Deputy', text: 'It\'s not just vandalism — the graffiti is magical. It saps the morale of anyone who reads it. Makes them feel... hopeless. Like the world\'s already ended.' },
          { speaker: 'Big Mac\'s Deputy', text: 'If you can clean off six of the graffiti tags, I\'ll give you a Big Mac Badge. It boosts party morale and gives +10% to all stats in the highlands. Standard issue for the McWorld Guard!' },
          { speaker: 'Big Mac\'s Deputy', text: 'The tags are glowing purple. You can\'t miss them. Just... don\'t READ them too carefully. That\'s how they get you.' },
        ],
      },
      {
        condition: 'quest_complete',
        questId: 'SQ10',
        lines: [
          { speaker: 'Big Mac\'s Deputy', text: 'All six tags cleaned! The pass already feels brighter. Morale is up — I can feel it. Literally. The hopelessness is gone!' },
          { speaker: 'Big Mac\'s Deputy', text: 'Here\'s your Big Mac Badge, as promised. Wear it with pride, soldier. You\'ve earned it.' },
          { speaker: 'Big Mac\'s Deputy', text: 'Big Mac would be proud. He always said, "A clean pass is a happy pass." That\'s not actually a saying. I just made it up. But he WOULD say it if he thought of it.' },
        ],
      },
      {
        condition: 'after_beat_011',
        lines: [
          { speaker: 'Big Mac\'s Deputy', text: 'The Hamburglar is confirmed? Then Big Mac was right. He suspected it weeks ago. Said the pattern of thefts matched the Hamburglar\'s old habits — opportunistic, personal, targeted at McDonaldland specifically.' },
          { speaker: 'Big Mac\'s Deputy', text: 'He said, "A thief always returns to the scene of his best steal." And the Great Recipe was the greatest steal of all.' },
          { speaker: 'Big Mac\'s Deputy', text: 'If you\'re going after the Hamburglar, you\'ll need Big Mac. He knows the Hamburglar\'s tactics better than anyone. They used to be... not friends, exactly. But rivals who respected each other. A long time ago.' },
        ],
      },
      {
        condition: 'after_beat_012',
        lines: [
          { speaker: 'Big Mac\'s Deputy', text: 'The Condiment King is freed? That\'s one less headache for the pass. His ketchup storms were causing visibility issues.' },
          { speaker: 'Big Mac\'s Deputy', text: 'But I\'m still worried about Big Mac. It\'s been too long. Please, if you can reach the eastern ridge... he needs help. I know he told me to stay, but...' },
          { speaker: 'Big Mac\'s Deputy', text: 'I\'ll hold the checkpoint. That\'s my job. But YOU can do what I can\'t. Find him. Save him. Please.' },
        ],
      },
      {
        condition: 'after_beat_016',
        lines: [
          { speaker: 'Big Mac\'s Deputy', text: 'BIG MAC IS FREE! HE\'S ALIVE! I KNEW IT! I KNEW HE WAS TOO TOUGH TO GO DOWN!' },
          { speaker: 'Big Mac\'s Deputy', text: '*wiping eyes* Sorry, I\'m not... I\'m not crying. It\'s the mountain air. Very dry up here. Dries out your eyes. That\'s all.' },
          { speaker: 'Big Mac\'s Deputy', text: 'You did what I couldn\'t, Ronald. You saved my mentor. I won\'t forget that. When Big Mac gets back, the first thing he\'s going to do is reorganize the Guard. And the second thing? He\'s going to shake your hand so hard your arm falls off. In a grateful way.' },
          { speaker: 'Big Mac\'s Deputy', text: 'The pass is secure now. But the summit... the summit is still dark. Whatever\'s up there, it\'s waiting for you. Go get \'em, hero.' },
        ],
      },
      {
        condition: 'after_beat_018',
        lines: [
          { speaker: 'Big Mac\'s Deputy', text: 'The Hamburglar is defeated — and redeemed? Big Mac is going to have OPINIONS about that. Strong opinions. Probably loud ones.' },
          { speaker: 'Big Mac\'s Deputy', text: 'But if you say he\'s changed... I trust you. You saved Big Mac. You saved the pass. You\'ve earned the right to make calls like that.' },
          { speaker: 'Big Mac\'s Deputy', text: 'The McWorld Guard is going to need to rethink everything. New threats, new allies, new protocols for "redeemed villains." There\'s no manual for this. We might have to write one.' },
          { speaker: 'Big Mac\'s Deputy', text: 'Thank you, Ronald. From all of us at the checkpoint. The McWorld is a better place because of you.' },
        ],
      },
      {
        condition: 'default',
        lines: [
          { speaker: 'Big Mac\'s Deputy', text: 'Holding the line. That\'s what Big Mac taught me.' },
          { speaker: 'Big Mac\'s Deputy', text: 'If you\'re heading up, watch for the Comicfoil Sneaks. They blend into the striped shadows on the rocks. Fitting name, really.' },
          { speaker: 'Big Mac\'s Deputy', text: 'Save at the checkpoint before heading deeper into the highlands. The Golden Counter is right behind me. Use it. That\'s an order... well, a strong suggestion. Big Mac gives orders. I give strong suggestions.' },
        ],
      },
    ],
    questGiver: true,
    quests: ['SQ10'],
  },
};
