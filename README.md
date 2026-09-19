# 🛒 UNIMALL — Plateforme E-Commerce & Gestion de Livraisons Multi-Rôles

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/fr/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Design-Responsive%20%7C%20Mobile--First-success?style=for-the-badge)](https://developer.mozilla.org)

**UNIMALL** est une solution web e-commerce complète et intuitive conçue pour digitaliser l'expérience d'achat en supermarché, gérer les inventaires en temps réel et coordonner la logistique de livraison du vendeur au client final.

---

## 🌟 Modules & Architecture Multi-Rôles

### 🛍️ 1. Vitrine Client & E-Shop (`index.html`)
* **Catalogue dynamique par rayons :** Épicerie, Mode, Chaussures, Produits frais, Boissons et Électronique.
* **Moteur de recherche intelligent :** Barre de recherche avec autocomplétion et suggestions instantanées (`searchSuggestions`).
* **Panier interactif & Remises :** Calcul dynamique du total, gestion des quantités et application de codes promotionnels.
* **Tunnel d'achat fluide :** Sélection de l'adresse de livraison et choix du mode de paiement (Mobile Money, Espèces à la livraison).

### ⚙️ 2. Back-Office Administrateur (`admin.html`)
* **Gestion des stocks & Produits :** Ajout, modification, suppression (CRUD) et mise en avant des promotions.
* **Suivi des commandes en temps réel :** Réception des nouvelles commandes, changement de statut et historique des ventes.
* **Attribution des courses :** Assignation automatique ou manuelle des livraisons aux coursiers disponibles.
* **Statistiques financières :** Chiffre d'affaires journalier/mensuel et volume de commandes.

### 🛵 3. Espace Livreur Mobile-First (`Livreur.html`)
* **Tableau de bord coursier :** Liste des livraisons assignées avec détails des articles, coordonnées clients et adresses.
* **Mise à jour des statuts en 1-clic :** Prise en charge, en cours d'acheminement, commande livrée ou incident.
* **Optimisation de tournée :** Interface épurée et pensée pour une utilisation sur smartphone en mobilité.

---

## 🛠️ Stack Technique

* **Structure & UI :** HTML5 Sémantique, FontAwesome Icons.
* **Styles & Responsive :** Vanilla CSS3 (Variables CSS, Flexbox, CSS Grid, Glassmorphism, animations fluides).
* **Logique & State Management :** Vanilla JavaScript (ES6+), manipulation du DOM, persistance des données via `localStorage`.
* **Compatibilité :** 100% compatible navigateurs mobiles et desktop, sans framework lourd.

---

## 📁 Structure du Répertoire

```
├── index.html        # Vitrine e-commerce et tunnel d'achat client
├── admin.html        # Tableau de bord et gestionnaire d'inventaire
├── Livreur.html      # Interface dédiée aux livreurs et coursiers
├── Script.js         # Logique applicative, gestion du panier et synchronisation
├── style.css         # Feuilles de style globales et design system
├── .gitignore        # Fichiers ignorés par Git
└── README.md         # Documentation du projet
```

---

## 🚀 Lancement Rapide

### Prérequis
Aucune installation serveur lourde n'est requise. Un simple navigateur web ou une extension de serveur local (comme VS Code Live Server) suffit.

### 1. Cloner le projet
```bash
git clone https://github.com/Alya351/UNIMALL.git
cd UNIMALL
```

### 2. Ouvrir l'application
* **Vitrine Client :** Ouvrez [`index.html`](index.html) dans votre navigateur.
* **Espace Administration :** Ouvrez [`admin.html`](admin.html).
* **Espace Livreur :** Ouvrez [`Livreur.html`](Livreur.html).

---

## 👩‍💻 Auteur

**Kiemde Banyala Latifa Alya**  
*Élève Ingénieure en Systèmes Numériques & Développeuse Fullstack*  
*ISGE-BF (Institut Supérieur de Génie Électrique du Burkina Faso)*
