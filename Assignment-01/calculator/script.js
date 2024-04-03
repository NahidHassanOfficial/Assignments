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
    updateValidationStyle(true);
    calculate();
  } else {
    updateValidationStyle(false);
    resultDiv.innerHTML = "Invalid input";
  }
}

function updateValidationStyle(isValid) {
  if (isValid) {
    firstDigit.classList.remove("is-invalid");
    secondDigit.classList.remove("is-invalid");
    resultDiv.classList.remove("bg-danger");
    resultDiv.classList.remove("text-danger-emphasis");

    firstDigit.classList.add("is-valid");
    secondDigit.classList.add("is-valid");
    resultDiv.classList.add("bg-success");
    resultDiv.classList.add("text-success-emphasis");
  } else {
    firstDigit.classList.remove("is-valid");
    secondDigit.classList.remove("is-valid");

    firstDigit.classList.add("is-invalid");
    secondDigit.classList.add("is-invalid");
    resultDiv.classList.add("bg-danger");
    resultDiv.classList.add("text-danger-emphasis");
  }
}

function calculate() {
  let result = 0;
  if (operator == "+") result = firstValue + secondValue;
  else if (operator == "-") result = firstValue - secondValue;
  else if (operator == "*") result = firstValue * secondValue;
  else result = firstValue / secondValue;

  if (firstValue + secondValue == 0 || secondValue == 0)
    result = "Can't Divide!";
  resultDiv.innerHTML = result;
}
