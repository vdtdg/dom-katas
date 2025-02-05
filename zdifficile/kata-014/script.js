"use strict";

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (text === "") return;

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = text;
    li.appendChild(span);

    // Au clic, basculer l'état "terminé"
    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // En double-clic, permettre l'édition inline
    li.addEventListener("dblclick", () => {
        span.contentEditable = "true";
        span.focus();
    });

    // Désactiver l'édition lors du blur
    span.addEventListener("blur", () => {
        span.contentEditable = "false";
    });

    taskList.appendChild(li);
    taskInput.value = "";
});