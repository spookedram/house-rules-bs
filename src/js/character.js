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

var str_input = document.getElementById("strength");
var strLabel = document.getElementById("strLabel");
var dex_input = document.getElementById("dexterity");
var dexLabel = document.getElementById("dexLabel");
var con_input = document.getElementById("constitution");
var conLabel = document.getElementById("conLabel");
var int_input = document.getElementById("intelligence");
var intLabel = document.getElementById("intLabel");
var wis_input = document.getElementById("wisdom");
var wisLabel = document.getElementById("wisLabel");
var cha_input = document.getElementById("charisma");
var chaLabel = document.getElementById("chaLabel");
var per_input = document.getElementById("perception");
var perLabel = document.getElementById("perLabel");

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

var spmov1name = document.getElementById("spmov1name");
var spmov1desc = document.getElementById("spmov1desc");
var spmov2name = document.getElementById("spmov2name");
var spmov2desc = document.getElementById("spmov2desc");
var spmov3name = document.getElementById("spmov3name");
var spmov3desc = document.getElementById("spmov3desc");
var spmov4name = document.getElementById("spmov4name");
var spmov4desc = document.getElementById("spmov4desc");
var spmov5name = document.getElementById("spmov5name");
var spmov5desc = document.getElementById("spmov5desc");
var spmov6name = document.getElementById("spmov6name");
var spmov6desc = document.getElementById("spmov6desc");
var spmov7name = document.getElementById("spmov7name");
var spmov7desc = document.getElementById("spmov7desc");
var spmov8name = document.getElementById("spmov8name");
var spmov8desc = document.getElementById("spmov8desc");

var saveLoadModal = new Modal(document.getElementById("modal-btn"), {});
var randomAbilityArr = permutator([7,8,10,10,11,12,12]);

function uniqueNumber() {
    var date = Date.now();

    // If created at same millisecond as previous
    if (date <= uniqueNumber.previous) {
        date = ++uniqueNumber.previous;
    } else {
        uniqueNumber.previous = date;
    }

    return date;
}
uniqueNumber.previous = 0;

// is localStorage empty?
function lsTest(){
  var test = 'test';
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch(e) {
    return false;
  }
}

// returns characterList array from localStorage
function getCharacterList() {
  if(lsTest() === true) {
    if(localStorage.characterList) {
      characterList = JSON.parse(localStorage.getItem('characterList'));
    } else {
      characterList = [];
    }
  } else {
    showAlert("fullAlert", true);
  }
}

