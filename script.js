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
    if (b === 0) return "Can't divide by 0!";
    return a / b;
}

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
    currentOperator = operator;
    shouldResetDisplay = true;
}

function calculate() {
    if (currentOperator === null || shouldResetDisplay) return;

    secondNumber = display.textContent;
    display.textContent = roundResult(
        operate(currentOperator, parseFloat(firstNumber), parseFloat(secondNumber))
    );
    currentOperator = null;
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return null;
    }
}