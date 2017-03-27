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

var currentArea;

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

function Area() {
  this.pin = "";
  this.name = "";
  this.desc = "";
  this.events = [];
}

function addAnArea() {
  var area = new Area();
  area.pin = uniqueNumber();
  area.name = document.getElementById("areaName").value;
  area.desc = document.getElementById("areaDesc").value;

  var wrapper = document.getElementById("areaListWrapper");

  var newHTML = '<div id=' + area.pin + ' class="area panel panel-default"><div class="panel-heading"><h4 contenteditable="true">' + area.name + '</h4></div><div class="panel-body"><div class="row"><div class="col-sm-6"><b>Description</b><p contenteditable="true">' + area.desc + '</p></div><div class="col-sm-6 text-right no-print"><h4 style="margin-top:0;">Add an Event</h4><div class="btn-group"><button  type="button" class="btn btn-default" data-toggle="modal" data-target="#enemyModal">Enemy</button><button type="button" class="btn btn-default" data-toggle="modal" data-target="#trapModal">Trap</button><button type="button" class="btn btn-default" data-toggle="modal" data-target="#puzzleModal">Puzzle</button></div> <div class="btn-group"><button type="button" class="btn btn-default" data-toggle="modal" data-target="#npcModal">NPC</button><button type="button" class="btn btn-default" data-toggle="modal" data-target="#itemModal">Quest Item</button></div></div></div><h4>Events</h4><p id="area' + area.pin + 'eventsEmpty">You have not made any events for this area yet! Use the buttons on the right to create a new event.</p><div id="area' + area.pin + 'eventList" class="row equal"></div></div><div class="panel-footer text-right no-print"><button type="button" class="btn btn-danger" onclick="deleteArea(' + area.pin + ')">Delete Area</button></div></div>';


  if(document.getElementById("areaName").value !== "" && document.getElementById("areaDesc").value !== "") {
    wrapper.innerHTML += newHTML;
    document.getElementById("areaName").value = "";
    document.getElementById("areaDesc").value = "";
  }
}

function deleteArea(pin) {
  var el = document.getElementById(pin);
  document.getElementById("areaListWrapper").removeChild(el);
}

function setCurrentArea(pin) {
  currentArea = pin;
  console.log(currentArea);
}

function addTrap(id) {
  var name = document.getElementById("trapName").value;
  var desc = document.getElementById("trapDesc").value;
  var save = document.getElementById("trapST").value;
  var dmg = document.getElementById("trapDamage").value;
  var modal = document.getElementById("trapModal");
  var newHTML = "";

  newHTML = '<div class="event col-xs-12 col-sm-4"><div class="panel panel-default"><div class="panel-heading"><div class="row"><div class="col-xs-8"><h4 style="margin:8px auto">Event</span></h4></div><div class="col-xs-4 text-right no-print"><button type="button" class="btn btn-danger delete-btn" onclick="deleteEnemy(this,)"><span class="glyphicon glyphicon-remove"></span></button></div></div></div><div class="panel-body"><p contenteditable="true"><b>' + name + '</b></p><p contenteditable="true">' + desc + '</p><p class="text-right n-mb">Saving Throw: ' + save + '<br>Damage: ' + dmg + '</p></div></div></div>';

  if(name !== "" && desc !== "") {
    addToInnerHTML(document.getElementById("area" + id + "eventList"), newHTML);
    modal.hide();
  }
}

function addPuzzle() {

}

function addNPCInteraction() {

}

function addQuestItem() {

}

document.getElementById("addEnemyBtn").addEventListener("click", function(){

});
