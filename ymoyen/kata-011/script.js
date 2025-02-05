"use strict";

const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");

addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
        // Au clic sur la tâche, on bascule la classe 'completed'
        li.addEventListener("click", () => li.classList.toggle("completed"));
        taskList.appendChild(li);
        taskInput.value = "";
    }
});