var characterList = [];

var editing_mode = false;
var editDiv = document.getElementById("edit");
var viewDiv = document.getElementById("view");
var edit_btn = document.getElementById("edit-btn");

var name_input = document.getElementById("name");
var nameLabel = document.getElementById("nameLabel");
var title_input = document.getElementById("title");
var titleLabel = document.getElementById("titleLabel");
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

var app_input = document.getElementById("appearance");
var appLabel = document.getElementById("appLabel");
var pers_input = document.getElementById("personality");
var persLabel = document.getElementById("persLabel");
var bs_input = document.getElementById("backstory");
var bsLabel = document.getElementById("bsLabel");

var wpn1name_input = document.getElementById("wpn1name");
var wpn1nameLabel = document.getElementById("wpn1nameLabel");
var wpn1desc_input = document.getElementById("wpn1desc");
var wpn1descLabel = document.getElementById("wpn1descLabel");
var wpn1type_input = document.getElementById("wpn1type");
var wpn1typeLabel = document.getElementById("wpn1typeLabel");
var wpn2name_input = document.getElementById("wpn2name");
var wpn2nameLabel = document.getElementById("wpn2nameLabel");
var wpn2desc_input = document.getElementById("wpn2desc");
var wpn2descLabel = document.getElementById("wpn2descLabel");
var wpn2type_input = document.getElementById("wpn2type");
var wpn2typeLabel = document.getElementById("wpn2typeLabel");
var armorName_input = document.getElementById("armorName");
var armorNameLabel = document.getElementById("armorNameLabel");
var armorDesc_input = document.getElementById("armorDesc");
var armorDescLabel = document.getElementById("armorDescLabel");
var armorType_input = document.getElementById("armorType");
var armorTypeLabel = document.getElementById("armorTypeLabel");
var gear_input = document.getElementById("gear");
var gearLabel = document.getElementById("gearLabel");

var spmov1name_input = document.getElementById("spmov1name");
var spmov1nameLabel = document.getElementById("spmov1nameLabel");
var spmov1desc_input = document.getElementById("spmov1desc");
var spmov1descLabel = document.getElementById("spmov1descLabel");

var spmov2name_input = document.getElementById("spmov2name");
var spmov2nameLabel = document.getElementById("spmov2nameLabel");
var spmov2desc_input = document.getElementById("spmov2desc");
var spmov2descLabel = document.getElementById("spmov2descLabel");

var spmov3name_input = document.getElementById("spmov3name");
var spmov3nameLabel = document.getElementById("spmov3nameLabel");
var spmov3desc_input = document.getElementById("spmov3desc");
var spmov3descLabel = document.getElementById("spmov3descLabel");

var spmov4name_input = document.getElementById("spmov4name");
var spmov4nameLabel = document.getElementById("spmov4nameLabel");
var spmov4desc_input = document.getElementById("spmov4desc");
var spmov4descLabel = document.getElementById("spmov4descLabel");

var spmov5name_input = document.getElementById("spmov5name");
var spmov5nameLabel = document.getElementById("spmov5nameLabel");
var spmov5desc_input = document.getElementById("spmov5desc");
var spmov5descLabel = document.getElementById("spmov5descLabel");

var spmov6name_input = document.getElementById("spmov6name");
var spmov6nameLabel = document.getElementById("spmov6nameLabel");
var spmov6desc_input = document.getElementById("spmov6desc");
var spmov6descLabel = document.getElementById("spmov6descLabel");

var spmov7name_input = document.getElementById("spmov7name");
var spmov7nameLabel = document.getElementById("spmov7nameLabel");
var spmov7desc_input = document.getElementById("spmov7desc");
var spmov7descLabel = document.getElementById("spmov7descLabel");

var spmov8name_input = document.getElementById("spmov8name");
var spmov8nameLabel = document.getElementById("spmov8nameLabel");
var spmov8desc_input = document.getElementById("spmov8desc");
var spmov8descLabel = document.getElementById("spmov8descLabel");

var saveLoadModal = new Modal(document.getElementById("modal-btn"), {});

