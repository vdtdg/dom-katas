"use strict";

const button = document.getElementById("changeBtn");
const status = document.getElementById("status");

button.addEventListener("click", function () {
  status.textContent = "Action terminee";
});
