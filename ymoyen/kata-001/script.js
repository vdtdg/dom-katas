"use strict";

document.querySelector("#myForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const inputVal = document.querySelector("#myInput").value;
    alert("Vous avez saisi : " + inputVal);
});