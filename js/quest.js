var questList = [];
var mapList = [];

var questName = document.getElementById("questName");
var prologue = document.getElementById("prologue");
var goal = document.getElementById("goal");
var epilogue = document.getElementById("epilogue");
var cliffhanger = document.getElementById("cliffhanger");

var enemyModal = new Modal(document.getElementById("enemyModal"), {});
var trapModal = new Modal(document.getElementById("trapModal"), {});
var puzzleModal = new Modal(document.getElementById("puzzleModal"), {});
var npcModal = new Modal(document.getElementById("npcModal"), {});
var itemModal = new Modal(document.getElementById("itemModal"), {});
var deleteAreaModal = new Modal(document.getElementById("deleteAreaModal"), {});
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

  this.mapDiv = "";
  this.mapList = [];

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

  quest.mapDiv = document.getElementById("mapList").innerHTML;
  quest.mapList = mapList;

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

  mapList = quest.mapList;
  document.getElementById("mapList").innerHTML = quest.mapDiv;

  for(var i = 0; i < mapList.length; i++) {
    var img = document.getElementById('image' + mapList[i].pin);
    img.src = mapList[i].img;
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
  if(!needToConfirm) {
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
  } else {
    showElementById("saveChanges", true);
  }
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

  newHTML = "<tr><td><div style='max-width:120px; word-wrap:break-word;'>" + name + "</div></td><td class='text-right' style='min-width:142px;'><div class='btn-group'><button type='button' class='btn btn-default n-m-b' onclick='showElementById(&quot;alert" + idNum + "&quot;, true)'>Delete</button><button type='button' class='btn btn-default n-m-b' id='" + idNum + "' onclick='loadData(this.id)'>Load</button></div><div id='alert" + idNum + "' style='display:none;'><b>Are you sure?</b> <p class='text-right'><button type='button' class='btn btn-primary n-m-b' onclick='showElementById(&quot;alert" + idNum + "&quot;, false)'>No</button> <button type='button' class='btn btn-danger n-m-b' onclick='clearItem(this,&quot;" + idNum + "&quot;)'>Yes</button></p></div></td></tr>";

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
  btn.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(btn.parentNode.parentNode.parentNode.parentNode);
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
  this.img = "";
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

    var newHTML = '<div id=' + map.pin + ' class="map"><hr class="n-mb no-print"><div class="row"><div class="col-xs-8"><h3 contenteditable="true">' + map.name + '</h3></div><div class="col-xs-4 text-right no-print"><button type="button" class="btn btn-danger" style="margin:15px 0;" onclick="showModal(deleteMapModal), setCurrentArea(0, ' + map.pin + ')"><span class="glyphicon glyphicon-remove"></span></button></div></div><div class="row no-print"><div class="col-sm-6"><button type="button" class="btn btn-default" onclick="addMapDesc(this, ' + map.pin + ')" style="margin-bottom:15px; margin-right:15px; width:100%;">Add Description</button></div><div class="col-sm-6"><button type="button" class="btn btn-default" onclick="addMapImage(this, ' + map.pin + ')" style="margin-bottom:15px; width:100%;">Add Image</button></div></div><div class="text-center"><img src="" id="image' + map.pin + '" height="0" style="margin-bottom:15px;" class="img-responsive"></div><div id="map' + map.pin + 'areaList"></div><div class="row no-print"><div class="col-sm-6 col-sm-offset-3"><div class="input-group"><input type="text" id="area' + map.pin + 'Name" class="form-control newAreaInput" placeholder="Area Name" onkeypress="addAreaEnter(event,' + map.pin + ')"><div class="input-group-btn"><button type="button" class="btn btn-default" onclick="addAnArea(' + map.pin + ')">Add</button></div></div></div></div></div>';

    mapList.push(map);
    document.getElementById("mapList").innerHTML += newHTML;
    document.getElementById("mapName").value = "";
    needConfirm();
  } else {
    document.getElementById("mapName").placeholder = "Required!";
  }
}

function addMapDesc(btn, mapId) {
  btn.parentNode.innerHTML = '<div class="panel panel-default"><div class="panel-heading"><div class="row"><div class="col-xs-8"><h4 style="margin:0;margin-top:8px;">Description</h4></div><div class="col-xs-4 text-right no-print"><button type="button" class="btn btn-sm btn-danger" style="margin:0;" onclick="removeMapDesc(this, ' + mapId + ')"><span class="glyphicon glyphicon-remove"></span></button></div></div></div><div class="panel-body pbi"><p name="map' + mapId + 'Desc" class="enter-content n-mb" contenteditable="true"></p></div></div>';
}

function removeMapDesc(btn, mapId) {
  btn.parentNode.parentNode.parentNode.parentNode.parentNode.innerHTML = '<button type="button" class="btn btn-default" onclick="addMapDesc(this, ' + mapId + ')" style="margin-bottom:15px; margin-right:15px; width:100%;">Add Description</button>';
}

