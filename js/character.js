var characterList = [];

var editing_mode = true;
var editDiv = document.getElementsByClassName("edit");
var viewDiv = document.getElementsByClassName("view");

var charName = document.getElementById("name");
var title = document.getElementById("title");
var lvl_input = document.getElementById("lvl");
var hp_input = document.getElementById("hp");
var tempHp = document.getElementById("tempHp");

var str_input = document.getElementById("strength");
var dex_input = document.getElementById("dexterity");
var vit_input = document.getElementById("vitality");
var int_input = document.getElementById("intelligence");
var wis_input = document.getElementById("wisdom");
var cha_input = document.getElementById("charisma");
var per_input = document.getElementById("perception");

var appImg = document.getElementById("imageUpload");
var app = document.getElementById("appearance");
var pers = document.getElementById("personality");
var bs = document.getElementById("backstory");

var wpn1desc = document.getElementById("wpn1desc");
var wpn1type = document.getElementById("wpn1type");
var wpn2desc = document.getElementById("wpn2desc");
var wpn2type = document.getElementById("wpn2type");
var armorDesc = document.getElementById("armorDesc");
var armorType = document.getElementById("armorType");
var gear = document.getElementById("gear");
var gold = document.getElementById("gold");

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
  var editInputs = document.getElementsByClassName("edit-input");

  editing_mode = !editing_mode;

  if(editing_mode) {
    toggleArr(editDiv, true);
    toggleArr(viewDiv, false);
    for(var i = 0; i < editInputs.length; i++) {
      editInputs[i].disabled = false;
    }
    if(btn) {
      btn.innerHTML = '<span class="glyphicon glyphicon-check" aria-hidden="true"></span>';
    }
    document.getElementById("print-btn").disabled = true;
  } else {
    toggleArr(editDiv, false);
    toggleArr(viewDiv, true);
    for(var j = 0; j < editInputs.length; j++) {
      editInputs[j].disabled = true;
    }
    if(btn) {
      btn.innerHTML = '<span class="glyphicon glyphicon-edit" aria-hidden="true"></span>';
    }
    document.getElementById("print-btn").disabled = false;
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

  label.innerHTML = input.value;
}

// When input changes, updates label
function setInputLabel(input, target) {
  var label = document.getElementById(target);

  if(input.value === "" || input.value === null ) {
    return;
  } else {
    label.value = input.value;
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
    setTempHp();
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
    newHP += num;
    newHP += mod;

    if(newHP <= 0) {
      baseHP += 1;
    } else {
      baseHP += newHP;
    }
  }

  for(i; i < levels; i++) {
    rollForHP();
  }

  hp_input.value = String(baseHP);
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
  updateMods(str_input, "strMod");
  dex_input.value = scores[1];
  updateMods(dex_input, "dexMod");
  vit_input.value = scores[2];
  updateHP();
  updateMods(vit_input, "vitMod");
  int_input.value = scores[3];
  updateMods(int_input, "intMod");
  wis_input.value = scores[4];
  updateMods(wis_input, "wisMod");
  cha_input.value = scores[5];
  updateMods(cha_input, "chaMod");
  per_input.value = scores[6];
  updateMods(per_input, "perMod");
}

