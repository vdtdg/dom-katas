# Recapitulatif des exigences du projet

## Apercu du projet
Ce dépôt contient des katas HTML/CSS/JS utilisés pour enseigner le developpement web. L'objectif est de créer une interface bac a sable sur un site web, afin que les etudiants puissent editer le code des katas et voir le resultat sans rien installer.

## Experience cible
- Une interface de bac a sable avec un menu a gauche pour changer de kata.
- Le reste de l'écran est divisé en trois: sur la partie gauche, on affiche la consigne du kata. La partie droite est divisée en deux horizontalement. La partie du haut est un éditeur de code, la partie du bas est le rendu du code.
- La partie éditeur de code permet de modifier les fichiers du katas, elle offre donc dans sa partie gauche un explorateur de fichier léger. Ici, on imagine quelque chose proche de Monaco ou CodeMirror.
- La partie rendu du code possède un bouton pour rafraîchir et un bouton solution pour affichier la solution.
- N'execute que HTML, CSS et JavaScript dans le client.
- Quand un kata est selectionné dans le menu de gauche, il est chargé.
- Dans la partie de gauche, un bouton discret à côté de chaque kata permet de le marqué comme "terminé". Il est alors mis en valeur en vert. Le LocalStorage est utilisé pour se souvenir du progrès.
- Le style doit être pédagogique, simple.

## Objectifs d'hebergement
- Hébergement statique uniquement (pas d'execution backend).

## Contraintes de securite et de sureté
- Executer le code des etudiants uniquement dans le navigateur.
- Utiliser un iframe isole en mode sandbox pour isoler l'execution.
- Eviter toute execution cote serveur afin de reduire les risques.

