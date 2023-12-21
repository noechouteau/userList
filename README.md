# ❗ LOGIN DE TEST
- **login** : test
- **password** : testtest

# 🅰️ UserList (Angular User Account Management Application)

Ce dépôt contient une application Angular (UserList) développée dans le cadre d'un TP visant à revisiter les concepts clés abordés en cours. L'objectif principal de cette application est de mettre en pratique les principes fondamentaux du développement en Angular. Les différents points abordés dans ce TP sont les suivants :

1. **Principes de développement en Angular**
   - Application des bonnes pratiques de développement Angular.
   - Utilisation des modules, composants, services et directives (au sein d'Angular 17).

2. **Interactions avec l'utilisateur au sein des composants**
   - Gestion des interactions utilisateur dans les composants Angular.

3. **Interactions au sein d'une hiérarchie de composants**
   - Organisation des composants en hiérarchie pour une gestion efficace des interactions.

4. **Directives ngIf et ngFor**
   - Utilisation des directives Angular pour la manipulation dynamique du DOM.

5. **Services, notamment Http**
   - Mise en œuvre de services Angular, en mettant l'accent sur les requêtes HTTP pour la gestion des comptes utilisateur.

6. **Routing**
   - Mise en place de la navigation à l'aide du système de routage d'Angular.

## ⚙️ Fonctionnalités de l'Application

L'application développée dans le cadre de ce TP permet la gestion et la manipulation des comptes d'utilisateurs. Les principales fonctionnalités sont les suivantes :

- **Ajout** de nouveaux comptes utilisateurs, via le bouton "Add". L'ajout d'un nouveau compte utilisateur est effectué à l'aide d'un formulaire de saisie représenté par un composant dédié.

- **Consultation** des comptes utilisateurs existants, via le bouton "Details". La consultation d'un compte utilisateur est effectuée à l'aide d'un composant dédié également.

- **Mise à jour** des comptes utilisateurs existants, via le bouton "Update". La mise à jour d'un compte utilisateur est effectuée à l'aide d'un formulaire de saisie représenté, encore une fois, par un composant dédié.

- **Suppression** des comptes utilisateurs existants, via le bouton "Delete". La suppression d'un compte utilisateur s'effecture directement à partir de la liste des comptes utilisateurs, et demandera une confirmation de la part de l'utilisateur via une boîte de dialogue.

- **Copie** des comptes utilisateurs existants, via le bouton "Copy". La copie d'un compte utilisateur s'effectue aussi directement à partir de la liste des comptes utilisateurs.

- **Filtrage** des comptes utilisateurs existants, via le champ de recherche. Le filtrage des comptes utilisateurs s'effectue directement à partir de la liste des comptes utilisateurs, et permet de filtrer les comptes utilisateurs par nom, email ou emploi.

- **Tri** des comptes utilisateurs existants, via les flèches situées à côté de chacun des champs de la première ligne. Le tri des comptes utilisateurs s'effectue directement à partir de la liste des comptes utilisateurs, et permet de trier les comptes utilisateurs par nom, email ou emploi.

- **Pagination** des comptes utilisateurs existants, via les flèches en bas du tableau. La pagination des comptes utilisateurs s'effectue directement à partir de la liste des comptes utilisateurs, et permet de naviguer entre les différentes pages de la liste des comptes utilisateurs mais également de définir le nombre de comptes utilisateurs à afficher par page.

- **Nécessité de se connecter** pour accéder à la liste des comptes utilisateurs. La connexion s'effectue à l'aide d'un formulaire de saisie représenté par un composant dédié. Si l'utilisateur n'est pas connecté, il sera redirigé vers la page de connexion.

- **Export** des comptes utilisateurs existants, via le bouton "Export data". L'export des comptes utilisateurs s'effectue directement à partir de la liste des comptes utilisateurs, et permet d'exporter les comptes utilisateurs au format CSV.

L'application possède également un système de "snackbar" qui permet d'afficher des messages d'information à l'utilisateur si jamais l'une des opérations précédentes a été effectuée avec succès.

## 💾 Gestion du backend

L'application développée dans le cadre de ce TP utilise un backend mis en place à l'aide de l'outil MockAPI. Cet outil a ainsi généré une cinquantaine de comptes utilisateurs, qui possèdent les champs suivants :

- `id` : identifiant unique du compte utilisateur.
- `name` : nom du compte utilisateur.
- `email` : email du compte utilisateur.
- `occupation` : emploi du compte utilisateur.
- `bio` : description du compte utilisateur.
- `avatar` : avatar du compte utilisateur. Ce dernier est représenté par une URL, qui pointe vers une image hébergée sur n'importe quel serveur.

Il est important de noter que seul le champ `avatar` n'est pas obligatoire. Ainsi, si l'utilisateur ne fournit pas d'avatar lors de la création d'un nouveau compte utilisateur, le champ sera automatiquement rempli avec une URL pointant vers une image générée par MockAPI. Si l'utilisateur fournit une URL erronée, le champs sera alors rempli avec une URL pointant vers une image par défaut.

Pour le login, l'application vérifie encore une fois les informations fournies par l'utilisateur à l'aide de MockAPI. Ainsi, si l'utilisateur fournit des informations erronées, il ne pourra pas accéder à la liste des comptes utilisateurs. Vous pourrez retrouver des login pour tester plus haut dans le README. Il n'est cependant pas possible de créer de nouveaux comptes sur UserList.

## 🛜 Installation
Pour installer l'application, il suffit de cloner le dépôt Gitlab et d'installer les dépendances à l'aide de la commande `npm install`.

## 🚀 Lancement
Pour lancer l'application, il suffit d'exécuter la commande `ng serve` et de se rendre à l'adresse `http://localhost:4200/`.

## 🗃️ Livrables

- **Lien vers la page mise en production :** [URL de la page hébergée sur vercel](lien_vers_la_page).
  
- **Lien vers le dépôt Gitlab :** [Dépôt Gitlab](https://forge.univ-lyon1.fr/p2102056/tp-note-angular).