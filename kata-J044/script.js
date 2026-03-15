"use strict";

const tabButtons = document.querySelectorAll("TODO");
const tabPanels = document.querySelectorAll("TODO");

tabButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const targetId = button.dataset.target;

    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabPanels.forEach((panel) => panel.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(targetId).classList.add("active");
  });
});
