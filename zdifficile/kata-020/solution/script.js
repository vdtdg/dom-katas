"use strict";

// Sélectionne la liste contenant les éléments à réordonner
const list = document.querySelector("#draggableList");

// Variable pour stocker l'élément actuellement déplacé
let draggedItem = null;

/**
 * Gestion de l'événement "dragstart"
 * Lorsque l'utilisateur commence à glisser un élément (<li>), on stocke cet élément.
 */
list.addEventListener("dragstart", (e) => {
  // On vérifie que l'élément déclencheur est bien un <li>
  if (e.target.tagName === "LI") {
    draggedItem = e.target;  // On enregistre l'élément en cours de déplacement
    // Indique que l'opération de glisser est une opération de "move"
    e.dataTransfer.effectAllowed = "move";
  }
});

/**
 * Gestion de l'événement "dragover"
 * Permet de définir la zone où l'élément peut être déposé.
 * On empêche le comportement par défaut pour autoriser le drop.
 */
list.addEventListener("dragover", (e) => {
  e.preventDefault(); // Nécessaire pour permettre le drop
  // Si l'élément survolé est un <li> et qu'il n'est pas celui en cours de glissement
  if (e.target.tagName === "LI" && e.target !== draggedItem) {
    // Ajoute la classe "drag-over" pour indiquer visuellement la zone de dépôt
    e.target.classList.add("drag-over");
  }
});

/**
 * Gestion de l'événement "dragleave"
 * Supprime l'effet visuel (classe "drag-over") lorsque l'élément quitte une zone de dépôt.
 */
list.addEventListener("dragleave", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.remove("drag-over");
  }
});

/**
 * Gestion de l'événement "drop"
 * Lorsque l'élément est déposé, on le réinsère à la position correcte dans la liste.
 */
list.addEventListener("drop", (e) => {
  e.preventDefault(); // Empêche le comportement par défaut de l'événement
  // Vérifie que l'élément déposé est un <li> et qu'il ne s'agit pas de l'élément lui-même qui est déplacé
  if (e.target.tagName === "LI" && e.target !== draggedItem) {
    // Supprime la classe visuelle "drag-over" de l'élément survolé
    e.target.classList.remove("drag-over");
    // Convertit la NodeList en tableau pour pouvoir trouver l'index des éléments
    let items = Array.from(list.querySelectorAll("li"));
    // Récupère l'index de l'élément sur lequel on a déposé et celui de l'élément déplacé
    let dropIndex = items.indexOf(e.target);
    let dragIndex = items.indexOf(draggedItem);

    // Si l'élément déplacé se trouvait avant l'élément déposé, insère-le après ce dernier.
    if (dragIndex < dropIndex) {
      list.insertBefore(draggedItem, e.target.nextSibling);
    } else {
      // Sinon, insère-le avant l'élément déposé.
      list.insertBefore(draggedItem, e.target);
    }
  }
});

/**
 * Gestion de l'événement "dragend"
 * Réinitialise la variable et supprime les classes visuelles sur tous les éléments.
 */
list.addEventListener("dragend", () => {
  draggedItem = null; // Réinitialise l'élément déplacé
  // Supprime la classe "drag-over" de tous les éléments pour nettoyer l'interface
  list.querySelectorAll("li").forEach(item => item.classList.remove("drag-over"));
});
