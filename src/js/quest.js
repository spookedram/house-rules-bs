var questList = [];

var questName = document.getElementById("questName");
var settingsList = document.getElementById("settingsList");
var npcsList = document.getElementById("npcsList");
var setup = document.getElementById("setup");
var goal = document.getElementById("goal");
var wander = document.getElementById("wander");
var funFight = document.getElementById("funFight");
var twist = document.getElementById("twist");
var challenge = document.getElementById("challenge");
var searchEnd = document.getElementById("searchEnd");
var climax = document.getElementById("climax");
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
    showAlert("fullAlert", true);
  }
}

// init new character obj
function Quest() {
  this.pin = 0;
  this.questName = "";

  this.settingsList = "";
  this.npcsList = "";
  this.setup = "";

  this.goal = "";
  this.wander = "";

  this.funFight = "";
  this.twist = "";

  this.challenge = "";
  this.searchEnd = "";

  this.climax = "";
  this.epilogue = "";
  this.cliffhanger = "";
}

function saveQuestData() {
  var quest = new Quest();

  quest.pin = uniqueNumber();
  quest.questName = questName.innerHTML;

  quest.settingsList = settingsList.innerHTML;
  quest.npcsList = npcsList.innerHTML;
  quest.setup = setup.innerHTML;

  quest.goal = goal.innerHTML;
  quest.wander = wander.innerHTML;

  quest.funFight = funFight.innerHTML;
  quest.twist = twist.innerHTML;

  quest.challenge = challenge.innerHTML;
  quest.searchEnd = searchEnd.innerHTML;

  quest.climax = climax.innerHTML;
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
      showAlert("fullAlert", true);
  }
}

function setQuestData(quest) {
  questName.innerHTML = quest.questName;

  settingsList.innerHTML = quest.settingsList;
  npcsList.innerHTML = quest.npcsList;
  setup.innerHTML = quest.setup;

  goal.innerHTML = quest.goal;
  wander.innerHTML = quest.wander;

  funFight.innerHTML = quest.funFight;
  twist.innerHTML = quest.twist;

  challenge.innerHTML = quest.challenge;
  searchEnd.innerHTML = quest.searchEnd;

  climax.innerHTML = quest.climax;
  epilogue.innerHTML = quest.epilogue;
  cliffhanger.innerHTML = quest.cliffhanger;
}

function saveQuest() {
  var quest = saveQuestData();
  addRowToLoadTable(quest);
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
    showAlert("fullAlert", true);
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

function addRowToList(str1, str2) {
  var input = document.getElementById(str1);
  var tableBody = document.getElementById(str2);

  var newHTML = "<tr><td>" + input.value + "</td><td class='text-right'><button type='button' class='btn btn-default' onclick='deleteRow(this)'><span class='glyphicon glyphicon-remove'></span></button></td></tr>";

  if(input.value !== "") {
    tableBody.innerHTML += newHTML;
    input.value = "";
  }
}

function deleteRow(btn) {
  btn.parentNode.parentNode.parentNode.removeChild(btn.parentNode.parentNode);
}

settingsInput.onkeypress = function(e){
  if (!e) e = window.event;
  var keyCode = e.keyCode || e.which;
  if (keyCode == '13'){
    addRowToList('settingsInput', 'settingsList');
    return false;
  }
};

npcsInput.onkeypress = function(e){
  if (!e) e = window.event;
  var keyCode = e.keyCode || e.which;
  if (keyCode == '13'){
    addRowToList('npcsInput', 'npcsList');
    return false;
  }
};