function setLevel() {
  var lvl = document.getElementById("lvl").value;

  switch(lvl) {
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

  function setDamageDice(id, num, shield) {
    var el = document.getElementById(id);
    var newArr = ["Small (" + num + "d4)",
      "Ranged (" + num + "d6)",
      "Medium (" + num + "d8)",
      "Large (" + num + "d10)",
      "Shield " + shield];

    el.item(0).innerHTML = newArr[0];
    el.item(1).innerHTML = newArr[1];
    el.item(2).innerHTML = newArr[2];
    el.item(3).innerHTML = newArr[3];
    el.item(4).innerHTML = newArr[4];
  }

  switch(lvl) {
    default:
    case "2":
      setDamageDice('wpn1type', 1, '(AC +1)');
      setDamageDice('wpn2type', 1, '(AC +1)');
      break;
    case "3":
    case "4":
    case "5":
      setDamageDice('wpn1type', 2, '(AC +1/1d4)');
      setDamageDice('wpn2type', 2, '(AC +1/1d4)');
      break;
    case "6":
    case "7":
    case "8":
      setDamageDice('wpn1type', 3, '(AC +2/1d6)');
      setDamageDice('wpn2type', 3, '(AC +2/1d6)');
      break;
    case "9":
    case "10":
    case "11":
      setDamageDice('wpn1type', 4, '(AC +2/2d4)');
      setDamageDice('wpn2type', 4, '(AC +2/2d4)');
      break;
    case "12":
    case "13":
    case "14":
      setDamageDice('wpn1type', 5, '(AC +3/2d6)');
      setDamageDice('wpn2type', 5, '(AC +3/2d6)');
      break;
    case "15":
    case "16":
    case "17":
      setDamageDice('wpn1type', 6, '(AC +3/3d4)');
      setDamageDice('wpn2type', 6, '(AC +3/3d4)');
      break;
    case "18":
    case "19":
    case "20":
      setDamageDice('wpn1type', 7, '(AC +4/3d6)');
      setDamageDice('wpn2type', 7, '(AC +4/3d6)');
      break;
  }

  switch(lvl) {
    default:
    case "2":
    case "3":
      document.getElementById("perk3").style.display = "none";
      document.getElementById("perk4").style.display = "none";
      document.getElementById("perk5").style.display = "none";
      document.getElementById("perk6").style.display = "none";
      document.getElementById("perk7").style.display = "none";
      document.getElementById("perk8").style.display = "none";
      break;
    case "4":
    case "5":
    case "6":
      document.getElementById("perk3").style.display = "block";
      document.getElementById("perk4").style.display = "none";
      document.getElementById("perk5").style.display = "none";
      document.getElementById("perk6").style.display = "none";
      document.getElementById("perk7").style.display = "none";
      document.getElementById("perk8").style.display = "none";
      break;
    case "7":
    case "8":
    case "9":
      document.getElementById("perk3").style.display = "block";
      document.getElementById("perk4").style.display = "block";
      document.getElementById("perk5").style.display = "none";
      document.getElementById("perk6").style.display = "none";
      document.getElementById("perk7").style.display = "none";
      document.getElementById("perk8").style.display = "none";
      break;
    case "10":
    case "11":
    case "12":
      document.getElementById("perk3").style.display = "block";
      document.getElementById("perk4").style.display = "block";
      document.getElementById("perk5").style.display = "block";
      document.getElementById("perk6").style.display = "none";
      document.getElementById("perk7").style.display = "none";
      document.getElementById("perk8").style.display = "none";
      break;
    case "13":
    case "14":
    case "15":
      document.getElementById("perk3").style.display = "block";
      document.getElementById("perk4").style.display = "block";
      document.getElementById("perk5").style.display = "block";
      document.getElementById("perk6").style.display = "block";
      document.getElementById("perk7").style.display = "none";
      document.getElementById("perk8").style.display = "none";
      break;
    case "16":
    case "17":
    case "18":
      document.getElementById("perk3").style.display = "block";
      document.getElementById("perk4").style.display = "block";
      document.getElementById("perk5").style.display = "block";
      document.getElementById("perk6").style.display = "block";
      document.getElementById("perk7").style.display = "block";
      document.getElementById("perk8").style.display = "none";
      break;
    case "19":
    case "20":
      document.getElementById("perk3").style.display = "block";
      document.getElementById("perk4").style.display = "block";
      document.getElementById("perk5").style.display = "block";
      document.getElementById("perk6").style.display = "block";
      document.getElementById("perk7").style.display = "block";
      document.getElementById("perk8").style.display = "block";
      break;
  }
}

setLevel();

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
  this.image = "";
  this.personality = "";
  this.backstory = "";

  this.wpn1desc = "";
  this.wpn1type = "";
  this.wpn2desc = "";
  this.wpn2type = "";
  this.armorDesc = "";
  this.armorType = "";
  this.gear = "";
  this.gold = "";

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

  character.name = charName.value;
  character.title = title.value;
  character.level = lvl.value;
  character.hp = hp.value;

  character.strength = str_input.value;
  character.dexterity = dex_input.value;
  character.vitality = vit_input.value;
  character.intelligence = int_input.value;
  character.wisdom = wis_input.value;
  character.charisma = cha_input.value;
  character.perception = per_input.value;

  character.appearance = app.value;
  character.image = appImg.src;
  character.personality = pers.value;
  character.backstory = bs.value;

  character.wpn1desc = wpn1desc.value;
  character.wpn1type = wpn1type.value;

  character.wpn2desc = wpn2desc.value;
  character.wpn2type = wpn2type.value;

  character.armorDesc = armorDesc.value;
  character.armorType = armorType.value;

  character.gear = gear.value;
  character.gold = gold.value;

  character.perk1name = perk1name.value;
  character.perk1desc = perk1desc.value;
  character.perk2name = perk2name.value;
  character.perk2desc = perk2desc.value;
  character.perk3name = perk3name.value;
  character.perk3desc = perk3desc.value;
  character.perk4name = perk4name.value;
  character.perk4desc = perk4desc.value;
  character.perk5name = perk5name.value;
  character.perk5desc = perk5desc.value;
  character.perk6name = perk6name.value;
  character.perk6desc = perk6desc.value;
  character.perk7name = perk7name.value;
  character.perk7desc = perk7desc.value;
  character.perk8name = perk8name.value;
  character.perk8desc = perk8desc.value;

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
  charName.value = character.name;
  setLabel(charName, 'nameLabel');
  title.value = character.title;
  setLabel(title, 'titleLabel');
  lvl_input.value = Number(character.level);
  setLevel();
  showPerkUsesByLevel(lvl_input.value);
  hp_input.value = Number(character.hp);
  tempHp.value = Number(character.hp);

  str_input.value = Number(character.strength);
  updateMods(str_input, "strMod");
  dex_input.value = Number(character.dexterity);
  updateMods(dex_input, "dexMod");
  vit_input.value = Number(character.vitality);
  updateMods(vit_input, "vitMod");
  int_input.value = Number(character.intelligence);
  updateMods(int_input, "intMod");
  wis_input.value = Number(character.wisdom);
  updateMods(wis_input, "wisMod");
  cha_input.value = Number(character.charisma);
  updateMods(cha_input, "chaMod");
  per_input.value = Number(character.perception);
  updateMods(per_input, "perMod");

  wpn1desc.value = character.wpn1desc;
  setLabel(wpn1desc, "wpn1descLabel");
  wpn1type.value = character.wpn1type;

  wpn2desc.value = character.wpn2desc;
  setLabel(wpn2desc, "wpn2descLabel");
  wpn2type.value = character.wpn2type;

  armorDesc.value = character.armorDesc;
  setLabel(armorDesc, "armorDescLabel");
  armorType.value = character.armorType;
  setInputLabel(armorType, 'acLabel');

  gear.value = character.gear;
  gold.value = character.gold;

  app.value = character.appearance;
  setLabel(app, "appLabel");
  appImg.src = character.image;
  if(appImg.src !== "") {
    appImg.style.display = "block";
  }
  pers.value = character.personality;
  setLabel(pers, "persLabel");
  bs.value = character.backstory;
  setLabel(bs, "bsLabel");

  perk1name.value = character.perk1name;
  setLabel(perk1name, "perk1nameLabel");
  perk1desc.value = character.perk1desc;
  setLabel(perk1desc, "perk1descLabel");
  perk2name.value = character.perk2name;
  setLabel(perk2name, "perk2nameLabel");
  perk2desc.value = character.perk2desc;
  setLabel(perk2desc, "perk2descLabel");
  perk3name.value = character.perk3name;
  setLabel(perk3name, "perk3nameLabel");
  perk3desc.value = character.perk3desc;
  setLabel(perk3desc, "perk3descLabel");
  perk4name.value = character.perk4name;
  setLabel(perk4name, "perk4nameLabel");
  perk4desc.value = character.perk4desc;
  setLabel(perk4desc, "perk4descLabel");
  perk5name.value = character.perk5name;
  setLabel(perk5name, "perk5nameLabel");
  perk5desc.value = character.perk5desc;
  setLabel(perk5desc, "perk5descLabel");
  perk6name.value = character.perk6name;
  setLabel(perk6name, "perk6nameLabel");
  perk6desc.value = character.perk6desc;
  setLabel(perk6desc, "perk6descLabel");
  perk7name.value = character.perk7name;
  setLabel(perk7name, "perk7nameLabel");
  perk7desc.value = character.perk7desc;
  setLabel(perk7desc, "perk7descLabel");
  perk8name.value = character.perk8name;
  setLabel(perk8name, "perk8nameLabel");
  perk8desc.value = character.perk8desc;
  setLabel(perk8desc, "perk8descLabel");
}

