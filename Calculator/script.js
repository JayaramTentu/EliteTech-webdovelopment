let display = document.getElementById('calculator-display');
let currentInput = '0';


function appendNumber(number) {
  if (currentInput === '0') {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function appendOperator(operator) {
  currentInput += ' ' + operator + ' ';
  updateDisplay();
}


function updateDisplay() {
  display.value = currentInput;
}


function clearDisplay() {
  currentInput = '0';
  updateDisplay();
}


function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  if (currentInput === '') {
    currentInput = '0';
  }
  updateDisplay();
}


function calculatePercentage() {
  currentInput = eval(currentInput) / 100;
  updateDisplay();
}

function calculateSquareRoot() {
  currentInput = Math.sqrt(eval(currentInput));
  updateDisplay();
}


function calculateSquare() {
  currentInput = Math.pow(eval(currentInput), 2);
  updateDisplay();
}


function calculateFactorial() {
  let num = eval(currentInput);
  if (num < 0 || !Number.isInteger(num)) {
    currentInput = 'Error';
  } else {
    currentInput = factorial(num);
  }
  updateDisplay();
}

function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

function calculateLog() {
  currentInput = Math.log10(eval(currentInput));
  updateDisplay();
}

function calculateSin() {
  currentInput = Math.sin(degreesToRadians(eval(currentInput)));
  updateDisplay();
}

function calculateCos() {
  currentInput = Math.cos(degreesToRadians(eval(currentInput)));
  updateDisplay();
}

function calculateTan() {
  currentInput = Math.tan(degreesToRadians(eval(currentInput)));
  updateDisplay();
}


function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}
function calculateResult() {
  try {
    currentInput = eval(currentInput);
    updateDisplay();
  } catch (error) {
    currentInput = 'Error';
    updateDisplay();
  }
}
