"use strict";

// La fonction initClock initialise l'horloge et démarre sa mise à jour en temps réel
function initClock() {
    // Sélectionne directement l'élément horloge dans le DOM grâce à son identifiant "#clock"
    const clock = document.querySelector("#clock");

    // Fonction interne qui met à jour l'affichage de l'heure
    function updateClock() {
        // Crée un objet Date pour obtenir l'heure actuelle
        const date = new Date();

        // Récupère les heures, minutes et secondes, et les formate en chaînes de 2 chiffres
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");

        // Met à jour le contenu texte de l'élément horloge pour afficher l'heure au format "hh:mm:ss"
        clock.textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Appel initial pour afficher immédiatement l'heure dès le chargement de la page
    updateClock();

    // Met à jour l'horloge toutes les 1000 millisecondes (1 seconde)
    setInterval(updateClock, 1000);
}

// Appelle la fonction initClock pour démarrer l'horloge
initClock();