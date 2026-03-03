
import ahibalala from '@/assets/products/ahibalala.jpg';
import ravintsara from '@/assets/products/ravintsara.jpg';
import katrafay from '@/assets/products/katrafay.jpg';
import ylang from '@/assets/products/ylang-ylang.jpg';
import citriodora from '@/assets/products/eucalyptus-citriodora.jpg';
import girofle from '@/assets/products/girofle-clous.jpg';
import savon from '@/assets/products/savon-lavande.jpg';
import maniguette from '@/assets/products/maniguette.jpg';
import cannelleEcorce from '@/assets/products/cannelle-ecorce.jpg';
import cannelleFeuille from '@/assets/products/cannelle-feuille.jpg';
import citronnelle from '@/assets/products/citronnelle.jpg';
import cypres from '@/assets/products/cypres.jpg';
import dingadingana from '@/assets/products/dingadingana.jpg';
import geranium from '@/assets/products/geranium-rosat.jpg';
import girofleFeuille from '@/assets/products/girofle-feuille.jpg';
import girofleGriffes from '@/assets/products/girofle-griffes.jpg';
import mandarine from '@/assets/products/mandarine-petitgrain.jpg';
import mandravasarotra from '@/assets/products/mandravasarotra.jpg';
import niaouli from '@/assets/products/niaouli.jpg';
import orangerSauvage from '@/assets/products/oranger-sauvage.jpg';
import radriaka from '@/assets/products/radriaka.jpg';
import romarin from '@/assets/products/romarin.jpg';
import romba from '@/assets/products/romba.jpg';
import savonCannelle from '@/assets/products/savon-cannelle.jpg';
import taratana from '@/assets/products/taratana.jpg';

export type ProductCategory = 'essential-oil' | 'cosmetic' | 'spice' | 'food' | 'vegetable-oil';

export type MarketType = 'b2c-local' | 'b2b-local' | 'b2c-export' | 'b2b-export';

export type PriceType = 'fixed' | 'on-request' | 'contact';

export interface Product {
  id: string;
  name: string;
  latinName?: string;
  category: ProductCategory;
  description: { en: string; fr: string };
  benefits: { en: string; fr: string };
  usage?: { en: string; fr: string };
  origin: string;
  format?: { en: string; fr: string };
  image: string;
  price?: number;
  priceType: PriceType;
  currency?: 'MGA' | 'EUR' | 'USD';
  moq?: string;
  availability: { en: string; fr: string };
  markets: MarketType[];
  isB2B: boolean;
  isB2C: boolean;
  slug: string;
  stock: number;
  featured?: boolean;
}

