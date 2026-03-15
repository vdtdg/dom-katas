"use strict";

const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");

// Ajout d'un écouteur d'événement sur le bouton d'ajout de tâche
addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        // On crée un élément <li> qui contient le texte de la tâche et un bouton de suppression
        li.innerHTML = taskText + ' <button class="delBtn">Supprimer</button>';
        // On ajoute la tâche (l'élément <li>) à la liste des tâches
        taskList.appendChild(li);
        // On réinitialise le champ de saisie pour pouvoir ajouter une nouvelle tâche
        taskInput.value = "";
    }
});

// Correction de la délégation d'événements : 
// Au lieu d'attacher l'écouteur au champ de saisie (taskInput), 
// il faut l'attacher au conteneur de la liste (taskList) qui contient tous les boutons "Supprimer".
taskList.addEventListener("click", function (e) {
    // Vérifie si l'élément cliqué est un bouton avec la classe "delBtn"
    if (e.target && e.target.matches("button.delBtn")) {
        // e.target.closest("li") permet de trouver l'élément <li> le plus proche (la tâche) et de le supprimer
        e.target.closest("li").remove();
    }
});
