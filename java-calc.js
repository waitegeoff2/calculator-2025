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

let firstNumber;
let secondNumber;
let operator;

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

