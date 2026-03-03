# Ilon'Ala Madagascar — Backend

## Architecture

Ce dossier contient toute la logique backend du projet Ilon'Ala.

### Structure

```
backend/
├── README.md                  # Ce fichier
├── package.json               # Dépendances backend
├── db/
│   └── schema.sql             # Schéma de base de données (PostgreSQL)
├── models/
│   └── types.ts               # Types partagés (Order, Quote, Client, etc.)
├── services/
│   └── store.ts               # Service de stockage (localStorage → API)
├── api/
│   └── routes.ts              # Endpoints API (futur Express/Node.js)
└── config/
    └── index.ts               # Configuration backend
```

### Actuellement

Le backend utilise **localStorage** comme simulation de base de données.
Cela permet de développer le frontend de manière indépendante sans serveur.

### Migration future

Quand le backend sera prêt :
1. Remplacer `store.ts` par des appels API REST/GraphQL
2. Connecter à PostgreSQL/Supabase avec le schéma `schema.sql`
3. Déployer le serveur Node.js/Express séparément
4. Le frontend n'aura qu'à changer les imports dans `src/lib/` → `backend/services/`

### Technologies prévues

- **Node.js + Express** ou **Supabase** pour l'API
- **PostgreSQL** pour la base de données
- **WooCommerce API** (optionnel) pour le e-commerce
- **Stripe / PayPal / Mvola** pour les paiements
