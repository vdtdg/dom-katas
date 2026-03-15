"use strict";

const colorSelect = document.querySelector("#colorSelect");
const previewBox = document.querySelector("#previewBox");

colorSelect.addEventListener("change", function () {
  previewBox.style.backgroundColor = colorSelect.value;
});
