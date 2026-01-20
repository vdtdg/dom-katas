"use strict";

const table = document.getElementById("dataTable");
const headers = table.querySelectorAll("th");
let sortOrder = {}; // Pour mémoriser l'ordre de tri de chaque colonne

headers.forEach((header, index) => {
    sortOrder[index] = "asc";
    header.addEventListener("click", () => {
        const type = header.getAttribute("data-type");
        const tbody = table.querySelector("tbody");
        const rows = Array.from(tbody.querySelectorAll("tr"));

        rows.sort((a, b) => {
            const cellA = a.children[index].textContent.trim();
            const cellB = b.children[index].textContent.trim();

            if (type === "number") {
                return parseFloat(cellA) - parseFloat(cellB);
            } else {
                return cellA.localeCompare(cellB);
            }
        });

        if (sortOrder[index] === "desc") {
            rows.reverse();
            sortOrder[index] = "asc";
        } else {
            sortOrder[index] = "desc";
        }

        // Réafficher les lignes triées
        tbody.innerHTML = "";
        rows.forEach(row => tbody.appendChild(row));
    });
});