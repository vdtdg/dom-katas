"use strict";

// Code refactoré
// Suppression de l'encapsulation inutile (function() {...}) qui compliquait la lecture du code sans nécessité.

// "a" a été renommé en "fruitsArray" pour indiquer clairement qu'il s'agit d'un tableau de fruits.
// Déclaration en constante car le tableau n'est pas modifié dans le script.
const fruitsArray = ["Apple", "Banana", "Cherry"];

// "b" a été renommé en "itemList" pour indiquer qu'il s'agit de la liste d'éléments dans le DOM.
// Déclaration en constante également.
const itemList = document.querySelector("#itemList");

// 1ère solution: Création d'une fonction pour générer un élément <li>
function createListItem(text) {
    const listItem = document.createElement("li");
    listItem.textContent = text;
    return listItem;
}

// Utilisation de forEach pour un code plus concis et moderne
fruitsArray.forEach(fruit => {
    itemList.appendChild(createListItem(fruit))
});

// 2ème solution: On peut se passer de la fonction si elle est utilisée une seule fois.

// Version sans fonction (commentée pour éviter une exécution en double)

// Pour décommenter, selectionner les lignes et appuyer sur Ctrl + / et observer le résultat.

// fruitsArray.forEach(fruit => {
//     const listItem = document.createElement("li");
//     listItem.textContent = fruit;
//     itemList.appendChild(listItem);
// });