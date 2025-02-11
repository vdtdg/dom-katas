"use strict"; // Active le mode strict pour encourager de bonnes pratiques et détecter certaines erreurs

// Sélectionne les éléments du DOM
const taskInput = document.querySelector("#taskInput");    // Champ de saisie pour la nouvelle tâche
const addTaskBtn = document.querySelector("#addTaskBtn");      // Bouton pour ajouter la tâche
const taskList = document.querySelector("#taskList");          // Liste qui contiendra les tâches

// Ajoute un écouteur d'événement pour le clic sur le bouton "Ajouter"
addTaskBtn.addEventListener("click", () => {
    // Récupère le texte saisi dans le champ de saisie, en supprimant les espaces inutiles
    const text = taskInput.value.trim();

    // Si le texte est vide, on quitte la fonction (aucune tâche n'est ajoutée)
    if (text === "") return;

    // Crée un nouvel élément de liste (<li>) qui représentera une tâche
    const li = document.createElement("li");

    // Crée un élément <span> pour contenir le texte de la tâche
    const span = document.createElement("span");
    // Définit le contenu textuel du <span> avec le texte saisi
    span.textContent = text;

    // Ajoute le <span> à l'élément <li>
    li.appendChild(span);

    // Écouteur d'événement pour marquer la tâche comme terminée ou non au clic sur l'élément <li>
    li.addEventListener("click", () => {
        // Bascule la classe "completed" : si elle est présente, elle est retirée, sinon elle est ajoutée
        li.classList.toggle("completed");
    });

    // Écouteur d'événement pour permettre l'édition inline en cas de double-clic sur la tâche
    li.addEventListener("dblclick", () => {
        // Active l'édition en rendant le contenu du <span> modifiable
        span.contentEditable = "true";
        // Place le focus sur le <span> pour permettre la modification immédiate
        span.focus();
    });

    // Écouteur d'événement pour désactiver l'édition lorsque l'élément <span> perd le focus
    span.addEventListener("blur", () => {
        // Désactive l'édition en remettant contentEditable à "false"
        span.contentEditable = "false";
    });

    // Ajoute la nouvelle tâche (l'élément <li> contenant le <span>) à la liste des tâches
    taskList.appendChild(li);
    
    // Vide le champ de saisie pour permettre d'ajouter une nouvelle tâche
    taskInput.value = "";
});
