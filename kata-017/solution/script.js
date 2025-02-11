"use strict";

// Définition de la fonction updateClock qui met à jour l'horloge affichée dans la page
function updateClock() {
    // Création d'un objet Date pour obtenir l'heure actuelle
    const now = new Date();
    // Récupère l'heure actuelle et la convertit en chaîne de caractères.
    // padStart(2, "0") permet d'ajouter un zéro devant le chiffre si nécessaire pour obtenir toujours 2 chiffres.
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    // Sélectionne l'élément du DOM qui a l'ID "clock" et met à jour son contenu texte
    // La template string `${h}:${m}:${s}` formate l'heure sous la forme "hh:mm:ss"
    document.querySelector("#clock").textContent = `${hours}:${minutes}:${seconds}`;
}

// Appel initial de la fonction updateClock() pour afficher immédiatement l'heure dès le chargement de la page
updateClock();

// setInterval permet d'exécuter la fonction updateClock() toutes les 1000 millisecondes (soit toutes les secondes)
// Cela garantit que l'horloge se met à jour en temps réel
setInterval(updateClock, 1000);

/*
Explications supplémentaires :

1. "new Date()": Crée un nouvel objet Date qui contient l'heure et la date actuelles.
2. "getHours()", "getMinutes()", "getSeconds()": Méthodes de l'objet Date pour récupérer respectivement l'heure, les minutes et les secondes.
3. "padStart(2, '0')": Assure que la chaîne résultante a toujours au moins 2 caractères.
   Par exemple, si getMinutes() renvoie 5, padStart convertira "5" en "05".
4. "document.querySelector('#clock')": Sélectionne l'élément HTML ayant l'ID "clock".
5. "textContent": Permet de modifier le texte contenu dans l'élément HTML sélectionné.
6. "setInterval(updateClock, 1000)": Appelle la fonction updateClock() toutes les 1000 millisecondes (1 seconde), ce qui permet d'actualiser l'horloge en continu.

Ce code permet donc d'afficher une horloge en temps réel sur la page, qui se met à jour chaque seconde.
*/
