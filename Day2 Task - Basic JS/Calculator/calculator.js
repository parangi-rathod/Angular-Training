let display = document.getElementsByClassName("display")[0];
let btn = document.getElementsByClassName("btn");
let historyBtn = document.querySelector(".btn-history");

// ------for getting value of button------
const operators = ["+", "-", "*", "/", "%"];
const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

let isResult = false;

//------ calculator history------
let history = [];

//------evaluating the button actions------
for (item of btn) {
  item.addEventListener("click", (e) => {
    if (e.target === historyBtn) return;
    let btntext = e.target.innerText;

    //operator action
    if (operators.includes(btntext)) {
      let currDisp = display.value;
      if (operators.includes(currDisp[currDisp.length - 1])) {
        display.value = currDisp.slice(0, -1) + btntext;
      } else {
        display.value += btntext;
      }
      console.log(btntext);
      isResult = false;
    }

    if (btntext === ".") {
      let currDisp = display.value;
      let length = currDisp.length;
      let lastNumberStartIndex = 0;

      // Find the start index of the last number in the display value
      for (let i = length - 1; i >= 0; i--) {
        if (/[/*+\-]/.test(currDisp[i])) {
          lastNumberStartIndex = i + 1;
          break;
        }
      }
      // Check if there's a decimal point in the last number
      if (currDisp.slice(lastNumberStartIndex).includes(".")) {
        console.log("One number can contain only one decimal point.");
      } else {
       
        display.value += btntext;
      }
      isResult = false; // Reset isResult flag when '.' is pressed
    }

    //numbers action
    if (nums.includes(btntext)) {
      if (isResult) {
        display.value = btntext;
        isResult = false;
      } else {
        if (display.value === "0") {
          display.value = btntext;
        } else {
          // Otherwise, append the number to the display value
          display.value += btntext;
        }
      }
      console.log(btntext);
    }

    //result action
    if (btntext == "=") {
      let result = 0;
      let currDisp = display.value;
      console.log(currDisp[currDisp.length - 2] + "hekelfjkl");
      if (currDisp[currDisp.length - 2] === "%") {
        let op1 = currDisp[currDisp.length - 3];
        let op2 = currDisp[currDisp.length - 1];
        console.log(op1 + op2);
        result = 0.01 * op1 * op2;
      } else if (
        currDisp[currDisp.length - 1] === "%" &&
        currDisp.length == 2
      ) {
        result = currDisp[currDisp.length - 2] * 0.01;
      } else {
        result = eval(display.value);
      }
      let exp = display.value;
      let str = exp + "=" + result;
      history.push(str);
      display.value = result;
      console.log(result);
      isResult = true; // Set isResult flag to true after displaying the result
      console.log(history);
    }

    if (btntext == "AC") {
      display.value = "0";
      console.log("Pressed AC");
    }

    if (btntext == "DEL") {
      display.value = display.value.slice(0, -1);
      console.log("Pressed AC");
    }

    if (btntext == "+/-") {
      display.value = 0 - display.value;
      console.log("Pressed +/-" + display.value);
    }
  });

  //history button
  historyBtn.addEventListener("click", function () {
    if (history.length === 0) {
      display.value = "Empty";
    } else {
      let historyDisplay = history
        .slice(Math.max(history.length - 5, 0))
        .join("\n");
      display.value = historyDisplay;
      console.log(historyDisplay);
    }
  });
}
