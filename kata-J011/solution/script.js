"use strict";

const button = document.querySelector("#helloBtn");
const result = document.querySelector("#result");

button.addEventListener("click", function () {
  result.textContent = "Bonjour !";
});
