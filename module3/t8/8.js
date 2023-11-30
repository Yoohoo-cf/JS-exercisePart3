"use strict";

function calculator() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;

    let result;

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "sub":
            result = num1 - num2;
            break;
        case "multi":
            result = num1 * num2;
            break;
        case "div":
            result = num1 / num2;
            break;
        default:
            result = "Invalid Operation";
    }
    document.getElementById("result").innerHTML = "Result: " + result;
}

let buttonElement = document.getElementById("start");
buttonElement.addEventListener("click", function(){
    calculator();
})