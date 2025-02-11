"use strict";

const galleryLinks = document.querySelectorAll(".thumb");
const display = document.querySelector("#display");

galleryLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        const imgURL = this.getAttribute("href");
        display.innerHTML = `<img src="${imgURL}" alt="Image agrandie">`;
    });
});