let firstNumber = '';
let secondNumber = '';
let currentOperator = null;
let shouldResetDisplay = false;

const display = document.getElementById('display');

// Basic math functions

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return "Imagine that you have zero cookies and you split them evenly among zero friends. How many cookies does each person get? See? It doesn’t make sense. And Cookie Monster is sad that there are no cookies, and you are sad that you have no friends.";
    return a / b;
}

// Clear display

function clearDisplay() {
    firstNumber = '';
    secondNumber = '';
    currentOperator = null;
    shouldResetDisplay = false;
    display.textContent = '0';
}

function inputDigit(digit) {
    if (display.textContent === '0' || shouldResetDisplay) {
        display.textContent = digit;
        shouldResetDisplay = false;
    } else {
        display.textContent += digit;
    }
}

function inputDecimal() {
    if (shouldResetDisplay) {
        display.textContent = '0';
        shouldResetDisplay = false;
    }
    if (!display.textContent.includes('.')) {
        display.textContent += '.';
    }
}

function inputOperator(operator) {
    if (currentOperator !== null) calculate();
    firstNumber = display.textContent;
    currantOperator = operator;
    shouldResetDisplay = true;
}