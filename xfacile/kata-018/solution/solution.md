### 1. Comment le code détermine-t-il le type de données pour le tri ?

Le code utilise l'attribut data-type présent sur chaque en-tête `(<th>)` du tableau. Lorsqu'un utilisateur clique sur un en-tête, le script récupère cette information avec :

```javascript
const type = header.getAttribute("data-type");
```

Cet attribut indique si les données de la colonne sont des nombres `(number)` ou du texte `(string)`. Ensuite, cette information est utilisée pour appliquer la méthode de tri appropriée :

Si c'est un nombre, le script utilise `parseFloat()` et soustrait les valeurs pour comparer.
Si c'est du texte, la méthode `localeCompare()` est utilisée pour comparer les chaînes de caractères.

### 2. Quel est le rôle de localeCompare dans ce code ?

`localeCompare()` est une méthode de JavaScript qui permet de comparer deux chaînes de caractères en respectant l'ordre alphabétique et les règles linguistiques locales.

Dans ce script, elle est utilisée pour trier les colonnes contenant du texte :

```javascript
return cellA.localeCompare(cellB);
```

Contrairement à une comparaison classique `(> ou <)`, `localeCompare()` prend en compte les accents et les spécificités de tri propres à une langue. Cela permet un tri plus naturel des noms ou des mots.

### 3. Comment le code gère-t-il l'inversion de l'ordre de tri lors de clics successifs sur une même colonne ?

Le script utilise un objet `sortOrder` pour mémoriser l'ordre de tri de chaque colonne.

Au premier clic sur une colonne, les données sont triées en ordre ascendant `("asc")`.
Si on clique une seconde fois sur la même colonne, le script détecte que la colonne était déjà triée et inverse l'ordre `("desc")`.
Cet état est stocké dans `sortOrder[index]`, où index correspond à la colonne concernée.
Le code réalise cela avec :

```javascript
if (sortOrder[index] === "desc") {
    rows.reverse(); // Inversion du tri
    sortOrder[index] = "asc"; // Repasser en ascendant pour le prochain clic
} else {
    sortOrder[index] = "desc"; // Passer en descendant
}
```

Cela garantit que chaque clic alterne entre un tri ascendant et descendant.