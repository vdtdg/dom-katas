"use strict";

// Sélectionne tous les éléments qui ont la classe "thumb" (les vignettes de la galerie)
const galleryLinks = document.querySelectorAll(".thumb");

// Sélectionne le conteneur qui affichera l'image agrandie (élément avec l'ID "display")
const display = document.querySelector("#display");

// Pour chaque lien (vignette) de la galerie, on ajoute un écouteur d'événement "click"
galleryLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        // Empêche le comportement par défaut du lien (naviguer vers l'URL)
        e.preventDefault();

        // Récupère l'URL de l'image à partir de l'attribut "href" du lien cliqué
        const imgURL = this.getAttribute("href");

        // Met à jour le contenu du conteneur "display" en y insérant une balise <img>
        // L'image affichée utilisera l'URL récupérée et aura un attribut alt descriptif
        display.innerHTML = `<img src="${imgURL}" alt="Image agrandie">`;
    });
});