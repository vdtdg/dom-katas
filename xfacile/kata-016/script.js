"use strict";

const square = document.getElementById("square");
let position = 0;

setInterval(() => {
    position += 2;
    square.style.left = position + "px";
}, 16); // Environ 60fps