1. Différences entre setInterval et requestAnimationFrame pour l'animation

- setInterval : Exécute une fonction à des intervalles de temps fixes, indépendamment de la fréquence de rafraîchissement de l'écran.Cela peut entraîner des animations saccadées si le navigateur est occupé.

- requestAnimationFrame : Synchronise l'exécution de la fonction d'animation avec le taux de rafraîchissement de l'écran, ce qui permet des animations plus fluides et efficaces. Il est également optimisé pour réduire la consommation d'énergie.


2. Avantages de requestAnimationFrame en termes de performance

- Fluidité : Les animations sont plus fluides car elles s'exécutent à la même fréquence que le taux de rafraîchissement de l'écran,

- Efficacité énergétique : Le navigateur peut suspendre les animations lorsque l'onglet n'est pas visible, ce qui économise des ressources,

- Gestion des performances : requestAnimationFrame permet au navigateur de gérer les animations de manière plus efficace, en évitant les appels excessifs à la fonction d'animation.


3. Modification du code pour utiliser requestAnimationFrame

Voir la modification dans solution/script.js