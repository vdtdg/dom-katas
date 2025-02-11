"use strict";

// Erreur : le sélecteur utilisé était ".text" alors que l'élément a pour id "text"
// Voir la documentation MDN https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id

const textPara = document.querySelector("#text");
document.querySelector("#colorBtn").addEventListener("click", function () {
    textPara.style.color = "blue";
});