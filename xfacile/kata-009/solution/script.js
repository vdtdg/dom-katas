"use strict";

// L'erreur ici vient du sélecteur CSS:
const toggleElem = document.querySelector("#toggle");
toggleElem.addEventListener("click", function () {
    this.classList.toggle("active");
});

// La documentation expliquant les différents types de sélecteurs CSS:
// https://developer.mozilla.org/fr/docs/Web/CSS/CSS_selectors

// Dans le cas de cet exercice, la documentation sur les sélecteurs d'identifiant (id selector):
// https://developer.mozilla.org/fr/docs/Web/CSS/ID_selectors