"use strict";

const items = document.querySelectorAll("TODO");

items.forEach((item) => {
  item.textContent += " - lu";
});
