# Exercice 10 – Explication

Le script suivant crée plusieurs boutons et leur attache un événement.
(Pensez à regarder ce qu'affiche la console en appuyant sur la touche F12 de votre navigateur)

**Questions :**

1. Pourquoi utilise-t-on une fonction anonyme dans l’`addEventListener` ?

Une fonction anonyme est utilisée dans l'`addEventListener` pour créer une portée locale pour la variable `i`. Cela permet de capturer la valeur de `i` au moment où le bouton est cliqué, garantissant que chaque bouton affiche le bon numéro lorsqu'il est cliqué. Si une fonction nommée était utilisée, elle partagerait la même portée et la valeur de i serait celle de la dernière itération de la boucle.

2. Que se passerait-il si l’on utilisait une boucle for classique sans variable locale ?

Si une boucle for classique était utilisée sans une variable locale (comme let), tous les boutons afficheraient le même numéro lors du clic, qui serait celui de la dernière itération de la boucle. Cela se produit parce que la variable i serait partagée entre toutes les itérations, et à la fin de la boucle, `i` aurait la valeur maximale.

3. Expliquez l’intérêt d’utiliser defer dans le `<script>`.

L'attribut `defer` dans la balise `<script>` permet de s'assurer que le script est exécuté après que le document HTML a été complètement analysé. Cela signifie que le script peut manipuler le DOM sans risque d'erreurs dues à des éléments qui ne sont pas encore chargés. Cela améliore également les performances de chargement de la page, car le navigateur peut continuer à analyser le HTML pendant que le script est téléchargé.