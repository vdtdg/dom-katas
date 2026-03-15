"use strict";

// Sélection du tableau par son ID
const table = document.getElementById("dataTable");

// Sélection de tous les en-têtes (<th>) du tableau
const headers = table.querySelectorAll("th");

// Objet pour stocker l'ordre de tri (ascendant ou descendant) pour chaque colonne
let sortOrder = {};

// Parcours de chaque en-tête de colonne pour y ajouter un écouteur d'événement
headers.forEach((header, index) => {
    // Initialisation de l'ordre de tri de chaque colonne en "ascendant"
    sortOrder[index] = "asc";

    // Ajout d'un événement "click" sur chaque en-tête de colonne
    header.addEventListener("click", () => {
        // 1️ - Détermination du type de données à trier
        // On récupère l'attribut "data-type" du <th> (ex: "number" ou "string")
        const type = header.getAttribute("data-type");

        // Sélection du corps du tableau (<tbody>)
        const tbody = table.querySelector("tbody");

        // Création d'un tableau contenant toutes les lignes du <tbody>
        const rows = Array.from(tbody.querySelectorAll("tr"));

        // 2️ - Tri des lignes en fonction du type de la colonne sélectionnée
        rows.sort((a, b) => {
            // Récupération du contenu texte des cellules correspondantes
            const cellA = a.children[index].textContent.trim();
            const cellB = b.children[index].textContent.trim();

            if (type === "number") {
                // Si la colonne contient des nombres, on compare avec une soustraction
                return parseFloat(cellA) - parseFloat(cellB);
            } else {
                // Si la colonne contient du texte, on utilise localeCompare pour comparer alphabétiquement
                return cellA.localeCompare(cellB);
                // localeCompare compare les chaînes de caractères en respectant l'ordre alphabétique et la langue locale.
            }
        });

        // 3️ - Gestion de l'inversion de l'ordre de tri
        if (sortOrder[index] === "desc") {
            rows.reverse(); // Inverser l'ordre si déjà trié
            sortOrder[index] = "asc"; // Réinitialiser à ascendant pour le prochain clic
        } else {
            sortOrder[index] = "desc"; // Passer en descendant au prochain clic
        }

        // 4️ - Réaffichage des lignes triées
        tbody.innerHTML = ""; // On vide le <tbody>
        rows.forEach(row => tbody.appendChild(row)); // On y ajoute les lignes triées
    });
});
