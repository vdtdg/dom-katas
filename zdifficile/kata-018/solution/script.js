"use strict";

// Sélectionne l'élément qui affiche le résultat de la calculatrice
const screen = document.querySelector("#screen");

// Sélectionne tous les boutons de la calculatrice grâce à leur classe "btn"
const buttons = document.querySelectorAll(".btn");

// Variables pour stocker l'état actuel de la calculatrice
let currentInput = "";  // Chaîne représentant le nombre entré actuellement par l'utilisateur
let operator = null;    // Opérateur choisi (par exemple, "+", "-", "*", "/")
let operand1 = null;    // Premier opérande (nombre) avant l'opération

// Ajoute un écouteur d'événements sur chaque bouton
buttons.forEach(button => {
    button.addEventListener("click", () => {
        // Récupère la valeur associée au bouton grâce à l'attribut "data-value"
        const value = button.getAttribute("data-value");

        // Si le bouton cliqué correspond au symbole "=" :
        if (value === "=") {
            // Vérifie qu'un opérateur a été choisi, qu'un premier opérande existe et que l'utilisateur a saisi le second nombre
            if (operator && operand1 !== null && currentInput !== "") {
                const operand2 = parseFloat(currentInput);  // Convertit le texte saisi en nombre (deuxième opérande)
                let result;

                // Effectue le calcul en fonction de l'opérateur sélectionné
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
                        // Gestion de la division par zéro
                        if (operand2 === 0) {
                            result = "Erreur";
                        } else {
                            result = operand1 / operand2;
                        }
                        break;
                }
                // Affiche le résultat sur l'écran de la calculatrice
                screen.textContent = result;

                // Réinitialise les variables pour permettre de démarrer un nouveau calcul
                currentInput = "";
                operator = null;
                operand1 = null;
            }
        }
        // Si le bouton cliqué correspond à un opérateur (+, -, *, /)
        else if (["+", "-", "*", "/"].includes(value)) {
            // S'assure qu'un nombre a été saisi avant de choisir un opérateur
            if (currentInput !== "") {
                // Stocke le premier nombre (operand1) et l'opérateur choisi
                operand1 = parseFloat(currentInput);
                operator = value;
                // Réinitialise l'entrée pour pouvoir saisir le second nombre
                currentInput = "";
                // Affiche l'opérateur sur l'écran pour indiquer l'opération en cours
                screen.textContent = value;
            }
        }
        // Pour tous les autres boutons (chiffres et point décimal)
        else {
            // Ajoute la valeur du bouton à l'entrée en cours
            currentInput += value;
            // Met à jour l'écran pour afficher le nombre en cours de saisie
            screen.textContent = currentInput;
        }
    });
});
