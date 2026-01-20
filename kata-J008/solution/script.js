"use strict";

const galleryLinks = document.querySelectorAll(".thumb");
const display = document.querySelector("#display");

galleryLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault(); // Empêche le comportement par défaut du lien
        const imgURL = this.getAttribute("href");
        display.innerHTML = `<img src="${imgURL}" alt="Image agrandie">`;
    });
});