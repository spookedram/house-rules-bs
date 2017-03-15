var sampleChars = [
  {
    "pin": 0,
    "name": "",
    "title": "",
    "level": "1",
    "hp": "10",

    "strength": "10",
    "dexterity": "10",
    "constitution": "10",
    "intelligence": "10",
    "wisdom": "10",
    "charisma": "10",
    "perception": "10",

    "wpn1name": "",
    "wpn1desc": "",
    "wpn1type": "Medium (d8)",
    "wpn2name": "",
    "wpn2desc": "",
    "wpn2type": "Ranged (d6)",
    "armorName": "",
    "armorDesc": "",
    "armorType": "None (AC 10)",
    "gear": "",

    "appearance": "",
    "personality": "",
    "backstory": "",

    "spmov1name": "",
    "spmov1desc": "",
    "spmov2name": "",
    "spmov2desc": "",
    "spmov3name": "",
    "spmov3desc": "",
    "spmov4name": "",
    "spmov4desc": "",
    "spmov5name": "",
    "spmov5desc": "",
    "spmov6name": "",
    "spmov6desc": "",
    "spmov7name": "",
    "spmov7desc": "",
    "spmov8name": "",
    "spmov8desc": ""
  },
  {
    "pin": 1,
    "name": "Joan Richmont",
    "title": "the Warrior",
    "level": "1",
    "hp": "13",

    "strength": "13",
    "dexterity": "10",
    "constitution": "13",
    "intelligence": "7",
    "wisdom": "8",
    "charisma": "9",
    "perception": "10",

    "wpn1name": "Irontooth",
    "wpn1desc": "A long, sharp, two-handed broadsword forged from steel. It was a gift from the leader of the army.",
    "wpn1type": "Large (d10)",
    "wpn2name": "Steel Shield",
    "wpn2desc": "A medium-sized, steel kite shield with her family crest painted on the front. It's dented and very old, but still sturdy.",
    "wpn2type": "Ranged (d6)",
    "armorName": "Leather and Steel",
    "armorDesc": "Her body is mostly protected by leather wrappings but she has steel plating on her joints and torso. On their breastplate is the image of a lion, painted in gold.",
    "armorType": "Medium (AC 14)",
    "gear": "She carries a survival pack with basic camping gear, rations, a whetstone, a waterskin, a wooden bowl and spoon, and various small knives.",

    "appearance": "Joan is a 5ft 6in tall human woman with dark eyes and bright hair. She's strong and sturdy but beautiful, though she chooses to dress simply when not in her combat gear. She has sharp features and a long scar running across her shoulder-blades.",
    "personality": "Joan is stern and serious most of the time, with a dark past and an anger she can't escape from, but even deeper down she's a kind-hearted girl who wants to find peace and who loves to have fun with her friends when she can find the time to really wind down.",
    "backstory": "Joan Richmont was born in the city of Wesper to a nobleman and his wife. Her father died fighting in a war to protect the city when Joan was a preteen, which made her want to join the army; she wanted to learn how to protect what was left of her family. She trained hard and by the time she was 16 she'd already seen combat on the field. A few years later her mother contracted a strange illness that passed through Wesper, and Joan was sent by her commanding officer to find a cure.",

    "spmov1name": "Dodge Roll",
    "spmov1desc": "If an attack lands and there is room to move around, the Warrior can try to dodge the attack with a dexterity check.",
    "spmov2name": "Recovery Strike",
    "spmov2desc": "If the Warrior makes an attack and it misses, they can use this move to roll the attack again.",
    "spmov3name": "Fortify Defenses",
    "spmov3desc": "Through endurance training, the Warrior has the ability to boost their defenses for 3 rounds, adding +1 to their AC.",
    "spmov4name": "Cleaving Blow",
    "spmov4desc": "When the Warrior has a sword equipped, they can cleave large objects in half or attack for 3d12 damage.",
    "spmov5name": "Double Strike",
    "spmov5desc": "The Warrior has mastered a combat technique that allows them to attempt a second attack if their first attack hits.",
    "spmov6name": "Battlecry",
    "spmov6desc": "With a shout, the Warrior can intimidate his enemies. This move gives a -1 to enemy attack rolls for 6 rounds.",
    "spmov7name": "Shield Breaker",
    "spmov7desc": "The Warrior can use this move to shatter an enemy's defenses, -2 to the target's AC, permanently.",
    "spmov8name": "Killing Blow",
    "spmov8desc": "Summoning their inner strength, the Warrior deals a strike, for double their weapon damage, that cannot be defended."
  },
  {
    "pin": 2,
    "name": "Unseen Edwin",
    "title": "the Thief",
    "level": "1",
    "hp": "10",

    "strength": "8",
    "dexterity": "13",
    "constitution": "10",
    "intelligence": "10",
    "wisdom": "8",
    "charisma": "11",
    "perception": "10",

    "wpn1name": "Concealed Daggers",
    "wpn1desc": "A pair of concealed iron daggers that spring out into their hands from inside their sleeves. Excellent for sneak attacks. Roll 2 attacks if using both daggers.",
    "wpn1type": "Small (d4)",
    "wpn2name": "Poison Darts",
    "wpn2desc": "Small darts tipped with a poisonous powder. If the target fails a constitution saving throw, they are poisoned and take 1d4 damage at the beginning of their turn for 3 rounds.",
    "wpn2type": "Ranged (d6)",
    "armorName": "Disappearing Cloak",
    "armorDesc": "A cloak as dark as the night, gives +1 on rolls for stealth-based dexterity checks when it's dark, but provides little physical protection.",
    "armorType": "None (AC 10)",
    "gear": "Carries thieves' tools (lockpicks and bits of wire), rope, climbing gear, and empty sacks for storing larger loot.",

    "appearance": "Edwin is a 5ft human man in his early 30s. He has black hair, a curled mustache and a glimmer in his green eyes. He wears simple adventuring clothes, though underneath them he has a thieve's outfit full of pockets and compartments for trinkets and tools and notes.",
    "personality": "Edwin's a bit of an outcast and though he smiles often, he has a great deal of trouble being genuine with people and he trusts no one. His words tend to come out honeyed and exagerrated, like that of a salesman. Deep down, he desperately does want to connect with people, but he has yet to find someone he trusts the way he trusted his wife.",
    "backstory": "As a child, Edwin was abandoned at the doorstep of an inn a few miles outside the port town of Spira. On the night before his 13th birthday, he left a thankful note on his bed and spirited off into the night and made his home on the streets and in the alleyways of Port Spira, started a small gang of thieves from the other orphaned children wandering around the port, and quickly made himself a wanted man. He soon found himself smitten with a woman who came in from a land far away. He cleaned up his act, disbanded the gang (though they simply found a new leader and carried on) and courted the lady. In no time they were married, though once they sailed off to their honeymoon destination his wife revealed that she was a bounty hunter contracted by Port Spira's officials to find and arrest Edwin for causing so much trouble in town. She had fallen for him though, and graciously gave him a head start, exclaiming &#34;A hunt is better than a honeymoon anyways, don't you think, darling?&#34;",

    "spmov1name": "Pickpocket",
    "spmov1desc": "On a successful dexterity check, the Thief can take a random item (decided on by the Game Master) from an NPC without them noticing.",
    "spmov2name": "Caltrops",
    "spmov2desc": "The Thief drops a handful of caltrops (small sharp iron spikes) on the ground and rolls a d20 as a ranged attack. Anytime a target moves towards the Thief's current position, they must make a dexterity saving throw or else take 2d6 damage.",
    "spmov3name": "Smoke Bombs",
    "spmov3desc": "Throws down a small bomb that erupts into a cloud of smoke and dust, giving enemies disadvantage to attack rolls for 3 rounds.",
    "spmov4name": "Frame Bystander",
    "spmov4desc": "On a charisma saving throw higher than 10, the Thief can convince the target that an action or attack came from another character in the immediate area.",
    "spmov5name": "Targeted Theft",
    "spmov5desc": "On a successful dexterity check, the Thief can take a specific item from an NPC without them noticing.",
    "spmov6name": "Evasion",
    "spmov6desc": "If an attack hits the Thief, they get a chance to roll a dexterity check. If successful, they evade the attack.",
    "spmov7name": "Skeleton Key",
    "spmov7desc": "Pick any physical lock without needing to roll a dexterity check.",
    "spmov8name": "Vanish",
    "spmov8desc": "On a successful dexterity check higher than 10, the Thief can seemingly vanish into thin air, becoming hidden until the enemies make perception checks higher than the Thief's roll result."
  },
  {
    "pin": 3,
    "name": "Orion North",
    "title": "the Wizard",
    "level": "1",
    "hp": "10",

    "strength": "8",
    "dexterity": "8",
    "constitution": "10",
    "intelligence": "12",
    "wisdom": "12",
    "charisma": "10",
    "perception": "10",

    "wpn1name": "Polar Staff",
    "wpn1desc": "A cane-sized staff with a small globe made of solid ice at the top. It can cast the spell &#34;Freeze&#34; for an extra 1d4 of ice damage on a successful attack.",
    "wpn1type": "Medium (d8)",
    "wpn2name": "Yukon",
    "wpn2desc": "Orion's snowy owl companion, who can scout ahead form the skies and attack with her sharp talons.",
    "wpn2type": "Ranged (d6)",
    "armorName": "Coat of Cold",
    "armorDesc": "Orion wears a large, heavy, navy blue coat, decorated with emroidered snowflakes on the sleeves and tail. It's thick material is always slightly chilly and gives Orion +1 AC against fire-based attacks.",
    "armorType": "Light (AC 12)",
    "gear": "Orion carries with him some old charts and maps, a quill and ink set, a small telescope, and some basic survival equipment (cord, a lantern, a compass, knives). He also has a small box that opens up into a 20 square foot portable observatory, where he works charting the cosmos. ",

    "appearance": "Orion is a hefty, 7ft tall half-orc man. He's built like a bear with a wide torso and smaller limbs, his dark skin covered in bristly grey-white hair. His fashion is elegantly but functional, crafted from expensive, durable materials but also finely tailored for his frame. Small silver accessories shine against the dark navy colors of his coat, like the stars in the night sky. He wears his Coat of Cold wherever he goes, and uses his Polar Staff as a walking cane.",
    "personality": "Orion is a boisterous, hearty fellow with a heart of gold and an eye for the extravagant. He's fine at small talk but he's also restless in social situations, preferring instead to be working in his portable observatory. When combat arises, Orion enjoys the chance to stretch his magical abilities, but prefers to fight from a distance and is wary of putting his life on the line.",
    "backstory": "Orion North was born in a small village at the base of a mountain range in the north called the Sky's Teeth. His mother was an orc scientist and his father was a human wizard, both studying the stars. Orion grew up learning about science and astronomy from his mother and magic from his father. One day they left on an expedition high up into the Teeth, and a week after they left a terrible blizzard swept over the mountains and they never returned. Orion spent a year searching all over the mountains for his parents and eventually stumbled across a campsite buried in the snow, but with no sign of his parents. Orion swore to the sky that he'd finish the work they started, that he would immortalize them and make the North name known across the world. He found work in various palaces and temples, making good money on his mathematical expertise and magical ability, but his motivation is still to make the North name famous by finishing the most accurate map of the stars ever seen.",

    "spmov1name": "Freeze Still Water",
    "spmov1desc": "The Wizard freezes non-moving water or similar liquid in a 5ft square cube",
    "spmov2name": "Ice Shard Shot",
    "spmov2desc": "The Wizard fires 3 shards of hardened ice from thin air, rolling 3 ranged attacks and 1d6 damage for each shard.",
    "spmov3name": "Blizzard",
    "spmov3desc": "The Wizard creates a massive storm cloud with blistering winds that can freeze wet ground and create dangerous terrain.",
    "spmov4name": "Summon Iceberg",
    "spmov4desc": "The Wizard summons an iceberg from the sky that comes crashing down on a target for 4d12 damage.",
    "spmov5name": "Freeze Raging Water",
    "spmov5desc": "The Wizard freezes 50 cubic feet of fast-moving water instantly, which can freeze waves into spikes for an attack of 4d12 damage on a failed dexterity saving throw.",
    "spmov6name": "Summon Ice Golem",
    "spmov6desc": "The Wizard summons a frozen golem (AC 10) made from blocks of ice to fight and protect them for 6 rounds, doing 1d12 damage on a successful attack.",
    "spmov7name": "Cold Blood",
    "spmov7desc": "If target fails a constitution saving throw, the Wizard's spell freezes their blood solid and they are stuck in suspended animation until they either die or are safely unfrozen by the Wizard.",
    "spmov8name": "Summon Ice Dragon",
    "spmov8desc": "The Wizard summons a massive white ice dragon to attack a target with it's teeth and claws for 7d12 damage."
  },
  {
    "pin": 4,
    "name": "",
    "title": "",
    "level": "",
    "hp": "",

    "strength": "",
    "dexterity": "",
    "constitution": "",
    "intelligence": "",
    "wisdom": "",
    "charisma": "",
    "perception": "10",

    "wpn1name": "",
    "wpn1desc": "",
    "wpn1type": "Medium (d8)",
    "wpn2name": "",
    "wpn2desc": "",
    "wpn2type": "Ranged (d6)",
    "armorName": "",
    "armorDesc": "",
    "armorType": "None (AC 10)",
    "gear": "",

    "appearance": "",
    "personality": "",
    "backstory": "",

    "spmov1name": "",
    "spmov1desc": "",
    "spmov2name": "",
    "spmov2desc": "",
    "spmov3name": "",
    "spmov3desc": "",
    "spmov4name": "",
    "spmov4desc": "",
    "spmov5name": "",
    "spmov5desc": "",
    "spmov6name": "",
    "spmov6desc": "",
    "spmov7name": "",
    "spmov7desc": "",
    "spmov8name": "",
    "spmov8desc": ""
  },
  {
    "pin": 5,
    "name": "",
    "title": "",
    "level": "",
    "hp": "",

    "strength": "",
    "dexterity": "",
    "constitution": "",
    "intelligence": "",
    "wisdom": "",
    "charisma": "",
    "perception": "10",

    "wpn1name": "",
    "wpn1desc": "",
    "wpn1type": "Medium (d8)",
    "wpn2name": "",
    "wpn2desc": "",
    "wpn2type": "Ranged (d6)",
    "armorName": "",
    "armorDesc": "",
    "armorType": "None (AC 10)",
    "gear": "",

    "appearance": "",
    "personality": "",
    "backstory": "",

    "spmov1name": "",
    "spmov1desc": "",
    "spmov2name": "",
    "spmov2desc": "",
    "spmov3name": "",
    "spmov3desc": "",
    "spmov4name": "",
    "spmov4desc": "",
    "spmov5name": "",
    "spmov5desc": "",
    "spmov6name": "",
    "spmov6desc": "",
    "spmov7name": "",
    "spmov7desc": "",
    "spmov8name": "",
    "spmov8desc": ""
  },
  {
    "pin": 6,
    "name": "",
    "title": "",
    "level": "",
    "hp": "",

    "strength": "",
    "dexterity": "",
    "constitution": "",
    "intelligence": "",
    "wisdom": "",
    "charisma": "",
    "perception": "10",

    "wpn1name": "",
    "wpn1desc": "",
    "wpn1type": "Medium (d8)",
    "wpn2name": "",
    "wpn2desc": "",
    "wpn2type": "Ranged (d6)",
    "armorName": "",
    "armorDesc": "",
    "armorType": "None (AC 10)",
    "gear": "",

    "appearance": "",
    "personality": "",
    "backstory": "",

    "spmov1name": "",
    "spmov1desc": "",
    "spmov2name": "",
    "spmov2desc": "",
    "spmov3name": "",
    "spmov3desc": "",
    "spmov4name": "",
    "spmov4desc": "",
    "spmov5name": "",
    "spmov5desc": "",
    "spmov6name": "",
    "spmov6desc": "",
    "spmov7name": "",
    "spmov7desc": "",
    "spmov8name": "",
    "spmov8desc": ""
  },
  {
    "pin": 7,
    "name": "",
    "title": "",
    "level": "",
    "hp": "",

    "strength": "",
    "dexterity": "",
    "constitution": "",
    "intelligence": "",
    "wisdom": "",
    "charisma": "",
    "perception": "10",

    "wpn1name": "",
    "wpn1desc": "",
    "wpn1type": "Medium (d8)",
    "wpn2name": "",
    "wpn2desc": "",
    "wpn2type": "Ranged (d6)",
    "armorName": "",
    "armorDesc": "",
    "armorType": "None (AC 10)",
    "gear": "",

    "appearance": "",
    "personality": "",
    "backstory": "",

    "spmov1name": "",
    "spmov1desc": "",
    "spmov2name": "",
    "spmov2desc": "",
    "spmov3name": "",
    "spmov3desc": "",
    "spmov4name": "",
    "spmov4desc": "",
    "spmov5name": "",
    "spmov5desc": "",
    "spmov6name": "",
    "spmov6desc": "",
    "spmov7name": "",
    "spmov7desc": "",
    "spmov8name": "",
    "spmov8desc": ""
  },
  {
    "pin": 8,
    "name": "",
    "title": "",
    "level": "",
    "hp": "",

    "strength": "",
    "dexterity": "",
    "constitution": "",
    "intelligence": "",
    "wisdom": "",
    "charisma": "",
    "perception": "10",

    "wpn1name": "",
    "wpn1desc": "",
    "wpn1type": "Medium (d8)",
    "wpn2name": "",
    "wpn2desc": "",
    "wpn2type": "Ranged (d6)",
    "armorName": "",
    "armorDesc": "",
    "armorType": "None (AC 10)",
    "gear": "",

    "appearance": "",
    "personality": "",
    "backstory": "",

    "spmov1name": "",
    "spmov1desc": "",
    "spmov2name": "",
    "spmov2desc": "",
    "spmov3name": "",
    "spmov3desc": "",
    "spmov4name": "",
    "spmov4desc": "",
    "spmov5name": "",
    "spmov5desc": "",
    "spmov6name": "",
    "spmov6desc": "",
    "spmov7name": "",
    "spmov7desc": "",
    "spmov8name": "",
    "spmov8desc": ""
  },
  {
    "pin": 9,
    "name": "",
    "title": "",
    "level": "",
    "hp": "",

    "strength": "",
    "dexterity": "",
    "constitution": "",
    "intelligence": "",
    "wisdom": "",
    "charisma": "",
    "perception": "10",

    "wpn1name": "",
    "wpn1desc": "",
    "wpn1type": "Medium (d8)",
    "wpn2name": "",
    "wpn2desc": "",
    "wpn2type": "Ranged (d6)",
    "armorName": "",
    "armorDesc": "",
    "armorType": "None (AC 10)",
    "gear": "",

    "appearance": "",
    "personality": "",
    "backstory": "",

    "spmov1name": "",
    "spmov1desc": "",
    "spmov2name": "",
    "spmov2desc": "",
    "spmov3name": "",
    "spmov3desc": "",
    "spmov4name": "",
    "spmov4desc": "",
    "spmov5name": "",
    "spmov5desc": "",
    "spmov6name": "",
    "spmov6desc": "",
    "spmov7name": "",
    "spmov7desc": "",
    "spmov8name": "",
    "spmov8desc": ""
  },
  {
    "pin": 10,
    "name": "",
    "title": "",
    "level": "",
    "hp": "",

    "strength": "",
    "dexterity": "",
    "constitution": "",
    "intelligence": "",
    "wisdom": "",
    "charisma": "",
    "perception": "10",

    "wpn1name": "",
    "wpn1desc": "",
    "wpn1type": "Medium (d8)",
    "wpn2name": "",
    "wpn2desc": "",
    "wpn2type": "Ranged (d6)",
    "armorName": "",
    "armorDesc": "",
    "armorType": "None (AC 10)",
    "gear": "",

    "appearance": "",
    "personality": "",
    "backstory": "",

    "spmov1name": "",
    "spmov1desc": "",
    "spmov2name": "",
    "spmov2desc": "",
    "spmov3name": "",
    "spmov3desc": "",
    "spmov4name": "",
    "spmov4desc": "",
    "spmov5name": "",
    "spmov5desc": "",
    "spmov6name": "",
    "spmov6desc": "",
    "spmov7name": "",
    "spmov7desc": "",
    "spmov8name": "",
    "spmov8desc": ""
  },
  {
    "pin": 11,
    "name": "",
    "title": "",
    "level": "",
    "hp": "",

    "strength": "",
    "dexterity": "",
    "constitution": "",
    "intelligence": "",
    "wisdom": "",
    "charisma": "",
    "perception": "10",

    "wpn1name": "",
    "wpn1desc": "",
    "wpn1type": "Medium (d8)",
    "wpn2name": "",
    "wpn2desc": "",
    "wpn2type": "Ranged (d6)",
    "armorName": "",
    "armorDesc": "",
    "armorType": "None (AC 10)",
    "gear": "",

    "appearance": "",
    "personality": "",
    "backstory": "",

    "spmov1name": "",
    "spmov1desc": "",
    "spmov2name": "",
    "spmov2desc": "",
    "spmov3name": "",
    "spmov3desc": "",
    "spmov4name": "",
    "spmov4desc": "",
    "spmov5name": "",
    "spmov5desc": "",
    "spmov6name": "",
    "spmov6desc": "",
    "spmov7name": "",
    "spmov7desc": "",
    "spmov8name": "",
    "spmov8desc": ""
  },
  {
    "pin": 12,
    "name": "",
    "title": "",
    "level": "",
    "hp": "",

    "strength": "",
    "dexterity": "",
    "constitution": "",
    "intelligence": "",
    "wisdom": "",
    "charisma": "",
    "perception": "10",

    "wpn1name": "",
    "wpn1desc": "",
    "wpn1type": "Medium (d8)",
    "wpn2name": "",
    "wpn2desc": "",
    "wpn2type": "Ranged (d6)",
    "armorName": "",
    "armorDesc": "",
    "armorType": "None (AC 10)",
    "gear": "",

    "appearance": "",
    "personality": "",
    "backstory": "",

    "spmov1name": "",
    "spmov1desc": "",
    "spmov2name": "",
    "spmov2desc": "",
    "spmov3name": "",
    "spmov3desc": "",
    "spmov4name": "",
    "spmov4desc": "",
    "spmov5name": "",
    "spmov5desc": "",
    "spmov6name": "",
    "spmov6desc": "",
    "spmov7name": "",
    "spmov7desc": "",
    "spmov8name": "",
    "spmov8desc": ""
  }
];

