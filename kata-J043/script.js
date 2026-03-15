"use strict";

const colorSelect = document.querySelector("TODO");
const previewBox = document.querySelector("TODO");

colorSelect.addEventListener("change", function () {
  previewBox.style.backgroundColor = colorSelect.value;
});
