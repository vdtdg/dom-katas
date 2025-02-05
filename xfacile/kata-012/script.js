"use strict";

const images = [
    "https://cdn2.thecatapi.com/images/MTg0NDI4MA.png",
    "https://cdn2.thecatapi.com/images/ctHlkAH3L.jpg",
    "https://cdn2.thecatapi.com/images/8vl.jpg",
];

let index = 0;
const slideImage = document.querySelector("#slideImage");

setInterval(() => {
    index = index + 1; // Erreur : incrémentation sans cycle correct
    if (index >= images.length) {
        index = 1; // Erreur : il faut réinitialiser à 0 pour ne pas sauter la première image
    }
    slideImage.src = images[index];
}, 3000);