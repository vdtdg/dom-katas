"use strict";

const card = document.querySelector("#card");
const status = document.querySelector("#status");

card.addEventListener("mouseenter", function () {
  status.textContent = "Souris dans la carte";
});

card.addEventListener("mouseleave", function () {
  status.textContent = "Souris hors de la carte";
});
