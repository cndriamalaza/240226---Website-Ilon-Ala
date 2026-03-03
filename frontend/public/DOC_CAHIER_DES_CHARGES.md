# Cahier des Charges - Site Web Ilon'ALA Madagascar

## 1. Présentation du Projet
Ilon'ALA est un projet malgache spécialisé dans la production et la distribution de produits naturels premium (huiles essentielles, épices, cosmétiques) et de plants de pépinière. Le site web doit refléter cette identité : naturelle, authentique, professionnelle et haut de gamme.

## 2. Objectifs du Site
- Présenter les produits (B2C) et les services pépinière/agribusiness (B2B).
- Faciliter la prise de contact pour des devis personnalisés.
- Permettre la commande en ligne avec un système de panier.
- Gérer les commandes et messages via une interface d'administration simplifiée.

## 3. Cibles
- **Particuliers (B2C) :** Consommateurs locaux et internationaux de produits naturels.
- **Professionnels (B2B) :** Grossistes, investisseurs agricoles, industries cosmétiques et pharmaceutiques.

## 4. Structure du Site (Arborescence)
- **Accueil :** Vitrine globale, mise en avant des catégories et philosophie.
- **Catalogue :** Navigation par onglets (Produits Naturels / Pépinière) avec filtres par catégories.
- **Détail Produit/Plant :** Fiche technique complète, bienfaits, origine, formats et demande de devis.
- **À Propos :** Histoire d'Ilon'ALA, valeurs, impact local et présentation du terroir.
- **Qualité & Sourcing :** Processus de production, traçabilité et certifications.
- **Agribusiness :** Services dédiés aux professionnels (agro-foresterie, conseil).
- **Contact :** Formulaire complet, informations de paiement et zones de livraison.
- **Admin :** Tableau de bord pour la gestion des commandes, devis, clients et messages.

## 5. Fonctionnalités Clés
- **Multilingue :** Français et Anglais.
- **Simulation E-commerce :** Panier persistant (localStorage), calcul du total, formulaire de commande.
- **Simulation Backend :** Gestion des données via un simulateur `store.ts` pour faciliter l'intégration future.
- **Responsive Design :** Optimisé pour mobiles, tablettes et ordinateurs.

## 6. Identité Visuelle
- **Couleurs :** Vert botanique (#1A3C34), Or (#C8A84E), Blanc cassé, Anthracite.
- **Typographie :** Sérif pour les titres (élégance, tradition), Sans-sérif pour le corps (lisibilité, modernité).
- **Imagerie :** Photos haute qualité de Madagascar, des plantations et des produits.

## 7. Stack Technique
- **Frontend :** React, Vite, Tailwind CSS, Lucide React, Radix UI.
- **Contextes :** LanguageContext, CartContext.
- **Structure :** Séparation Front/Back prévue pour une évolution vers Node.js/PostgreSQL.
