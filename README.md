# Covid Killer

## Infos
Décembre 2020

JavaScript: Epreuve pratique en 7h

Répartition sur 100 pts
- épreuve théorique: 20 pts
- épreuve pratique:
  - qualité du code: 20 pts
  - javascript statique (génération HTML): 30 pts
  - javascript dynamique (interactions utilisateur): 30 pts

## Consignes
*Toutes sources d'information autorisées, mais pas de communication interpersonnelles pendant l'épreuve. L'aspect individuel/unique de la résolution des questions et du problème fait partie de la note.*

*Deux langues autorisées: français, anglais.*

*Copier/coller de code d'internet sanctionnés.*

*Pas le droit de toucher au HTML. Tout le site est généré depuis le JavaScript. Par contre on peut changer le SCSS.*

*Frameworks/Librairies de SPA non autorisés (Angular, React, Vue, Jquery...).*

*Les questions au formateur à propos des consignes ou liées aux problèmes techniques sont autorisées.*

- Envoyez votre travail aux formateurs (ltruchot) via un lien vers un repo github AVANT 16h45 le 18/12/2020
- Ne touchez plus jamais à ce repo après 16h45 sous peine de malus important

## Épreuve théorique sur 20pts

Pour chaque question, répondre avec **vos propres mots**, sans copier/coller, en au moins 2 phrases.
Les réponses peuvent être subjectives si il y a le signe **(s)** à la fin de la question.

Vous pouvez répondre à même ce document ou dans un fichier à part.

**réponse donnée directement après chaque question, en jaune**

- Qu'est-ce que JavaScript vanilla ? 
`Javascript vanilla est le Javascript pur, sans l'utilisation d'aucun framework (comme React ou Vue.js) ni librairie (comme JQuery). Il est fort récommandé d'apprendre à bien maitriser les bases de JS avant de se lancer dans l'utilisation de frameworks et/ou librairies. Il existe meme un site web (http://vanilla-js.com/) qui cible ironiquement les devs qui ne savent pas développer en JS vanilla.`

- Qu'est-ce qu'AJAX ? 
`Ajax est l'acronyme d'asynchronous JavaScript and XML (= JavaScript et XML asynchrones). Il s'agit d'une méthode qui permet d'envoyer des requetes au serveur web et afficher/modifier la page coté client sans devoir à chaque fois mettre la jour la page entière.`

- Pourquoi JavaScript est parfois mal-aimé des devs ? **(s)** 
`Plusieurs raisons :`
1. language pas typé. Ce n'est pas tout à fait vrai, car Typescript permet le typage, mais souvent les devs habitués à des languages fortement typés trouvent très chaotique le fait de ne pas immédiatement assigner des types à leurs variables. Personnellement, j'adore pouvoir me passer du typage !
2. les classes ne sont pas utilisées. Introduite que dans la dernière version de JS, les classes sont quasiment pas utilisées, ce qui encore une fois ne plait pas aux devs qui aiment l'orienté-objet.
3. confusion avec la portée ("scope") de la variable, que dans d'autres languages est plus facile à comprendre (je suis d'accord)
4. parce qu'il existent mille types de valeurs nulles : undefined, null, NaN, et on n'en avait pas vraiment besoin car c'était déjà assez compliqué avec null.
5. on ne peut pas s'en passer pour faire du front-end, ce qui cause de la frustration chez ceux qui n'arrivent pas à le maitriser correctement !
6. l'aspect final de notre application dépend trop fort du navigateur utilisé et cela est frustrant aussi.
  
- Y a-t-il des types en JavaScript ? Si oui, lesquels ?
`Oui il existent des types : string , number , undefined , null , boolean, symbol et object. Beaucoup de personnes se trompent pensant que Array est aussi un type, alors que ceci n'est qu'un objet lui-meme.`

- Est-ce que SASS est un langage qui est interprété par les navigateurs ?
`Non, le navigateur ne peut interpreter rien d'autre que du HTML, CSS et Javascript. Le code écrit en SASS doit d’abord etre converti en CSS avant que le système ne livre le code source.`

- Pourquoi peut-on dire que JavaScript est un langage "multi-paradigmes" ? **(s)**
`Parce que malgré sa forte tendance fonctionnelle, on peut faire de l'orienté-objet avec Javascript grace aux classes introduite avec la version ES6. Ceci dit, JS donne le mieux de soit en fonctionnelle grace aux fonctions d'ordre supérieur (comme les callbacks).`
  
- En JS, une fonction peut-elle retourner une fonction ?
`Oui, car en Javascript les fonctions sont considérées des "citoyens de première classe", càd elle peuvent etre stockées dans des variables et traitées comme telles. Donc une fonction peut retourner une variable, qui est elle-meme une fonction.`

- Est-ce que `alert` existe en Node.JS ?
`Non parce que c'est un element lié à l'objet window, qui n'existe pas dans Node.js. Donc 'alert' ne peut pas etre executé en dehors du contexte d'une page web.`

- Est-ce que `window.console.log === console.log` dans le navigateur ?
`Oui. En effet, dans un navigateur l'objet "window" est une variable global. Par contre, il ne l'est pas dans d'autres environnements comem Node.js. On peut utiliser window.console pour verifier si la console est disponible (ce qui n'est pas possible par exemple dans les navigateur pour mobile).`

