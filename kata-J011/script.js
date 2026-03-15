"use strict";

const button = document.querySelector("TODO");
const result = document.querySelector("TODO");

button.addEventListener("click", function () {
  result.textContent = "Bonjour !";
});
