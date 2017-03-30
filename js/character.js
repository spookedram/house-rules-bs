var characterList = [];

var editing_mode = false;
var editDiv = document.getElementsByClassName("edit");
var viewDiv = document.getElementsByClassName("view");
var edit_btn = document.getElementById("edit-btn");

var charName = document.getElementById("charName");
var title = document.getElementById("title");
var lvl_input = document.getElementById("lvl");
var lvlLabel = document.getElementById("lvlLabel");
var hp_input = document.getElementById("hp");
var hpLabel = document.getElementById("hpLabel");
var tempHp = document.getElementById("tempHp");

var str_input = document.getElementById("strength");
var strLabel = document.getElementById("strLabel");
var dex_input = document.getElementById("dexterity");
var dexLabel = document.getElementById("dexLabel");
var vit_input = document.getElementById("vitality");
var vitLabel = document.getElementById("vitLabel");
var int_input = document.getElementById("intelligence");
var intLabel = document.getElementById("intLabel");
var wis_input = document.getElementById("wisdom");
var wisLabel = document.getElementById("wisLabel");
var cha_input = document.getElementById("charisma");
var chaLabel = document.getElementById("chaLabel");
var per_input = document.getElementById("perception");
var perLabel = document.getElementById("perLabel");

var appImg = document.getElementById("imageUpload");
var app = document.getElementById("appearance");
var pers = document.getElementById("personality");
var bs = document.getElementById("backstory");

var wpn1name = document.getElementById("wpn1name");
var wpn1desc = document.getElementById("wpn1desc");
var wpn1type = document.getElementById("wpn1type");
var wpn2name = document.getElementById("wpn2name");
var wpn2desc = document.getElementById("wpn2desc");
var wpn2type = document.getElementById("wpn2type");
var armorName = document.getElementById("armorName");
var armorDesc = document.getElementById("armorDesc");
var armorType = document.getElementById("armorType");
var gear = document.getElementById("gear");

var perk1name = document.getElementById("perk1name");
var perk1desc = document.getElementById("perk1desc");
var perk2name = document.getElementById("perk2name");
var perk2desc = document.getElementById("perk2desc");
var perk3name = document.getElementById("perk3name");
var perk3desc = document.getElementById("perk3desc");
var perk4name = document.getElementById("perk4name");
var perk4desc = document.getElementById("perk4desc");
var perk5name = document.getElementById("perk5name");
var perk5desc = document.getElementById("perk5desc");
var perk6name = document.getElementById("perk6name");
var perk6desc = document.getElementById("perk6desc");
var perk7name = document.getElementById("perk7name");
var perk7desc = document.getElementById("perk7desc");
var perk8name = document.getElementById("perk8name");
var perk8desc = document.getElementById("perk8desc");

//var saveLoadModal = new Modal(document.getElementById("modal-btn"), {});
var randomAbilityArr = permutator([7,8,10,10,11,12,12]);
var totalAbilityPoints = 70;

// returns characterList array from localStorage
function getCharacterList() {
  if(lsTest() === true) {
    if(localStorage.characterList) {
      characterList = JSON.parse(localStorage.getItem('characterList'));
    } else {
      characterList = [];
    }
  } else {
    showElementById("fullAlert", true);
  }
}

// Shows/hides editing inputs
function toggleEdit(btn) {
  editing_mode = !editing_mode;

  if(editing_mode) {
    toggleArr(editDiv, true);
    toggleArr(viewDiv, false);
    edit_btn.innerHTML = "View Details";
  } else {
    toggleArr(editDiv, false);
    toggleArr(viewDiv, true);
    edit_btn.innerHTML = "Edit Details";
  }
}

function ifEditClose() {
  if(editing_mode) {
    toggleEdit();
  }
}

// When input changes, updates label
function setLabel(input, target) {
  var label = document.getElementById(target);

  if(input.value === "" || input.value === null ) {
    return;
  } else {
    label.innerHTML = input.value;
  }
}

function setTempHp() {
  tempHp.value = hp_input.value;
}

// When vitality changes at lvl 1, update hp
function updateHP() {
  var btn = document.getElementById("updateHP");

  if(lvl_input.value === "1") {
    btn.disabled = true;
    hp_input.value = vit_input.value;
    hpLabel.innerHTML = vit_input.value;
    tempHp.value = vit_input.value;
  } else {
    btn.disabled = false;
  }
}

