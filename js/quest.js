var questList = [];
var areaList = [];
var mapList = [];

var questName = document.getElementById("questName");
var prologue = document.getElementById("prologue");
var goal = document.getElementById("goal");
var epilogue = document.getElementById("epilogue");
var cliffhanger = document.getElementById("cliffhanger");

var saveLoadModal = new Modal(document.getElementById("modal-btn"), {});
var enemyModal = new Modal(document.getElementById("enemyModal"), {});
var trapModal = new Modal(document.getElementById("trapModal"), {});
var puzzleModal = new Modal(document.getElementById("puzzleModal"), {});
var npcModal = new Modal(document.getElementById("npcModal"), {});
var itemModal = new Modal(document.getElementById("itemModal"), {});
var deleteAreaModal = new Modal(document.getElementById("deleteAreaModal"), {});
var addMapModal = new Modal(document.getElementById("addMapModal"), {});
var deleteMapModal = new Modal(document.getElementById("deleteMapModal"), {});

var currentArea;
var currentMap;

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

  this.prologue = "";
  this.goal = "";

  this.mapList = "";

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

  quest.mapList = document.getElementById("mapList").innerHTML;

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
  questName.innerHTML = quest.questName;

  prologue.innerHTML = quest.prologue;
  goal.innerHTML = quest.goal;

  document.getElementById("mapList").innerHTML = quest.mapList;

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

function addAreaModal() {
  var wrapper = document.getElementById("mapModalAreaList");
  var input = document.getElementById("modalArea");
  var newHTML = '<p class="text-center">' + input.value + '</p>';

  if(input.value !== "") {
    wrapper.innerHTML += newHTML;
    areaList.push(input.value);
    input.value = "";
  }
}

function clearMapModal() {
  document.getElementById("mapName").value = "";
  document.getElementById("mapModalAreaList").innerHTML = "";
  areaList = [];
  document.getElementById("modalArea").value = "";
  hideModal(addMapModal);
}

function Map() {
  this.pin = uniqueNumber();
  this.name = "";
  this.areas = [];
}

function Area() {
  this.pin = uniqueNumber();
  this.name = "";
  this.mapId = 0;
  this.div = "";
  this.events = [];
}

function Trap() {
  this.pin = uniqueNumber();
  this.name = document.getElementById("trapName").value;
  this.desc = document.getElementById("trapDesc").value;
  this.save = document.getElementById("trapST").value;
  this.dmg = document.getElementById("trapDamage").value;
  this.div = "";
}

function Puzzle() {
  this.pin = uniqueNumber();
  this.name = document.getElementById("puzzleName").value;
  this.desc = document.getElementById("puzzleDesc").value;
  this.solv = document.getElementById("puzzleSol").value;
  this.div = "";
}

function NPC() {
  this.pin = uniqueNumber();
  this.name = document.getElementById("npcName").value;
  this.desc = document.getElementById("npcDesc").value;
  this.div = "";
}

function Item() {
  this.pin = uniqueNumber();
  this.name = document.getElementById("itemName").value;
  this.desc = document.getElementById("itemDesc").value;
  this.div = "";
}

function addMap() {
  if(document.getElementById("mapName").value !== "") {
    var map = new Map();
    map.name = document.getElementById("mapName").value;

    var areasHTML = '';

    for(var i = 0; i < areaList.length; i++) {
      var area = addAnArea(areaList[i], map.pin);
      map.areas.push(area);
      areasHTML += area.div;
    }

    var newHTML = '<div id=' + map.pin + ' class="map"><hr><div class="row"><div class="col-xs-8"><h3>' + map.name + '</h3></div><div class="col-xs-4 text-right"><button type="button" class="btn btn-danger"  style="margin:15px 0;" onclick="showModal(deleteMapModal), setCurrentArea(0, ' + map.pin + ')"><span class="glyphicon glyphicon-remove"></span></button></div></div><div id="map' + map.pin + 'areaList">' + areasHTML + '</div></div>';

    mapList.push(map);
    document.getElementById("mapList").innerHTML += newHTML;
    clearMapModal();
  }
}

