let num1 = 8;
let num2 = 2;
// let sum = num1 + num2;
document.getElementById("numone").textContent = num1;
document.getElementById("numtwo").textContent = num2;

// let firstNumber = document.getElementById("numone");
// let secondNumber = document.getElementById("numtwo");

let sumEl = document.getElementById("sum-el");

function add() {
    sumEl.textContent += num1 + num2;
    // totalNumber.textContent = 0;
    
}

function subtract() {
    sumEl.textContent += num1 - num2;
}

function multiply() {
    sumEl.textContent += num1 * num2;
}

function divide() {
    sumEl.textContent += num1 / num2;
}