export const products: Product[] = [
  // ═══════════════════════════════════════
  // ESSENTIAL OILS (2 shown for launch)
  // ═══════════════════════════════════════
  {
    id: 'eo-1',
    name: 'Ravintsara',
    latinName: 'Cinnamomum camphora',
    category: 'essential-oil',
    description: {
      en: 'Our signature Ravintsara oil is distilled from the leaves of trees grown on our own concessions in the highlands of Madagascar. Known worldwide for its powerful antiviral and immune-boosting properties, it is one of the most sought-after essential oils from the island.',
      fr: 'Notre huile de Ravintsara signature est distillée à partir des feuilles d\'arbres cultivés sur nos propres concessions sur les hauts plateaux de Madagascar. Connue dans le monde entier pour ses puissantes propriétés antivirales et immunostimulantes, c\'est l\'une des huiles essentielles les plus recherchées de l\'île.'
    },
    benefits: {
      en: 'Powerful antiviral, immune booster, respiratory health, stress relief, antibacterial.',
      fr: 'Puissant antiviral, stimulant immunitaire, santé respiratoire, anti-stress, antibactérien.'
    },
    usage: {
      en: 'Aromatherapy, diffusion, massage (diluted), respiratory inhalation.',
      fr: 'Aromathérapie, diffusion, massage (dilué), inhalation respiratoire.'
    },
    origin: 'Hauts Plateaux, Madagascar',
    format: { en: '10ml, 50ml, 1L, 5L, 25L drums', fr: '10ml, 50ml, 1L, 5L, fûts de 25L' },
    image: ravintsara,
    price: 15.00,
    priceType: 'fixed',
    currency: 'EUR',
    moq: '10ml (retail) / 5L (wholesale)',
    availability: { en: 'In stock – Year round', fr: 'En stock – Toute l\'année' },
    markets: ['b2c-local', 'b2b-local', 'b2c-export', 'b2b-export'],
    isB2B: true,
    isB2C: true,
    slug: 'ravintsara-oil',
    stock: 500,
    featured: true
  },
  {
    id: 'eo-2',
    name: 'Katrafay',
    latinName: 'Cedrelopsis grevei',
    category: 'essential-oil',
    description: {
      en: 'Endemic to Madagascar, Katrafay oil is renowned for its anti-inflammatory and pain-relieving qualities. Extracted from the bark using sustainable methods. A prized ingredient in natural medicine and premium cosmetics.',
      fr: 'Endémique de Madagascar, l\'huile de Katrafay est réputée pour ses qualités anti-inflammatoires et analgésiques. Extraite de l\'écorce selon des méthodes durables. Un ingrédient prisé en médecine naturelle et cosmétique premium.'
    },
    benefits: {
      en: 'Anti-inflammatory, relieves muscle and joint pain, arthritis support, toning.',
      fr: 'Anti-inflammatoire, soulage les douleurs musculaires et articulaires, soutien arthrite, tonifiant.'
    },
    usage: {
      en: 'Massage oil base, pain relief blends, toning skin products.',
      fr: 'Base d\'huile de massage, mélanges anti-douleur, produits tonifiants pour la peau.'
    },
    origin: 'Sud-Ouest, Madagascar',
    format: { en: '10ml, 50ml, 1L, 5L, 25L drums', fr: '10ml, 50ml, 1L, 5L, fûts de 25L' },
    image: katrafay,
    price: 18.00,
    priceType: 'fixed',
    currency: 'EUR',
    moq: '10ml (retail) / 5L (wholesale)',
    availability: { en: 'In stock – Seasonal harvest', fr: 'En stock – Récolte saisonnière' },
    markets: ['b2c-local', 'b2b-local', 'b2c-export', 'b2b-export'],
    isB2B: true,
    isB2C: true,
    slug: 'katrafay-oil',
    stock: 300,
    featured: true
  },

  // ═══════════════════════════════════════
  // SPICES (2 shown for launch)
  // ═══════════════════════════════════════
  {
    id: 'sp-1',
    name: 'Vanille Noire de Madagascar',
    latinName: 'Vanilla planifolia',
    category: 'spice',
    description: {
      en: 'Premium gourmet black vanilla beans with exceptionally high vanillin content. Hand-pollinated and sun-cured in the traditional Bourbon method from the SAVA region.',
      fr: 'Gousses de vanille noire gourmet premium avec une teneur en vanilline exceptionnellement élevée. Pollinisées à la main et séchées au soleil selon la méthode Bourbon traditionnelle de la région SAVA.'
    },
    benefits: {
      en: 'Rich, complex flavor profile. Grade A quality with high moisture content.',
      fr: 'Profil de saveur riche et complexe. Qualité Grade A avec haute teneur en humidité.'
    },
    usage: {
      en: 'Gastronomy, pastry, ice cream, fragrance industry.',
      fr: 'Gastronomie, pâtisserie, glaces, industrie du parfum.'
    },
    origin: 'SAVA, Madagascar',
    format: { en: '100g, 500g, 1kg, 5kg, 25kg', fr: '100g, 500g, 1kg, 5kg, 25kg' },
    image: maniguette,
    priceType: 'on-request',
    moq: '1kg (wholesale)',
    availability: { en: 'Seasonal harvest – June to September', fr: 'Récolte saisonnière – Juin à Septembre' },
    markets: ['b2b-local', 'b2b-export'],
    isB2B: true,
    isB2C: false,
    slug: 'vanille-noire',
    stock: 50
  },
  {
    id: 'sp-2',
    name: 'Maniguette',
    latinName: 'Aframomum melegueta',
    category: 'spice',
    description: {
      en: 'Also known as Grains of Paradise, this rare peppery spice features distinctive notes of citrus, cardamom, and warm earth. A chef\'s secret ingredient.',
      fr: 'Aussi connue sous le nom de Grains de Paradis, cette épice poivrée rare présente des notes distinctives d\'agrumes, de cardamome et de terre chaude. L\'ingrédient secret des chefs.'
    },
    benefits: {
      en: 'Digestive aid, metabolism booster, culinary excellence.',
      fr: 'Aide digestive, stimulant métabolique, excellence culinaire.'
    },
    usage: {
      en: 'Culinary spice, food flavoring, traditional medicine.',
      fr: 'Épice culinaire, arôme alimentaire, médecine traditionnelle.'
    },
    origin: 'Est, Madagascar',
    format: { en: '50g, 100g, 500g, 1kg', fr: '50g, 100g, 500g, 1kg' },
    image: maniguette,
    price: 9.50,
    priceType: 'fixed',
    currency: 'EUR',
    moq: '50g (retail) / 1kg (wholesale)',
    availability: { en: 'In stock', fr: 'En stock' },
    markets: ['b2c-local', 'b2b-local', 'b2c-export', 'b2b-export'],
    isB2B: true,
    isB2C: true,
    slug: 'maniguette',
    stock: 300
  },

  // ═══════════════════════════════════════
  // COSMETICS (2 shown for launch)
  // ═══════════════════════════════════════
  {
    id: 'cos-1',
    name: 'Savon Artisanal Ylang Ylang',
    category: 'cosmetic',
    description: {
      en: 'Handcrafted artisanal soap made with organic coconut oil and infused with our Ylang Ylang Extra essential oil. A luxurious bathing experience.',
      fr: 'Savon artisanal fait main à l\'huile de coco biologique et infusé à notre huile essentielle d\'Ylang Ylang Extra. Une expérience de bain luxueuse.'
    },
    benefits: {
      en: 'Deep moisturizing, relaxing scent, gentle cleansing, nourishing.',
      fr: 'Hydratation profonde, parfum relaxant, nettoyage doux, nourrissant.'
    },
    usage: {
      en: 'Daily bathing, hand wash, luxury gift.',
      fr: 'Bain quotidien, lavage des mains, cadeau de luxe.'
    },
    origin: 'Antananarivo, Madagascar',
    format: { en: '100g, 150g bars', fr: 'Barres de 100g, 150g' },
    image: savon,
    price: 8.00,
    priceType: 'fixed',
    currency: 'EUR',
    moq: '1 unit (retail) / 50 units (wholesale)',
    availability: { en: 'In stock', fr: 'En stock' },
    markets: ['b2c-local', 'b2b-local', 'b2c-export'],
    isB2B: true,
    isB2C: true,
    slug: 'savon-ylang',
    stock: 500
  },
  {
    id: 'cos-2',
    name: 'Savon Cannelle',
    category: 'cosmetic',
    description: {
      en: 'Artisanal cinnamon soap with warming properties. Made with real cinnamon bark essential oil for a stimulating cleansing experience.',
      fr: 'Savon artisanal à la cannelle aux propriétés réchauffantes. Fabriqué avec de la vraie huile essentielle d\'écorce de cannelle pour une expérience nettoyante stimulante.'
    },
    benefits: {
      en: 'Warming, stimulating circulation, antibacterial cleansing.',
      fr: 'Réchauffant, stimulation de la circulation, nettoyage antibactérien.'
    },
    usage: {
      en: 'Daily bathing, body scrub, gift.',
      fr: 'Bain quotidien, gommage corporel, cadeau.'
    },
    origin: 'Antananarivo, Madagascar',
    format: { en: '100g, 150g bars', fr: 'Barres de 100g, 150g' },
    image: savonCannelle,
    price: 8.00,
    priceType: 'fixed',
    currency: 'EUR',
    moq: '1 unit (retail) / 50 units (wholesale)',
    availability: { en: 'In stock', fr: 'En stock' },
    markets: ['b2c-local', 'b2b-local', 'b2c-export'],
    isB2B: true,
    isB2C: true,
    slug: 'savon-cannelle',
    stock: 400
  },

  // ═══════════════════════════════════════
  // FOOD / PANTRY (2 shown for launch)
  // ═══════════════════════════════════════
  {
    id: 'fd-1',
    name: 'Miel de Forêt Sauvage',
    category: 'food',
    description: {
      en: 'A rich, dark honey harvested from the wild forests of Madagascar. Contains distinct notes of eucalyptus and niaouli. Raw, unprocessed.',
      fr: 'Un miel riche et foncé récolté dans les forêts sauvages de Madagascar. Contient des notes distinctes d\'eucalyptus et de niaouli. Brut, non transformé.'
    },
    benefits: {
      en: 'Natural sweetener, antioxidant rich, antibacterial, throat soothing.',
      fr: 'Édulcorant naturel, riche en antioxydants, antibactérien, apaisant pour la gorge.'
    },
    usage: {
      en: 'Culinary, natural sweetener, health supplement.',
      fr: 'Culinaire, édulcorant naturel, complément de santé.'
    },
    origin: 'Forêts de l\'Est, Madagascar',
    format: { en: '250g, 500g, 1kg jars', fr: 'Pots de 250g, 500g, 1kg' },
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=1000&auto=format&fit=crop',
    price: 12.00,
    priceType: 'fixed',
    currency: 'EUR',
    moq: '1 jar (retail) / 20 jars (wholesale)',
    availability: { en: 'In stock', fr: 'En stock' },
    markets: ['b2c-local', 'b2b-local', 'b2c-export'],
    isB2B: true,
    isB2C: true,
    slug: 'miel-foret',
    stock: 200
  },
  {
    id: 'fd-2',
    name: 'Miel de Litchi',
    category: 'food',
    description: {
      en: 'Light, floral honey harvested during the lychee flowering season on the east coast of Madagascar. Delicate sweetness with tropical notes.',
      fr: 'Miel léger et floral récolté pendant la saison de floraison des litchis sur la côte est de Madagascar. Douceur délicate avec des notes tropicales.'
    },
    benefits: {
      en: 'Soothing throat, delicate taste, natural energy.',
      fr: 'Apaisant pour la gorge, goût délicat, énergie naturelle.'
    },
    usage: {
      en: 'Tea sweetener, pastry, spread, health.',
      fr: 'Sucrant pour thé, pâtisserie, tartine, santé.'
    },
    origin: 'Côte Est, Madagascar',
    format: { en: '250g, 500g jars', fr: 'Pots de 250g, 500g' },
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=1000&auto=format&fit=crop',
    price: 14.00,
    priceType: 'fixed',
    currency: 'EUR',
    moq: '1 jar (retail)',
    availability: { en: 'Seasonal – December to February', fr: 'Saisonnier – Décembre à Février' },
    markets: ['b2c-local', 'b2b-local'],
    isB2B: true,
    isB2C: true,
    slug: 'miel-litchi',
    stock: 100
  },
];

// OTHERS PRODUCTS REMOVED TEMPORARILY FOR LAUNCH (WILL BE ADDED LATER VIA CRUD/DB)
/*
  eo-3: Ylang Ylang Extra
  eo-4: Eucalyptus Citriodora
  eo-5: Ahibalala
  eo-6: Cannelle Écorce
  eo-7: Cannelle Feuille
  eo-8: Citronnelle
  eo-9: Géranium Rosat
  eo-10: Girofle Feuille
  eo-11: Girofle Griffes
  eo-12: Mandravasarotra (Saro)
  eo-13: Niaouli
  eo-14: Cyprès
  eo-15: Dingadingana
  eo-16: Mandarine Petitgrain
  eo-17: Oranger Sauvage
  eo-18: Radriaka
  eo-19: Romarin
  eo-20: Romba
  eo-21: Taratana
  sp-3: Clous de Girofle (CG3)
*/

export const getProductsByCategory = (category: ProductCategory) =>
  products.filter(p => p.category === category);

export const getFeaturedProducts = () =>
  products.filter(p => p.featured);

export const getProductBySlug = (slug: string) =>
  products.find(p => p.slug === slug);

export const getProductsByMarket = (market: MarketType) =>
  products.filter(p => p.markets.includes(market));
