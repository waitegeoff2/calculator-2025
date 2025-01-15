const display = document.querySelector(".display");
const displayText = document.querySelector(".screen-text")
const numButtons = document.querySelectorAll(".number");
const opButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".end-operator");
const clearButton = document.querySelector("#clear");

let firstNumber = 0;
let secondNumber = 0;
let operator = "";

displayText.textContent = "900";

// populate the display by clicking buttons



// basic math functions

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1/num2;
}

//variables for two numbers and one operator


//function to take inputs and run them through math functions

function operate(firstNumber, operator, secondNumber) {
    if (operator == 'plus') {
        add(firstNumber, secondNumber);
    } else if (operator == 'minus') {
        subtract(firstNumber, secondNumber);
    } else if (operator == 'x') {
        multiply(firstNumber, secondNumber);
    } else if (operator == "division") {
        divide(firstNumber, secondNumber);
    } 

    // else if sub, div, mul
};

