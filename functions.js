function equal() {
  if (operation.textContent === "") {
    result.textContent = "There is no calculation";
  } else {
    try {
      const expression = operation.textContent;
      const evaluateExpression = calculateExpression(expression);
      result.textContent = evaluateExpression;
    } catch (error) {
      result.textContent = "Invalid Expression";
    }
  }
}

function calculateExpression(expression) {
  return parseFloat(eval(expression).toFixed(2));
}

function reset() {
  result.textContent = "";
  operation.textContent = "";
}

function deleteTheLast() {
  let slicedOperation = operation.textContent.slice(0, -1);
  operation.textContent = slicedOperation;
}

function btns() {
  document.querySelectorAll(".main").forEach((m) => {
    m.onclick = function () {
      result.textContent = "";
      operation.textContent += m.textContent;
    };
  });
}
