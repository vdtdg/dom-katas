"use strict";

// Tableau contenant les URL des images à afficher
const images = [
    "https://cdn2.thecatapi.com/images/MTg0NDI4MA.png",
    "https://cdn2.thecatapi.com/images/ctHlkAH3L.jpg",
    "https://cdn2.thecatapi.com/images/8vl.jpg",
];

let index = 0; // Variable qui représente l'index de l'image actuellement affichée

// Sélectionne l'élément image dans le DOM par son identifiant "slideImage"
const slideImage = document.querySelector("#slideImage");


setInterval(() => {
    index++; // Incrémente l'index pour passer à l'image suivante
    // On peut aussi écrire : index += 1;

    // Vérifie si l'index dépasse la taille du tableau d'images
    if (index >= images.length) {
        // On remet l'index à 0 pour revenir à la première image
        // car les tableaux sont indexés à partir de 0.
        index = 0;
    }

    // Met à jour l'attribut "src" de l'image avec la nouvelle URL
    slideImage.src = images[index];

}, 3000);
// setInterval s'execute toutes les 3000 millisecondes (3 secondes).
// Contrairement à setTimeout, setInterval continue de s'exécuter indéfiniment jusqu'à ce qu'il soit arrêté.

// Documentation utile :
// https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval