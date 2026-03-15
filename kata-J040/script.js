"use strict";

// Sélectionne le champ de saisie (input) par son ID
const taskInput = document.querySelector("#taskInput");

// Sélectionne le bouton pour ajouter une tâche par son ID
const addTaskBtn = document.querySelector("#addTaskBtn");

// Sélectionne la liste qui contiendra les tâches par son ID
const taskList = document.querySelector("#taskList");

// Ajoute un écouteur d'événement sur le bouton d'ajout pour gérer le clic
addTaskBtn.addEventListener("click", function () {
    // Récupère le texte saisi par l'utilisateur et supprime les espaces en début et fin
    const taskText = taskInput.value.trim();

    // Vérifie que le champ n'est pas vide
    if (taskText !== "") {
        // Crée un nouvel élément <li> pour représenter la tâche
        const li = document.createElement("li");

        // Affecte le texte de la tâche à l'élément <li>
        li.textContent = taskText;

        // Ajoute un écouteur d'événement sur l'élément <li>
        // Lors d'un clic sur la tâche, la classe "completed" est basculée
        // (si la tâche est marquée comme terminée, elle sera barrée)
        li.addEventListener("click", () => li.classList.toggle("completed"));

        // Ajoute la nouvelle tâche à la liste des tâches
        taskList.appendChild(li);

        // Réinitialise le champ de saisie pour permettre d'ajouter une nouvelle tâche
        taskInput.value = "";
    }
});