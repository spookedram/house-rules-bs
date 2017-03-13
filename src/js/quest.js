var questList = [];

var questName = document.getElementById("questName");
var settingsList = document.getElementById("settingsList");
var npcList = document.getElementById("npcList");
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

var saveLoadModal = new Modal(document.getElementById("modal-btn"), {});

function hideModal() {
  saveLoadModal.hide();
}

function showModal() {
  saveLoadModal.show();
}

// toggle alert box
function showAlert(target, boo){
  if(boo) {
    document.getElementById(target).style.display = "block";
  } else {
    document.getElementById(target).style.display = "none";
  }
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
  this.npcList = "";
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
  quest.npcList = npcList.innerHTML;
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
  npcList.innerHTML = quest.npcList;
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
  var table = document.getElementById("loadQuestTable");
  var name = String(obj.questName);
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

// set rows in table for each character in questList
function refreshTable() {
  var table = document.getElementById("loadQuestTable");
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
