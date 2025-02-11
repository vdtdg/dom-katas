"use strict";

// Sélectionne le champ de saisie de la tâche grâce à son ID "taskInput"
const taskInput = document.querySelector("#taskInput");

// Sélectionne le bouton d'ajout de tâche grâce à son ID "addTaskBtn"
const addTaskBtn = document.querySelector("#addTaskBtn");

// Sélectionne la liste (élément <ul>) qui contiendra les tâches ajoutées, via son ID "taskList"
const taskList = document.querySelector("#taskList");

// Ajoute un écouteur d'événement au clic sur le bouton d'ajout
addTaskBtn.addEventListener("click", function () {
    // Récupère le texte saisi par l'utilisateur et supprime les espaces superflus au début et à la fin
    const taskText = taskInput.value.trim();

    // Vérifie que le champ de saisie n'est pas vide
    if (taskText !== "") {
        // Crée un nouvel élément de liste <li> qui représentera la tâche
        const li = document.createElement("li");

        // Définit le contenu textuel de l'élément <li> avec le texte de la tâche
        li.textContent = taskText;

        // --- Ajout du bouton de suppression ---
        // Crée un nouveau bouton pour permettre de supprimer la tâche
        const delBtn = document.createElement("button");

        // Définit le texte du bouton (ce qui s'affichera à l'intérieur)
        delBtn.textContent = "Supprimer";

        // Applique une marge autour du bouton pour espacer le bouton du texte
        delBtn.style.margin = "10px";

        // Ajoute un écouteur d'événement sur le bouton de suppression
        // Au clic, cet événement supprime l'élément <li> qui contient la tâche
        delBtn.addEventListener("click", () => li.remove());
        // --------------------------------------

        // Ajoute le bouton de suppression à l'élément <li> (la tâche)
        li.appendChild(delBtn);

        // Ajoute la nouvelle tâche (avec le bouton) à la liste des tâches affichées
        taskList.appendChild(li);

        // Réinitialise le champ de saisie pour permettre d'ajouter une nouvelle tâche
        taskInput.value = "";
    }
});