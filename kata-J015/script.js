"use strict";

const onceBtn = document.querySelector("TODO");
const status = document.querySelector("TODO");

onceBtn.addEventListener("click", function () {
  status.textContent = "Le bouton a deja servi";
}, {
  once: true,
});
