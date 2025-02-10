"use strict";

// Sélectionner le bouton par son identifiant (id) "#addBtn" grâce à document.querySelector
const addButton = document.querySelector("#addBtn");

// Ajout d'un écouteur d'événement sur le bouton qui réagit au clic
addButton.addEventListener("click", function () {
  // Crée un nouvel élément <p> qui représentera le paragraphe à ajouter
  const newParagraph = document.createElement("p");

  // Définit le texte à l'intérieur du paragraphe
  newParagraph.textContent = "Paragraphe ajouté";

  // Ajoute le nouveau paragraphe à la fin du <body> de la page
  document.body.appendChild(newParagraph);
});