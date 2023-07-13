window.onload = realmeCalculator;

function realmeCalculator() {
  var operation = document.getElementById("operation");
  var result = document.getElementById("result");

  operation.textContent = "";
  result.textContent = "";

  btns();

  document.querySelector(".buttons").addEventListener("click", delegation);
}

function delegation(event) {
  const id = event.target.id;
  switch (id) {
    case "equal":
      equal();
      break;
    case "reset":
      reset();
      break;
    case "deleteTheLast":
      deleteTheLast();
      break;
  }
}
