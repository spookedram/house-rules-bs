var saveLoadModal = new Modal(document.getElementById("modal-btn"), {});

function hideModal() {
  saveLoadModal.hide();
}

function showModal() {
  saveLoadModal.show();
}

// toggle alert box
function showAlert(target, boo){
  if(boo) {
    document.getElementById(target).style.display = "block";
  } else {
    document.getElementById(target).style.display = "none";
  }
}

showAlert("clearAlert", false);
showAlert("fullAlert", false);