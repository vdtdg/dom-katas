"use strict";

// Sélection des éléments du DOM nécessaires
const openModalBtn = document.querySelector("#openModalBtn"); // Bouton qui ouvre la modale
const modal = document.querySelector("#modal");               // Conteneur global de la modale
const closeModalBtn = document.querySelector("#closeModalBtn"); // Bouton qui ferme la modale

// Écouteur d'événement pour ouvrir la modale lors d'un clic sur le bouton "Ouvrir la modale"
openModalBtn.addEventListener("click", () => {
    // Enlève la classe "hidden" pour rendre la modale visible
    modal.classList.remove("hidden");
});

// Écouteur d'événement pour fermer la modale lors d'un clic sur le bouton de fermeture (le "×")
closeModalBtn.addEventListener("click", () => {
    // Ajoute la classe "hidden" pour masquer la modale
    modal.classList.add("hidden");
});

// Écouteur d'événement pour fermer la modale si l'utilisateur clique en dehors du contenu
modal.addEventListener("click", (e) => {
    // Vérifie que le clic s'est fait sur le conteneur modal lui-même et non sur l'un de ses enfants (comme modal-content)
    if (e.target === modal) {
        // Ajoute la classe "hidden" pour masquer la modale
        modal.classList.add("hidden");
    }
});
