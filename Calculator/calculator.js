const Calculator = {
  display_value: "0",
  first_operand: null,
  wait_second_operand: false,
  operator: null,
};

function Input_digit(digit) {
  const { display_value, wait_second_operand } = Calculator;
  if (wait_second_operand === true) {
    Calculator.display_value = digit;
    Calculator.wait_second_operand = false;
  } else {
    Calculator.display_value =
      display_value === "0" ? digit : display_value + digit;
  }
}

function Input_decimal(dot) {
  if (Calculator.wait_second_operand === true) return;
  if (!Calculator.display_value.includes(dot)) {
    Calculator.display_value += dot;
  }
}

function Handle_operator(next_operator) {
  const { first_operand, display_value, operator } = Calculator;
  const value_of_input = parseFloat(display_value);
  if (operator && Calculator.wait_second_operand) {
    Calculator.operator = next_operator;
    return;
  }
  if (first_operand == null) {
    Calculator.first_operand = value_of_input;
  } else if (operator) {
    const value_now = first_operand || 0;
    let result = perform_calculation[operator](value_now, value_of_input);
    result = Number(result).toFixed(9);
    result = (result * 1).toString();
    Calculator.display_value = parseFloat(result);
    Calculator.first_operand = parseFloat(result);
  }
  Calculator.wait_second_operand = true;
  Calculator.operator = next_operator;
}
const perform_calculation = {
  "/": (first_operand, second_operand) => first_operand / second_operand,
  "*": (first_operand, second_operand) => first_operand * second_operand,
  "+": (first_operand, second_operand) => first_operand + second_operand,
  "-": (first_operand, second_operand) => first_operand - second_operand,
  "=": (first_operand, second_operand) => second_operand,
};

function Calculator_reset() {
  Calculator.display_value = "0";
  Calculator.first_operand = null;
  Calculator.wait_second_operand = false;
  Calculator.operand = null;
}
function update_display() {
  const display = document.querySelector(".calculator-screen");
  display.value = Calculator.display_value;
}

update_display();
const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
  const { target } = event;
  if (!target.matches("button")) {
    return;
  }
  if (target.classList.contains("operator")) {
    Handle_operator(target.value);
    update_display();
    return;
  }
  if (target.classList.contains("decimal")) {
    Input_decimal(target.value);
    update_display();
    return;
  }
  if (target.classList.contains("all-clear")) {
    Calculator_reset();
    update_display();
    return;
  }

  Input_digit(target.value);
  update_display();
});
