const display = document.querySelector(".display");
const displayText = document.querySelector(".screen-text")
const numButtons = document.querySelectorAll(".number");
const opButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".end-operator");
const clearButton = document.querySelector("#clear");

let firstNumber = 0;
let secondNumber = 0;
let operator = "";

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
    if (operator == '+') {
        add(firstNumber, secondNumber);
    } else if (operator == '-') {
        subtract(firstNumber, secondNumber);
    } else if (operator == 'x') {
        multiply(firstNumber, secondNumber);
    } else if (operator == "/") {
        divide(firstNumber, secondNumber);
    } 

    // else if sub, div, mul
};

// populate the display by clicking buttons
//button clicks -> go to display
// LOOK UP BUTTON FOR EACH IN LESSON
//take display - make into array
//put into function
// make into array, split array, add into operate function? 


//turn the display into an array, join into string and turn into number
function getNumber (input) {
    let numArray = Array.from(input);
    let numInput = parseInt(numArray.join(""));
    return numInput;    
}


function clearDisplay () {
    displayText.textContent = "";
};

numButtons.forEach((button) => {
    button.addEventListener("click", () => {
        displayText.textContent += button.id;
    })
});
// store number as variable, then take operator, store that as varible, then clear

opButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // when operator is pressed, turn display from string into int and store
        numberOne = getNumber(displayText.textContent);
        console.log(numberOne);
        // store operate value
        operator = button.id;
        console.log(operator);
        // clear screen
        clearDisplay();
    })
});

equalButton.addEventListener("click", () => {
    let numberTwo = getNumber(displayText.textContent);
    console.log(numberTwo);
    let result = operate(numberOne, operator, numberTwo);
    clearDisplay();
});





let screenInput = displayText.textContent;
console.log(screenInput);

// break down screen text into array and split???

clearButton.addEventListener("click", () => {
    displayText.textContent = "";
});

