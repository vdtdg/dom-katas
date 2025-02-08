# Exercice 16 – Explication

Le code suivant parcourt une liste d’éléments et leur applique un style.  
**Questions :**

1. Quelle est la différence entre utiliser `forEach` et une boucle `for` classique sur un NodeList ?

`forEach` est une méthode d'itération qui peut être utilisée directement sur les `NodeLists`, ce qui rend le code plus lisible et concis. En revanche, une boucle for classique nécessite de convertir le `NodeList` en tableau pour l'itération, ce qui peut ajouter de la complexité. De plus, `forEach` gère automatiquement l'indexation et ne nécessite pas de déclaration de variable d'index.

2. Pourquoi utiliser `textContent` pour modifier le contenu plutôt que `innerHTML` ici ?

`textContent` est utilisé pour modifier le contenu textuel d'un élément sans interpréter le HTML. Cela permet d'éviter les problèmes de sécurité liés à l'injection de code HTML malveillant. En utilisant `textContent`, on s'assure que le contenu est traité comme du texte brut, ce qui est plus sûr dans de nombreux cas.

3. Quel est l’avantage de stocker le résultat de `document.querySelectorAll` dans une variable ?

Stocker le résultat de `document.querySelectorAll` dans une variable permet d'éviter de faire plusieurs appels au DOM, ce qui peut être coûteux en termes de performance. Cela rend également le code plus lisible et maintenable, car on peut réutiliser la variable sans avoir à répéter la requête.