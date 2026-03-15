"use strict";

const taskInput = document.querySelector("TODO");
const taskList = document.querySelector("TODO");

taskInput.addEventListener("keydown", function (event) {
  if (event.key !== "Enter") {
    return;
  }

  const text = taskInput.value.trim();
  if (!text) {
    return;
  }

  const li = document.createElement("li");
  li.textContent = text;
  taskList.appendChild(li);
  taskInput.value = "";
});
