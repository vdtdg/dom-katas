"use strict";

// Déclaration d'une variable globale "counter" initialisée à 0.
// Cette variable va servir à stocker la valeur actuelle du compteur.
let counter = 0;

// Sélection de l'élément <span> qui affiche le compteur dans le DOM.
// On utilise l'ID "counter" pour le retrouver.
const counterDisplay = document.querySelector("#counter");

// Ajout d'un écouteur d'événement pour le clic sur le bouton d'incrémentation.
// Le bouton est sélectionné grâce à son ID "incrBtn".
document.querySelector("#incrBtn").addEventListener("click", () => {
    counter++; // Incrémente la variable "counter" de 1
    counterDisplay.textContent = counter; // Met à jour l'affichage du compteur avec la nouvelle valeur
});

// Ajout d'un écouteur d'événement pour le clic sur le bouton de décrémentation.
// Le bouton est sélectionné grâce à son ID "decrBtn".
document.querySelector("#decrBtn").addEventListener("click", () => {
    counter--; // Décrémente la variable "counter" de 1
    counterDisplay.textContent = counter; // Met à jour l'affichage du compteur avec la nouvelle valeur
});