function saveCharacter() {
  if(charName.value !== "") {
    var character = saveCharData();
    addRowToLoadTable(character);
  } else {
    showElementById('nameAlert', true);
  }
}

function loadData(pin) {
    if(!needToConfirm) {
    var result;
    getCharacterList();

    result = getPinFromArray(characterList,pin);
    setCharData(result);

    hideModal(saveLoadModal);
  } else {
    showElementById("saveChanges", true);
  }
}

function loadSample(num) {
  setCharData(sampleChars[num]);
}

function addRowToLoadTable(obj) {
  var table = document.getElementById("loadTable");
  var name = String(obj.name);
  var idNum = obj.pin;
  var newHTML = "";

  console.log(obj);

  newHTML = "<tr><td><div style='max-width:120px; word-wrap:break-word;'>" + name + "</div></td><td class='text-right' style='min-width:142px;'><div class='btn-group'><button type='button' class='btn btn-default n-m-b' onclick='showElementById(&quot;alert" + idNum + "&quot;, true)'>Delete</button><button type='button' class='btn btn-default n-m-b' id='" + idNum + "' onclick='loadData(this.id)'>Load</button></div><div id='alert" + idNum + "' style='display:none;'><b>Are you sure?</b> <p class='text-right'><button type='button' class='btn btn-primary n-m-b' onclick='showElementById(&quot;alert" + idNum + "&quot;, false)'>No</button> <button type='button' class='btn btn-danger n-m-b' onclick='clearItem(this,&quot;" + idNum + "&quot;)'>Yes</button></p></div></td></tr>";

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
  btn.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(btn.parentNode.parentNode.parentNode.parentNode);
}

