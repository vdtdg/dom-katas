"use strict";

// Erreur : le sélecteur utilisé était ".text" alors que l'élément a pour id "text"
const textPara = document.querySelector("#text");
document.querySelector("#colorBtn").addEventListener("click", function () {
    textPara.style.color = "blue";
});