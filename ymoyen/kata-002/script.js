"use strict";

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach(tab => {
    tab.addEventListener("click", function () {
        // Retirer la classe active de tous les onglets et contenus
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        // Activer l'onglet cliqué et son contenu correspondant
        this.classList.add("active");
        const target = this.getAttribute("data-tab");
        document.getElementById(target).classList.add("active");
    });
});