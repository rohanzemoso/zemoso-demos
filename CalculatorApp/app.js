class Calculator {
  addition(a, b) {
    return a + b;
  }

  subtraction(a, b) {
    return a - b;
  }

  multiplication(a, b) {
    return a * b;
  }

  division(a, b) {
    if (b === 0) {
      alert("Division by zero is not allowed.");
      return "undefined";
    }
    return a / b;
  }
}

const calculator = new Calculator();

document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  const number1 = parseFloat(document.getElementById("input-1").value);
  const number2 = parseFloat(document.getElementById("input-2").value);
  const selectedValue = document.getElementById("selection").value;

  if (isNaN(number1) || isNaN(number2)) {
    alert("Please enter valid numbers in both fields.");
    return;
  }

  let result;

  switch (selectedValue) {
    case "Addition":
      result = calculator.addition(number1, number2);
      break;
    case "Subtraction":
      result = calculator.subtraction(number1, number2);
      break;
    case "Multiplication":
      result = calculator.multiplication(number1, number2);
      break;
    case "Division":
      result = calculator.division(number1, number2);
      break;
    default:
      alert("Invalid Operation selected.");
      return;
  }

  if (result !== "undefined") {
    document.getElementById("output").innerText = `Result: ${result}`;
  } else {
    document.getElementById("output").innerText = "";
  }
});
