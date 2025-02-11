"use strict";

// Récupère l'élément <button> grâce à son identifiant "addItem".
const button = document.querySelector('#addItem');

// Récupère l'élément <ul> grâce à son identifiant "list".
const list = document.querySelector('#list');

// Ajoute un écouteur d'événement sur le bouton qui se déclenche lors d'un clic.
button.addEventListener('click', () => {
    // Crée un nouvel élément <li>.
    const newItem = document.createElement('li');

    // Définit le contenu textuel de l'élément <li> à "Nouvel item".
    newItem.textContent = 'Nouvel item';

    // Ajoute le nouvel élément <li> à la fin de la liste <ul>.
    list.appendChild(newItem);
});