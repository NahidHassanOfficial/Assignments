let firstDigit = document.querySelector(".firstInput");
let secondDigit = document.querySelector(".secondInput");
let mathOperator = document.querySelector("select");
let calculateBtn = document.querySelector(".calculateBtn");
let resultDiv = document.querySelector(".result");

let firstValue, secondValue;
let operator = "+";

mathOperator.addEventListener("change", function () {
  operator = mathOperator.options[mathOperator.selectedIndex].value;
  validateInput();
});

calculateBtn.addEventListener("click", () => {
  firstValue = parseInt(firstDigit.value);
  secondValue = parseInt(secondDigit.value);
  validateInput();
});

function validateInput() {
  if (!isNaN(firstValue) && !isNaN(secondValue)) {
    calculate();
  } else {
    resultDiv.innerHTML = "Invalid input";
  }
}

function calculate() {
  let result = 0;
  if (operator == "+") result = firstValue + secondValue;
  else if (operator == "-") result = firstValue - secondValue;
  else if (operator == "*") result = firstValue * secondValue;
  else result = firstValue / secondValue;

  resultDiv.innerHTML = result;
}