function addRandomHP() {
  var levels = Number(lvl_input.value) - 1;
  var baseHP = Number(vit_input.value);
  var mod = Number(vit_input.value) - 10;
  var i = 0;
  var num = 0;

  function rollForHP() {
    var newHP = 0;
    num = getRandomRange(10, 1);
    console.log("--------------");
    console.log("Base HP: " + baseHP);
    console.log("Rolled a " + num);
    newHP += num;
    newHP += mod;

    if(newHP <= 0) {
      baseHP += 1;
    } else {
      baseHP += newHP;
    }

    console.log("Add " + mod + " for vitality");
    console.log("New HP: " + baseHP);
  }

  for(i; i < levels; i++) {
    rollForHP();
  }

  console.log("--------------------------------");
  hp_input.value = String(baseHP);
  hpLabel.innerHTML = hp_input.value;
  tempHp.value = hp_input.value;
}

// Updates ability score modifier
function updateMods(input, target) {
  var value = input.value;
  var modVal = value - 10;
  var labelText = "";
  var labels = document.getElementsByClassName(target);
  var i = 0;

  if(modVal > 0) {
    labelText = "+ " + modVal.toString();
  } else if(modVal < 0) {
    modVal *= -1;
    labelText = "- " + modVal.toString();
  } else {
    labelText = "0";
  }

  for(i; i < labels.length; i++) {
    labels[i].innerHTML = labelText;
  }
}

function randomizeAbilityScores() {
  var i = 0;
  var idx = 0;
  var total = Number(document.getElementById("totalPoints").innerHTML);
  var abilities = document.getElementsByClassName("ability");
  var scores = [];

  scores = randomAbilityArr[getRandomRange(randomAbilityArr.length, 0)];

  str_input.value = scores[0];
  strLabel.innerHTML = str_input.value;
  updateMods(str_input, "strMod");
  dex_input.value = scores[1];
  dexLabel.innerHTML = dex_input.value;
  updateMods(dex_input, "dexMod");
  vit_input.value = scores[2];
  vitLabel.innerHTML = vit_input.value;
  updateHP();
  updateMods(vit_input, "vitMod");
  int_input.value = scores[3];
  intLabel.innerHTML = int_input.value;
  updateMods(int_input, "intMod");
  wis_input.value = scores[4];
  wisLabel.innerHTML = wis_input.value;
  updateMods(wis_input, "wisMod");
  cha_input.value = scores[5];
  chaLabel.innerHTML = cha_input.value;
  updateMods(cha_input, "chaMod");
  per_input.value = scores[6];
  perLabel.innerHTML = per_input.value;
  updateMods(per_input, "perMod");
}

function setLevel() {
  switch(document.getElementById("lvl").value) {
    default:
      totalAbilityPoints = 70;
      break;
    case "2":
    case "3":
    case "4":
      totalAbilityPoints = 71;
      break;
    case "5":
    case "6":
    case "7":
      totalAbilityPoints = 72;
      break;
    case "8":
    case "9":
    case "10":
      totalAbilityPoints = 73;
      break;
    case "11":
    case "12":
    case "13":
      totalAbilityPoints = 74;
      break;
    case "14":
    case "15":
    case "16":
      totalAbilityPoints = 75;
      break;
    case "17":
    case "18":
    case "19":
      totalAbilityPoints = 76;
      break;
    case "20":
      totalAbilityPoints = 77;
  }
}

// sets total points and points left
function setTotal() {
  var scores = document.getElementsByClassName("ability");
  var used = 0;
  var left = 0;
  var total_label = document.getElementById("totalPoints");
  var left_label= document.getElementById("pointsLeft");
  var i = 0;

  for(i; i < scores.length; i++) {
    used += Number(scores[i].value);
  }

  left = totalAbilityPoints - used;

  total_label.innerHTML = totalAbilityPoints.toString();
  left_label.innerHTML = left.toString();

  if(used > totalAbilityPoints) {
    left_label.parentElement.style.color = "red";
  } else if (used < totalAbilityPoints) {
    left_label.parentElement.style.color = "orange";
  } else {
    left_label.parentElement.style.color = "black";
  }
}

