"use strict";

// Simulation d'une requête fetch avec un objet JSON statique
const data = [
    {id: 1, name: "Alice"},
    {id: 2, name: "Bob"},
    {id: 3, name: "Charlie"}
];

const tableBody = document.querySelector("#dataTable tbodye");

data.forEach(item => {
    const row = document.createElement("tr");
    const cellId = document.createElement("td");
    cellId.textContent = item.id;
    const cellName = document.createElement("td");
    cellName.textContent = item.name;
    row.appendChild(cellId);
    row.appendChild(cellName);
    tableBody.appendChild(row);
});