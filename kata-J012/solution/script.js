"use strict";

const button = document.querySelector("#incrementBtn");
const countSpan = document.querySelector("#count");
let count = 0;

button.addEventListener("click", function () {
  count += 1;
  countSpan.textContent = count;
});
