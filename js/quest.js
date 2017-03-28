var questList = [];
var areaList = [];

var questName = document.getElementById("questName");
var prologue = document.getElementById("prologue");
var goal = document.getElementById("goal");
var areaListWrapper = document.getElementById("areaListWrapper");
var epilogue = document.getElementById("epilogue");
var cliffhanger = document.getElementById("cliffhanger");

var saveLoadModal = new Modal(document.getElementById("modal-btn"), {});
var enemyModal = new Modal(document.getElementById("enemyModal"), {});
var trapModal = new Modal(document.getElementById("trapModal"), {});
var puzzleModal = new Modal(document.getElementById("puzzleModal"), {});
var npcModal = new Modal(document.getElementById("npcModal"), {});
var itemModal = new Modal(document.getElementById("itemModal"), {});
var deleteAreaModal = new Modal(document.getElementById("deleteAreaModal"), {});

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

  this.prologue = "";
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

  quest.prologue = prologue.innerHTML;
  quest.goal = goal.innerHTML;
  
  quest.areas = areaList;

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

function getEvents(arr) {
  var html = "";
  var i = 0;
  var len = arr.length;
  for(i; i < len; i++) {
    html += arr[i].div;
  }
  return html;
}

function setQuestData(quest) {
  var i = 0;
  var len = quest.areas.length;
  
  questName.innerHTML = quest.questName;
  
  prologue.innerHTML = quest.prologue;
  goal.innerHTML = quest.goal;
  
  areaList = quest.areas;
  areaListWrapper.innerHTML = "";
  
  for(i; i < len; i++) {
    var events = getEvents(quest.areas[i].events);
    areaListWrapper.innerHTML += '<div id=' + quest.areas[i].pin + ' class="area panel panel-default"><div class="panel-heading"><h4 contenteditable="true">' + quest.areas[i].name + '</h4></div><div class="panel-body"><div class="row"><div class="col-sm-6"><b>Description</b><p contenteditable="true">' + quest.areas[i].desc + '</p></div><div class="col-sm-6 text-right no-print"><h4 style="margin-top:0;">Add an Event</h4><div class="btn-group"><button  type="button" class="btn btn-default" onclick="setCurrentArea(' + quest.areas[i].pin + '),showModal(enemyModal)">Enemy</button><button type="button" class="btn btn-default" onclick="setCurrentArea(' + quest.areas[i].pin + '),showModal(trapModal)">Trap</button><button type="button" class="btn btn-default" onclick="setCurrentArea(' + quest.areas[i].pin + '),showModal(puzzleModal)">Puzzle</button></div> <div class="btn-group"><button type="button" class="btn btn-default" onclick="setCurrentArea(' + quest.areas[i].pin + '),showModal(npcModal)">NPC</button><button type="button" class="btn btn-default" onclick="setCurrentArea(' + quest.areas[i].pin + '),showModal(itemModal)">Quest Item</button></div></div></div><h4>Events</h4><p id="area' + quest.areas[i].pin + 'eventsEmpty">You have not made any events for this area yet! Use the buttons on the right to create a new event.</p><div id="area' + quest.areas[i].pin + 'eventList" class="row equal">' + events + '</div></div><div class="panel-footer text-right no-print"><button type="button" class="btn btn-danger" onclick="deleteArea(' + quest.areas[i].pin + ')">Delete Area</button></div></div>';
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

  hideModal(saveLoadModal);
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

  var newHTML = '<div id="' + area.pin + '" class="area panel panel-default"><div class="panel-heading"><h4 contenteditable="true">' + area.name + '</h4></div><div class="panel-body"><div class="row"><div class="col-sm-6"><b>Description</b><p contenteditable="true">' + area.desc + '</p></div><div class="col-sm-6 text-right no-print"><h4 style="margin-top:0;">Add an Event</h4><div class="btn-group"><button  type="button" class="btn btn-default" onclick="setCurrentArea(' + area.pin + '),showModal(enemyModal)">Enemy</button><button type="button" class="btn btn-default" onclick="setCurrentArea(' + area.pin + '),showModal(trapModal)">Trap</button><button type="button" class="btn btn-default" onclick="setCurrentArea(' + area.pin + '),showModal(puzzleModal)">Puzzle</button></div> <div class="btn-group"><button type="button" class="btn btn-default" onclick="setCurrentArea(' + area.pin + '),showModal(npcModal)">NPC</button><button type="button" class="btn btn-default" onclick="setCurrentArea(' + area.pin + '),showModal(itemModal)">Quest Item</button></div></div></div><h4>Events</h4><p id="area' + area.pin + 'eventsEmpty">You have not made any events for this area yet! Use the buttons on the right to create a new event.</p><div id="area' + area.pin + 'eventList" class="row equal"></div></div><div class="panel-footer text-right no-print"><button type="button" class="btn btn-danger" onclick="setCurrentArea(' + area.pin + '), showModal(deleteAreaModal)">Delete Area</button></div></div>';


  if(document.getElementById("areaName").value !== "" && document.getElementById("areaDesc").value !== "") {
    wrapper.innerHTML += newHTML;
    document.getElementById("areaName").value = "";
    document.getElementById("areaDesc").value = "";
    areaList.push(area);
    console.log(areaList);
  }
}

function deleteArea(pin) {
  var el = document.getElementById(pin);
  document.getElementById("areaListWrapper").removeChild(el);
  removePinFromArray(areaList,pin);
  hideModal(deleteAreaModal);
}

function setCurrentArea(pin) {
  currentArea = pin;
  console.log(currentArea);
}

function deleteEvent(pin, event) {
  var el = document.getElementById(event);
  document.getElementById("area" + pin + "eventList").removeChild(el);
  var area = getPinFromArray(areaList,pin);
  removePinFromArray(area.events, event);
}

function Trap() {
  this.pin = 0;
  this.name = document.getElementById("trapName").value;
  this.desc = document.getElementById("trapDesc").value;
  this.save = document.getElementById("trapST").value;
  this.dmg = document.getElementById("trapDamage").value;
  this.div = "";
}

function addTrap() {
  var trap = new Trap();
  trap.pin = uniqueNumber();
  
  var newHTML = '<div id="' + trap.pin + '" class="event col-xs-12 col-sm-4 col-print-4"><div class="panel panel-default"><div class="panel-heading"><div class="row"><div class="col-xs-8"><h4 style="margin:8px auto">Trap</span></h4></div><div class="col-xs-4 text-right no-print"><button type="button" class="btn btn-danger delete-btn" onclick="deleteEvent(' + currentArea + ',' + trap.pin + ')"><span class="glyphicon glyphicon-remove"></span></button></div></div></div><div class="panel-body"><p contenteditable="true"><b>' + trap.name + '</b></p><p contenteditable="true">' + trap.desc + '</p><p class="text-right n-mb">Saving Throw: ' + trap.save + '<br>Damage: ' + trap.dmg + '</p></div></div></div>';
  
  trap.div = newHTML;

  if(checkRequiredFields([trap.name,trap.desc,trap.save,trap.dmg])) {
    var area = getPinFromArray(areaList,currentArea);
    area.events.push(trap);
    
    addToInnerHTML(document.getElementById("area" + currentArea + "eventList"), newHTML);
    hideModal(trapModal);
    document.getElementById("trapName").value = "";
    document.getElementById("trapDesc").value = "";
    document.getElementById("trapST").value = "DEX";
    document.getElementById("trapDamage").value = "d6";
  }
}

function Puzzle() {
  this.pin = 0;
  this.name = document.getElementById("puzzleName").value;
  this.desc = document.getElementById("puzzleDesc").value;
  this.solv = document.getElementById("puzzleSol").value;
  this.div = "";
}

function addPuzzle() {
  var puzzle = new Puzzle();
  puzzle.pin = uniqueNumber();
  
  var newHTML = '<div id="' + puzzle.pin + '" class="event col-xs-12 col-sm-4 col-print-4"><div class="panel panel-default"><div class="panel-heading"><div class="row"><div class="col-xs-8"><h4 style="margin:8px auto">Puzzle</span></h4></div><div class="col-xs-4 text-right no-print"><button type="button" class="btn btn-danger delete-btn" onclick="deleteEvent(' + currentArea + ',' + puzzle.pin + ')"><span class="glyphicon glyphicon-remove"></span></button></div></div></div><div class="panel-body"><p contenteditable="true"><b>' + puzzle.name + '</b></p><p contenteditable="true">' + puzzle.desc + '</p><b>Solution</b><p class="n-mb" contenteditable="true">' + puzzle.solv + '</p></div></div></div>';
  
  puzzle.div = newHTML;
  
  if(checkRequiredFields([puzzle.name,puzzle.desc,puzzle.solv])) {
    var area = getPinFromArray(areaList,currentArea);
    area.events.push(puzzle);
    
    addToInnerHTML(document.getElementById("area" + currentArea + "eventList"), newHTML);
    hideModal(puzzleModal);
    document.getElementById("puzzleName").value = "";
    document.getElementById("puzzleDesc").value = "";
    document.getElementById("puzzleSol").value = "";
  }
}

function NPC() {
  this.pin = 0;
  this.name = document.getElementById("npcName").value;
  this.desc = document.getElementById("npcDesc").value;
  this.div = "";
}

function addNPC() {
  var npc = new NPC();
  npc.pin = uniqueNumber();
  
  var newHTML = '<div id="' + npc.pin + '" class="event col-xs-12 col-sm-4 col-print-4"><div class="panel panel-default"><div class="panel-heading"><div class="row"><div class="col-xs-8"><h4 style="margin:8px auto">NPC</span></h4></div><div class="col-xs-4 text-right no-print"><button type="button" class="btn btn-danger delete-btn" onclick="deleteEvent(' + currentArea + ',' + npc.pin + ')"><span class="glyphicon glyphicon-remove"></span></button></div></div></div><div class="panel-body"><p contenteditable="true"><b>' + npc.name + '</b></p><p class="n-mb" contenteditable="true">' + npc.desc + '</p></div></div></div>';
  
  npc.div = newHTML;
  
  if(checkRequiredFields([npc.name,npc.desc])) {
    var area = getPinFromArray(areaList,currentArea);
    area.events.push(npc);
    
    addToInnerHTML(document.getElementById("area" + currentArea + "eventList"), newHTML);
    hideModal(npcModal);
    document.getElementById("npcName").value = "";
    document.getElementById("npcDesc").value = "";
  }
}

function Item() {
  this.pin = 0;
  this.name = document.getElementById("itemName").value;
  this.desc = document.getElementById("itemDesc").value;
  this.div = "";
}

function addQuestItem() {
  var item = new Item();
  item.pin = uniqueNumber();
  
  var newHTML = '<div id="' + item.pin + '" class="event col-xs-12 col-sm-4 col-print-4"><div class="panel panel-default"><div class="panel-heading"><div class="row"><div class="col-xs-8"><h4 style="margin:8px auto">Quest Item</span></h4></div><div class="col-xs-4 text-right no-print"><button type="button" class="btn btn-danger delete-btn" onclick="deleteEvent(' + currentArea + ',' + item.pin + ')"><span class="glyphicon glyphicon-remove"></span></button></div></div></div><div class="panel-body"><p contenteditable="true"><b>' + item.name + '</b></p><p class="n-mb" contenteditable="true">' + item.desc + '</p></div></div></div>';
  
  item.div = newHTML;
  
  if(checkRequiredFields([item.name,item.desc])) {
    var area = getPinFromArray(areaList,currentArea);
    area.events.push(item);
    
    addToInnerHTML(document.getElementById("area" + currentArea + "eventList"), newHTML);
    hideModal(itemModal);
    document.getElementById("itemName").value = "";
    document.getElementById("itemDesc").value = "";
  }
}
