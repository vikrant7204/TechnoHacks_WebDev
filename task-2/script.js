const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let output = "";

// Define a function to calculate based on button clicked.
const calculate = (btnValue) => {
  if (btnValue === "=") {
    try {
      output = eval(output);
      if (isNaN(output) || !isFinite(output)) {
        output = "Error";
      }
    } catch (error) {
      output = "Error";
    }
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.slice(0, -1);
  } else if (btnValue === ".") {
    // Allow only one decimal point in the number
    if (!output.includes(".")) {
      output += ".";
    }
  } else {
    // Handle multiple operators in a row
    if (/[\+\-\*\/]$/.test(output) && /[\+\-\*\/]/.test(btnValue)) {
      output = output.slice(0, -1);
    }
    output += btnValue;
  }
  display.value = output;
};

// Add event listeners to buttons, call calculate() on click.
buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

// Allow keyboard input
document.addEventListener("keydown", (e) => {
  const key = e.key;
  if (/[\d\+\-\*\/\.\=]|Enter|Backspace|Delete/.test(key)) {
    e.preventDefault();
    if (key === "Enter") {
      key = "=";
    }
    calculate(key);
  }
});

// Clear the display when it's clicked
display.addEventListener("click", () => {
  output = "";
  display.value = "";
});