// init new character obj
function Character() {
  this.pin = 0;

  this.name = "";
  this.title = "";
  this.level = "";
  this.hp = "";

  this.strength = "";
  this.dexterity = "";
  this.vitality = "";
  this.intelligence = "";
  this.wisdom = "";
  this.charisma = "";
  this.perception = "";

  this.appearance = "";
  this.appImg = "";
  this.personality = "";
  this.backstory = "";

  this.wpn1name = "";
  this.wpn1desc = "";
  this.wpn1type = "";
  this.wpn2name = "";
  this.wpn2desc = "";
  this.wpn2type = "";
  this.armorName = "";
  this.armorDesc = "";
  this.armorType = "";
  this.gear = "";

  this.perk1name = "";
  this.perk1desc = "";
  this.perk2name = "";
  this.perk2desc = "";
  this.perk3name = "";
  this.perk3desc = "";
  this.perk4name = "";
  this.perk4desc = "";
  this.perk5name = "";
  this.perk5desc = "";
  this.perk6name = "";
  this.perk6desc = "";
  this.perk7name = "";
  this.perk7desc = "";
  this.perk8name = "";
  this.perk8desc = "";
}

// adds new character to characterList and localStorage from current labels
function saveCharData() {
  var character = new Character();

  character.pin = uniqueNumber();

  character.name = charName.innerHTML;
  character.title = title.innerHTML;
  character.level = lvlLabel.innerHTML;
  character.hp = hpLabel.innerHTML;

  character.strength = strLabel.innerHTML;
  character.dexterity = dexLabel.innerHTML;
  character.vitality = vitLabel.innerHTML;
  character.intelligence = intLabel.innerHTML;
  character.wisdom = wisLabel.innerHTML;
  character.charisma = chaLabel.innerHTML;
  character.perception = perLabel.innerHTML;

  character.appearance = app.innerHTML;
  character.image = appImg.src;
  character.personality = pers.innerHTML;
  character.backstory = bs.innerHTML;

  character.wpn1name = wpn1name.innerHTML;
  character.wpn1desc = wpn1desc.innerHTML;
  character.wpn1type = wpn1type.value;

  character.wpn2name = wpn2name.innerHTML;
  character.wpn2desc = wpn2desc.innerHTML;
  character.wpn2type = wpn2type.value;

  character.armorName = armorName.innerHTML;
  character.armorDesc = armorDesc.innerHTML;
  character.armorType = armorType.value;

  character.gear = gear.innerHTML;

  character.perk1name = perk1name.innerHTML;
  character.perk1desc = perk1desc.innerHTML;
  character.perk2name = perk2name.innerHTML;
  character.perk2desc = perk2desc.innerHTML;
  character.perk3name = perk3name.innerHTML;
  character.perk3desc = perk3desc.innerHTML;
  character.perk4name = perk4name.innerHTML;
  character.perk4desc = perk4desc.innerHTML;
  character.perk5name = perk5name.innerHTML;
  character.perk5desc = perk5desc.innerHTML;
  character.perk6name = perk6name.innerHTML;
  character.perk6desc = perk6desc.innerHTML;
  character.perk7name = perk7name.innerHTML;
  character.perk7desc = perk7desc.innerHTML;
  character.perk8name = perk8name.innerHTML;
  character.perk8desc = perk8desc.innerHTML;

  if(lsTest() === true){
    getCharacterList();
    characterList.push(character);
    localStorage.setItem('characterList', JSON.stringify(characterList));

         // this is how you will retrive it

    var retrievedObject = localStorage.getItem('characterList');
    console.log('retrievedObject: ', JSON.parse(retrievedObject));

    return character;
  } else {
    showElementById("fullAlert", true);
  }

}