function addAnArea(name, mapId) {
  var area = new Area();
  area.mapId = mapId;
  area.name = name;
  area.div = '<div id=' + area.pin + ' class="area panel panel-default"><div class="panel-heading"><h4 contenteditable="true">' + area.name + '</h4></div><div class="panel-body"><div class="row"><div class="col-sm-6"><b>Description</b><textarea id="area' + area.pin + 'Desc" name="area' + area.pin + 'Desc" rows="2" class="form-control n-mb"></textarea></div><div class="col-sm-6 text-right no-print"><h4>Add an Event</h4><div class="btn-group"><button  type="button" class="btn btn-default" onclick="setCurrentArea(' + area.pin + ',' + mapId + '),showModal(enemyModal)">Enemy</button><button type="button" class="btn btn-default" onclick="setCurrentArea(' + area.pin + ',' + mapId + '),showModal(trapModal)">Trap</button><button type="button" class="btn btn-default" onclick="setCurrentArea(' + area.pin + ',' + mapId + '),showModal(puzzleModal)">Puzzle</button></div> <div class="btn-group"><button type="button" class="btn btn-default" onclick="setCurrentArea(' + area.pin + ',' + mapId + '),showModal(npcModal)">NPC</button><button type="button" class="btn btn-default" onclick="setCurrentArea(' + area.pin + ',' + mapId + '),showModal(itemModal)">Quest Item</button></div></div></div><h4>Events</h4><div id="area' + area.pin + 'eventList" class="row equal"></div></div><div class="panel-footer text-right no-print"><button type="button" class="btn btn-success" onclick="addAnArea(,' + mapId + ')">Add an Area</button> <button type="button" class="btn btn-danger" onclick="setCurrentArea(' + area.pin + ',' + mapId + '), showModal(deleteAreaModal)">Delete Area</button></div></div>';

  return area;
}

function setCurrentArea(pin, mapId) {
  currentArea = pin;
  currentMap = mapId;
  console.log(currentArea);
}

function getArea() {
  var map = getPinFromArray(mapList,currentMap);
  return getPinFromArray(map.areas,currentArea);
}

function deleteMap(pin) {
  var el = document.getElementById(pin);
  document.getElementById("mapList").removeChild(el);
  removePinFromArray(mapList, pin);
  hideModal(deleteMapModal);
}

function deleteArea(pin, mapId) {
  var map = getPinFromArray(mapList, mapId);
  var el = document.getElementById(pin);
  document.getElementById("map" + mapId + "areaList").removeChild(el);
  removePinFromArray(map.areas, pin);
  hideModal(deleteAreaModal);
}

function deleteEvent(mapId, pin, evt) {
  var map = getPinFromArray(mapList, mapId);
  var area = getPinFromArray(map.areas,pin);
  var el = document.getElementById(evt);
  document.getElementById("area" + pin + "eventList").removeChild(el);
  removePinFromArray(area.events, evt);
}

function addTrap() {
  var trap = new Trap();
  var area = getArea();

  var newHTML = '<div id="' + trap.pin + '" class="event col-xs-12 col-sm-4 col-print-4"><div class="panel panel-default"><div class="panel-heading"><div class="row"><div class="col-xs-8"><h4 style="margin:8px auto">' + trap.name + '</span></h4></div><div class="col-xs-4 text-right no-print"><button type="button" class="btn btn-danger delete-btn" onclick="deleteEvent(' + currentMap + ',' + currentArea + ',' + trap.pin + ')"><span class="glyphicon glyphicon-remove"></span></button></div></div></div><div class="panel-body"><p contenteditable="true">' + trap.desc + '</p><p class="text-right n-mb">Saving Throw: ' + trap.save + '<br>Damage: ' + trap.dmg + '</p></div></div></div>';

  trap.div = newHTML;

  if(checkRequiredFields([trap.name,trap.desc,trap.save,trap.dmg])) {
    area.events.push(trap);
    addToInnerHTML(document.getElementById("area" + currentArea + "eventList"), newHTML);
    hideModal(trapModal);
    document.getElementById("trapName").value = "";
    document.getElementById("trapDesc").value = "";
    document.getElementById("trapST").value = "DEX";
    document.getElementById("trapDamage").value = "d6";
  }
}