function toggleArr(arr, boo) {
  var i = 0;
  var len = arr.length;

  for(i; i < len; i++) {
    if(boo) {
      arr[i].style.display = "block";
    } else {
      arr[i].style.display = "none";
    }
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

// When input changes, updates label
function setLabel(input, target) {
  var label = document.getElementById(target);

  if(input.value === "" || input.value === null ) {
    return;
  } else {
    label.innerHTML = input.value;
  }
}

// When constitution changes at lvl 1, update hp
function updateHP() {
  var btn = document.getElementById("updateHP");

  if(lvl_input.value === "1") {
    btn.disabled = true;
    hp_input.value = con_input.value;
    hpLabel.innerHTML = con_input.value;
  } else {
    btn.disabled = false;
  }
}

function addRandomHP() {
  var levels = Number(lvl_input.value) - 1;
  var baseHP = Number(con_input.value);
  var mod = Number(con_input.value) - 10;
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

    console.log("Add " + mod + " for constitution");
    console.log("New HP: " + baseHP);
  }

  for(i; i < levels; i++) {
    rollForHP();
  }

  console.log("--------------------------------");
  hp_input.value = String(baseHP);
  hpLabel.innerHTML = hp_input.value;
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

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
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
  con_input.value = scores[2];
  conLabel.innerHTML = con_input.value;
  updateHP();
  updateMods(con_input, "conMod");
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

// sets total points and points left
function setTotal() {
  var scores = document.getElementsByClassName("ability");
  var level = document.getElementById("lvl").value;
  var total = Number(level) + 69;
  var used = 0;
  var left = 0;
  var total_label = document.getElementById("totalPoints");
  var left_label= document.getElementById("pointsLeft");
  var i = 0;

  for(i; i < scores.length; i++) {
    used += Number(scores[i].value);
  }

  left = total - used;

  total_label.innerHTML = total.toString();
  left_label.innerHTML = left.toString();

  if(used > total) {
    left_label.parentElement.style.color = "red";
  } else if (used < total) {
    left_label.parentElement.style.color = "orange";
  } else {
    left_label.parentElement.style.color = "black";
  }
}

function hideModal() {
  saveLoadModal.hide();
}

function showModal() {
  saveLoadModal.show();
  if(editing_mode) {
    toggleEdit();
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
  this.constitution = "";
  this.intelligence = "";
  this.wisdom = "";
  this.charisma = "";
  this.perception = "";

  this.appearance = "";
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

  this.spmov1name = "";
  this.spmov1desc = "";
  this.spmov2name = "";
  this.spmov2desc = "";
  this.spmov3name = "";
  this.spmov3desc = "";
  this.spmov4name = "";
  this.spmov4desc = "";
  this.spmov5name = "";
  this.spmov5desc = "";
  this.spmov6name = "";
  this.spmov6desc = "";
  this.spmov7name = "";
  this.spmov7desc = "";
  this.spmov8name = "";
  this.spmov8desc = "";
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
  character.constitution = conLabel.innerHTML;
  character.intelligence = intLabel.innerHTML;
  character.wisdom = wisLabel.innerHTML;
  character.charisma = chaLabel.innerHTML;
  character.perception = perLabel.innerHTML;

  character.appearance = app.innerHTML;
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

  character.spmov1name = spmov1name.innerHTML;
  character.spmov1desc = spmov1desc.innerHTML;
  character.spmov2name = spmov2name.innerHTML;
  character.spmov2desc = spmov2desc.innerHTML;
  character.spmov3name = spmov3name.innerHTML;
  character.spmov3desc = spmov3desc.innerHTML;
  character.spmov4name = spmov4name.innerHTML;
  character.spmov4desc = spmov4desc.innerHTML;
  character.spmov5name = spmov5name.innerHTML;
  character.spmov5desc = spmov5desc.innerHTML;
  character.spmov6name = spmov6name.innerHTML;
  character.spmov6desc = spmov6desc.innerHTML;
  character.spmov7name = spmov7name.innerHTML;
  character.spmov7desc = spmov7desc.innerHTML;
  character.spmov8name = spmov8name.innerHTML;
  character.spmov8desc = spmov8desc.innerHTML;

  if(lsTest() === true){
    getCharacterList();
    characterList.push(character);
    localStorage.setItem('characterList', JSON.stringify(characterList));

         // this is how you will retrive it

    var retrievedObject = localStorage.getItem('characterList');
    console.log('retrievedObject: ', JSON.parse(retrievedObject));

    return character;
  } else {
    showAlert("fullAlert", true);
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

  str_input.value = Number(character.strength);
  setLabel(str_input, "strLabel");
  updateMods(str_input, "strMod");
  dex_input.value = Number(character.dexterity);
  setLabel(dex_input, "dexLabel");
  updateMods(dex_input, "dexMod");
  con_input.value = Number(character.constitution);
  setLabel(con_input, "conLabel");
  updateMods(con_input, "conMod");
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
  pers.innerHTML = character.personality;
  bs.innerHTML = character.backstory;

  spmov1name.innerHTML = character.spmov1name;
  spmov1desc.innerHTML = character.spmov1desc;
  spmov2name.innerHTML = character.spmov2name;
  spmov2desc.innerHTML = character.spmov2desc;
  spmov3name.innerHTML = character.spmov3name;
  spmov3desc.innerHTML = character.spmov3desc;
  spmov4name.innerHTML = character.spmov4name;
  spmov4desc.innerHTML = character.spmov4desc;
  spmov5name.innerHTML = character.spmov5name;
  spmov5desc.innerHTML = character.spmov5desc;
  spmov6name.innerHTML = character.spmov6name;
  spmov6desc.innerHTML = character.spmov6desc;
  spmov7name.innerHTML = character.spmov7name;
  spmov7desc.innerHTML = character.spmov7desc;
  spmov8name.innerHTML = character.spmov8name;
  spmov8desc.innerHTML = character.spmov8desc;
}

function saveCharacter() {
  var character = saveCharData();
  addRowToLoadTable(character);
}

function loadData(pin) {
  var result;
  getCharacterList();

  for(var i = 0; i < characterList.length; i++) {
    if(characterList[i].pin == pin) {
      result = characterList[i];
      break;
    }
  }

  setCharData(result);

  hideModal();
  if(editing_mode) {
    toggleEdit();
  }
}

function loadSample(num) {
  setCharData(sampleChars[num]);
  setTotal();
}

function addRowToLoadTable(obj) {
  var table = document.getElementById("loadCharTable");
  var name = String(obj.name);
  var idNum = obj.pin;
  var newHTML = "";

  console.log(obj);

  newHTML = "<tr><td><div>" + name + "</div></td><td class='text-right'><div class='btn-group'><button type='button' class='btn btn-default n-m-b' onclick='clearItem(this,&quot;" + idNum + "&quot;)'>Delete</button><button type='button' class='btn btn-default n-m-b' id='" + idNum + "' onclick='loadData(this.id)'>Load</button></div></td></tr>";

  table.innerHTML += newHTML;
}

// get table and set extra rows to empty
function clearTable(table) {
  while (table.children[1]) {
    table.removeChild(table.children[1]);
  }
}

// set rows in table for each character in characterList
function refreshTable() {
  var table = document.getElementById("loadCharTable");
  var i = 0;

  if(lsTest() === true) {
    clearTable(table);
    getCharacterList();

    for(i; i < characterList.length; i++) {
      addRowToLoadTable(characterList[i]);
    }

    localStorage.setItem('characterList', JSON.stringify(characterList));
  } else {
    showAlert("fullAlert", true);
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

  for(var i = 0; i < characterList.length; i++) {
    if(characterList[i].pin == pin) {
      characterList.splice(i, 1);
      break;
    }
  }

  console.log(characterList);

  localStorage.setItem('characterList', JSON.stringify(characterList));
  btn.parentNode.parentNode.parentNode.parentNode.removeChild(btn.parentNode.parentNode.parentNode);
}

// toggle alert box
function showAlert(target, boo){
  if(boo) {
    document.getElementById(target).style.display = "block";
  } else {
    document.getElementById(target).style.display = "none";
  }
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