// Shows/hides editing inputs
function toggleEdit(btn) {
  editing_mode = !editing_mode;

  if(editing_mode) {
    editDiv.style.display = "block";
    viewDiv.style.display = "none";
    edit_btn.innerHTML = "View";
  } else {
    viewDiv.style.display = "block";
    editDiv.style.display = "none";
    edit_btn.innerHTML = "Edit";
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
function updateHP(con) {
  var hp_input = document.getElementById("hp");
  var curr = Number(hp_input.value);
  var val = Number(con.value) - 10;
  var newHp = curr + val;

  hp_input.value = 0;

  if(document.getElementById("lvl").value === "1") {
    hp_input.value = String(val + 10);
  } else {
    hp_input.value = String(curr);
  }
  // hp_input.value = newHp.toString();
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

// sets total points and points used
function setTotal() {
  var scores = document.getElementsByClassName("ability");
  var level = document.getElementById("lvl").value;
  var total = Number(level) + 59;
  var used = 0;
  var total_label = document.getElementById("totalPoints");
  var used_label= document.getElementById("usedPoints");
  var i = 0;

  for(i; i < scores.length; i++) {
    used += Number(scores[i].value);
  }

  total_label.innerHTML = total.toString();
  used_label.innerHTML = used.toString();

  if(used > total) {
    used_label.parentElement.style.color = "red";
  } else if (used < total) {
    used_label.parentElement.style.color = "orange";
  } else {
    used_label.parentElement.style.color = "black";
  }
}

function hideModal() {
  saveLoadModal.hide();
}

function showModal() {
  saveLoadModal.show();
}

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
  if(localStorage.characterList) {
   characterList = JSON.parse(localStorage.getItem('characterList'));
  } else {
   characterList = [];
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


  this.appearance = "";
  this.backstory = "";
  this.personality = "";

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

  character.level = lvlLabel.innerHTML;
  character.hp = hpLabel.innerHTML;

  character.strength = strLabel.innerHTML;
  character.dexterity = dexLabel.innerHTML;
  character.constitution = conLabel.innerHTML;
  character.intelligence = intLabel.innerHTML;
  character.wisdom = wisLabel.innerHTML;
  character.charisma = chaLabel.innerHTML;

  character.name = nameLabel.innerHTML;
  character.title = titleLabel.innerHTML;
  character.appearance = appLabel.innerHTML;
  character.backstory = bsLabel.innerHTML;
  character.personality = persLabel.innerHTML;

  character.wpn1name = wpn1nameLabel.innerHTML;
  character.wpn1desc = wpn1descLabel.innerHTML;
  character.wpn1type = wpn1typeLabel.innerHTML;

  character.wpn2name = wpn2nameLabel.innerHTML;
  character.wpn2desc = wpn2descLabel.innerHTML;
  character.wpn2type = wpn2typeLabel.innerHTML;

  character.armorName = armorNameLabel.innerHTML;
  character.armorDesc = armorDescLabel.innerHTML;
  character.armorType = armorTypeLabel.innerHTML;

  character.gear = gearLabel.innerHTML;

  character.spmov1name = spmov1nameLabel.innerHTML;
  character.spmov1desc = spmov1descLabel.innerHTML;
  character.spmov2name = spmov2nameLabel.innerHTML;
  character.spmov2desc = spmov2descLabel.innerHTML;
  character.spmov3name = spmov3nameLabel.innerHTML;
  character.spmov3desc = spmov3descLabel.innerHTML;
  character.spmov4name = spmov4nameLabel.innerHTML;
  character.spmov4desc = spmov4descLabel.innerHTML;
  character.spmov5name = spmov5nameLabel.innerHTML;
  character.spmov5desc = spmov5descLabel.innerHTML;
  character.spmov6name = spmov6nameLabel.innerHTML;
  character.spmov6desc = spmov6descLabel.innerHTML;
  character.spmov7name = spmov7nameLabel.innerHTML;
  character.spmov7desc = spmov7descLabel.innerHTML;
  character.spmov8name = spmov8nameLabel.innerHTML;
  character.spmov8desc = spmov8descLabel.innerHTML;

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
  name_input.value = character.name;
  setLabel(name_input, "nameLabel");
  title_input.value = character.title;
  setLabel(title_input, "titleLabel");
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

  wpn1name_input.value = character.wpn1name;
  setLabel(wpn1name_input, "wpn1nameLabel");
  wpn1desc_input.value = character.wpn1desc;
  setLabel(wpn1desc_input, "wpn1descLabel");
  wpn1type_input.value = character.wpn1type;
  setLabel(wpn1type_input, "wpn1typeLabel");

  wpn2name_input.value = character.wpn2name;
  setLabel(wpn2name_input, "wpn2nameLabel");
  wpn2desc_input.value = character.wpn2desc;
  setLabel(wpn2desc_input, "wpn2descLabel");
  wpn2type_input.value = character.wpn2type;
  setLabel(wpn2type_input, "wpn2typeLabel");

  armorName_input.value = character.armorName;
  setLabel(armorName_input, "armorNameLabel");
  armorDesc_input.value = character.armorDesc;
  setLabel(armorDesc_input, "armorDescLabel");
  armorType_input.value = character.armorType;
  setLabel(armorType_input, "armorTypeLabel");

  gear_input.value = character.gear;
  setLabel(gear_input, "gearLabel");

  app_input.value = character.appearance;
  setLabel(app_input, "appLabel");
  bs_input.value = character.backstory;
  setLabel(bs_input, "bsLabel");
  pers_input.value = character.personality;
  setLabel(pers_input, "persLabel");

  spmov1name_input.value = character.spmov1name;
  setLabel(spmov1name_input, "spmov1nameLabel");
  spmov1desc_input.value = character.spmov1desc;
  setLabel(spmov1desc_input, "spmov1descLabel");
  spmov2name_input.value = character.spmov2name;
  setLabel(spmov2name_input, "spmov2nameLabel");
  spmov2desc_input.value = character.spmov2desc;
  setLabel(spmov2desc_input, "spmov2descLabel");
  spmov3name_input.value = character.spmov3name;
  setLabel(spmov3name_input, "spmov3nameLabel");
  spmov3desc_input.value = character.spmov3desc;
  setLabel(spmov3desc_input, "spmov3descLabel");
  spmov4name_input.value = character.spmov4name;
  setLabel(spmov4name_input, "spmov4nameLabel");
  spmov4desc_input.value = character.spmov4desc;
  setLabel(spmov4desc_input, "spmov4descLabel");
  spmov5name_input.value = character.spmov5name;
  setLabel(spmov5name_input, "spmov5nameLabel");
  spmov5desc_input.value = character.spmov5desc;
  setLabel(spmov5desc_input, "spmov5descLabel");
  spmov6name_input.value = character.spmov6name;
  setLabel(spmov6name_input, "spmov6nameLabel");
  spmov6desc_input.value = character.spmov6desc;
  setLabel(spmov6desc_input, "spmov6descLabel");
  spmov7name_input.value = character.spmov7name;
  setLabel(spmov7name_input, "spmov7nameLabel");
  spmov7desc_input.value = character.spmov7desc;
  setLabel(spmov7desc_input, "spmov7descLabel");
  spmov8name_input.value = character.spmov8name;
  setLabel(spmov8name_input, "spmov8nameLabel");
  spmov8desc_input.value = character.spmov8desc;
  setLabel(spmov8desc_input, "spmov8descLabel");
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

  console.log(result);

  setCharData(result);

  hideModal();
  if(editing_mode) {
    toggleEdit();
  }
}

function addRowToLoadTable(obj) {
  var table = document.getElementById("loadCharTable");
  var name = String(obj.name);
  var idNum = obj.pin;
  var newHTML = "";

  console.log(obj);

  newHTML = "<tr><td><div>" + name + "</div></td><td><div class='btn-group'><button type='button' class='btn btn-default n-m-b' onclick='clearItem(this,&quot;" + idNum + "&quot;)'>Delete</button><button type='button' class='btn btn-default n-m-b' id='" + idNum + "' onclick='loadData(this.id)'>Load</button></div></td></tr>";

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

  clearTable(table);
  getCharacterList();

  for(i; i < characterList.length; i++) {
    addRowToLoadTable(characterList[i]);
  }

  localStorage.setItem('characterList', JSON.stringify(characterList));
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

showAlert("clearAlert", false);
showAlert("fullAlert", false);
