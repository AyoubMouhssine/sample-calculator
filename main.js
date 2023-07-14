let operation = document.getElementById("operation");
let result = document.getElementById("result");
let copyRightYear = document.getElementById("currentYear");
let currentYear = new Date();
let arithmetic = document.querySelectorAll(".main");

window.onload = realmeCalculator;

function realmeCalculator() {
  copyRightYear.innerText = currentYear.getFullYear();
  btns(arithmetic);
  document.querySelector(".buttons").addEventListener("click", delegation);
}

function delegation(event) {
  const id = event.target.id;
  switch (id) {
    case "equal":
      equal(operation, result);
      break;
    case "reset":
      reset(operation, result);
      break;
    case "deleteTheLast":
      deleteTheLast(operation);
      break;
  }
}

// dark mode

document.getElementById("darkMode").onclick = darkMode;




// functions
