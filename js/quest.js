var questList = [];
var settingList = [];
var actList = [];

var questName = document.getElementById("questName");
var npcsList = document.getElementById("npcsList");
var setup = document.getElementById("prologue");
var goal = document.getElementById("goal");
var epilogue = document.getElementById("epilogue");
var cliffhanger = document.getElementById("cliffhanger");

var settingsInput = document.getElementById("settingsInput");
var npcsInput = document.getElementById("npcsInput");

var saveLoadModal = new Modal(document.getElementById("modal-btn"), {});

// returns characterList array from localStorage
function getQuestList() {
  if(lsTest() === true) {
    if(localStorage.questList) {
     questList = JSON.parse(localStorage.getItem('questList'));
    } else {
     questList = [];
    }
  } else {
    showElementById("fullAlert", true);
  }
}

// init new character obj
function Quest() {
  this.pin = 0;
  this.questName = "";
  this.settingList = [];

  this.setup = "";
  this.goal = "";

  this.epilogue = "";
  this.cliffhanger = "";
}

function getItems(str) {
  var arr = document.getElementsByClassName(str);
  var i = 0;
  var len = arr.length;
  var newArr = [];

  for(i; i < len; i++) {
    newArr.push(arr[i].innerHTML);
  }

  return newArr;
}

function saveQuestData() {
  var quest = new Quest();

  quest.pin = uniqueNumber();
  quest.questName = questName.innerHTML;
  quest.settingList = settingList;

  quest.setup = setup.innerHTML;
  quest.goal = goal.innerHTML;

  quest.eventList = getItems('event');

  quest.epilogue = epilogue.innerHTML;
  quest.cliffhanger = cliffhanger.innerHTML;

  if(lsTest() === true){
    getQuestList();
    questList.push(quest);
    localStorage.setItem('questList', JSON.stringify(questList));

         // this is how you will retrive it

    var retrievedObject = localStorage.getItem('questList');
    console.log('retrievedObject: ', JSON.parse(retrievedObject));

    return quest;
  } else {
      showElementById("fullAlert", true);
  }
}

function setQuestData(quest) {
  questName.innerHTML = quest.questName;
  for(var i = 0; i < quest.settingList.length; i++) {
    addToInnerHTML(document.getElementById('settingsList'), "<tr><td class='setting' style='vertical-align:middle'>" + quest.settingList[i] + "</td><td class='text-right'><button type='button' class='btn btn-default no-print' onclick='deleteRow(this)'><span class='glyphicon glyphicon-remove'></span></button></td></tr>");
  }

  setup.innerHTML = quest.setup;
  goal.innerHTML = quest.goal;

  showElementById('emptyEnemyPanel', false);
  for(var j = 0; j < quest.enemyList.length; j++) {
    addToInnerHTML(document.getElementById('enemyList'), '<div class="enemy col-xs-12 col-sm-4 col-print-4">' + quest.enemyList[j] + '</div>');
  }

  showElementById('emptyActPanel', false);
  for(var k = 0; k < quest.actList.length; k++) {
    addToInnerHTML(document.getElementById('actList'), "<div class='panel panel-default no-print'><div class='panel-heading'><div class='row'><div class='col-xs-8'><h4 style='margin:8px auto' contenteditable='true'>Act 1</h4></div><div class='col-xs-4 text-right no-print'><button type='button' class='btn btn-danger delete-btn' onclick='deleteEnemy(this," + quest.pin + ")'><span class='glyphicon glyphicon-remove'></span></button></div></div></div><div class='panel-body'><div class='row'><div class='col-sm-6'><b>Low Point</b><p contenteditable='true'>" + quest.actList[k].low + "</p></div><div class='col-sm-6'><b>High Point</b><p contenteditable='true'>" + quest.actList[k].high + "</p></div></div></div></div>");
  }

  epilogue.innerHTML = quest.epilogue;
  cliffhanger.innerHTML = quest.cliffhanger;
}

function saveQuest() {
  if(questName.innerHTML !== "") {
    var quest = saveQuestData();
    addRowToLoadTable(quest);
  } else {
    showElementById('nameAlert', true);
  }
}

function loadData(pin) {
  var result;
  getQuestList();

  for(var i = 0; i < questList.length; i++) {
    if(questList[i].pin == pin) {
      result = questList[i];
      break;
    }
  }

  setQuestData(result);

  hideModal();
}

function loadSample(num) {
  setQuestData(sampleQuests[num]);
}

function addRowToLoadTable(obj) {
  var table = document.getElementById("loadTable");
  var name = String(obj.questName);
  var idNum = obj.pin;
  var newHTML = "";

  console.log(obj);

  newHTML = "<tr><td><div>" + name + "</div></td><td class='text-right'><div class='btn-group'><button type='button' class='btn btn-default n-m-b' onclick='clearItem(this,&quot;" + idNum + "&quot;)'>Delete</button><button type='button' class='btn btn-default n-m-b' id='" + idNum + "' onclick='loadData(this.id)'>Load</button></div></td></tr>";

  table.innerHTML += newHTML;
}

// set rows in table for each character in questList
function refreshTable() {
  var table = document.getElementById("loadTable");
  var i = 0;

  if(lsTest() === true) {
    clearTable(table);
    getQuestList();

    for(i; i < questList.length; i++) {
      addRowToLoadTable(questList[i]);
    }

    localStorage.setItem('questList', JSON.stringify(questList));
  } else {
    showElementById("fullAlert", true);
  }
}
refreshTable();

// clear out questList and refreshTable
function clearList() {
  localStorage.removeItem("questList");
  getQuestList();
  questList = [];
  localStorage.setItem('questList', JSON.stringify(questList));
  refreshTable();
}

function clearItem(btn,pin) {
  getQuestList();

  for(var i = 0; i < questList.length; i++) {
    if(questList[i].pin == pin) {
      questList.splice(i, 1);
      break;
    }
  }

  console.log(questList);

  localStorage.setItem('questList', JSON.stringify(questList));
  btn.parentNode.parentNode.parentNode.parentNode.removeChild(btn.parentNode.parentNode.parentNode);
}

function addAnArea() {
  var input = document.getElementById("settingsInput");
  var tableBody = document.getElementById("settingsList");

  var newHTML = "<tr><td><button type='button' class='btn btn-default no-print' onclick='deleteRow(this)'><span class='glyphicon glyphicon-remove'></span></button></td><td class='setting' style='vertical-align:middle'>" + input.value + "</td><td  class='text-right'><button type='button' class='btn btn-default no-print'>Load</button></td></tr>";

  if(input.value !== "") {
    tableBody.innerHTML += newHTML;
    settingList.push(input.value);
    input.value = "";
  }
}

function deleteRow(btn) {
  btn.parentNode.parentNode.parentNode.removeChild(btn.parentNode.parentNode);
}

function toggleBtnText(btn, target) {
  var el = document.getElementById(target);

  if(el.className !== "collapse in") {
    btn.innerHTML = "Close";
  } else {
    btn.innerHTML = "Open";
  }
}

function addTrap() {

}

function addPuzzle() {

}

function addNPCInteraction() {

}

function addQuestItem() {
  
}