function isTargetingEnemy(num) {
  var el = document.getElementById('stLabel' + num);
  var target = document.getElementById('target' + num + 'sel');

  if(target.value !== "enemy") {
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
    case "Small":
      text = "A dagger, a wand, a book, a stick, a flute, a tamborine, knitting needles, a stuffed animal, a spatula, a mouse, a rat, a squirrel, a racoon, a chicken, a cat, a small dog, a bottle, a pipe, etc.";
      break;
    case "Ranged":
      text = "A longbow, a shortbow, a crossbow, blowdarts, poison darts, lawn darts, any gun, throwing knives, throwing stars, throwing rocks, slingshots, killer bees, birds, dragons, griffins, and other flying creatures, etc.";
      break;
    case "Medium":
      text = "A sword, a mace, an axe, a rapier, a cane, a rod, a baton, a pickaxe, a large piece of wood, a lyre, a trumpet, a hand scythe, a dog, a small bear, a panther, a cheetah, a monkey, a trashcan, a chair, etc.";
      break;
    case "Large":
      text = "A warhammer, a two-handed sword, a battleaxe, polearms, a staff, a stopsign, a reaper's scythe, a coatrack, a spear, a lance, a lamp, a bear, a tiger, a horse, an alligator, a shark, a buffalo, an elephant, etc.";
      break;
    case "Shield":
      text = "A buckler, a kite shield, a tower shield, a trashcan lid, a car door, a riot shield, a thick sheet of wood with a handle glued to the back, a large turtle, an armadillo, a pangolin, etc.";
      break;
    case "10":
      text = "Stark naked, civilian clothes, a simple tunic, non-magical robes, a band t-shirt, boxing shorts, a swimsuit, overalls, an fancy suit, an old sweater, etc.";
      document.getElementById("acExtra").innerHTML = "+2 to initiative rolls";
      break;
    case "12":
      text = "Leather armor, leather jacket, magic robes, plastic pads, bubble wrap, a hazmat suit, extra pants, a thin layer of psychic energy, garments with magical properties, etc.";
      document.getElementById("acExtra").innerHTML = "";
      break;
    case "14":
      text = "Partial iron/steel armor, bulletproof gear, a combat outfit, a thick layer of psychic energy, concealed armor, scale armor, chainmail, etc.";
      document.getElementById("acExtra").innerHTML = "-2 to initiative rolls";
      break;
    case "16":
      text = "Full suit of armor, riot gear, dragon bone armor, cyborg enhancements, beast body, rocks for skin, a mech suit, etc.";
      document.getElementById("acExtra").innerHTML = "-4 to initiative rolls";
      break;
  }

  el.innerHTML = text;
}

