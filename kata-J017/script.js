"use strict";

const toggleElem = document.querySelector(".toggle");
toggleElem.addEventListener("click", function () {
    this.classList.toggle("active");
});
