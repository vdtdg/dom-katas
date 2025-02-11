"use strict";

// Sélectionne tous les éléments ayant la classe "tab" (les onglets)
const tabs = document.querySelectorAll(".tab");
// Sélectionne tous les éléments ayant la classe "content" (les contenus des onglets)
const contents = document.querySelectorAll(".content");

// Pour chaque onglet, on ajoute un écouteur d'événement "click"
tabs.forEach(tab => {
    tab.addEventListener("click", function () {
        // 1. Retirer la classe "active" de tous les onglets
        tabs.forEach(tab => tab.classList.remove("active"));
        // 2. Retirer la classe "active" de tous les contenus
        contents.forEach(content => content.classList.remove("active"));

        // 3. Ajouter la classe "active" à l'onglet cliqué pour le mettre en surbrillance
        this.classList.add("active");

        // 4. Récupérer l'ID du contenu à afficher via l'attribut "data-tab" de l'onglet cliqué
        const target = this.getAttribute("data-tab");

        // 5. Ajouter la classe "active" au contenu correspondant pour l'afficher
        document.getElementById(target).classList.add("active");
    });
});