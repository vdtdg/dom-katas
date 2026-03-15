"use strict";

const card = document.querySelector("TODO");
const status = document.querySelector("TODO");

card.addEventListener("mouseenter", function () {
  status.textContent = "Souris dans la carte";
});

card.addEventListener("mouseleave", function () {
  status.textContent = "Souris hors de la carte";
});
