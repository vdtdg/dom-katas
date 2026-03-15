"use strict";

const form = document.querySelector("TODO");
const emailInput = document.querySelector("TODO");
const result = document.querySelector("TODO");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  result.textContent = `Email: ${emailInput.value}`;
});