// sets labels on loading of character
function setCharData(character) {
  charName.innerHTML = character.name;
  title.innerHTML = character.title;
  lvl_input.value = Number(character.level);
  setLabel(lvl_input, "lvlLabel");
  hp_input.value = Number(character.hp);
  setLabel(hp_input, "hpLabel");
  tempHp.value = Number(character.hp);

  str_input.value = Number(character.strength);
  setLabel(str_input, "strLabel");
  updateMods(str_input, "strMod");
  dex_input.value = Number(character.dexterity);
  setLabel(dex_input, "dexLabel");
  updateMods(dex_input, "dexMod");
  vit_input.value = Number(character.vitality);
  setLabel(vit_input, "vitLabel");
  updateMods(vit_input, "vitMod");
  int_input.value = Number(character.intelligence);
  setLabel(int_input, "intLabel");
  updateMods(int_input, "intMod");
  wis_input.value = Number(character.wisdom);
  setLabel(wis_input, "wisLabel");
  updateMods(wis_input, "wisMod");
  cha_input.value = Number(character.charisma);
  setLabel(cha_input, "chaLabel");
  updateMods(cha_input, "chaMod");
  per_input.value = Number(character.perception);
  setLabel(per_input, "perLabel");
  updateMods(per_input, "perMod");

  wpn1name.innerHTML = character.wpn1name;
  wpn1desc.innerHTML = character.wpn1desc;
  wpn1type.value = character.wpn1type;

  wpn2name.innerHTML = character.wpn2name;
  wpn2desc.innerHTML = character.wpn2desc;
  wpn2type.value = character.wpn2type;

  armorName.innerHTML = character.armorName;
  armorDesc.innerHTML = character.armorDesc;
  armorType.value = character.armorType;

  gear.innerHTML = character.gear;

  app.innerHTML = character.appearance;
  appImg.src = character.image;
  if(appImg.src !== "") {
    appImg.style.display = "block";
  }
  pers.innerHTML = character.personality;
  bs.innerHTML = character.backstory;

  perk1name.innerHTML = character.perk1name;
  perk1desc.innerHTML = character.perk1desc;
  perk2name.innerHTML = character.perk2name;
  perk2desc.innerHTML = character.perk2desc;
  perk3name.innerHTML = character.perk3name;
  perk3desc.innerHTML = character.perk3desc;
  perk4name.innerHTML = character.perk4name;
  perk4desc.innerHTML = character.perk4desc;
  perk5name.innerHTML = character.perk5name;
  perk5desc.innerHTML = character.perk5desc;
  perk6name.innerHTML = character.perk6name;
  perk6desc.innerHTML = character.perk6desc;
  perk7name.innerHTML = character.perk7name;
  perk7desc.innerHTML = character.perk7desc;
  perk8name.innerHTML = character.perk8name;
  perk8desc.innerHTML = character.perk8desc;
}

function saveCharacter() {
  if(charName.innerHTML !== "") {
    var character = saveCharData();
    addRowToLoadTable(character);
  } else {
    showElementById('nameAlert', true);
  }
}

function loadData(pin) {
  var result;
  getCharacterList();

  result = getPinFromArray(characterList,pin);
  setCharData(result);

  hideModal(saveLoadModal);
  ifEditClose();
}

function loadSample(num) {
  setCharData(sampleChars[num]);
  setTotal();
}

function addRowToLoadTable(obj) {
  var table = document.getElementById("loadTable");
  var name = String(obj.name);
  var idNum = obj.pin;
  var newHTML = "";

  console.log(obj);

  newHTML = "<tr><td><div>" + name + "</div></td><td class='text-right'><div class='btn-group'><button type='button' class='btn btn-default n-m-b' onclick='clearItem(this,&quot;" + idNum + "&quot;)'>Delete</button><button type='button' class='btn btn-default n-m-b' id='" + idNum + "' onclick='loadData(this.id)'>Load</button></div></td></tr>";

  table.innerHTML += newHTML;
}

// set rows in table for each character in characterList
function refreshTable() {
  var table = document.getElementById("loadTable");
  var i = 0;

  if(lsTest() === true) {
    clearTable(table);
    getCharacterList();

    for(i; i < characterList.length; i++) {
      addRowToLoadTable(characterList[i]);
    }

    localStorage.setItem('characterList', JSON.stringify(characterList));
  } else {
    showElementById("fullAlert", true);
  }
}
refreshTable();

// clear out characterList and refreshTable
function clearList() {
  localStorage.removeItem("characterList");
  getCharacterList();
  characterList = [];
  localStorage.setItem('characterList', JSON.stringify(characterList));
  refreshTable();
}

function clearItem(btn,pin) {
  getCharacterList();

  removePinFromArray(characterList,pin);

  console.log(characterList);

  localStorage.setItem('characterList', JSON.stringify(characterList));
  btn.parentNode.parentNode.parentNode.parentNode.removeChild(btn.parentNode.parentNode.parentNode);
}

function togglePerDay(chk) {
  var perDay = document.getElementById("perDay");

  if(chk) {
    perDay.style.display = "block";
  } else {
    perDay.style.display = "none";
  }
}
togglePerDay(false);

