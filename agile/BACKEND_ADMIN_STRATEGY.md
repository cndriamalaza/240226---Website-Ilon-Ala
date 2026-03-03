# Ilon'Ala Madagascar — Stratégie d'Administration & Gestion (Back-End)

Ce document détaille la stratégie recommandée pour la mise en place du système d'administration (Back-Office) d'Ilon'Ala, optimisé pour la gestion des produits naturels, de la pépinière et de l'export.

---

## 1. Vision UX/UI pour l'Interface Admin

En tant qu'expert UX/UI, l'objectif est de minimiser la charge cognitive pour l'administrateur tout en maximisant la précision des données.

### Principes Clés :
- **Tableau de Bord Holistique** : Vue immédiate sur le stock faible, les nouvelles demandes de devis (B2B) et les commandes récentes (B2C).
- **Formulaires Multilingues Intelligents** : Utilisation de "Tabs" ou de colonnes côte à côte (FR/EN) pour éviter de naviguer entre deux pages pour traduire un produit.
- **Gestion Média "Drag & Drop"** : Téléchargement direct avec redimensionnement automatique pour optimiser les performances du Front-end.
- **Micro-interactions** : États de sauvegarde automatique pour éviter les pertes de données.

---

## 2. Architecture des Données (Schema)

### Produits & Pépinière
Un modèle unique ou deux modèles très proches, incluant :
- **Identification** : SKU, Nom, Nom Latin (crucial pour le B2B/Expert).
- **Catégorisation** : Essential Oils, Cosmetics, Spices, Food, Nursery.
- **Gestion de Stock** :
    - Quantité actuelle.
    - Seuil d'alerte.
    - Unité (Litres, kg, unités, caisses).
- **Tarification Dynamique** :
    - Prix Fixe (B2C).
    - Sur demande (B2B/Gros).
    - Gestion multi-devises (MGA/EUR/USD).

### Commandes & Devis
- Suivi du statut : *En attente, Confirmé, En préparation, Expédié, Livré*.
- Liaison avec les Clients (CRM intégré).

---

## 3. Workflow de Gestion des Stocks

1.  **Réception Distillerie** : À chaque fin de cycle de distillation (Manakara), entrée en stock simplifiée via tablette/mobile.
2.  **Sortie Vente B2C** : Déduction automatique via Stripe/Mvola lors de la commande.
3.  **Sortie Vente B2B** : Mise à jour manuelle ou via validation du bon de livraison.
4.  **Pépinière** : Suivi des cycles de croissance (étape de semis vs plant prêt à la vente).

---

## 4. Stratégie Technique Recommandée

### Option A : Headless CMS (Recommandé pour rapidité)
- **Strapi** ou **Directus** :
    - *Avantages* : Interface d'administration déjà prête, gestion multilingue native, API REST/GraphQL performante.
    - *Déploiement* : Sur un VPS Hostinger (Node.js).

### Option B : Custom Back-end (NestJS + PostgreSQL)
- **Avantages** : Contrôle total sur les logiques métiers complexes (calculs de frais d'export, gestion de quotas).

---

## 5. Prochaines Étapes de Mise en Œuvre

1.  **Initialisation du modèle de données** : Création des tables `products`, `nurseries` et `orders`.
2.  **Interface de Saisie** : Priorité sur l'ajout de produits pour remplacer les fichiers `.ts` statiques.
3.  **Système de Médias** : Configuration d'un stockage (S3 ou local) pour les photos HD des plantes.
4.  **Connecteurs de Paiement** : Intégration API pour Mvola et PayPal.

---

*Note : Cette documentation sera mise à jour au fur et à mesure du développement du Back-end.*
