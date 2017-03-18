var rollBtn = document.getElementById("roll-btn");
var rollResult = document.getElementById("roll-result");
var needToConfirm = false;

function getRandomRange(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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

function hideModal() {
  saveLoadModal.hide();
}

function showModal() {
  saveLoadModal.show();
}

// get table and set extra rows to empty
function clearTable(table) {
  while (table.children[1]) {
    table.removeChild(table.children[1]);
  }
}

// toggle alert box
function showAlert(target, boo){
  if(boo) {
    document.getElementById(target).style.display = "block";
  } else {
    document.getElementById(target).style.display = "none";
  }
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
