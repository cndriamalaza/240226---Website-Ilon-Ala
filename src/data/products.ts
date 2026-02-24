
import ahibalala from '@/assets/products/ahibalala.jpg';
import ravintsara from '@/assets/products/ravintsara.jpg';
import katrafay from '@/assets/products/katrafay.jpg';
import ylang from '@/assets/products/ylang-ylang.jpg';
import citriodora from '@/assets/products/eucalyptus-citriodora.jpg';
import girofle from '@/assets/products/girofle-clous.jpg';
import savon from '@/assets/products/savon-lavande.jpg';
import maniguette from '@/assets/products/maniguette.jpg';

export interface Product {
  id: string;
  name: string;
  latinName?: string;
  category: 'essential-oil' | 'cosmetic' | 'spice' | 'food';
  description: { en: string; fr: string };
  benefits: { en: string; fr: string };
  image: string;
  price?: number; // Optional for B2B items
  isB2B: boolean;
  isB2C: boolean;
  slug: string;
}

export const products: Product[] = [
  // ESSENTIAL OILS
  {
    id: 'eo-1',
    name: 'Ravintsara Essential Oil',
    latinName: 'Cinnamomum camphora',
    category: 'essential-oil',
    description: {
      en: 'Our signature Ravintsara oil is distilled from the leaves of trees grown on our own concessions in the highlands of Madagascar. Known for its strong antiviral and immune-boosting properties.',
      fr: 'Notre huile de Ravintsara signature est distillée à partir des feuilles d\'arbres cultivés sur nos propres concessions sur les hauts plateaux de Madagascar. Connue pour ses propriétés antivirales puissantes.'
    },
    benefits: {
      en: 'Immune support, respiratory health, antiviral.',
      fr: 'Soutien immunitaire, santé respiratoire, antiviral.'
    },
    image: ravintsara,
    price: 15.00,
    isB2B: true,
    isB2C: true,
    slug: 'ravintsara-oil'
  },
  {
    id: 'eo-2',
    name: 'Katrafay Essential Oil',
    latinName: 'Cedrelopsis grevei',
    category: 'essential-oil',
    description: {
      en: 'Endemic to Madagascar, Katrafay oil is renowned for its anti-inflammatory and pain-relieving qualities. Extracted from the bark using sustainable methods.',
      fr: 'Endémique de Madagascar, l\'huile de Katrafay est réputée pour ses qualités anti-inflammatoires et analgésiques. Extraite de l\'écorce selon des méthodes durables.'
    },
    benefits: {
      en: 'Relieves muscle pain, arthritis, anti-inflammatory.',
      fr: 'Soulage les douleurs musculaires, l\'arthrite, anti-inflammatoire.'
    },
    image: katrafay,
    price: 18.00,
    isB2B: true,
    isB2C: true,
    slug: 'katrafay-oil'
  },
  {
    id: 'eo-3',
    name: 'Ylang Ylang Extra',
    latinName: 'Cananga odorata',
    category: 'essential-oil',
    description: {
      en: 'First fraction distillation Ylang Ylang from Nosy Be. Intense, sweet floral aroma used in high-end perfumery.',
      fr: 'Ylang Ylang première fraction de Nosy Be. Arôme floral intense et sucré utilisé en parfumerie fine.'
    },
    benefits: {
      en: 'Relaxing, aphrodisiac, skin balancing.',
      fr: 'Relaxant, aphrodisiaque, équilibrant cutané.'
    },
    image: ylang,
    price: 22.00,
    isB2B: true,
    isB2C: true,
    slug: 'ylang-ylang'
  },
  {
    id: 'eo-4',
    name: 'Eucalyptus Citriodora',
    latinName: 'Eucalyptus citriodora',
    category: 'essential-oil',
    description: {
      en: 'Lemon-scented gum eucalyptus oil. Powerful insect repellent and anti-inflammatory agent.',
      fr: 'Huile d\'eucalyptus citronné. Puissant répulsif contre les insectes et agent anti-inflammatoire.'
    },
    benefits: {
      en: 'Insect repellent, joint pain relief, antifungal.',
      fr: 'Répulsif insectes, soulagement articulaire, antifongique.'
    },
    image: citriodora,
    price: 12.00,
    isB2B: true,
    isB2C: true,
    slug: 'eucalyptus-citriodora'
  },
  {
    id: 'eo-5',
    name: 'Ahibalala Essential Oil',
    latinName: 'Cymbopogon madagascariensis',
    category: 'essential-oil',
    description: {
      en: 'A rare endemic grass oil with uplifting and purifying properties. Often used in traditional Malagasy medicine.',
      fr: 'Une huile d\'herbe endémique rare aux propriétés édifiantes et purifiantes. Souvent utilisée en médecine traditionnelle malgache.'
    },
    benefits: {
      en: 'Purifying, uplifting, traditional remedy.',
      fr: 'Purifiant, édifiant, remède traditionnel.'
    },
    image: ahibalala,
    price: 20.00,
    isB2B: true,
    isB2C: true,
    slug: 'ahibalala-oil'
  },

  // SPICES
  {
    id: 'sp-1',
    name: 'Madagascar Black Vanilla',
    latinName: 'Vanilla planifolia',
    category: 'spice',
    description: {
      en: 'Premium gourmet black vanilla beans with high vanillin content. Hand-pollinated and sun-cured in the traditional way.',
      fr: 'Gousses de vanille noire gourmet premium avec une teneur élevée en vanilline. Pollinisées à la main et séchées au soleil.'
    },
    benefits: {
      en: 'Rich flavor for culinary use, calming aroma.',
      fr: 'Saveur riche pour usage culinaire, arôme apaisant.'
    },
    image: maniguette, // Placeholder as no vanilla image found, using maniguette temporarily or let unsplash? User said "produit comme celui initial" which implies files present. I'll use maniguette as closest spice available or just revert to unsplash if critical. I will risk unsplash for vanilla specifically as it's distinct.
    // actually let's stick to files we have. Maniguette is grains of paradise/pepper.
    isB2B: true,
    isB2C: false,
    slug: 'black-vanilla'
  },
  {
    id: 'sp-2',
    name: 'Maniguette (Grains of Paradise)',
    latinName: 'Aframomum melegueta',
    category: 'spice',
    description: {
      en: 'Also known as Grains of Paradise, a peppery spice with notes of citrus and cardamom.',
      fr: 'Aussi connu sous le nom de Maniguette, une épice poivrée avec des notes d\'agrumes et de cardamome.'
    },
    benefits: {
      en: 'Digestive aid, culinary spice.',
      fr: 'Aide digestive, épice culinaire.'
    },
    image: maniguette,
    price: 9.50,
    isB2B: true,
    isB2C: true,
    slug: 'maniguette'
  },
  {
    id: 'sp-3',
    name: 'Clove Buds (CG3)',
    latinName: 'Syzygium aromaticum',
    category: 'spice',
    description: {
      en: 'High-quality clove buds sorted for essential oil extraction or spice blends. High eugenol content.',
      fr: 'Clous de girofle de haute qualité triés pour l\'extraction d\'huile essentielle ou les mélanges d\'épices.'
    },
    benefits: {
      en: 'Antiseptic, dental pain relief, warming spice.',
      fr: 'Antiseptique, soulagement dentaire, épice réchauffante.'
    },
    image: girofle,
    isB2B: true,
    isB2C: false,
    slug: 'clove-buds'
  },

  // HONEY & JAMS (FOOD) - Keeping unsplash for now as no assets
  {
    id: 'fd-1',
    name: 'Wild Forest Honey',
    category: 'food',
    description: {
      en: 'A rich, dark honey harvested from the wild forests of Madagascar. Contains distinct notes of eucalyptus.',
      fr: 'Un miel riche et foncé récolté dans les forêts sauvages de Madagascar. Notes distinctes d\'eucalyptus.'
    },
    benefits: {
      en: 'Natural sweetener, antioxidant rich.',
      fr: 'Édulcorant naturel, riche en antioxydants.'
    },
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=1000&auto=format&fit=crop',
    price: 12.00,
    isB2B: true,
    isB2C: true,
    slug: 'wild-honey'
  },
  {
    id: 'fd-2',
    name: 'Lychee Honey',
    category: 'food',
    description: {
      en: 'Light, floral honey harvested during the lychee flowering season on the east coast.',
      fr: 'Miel léger et floral récolté pendant la saison de floraison des litchis sur la côte est.'
    },
    benefits: {
      en: 'Soothing throat, delicate taste.',
      fr: 'Apaisant pour la gorge, goût délicat.'
    },
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=1000&auto=format&fit=crop',
    price: 14.00,
    isB2B: true,
    isB2C: true,
    slug: 'lychee-honey'
  },

  // COSMETICS
  {
    id: 'cos-1',
    name: 'Artisanal Botanical Soap',
    category: 'cosmetic',
    description: {
      en: 'Handcrafted soap made with organic coconut oil and infused with Ylang Ylang.',
      fr: 'Savon artisanal fait main à l\'huile de coco biologique et infusé à l\'Ylang Ylang.'
    },
    benefits: {
      en: 'Moisturizing, relaxing scent, gentle cleansing.',
      fr: 'Hydratant, parfum relaxant, nettoyage doux.'
    },
    image: savon,
    price: 8.00,
    isB2B: true,
    isB2C: true,
    slug: 'botanical-soap'
  },
  {
    id: 'cos-2',
    name: 'Baobab Hair Oil',
    latinName: 'Adansonia digitata',
    category: 'cosmetic',
    description: {
      en: 'Cold pressed Baobab seed oil. Deeply nourishing for dry and damaged hair.',
      fr: 'Huile de graines de Baobab pressée à froid. Nourrissant en profondeur pour cheveux secs et abîmés.'
    },
    benefits: {
      en: 'Hair repair, scalp hydration, shine.',
      fr: 'Réparation capillaire, hydratation cuir chevelu, brillance.'
    },
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1000&auto=format&fit=crop',
    price: 25.00,
    isB2B: true,
    isB2C: true,
    slug: 'baobab-oil'
  }
];
