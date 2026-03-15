"use strict";

const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

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
