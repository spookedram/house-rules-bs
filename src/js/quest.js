var settingsCtrl = document.getElementById("setting-input");
var npcCtrl = document.getElementById("npc-input");

function tableControl(tableName) {
  var input = document.getElementById(tableName +"-input");
  var submit_btn = document.getElementById(tableName +"-submit");
  var table = document.getElementById(tableName +"-list");

  function addValToTable(val) {
    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(-1);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    var btn = document.createElement("button");
    btn.className += "btn btn-default delete-btn pull-right";
    btn.innerHTML = "<span class='glyphicon glyphicon-remove'></span>";
    btn.setAttribute("onclick", "deleteRow(this)");


    // Add some text to the new cells:
    cell1.innerHTML = val;
    cell1.className += tableName + "-item";
    cell2.appendChild(btn);
  }

  function inputSubmitTest() {
    var val = input.value;

    if(input.value === "") {
      alert("Input cannot be blank!");
    } else {
      addValToTable(val);
      input.value = "";
    }
  }

  //if keyup Enter when input focused
  input.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode == 13) {
          inputSubmitTest();
      }
  });
  submit_btn.addEventListener("click", inputSubmitTest);
}

function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

settingsCtrl.addEventListener("input", tableControl("setting"));
npcCtrl.addEventListener("input", tableControl("npc"));
