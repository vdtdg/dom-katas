"use strict";

// Sélectionne le formulaire dont l'ID est "myForm" et lui ajoute un écouteur d'événement pour l'événement "submit"
document.querySelector("#myForm").addEventListener("submit", function (e) {
    // Empêche le comportement par défaut du formulaire, qui serait de recharger la page lors de la soumission
    e.preventDefault();

    // Sélectionne l'input dont l'ID est "myInput" et récupère sa valeur (le texte saisi par l'utilisateur)
    const inputVal = document.querySelector("#myInput").value;

    // Affiche une alerte avec le message et la valeur saisie par l'utilisateur
    alert("Vous avez saisi : " + inputVal);
});