const display = document.querySelector(".display");
const displayText = document.querySelector(".screen-text")
const numButtons = document.querySelectorAll(".number");
const opButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".end-operator");
const clearButton = document.querySelector("#clear");

//these store data and get updated in the functions below
let firstNumber = 0;
let secondNumber = 0;
let result = 0;
let opResult = 0;
let operator = "";
let errorString = "Can't do that chief";

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

//function to take inputs and run them through math functions

function operate(operator, firstNumber, secondNumber) {
    if (operator == '+') {
        return add(firstNumber, secondNumber);
    } else if (operator == '-') {
        return subtract(firstNumber, secondNumber);
    } else if (operator == 'x') {
        return multiply(firstNumber, secondNumber);
    } else if (operator == '/') {
        //if you try to divide by zero, error message
        if (secondNumber === 0) {
            displayText.errorString;
        } else if (secondNumber != 0) {
        return divide(firstNumber, secondNumber)};
    } 

};

//turn the display into an array, join into string and turn into number
function getNumber (input) {
    let numArray = Array.from(input);
    let numInput = parseInt(numArray.join(""));
    return numInput;    
}

function clearDisplay () {
    displayText.textContent = "";
};

//put numbers on display screen
numButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // if screen already has result, wipe and start again, otherwise update screen
        if ((result != 0) || (opResult != 0)) {
             clearDisplay();
             result = 0;
             opResult = 0;
             displayText.textContent += button.id;
         } else {
        displayText.textContent += button.id;
        };
    })
});

opButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (firstNumber == 0) {
            // when operator is pressed, turn display from string into int and store as first number
            firstNumber = getNumber(displayText.textContent);
            // store operate value
            operator = button.id;
            // clear screen
            clearDisplay();
        // if numberOne is not 0. Means this is the second number and we equal it before operating
        } else if (firstNumber != 0) {
             //set second number and operate
             let secondNumber = getNumber(displayText.textContent);
             opResult = operate(operator, firstNumber, secondNumber);
             //clear display -> display result -> set first number and operator to continue operating
             clearDisplay();
             displayText.textContent += opResult;
             firstNumber = opResult;
             operator = button.id;
             secondNumber = 0;
        };
    })
});

equalButton.addEventListener("click", () => {
    // set second number, get result, and display it
    secondNumber = getNumber(displayText.textContent);
    result = operate(operator, firstNumber, secondNumber);
    clearDisplay();
    displayText.textContent += result;
    //reinitialize to start again
    firstNumber = 0;
    secondNumber = 0;
});

clearButton.addEventListener("click", () => {
    clearDisplay();
});