function isTargetingEnemy(target, input) {
  var el = document.getElementById(target);

  if(input.value !== "enemy") {
    el.className = "hidden";
  } else {
    el.className = "";
  }
}

function chgExamples(input, target) {
  var el = document.getElementById(target);
  var val = input.value;
  var text = "";

  switch(val) {
    case "Small (d4)":
      text = "A dagger, a wand, a book, a stick, a flute, a tamborine, knitting needles, a stuffed animal, a spatula, a mouse, a rat, a squirrel, a racoon, a chicken, a cat, a small dog, a bottle, a pipe, etc.";
      break;
    case "Ranged (d6)":
      text = "A longbow, a shortbow, a crossbow, blowdarts, poison darts, lawn darts, any gun, throwing knives, throwing stars, throwing rocks, slingshots, killer bees, birds, dragons, griffins, and other flying creatures, etc.";
      break;
    case "Medium (d8)":
      text = "A sword, a mace, an axe, a rapier, a cane, a rod, a baton, a pickaxe, a large piece of wood, a lyre, a trumpet, a hand scythe, a dog, a small bear, a panther, a cheetah, a monkey, a trashcan, a chair, etc.";
      break;
    case "Large (d10)":
      text = "A warhammer, a two-handed sword, a battleaxe, polearms, a staff, a stopsign, a reaper's scythe, a coatrack, a spear, a lance, a lamp, a bear, a tiger, a horse, an alligator, a shark, a buffalo, an elephant, etc.";
      break;
    case "Shield (AC +1)":
      text = "A buckler, a kite shield, a tower shield, a trashcan lid, a car door, a riot shield, a thick sheet of wood with a handle glued to the back, a large turtle, an armadillo, a pangolin, etc.";
      break;
    case "None (AC 10)":
      text = "Stark naked, civilian clothes, a simple tunic, non-magical robes, a band t-shirt, boxing shorts, a swimsuit, overalls, an fancy suit, an old sweater, etc.";
      break;
    case "Light (AC 12)":
      text = "Leather armor, leather jacket, magic robes, plastic pads, bubble wrap, a hazmat suit, extra pants, a thin layer of psychic energy, garments with magical properties, etc.";
      break;
    case "Medium (AC 14)":
      text = "Partial iron/steel armor, bulletproof gear, a combat outfit, a thick layer of psychic energy, concealed armor, scale armor, chainmail, etc.";
      break;
    case "Heavy (AC 16)":
      text = "Full suit of armor, riot gear, dragon bone armor, cyborg enhancements, beast body, rocks for skin, a mech suit, etc.";
      break;
  }

  el.innerHTML = text;
}

