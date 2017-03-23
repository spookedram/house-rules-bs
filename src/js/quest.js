var questList = [];
var actList = [];

var questName = document.getElementById("questName");
var settingsList = document.getElementById("settingsList");
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

  this.setup = "";
  this.goal = "";

  this.enemyList = [];
  this.actList = [];

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

  quest.setup = setup.innerHTML;
  quest.goal = goal.innerHTML;

  quest.enemyList = getItems('enemy');
  quest.actList = getItems('act');

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
  setup.innerHTML = quest.setup;
  goal.innerHTML = quest.goal;

  showElementById('emptyEnemyPanel', false);
  for(var i = 0; i < quest.enemyList.length; i++) {
    addToInnerHTML(document.getElementById('enemyList'), '<div class="enemy col-xs-12 col-sm-4 col-print-4">' + quest.enemyList[i] + '</div>');
  }

  showElementById('emptyActPanel', false);
  for(var j = 0; j < quest.actList.length; j++) {
    addToInnerHTML(document.getElementById('actList'), '<div class="act col-xs-12">' + quest.actList[j] + '</div>');
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

function enableActBtn() {
  var low = document.getElementById("newActLow");
  var high = document.getElementById("newActHigh");
  if(low.value !== "" && high.value !== "") {
    document.getElementById("addActBtn").disabled = false;
  } else {
    document.getElementById("addActBtn").disabled = true;
  }
}

function Act() {
  this.pin = "";
  this.low = "";
  this.high = "";
}

function addAct() {
  if(actList.length < 9) {
    var low = document.getElementById("newActLow");
    var high = document.getElementById("newActHigh");
    if(low.value !== "" && high.value !== "") {
      var act = new Act();

      act.low = low.value;
      act.high = high.value;
      act.pin = uniqueNumber();

      addToInnerHTML(document.getElementById("actList"),'<div class="act col-xs-12"><div class="panel panel-default no-print"><div class="panel-heading"><h4 style="margin:8px auto">Act ' + (actList.length + 1) + '</h4></div><div class="panel-body"><div class="row"><div class="col-sm-6"><b>Low Point</b><p contenteditable="true">' + act.low + '</p></div><div class="col-sm-6"><b>High Point</b><p contenteditable="true">' + act.high + '</p></div></div></div><div class="panel-footer"><div class="text-right"><button type="button" class="btn btn-danger" onclick="deleteAct(this,' + act.pin + ')">Delete</button></div></div></div></div>');

      actList.push(act);
      low.value = "";
      high.value = "";
    } else {

    }
  }

  if(actList.length === 1) {
    showElementById('emptyActPanel',false);
  }
}

function toggleBtnText(btn, target) {
  var el = document.getElementById(target);

  if(el.className !== "collapse in") {
    btn.innerHTML = "Close";
  } else {
    btn.innerHTML = "Open";
  }
}

function deleteAct(btn, pin) {
  deletePinFromList(btn, actList, 'emptyActPanel', pin);
}
