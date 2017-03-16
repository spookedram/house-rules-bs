var rollBtn = document.getElementById("roll-btn");
var rollResult = document.getElementById("roll-result");
var needToConfirm = false;

function getRandomRange(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollDice(){
  var min = Number(document.getElementById("roll-min").value);
  var max = Number(document.getElementById("roll-max").value);

  rollResult.innerHTML = getRandomRange(max, min);
}

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