function addMapImage(btn, mapId) {
  btn.parentNode.innerHTML = '<div class="panel panel-default no-print"><div class="panel-heading"><div class="row"><div class="col-xs-8"><h4 style="margin:0;margin-top:8px;">Add an Image</h4></div><div class="col-xs-4 text-right"><button type="button" class="btn btn-sm btn-danger" style="margin:0;" onclick="removeMapImage(this, ' + mapId + ')"><span class="glyphicon glyphicon-remove"></span></button></div></div></div><div class="panel-body"><p>Upload an Image<br><i>Warning: Uploading images to your map right from your device takes up a lot of space in your localStorage. Upload by URL when you can to save space.</i></p><input type="file" id="imageLoader' + mapId + '" name="imageLoader" onchange="handleImage(event,' + mapId + ')"/><div class="input-group" style="margin-top:15px;"><input id="imageURL' + mapId + '" type="text" class="form-control" placeholder="Paste URL here"><div class="input-group-btn"><button type="button" class="btn btn-primary" onclick="addImage(' + mapId + ')">Upload</button></div></div><div class="text-right"><button type="button" class="btn btn-warning" style="margin-top:15px; margin-bottom:15px;" onclick="clearImage(' + mapId + ')">Clear Image</button></div></div></div>';
}

function removeMapImage(btn, mapId) {
  btn.parentNode.parentNode.parentNode.parentNode.parentNode.innerHTML = '<button type="button" class="btn btn-default" onclick="addMapImage(this, ' + mapId + ')" style="margin-bottom:15px; margin-right:15px; width:100%;">Add an Image</button>';
}

document.getElementById("mapName").onkeypress = function(e){
  if (!e) e = window.event;
  var keyCode = e.keyCode || e.which;
  if (keyCode == '13'){
    addMap();
    return false;
  }
};

function addImage(mapId) {
  var map = getPinFromArray(mapList, mapId);
  var imageLoader = document.getElementById('imageLoader' + mapId);
  var imageURL = document.getElementById('imageURL' + mapId);
  var img = document.getElementById('image' + mapId);
  img.src = "";
  imageLoader.value = "";

  if(imageURL.value !== "") {
    img.src = imageURL.value;
    img.style.display = "block";
    map.img = img.src;
  } else {
    imageURL.placeholder = "Required!";
  }
}

function handleImage(e, mapId){
  var map = getPinFromArray(mapList, mapId);
  var imageLoader = document.getElementById('imageLoader' + mapId);
  var imageURL = document.getElementById('imageURL' + mapId);
  var img = document.getElementById('image' + mapId);
  img.src = "";

  imageURL.value = "";

  var tgt = e.target || window.event.srcElement,
    files = tgt.files;

  // FileReader support
  if (FileReader && files && files.length) {
    var fr = new FileReader();
    fr.onload = function () {
      img.src = fr.result;
      img.style.display = "block";
      map.img = fr.result;
    };
    fr.readAsDataURL(files[0]);
  }
}

function clearImage(mapId) {
  var map = getPinFromArray(mapList, mapId);
  var imageLoader = document.getElementById('imageLoader' + mapId);
  var imageURL = document.getElementById('imageURL' + mapId);
  var img = document.getElementById('image' + mapId);
  imageLoader.value = "";
  imageURL.value = "";
  img.height = 0;
  img.src = "";
  img.style.display = "none";
  map.img = "";
}

function addAreaEnter (e, mapId) {
  if (!e) e = window.event;
  var keyCode = e.keyCode || e.which;
  if (keyCode == '13'){
    var target = this.
    addAnArea(mapId);
    return false;
  }
}

function addAnArea(mapId) {
  if(document.getElementById("area" + mapId + "Name").value !== "") {
    var map = getPinFromArray(mapList, mapId);
    var area = new Area();
    area.mapId = mapId;
    area.name = document.getElementById("area" + mapId + "Name").value;
    area.div = '<div id=' + area.pin + ' class="area panel panel-default"><div class="panel-heading"><h4 contenteditable="true">' + area.name + '</h4></div><div class="panel-body"><div class="row no-print"><div class="col-sm-6"><button type="button" class="btn btn-default" onclick="addAreaDesc(this, ' + area.pin + ')" style="margin-bottom:15px; margin-right:15px; width:100%;">Add Description</button></div><div class="col-sm-6"><button type="button" class="btn btn-default" onclick="addEventInput(this, ' + area.pin + ', ' + map.pin + ')" style="margin-bottom:15px; width:100%;">Add an Event</button></div></div><h4>Events</h4><div id="area' + area.pin + 'eventList" class="row equal"></div></div><div class="panel-footer text-right no-print"><button type="button" class="btn btn-danger" onclick="setCurrentArea(' + area.pin + ',' + mapId + '), showModal(deleteAreaModal)">Delete Area</button></div></div>';

    document.getElementById("map" + mapId + "areaList").innerHTML += area.div;
    map.areas.push(area);
    document.getElementById("area" + mapId + "Name").value = "";
    needConfirm();
  } else {
    document.getElementById("area" + mapId + "Name").placeholder = "Required!";
  }
}

