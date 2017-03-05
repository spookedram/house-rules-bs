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
var appLabel = document.getElementById("appearanceLabel");
var pers_input = document.getElementById("personality");
var persLabel = document.getElementById("personalityLabel");
var bs_input = document.getElementById("backstory");
var bsLabel = document.getElementById("backstoryLabel");

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

function Character() {
  this.level = "";
  this.hp = "";
  this.abilities = {
    strength: "",
    dexterity: "",
    constitution: "",
    intelligence: "",
    wisdom: "",
    charisma: ""
  };
  this.details = {
    name: "",
    title: "",
    appearance: "",
    backstory: "",
    personality: ""
  };
  this.equipment = {
    weapons: [
      {
        name: "",
        desc: "",
        type: ""
      },
      {
        name: "",
        desc: "",
        type: ""
      }
    ],
    armor: {
      name: "",
      desc: "",
      type: ""
    },
    gear: ""
  };
  this.special_moves = [
    {
      name: "",
      desc: ""
    },
    {
      name: "",
      desc: ""
    },
    {
      name: "",
      desc: ""
    },
    {
      name: "",
      desc: ""
    },
    {
      name: "",
      desc: ""
    },
    {
      name: "",
      desc: ""
    },
    {
      name: "",
      desc: ""
    },
    {
      name: "",
      desc: ""
    }
  ];
}

function getCharData() {
  var character = new Character();

  character.level = lvlLabel.innerHTML;
  character.hp = hpLabel.innerHTML;

  character.abilities.strength = strLabel.innerHTML;
  character.abilities.dexterity = dexLabel.innerHTML;
  character.abilities.constitution = conLabel.innerHTML;
  character.abilities.intelligence = intLabel.innerHTML;
  character.abilities.wisdom = wisLabel.innerHTML;
  character.abilities.charisma = chaLabel.innerHTML;

  character.details.name = nameLabel.innerHTML;
  character.details.title = titleLabel.innerHTML;
  character.details.appearance = appLabel.innerHTML;
  character.details.backstory = bsLabel.innerHTML;
  character.details.personality = persLabel.innerHTML;

  character.equipment.weapons[0].name = wpn1nameLabel.innerHTML;
  character.equipment.weapons[0].desc = wpn1descLabel.innerHTML;
  character.equipment.weapons[0].type = wpn1typeLabel.innerHTML;

  character.equipment.weapons[1].name = wpn2nameLabel.innerHTML;
  character.equipment.weapons[1].desc = wpn2descLabel.innerHTML;
  character.equipment.weapons[1].type = wpn2typeLabel.innerHTML;

  character.equipment.armor.name = armorNameLabel.innerHTML;
  character.equipment.armor.desc = armorDescLabel.innerHTML;
  character.equipment.armor.type = armorTypeLabel.innerHTML;

  character.equipment.gear = gearLabel.innerHTML;

  character.special_moves[0].name = spmov1nameLabel.innerHTML;
  character.special_moves[0].desc = spmov1descLabel.innerHTML;
  character.special_moves[1].name = spmov2nameLabel.innerHTML;
  character.special_moves[1].desc = spmov2descLabel.innerHTML;
  character.special_moves[2].name = spmov3nameLabel.innerHTML;
  character.special_moves[2].desc = spmov3descLabel.innerHTML;
  character.special_moves[3].name = spmov4nameLabel.innerHTML;
  character.special_moves[3].desc = spmov4descLabel.innerHTML;
  character.special_moves[4].name = spmov5nameLabel.innerHTML;
  character.special_moves[4].desc = spmov5descLabel.innerHTML;
  character.special_moves[5].name = spmov6nameLabel.innerHTML;
  character.special_moves[5].desc = spmov6descLabel.innerHTML;
  character.special_moves[6].name = spmov7nameLabel.innerHTML;
  character.special_moves[6].desc = spmov7descLabel.innerHTML;
  character.special_moves[7].name = spmov8nameLabel.innerHTML;
  character.special_moves[7].desc = spmov8descLabel.innerHTML;

  if(localStorage.characterList) {
   characterList = JSON.parse(localStorage.getItem('characterList'));
  } else {
   characterList = [];
  }
  characterList.push(character);
  localStorage.setItem('characterList', JSON.stringify(characterList));

       // this is how you will retrive it

  var retrievedObject = localStorage.getItem('characterList');
  console.log('retrievedObject: ', JSON.parse(retrievedObject));

  return character;
}

function addRowToLoadTable(obj,num) {
  var table = document.getElementById("loadCharTable");
  var newHTML = "";

  newHTML = "<tr><td>" + String(obj.details.name) + "</td><td><button type='button' class='btn btn-default n-m-b' id='loadFile" + num + "' onclick='getNumAndGo(this.id)'>Load</button></td></tr>";

  table.innerHTML += newHTML;
}

function saveData() {
  addRowToLoadTable(getCharData(), characterList.length + 1);
}

function fillTable() {
  var table = document.getElementById("loadTable");
  var newHTML = "";
  var i = 0;

  if(localStorage.characterList) {
    var retrievedObject = localStorage.getItem('characterList');
    characterList = JSON.parse(retrievedObject);
    for(i; i < characterList.length; i++) {
      addRowToLoadTable(characterList[i],i);
    }
  } else {
    characterList = [];
  }
}

fillTable();

function getNumAndGo(str) {
  var num = str.charAt(8);
  setCharData(characterList[num]);
  if(!editing_mode) {
    toggleEdit();
  }
}

