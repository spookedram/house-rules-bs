var rollBtn = document.getElementById("roll-btn");
var rollResult = document.getElementById("roll-result");
var needToConfirm = false;

function addToInnerHTML(target,str) {
  target.innerHTML += str;
}

function getRandomRange(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function saveImg() {
  var el = document.getElementById("imgToSave");
  var w = el.offsetWidth;
  var h = el.offsetHeight;
  var canvas = document.createElement('canvas');
  canvas.width = w * 2;
  canvas.height = h * 2;
  canvas.style.margin = "0 auto";
  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';
  var context = canvas.getContext('2d');
  var movH = -Math.abs(h) + 10;
  var movW = -Math.abs(w/8);
  console.log(movW);
  context.scale(2,2);
  context.setTransform(2,0,0,2, movW, movH);
  context.stroke();
  html2canvas(el, { canvas: canvas }).then(function(canvas) {
    document.getElementById("imgContainer").appendChild(canvas);
  });
}

function saveImg() {
  var el = document.getElementById("imgToSave");
  html2canvas(el).then(function(canvas) {
    document.getElementById("imgContainer").appendChild(canvas);
  });
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

function hideModal(modal) {
  modal.hide();
}

function showModal(modal) {
  modal.show();
}

function toggleArr(arr, boo) {
  var i = 0;
  var len = arr.length;

  for(i; i < len; i++) {
    if(boo) {
      arr[i].style.display = "block";
    } else {
      arr[i].style.display = "none";
    }
  }
}

// get table and set extra rows to empty
function clearTable(table) {
  while (table.children[1]) {
    table.removeChild(table.children[1]);
  }
}

function getPinFromArray(arr, pin) {
  var i = 0;
  var len = arr.length;
  for(i; i < len; i++) {
    if(arr[i].pin == pin) {
      return arr[i];
    }
  }
}

function removePinFromArray(arr,pin) {
  var i = 0;
  var len = arr.length;
  for(i; i < len; i++) {
    if(arr[i].pin == pin) {
      arr.splice(i, 1);
      break;
    }
  }
}

function checkRequiredFields(arr) {
  var i = 0;
  var len = arr.length;
  var filled = true;
  for(i; i < len; i++) {
    if(arr.value === "") {
      filled = false;
    }
  }
  return filled;
}

// toggle alert box
function showElementById(id, boo){
  if(boo) {
    document.getElementById(id).style.display = "block";
  } else {
    document.getElementById(id).style.display = "none";
  }
}

function deletePinFromList(btn, arr, str, pin) {
  removePinFromArray(arr,pin);

  if(arr.length < 1) {
    showElementById(str,true);
  }

  btn.parentNode.parentNode.parentNode.parentNode.parentNode.remove(btn.parentNode.parentNode.parentNode.parentNode);
}

function rollDice(){
  var roller = document.querySelector("input[name='roller']:checked").value;
  var amt = Number(document.getElementById("roll-amt").value);
  var sides = Number(document.getElementById("roll-sides").value);
  var max = amt * sides;
  var roll = 0;

  if(roller === 0) {
    roll = getRandomRange(20, 1);
  } else {
    roll = getRandomRange(max, amt);
    console.log(amt + "d" + sides);
  }

  rollResult.innerHTML = roll;
}

function setDice() {
  var roller = document.getElementById("otherOption").checked;
  var amt = document.getElementById("roll-amt");
  var sides = document.getElementById("roll-sides");

  // amt.value = num1;
  // sides.value = num2;

  if(roller) {
    amt.disabled = false;
    sides.disabled = false;
  } else {
    amt.disabled = true;
    sides.disabled = true;
    amt.value = 1;
    sides.value = 20;
  }
}
setDice();

function startRoll(){
  rollResult.innerHTML = 0;
  rollDice();
}

function permutator(inputArr) {
  var results = [];

  function permute(arr, memo) {
    var cur;
    memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return results;
  }

  return permute(inputArr);
}

window.onbeforeunload = confirmExit;
function confirmExit() {
  if (needToConfirm) {
    return "Changes you made may not be saved.";
  }
}

function needConfirm() {
  needToConfirm = true;
}
