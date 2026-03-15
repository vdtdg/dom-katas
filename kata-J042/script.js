"use strict";

const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");

addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = taskText + ' <button class="delBtn">Supprimer</button>';
        taskList.appendChild(li);
        taskInput.value = "";
    }
});

taskInput.addEventListener("click", function (e) {
    if (e.target && e.target.matches("button.delBtn")) {
        e.target.closest("li").remove();
    }
});