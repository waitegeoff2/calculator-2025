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
        if (secondNumber === 0) {
            displayText.textContent = errorString;
            console.log(displayText.textContent);
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
        // if numberOne > 0. Means this is the second number and we equal it
        if (firstNumber == 0) {
            // when operator is pressed, turn display from string into int and store as first number
            firstNumber = getNumber(displayText.textContent);
            console.log(firstNumber);
            // store operate value
            operator = button.id;
            console.log(operator);
            // clear screen
            clearDisplay();
        } else if (firstNumber != 0) {
             let secondNumber = getNumber(displayText.textContent);
              console.log(secondNumber);
             opResult = operate(operator, firstNumber, secondNumber);
              console.log(opResult);
             clearDisplay();
             displayText.textContent += opResult;
             firstNumber = opResult;
             secondNumber = 0;
              console.log(firstNumber);
        };
    })
});

equalButton.addEventListener("click", () => {
    secondNumber = getNumber(displayText.textContent);
    console.log(secondNumber);
    result = operate(operator, firstNumber, secondNumber);
    console.log(result);
    clearDisplay();
    displayText.textContent += result;
    firstNumber = 0;
    secondNumber = 0;
    console.log(result);
});

clearButton.addEventListener("click", () => {
    clearDisplay();
});