function addPuzzle() {
  var puzzle = new Puzzle();
  var area = getArea();

  var newHTML = '<div id="' + puzzle.pin + '" class="event col-xs-12 col-sm-4 col-print-4"><div class="panel panel-default"><div class="panel-heading"><div class="row"><div class="col-xs-8"><h4 style="margin:8px auto">' + puzzle.name + '</span></h4></div><div class="col-xs-4 text-right no-print"><button type="button" class="btn btn-danger delete-btn" onclick="deleteEvent(' + currentMap + ',' + currentArea + ',' + puzzle.pin + ')"><span class="glyphicon glyphicon-remove"></span></button></div></div></div><div class="panel-body"><p contenteditable="true">' + puzzle.desc + '</p><b>Solution</b><p class="n-mb" contenteditable="true">' + puzzle.solv + '</p></div></div></div>';

  puzzle.div = newHTML;

  if(checkRequiredFields([puzzle.name,puzzle.desc,puzzle.solv])) {
    area.events.push(puzzle);
    addToInnerHTML(document.getElementById("area" + currentArea + "eventList"), newHTML);
    hideModal(puzzleModal);
    document.getElementById("puzzleName").value = "";
    document.getElementById("puzzleDesc").value = "";
    document.getElementById("puzzleSol").value = "";
  }
}


function addNPC() {
  var npc = new NPC();
  var area = getArea();

  var newHTML = '<div id="' + npc.pin + '" class="event col-xs-12 col-sm-4 col-print-4"><div class="panel panel-default"><div class="panel-heading"><div class="row"><div class="col-xs-8"><h4 style="margin:8px auto">' + npc.name + '</span></h4></div><div class="col-xs-4 text-right no-print"><button type="button" class="btn btn-danger delete-btn" onclick="deleteEvent(' + currentMap + ',' + currentArea + ',' + npc.pin + ')"><span class="glyphicon glyphicon-remove"></span></button></div></div></div><div class="panel-body"><p class="n-mb" contenteditable="true">' + npc.desc + '</p></div></div></div>';

  npc.div = newHTML;

  if(checkRequiredFields([npc.name,npc.desc])) {
    area.events.push(npc);
    addToInnerHTML(document.getElementById("area" + currentArea + "eventList"), newHTML);
    hideModal(npcModal);
    document.getElementById("npcName").value = "";
    document.getElementById("npcDesc").value = "";
  }
}

function addQuestItem() {
  var item = new Item();
  var area = getArea();

  var newHTML = '<div id="' + item.pin + '" class="event col-xs-12 col-sm-4 col-print-4"><div class="panel panel-default"><div class="panel-heading"><div class="row"><div class="col-xs-8"><h4 style="margin:8px auto">' + item.name + '</span></h4></div><div class="col-xs-4 text-right no-print"><button type="button" class="btn btn-danger delete-btn" onclick="deleteEvent(' + currentMap + ',' + currentArea + ',' + item.pin + ')"><span class="glyphicon glyphicon-remove"></span></button></div></div></div><div class="panel-body"><p class="n-mb" contenteditable="true">' + item.desc + '</p></div></div></div>';

  item.div = newHTML;

  if(checkRequiredFields([item.name,item.desc])) {
    area.events.push(item);
    addToInnerHTML(document.getElementById("area" + currentArea + "eventList"), newHTML);
    hideModal(itemModal);
    document.getElementById("itemName").value = "";
    document.getElementById("itemDesc").value = "";
  }
}
