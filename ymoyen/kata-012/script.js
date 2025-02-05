"use strict";

const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");

addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;

        // Bouton de suppression
        const delBtn = document.createElement("button");
        delBtn.textContent = "Supprimer";
        delBtn.addEventListener("click", () => li.remove());

        li.appendChild(delBtn);
        taskList.appendChild(li);
        taskInput.value = "";
    }
});