- Quel est votre aspect préféré de JavaScript ? **(s)**
`Personnellement je n'aime pas trop les languages typés comme C#, parce qu'ils sont très difficiles à apprendre et coder dans un premier temps et il faut parser tout le temps - avec JS, on "skippe" cette partie. Mais mon aspect préféré est certainement la possibilité d'intéragir directement avec le browser sans devoir passer par des interface compliquées et par un serveur. J'aime cette option d'autant plus depuis que je connais le LocalStorage, qui permet de sauvegarder les données clients, meme si de forme limitée.`

## Épreuve pratique sur 80pts
Vous êtes codeuse/codeur JavaScript dans une clinique du centre-ville.
Vous développez un outil de pré-commande de vaccins dans les stocks publics de la ville, pour les responsables d'équipes médicales.
Votre site doit permettre à ces personnes de réserver différents types de vaccins parmi ceux en cours de développement.

Cloner et utiliser cette "seed" pour produire votre Single Page Application.

Le script `./script.js` est déjà lié à la page `./index.html` grâce à Parcel, de même que `style.scss` - il ne faut donc rien changer dans cette architecture (ne jamais toucher le HTML, garder le lien vers les styles dans le script).

- supprimer le dossier ".git" à la racine du clone
- créer votre propre repo/remote sur votre github et l'associer à votre clone du projet
- `npm install` installe les packages de la seed
- `npm start` lance la seed en mode "développement"
- add, commit, et push réguliers sont recommandés

### Modéliser les données
Produire un fichier data.js dans `./src`, qui exporte un Array d'objets avec les data suivantes:
#### Vaccin 1
Nom: BBIBP-CorV  
Inventeurs: Sinopharm  
Lieux de production: Chine  
Technologie: virus inactivé  
Quantité: 420  
Prix unitaire: 17$  
Approuvé: oui  
#### Vaccin 2
Nom: Sputnik V  
Inventeurs: Gamaleya  
Lieux de production: Russie, Inde  
Technologie: adenovirus  
Quantité: 130  
Prix unitaire: 12$  
Approuvé: non  
#### Vaccin 3
Nom: AZD1222  
Inventeurs: AstraZeneca, University of Oxford  
Lieux de production: Royaume Unis, Brésil, Inde  
Technologie: adenovirus  
Quantité: 5028  
Prix unitaire: 1.78$  
Approuvé: non  
#### Vaccin 4
Nom: Tozinameran  
Inventeurs: BioNTech, Pfizer, Fosun Pharma  
Lieux de production: Allemagne, USA  
Technologie: ARN messager  
Quantité: 980  
Prix unitaire: 14$  
Approuvé: oui  
#### Vaccin 5
Nom: mRNA-1273  
Inventeurs: Moderna, NIAID, BARDA  
Lieux de production: USA  
Technologie: ARN messager  
Quantité: 240  
Prix unitaire: 28$  
Approuvé: non  
#### Vaccin 6
Nom: Ad26.COV2.S  
Inventeurs: Johnson & Johnson, BIDMC  
Lieux de production: USA, Amérique du Sud, Ukraine, Afrique du Sud  
Technologie: adenovirus  
Quantité: 110  
Prix unitaire: 31$  
Approuvé: non  

### Transformer les données en éléments du DOM
Les éléments suivants sont créés dans la div `#app` via JavaScript:
- un `h1` avec le nom du site
- un élément `header`, présentant 
  - un bouton pour classer les vaccins par prix
  - un bouton pour cacher les vaccins "non approuvés" 
- un élément HTML `main`. 
  - c'est le catalogue montrant tous les vaccins sous forme de "cartes", côte à côte ou à la ligne
  - chaque carte présente 
    - une image de vaccin (présente dans le dossier "static")
    - toutes les infos disponibles pour ce vaccin
    - un "input" de "quantité" et un bouton "réserver" à côté
- un élément `footer` résume la commande en cours (vide au début), et contient un bouton "passer la commande"

### Manipulation du DOM et interaction utilisateur
- Lorsque l'utilisateur clique sur "cacher les vaccins non approuvés" les vaccins non approuvés sont cachés. On peut désormais les re-montrer grâce au même bouton
- Lorsqu'un utilisateur clique sur le bouton "réserver" d'une carte de vaccin
  - le vaccin apparaît dans la commande du `footer`, avec la quantité demandée (ex: Tozinameran x3)
  - l'input de quantité disparaît de la carte
  - le bouton "réserver" de ce vaccin devient `disabled`
- Lorsqu'un utilisateur clique sur "passer la commande" dans le `footer`:
  - la page se vide entièrement
  - un message indique "La commande a bien été enregistrée..."

### Bonus (pas compté dans les points - peut réhausser la note finale):
- sur cet écran final, un bouton "Annuler la commande" permet de  recharger automatiquement la page dans son état initial
- le bouton "classer les vaccins par prix" fonctionne, et réordonne les cartes du vaccin le moins cher au plus cher
- Améliorer l'affichage de votre site grâce aux SCSS
- L'action de passer commande lorsqu'il n'y a pas de commande est impossible
- Un bouton dans le `footer` permet d'annuler toute la réservation d'un coup
- Il est impossible de commander plus de vaccins que les quantités existantes
- Le calcul exact des prix, vaccins par vaccins, et le total du prix final sont ajoutés dans le footer
- Ils sont aussi rappelés dans la page suivante
