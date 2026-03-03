# Documentation Technique - Site Web Ilon'ALA Madagascar

## 1. Introduction
Cette documentation s'adresse aux développeurs qui intégreront ou feront évoluer le site web Ilon'ALA. Le projet a été conçu avec une structure favorisant une transition naturelle du prototype vers une application de production robuste.

## 2. Architecture du Projet (Séparation Front/Back)
Le projet est séparé en deux répertoires principaux pour faciliter le déploiement et l'administration :
- **/frontend :** Code React (Vite-powered), composants UI, pages, actifs (images), et contextes de l'application.
- **/backend :** Architecture de service (Simulation via localStorage), schéma de base de données (SQL), et services partagés.

## 3. Technologies Utilisées
- **Frontend :**
  - **React :** Bibliothèque UI principale.
  - **Vite :** Outil de build rapide.
  - **Tailwind CSS :** Framework CSS utilitaire pour le design premium.
  - **Lucide React :** Bibliothèque d'icônes modernes.
  - **Radix UI :** Composants accessibles (via Shadcn/UI).
- **Backend (Simulé) :**
  - **Service Store :** Une simulation CRUD utilisant le `localStorage` de l'utilisateur.

## 4. Gestion de l'État (Contextes)
L'application utilise l'API Context de React pour gérer les données globales :
- **LanguageContext :** Gère la traduction (FR/EN) et les fonctions de traduction (`t`).
- **CartContext :** Gère le panier d'achat, les quantités, les calculs de totaux et la persistance.

## 5. Données (Services & Simulation)
Le dossier `backend/services/store.ts` contient toute la logique de persistance :
- **ordersStore :** CRUD pour les commandes.
- **quotesStore :** CRUD pour les demandes de devis.
- **clientsStore :** CRUD pour les profils clients.
- **messagesStore :** CRUD pour les messages de contact.
- **adminAuth :** Simulation de l'authentification administrateur.

Ces stores peuvent être facilement remplacés par des appels API REST (Node.js/Express) ou des services comme Supabase dans le futur.

## 6. Structure du Catalogue
Le catalogue (`Catalogue.tsx`) est structuré en sections par catégorie de produit. 
Les produits sont filtrés par onglet (Naturel vs Pépinière) et sous-filtrés par catégorie technique (huiles, épices, etc.).

## 7. Migration Future (To-Do)
1. **API Backend :** Créer un serveur Node.js avec Express.
2. **Base de Données :** Intégrer PostgreSQL en utilisant le schéma fourni dans `backend/db/schema.sql`.
3. **Paiement :** Intégrer les APIs Mvola, Orange Money et PayPal pour les paiements réels.
4. **Dashboard :** Étendre les fonctionnalités d'administration pour inclure la gestion d'inventaire.
