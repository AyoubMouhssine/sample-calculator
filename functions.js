function equal(operation, result) {
  try {
    const expression = operation.textContent;
    const evaluateExpression = calculateExpression(expression);
    result.textContent = evaluateExpression;
  } catch (error) {
    result.textContent = "Invalid Expression";
  }
}

function calculateExpression(expression) {
  return parseFloat(eval(expression).toFixed(2));
}

function reset(operation, result) {
  result.textContent = "";
  operation.textContent = "";
}

function deleteTheLast(operation) {
  let slicedOperation = operation.textContent.slice(0, -1);
  operation.textContent = slicedOperation;
}

function btns(arithmetic) {
  arithmetic.forEach((m) => {
    m.onclick = function () {
      operation.textContent += m.textContent;
    };
  });
}

// function darkMode() {
//   bodyClassName = document.body.className;
//   if (bodyClassName === "darkMode") {
//     document.body.classList.remove("darkMode");
//   } else {
//     document.body.classList.add("darkMode");
//   }
// }
