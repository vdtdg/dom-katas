"use strict";

// Constantes pour la taille de la grille:
const ROWS = 8;
const COLS = 8;

// Sélection du conteneur de la grille dans le DOM
const gridContainer = document.querySelector("#gameGrid");

// Position initiale du joueur dans la grille
let playerPos = { x: 3, y: 3 };

/**
 * Crée la grille interactive dans un container donné de rows x cols:
 */
function createGrid(container, rows, cols) {
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            const cell = document.createElement("div");
            cell.className = "grid-cell";
            cell.dataset.x = x; // Stocke la position x dans l'attribut data-x
            cell.dataset.y = y; // Stocke la position y dans l'attribut data-y
            container.appendChild(cell);
        }
    }
}

/**
 * Met à jour la position du joueur dans la grille.
 * Supprime la classe "player" de la cellule actuelle et l'ajoute à la nouvelle cellule correspondant à playerPos.
 */
function updatePlayer() {
    // Retire la classe "player" de la cellule qui la possède (si elle existe)
    const currentPlayerCell = document.querySelector(".player");
    if (currentPlayerCell) {
        currentPlayerCell.classList.remove("player");
    }
    // Sélectionne la cellule correspondant à la position actuelle du joueur
    const newPlayerCell = document.querySelector(`.grid-cell[data-x="${playerPos.x}"][data-y="${playerPos.y}"]`);
    if (newPlayerCell) {
        newPlayerCell.classList.add("player");
    }
}

/**
 * Gère les événements clavier pour déplacer le joueur.
 * @param {KeyboardEvent} e - L'événement clavier.
 */
function handleKeyDown(e) {
    switch (e.key) {
        case "ArrowUp":
            if (playerPos.y > 0) playerPos.y--;
            break;
        case "ArrowDown":
            if (playerPos.y < COLS - 1) playerPos.y++;
            break;
        case "ArrowLeft":
            if (playerPos.x > 0) playerPos.x--;
            break;
        case "ArrowRight":
            if (playerPos.x < ROWS - 1) playerPos.x++;
            break;
    }
    updatePlayer();
}

/**
 * Initialise le jeu.
 * Crée la grille, met à jour la position du joueur et ajoute l'écouteur d'événements clavier.
 */
function initGame() {
    /** Crée la grille interactive dans le gridContainer de ROWS x COLS soit 8x8 */
    createGrid(gridContainer, ROWS, COLS);
    /** Met à jour la position du joueur */
    updatePlayer();
    /** Ajoute l'eventListener du clavier */
    document.addEventListener("keydown", handleKeyDown);
}

// Lancement du jeu
initGame();
