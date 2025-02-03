"use strict";

const list = document.querySelector("#myList");
const items = list.querySelectorAll("li");

for (let i = 0; i < items.length; i++) {
  items[i].textContent += " – modifié";
}