function getPerkTypeText(tar, val, id) {
  var dice = "";
  var target_s = "";
  var dmg_hp_multiple = "";

  if(tar === "an enemy" || tar === "themselves or an ally") {
    target_s = "the target";
  } else {
    target_s = "each target";
    dmg_hp_multiple = " (divided evenly)";
  }

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
    case "Physical Strike":
    case "Ranged Attack":
      return "damages " + target_s + " for " + dice + " HP" + dmg_hp_multiple + ".";
    case "Heal":
      return "heals " + target_s + " for " + dice + " HP" + dmg_hp_multiple + ".";
    case "Buff AC":
      if(id === 1) {
        return "temporarily adds 1 point to " + target_s + "'s AC.";
      } else {
        return "temporarily adds " + id + " points to " + target_s + "'s AC.";
      }
      break;
    case "Debuff AC":
      if(id === 1) {
        return "temporarily removes 1 point from " + target_s + "'s AC.";
      } else {
        return "temporarily removes " + id + " points from " + target_s + "'s AC.";
      }
      break;
    case "Buff STR":
      if(id === 1) {
        return "temporarily adds 1 point to " + target_s + "'s STR.";
      } else {
        return "temporarily adds " + id + " points to " + target_s + "'s STR.";
      }
      break;
    case "Debuff STR":
      if(id === 1) {
        return "temporarily removes 1 point from " + target_s + "'s STR.";
      } else {
        return "temporarily removes " + id + " points from " + target_s + "'s STR.";
      }
      break;
    case "Buff DEX":
      if(id === 1) {
        return "temporarily adds 1 point to " + target_s + "'s DEX.";
      } else {
        return "temporarily adds " + id + " points to " + target_s + "'s DEX.";
      }
      break;
    case "Debuff DEX":
      if(id === 1) {
        return "temporarily removes 1 point from " + target_s + "'s DEX.";
      } else {
        return "temporarily removes " + id + " points from " + target_s + "'s DEX.";
      }
      break;
    case "Buff VIT":
      if(id === 1) {
        return "temporarily adds 1 point to " + target_s + "'s VIT.";
      } else {
        return "temporarily adds " + id + " points to " + target_s + "'s VIT.";
      }
      break;
    case "Debuff VIT":
      if(id === 1) {
        return "temporarily removes 1 point from " + target_s + "'s VIT.";
      } else {
        return "temporarily removes " + id + " points from " + target_s + "'s VIT.";
      }
      break;
    case "Buff INT":
      if(id === 1) {
        return "temporarily adds 1 point to " + target_s + "'s INT.";
      } else {
        return "temporarily adds " + id + " points to " + target_s + "'s INT.";
      }
      break;
    case "Debuff INT":
      if(id === 1) {
        return "temporarily removes 1 point from " + target_s + "'s INT.";
      } else {
        return "temporarily removes " + id + " points from " + target_s + "'s INT.";
      }
      break;
    case "Buff WIS":
      if(id === 1) {
        return "temporarily adds 1 point to " + target_s + "'s WIS.";
      } else {
        return "temporarily adds " + id + " points to " + target_s + "'s WIS.";
      }
      break;
    case "Debuff WIS":
      if(id === 1) {
        return "temporarily removes 1 point from " + target_s + "'s WIS.";
      } else {
        return "temporarily removes " + id + " points from " + target_s + "'s WIS.";
      }
      break;
    case "Buff CHA":
      if(id === 1) {
        return "temporarily adds 1 point to " + target_s + "'s CHA.";
      } else {
        return "temporarily adds " + id + " points to " + target_s + "'s CHA.";
      }
      break;
    case "Debuff CHA":
      if(id === 1) {
        return "temporarily removes 1 point from " + target_s + "'s CHA.";
      } else {
        return "temporarily removes " + id + " points from " + target_s + "'s CHA.";
      }
      break;
    case "Buff PER":
      if(id === 1) {
        return "temporarily adds 1 point to " + target_s + "'s PER.";
      } else {
        return "temporarily adds " + id + " points to " + target_s + "'s PER.";
      }
      break;
    case "Debuff PER":
      if(id === 1) {
        return "temporarily removes 1 point from " + target_s + "'s PER.";
      } else {
        return "temporarily removes " + id + " points from " + target_s + "'s PER.";
      }
  }
}

