"use strict";

// Simulation d'une requête fetch avec un objet JSON statique
const data = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

// Correction de l'erreur : on sélectionne correctement le <tbody> du tableau.
// La chaîne "tbodye" était erronée, il faut utiliser "tbody".
const tableBody = document.querySelector("#dataTable tbody");

// Pour chaque élément de l'objet JSON, on crée une nouvelle ligne dans le tableau HTML.
data.forEach(item => {
    // Création d'une ligne de tableau (<tr>)
    const row = document.createElement("tr");

    // Création d'une cellule pour l'ID (<td>) et affectation de la valeur de l'ID
    const cellId = document.createElement("td");
    cellId.textContent = item.id;

    // Création d'une cellule pour le nom (<td>) et affectation de la valeur du nom
    const cellName = document.createElement("td");
    cellName.textContent = item.name;

    // Ajout des cellules à la ligne
    row.appendChild(cellId);
    row.appendChild(cellName);

    // Ajout de la ligne au corps du tableau (<tbody>)
    tableBody.appendChild(row);
});
