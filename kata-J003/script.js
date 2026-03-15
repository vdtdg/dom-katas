"use strict";

const button = document.getElementById("TODO");
const status = document.getElementById("TODO");

button.addEventListener("click", function () {
  status.textContent = "Action terminee";
});
