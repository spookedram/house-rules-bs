var enemyName = document.getElementById("enemyName");
var enemyAmt = document.getElementById("enemyAmt");
var enemyLvl = document.getElementById("lvl");
var enemyHp = document.getElementById("hp");
var enemyDamage = document.getElementById("enemyDamage");
var enemyArmor = document.getElementById("enemyArmor");
var enemyNotes = document.getElementById("enemyNotes");

var randomAbilityArr = permutator([8,8,10,10,10,12,12]);
var lvl_input = document.getElementById("lvl");
var hp_input = document.getElementById("hp");
var str_input = document.getElementById("strength");
var dex_input = document.getElementById("dexterity");
var vit_input = document.getElementById("vitality");
var int_input = document.getElementById("intelligence");
var wis_input = document.getElementById("wisdom");
var cha_input = document.getElementById("charisma");
var per_input = document.getElementById("perception");
var totalAbilityPoints = 70;

function Enemy() {
  this.pin = 0;
  this.name = "";
  this.amt = "";
  this.lvl = "";
  this.hp = "";

  this.str = "";
  this.dex = "";
  this.vit = "";
  this.int = "";
  this.wis = "";
  this.cha = "";
  this.per = "";

  this.damage = "";
  this.armor = "";
  this.notes = "";
  
  this.div = "";
}

function getEnemyData() {
  var enemy = new Enemy();

  enemy.pin = uniqueNumber();

  enemy.name = enemyName.value;
  enemy.amt = enemyAmt.value;
  enemy.lvl = enemyLvl.value;
  enemy.hp = enemyHp.value;

  enemy.str = str_input.value;
  enemy.dex = dex_input.value;
  enemy.vit = vit_input.value;
  enemy.int = int_input.value;
  enemy.wis = wis_input.value;
  enemy.cha = cha_input.value;
  enemy.per = per_input.value;

  enemy.damage = enemyDamage.value;
  enemy.armor = enemyArmor.value;
  enemy.notes = enemyNotes.value;

  return enemy;
}

function clearEnemyCreator() {
  enemyName.value = "";
  enemyAmt.value = "1";
  enemyLvl.value = "1";
  setLevel();
  enemyHp.value = "10";

  str_input.value = "10";
  updateMods(str_input, 'strMod');
  dex_input.value = "10";
  updateMods(dex_input, 'dexMod');
  vit_input.value = "10";
  updateMods(vit_input, 'vitMod');
  int_input.value = "10";
  updateMods(int_input, 'intMod');
  wis_input.value = "10";
  updateMods(wis_input, 'wisMod');
  cha_input.value = "10";
  updateMods(cha_input, 'chaMod');
  per_input.value = "10";
  updateMods(per_input, 'perMod');
  setTotal();

  enemyDamage.value = "d8";
  enemyArmor.value = "10";

  enemyNotes.value = "";
}

function getLvlDmgBonus() {
  switch(document.getElementById("lvl").value) {
    default:
      return 1;
    case "2":
    case "3":
      return 2;
    case "4":
    case "5":
    case "6":
      return 3;
    case "7":
    case "8":
    case "9":
      return 4;
    case "10":
    case "11":
    case "12":
      return 5;
    case "13":
    case "14":
    case "15":
      return 6;
    case "16":
    case "17":
    case "18":
      return 7;
    case "19":
    case "20":
  }
}

function addEnemy() {
  var enemy = getEnemyData();
  var amt = "";
  var abilities = [enemy.str,
    enemy.dex,
    enemy.vit,
    enemy.int,
    enemy.wis,
    enemy.cha,
    enemy.per];
  var abilitiesText = "";
  var details = "";
  var lvlDmgBonus = "";
  var notes = "";
  var newHTML = "";

  //If more than one enemy, add (x#) to heading
  if(enemy.amt !== "1") {
    amt = "(x" + enemy.amt + ")";
  }

  //Add ability modifier to p
  function absTestAndAdd(score, str) {
    var num = Number(score);
    if(num > 10) {
      abilitiesText += str + " +" + (num - 10) + " / ";
    } else if(num < 10) {
      abilitiesText += str + " -" + (10 - num) + " / ";
    } else {
      return;
    }
  }
  absTestAndAdd(abilities[0], "STR");
  absTestAndAdd(abilities[1], "DEX");
  absTestAndAdd(abilities[2], "VIT");
  absTestAndAdd(abilities[3], "INT");
  absTestAndAdd(abilities[4], "WIS");
  absTestAndAdd(abilities[5], "CHA");
  absTestAndAdd(abilities[6], "PER");

  abilitiesText = abilitiesText.substring(0, abilitiesText.length - 2);

  //if no modifiers, add str to p
  if(abilitiesText === "") {
    abilitiesText = "No modifiers";
  }

  lvlDmgBonus = getLvlDmgBonus();

  //health, armor, and damage
  details = "HP " + enemy.hp + " / AC " + enemy.armor + " / DMG " + lvlDmgBonus + enemy.damage;

  if(enemy.notes !== "") {
    notes = '<p class="n-mb"><b>Notes</b></p><p class="n-mb" contenteditable="true">' + enemy.notes + '</p>';
  }
  
  newHTML = '<div id="' + enemy.pin + '" class="event col-xs-12 col-sm-4 col-print-4"><div class="panel panel-default"><div class="panel-heading"><div class="row"><div class="col-xs-8"><h4 style="margin:8px auto">Enemy Encounter</span></h4></div><div class="col-xs-4 text-right no-print"><button type="button" class="btn btn-danger delete-btn" onclick="deleteEvent(' + currentArea + ',' + enemy.pin + ')"><span class="glyphicon glyphicon-remove"></span></button></div></div></div><div class="panel-body"><p><b>Level ' + enemy.lvl + ' <span contenteditable="true">' + enemy.name + ' ' + amt + '</b></p><p contenteditable="true">' + abilitiesText + '<br>' + details + '</p>' + notes + '</div></div></div>';
  
  enemy.div = newHTML;
  
  var area = getPinFromArray(areaList,currentArea);
  area.events.push(enemy);
  addToInnerHTML(document.getElementById("area" + currentArea + "eventList"), newHTML);
  hideModal(enemyModal);
  clearEnemyCreator();
}

function toggleDisabled(str, boo) {
  var el = document.getElementById(str);
  el.disabled = boo;
}

// When vitality changes at lvl 1, update hp
function updateHP() {
  var btn = document.getElementById("updateHP");

  if(lvl_input.value === "1") {
    btn.disabled = true;
    hp_input.value = vit_input.value;
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
  switch(document.getElementById("lvl").value) {
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
      break;
    default:
      totalAbilityPoints = 70;
      break;
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
