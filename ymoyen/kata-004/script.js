"use strict";

let counter = 0;

const counterDisplay = document.querySelector("#counter");
document.querySelector("#incrBtn").addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
});
document.querySelector("#decrBtn").addEventListener("click", () => {
    counter--;
    counterDisplay.textContent = counter;
});