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
    "name": "",
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

    "wpn1name": "Broadsword",
    "wpn1desc": "A long, sharp, two-handed broadsword forged from steel. It was a gift from the leader of the army.",
    "wpn1type": "Large (d10)",
    "wpn2name": "Steel Shield",
    "wpn2desc": "A medium-sized, steel kite shield with their family crest painted on the front. It's dented and very old, but still sturdy.",
    "wpn2type": "Ranged (d6)",
    "armorName": "Leather and Steel",
    "armorDesc": "Leather wrappings with steel plating on their joints and torso. On their breastplate is the image of a lion, painted in gold.",
    "armorType": "Medium (AC 14)",
    "gear": "Carries a survival pack with basic camping gear, rations, a whetstone, a waterskin, a wooden bowl and spoon, and various small knives.",

    "appearance": "",
    "personality": "",
    "backstory": "",

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
    "name": "",
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

    "appearance": "",
    "personality": "",
    "backstory": "",

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
    "name": "",
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
    "wpn2name": "Owl Familiar",
    "wpn2desc": "A snowy owl companion, who can scout ahead form the skies and attack with it's sharp talons.",
    "wpn2type": "Ranged (d6)",
    "armorName": "Coat of Cold",
    "armorDesc": "A large, heavy, navy blue coat, decorated with emroidered snowflakes on the sleeves and tail. It's thick material is always slightly chilly and gives the wearer +1 AC against fire-based attacks.",
    "armorType": "Light (AC 12)",
    "gear": "Carries some old books, charts, and maps, a quill and ink set, a small telescope, and some basic survival equipment (cord, a lantern, a compass, knives).",

    "appearance": "",
    "personality": "",
    "backstory": "",

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
    "title": "the Cleric",
    "level": "1",
    "hp": "12",

    "strength": "8",
    "dexterity": "8",
    "constitution": "12",
    "intelligence": "11",
    "wisdom": "11",
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
