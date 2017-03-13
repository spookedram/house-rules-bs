var rollBtn = document.getElementById("roll-btn");
var rollResult = document.getElementById("roll-result");

function rollDice(){
  var min = Number(document.getElementById("roll-min").value);
  var max = Number(document.getElementById("roll-max").value);

  rollResult.innerHTML = Math.floor(Math.random() * (max - min + 1)) + min;
}

function startRoll(){
  rollResult.innerHTML = 0;
  rollDice();
}
