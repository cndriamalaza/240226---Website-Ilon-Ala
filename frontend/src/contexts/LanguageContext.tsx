
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, Record<Language, string>> = {
    // ═══════════════════════════════════════
    // TOP BAR
    // ═══════════════════════════════════════
    'topbar.producer': { en: 'Direct Producer — Madagascar', fr: 'Producteur Direct — Madagascar' },
    'topbar.shipping': { en: '🌍 Worldwide Shipping', fr: '🌍 Expédition Mondiale' },

    // ═══════════════════════════════════════
    // NAVIGATION
    // ═══════════════════════════════════════
    'nav.home': { en: 'Home', fr: 'Accueil' },
    'nav.catalogue': { en: 'Products', fr: 'Produits' },
    'nav.nursery': { en: 'Nursery', fr: 'Pépinière' },
    'nav.about': { en: 'Our Story', fr: 'Notre Histoire' },
    'nav.about_menu': { en: 'About', fr: 'À propos' },
    'nav.quality': { en: 'Quality & Sourcing', fr: 'Qualité & Sourcing' },
    'nav.agribusiness': { en: 'Agribusiness', fr: 'Agribusiness' },
    'nav.contact': { en: 'Contact', fr: 'Contact' },
    'nav.quote': { en: 'Order', fr: 'Commander' },
    'nav.cart': { en: 'Cart', fr: 'Panier' },
    'nav.admin': { en: 'Admin', fr: 'Admin' },
    'nav.search': { en: 'Search', fr: 'Rechercher' },
    'nav.search_placeholder': { en: 'Search products…', fr: 'Rechercher un produit…' },
    'nav.tagline': { en: 'La goutte essentielle', fr: 'La goutte essentielle' },
    'nav.view_all_products': { en: 'View all products →', fr: 'Voir tous les produits →' },

    // ── Sub-menu: Products ──
    'nav.sub.essential_oils': { en: 'Essential Oils', fr: 'Huiles Essentielles' },
    'nav.sub.essential_oils_desc': { en: 'Direct producer, 100% pure', fr: 'Producteur direct, 100% pures' },
    'nav.sub.cosmetics': { en: 'Soaps & Cosmetics', fr: 'Savons & Cosmétiques' },
    'nav.sub.cosmetics_desc': { en: 'Handcrafted & natural', fr: 'Artisanaux & naturels' },
    'nav.sub.spices': { en: 'Spice & Delight', fr: 'Épice & Délice' },
    'nav.sub.spices_desc': { en: 'Vanilla, pepper, cinnamon…', fr: 'Vanille, poivre, cannelle…' },
    'nav.sub.honey': { en: 'Honey & Jams', fr: 'Miel & Confitures' },
    'nav.sub.honey_desc': { en: 'Wild harvests from Madagascar', fr: 'Récoltes sauvages de Madagascar' },
    'nav.sub.nursery': { en: 'Nursery Plants', fr: 'Pépinières' },
    'nav.sub.nursery_desc': { en: 'Cacao, clove, coffee seedlings…', fr: 'Plants de cacao, girofle, café…' },
    'nav.sub.agribusiness': { en: 'Agribusiness', fr: 'Agribusiness' },
    'nav.sub.agribusiness_desc': { en: 'B2B / Export / Wholesale', fr: 'B2B / Export / Grossiste' },

    // ── Sub-menu: About ──
    'nav.sub.story': { en: 'Our Story', fr: 'Notre Histoire' },
    'nav.sub.story_desc': { en: 'From field to finished product', fr: 'Du champ au produit fini' },
    'nav.sub.quality': { en: 'Quality & Sourcing', fr: 'Qualité & Sourcing' },
    'nav.sub.quality_desc': { en: 'Certifications & traceability', fr: 'Certifications & traçabilité' },
    'nav.sub.terroir': { en: 'Madagascar Terroir', fr: 'Madagascar / Terroir' },
    'nav.sub.terroir_desc': { en: 'A unique biodiversity', fr: 'Une biodiversité unique' },

    // ═══════════════════════════════════════
    // HERO
    // ═══════════════════════════════════════
    'hero.title': { en: 'The Essential Drop, Natural Well-Being.', fr: 'La Goutte Essentielle, Bien-Être Naturel.' },
    'hero.subtitle': { en: 'Essential Oils, Spices & Premium Nursery from our Own Plantations.', fr: 'Huiles Essentielles, Épices & Pépinière Premium de nos propres Plantations.' },
    'hero.download': { en: 'Download Catalogue', fr: 'Télécharger le Catalogue' },
    'hero.contact': { en: 'Contact on WhatsApp', fr: 'Contacter sur WhatsApp' },
    'hero.cta_products': { en: 'Discover Products', fr: 'Découvrir les Produits' },
    'hero.cta_nursery': { en: 'Explore Nursery', fr: 'Explorer la Pépinière' },

    // ═══════════════════════════════════════
    // HOME SECTIONS
    // ═══════════════════════════════════════
    'section.trust': { en: 'Why Choose ILON\'ALA?', fr: 'Pourquoi Choisir ILON\'ALA ?' },
    'section.products': { en: 'Our Natural Products', fr: 'Nos Produits Naturels' },
    'section.nursery': { en: 'Our Nursery Plants', fr: 'Nos Plants de Pépinière' },
    'section.categories': { en: 'Product Categories', fr: 'Catégories de Produits' },
    'section.philosophy': { en: 'Our Philosophy', fr: 'Notre Philosophie' },
    'section.welcome': { en: 'Welcome to Ilon\'ALA', fr: 'Bienvenue chez Ilon\'ALA' },
    'section.partner': { en: 'Partner with the Source', fr: 'Partenariat Direct avec la Source' },

    // Trust badges
    'trust.plantation': { en: 'Own Plantations', fr: 'Propres Plantations' },
    'trust.plantation.desc': { en: 'Full traceability from our own plantations in Madagascar.', fr: 'Traçabilité totale depuis nos propres plantations à Madagascar.' },
    'trust.export': { en: 'Worldwide Export', fr: 'Export Mondial' },
    'trust.export.desc': { en: 'Shipping to professionals and individuals worldwide.', fr: 'Livraison aux professionnels et particuliers dans le monde entier.' },
    'trust.quality': { en: 'Premium Quality', fr: 'Qualité Premium' },
    'trust.quality.desc': { en: '100% pure, natural, and sustainably harvested.', fr: '100% pur, naturel et récolté durablement.' },
    'trust.b2b': { en: 'B2B & B2C', fr: 'B2B & B2C' },
    'trust.b2b.desc': { en: 'Tailored solutions for wholesalers, spas, and retail.', fr: 'Solutions adaptées pour grossistes, spas et détail.' },
    'trust.nursery': { en: 'Nursery Plants', fr: 'Pépinière' },
    'trust.nursery.desc': { en: 'Premium seedlings ready for plantation across Madagascar.', fr: 'Plants premium prêts pour la plantation à travers Madagascar.' },
    'trust.tracking': { en: 'Traceability', fr: 'Traçabilité' },
    'trust.tracking.desc': { en: 'From seedling to finished product, complete chain tracking.', fr: 'Du semis au produit fini, suivi complet de la chaîne.' },

    // ═══════════════════════════════════════
    // BUTTONS / CTA
    // ═══════════════════════════════════════
    'btn.view': { en: 'View Details', fr: 'Voir les détails' },
    'btn.view_sheet': { en: 'View Product Sheet', fr: 'Voir la fiche produit' },
    'btn.contact_price': { en: 'Price on request', fr: 'Prix sur demande' },
    'btn.buy': { en: 'Add to Cart', fr: 'Ajouter au panier' },
    'btn.submit': { en: 'Send Message', fr: 'Envoyer le message' },
    'btn.whatsapp': { en: 'WhatsApp Order', fr: 'Commander sur WhatsApp' },
    'btn.whatsapp_contact': { en: 'Contact via WhatsApp', fr: 'Contacter via WhatsApp' },
    'btn.email_contact': { en: 'Contact via Email', fr: 'Contacter par Email' },
    'btn.download_sheet': { en: 'Download Sheet', fr: 'Télécharger la fiche' },
    'btn.request_quote': { en: 'Request Quote', fr: 'Demander un Devis' },
    'btn.send_quote': { en: 'Send Quote Request', fr: 'Envoyer la demande de devis' },
    'btn.checkout': { en: 'Proceed to Checkout', fr: 'Passer la commande' },
    'btn.view_all': { en: 'View All', fr: 'Voir tout' },
    'btn.view_catalogue': { en: 'View Entire Catalogue', fr: 'Voir le Catalogue Complet' },
    'btn.learn_more': { en: 'Learn More', fr: 'En savoir plus' },
    'btn.get_quote': { en: 'Get a Quote', fr: 'Obtenir un Devis' },

    // ═══════════════════════════════════════
    // PRODUCT DETAILS
    // ═══════════════════════════════════════
    'product.origin': { en: 'Origin', fr: 'Origine' },
    'product.description': { en: 'Description', fr: 'Description' },
    'product.benefits': { en: 'Benefits', fr: 'Bienfaits' },
    'product.usage': { en: 'Usage', fr: 'Utilisation' },
    'product.format': { en: 'Formats Available', fr: 'Formats Disponibles' },
    'product.availability': { en: 'Availability', fr: 'Disponibilité' },
    'product.moq': { en: 'Minimum Order', fr: 'Commande Minimum' },
    'product.lead_time': { en: 'Lead time: 7–14 days', fr: 'Délai : 7–14 jours' },
    'product.shipping': { en: 'Worldwide shipping available', fr: 'Livraison mondiale disponible' },
    'product.retail_price': { en: 'Retail Price', fr: 'Prix Détail' },
    'product.wholesale_only': { en: 'Wholesale Only', fr: 'Grossiste Uniquement' },
    'product.retail_only': { en: 'Retail Only', fr: 'Détail Uniquement' },
    'product.wholesale_retail': { en: 'Wholesale & Retail', fr: 'Grossiste & Détail' },
    'product.professional': { en: 'Professional', fr: 'Professionnel' },
    'product.bulk_wholesale': { en: 'Bulk / Wholesale', fr: 'Vrac / Grossiste' },
    'product.back_catalogue': { en: 'Back to Catalogue', fr: 'Retour au Catalogue' },
    'product.not_found': { en: 'Product Not Found', fr: 'Produit Introuvable' },
    'product.related': { en: 'Related Products', fr: 'Produits Similaires' },
    'product.in_stock': { en: 'In Stock', fr: 'En Stock' },
    'product.limited': { en: 'Limited Stock', fr: 'Stock Limité' },
    'product.out_of_stock': { en: 'Out of Stock', fr: 'Rupture de Stock' },

    // ═══════════════════════════════════════
    // NURSERY DETAILS
    // ═══════════════════════════════════════
    'nursery.title': { en: 'Nursery & Plants', fr: 'Pépinière & Plants' },
    'nursery.subtitle': { en: 'Premium seedlings ready for plantation, from our nurseries in Madagascar.', fr: 'Plants premium prêts pour la plantation, depuis nos pépinières à Madagascar.' },
    'nursery.plants_available': { en: 'Plants Available', fr: 'Plants Disponibles' },
    'nursery.ready_to_plant': { en: 'Ready to Plant', fr: 'Prêt à Planter' },
    'nursery.per_unit': { en: 'per plant', fr: 'par plant' },
    'nursery.species': { en: 'Species', fr: 'Espèce' },

    // ═══════════════════════════════════════
    // CATALOGUE
    // ═══════════════════════════════════════
    'cat.all': { en: 'All', fr: 'Tout' },
    'cat.essential_oils': { en: 'Essential Oils', fr: 'Huiles Essentielles' },
    'cat.cosmetics': { en: 'Cosmetics', fr: 'Cosmétiques' },
    'cat.spices': { en: 'Spices', fr: 'Épices' },
    'cat.food': { en: 'Pantry', fr: 'Épicerie Fine' },
    'cat.vegetable_oils': { en: 'Vegetable Oils', fr: 'Huiles Végétales' },
    'cat.nursery_all': { en: 'All Plants', fr: 'Tous les Plants' },
    'cat.tropical_tree': { en: 'Tropical Trees', fr: 'Arbres Tropicaux' },
    'cat.spice_tree': { en: 'Spice Trees', fr: 'Arbres à Épices' },
    'cat.aromatic': { en: 'Aromatics', fr: 'Aromatiques' },
    'cat.timber': { en: 'Timber Trees', fr: 'Bois Précieux' },
    'cat.fruit_tree': { en: 'Fruit Trees', fr: 'Arbres Fruitiers' },
    'cat.subtitle': { en: 'Discover our range of premium natural products, sourced directly from our plantations in Madagascar.', fr: 'Découvrez notre gamme de produits naturels premium, sourcés directement depuis nos plantations à Madagascar.' },
    'cat.no_products': { en: 'No products found in this category.', fr: 'Aucun produit trouvé dans cette catégorie.' },
    'cat.view_all': { en: 'View All Products', fr: 'Voir tous les produits' },
    'cat.products_suffix': { en: 'products', fr: 'produits' },
    'cat.product_suffix': { en: 'product', fr: 'produit' },
    'cat.tab_products': { en: 'Natural Products', fr: 'Produits Naturels' },
    'cat.tab_nursery': { en: 'Nursery Plants', fr: 'Plants Pépinière' },

    // ═══════════════════════════════════════
    // ABOUT
    // ═══════════════════════════════════════
    'about.heritage': { en: 'Our Heritage', fr: 'Notre Héritage' },
    'about.legacy': { en: 'A Legacy of Nature', fr: 'Un Héritage de la Nature' },
    'about.values': { en: 'Our Core Values', fr: 'Nos Valeurs Fondamentales' },
    'about.sustainability': { en: 'Sustainability', fr: 'Durabilité' },
    'about.community': { en: 'Community', fr: 'Communauté' },
    'about.excellence': { en: 'Excellence', fr: 'Excellence' },
    'about.cta': { en: 'Ready to work with us?', fr: 'Prêt à collaborer avec nous ?' },

    // ═══════════════════════════════════════
    // QUALITY & SOURCING
    // ═══════════════════════════════════════
    'quality.title': { en: 'Quality & Sourcing', fr: 'Qualité & Sourcing' },
    'quality.subtitle': { en: 'From seed to bottle, we control every step of the process.', fr: 'De la graine au flacon, nous contrôlons chaque étape du processus.' },
    'quality.process': { en: 'Our Process', fr: 'Notre Processus' },
    'quality.traceability': { en: 'Full Traceability', fr: 'Traçabilité Complète' },
    'quality.terroir': { en: 'Madagascar Terroir', fr: 'Terroir de Madagascar' },
    'quality.certifications': { en: 'Certifications', fr: 'Certifications' },

    // ═══════════════════════════════════════
    // AGRIBUSINESS
    // ═══════════════════════════════════════
    'agri.title': { en: 'Agribusiness & B2B Services', fr: 'Agribusiness & Services B2B' },
    'agri.subtitle': { en: 'Your trusted partner for wholesale natural products and agricultural expertise in Madagascar.', fr: 'Votre partenaire de confiance pour les produits naturels en gros et l\'expertise agricole à Madagascar.' },
    'agri.wholesale': { en: 'Wholesale Supply', fr: 'Vente en Gros' },
    'agri.consulting': { en: 'Agricultural Consulting', fr: 'Conseil Agricole' },
    'agri.sourcing': { en: 'Premium Sourcing', fr: 'Sourcing Premium' },
    'agri.nursery_bulk': { en: 'Bulk Nursery Supply', fr: 'Pépinière en Gros' },

    // ═══════════════════════════════════════
    // CONTACT
    // ═══════════════════════════════════════
    'contact.title': { en: 'Contact Us', fr: 'Nous Contacter' },
    'contact.subtitle': { en: 'We are available for all your inquiries, orders, and partnerships.', fr: 'Nous sommes disponibles pour toutes vos demandes, commandes et partenariats.' },
    'contact.form_title': { en: 'Send us a Message', fr: 'Envoyez-nous un Message' },
    'contact.name': { en: 'Full Name', fr: 'Nom Complet' },
    'contact.company': { en: 'Company (Optional)', fr: 'Société (Optionnel)' },
    'contact.email': { en: 'Email', fr: 'Email' },
    'contact.phone': { en: 'Phone / WhatsApp', fr: 'Téléphone / WhatsApp' },
    'contact.country': { en: 'Country', fr: 'Pays' },
    'contact.interest': { en: 'Interested In', fr: 'Intéressé(e) par' },
    'contact.message': { en: 'Message', fr: 'Message' },
    'contact.payment_title': { en: 'Payment Methods', fr: 'Modes de Paiement' },
    'contact.delivery_title': { en: 'Delivery Zones', fr: 'Zones de Livraison' },
    'contact.address_manakara': { en: 'Distillery: ILON\'ALA Sarl - MANAKARA 316', fr: 'Distillerie : ILON\'ALA Sarl - MANAKARA 316' },
    'contact.address_tana': { en: 'Office: Our office will be opening soon in Antananarivo', fr: 'Bureau : Notre bureau sera bientôt ouvert à Antananarivo' },
    'contact.distillery': { en: 'Distillery', fr: 'Distillerie' },
    'contact.phone_val': { en: '+261 (0) 34 41 818 57', fr: '+261 (0) 34 41 818 57' },
    'contact.phone_link': { en: '+261344181857', fr: '+261344181857' },
    'contact.email_val': { en: 'contact@ilonala.com', fr: 'contact@ilonala.com' },
    'contact.nif': { en: 'NIF: 4005120591', fr: 'NIF : 4005120591' },
    'contact.stat': { en: 'STAT: 01283 12 2021 0 00220', fr: 'STAT : 01283 12 2021 0 00220' },

    // ═══════════════════════════════════════
    // CHECKOUT
    // ═══════════════════════════════════════
    'checkout.title': { en: 'Checkout', fr: 'Commande' },
    'checkout.your_order': { en: 'Your Order', fr: 'Votre Commande' },
    'checkout.shipping': { en: 'Shipping Information', fr: 'Informations de Livraison' },
    'checkout.payment': { en: 'Payment Method', fr: 'Mode de Paiement' },
    'checkout.mvola': { en: 'Mvola (Mobile Money)', fr: 'Mvola (Mobile Money)' },
    'checkout.bank': { en: 'Bank Transfer', fr: 'Virement Bancaire' },
    'checkout.paypal': { en: 'PayPal', fr: 'PayPal' },
    'checkout.place_order': { en: 'Place Order', fr: 'Valider la Commande' },
    'checkout.success': { en: 'Order Placed Successfully!', fr: 'Commande Validée avec Succès !' },
    'checkout.success_msg': { en: 'We will contact you shortly to confirm your order and payment details.', fr: 'Nous vous contacterons sous peu pour confirmer votre commande et les détails de paiement.' },

    // ═══════════════════════════════════════
    // CART
    // ═══════════════════════════════════════
    'cart.title': { en: 'Shopping Cart', fr: 'Panier' },
    'cart.empty': { en: 'Your cart is empty', fr: 'Votre panier est vide' },
    'cart.total': { en: 'Total', fr: 'Total' },
    'cart.remove': { en: 'Remove', fr: 'Supprimer' },
    'cart.continue': { en: 'Continue Shopping', fr: 'Continuer vos achats' },

    // ═══════════════════════════════════════
    // FOOTER
    // ═══════════════════════════════════════
    'footer.rights': { en: 'All rights reserved.', fr: 'Tous droits réservés.' },
    'footer.contact': { en: 'Contact', fr: 'Contact' },
    'footer.follow': { en: 'Follow Us', fr: 'Suivez-nous' },
    'footer.products': { en: 'Our Products', fr: 'Nos Produits' },
    'footer.nursery': { en: 'Nursery', fr: 'Pépinière' },
    'footer.company': { en: 'Company', fr: 'Entreprise' },
    'footer.privacy': { en: 'Privacy Policy', fr: 'Politique de Confidentialité' },
    'footer.terms': { en: 'Terms of Service', fr: 'Conditions Générales' },
    'footer.tagline': { en: 'Botanicals of Madagascar', fr: 'Botaniques de Madagascar' },
    'footer.description': { en: 'Direct producer of essential oils, natural cosmetics, spices, honey, and nursery plants from Madagascar. Wholesale & retail, worldwide shipping.', fr: 'Producteur direct d\'huiles essentielles, cosmétiques naturels, épices, miel et plants de pépinière de Madagascar. Grossiste & détail, livraison mondiale.' },
    'footer.quick_links': { en: 'Quick Links', fr: 'Liens Rapides' },
    'footer.newsletter_title': { en: 'Stay Connected', fr: 'Restez Connecté' },
    'footer.newsletter_desc': { en: 'Subscribe to receive our latest products, offers, and news from Madagascar.', fr: 'Abonnez-vous pour recevoir nos nouveaux produits, offres et actualités de Madagascar.' },
    'footer.newsletter_placeholder': { en: 'Your email address', fr: 'Votre adresse e-mail' },
    'footer.newsletter_success': { en: 'Thank you! You\'re subscribed.', fr: 'Merci ! Vous êtes inscrit(e).' },
    'footer.producer_statement': { en: 'Direct Producer from our Harvests to your Senses.', fr: 'Producteur Direct de nos récoltes à vos sens.' },

    // ═══════════════════════════════════════
    // MISC
    // ═══════════════════════════════════════
    'misc.madagascar': { en: 'Madagascar', fr: 'Madagascar' },
    'misc.loading': { en: 'Loading...', fr: 'Chargement...' },
    'misc.error': { en: 'An error occurred', fr: 'Une erreur est survenue' },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('fr');

    const t = (key: string): string => {
        return translations[key]?.[language] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
