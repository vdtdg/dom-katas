"use strict";

// Code à refactorer
(function () {
    const gridContainer = document.getElementById("gameGrid");
    let playerPos = { x: 3, y: 3 };

    // Création de la grille 8x8
    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            const cell = document.createElement("div");
            cell.className = "grid-cell";
            cell.dataset.x = x;
            cell.dataset.y = y;
            gridContainer.appendChild(cell);
        }
    }

    // Mettre à jour la position du joueur
    function updatePlayer() {
        document.querySelector(".player")?.classList.remove("player");
        const cell = document.querySelector(`.grid-cell[data-x="${playerPos.x}"][data-y="${playerPos.y}"]`);
        if (cell) {
            cell.classList.add("player");
        }
    }

    updatePlayer();

    // Gestion des événements clavier pour déplacer le joueur
    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowUp" && playerPos.y > 0) playerPos.y--;
        else if (e.key === "ArrowDown" && playerPos.y < 7) playerPos.y++;
        else if (e.key === "ArrowLeft" && playerPos.x > 0) playerPos.x--;
        else if (e.key === "ArrowRight" && playerPos.x < 7) playerPos.x++;
        updatePlayer();
    });
})();