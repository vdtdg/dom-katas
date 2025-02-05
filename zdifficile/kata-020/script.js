"use strict";

const list = document.getElementById("draggableList");
let draggedItem = null;

list.addEventListener("dragstart", (e) => {
  if (e.target.tagName === "LI") {
    draggedItem = e.target;
    e.dataTransfer.effectAllowed = "move";
  }
});

list.addEventListener("dragover", (e) => {
  e.preventDefault();
  if (e.target.tagName === "LI" && e.target !== draggedItem) {
    e.target.classList.add("drag-over");
  }
});

list.addEventListener("dragleave", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.remove("drag-over");
  }
});

list.addEventListener("drop", (e) => {
  e.preventDefault();
  if (e.target.tagName === "LI" && e.target !== draggedItem) {
    e.target.classList.remove("drag-over");
    // Réordonner les éléments
    let items = Array.from(list.querySelectorAll("li"));
    let dropIndex = items.indexOf(e.target);
    let dragIndex = items.indexOf(draggedItem);

    if (dragIndex < dropIndex) {
      list.insertBefore(draggedItem, e.target.nextSibling);
    } else {
      list.insertBefore(draggedItem, e.target);
    }
  }
});

list.addEventListener("dragend", () => {
  draggedItem = null;
  list.querySelectorAll("li").forEach(item => item.classList.remove("drag-over"));
});