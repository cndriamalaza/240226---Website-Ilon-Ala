# Guide Pas-à-Pas : Créer Ilon'ALA avec WordPress, WooCommerce et Hostinger (Sans Code)

Ce guide est conçu pour vous permettre de reproduire votre site **Ilon'ALA** de manière simple et visuelle, sans toucher à une seule ligne de code.

---

## 🚀 Étape 1 : Préparation de l'hébergement (Hostinger)

1.  **Connexion** : Connectez-vous à votre [hPanel Hostinger](https://hpanel.hostinger.com).
2.  **Installation de WordPress** : 
    - Allez dans la section **Sites Web** -> **Ajouter un site**.
    - Choisissez **WordPress**.
    - Remplissez les informations (Nom du site : *Ilon'ALA Madagascar*, Email et Mot de passe Administrateur). **Gardez précieusement ce mot de passe.**
3.  **Activation du SSL** : Dans le tableau de bord Hostinger, cherchez "SSL" et assurez-vous qu'il est activé pour que votre site soit en `https://` (sécurisé).

---

## 🎨 Étape 2 : L'Apparence (Le Design Premium)

Une fois connecté à votre tableau de bord WordPress (`votre-site.com/wp-admin`) :

1.  **Installer le Thème** : 
    - Allez dans **Apparence** -> **Thèmes** -> **Ajouter**.
    - Cherchez **Astra**. Cliquez sur **Install** puis **Activate**.
2.  **Installer le Constructeur Visuel** :
    - Allez dans **Extensions** -> **Ajouter**.
    - Cherchez **Elementor**. Installez et activez. 

### 📐 Comment reproduire vos sections actuelles (Sans Code)

Voici comment refaire vos blocs **React** avec la souris dans Elementor :

#### 1. La Section "Hero" (L'accueil avec l'image botaniste)
*   **Dans Elementor** : Créez une **Section** à une colonne. 
*   **Style** : Mettez votre image de pépinière ou de nature en fond (Background).
*   **Contenu** : Ajoutez un widget **Titre** (H1) en blanc et un widget **Bouton** "Découvrir le Catalogue" avec une couleur de fond Or (`#D4AF37`).

#### 2. Le Catalogue (Produits & Pépinières)
*   **Mise en page** : Utilisez le widget **"Product Archive"** de WooCommerce ou simplement des widgets **Image + Titre**.
*   **Les Cartes (Product Cards)** : 
    - Chaque produit doit avoir une bordure arrondie légère.
    - Ajoutez un effet "Hover" (survol) pour que l'image s'agrandisse un peu quand on passe la souris.
*   **Filtrage** : Allez dans **Apparence** -> **Widgets** et tirez le bloc "Filtrer par catégorie" dans la barre latérale.

#### 3. Section Sourcing & Qualité (Textes & Photos)
*   **Structure** : Créez une section à **2 colonnes**.
*   **Gauche** : Mettez une photo d'un producteur local ou d'une forêt.
*   **Droite** : Ajoutez un widget **Éditeur de texte** avec une police élégante (Sérif) pour raconter l'histoire d'Ilon'ALA.

#### 4. Le Panier Coulissant (Drawer)
*   Par défaut, WordPress ouvre une page "Panier".
*   Pour avoir l'effet coulissant que vous avez sur React, installez l'extension gratuite **"Side Cart WooCommerce"**.
*   Il affichera un panneau sur la droite quand on clique sur l'icône du panier.

---

## 🛒 Étape 3 : Le Moteur de Vente (WooCommerce)

1.  **Installation** : Allez dans **Extensions** -> **Ajouter** -> Cherchez **WooCommerce**. Installez et activez.
2.  **Configuration Rapide** : Suivez l'assistant (pays : Madagascar, devise : Ariary ou Euro).
3.  **Ajouter un Produit** :
    - Allez dans **Produits** -> **Ajouter**.
    - Mettez le nom (ex: *Huile Essentielle de Géranium*), une belle photo, le prix et une description.
    - Cliquez sur **Publier**.

---

## 🌍 Étape 4 : Les Fonctions Spéciales (Multilingue & Devis)

1.  **Site en 2 Langues (FR/EN)** :
    - Installez l'extension **Polylang**. 
    - Elle ajoutera un petit drapeau pour basculer entre le français et l'anglais.
2.  **Demande de Devis (Pour les pépinières B2B)** :
    - Installez **YITH WooCommerce Request a Quote**. 
    - Cela remplace le bouton "Acheter" par "Demander un devis" pour les gros volumes de plants.

---

## 📱 Étape 5 : Paiements Mobiles (Mvola)

Pour accepter Mvola gratuitement au début :
1.  Allez dans **WooCommerce** -> **Réglages** -> **Paiements**.
2.  Activez **Virement bancaire**.
3.  Changez le titre en : **"Paiement par Mobile Money (Mvola / Orange Money)"**.
4.  Dans la description, expliquez : *"Veuillez envoyer votre paiement au 034 XX XX XXX. Votre commande sera validée dès réception."*

---

## ✅ Checklist Finale pour Bien Démarrer

- [ ] **Images** : Utilisez des photos lumineuses de vos produits.
- [ ] **Mobile** : Vérifiez toujours que le rendu est beau sur votre téléphone (Elementor a un bouton "Mode Responsive" en bas à gauche).
- [ ] **Contact** : Créez une page "Contact" simple avec un formulaire pour que les clients puissent vous écrire.

---

> [!NOTE]
> Ce guide ne remplace pas votre projet actuel en **React/Vite**. C'est une alternative "No-Code" si vous souhaitez une gestion plus simple au quotidien via une interface visuelle.