function setCharData(character) {
  lvl_input.value = Number(character.level);
  setLabel(lvl_input, "lvlLabel");
  hp_input.value = Number(character.hp);
  setLabel(hp_input, "hpLabel");

  str_input.value = Number(character.abilities.strength);
  setLabel(str_input, "strLabel");
  updateMods(str_input, "strMod");
  dex_input.value = Number(character.abilities.dexterity);
  setLabel(dex_input, "dexLabel");
  updateMods(dex_input, "dexMod");
  con_input.value = Number(character.abilities.constitution);
  setLabel(con_input, "conLabel");
  updateMods(con_input, "conMod");
  int_input.value = Number(character.abilities.intelligence);
  setLabel(int_input, "intLabel");
  updateMods(int_input, "intMod");
  wis_input.value = Number(character.abilities.wisdom);
  setLabel(wis_input, "wisLabel");
  updateMods(wis_input, "wisMod");
  cha_input.value = Number(character.abilities.charisma);
  setLabel(cha_input, "chaLabel");
  updateMods(cha_input, "chaMod");

  name_input.value = character.details.name;
  setLabel(name_input, "nameLabel");
  title_input.value = character.details.title;
  setLabel(title_input, "titleLabel");
  app_input.value = character.details.appearance;
  setLabel(app_input, "appLabel");
  bs_input.value = character.details.backstory;
  setLabel(bs_input, "bsLabel");
  pers_input.value = character.details.personality;
  setLabel(pers_input, "persLabel");

  wpn1name_input.value = character.equipment.weapons[0].name;
  setLabel(wpn1name_input, "wpn1nameLabel");
  wpn1desc_input.value = character.equipment.weapons[0].desc;
  setLabel(wpn1desc_input, "wpn1descLabel");
  wpn1type_input.value = character.equipment.weapons[0].type;
  setLabel(wpn1type_input, "wpn1typeLabel");

  wpn2name_input.value = character.equipment.weapons[1].name;
  setLabel(wpn2name_input, "wpn2nameLabel");
  wpn2desc_input.value = character.equipment.weapons[1].desc;
  setLabel(wpn2desc_input, "wpn2descLabel");
  wpn2type_input.value = character.equipment.weapons[1].type;
  setLabel(wpn2type_input, "wpn2typeLabel");

  armorName_input.value = character.equipment.armor.name;
  setLabel(armorName_input, "armorNameLabel");
  armorDesc_input.value = character.equipment.armor.desc;
  setLabel(armorDesc_input, "armorDescLabel");
  armorType_input.value = character.equipment.armor.type;
  setLabel(armorType_input, "armorTypeLabel");

  gear_input.value = character.equipment.gear;
  setLabel(gear_input, "gearLabel");

  spmov1name_input.value = character.special_moves[0].name;
  setLabel(spmov1name_input, "spmov1nameLabel");
  spmov1desc_input.value = character.special_moves[0].desc;
  setLabel(spmov1desc_input, "spmov1descLabel");
  spmov2name_input.value = character.special_moves[1].name;
  setLabel(spmov2name_input, "spmov2nameLabel");
  spmov2desc_input.value = character.special_moves[1].desc;
  setLabel(spmov2desc_input, "spmov2descLabel");
  spmov3name_input.value = character.special_moves[2].name;
  setLabel(spmov3name_input, "spmov3nameLabel");
  spmov3desc_input.value = character.special_moves[2].desc;
  setLabel(spmov3desc_input, "spmov3descLabel");
  spmov4name_input.value = character.special_moves[3].name;
  setLabel(spmov4name_input, "spmov4nameLabel");
  spmov4desc_input.value = character.special_moves[3].desc;
  setLabel(spmov4desc_input, "spmov4descLabel");
  spmov5name_input.value = character.special_moves[4].name;
  setLabel(spmov5name_input, "spmov5nameLabel");
  spmov5desc_input.value = character.special_moves[4].desc;
  setLabel(spmov5desc_input, "spmov5descLabel");
  spmov6name_input.value = character.special_moves[5].name;
  setLabel(spmov6name_input, "spmov6nameLabel");
  spmov6desc_input.value = character.special_moves[5].desc;
  setLabel(spmov6desc_input, "spmov6descLabel");
  spmov7name_input.value = character.special_moves[6].name;
  setLabel(spmov7name_input, "spmov7nameLabel");
  spmov7desc_input.value = character.special_moves[6].desc;
  setLabel(spmov7desc_input, "spmov7descLabel");
  spmov8name_input.value = character.special_moves[7].name;
  setLabel(spmov8name_input, "spmov8nameLabel");
  spmov8desc_input.value = character.special_moves[7].desc;
  setLabel(spmov8desc_input, "spmov8descLabel");
}

function setLabel(input, target) {
  var label = document.getElementById(target);

  if(input.value === "" || input.value === null ) {
    return;
  } else {
    label.innerHTML = input.value;
  }
}

function toggleEdit(btn) {
  editing_mode = !editing_mode;

  if(!editing_mode) {
    editDiv.style.display = "block";
    viewDiv.style.display = "none";
    edit_btn.innerHTML = "View";
  } else {
    viewDiv.style.display = "block";
    editDiv.style.display = "none";
    edit_btn.innerHTML = "Edit";
  }
}

toggleEdit();

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

//Updates ability score modifier
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