function getPerkTypeText(val, id) {
  var dice = "";

  switch(id) {
    case 1:
      dice = "2d12";
      break;
    case 2:
      dice = "3d8";
      break;
    case 3:
      dice = "4d12";
      break;
    case 4:
      dice = "6d12";
      break;
    case 5:
      dice = "10d8";
      break;
    case 6:
      dice = "10d10";
      break;
    case 7:
      dice = "10d12";
      break;
    case 8:
      dice = "12d12";
      break;
  }

  console.log(dice);

  switch(val) {
    case "Deal Damage":
      return "damages the target(s) for " + dice + " HP.";
    case "Heal":
      return "heals the target(s) for " + dice + " HP.";
    case "Buff AC":
      if(id === 1) {
        return "temporarily adds 1 point to the target's AC.";
      } else {
        return "temporarily adds " + id + " points to the target's AC.";
      }
      break;
    case "Debuff AC":
      if(id === 1) {
        return "temporarily removes 1 point from the target's AC.";
      } else {
        return "temporarily removes " + id + " points from the target's AC.";
      }
      break;
    case "Buff STR":
      if(id === 1) {
        return "temporarily adds 1 point to the target's STR.";
      } else {
        return "temporarily adds " + id + " points to the target's STR.";
      }
      break;
    case "Debuff STR":
      if(id === 1) {
        return "temporarily removes 1 point from the target's STR.";
      } else {
        return "temporarily removes " + id + " points from the target's STR.";
      }
      break;
    case "Buff DEX":
      if(id === 1) {
        return "temporarily adds 1 point to the target's DEX.";
      } else {
        return "temporarily adds " + id + " points to the target's DEX.";
      }
      break;
    case "Debuff DEX":
      if(id === 1) {
        return "temporarily removes 1 point from the target's DEX.";
      } else {
        return "temporarily removes " + id + " points from the target's DEX.";
      }
      break;
    case "Buff VIT":
      if(id === 1) {
        return "temporarily adds 1 point to the target's VIT.";
      } else {
        return "temporarily adds " + id + " points to the target's VIT.";
      }
      break;
    case "Debuff VIT":
      if(id === 1) {
        return "temporarily removes 1 point from the target's VIT.";
      } else {
        return "temporarily removes " + id + " points from the target's VIT.";
      }
      break;
    case "Buff INT":
      if(id === 1) {
        return "temporarily adds 1 point to the target's INT.";
      } else {
        return "temporarily adds " + id + " points to the target's INT.";
      }
      break;
    case "Debuff INT":
      if(id === 1) {
        return "temporarily removes 1 point from the target's INT.";
      } else {
        return "temporarily removes " + id + " points from the target's INT.";
      }
      break;
    case "Buff WIS":
      if(id === 1) {
        return "temporarily adds 1 point to the target's WIS.";
      } else {
        return "temporarily adds " + id + " points to the target's WIS.";
      }
      break;
    case "Debuff WIS":
      if(id === 1) {
        return "temporarily removes 1 point from the target's WIS.";
      } else {
        return "temporarily removes " + id + " points from the target's WIS.";
      }
      break;
    case "Buff CHA":
      if(id === 1) {
        return "temporarily adds 1 point to the target's CHA.";
      } else {
        return "temporarily adds " + id + " points to the target's CHA.";
      }
      break;
    case "Debuff CHA":
      if(id === 1) {
        return "temporarily removes 1 point from the target's CHA.";
      } else {
        return "temporarily removes " + id + " points from the target's CHA.";
      }
      break;
    case "Buff PER":
      if(id === 1) {
        return "temporarily adds 1 point to the target's PER.";
      } else {
        return "temporarily adds " + id + " points to the target's PER.";
      }
      break;
    case "Debuff PER":
      if(id === 1) {
        return "temporarily removes 1 point from the target's PER.";
      } else {
        return "temporarily removes " + id + " points from the target's PER.";
      }
  }
}

function submitHelp(id) {
  var desc = document.getElementById("perk" + id + "desc");
  var target = document.getElementById("target" + id + "sel");
  var dc = document.getElementById("dc" + id + "sel");
  var st = document.getElementById("st" + id + "sel");
  var type = document.getElementById("type" + id + "sel");
  var typeText = "";
  var text = "";

  typeText = getPerkTypeText(type.options[type.selectedIndex].text, id);

  if(target.value !== "enemy") {
    text = "The user targets " + target.options[target.selectedIndex].text + " and rolls a " + dc.options[dc.selectedIndex].text + " check. If successful, the perk " + typeText;
  } else {
    text = "The user targets " + target.options[target.selectedIndex].text + " and rolls a " + dc.options[dc.selectedIndex].text + " check. If successful, the target(s) must roll a " + st.options[st.selectedIndex].text + " saving throw. If they fail, the perk " + typeText;
  }

  desc.innerHTML = text;
}

function addImage() {
  var imageLoader = document.getElementById('imageLoader');
  var imageURL = document.getElementById('imageURL');
  appImg.src = "";
  imageLoader.value = "";

  if(imageURL.value !== "") {
    appImg.src = imageURL.value;
    appImg.style.display = "block";
  } else {
    imageURL.placeholder = "Required!";
  }
}

function handleImage(e){
  var imageLoader = document.getElementById('imageLoader');
  var imageURL = document.getElementById('imageURL');
  appImg.src = "";

  imageURL.value = "";

  var tgt = e.target || window.event.srcElement,
    files = tgt.files;

  // FileReader support
  if (FileReader && files && files.length) {
    var fr = new FileReader();
    fr.onload = function () {
      appImg.src = fr.result;
      appImg.style.display = "block";
    };
    fr.readAsDataURL(files[0]);
  }
}

function clearImage(mapId) {
  var imageLoader = document.getElementById('imageLoader');
  var imageURL = document.getElementById('imageURL');
  imageLoader.value = "";
  imageURL.value = "";
  appImg.height = 0;
  appImg.src = "";
  appImg.style.display = "none";
}