var sampleQuests = [
  {
    "pin": 0,
    "questName": "",

    "settingsList": "",
    "npcList": "",
    "setup": "",

    "goal": "",
    "wander": "",

    "funFight": "",
    "twist": "",

    "challenge": "",
    "searchEnd": "",

    "climax": "",
    "epilogue": "",
    "cliffhanger": ""
  },
  {
    "pin": 1,
    "questName": "Bird Bones",

    "settingsList": "",
    "npcList": "",
    "setup": "",

    "goal": "",
    "wander": "",

    "funFight": "",
    "twist": "",

    "challenge": "",
    "searchEnd": "",

    "climax": "",
    "epilogue": "",
    "cliffhanger": ""
  },
  {
    "pin": 2,
    "questName": "",

    "settingsList": "",
    "npcList": "",
    "setup": "",

    "goal": "",
    "wander": "",

    "funFight": "",
    "twist": "",

    "challenge": "",
    "searchEnd": "",

    "climax": "",
    "epilogue": "",
    "cliffhanger": ""
  },
  {
    "pin": 3,
    "questName": "",

    "settingsList": "",
    "npcList": "",
    "setup": "",

    "goal": "",
    "wander": "",

    "funFight": "",
    "twist": "",

    "challenge": "",
    "searchEnd": "",

    "climax": "",
    "epilogue": "",
    "cliffhanger": ""
  },
  {
    "pin": 4,
    "questName": "",

    "settingsList": "",
    "npcList": "",
    "setup": "",

    "goal": "",
    "wander": "",

    "funFight": "",
    "twist": "",

    "challenge": "",
    "searchEnd": "",

    "climax": "",
    "epilogue": "",
    "cliffhanger": ""
  },
  {
    "pin": 5,
    "questName": "",

    "settingsList": "",
    "npcList": "",
    "setup": "",

    "goal": "",
    "wander": "",

    "funFight": "",
    "twist": "",

    "challenge": "",
    "searchEnd": "",

    "climax": "",
    "epilogue": "",
    "cliffhanger": ""
  },
  {
    "pin": 6,
    "questName": "",

    "settingsList": "",
    "npcList": "",
    "setup": "",

    "goal": "",
    "wander": "",

    "funFight": "",
    "twist": "",

    "challenge": "",
    "searchEnd": "",

    "climax": "",
    "epilogue": "",
    "cliffhanger": ""
  }
];
