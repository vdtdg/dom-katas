"use strict";

const input = document.querySelector("#nameInput");
const preview = document.querySelector("#preview");

input.addEventListener("input", function () {
  preview.textContent = input.value;
});
