"use strict";

const container = document.querySelector("#buttonContainer");

for (let i = 1; i <= 3; i++) {
    const btn = document.createElement("button");
    btn.textContent = "Bouton " + i;
    btn.addEventListener("click", function () {
        console.log("Vous avez cliqué sur le bouton " + i);
    });
    container.appendChild(btn);
}