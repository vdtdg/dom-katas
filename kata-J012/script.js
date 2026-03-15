"use strict";

const button = document.querySelector("TODO");
const countSpan = document.querySelector("#count");
let count = 0;

button.addEventListener("click", function () {
  count += 1;
  countSpan.textContent = count;
});