function submitHelp(id) {
  var desc = document.getElementById("perk" + id + "desc");
  var target = document.getElementById("target" + id + "sel");
  var dc = document.getElementById("dc" + id + "sel");
  var st = document.getElementById("st" + id + "sel");
  var type = document.getElementById("type" + id + "sel");
  var theEach = "";
  var typeText = "";
  var text = "";

  if(target.options[target.selectedIndex].text === "an enemy" || target.options[target.selectedIndex].text === "themselves or an ally") {
    theEach = "the target";
  } else {
    theEach = "each target";
  }

  typeText = getPerkTypeText(target.options[target.selectedIndex].text, type.options[type.selectedIndex].text, id);

  if(target.value !== "enemy") {
    text = "The user targets " + target.options[target.selectedIndex].text + " and the perk " + typeText;
  } else {
    if(type.options[type.selectedIndex].text === "Physical Strike") {
      text = "The user targets " + target.options[target.selectedIndex].text + " and rolls a " + dc.options[dc.selectedIndex].text + " attack. If the attack hits, the perk " + typeText;
    } else {
      text = "The user targets " + target.options[target.selectedIndex].text + " and rolls a " + dc.options[dc.selectedIndex].text + " check. Then, " + theEach + " must roll a " + st.options[st.selectedIndex].text + " contested saving throw. If they fail, the perk " + typeText;
    }
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

function checkUsesPerDay(input) {
  var checkbox = input.childNodes[1];
  var star = input.childNodes[3];

  if(checkbox.checked) {
    star.className = "glyphicon glyphicon-star";
  } else {
    star.className = "glyphicon glyphicon-star-empty";
  }
}
