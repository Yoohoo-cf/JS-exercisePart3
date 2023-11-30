"use strict";

function calculator() {
    let calElement = document.getElementById("calculation").value;

    let parts = calElement.split(/([\+\-\*\/])/);
    let num1 = parseInt(parts[0]);
    let num2 = parseInt(parts[2]);
    let operation = parts[1];

    let result;

    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            result = "Invalid operation"
    }

    document.getElementById("result").innerHTML = "Result: "+ result;
}

const buttonElement = document.getElementById("start");

buttonElement.addEventListener("click", function(){
    calculator();
})