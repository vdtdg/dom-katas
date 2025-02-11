"use strict";

// Aïe, le formatage ne marche pas, bon il faut se débrouiller pour rendre ça lisible à la main.

const button = document.querySelector("#clickme");

button.addEventListener("click", function () {
    let result = document.querySelector("#result");
    result.textContent = "Coucou."
});