"use strict";

const input = document.querySelector("TODO");
const preview = document.querySelector("TODO");

input.addEventListener("input", function () {
  preview.textContent = input.value;
});
