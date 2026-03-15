"use strict";

const onceBtn = document.querySelector("#onceBtn");
const status = document.querySelector("#status");

onceBtn.addEventListener("click", function () {
  status.textContent = "Le bouton a deja servi";
}, {
  once: true,
});
