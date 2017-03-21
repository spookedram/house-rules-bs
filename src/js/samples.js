var sampleChars = [
  {
    "pin": 0,
    "name": "",
    "title": "",
    "level": "1",
    "hp": "10",

    "strength": "10",
    "dexterity": "10",
    "vitality": "10",
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

    "perk1name": "",
    "perk1desc": "",
    "perk1mod": "str",
    "perk2name": "",
    "perk2desc": "",
    "perk2mod": "str",
    "perk3name": "",
    "perk3desc": "",
    "perk3mod": "str",
    "perk4name": "",
    "perk4desc": "",
    "perk4mod": "str",
    "perk5name": "",
    "perk5desc": "",
    "perk5mod": "str",
    "perk6name": "",
    "perk6desc": "",
    "perk6mod": "str",
    "perk7name": "",
    "perk7desc": "",
    "perk7mod": "str",
    "perk8name": "",
    "perk8desc": "",
    "perk8mod": "str"
  },
  {
    "pin": 1,
    "name": "",
    "title": "the Ice Mage",
    "level": "1",
    "hp": "10",

    "strength": "8",
    "dexterity": "8",
    "vitality": "10",
    "intelligence": "12",
    "wisdom": "12",
    "charisma": "10",
    "perception": "10",

    "wpn1name": "Polar Staff",
    "wpn1desc": "A cane-sized staff with a small globe made of solid ice at the top. It can cast a spell that shoots a shard of ice from the top of the cane for 1d6 damage.",
    "wpn1type": "Medium (d8)",
    "wpn2name": "Owl Familiar",
    "wpn2desc": "A snowy owl companion, who can scout ahead form the skies and attack with it's sharp talons.",
    "wpn2type": "Ranged (d6)",
    "armorName": "Coat of Cold",
    "armorDesc": "A large, heavy, navy blue coat, decorated with emroidered snowflakes on the sleeves and tail. It's thick material is always slightly chilly and gives the wearer +1 AC against fire-based attacks.",
    "armorType": "Light (AC 12)",
    "gear": "Some old books, charts, and maps, a quill and ink set, and a small telescope.",

    "appearance": "",
    "personality": "",
    "backstory": "",

    "perk1name": "Freeze Still Water",
    "perk1desc": "The Ice Mage freezes non-moving water or similar liquid in a 3ft square cube",
    "perk1mod": "wis",
    "perk2name": "Ice Shard Shot",
    "perk2desc": "The Ice Mage fires 3 shards of hardened ice from thin air, rolling 3 ranged attacks and 1d8 damage for each shard.",
    "perk2mod": "int",
    "perk3name": "Blizzard",
    "perk3desc": "The Ice Mage creates a small, 10ft wide storm cloud with icy winds that can freeze wet ground and harm a target for 4d12 ice damage.",
    "perk3mod": "wis",
    "perk4name": "Summon Iceberg",
    "perk4desc": "The Ice Mage summons an iceberg from the sky that comes crashing down on a target for 6d12 damage.",
    "perk4mod": "int",
    "perk5name": "Freeze Raging Water",
    "perk5desc": "The Ice Mage freezes 40ft of fast-moving water instantly, which can freeze waves into spikes and create dangerous terrain.",
    "perk5mod": "wis",
    "perk6name": "Summon Ice Golem",
    "perk6desc": "The Ice Mage summons a frozen golem made from blocks of ice (60 HP / 10 AC / 2d10 DMG) to fight and protect them for 6 rounds.",
    "perk6mod": "cha",
    "perk7name": "Cold Blood",
    "perk7desc": "If target fails a VIT saving throw, this spell freezes their body solid and they are stuck in suspended animation for 7 rounds, or until they make a successful saving throw.",
    "perk7mod": "int",
    "perk8name": "Summon Ice Dragon",
    "perk8desc": "The Ice Mage summons a massive white ice dragon that flies down from the sky to attack a target with its teeth and claws for 12d12 damage.",
    "perk8mod": "cha"
  },
  {
    "pin": 2,
    "name": "",
    "title": "the Thief",
    "level": "1",
    "hp": "10",

    "strength": "8",
    "dexterity": "13",
    "vitality": "10",
    "intelligence": "10",
    "wisdom": "8",
    "charisma": "11",
    "perception": "10",

    "wpn1name": "Concealed Daggers",
    "wpn1desc": "A pair of concealed iron daggers that spring out into their hands from inside their sleeves. Excellent for sneak attacks. Roll 2 attacks if using both daggers.",
    "wpn1type": "Small (d4)",
    "wpn2name": "Poison Darts",
    "wpn2desc": "Small darts tipped with a poisonous powder. If the target fails a CON saving throw, they are poisoned and take 1d4 damage at the beginning of their turn for 3 rounds.",
    "wpn2type": "Ranged (d6)",
    "armorName": "Disappearing Cloak",
    "armorDesc": "A cloak as dark as the night, gives +1 on rolls for stealth-based DEX checks when it's dark, but provides little physical protection.",
    "armorType": "None (AC 10)",
    "gear": "Thieves' tools (lockpicks and bits of wire), rope, climbing gear, and empty sacks for storing larger loot",

    "appearance": "",
    "personality": "",
    "backstory": "",

    "perk1name": "Pickpocket",
    "perk1desc": "If they roll higher than the target, the Thief can steal a random item (decided on by the Game Master) from an NPC without them noticing.",
    "perk1mod": "dex",
    "perk2name": "Smoke Bombs",
    "perk2desc": "The Thief throws down a small bomb that erupts into a cloud of smoke and dust, giving enemies -1 to PER and -1 to DEX for 1 round.",
    "perk2mod": "dex",
    "perk3name": "Vanish",
    "perk3desc": "The Thief vanishes from sight, remaining undetected for 3 rounds or until an enemy makes a successful PER DC check.",
    "perk3mod": "dex",
    "perk4name": "Poisoned Blade",
    "perk4desc": "The Thief takes a turn to coat their blades in a deadly, fast-acting poison. Their next successful attack does 6d12 poison damage to their target.",
    "perk4mod": "int",
    "perk5name": "Keen Senses",
    "perk5desc": "The Thief can temporarily focus their senses, which temporarily boosts their PER DC checks by 5 points.",
    "perk5mod": "per",
    "perk6name": "Nimble Fingers",
    "perk6desc": "If they roll higher than the target, the Thief can steal a specific item from an NPC without them noticing.",
    "perk6mod": "dex",
    "perk7name": "Skeleton Key",
    "perk7desc": "The Thief can use this perk to pick any physical lock without needing to make a DEX check.",
    "perk7mod": "dex",
    "perk8name": "Assassinate",
    "perk8desc": "If undetected, the Thief can strike an enemy for 12d12 damage and remain undetected by other enemies in the area.",
    "perk8mod": "dex"
  },
  {
    "pin": 3,
    "name": "",
    "title": "the Warrior",
    "level": "1",
    "hp": "13",

    "strength": "13",
    "dexterity": "10",
    "vitality": "13",
    "intelligence": "7",
    "wisdom": "8",
    "charisma": "9",
    "perception": "10",

    "wpn1name": "Broadsword",
    "wpn1desc": "A long, sharp, two-handed broadsword forged from steel. It was a gift from the leader of the army.",
    "wpn1type": "Large (d10)",
    "wpn2name": "Steel Shield",
    "wpn2desc": "A medium-sized, steel kite shield with their family crest painted on the front. It's dented and very old, but still sturdy.",
    "wpn2type": "Shield (AC +1)",
    "armorName": "Leather and Steel",
    "armorDesc": "Leather wrappings with steel plating over their joints and torso. On the front of their breastplate is the image of a lion, painted in gold.",
    "armorType": "Medium (AC 14)",
    "gear": "A survival pack with basic camping gear, rations, a whetstone, a waterskin, a wooden bowl and spoon, and various small knives",

    "appearance": "",
    "personality": "",
    "backstory": "",

    "perk1name": "Recovery Strike",
    "perk1desc": "If the Warrior makes an attack and it misses, they can use this move to roll the attack again.",
    "perk1mod": "dex",
    "perk2name": "Taunt Enemy",
    "perk2desc": "The Warrior taunts an enemy and they cannot attack anyone but the Warrior for 2 rounds.",
    "perk2mod": "cha",
    "perk3name": "Fortify Defenses",
    "perk3desc": "Through endurance training, the Warrior has the ability to boost their defenses, temporarily adding 3 points to their AC.",
    "perk3mod": "vit",
    "perk4name": "Cleaving Blow",
    "perk4desc": "When the Warrior has a sword equipped, they can cleave large objects in half or roll to attack, dealing 6d12 damage.",
    "perk4mod": "str",
    "perk5name": "Double Strike",
    "perk5desc": "The Warrior has mastered a combat technique that allows them to attack twice in a row for 10d8 damage.",
    "perk5mod": "dex",
    "perk6name": "Battlecry",
    "perk6desc": "With a shout, the Warrior can intimidate their enemies. This move gives a -1 to STR DC rolls for 6 rounds.",
    "perk6mod": "cha",
    "perk7name": "Shield Breaker",
    "perk7desc": "The Warrior can use this move to shatter an enemy's defenses, causing -1 to the target's AC for 7 rounds.",
    "perk7mod": "dex",
    "perk8name": "Killing Blow",
    "perk8desc": "Summoning their inner strength, the Warrior deals a lightning-fast strike, for 12d12 damage.",
    "perk8mod": "str"
  },
  {
    "pin": 4,
    "name": "",
    "title": "the Cleric",
    "level": "1",
    "hp": "12",

    "strength": "7",
    "dexterity": "11",
    "vitality": "12",
    "intelligence": "10",
    "wisdom": "12",
    "charisma": "8",
    "perception": "10",

    "wpn1name": "Ancient Tome",
    "wpn1desc": "A leather-bound book filled with words and illustrations depicting the Cleric's deity and its legacy. Allows the Cleric to call on their deity's power and heal a target for 1d8 hit points (WIS DC).",
    "wpn1type": "Small (d4)",
    "wpn2name": "Steel Buckler",
    "wpn2desc": "A solid shield made from wood and reinforced with steel, forming an odd symbol on the front. Used for protection but also can be used as a bashing weapon for 1d4 damage.",
    "wpn2type": "Shield (AC +1)",
    "armorName": "Blessed Garment",
    "armorDesc": "A long tunic over chainmail that shimmers even in darkness. -1 to stealth rolls, +2 to AC against regular creatures, and +4 AC against unholy creatures",
    "armorType": "Light (AC 12)",
    "gear": "A canteen and a strange-looking talisman",

    "appearance": "",
    "personality": "",
    "backstory": "",

    "perk1name": "Predict Danger",
    "perk1desc": "The Cleric prays to their deity and can accurately predict the safer of two options.",
    "perk1mod": "int",
    "perk2name": "Healing Touch",
    "perk2desc": "The Cleric can lay hands on an ally and use their deity's powers to heal the ally for 3d8 HP.",
    "perk2mod": "wis",
    "perk3name": "Shield Ally",
    "perk3desc": "The Cleric uses his shield to defend any ally in a 10ft diameter, adding +1 to their AC for 3 rounds. If the ally moves away from them, the perk is cancelled; also the Cleric can only protect one ally per turn.",
    "perk3mod": "dex",
    "perk4name": "Commune with Deity",
    "perk4desc": "The Cleric makes a WIS DC check and, if successful, can ask their deity (the Game Master) for a yes or no answer to a question.",
    "perk4mod": "wis",
    "perk5name": "Truth Tongue",
    "perk5desc": "The Cleric casts a spell that forces a target to speak only the truth for 5 rounds.",
    "perk5mod": "wis",
    "perk6name": "Circle of Healing",
    "perk6desc": "The Cleric casts a spell to heal all allies in a 40ft diameter. 10d10 HP, distributed evenly.",
    "perk6mod": "wis",
    "perk7name": "Divine Wrath",
    "perk7desc": "The Cleric summons forth their deity's divine wrath against a target, a burst of solar energy causing 10d12 light damage.",
    "perk7mod": "wis",
    "perk8name": "Ressurection",
    "perk8desc": "This spell heals a single target for 12d12 HP (or multiple targets, HP distributed evenly). It can also be used to grant an extra death saving throw to a character if they've failed all three.",
    "perk8mod": "wis"
  },
  {
    "pin": 5,
    "name": "",
    "title": "the Bard",
    "level": "1",
    "hp": "10",

    "strength": "8",
    "dexterity": "12",
    "vitality": "7",
    "intelligence": "10",
    "wisdom": "11",
    "charisma": "12",
    "perception": "10",

    "wpn1name": "Decorated Lute",
    "wpn1desc": "A travel-sized lute, painted with intricate traditional designs. Allows the Bard to use his performance perks.",
    "wpn1type": "Small (d4)",
    "wpn2name": "Iron Knuckles",
    "wpn2desc": "The Bard is no fool, and carries his trusty iron knuckles with him to beat back a foe in a pinch.",
    "wpn2type": "Small (d4)",
    "armorName": "Simple Tunic",
    "armorDesc": "A colorful costume, provides little protection but allows the Bard to stay light on his feet.",
    "armorType": "None (AC 10)",
    "gear": "",

    "appearance": "",
    "personality": "",
    "backstory": "",

    "perk1name": "Song of Healing Joy",
    "perk1desc": "The Bard performs a happy melody, the gentle tunes reviving an ally's HP for 2d12 points.",
    "perk1mod": "cha",
    "perk2name": "Song of Valor",
    "perk2desc": "The Bard plays a defiant march, temporarily boosting a target's STR 2 by points.",
    "perk2mod": "cha",
    "perk3name": "Song of Safety",
    "perk3desc": "The Bard plays a calming chorus, temporarily adding 3 points to a target's AC.",
    "perk3mod": "cha",
    "perk4name": "Song of Swiftness",
    "perk4desc": "The Bard performs a ballad that temporarily gives an ally an extra movement after their action for 4 rounds.",
    "perk4mod": "cha",
    "perk5name": "Song of Silliness",
    "perk5desc": "The Bard plays a soft, fast, plucky tune that confuses enemies in a 40ft diameter. They temporarily lose 5 points to INT DC checks.",
    "perk5mod": "cha",
    "perk6name": "Song of Silence",
    "perk6desc": "The Bard plays their lute but instead of producing music, the instrument seems to suck sound into itself, causing a 60ft circle of silence for 6 rounds.",
    "perk6mod": "cha",
    "perk7name": "Song of Romance",
    "perk7desc": "The Bard plays a love song for a target and an ally. For 7 rounds, when they land a hit on the ally, the target takes the same amount of damage they inflict.",
    "perk7mod": "cha",
    "perk8name": "Song of Beyond",
    "perk8desc": "The Bard plays a slow, haunting dirge that calls up restless spirits to attack a target for 12d12 damage.",
    "perk8mod": "cha"
  },
  {
    "pin": 6,
    "name": "",
    "title": "the Swamp Witch",
    "level": "1",
    "hp": "10",

    "strength": "8",
    "dexterity": "9",
    "vitality": "10",
    "intelligence": "11",
    "wisdom": "13",
    "charisma": "9",
    "perception": "10",

    "wpn1name": "Rod of Shadows",
    "wpn1desc": "A twisted cane made from burned black willow, used to summon dark creatures from a strange otherworld. The Swamp Witch can use it to summon a shadow minion (1d8 HP, 0 AC, 1d8 DMG) to fight for her (CHA DC check). Commanding minions counts for the Swamp Witch's action.",
    "wpn1type": "Medium (d8)",
    "wpn2name": "Alligator",
    "wpn2desc": "The Swamp Witch has an alligator companion, 12ft long with a maw full of sharp teeth and a bad attitude. It's scales have been bleached white as moonlight by a dark spell gone wrong.",
    "wpn2type": "Large (d10)",
    "armorName": "Mossy Cloak",
    "armorDesc": "A cloak, patched together from plants and vines and moss from her swamp. Gives the wearer's enemies -1 to PER DC checks when she's in an overgrown environment.",
    "armorType": "None (AC 10)",
    "gear": "",

    "appearance": "",
    "personality": "",
    "backstory": "",

    "perk1name": "Turn into Frog",
    "perk1desc": "The Swamp Witch can cast a spell that fires a bolt of green light at a target. On a failed DEX saving throw, the light changes the target into a bullfrog for 1 round.",
    "perk1mod": "wis",
    "perk2name": "Summon Greater Minion",
    "perk2desc": "The Swamp Witch waves her wand and a plump, horned shadow minion (2d8HP, 8 AC, 1d8 DMG) seeps up from the ground to fight for her.",
    "perk2mod": "cha",
    "perk3name": "Overgrowth",
    "perk3desc": "The Swamp Witch uses her magic to summon tangled vines that cover a 10ft diameter. Enemies in the affected area cannot move for 3 rounds unless they succeed at a DEX saving throw.",
    "perk3mod": "wis",
    "perk4name": "Vanish",
    "perk4desc": "The Swamp Witch uses her shadow magic to vanish from sight for 4 rounds. She cannot move, but can still command her minions.",
    "perk4mod": "wis",
    "perk5name": "Summon Shadow Knight",
    "perk5desc": "From the shadow dimension, The Swamp Witch pulls forth a slender, armored shadow creature (4d8 HP, 12 AC, 4d8 DMG) to fight for her.",
    "perk5mod": "wis",
    "perk6name": "Animal Growth",
    "perk6desc": "The Swamp Witch casts a spell that doubles the size of her alligator for 2 rounds, which also doubles their damage and brings their AC to 16.",
    "perk6mod": "wis",
    "perk7name": "Flash Flood",
    "perk7desc": "The Swamp Witch summons a wave of muddy water to cover an 80ft diameter. Movements in the water cause enemies to be detected, but her alligator can sink beneath the water and remain undetected for 7 turns.",
    "perk7mod": "wis",
    "perk8name": "Banish",
    "perk8desc": "The Swamp Witch uses her magic to open a portal to the shadow dimension where her minions originate from. A large, grotesque appendage shoots forth from the portal. On a failed DEX saving throw the target is grasped by the shadow and cannot move. On their next turn, if they succeed on a STR DC check they struggle free of the shadows. If they fail, they are dragged through the portal, which closes behind them.",
    "perk8mod": "wis"
  },
  {
    "pin": 7,
    "name": "",
    "title": "the Vampire",
    "level": "1",
    "hp": "10",

    "strength": "10",
    "dexterity": "12",
    "vitality": "10",
    "intelligence": "9",
    "wisdom": "12",
    "charisma": "8",
    "perception": "9",

    "wpn1name": "Hungry Daggers",
    "wpn1desc": "Two curved daggers, like steel fangs, typically double-wielded.",
    "wpn1type": "Small (d4)",
    "wpn2name": "Hunter's Crossbow",
    "wpn2desc": "Stolen off of an unfortunate vampire-hunter, the Vampire makes use of this crossbow when they can't get close enough to sink their daggers (or teeth) into their target.",
    "wpn2type": "Ranged (d6)",
    "armorName": "Cloak of the Night",
    "armorDesc": "A dark, hooded cloak that gives the Vampire's enemies a -1 to PER checks at night.",
    "armorType": "None (AC 10)",
    "gear": "Large Ruby Amulet",

    "appearance": "",
    "personality": "",
    "backstory": "",

    "perk1name": "Paralyzing Gaze",
    "perk1desc": "The Vampire stares into a target's eyes, causing them to freeze in place. (No movement for 1 round)",
    "perk1mod": "wis",
    "perk2name": "Quick Sip",
    "perk2desc": "The Vampire attempts to steal some blood from a target with a quick bite. Inflicts 2d8 damage and the Vampire regains 1d8 HP.",
    "perk2mod": "dex",
    "perk3name": "Vanish",
    "perk3desc": "The Vampire vanishes from sight, remaining undetected for 3 rounds or until an enemy makes a successful PER DC check.",
    "perk3mod": "dex",
    "perk4name": "Shapeshift",
    "perk4desc": "The Vampire can take the form of a small Vampire Bat for 4 rounds. He can fly as a bat, but can only do 1d4 damage in this form and cannot use his other perks until he shifts back.",
    "perk4mod": "wis",
    "perk5name": "Illusion",
    "perk5desc": "The Vampire can cast a strange spell that creates a distracting illusion, temporarily hindering the target's PER DC checks for 5 points.",
    "perk5mod": "wis",
    "perk6name": "Beheading Blow",
    "perk6desc": "The Vampire sneaks up behind a target and attacks with their daggers for 10d12 damage. If the blow kills the target, they are also decapitated.",
    "perk6mod": "str",
    "perk7name": "Drain Prey",
    "perk7desc": "The Vampire attacks a target, biting them and draining their blood for 5d12 damage, healing themselves for 5d12 HP.",
    "perk7mod": "dex",
    "perk8name": "Make Thrall",
    "perk8desc": "The Vampire bites a target, leaving a little of their own blood in the target's wound. On a failed VIT saving throw, the target becomes infected with vampirism and becomes the Vampire's Thrall, following their command for 8 rounds or until they make a successful VIT saving throw.",
    "perk8mod": "dex"
  },
  {
    "pin": 8,
    "name": "",
    "title": "the Werewolf",
    "level": "1",
    "hp": "12",

    "strength": "12",
    "dexterity": "10",
    "vitality": "12",
    "intelligence": "8",
    "wisdom": "10",
    "charisma": "10",
    "perception": "8",

    "wpn1name": "Beast Form",
    "wpn1desc": "Post-transformation, the Werewolf's body is a weapon itself with razor-sharp claws and a powerful, toothy maw.",
    "wpn1type": "Large (d10)",
    "wpn2name": "Iron Dagger",
    "wpn2desc": "A small, simple iron dagger. Sharp, but primarily used when transformation isn't an option.",
    "wpn2type": "Small (d4)",
    "armorName": "Beast Body",
    "armorDesc": "Transformed, the Werewolf's skin is thick and tough enough to withstand significant damage. When not in their Beast Form, the Werewolf's AC is 10.",
    "armorType": "Heavy (AC 16)",
    "gear": "The Werewolf carries only the dagger and a small sack of coins. His transformations are too frequent; carrying anything of value is a waste of time and energy.",

    "appearance": "",
    "personality": "",
    "backstory": "",

    "perk1name": "Forced Transformation",
    "perk1desc": "Through sheer willpower, the Werewolf can attempt to force into his beastly shape.",
    "perk1mod": "wis",
    "perk2name": "Rend Flesh",
    "perk2desc": "The Werewolf grasps a target with both claws and rips at their flesh, doing 3d8 damage.",
    "perk2mod": "str",
    "perk3name": "Sinister Bite",
    "perk3desc": "The Werewolf locks his powerful jaws into the target, doing 4d12 damage. The target cannot make a movement on their next turn.",
    "perk3mod": "str",
    "perk4name": "Command Beasts",
    "perk4desc": "The Werewolf can instill fear and respect from lesser animals on for 4 rounds.",
    "perk4mod": "cha",
    "perk5name": "Wolf Senses",
    "perk5desc": "The Werewolf can focus their senses, boosting their PER DC checks by 5 points.",
    "perk5mod": "wis",
    "perk6name": "Dark Feast",
    "perk6desc": "The Werewolf can feed on a dead body to regain 10d10 HP.",
    "perk6mod": "vit",
    "perk7name": "Pack Leader",
    "perk7desc": "The Werewolf lets out a howl, summoning a pack of wolves to mob a target and inflict 12d12 damage before scampering away.",
    "perk7mod": "cha",
    "perk8name": "Pass Affliction",
    "perk8desc": "With a successful bite or claw attack and a failed VIT saving throw by the target, the Werewolf infects a target with the curse of the Werewolf.",
    "perk8mod": "vit"
  },
  {
    "pin": 9,
    "name": "",
    "title": "the Siren",
    "level": "1",
    "hp": "10",

    "strength": "8",
    "dexterity": "7",
    "vitality": "10",
    "intelligence": "10",
    "wisdom": "11",
    "charisma": "12",
    "perception": "12",

    "wpn1name": "Silver Lyre",
    "wpn1desc": "An ancient instrument of forgotten origin, passed down through the Siren's family for hundreds of years. If the Siren uses her lyre to attack an enemy, she'll have to use this perk to repair it before she can play music again.",
    "wpn1type": "Medium (d8)",
    "wpn2name": "Twin Sparrows",
    "wpn2desc": "Two small sparrows that follow the Siren. Together, they can attack sensitive areas of a target's face for 1d4 damage.",
    "wpn2type": "Small (d4)",
    "armorName": "Elegant Robe",
    "armorDesc": "The Siren wears a white, translucent robe. It offers no protection, but it's light weight lets her move quickly.",
    "armorType": "None (AC 10)",
    "gear": "Lyre repair kit",

    "appearance": "",
    "personality": "",
    "backstory": "",

    "perk1name": "Siren's Lullaby",
    "perk1desc": "The Siren plays her lyre, casting a spell to lure a target towards her. If they fail a WIS saving throw, on the target's next turn, they must only use their 1 movement and it must be in the Siren's direction, and the target cannot attack.",
    "perk1mod": "cha",
    "perk2name": "Song of Healing",
    "perk2desc": "The Siren's song soothes an ally, reviving them for 3d8 HP.",
    "perk2mod": "cha",
    "perk3name": "Charm Beast",
    "perk3desc": "The Siren plays a melody for a target, calming it and removing it from combat if it fails a WIS saving throw.",
    "perk3mod": "cha",
    "perk4name": "Song of Weakening",
    "perk4desc": "The Siren plays a light, slow song that drains a target, causing them to temporarily lose 4 points of STR.",
    "perk4mod": "cha",
    "perk5name": "Song of Betrayal",
    "perk5desc": "The Siren's song takes a dark turn. On a failed WIS saving throw, a target becomes confused and can only attack their allies for 5 rounds or until they roll a successful WIS saving throw.",
    "perk5mod": "cha",
    "perk6name": "Siren's Lullaby Reprise",
    "perk6desc": "The Siren plays her lullaby for up to three targets. On their next two turns they must move towards her. They can attack anyone except the Siren for those two turns.",
    "perk6mod": "cha",
    "perk7name": "Song of Softened Will",
    "perk7desc": "The Siren plays her lyre and sings a sweet ballad that causes a target to temporarily lose 7 points of WIS.",
    "perk7mod": "cha",
    "perk8name": "Sailor's Doom",
    "perk8desc": "The Siren sings her deadliest song. Up to 12 enemies within a 100ft diameter that fail a WIS saving throw against the Siren's roll inflict an evenly distributed 12d12 damage to themselves, using their own weapons.",
    "perk8mod": "cha"
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
