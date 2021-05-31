var colorWell;
var defaultColor = "#6bd1ff";

window.addEventListener("load", startup, false);

function startup() {
  colorWell = document.querySelector("#color");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateFirst, false);
  colorWell.select();
}

function updateFirst(event) {
  var borda = document.querySelector(".campo-editavel");

  if (borda) {
    document.getElementById('code').style.borderColor = event.target.value;
  }
}


