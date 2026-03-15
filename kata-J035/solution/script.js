"use strict";

// Sélectionne l'élément ayant l'ID "square"
const square = document.getElementById("square");

// Position actuelle du carré en pixels
let position = 0;

// Fonction qui animera le déplacement du carré
function animate() {
    // Augmente la position de 2 pixels à chaque appel
    position += 2;

    // Applique la nouvelle position au style CSS (déplacement horizontal)
    square.style.left = position + "px";

    // Demande au navigateur d'exécuter cette fonction à la prochaine image (frame)
    requestAnimationFrame(animate);
}

// Démarre l'animation en appelant la fonction une première fois
requestAnimationFrame(animate);

/*
Explication détaillée :

- `requestAnimationFrame(animate)` demande au navigateur d'exécuter `animate()` à chaque nouvelle image.
- Cela permet d'obtenir une animation fluide synchronisée avec le taux de rafraîchissement de l'écran.
- La fonction `animate()` s'appelle elle-même à chaque fois pour continuer l'animation.
- On parle de "récursion", mais ici, il suffit de comprendre que `requestAnimationFrame()` garde l'animation en cours.
- La position augmente de 2 pixels à chaque image, donc le carré avance progressivement.

Résumé :
1 - On initialise la position à 0.
2 - La fonction `animate()` met à jour la position et déplace le carré.
3️ - `requestAnimationFrame(animate)` répète le processus pour continuer l'animation.

 Avantage : Contrairement à `setInterval()`, `requestAnimationFrame()` est plus fluide et performant !
*/
