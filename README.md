# React Registration Form App

## Description

Cette application React permet de gérer un formulaire d'inscription multi-étapes. L'utilisateur peut suivreson avancé grace à un système de `step indicators` et compléter les informations requises à chaque étape.

## Structure du projet

- **`src/`** : Contient le code source de l'application.
  - **`components/`** : Composants réutilisables de l'application.
    - **`Header/`** : Gère le titre et les indicateurs de progression.
    - **`stepForms/`** : Contient les composants pour chaque étape du formulaire (`Step1Form.tsx`, `Step2Form.tsx`, `Step3Form.tsx`).
  - **`styles/`** : Fichiers de styles globaux et mixins (`variables.scss`, `mixins.scss`).
- **`public/`** : Contient les fichiers statiques comme `index.html`.

## Prérequis

- **Node.js** (version 14.x ou supérieure) : [Télécharger Node.js](https://nodejs.org/)
- **npm** (version 6.x ou supérieure) : Généralement inclus avec Node.js.

## Installation

1. **Cloner le dépôt :**

```bash
git clone https://github.com/Just1P/react-project.git

```

```bash
cd react-project

```

2. **Installer les dépendances:**

```bash
  npm install

```

3. **Lancer l'application:**

```bash
  npm run dev

```
