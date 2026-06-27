# Modern Angular & TypeScript Portfolio Frontend

<div align="center">

[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg?style=for-the-badge)](https://www.gnu.org/licenses/agpl-3.0)

**A high-performance, SEO-optimized, and fully responsive developer portfolio showcase.**

[English Version](#-english-version) • [Version Française](#-version-française)

---

</div>

---

## 🇬🇧 English Version

Welcome to the frontend repository of my personal portfolio. This application serves as a digital vitrine to showcase my engineering skills, professional experiences, and creative projects. Built with performance, accessibility, and modern aesthetics in mind.

### 🎯 Project Objectives & SEO Strategy
*   **Professional Vitrine:** Designed to convert visitors into clients or recruiters by highlighting key skills and achievements.
*   **Search Engine Optimization (SEO):** Engineered with semantic HTML5 elements, meta-tags structure, optimized asset loading, and schema markup to rank highly for developer search queries.
*   **Responsive & Accessibility-first (a11y):** Ensuring a fluid user experience from high-resolution desktop monitors down to mobile devices, adhering to modern accessibility guidelines.

### 🛠️ Tech Stack & Architecture
*   **Framework:** [Angular](https://angular.io/) (v21.2.7) - Utilizing its robust component model, dependency injection, and modern reactive features.
*   **Language:** [TypeScript](https://www.typescriptlang.org/) - Guaranteeing type safety, maintainability, and clean code principles.
*   **Styling:** Custom CSS/SCSS designed with glassmorphic elements, smooth gradients, and micro-animations for a premium user feel.
*   **Routing & State:** Clean modular routing for seamless Single Page Application (SPA) transitions.

### ✨ Key Features
*   **Dynamic Project Showcase:** Filter and browse projects by categories/technologies.
*   **Interactive Skills Section:** Visual progress indicators and categorized expertise blocks.
*   **Contact Form Integration:** Fully validated reactive forms with security checks.
*   **Interactive Visuals:** Soft dark/light modes, animations, and transitions.

### 🧩 Component Architecture

#### `NavBar` — Floating Tubelight Navigation

Located at `src/app/components/navbar/`.

A floating pill-shaped navigation bar inspired by the *tubelight navbar* design pattern. It sits fixed at the **top on desktop** and at the **bottom on mobile**, showing text labels on wide screens and icon-only on small screens.

**Adding or removing a nav link** only requires editing the `navLinks` array in `navbar.ts`:

```typescript
navLinks: NavLink[] = [
  { label: 'Home',     path: '/',         icon: 'home'      },
  { label: 'About',    path: '/about',    icon: 'user'      },
  { label: 'Projects', path: '/projects', icon: 'briefcase' },
  { label: 'Contact',  path: '/contact',  icon: 'mail'      },
];
```

**Icons** are zero-dependency inline SVGs (paths sourced from [Lucide Icons](https://lucide.dev)). Available icon keys and their corresponding SVGs are declared via a `@switch` block in `navbar.html`. To add a new icon:
1. Pick an icon on [lucide.dev](https://lucide.dev) and copy its SVG `<path>` data.
2. Add a new `@case` in `navbar.html` with a descriptive key string.
3. Extend the `icon` union type in `navbar.ts`.
4. Use that key in the `navLinks` array.

| Property | Type | Description |
|---|---|---|
| `label` | `string` | Text displayed on desktop |
| `path` | `string` | Angular router path |
| `icon` | `'home' \| 'user' \| 'briefcase' \| 'mail'` | SVG icon key |

### 🚀 Getting Started

#### Prerequisites
*   Node.js (v18.x or later)
*   npm (v9.x or later)
*   Angular CLI

#### Installation & Development
1.  Clone the repository:
    ```bash
    git clone https://github.com/Martzcode/my-portfolio-frontend.git
    cd my-portfolio-frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    ng serve
    ```
    Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Testing
*   **Unit Tests:** Run `ng test` to execute unit tests using the [Vitest](https://vitest.dev/) test runner.
*   **End-to-End Tests:** Run `ng e2e` to execute e2e tests.

#### Production Build
To build the project for production, run:
```bash
ng build
```
The build artifacts will be stored in the `dist/` directory, optimized for performance and speed.

---

## 🇫🇷 Version Française

Bienvenue sur le dépôt du frontend de mon portfolio personnel. Cette application sert de vitrine numérique pour exposer mes compétences techniques, mes réalisations professionnelles et mes projets créatifs. Développée avec un accent particulier sur la performance, l'accessibilité et un design moderne.

### 🎯 Objectifs du Projet et Stratégie SEO
*   **Vitrine Professionnelle :** Conçue pour attirer et convaincre les recruteurs ou clients potentiels en mettant en valeur mes savoir-faire.
*   **Optimisation SEO (Référencement Naturel) :** Intégration de balises sémantiques HTML5, de méta-données optimisées et d'une structure performante pour un excellent classement sur les moteurs de recherche.
*   **Responsive & Accessibilité :** Expérience utilisateur fluide et adaptative du mobile à l'ordinateur, respectant les normes d'accessibilité web.

### 🛠️ Stack Technique & Architecture
*   **Framework :** [Angular](https://angular.io/) (v21.2.7) - Exploitation des composants, de l'injection de dépendances et de la programmation réactive.
*   **Langage :** [TypeScript](https://www.typescriptlang.org/) - Typage fort pour une meilleure maintenabilité et un code propre et robuste.
*   **Design & Style :** CSS/SCSS sur mesure, incluant des effets de flou (glassmorphism), des dégradés subtils et des micro-animations interactives pour une esthétique premium.

### ✨ Fonctionnalités Principales
*   **Galerie de Projets Dynamique :** Consultation et filtrage des réalisations par technologie ou catégorie.
*   **Présentation des Compétences :** Visualisation claire des expertises techniques.
*   **Formulaire de Contact Interactif :** Formulaires réactifs validés en temps réel.
*   **Effets Visuels Premium :** Prise en charge des thèmes clair/sombre, transitions fluides et animations réactives.

### 🧩 Architecture des Composants

#### `NavBar` — Navigation Flottante Tubelight

Localisé dans `src/app/components/navbar/`.

Barre de navigation en forme de pilule flottante inspirée du design *tubelight navbar*. Elle se positionne en **haut sur desktop** et en **bas sur mobile**, affichant les labels texte sur grand écran et les icônes seules sur mobile.

**Ajouter ou supprimer un lien** ne nécessite de modifier que le tableau `navLinks` dans `navbar.ts` :

```typescript
navLinks: NavLink[] = [
  { label: 'Home',     path: '/',         icon: 'home'      },
  { label: 'About',    path: '/about',    icon: 'user'      },
  { label: 'Projects', path: '/projects', icon: 'briefcase' },
  { label: 'Contact',  path: '/contact',  icon: 'mail'      },
];
```

**Les icônes** sont des SVG inline sans aucune dépendance externe (chemins SVG issus de [Lucide Icons](https://lucide.dev)). Chaque icône disponible est déclarée via un bloc `@switch` dans `navbar.html`. Pour ajouter une nouvelle icône :
1. Choisir une icône sur [lucide.dev](https://lucide.dev) et copier son `<path>` SVG.
2. Ajouter un `@case` dans `navbar.html` avec une clé descriptive.
3. Étendre le type union `icon` dans `navbar.ts`.
4. Utiliser cette clé dans le tableau `navLinks`.

| Propriété | Type | Description |
|---|---|---|
| `label` | `string` | Texte affiché sur desktop |
| `path` | `string` | Route Angular |
| `icon` | `'home' \| 'user' \| 'briefcase' \| 'mail'` | Clé de l'icône SVG |

### 🚀 Démarrage Rapide

#### Prérequis
*   Node.js (v18.x ou supérieur)
*   npm (v9.x ou supérieur)
*   Angular CLI

#### Installation et Développement
1.  Cloner le projet :
    ```bash
    git clone https://github.com/Martzcode/my-portfolio-frontend.git
    cd my-portfolio-frontend
    ```
2.  Installer les dépendances :
    ```bash
    npm install
    ```
3.  Lancer le serveur de développement :
    ```bash
    ng serve
    ```
    Rendez-vous sur `http://localhost:4200/`. Le projet se recharge automatiquement lors de modifications des fichiers sources.

#### Tests
*   **Tests Unitaires :** Lancez `ng test` pour exécuter les tests unitaires avec le moteur [Vitest](https://vitest.dev/).
*   **Tests E2E :** Lancez `ng e2e` pour exécuter les tests d'intégration de bout en bout.

#### Build de Production
Pour compiler le projet pour la production :
```bash
ng build
```
Les fichiers compilés seront générés dans le dossier `dist/`.

---

## 📄 License
Distributed under the GNU Affero General Public License v3 (AGPL-3.0). See `LICENSE` for more information.
