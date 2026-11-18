# Exercices JavaScript

Je reprends et je consolide mes bases en JavaScript pour préparer mon Master Développeur Web, Big Data et IA.

Ce dépôt montre ma progression : j'écris, je teste et je corrige chaque exercice moi-même.

## vols.js
Je travaille sur une liste de vols (numéro, destination, durée, prix, complet ou non).

- `filter` : garder seulement certains vols (les vols non complets, les vols à moins de 500 €, les vols longs).
- `map` : récupérer une seule information de chaque vol (les destinations, les numéros) ou fabriquer une phrase pour chaque vol.
- `find` : trouver un vol précis (par destination ou par numéro), et afficher « Vol introuvable » s'il n'existe pas.
- `sort` : trier les vols par prix ou par durée, dans un sens ou dans l'autre. Je trie une copie (`[...vols]`) pour ne pas modifier la liste de départ.

J'ai aussi écrit une fonction `rechercherVols(vols, budgetMax)` qui enchaîne les trois : elle garde les vols disponibles dans mon budget, les trie du moins cher au plus cher, puis affiche leurs destinations.

## Lancer le code
```bash
node vols.js
```
