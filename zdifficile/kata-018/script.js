"use strict";

const screen = document.getElementById("screen");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let operator = null;
let operand1 = null;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");

        if (value === "=") {
            if (operator && operand1 !== null && currentInput !== "") {
                const operand2 = parseFloat(currentInput);
                let result;
                switch (operator) {
                    case "+":
                        result = operand1 + operand2;
                        break;
                    case "-":
                        result = operand1 - operand2;
                        break;
                    case "*":
                        result = operand1 * operand2;
                        break;
                    case "/":
                        if (operand2 === 0) {
                            result = "Erreur";
                        } else {
                            result = operand1 / operand2;
                        }
                        break;
                }
                screen.textContent = result;
                // Réinitialiser
                currentInput = "";
                operator = null;
                operand1 = null;
            }
        } else if (["+", "-", "*", "/"].includes(value)) {
            if (currentInput !== "") {
                operand1 = parseFloat(currentInput);
                operator = value;
                currentInput = "";
                screen.textContent = value;
            }
        } else {
            currentInput += value;
            screen.textContent = currentInput;
        }
    });
});