"use strict";

const form = document.querySelector("#emailForm");
const emailInput = document.querySelector("#emailInput");
const result = document.querySelector("#result");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  result.textContent = `Email: ${emailInput.value}`;
});
