
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, Record<Language, string>> = {
    // Navigation
    'nav.home': { en: 'Home', fr: 'Accueil' },
    'nav.catalogue': { en: 'Catalogue', fr: 'Catalogue' },
    'nav.about': { en: 'Our Story', fr: 'Notre Histoire' },
    'nav.contact': { en: 'Contact', fr: 'Contact' },
    'nav.quote': { en: 'Request Quote', fr: 'Demander un devis' },

    // Hero
    'hero.title': { en: 'The essential drop, natural well-being.', fr: 'La goutte essentielle, bien-être naturel.' },
    'hero.subtitle': { en: 'Pure Essential Oils from Madagascar.', fr: 'Huiles Essentielles Pures de Madagascar.' },
    'hero.download': { en: 'Download Catalogue', fr: 'Télécharger le Catalogue' },
    'hero.contact': { en: 'Contact on WhatsApp', fr: 'Contacter sur WhatsApp' },

    // Sections
    'section.trust': { en: 'Why Choose ILON’ALA?', fr: 'Pourquoi Choisir ILON’ALA ?' },
    'section.products': { en: 'Our Product Categories', fr: 'Nos Catégories de Produits' },

    // Trust
    'trust.plantation': { en: 'Own Plantations', fr: 'Propres Plantations' },
    'trust.plantation.desc': { en: 'Full traceability from Ravintsara, Katrafay, and Eucalyptus fields.', fr: 'Traçabilité totale depuis les champs de Ravintsara, Katrafay et Eucalyptus.' },
    'trust.export': { en: 'Worldwide Export', fr: 'Export Mondial' },
    'trust.export.desc': { en: 'Shipping to professionals and individuals globally.', fr: 'Livraison aux professionnels et particuliers dans le monde entier.' },
    'trust.quality': { en: 'Premium Quality', fr: 'Qualité Premium' },
    'trust.quality.desc': { en: '100% pure, natural, and sustainably harvested.', fr: '100% pur, naturel et récolté durablement.' },
    'trust.b2b': { en: 'B2B & B2C', fr: 'B2B & B2C' },
    'trust.b2b.desc': { en: 'Tailored solutions for wholesalers, spas, and retail.', fr: 'Solutions adaptées pour grossistes, spas et détail.' },

    // Buttons
    'btn.view': { en: 'View Product', fr: 'Voir le produit' },
    'btn.contact_price': { en: 'Contact for price', fr: 'Prix sur demande' },
    'btn.buy': { en: 'Buy Now', fr: 'Acheter' },
    'btn.submit': { en: 'Send Message', fr: 'Envoyer le message' },

    // Product Page
    'product.origin': { en: 'Origin: Madagascar', fr: 'Origine : Madagascar' },
    'product.description': { en: 'Description', fr: 'Description' },
    'product.benefits': { en: 'Benefits', fr: 'Bienfaits' },
    'product.moq': { en: 'Minimum Order: Contact us', fr: 'Commande min. : Nous contacter' },
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

    // Catalogue
    'cat.all': { en: 'All Products', fr: 'Tous les Produits' },
    'cat.essential_oils': { en: 'Essential Oils', fr: 'Huiles Essentielles' },
    'cat.cosmetics': { en: 'Cosmetics', fr: 'Cosmétiques' },
    'cat.spices': { en: 'Spices', fr: 'Épices' },
    'cat.food': { en: 'Pantry', fr: 'Épicerie Fine' },
    'cat.subtitle': { en: 'Discover our range of premium natural products, sourced directly from our plantations in Madagascar.', fr: 'Découvrez notre gamme de produits naturels premium, sourcés directement depuis nos plantations à Madagascar.' },
    'cat.no_products': { en: 'No products found in this category.', fr: 'Aucun produit trouvé dans cette catégorie.' },
    'cat.view_all': { en: 'View All Products', fr: 'Voir tous les produits' },
    'cat.products_suffix': { en: 'products', fr: 'produits' },
    'cat.product_suffix': { en: 'product', fr: 'produit' },
    'btn.whatsapp': { en: 'WhatsApp Order', fr: 'Commander sur WhatsApp' },
    'btn.download_sheet': { en: 'Download Sheet', fr: 'Télécharger la fiche' },

    // Footer
    'footer.rights': { en: 'All rights reserved.', fr: 'Tous droits réservés.' },
    'footer.contact': { en: 'Contact Us', fr: 'Nous Contacter' },
    'footer.follow': { en: 'Follow Us', fr: 'Suivez-nous' },
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
