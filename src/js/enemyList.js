var enemyList = [];

var enemyName = document.getElementById("enemyName");
var enemyAmt = document.getElementById("enemyAmt");
var enemyLvl = document.getElementById("enemyLvl");
var enemyHp = document.getElementById("enemyHp");
var enemyStr = document.getElementById("strength");
var enemyDex = document.getElementById("dexterity");
var enemyVit = document.getElementById("vitality");
var enemyInt = document.getElementById("intelligence");
var enemyWis = document.getElementById("wisdom");
var enemyCha = document.getElementById("charisma");
var enemyPer = document.getElementById("perception");
var enemyDamage = document.getElementById("enemyDamage");
var enemyArmor = document.getElementById("enemyArmor");
var enemyPerk1 = document.getElementById("enemyPerk1");
var enemyPerk2 = document.getElementById("enemyPerk2");
var enemyNotes = document.getElementById("enemyNotes");

var emptyPanel = document.getElementById("emptyEnemyPanel");

function Enemy() {
  this.pin = "";
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

  this.perk1 = "";
  this.perk2 = "";
  this.notes = "";
}

function getEnemyData() {
  var enemy = new Enemy();

  enemy.pin = uniqueNumber();

  enemy.name = enemyName.value;
  enemy.amt = enemyAmt.value;
  enemy.lvl = enemyLvl.value;
  enemy.hp = enemyHp.value;

  enemy.str = enemyStr.value;
  enemy.dex = enemyDex.value;
  enemy.vit = enemyVit.value;
  enemy.int = enemyInt.value;
  enemy.wis = enemyWis.value;
  enemy.cha = enemyCha.value;
  enemy.per = enemyPer.value;

  enemy.damage = enemyDamage.value;
  enemy.armor = enemyArmor.value;

  enemy.perk1 = enemyPerk1.value;
  enemy.perk2 = enemyPerk2.value;
  enemy.notes = enemyNotes.value;

  enemyList.push(enemy);
  return enemy;
}

function setEnemyData(enemy) {
  enemyName.value = enemy.name;
  enemyAmt.value = enemy.amt;
  enemyLvl.value = enemy.lvl;
  enemyHp.value = enemy.hp;

  enemyStr.value = enemy.str;
  enemyDex.value = enemy.dex;
  enemyVit.value = enemy.vit;
  enemyInt.value = enemy.int;
  enemyWis.value = enemy.wis;
  enemyCha.value = enemy.cha;
  enemyPer.value = enemy.per;

  enemyDamage.value = enemy.damage;
  enemyArmor.value = enemy.armor;

  enemyPerk1.value = enemy.perk1;
  enemyPerk2.value = enemy.perk2;
  enemyNotes.value = enemy.notes;
}

function clearEnemyCreator() {
  enemyName.value = "";
  enemyAmt.value = "1";
  enemyLvl.value = "1";
  enemyHp.value = "10";

  enemyStr.value = "10";
  enemyDex.value = "10";
  enemyVit.value = "10";
  enemyInt.value = "10";
  enemyWis.value = "10";
  enemyCha.value = "10";
  enemyPer.value = "10";

  enemyDamage.value = "d8";
  enemyArmor.value = "10";

  enemyPerk1.value = "";
  enemyPerk2.value = "";
  enemyNotes.value = "";
}

function createEnemyDiv() {
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
  var notes = "";

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

  //if no modifiers, add str to p
  if(abilitiesText === "") {
    abilitiesText = "No modifiers";
  }

  //health, armor, and damage
  details = "HP " + enemy.hp + " / AC " + enemy.armor + " / DMG " + enemy.damage;

  if(enemy.notes !== "") {
    notes = "<br><b>Notes</b><br>" + enemy.notes;
  }

  return '<div class="enemy col-xs-12 col-sm-4 col-print-4"><div class="panel panel-default"><div class="panel-heading"><h4 style="margin:8px auto">Level ' + enemy.lvl + ' ' + enemy.name + ' ' + amt + '</h4></div><div class="panel-body"><p>' + abilitiesText + '<br>' + details + '<br><b>Perks</b><br>' + enemy.perk1 + '<br>' + enemy.perk2 + notes + '</p></div><div class="panel-footer no-print"><div class="row"><div class="col-xs-6"><button type="button" class="btn btn-danger" onclick="deleteEnemy(this,' + enemy.pin + ')">Delete</button></div><div class="col-xs-6 text-right"><button type="button" class="btn btn-success" onclick="openEdit(this,'+enemy.pin+')">Edit</button></div></div></div></div></div>';
}

function openEdit(btn, pin) {
  var result;
  var creator = document.getElementById("enemyCreator");
  var pos = creator.offsetTop + 180;

  for(var i = 0; i < enemyList.length; i++) {
    if(enemyList[i].pin == pin) {
      result = enemyList[i];
      break;
    }
  }

  setEnemyData(result);
  scrollTo(document.body, pos, 600);
}

function addEnemy() {
  if(enemyList.length < 5) {
    var list = document.getElementById("enemyList");
    list.innerHTML += createEnemyDiv();
    clearEnemyCreator();
  }

  emptyPanel.style.display = "none";
}

function deleteEnemy(btn, pin) {

  for(var i = 0; i < enemyList.length; i++) {
    if(enemyList[i].pin == pin) {
      enemyList.splice(i,1);
      break;
    }
  }

  if(enemyList.length < 1) {
    emptyPanel.style.display = "block";
  }

  btn.parentNode.parentNode.parentNode.parentNode.parentNode.remove(btn.parentNode.parentNode.parentNode.parentNode);
}
