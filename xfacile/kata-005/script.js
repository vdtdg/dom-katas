"use strict";

const items = document.querySelectorAll("#infoList li");
items.forEach((item, index) => {
    item.textContent += ` (index ${index})`;
    item.style.color = "green";
});