# Exercice 9 – Explication

Ce code crée une liste d’éléments et modifie leur contenu.  
**Questions :**
1. Que fait exactement la ligne `document.querySelector("#myList")` ?

Cette ligne sélectionne l'élément HTML avec l'ID myList. Cela permet d'accéder à la liste non ordonnée `(<ul>)` dans le document.

2. Expliquez le rôle de la boucle `for` dans ce script.

La boucle for parcourt tous les éléments de la liste `(<li>)` et modifie leur contenu en ajoutant `" – modifié"` à la fin de chaque élément. Cela permet de mettre à jour dynamiquement le texte affiché dans la liste.

3. Quelle est la différence entre `textContent` et `innerHTML` ?

`textContent` récupère ou définit le texte brut d'un élément, sans interpréter le HTML. En revanche, `innerHTML` récupère ou définit le contenu HTML d'un élément, ce qui signifie qu'il peut inclure des balises HTML et les interpréter.

4. Commenter dans le fichier HTML l'import du script. Relancer la page. Qu'en déduisez-vous sur ce que fait le script ?

En commentant la ligne `<script defer src="script.js"></script>`, le script ne sera pas exécuté lors du chargement de la page. En relançant la page, on peut observer que le contenu de la liste ne change pas, ce qui indique que le script est responsable de la modification du texte des éléments de la liste.