function addAreaDesc(btn, areaId) {
  btn.parentNode.innerHTML ='<div class="panel panel-default"><div class="panel-heading"><div class="row"><div class="col-xs-8"><h4 style="margin:0;margin-top:8px;">Description</h4></div><div class="col-xs-4 text-right no-print"><button type="button" class="btn btn-sm btn-danger" style="margin:0;" onclick="removeAreaDesc(this, ' + areaId + ')"><span class="glyphicon glyphicon-remove"></span></button></div></div></div><div class="panel-body"><p name="area' + areaId + 'Desc" class="enter-content n-mb" contenteditable="true"></p></div></div>';
}

function removeAreaDesc(btn, areaId) {
  btn.parentNode.parentNode.parentNode.parentNode.parentNode.innerHTML = '<button type="button" class="btn btn-default" onclick="addAreaDesc(this, ' + areaId + ')" style="margin-bottom:15px; margin-right:15px; width:100%;">Add Description</button>';
}

function addEventInput(btn, areaId, mapId) {
  btn.parentNode.innerHTML ='<div class="panel panel-default"><div class="panel-heading"><h4 style="margin:0;">Add an Event</h4></div><div class="panel-body"><div class="row"><div class="col-sm-4"><button type="button" class="btn btn-default" onclick="setCurrentArea(' + areaId + ',' + mapId + '),showModal(enemyModal)" style="margin-bottom:15px; width:100%;">Enemy</button></div><div class="col-sm-4"><button type="button" class="btn btn-default" onclick="setCurrentArea(' + areaId + ',' + mapId + '),showModal(trapModal)" style="margin-bottom:15px; width:100%;">Trap</button></div><div class="col-sm-4"><button type="button" class="btn btn-default" onclick="setCurrentArea(' + areaId + ',' + mapId + '),showModal(puzzleModal)" style="margin-bottom:15px; width:100%;">Puzzle</button></div></div><div class="row"><div class="col-sm-6"><button type="button" class="btn btn-default" onclick="setCurrentArea(' + areaId + ',' + mapId + '),showModal(npcModal)" style="margin-bottom:15px; width:100%;">NPC</button></div><div class="col-sm-6"><button type="button" class="btn btn-default" onclick="setCurrentArea(' + areaId + ',' + mapId + '),showModal(itemModal)" style="width:100%;">Quest Item</button></div></div></div><div class="panel-footer text-right no-print"><button type="button" class="btn btn-sm btn-danger" style="margin:0;" onclick="removeEventInput(this, ' + areaId + ', ' + mapId + ')">Cancel</button></div></div>';
}

function removeEventInput(btn, areaId, mapId) {
  btn.parentNode.parentNode.parentNode.innerHTML = '<button type="button" class="btn btn-default" onclick="addEventInput(this, ' + areaId + ', ' + mapId + ')" style="margin-bottom:15px; margin-right:15px; width:100%;">Add an Event</button>';
}

function setCurrentArea(pin, mapId) {
  currentArea = pin;
  currentMap = mapId;
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
    needConfirm();
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
    needConfirm();
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
    needConfirm();
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
    needConfirm();
  }
}

function addCharacterToInitiative() {
  var input = document.getElementById("initCharName");

  if(input.value !== '') {
    var table = document.getElementById("initTable");
    var rowText = "";
    var pin = uniqueNumber();

    rowText = '<tr id="initRoll"><td><button type="button" class="btn btn-sm btn-default" style="margin:0;" onclick="deleteRow(this)" style="margin: 0 auto;"><span class="glyphicon glyphicon-remove"></span></button></td><td style="vertical-align:middle;">' + input.value + '</td><td><input type="number" class="form-control text-center init-roll" value="10" min="1" max="50" style="margin: 0 auto;"></td></tr>';

    table.innerHTML += rowText;

    input.value = '';
  }
}


document.getElementById("initCharName").onkeypress = function(e){
  if (!e) e = window.event;
  var keyCode = e.keyCode || e.which;
  if (keyCode == '13'){
    addCharacterToInitiative();
    return false;
  }
};

function sortInitiativeOrder() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("initTable");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 0; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = Number(rows[i].getElementsByTagName("TD")[2].childNodes[0].value);
      y = Number(rows[i + 1].getElementsByTagName("TD")[2].childNodes[0].value);
      //check if the two rows should switch place:
      if (x < y) {
        //if so, mark as a switch and break the loop:
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
