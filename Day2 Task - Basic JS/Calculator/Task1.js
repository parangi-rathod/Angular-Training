document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector(".display");
    const buttons = document.querySelectorAll(".button");
  
    let currentInput = "";
    let operator = "";
    let answered = false;
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const value = button.value;
        if (answered) {
          display.value = "0";
          currentInput = display.value;
          operator = "";
          answered = false;
        }
        if (!isNaN(value) || value === ".") {
          const parsedValue = parseFloat(value);

          //leading zero case
          if (currentInput === "0") {
            currentInput = parsedValue.toString();
          } else {
            currentInput += value;
          }
        } else if (value === "DEL") {
          currentInput = currentInput.slice(0, -1);
        } else if (value === "AC") {
          clearDisplay();
        } else if (value === "=") {
          calculate();
        } else {
          // Handle negative numbers
          if (value === "-" && currentInput === "") {
            currentInput += "-";
          } else if (currentInput === "0") {
            operator = value;
            return;
          } else if (operator && !isNaN(currentInput[currentInput.length - 1])) {
            currentInput += ` ${value} `;
          } else {
            // Otherwise, set the operator and add it to the current input
            operator = value;
            currentInput += ` ${operator} `;
          }
        }
        display.value = currentInput;
      });
    });
  
    function clearDisplay() {
      currentInput = "";
      operator = "";
      display.value = "0";
    }
  
    function calculate() {
      const expression = currentInput.split(" ");
      const num1 = parseFloat(expression[0]);
      const num2 = parseFloat(expression[2]);
      // Check if both operands are numbers
      if (isNaN(num1) || isNaN(num2)) {
        alert("Error: Invalid expression");
        return;
      }
      switch (operator) {
        case "+":
          currentInput = num1 + num2;
          break;
        case "-":
          currentInput = num1 - num2;
          break;
        case "X":
          currentInput = num1 * num2;
          break;
        case "/":
          if (num2 === 0) {
            alert("Error: Division by zero");
            return;
          }
          currentInput = num1 / num2;
          break;
          case "%":
            currentInput = num1 % num2;
            break;
        default:
          break;
      }
      display.value = currentInput.toString();
      answered = true;
    }
  });
  