# Dossier de Conception et de Réalisation : Projet Ilon'ALA Madagascar

## 1. Introduction & Vision
### 1.1 Présentation
Ilon'ALA Madagascar est une plateforme numérique haut de gamme dédiée à la valorisation des ressources naturelles malgaches (huiles essentielles, épices, produits de pépinière). Le projet vise à combler le fossé entre la production artisanale locale et le marché international premium (B2B et B2C).

### 1.2 Méthodologie Agile
Le projet suit une approche **Agile Scrum**, découpée en cycles itératifs (Sprints) de 1 à 2 semaines, permettant une grande flexibilité et une amélioration continue basée sur les retours utilisateurs.

---

## 2. Phase de Conception (Design Phase)

### 2.1 Analyse des Besoins
| Acteur | Besoin Principal | Fonctionnalité Clé |
| :--- | :--- | :--- |
| **Client B2C** | Acheter des produits naturels de qualité. | Panier, Paiement mobile (Mvola), Suivi. |
| **Investisseur B2B** | Commander des plants pour l'agribusiness. | Demande de devis personnalisée, Conseil. |
| **Administrateur** | Gérer les stocks, commandes et messages. | Dashboard dédié, Gestion des statuts. |

### 2.2 Architecture Technique
Le projet adopte une architecture **Découplée (Decoupled Architecture)** :
- **Frontend (Client) :** Développé avec **React + Vite** pour une réactivité maximale. Utilisation de **Tailwind CSS** pour une interface "Premium & Mobile-first".
- **Backend (Service Layer) :** Pour l'instant simulé via un `store.ts` solide pour permettre le prototypage rapide, prêt à être migré vers une API **Node.js/Express** avec une base de données **PostgreSQL**.
- **Gestion d'État :** Utilisation de l'API Context de React pour le multilingue (i18n) et le panier d'achat.

### 2.3 Modélisation des Données (Database Schema)
Les entités principales identifiées :
- **Produits / Plants** : Identifiant, nom, description, prix, stock, catégorie, terroir.
- **Commandes (Orders)** : Client, articles, total, statut de paiement, mode de livraison.
- **Devis (Quotes)** : Client, message spécifique, intérêt produit, statut révision.
- **Clients** : Nom, email, téléphone, historique d'achat, type (B2B/B2C).

---

## 3. Méthodologie de Réalisation (Agile Sprints)

### Sprint 0 : Initialisation & Socle Technique
- **Setup Environnement** : Initialisation du repo Git, configuration de Vite et Tailwind.
- **Identité Visuelle** : Définition de la charte graphique (Botanical Green, Gold, Whitespace).
- **Structure Dossier** : Séparation `/frontend` et `/backend`.

### Sprint 1 : Interface Utilisateur & Navigation (Current)
- **Header/Footer Premium** : Navigation dynamique, barre de recherche, sélecteur de langue.
- **Catalogue Dynamique** : Système d'onglets (Produits / Pépinière) et filtrage par sections.
- **Fiches Produits** : Composants `ProductCard` et `NurseryCard` interactifs.
- **Expérience Panier** : Drawer (panier coulissant) et persistance via `localStorage`.

### Sprint 2 : Logique Backend & Administration (En cours)
- **Simulation Store** : Création des services CRUD pour Commandes, Devis et Messages.
- **Tunnel de Commande** : Page Checkout, validation de formulaire et intégration des modes de paiement simulés (Mvola).
- **Dashboard Admin** : Vue d'ensemble des statistiques, gestion des statuts de commande en temps réel.

### Sprint 3 : Interactivité & Sourcing (Prochainement)
- **Page Qualité & Sourcing** : Storytelling sur l'origine des produits.
- **Page Agribusiness** : Services de conseil et pépinière forestière.
- **SEO & Performance** : Optimisation des balises Meta, compression d'images et chargement paresseux (Lazy loading).

---

## 4. Étapes Minutieuses de Réalisation Technique

### Étape 1 : Le Système de Traduction (i18n)
Implémentation d'un `LanguageContext` qui injecte une fonction `t(key)` dans tous les composants. Les dictionnaires sont séparés par langues (FR/EN) pour une maintenance aisée.

### Étape 2 : Le Store Persistant
Création d'une couche d'abstraction dans `/backend/services/store.ts`. Cette couche intercepte les requêtes de l'UI et les stocke dans le `localStorage`. Cela permet de tester TOUTE la logique backend sans avoir besoin d'un serveur actif dans l'immédiat.

### Étape 3 : Le Catalogue Structuré
Contrairement à une liste simple, le catalogue regroupe les produits par catégorie via un filtrage dynamique. Chaque section est une entité `section` HTML pour le SEO, avec des titres en sérif pour renforcer l'image de marque.

### Étape 4 : Sécurisation de l'Admin
Mise en place d'un système de protection de route via `adminAuth`. Même si simulé, il définit le cadre pour la future authentification JWT.

---

## 5. Conclusion & Futur
Le projet Ilon'ALA respecte les standards modernes de développement web. Sa structure modulaire permet une évolution vers une application SaaS complète tout en offrant dès maintenant une expérience utilisateur haut de gamme, fluide et parfaitement adaptée au marché malgache et international.
