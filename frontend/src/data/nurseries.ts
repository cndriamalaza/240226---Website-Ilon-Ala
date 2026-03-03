
import ahibalalaPlant from '@/assets/plants/ahibalala-plant.png';

export type NurseryCategory = 'tropical-tree' | 'spice-tree' | 'aromatic' | 'timber' | 'fruit-tree';

export interface NurseryPlant {
    id: string;
    name: string;
    species: string;
    category: NurseryCategory;
    description: { en: string; fr: string };
    benefits: { en: string; fr: string };
    origin: string;
    format: { en: string; fr: string };
    plantsAvailable: number;
    readyToPlant: boolean;
    moq: string;
    price?: number;
    priceType: 'fixed' | 'on-request' | 'contact';
    currency?: 'MGA' | 'EUR' | 'USD';
    markets: ('b2c-local' | 'b2b-local' | 'b2c-export' | 'b2b-export')[];
    image: string;
    slug: string;
    featured?: boolean;
}

export const nurseryPlants: NurseryPlant[] = [
    // ═══════════════════════════════════════
    // CACAO / COCOA
    // ═══════════════════════════════════════
    {
        id: 'np-1',
        name: 'Cacaoyer',
        species: 'Theobroma cacao (Trinitario)',
        category: 'tropical-tree',
        description: {
            en: 'Premium Trinitario cocoa seedlings, selected for their exceptional resistance and fine flavor cocoa production. Ready for plantation in Madagascar\'s humid tropical zones. Our seedlings come from grafted mother plants with proven yield records.',
            fr: 'Plants de cacaoyer Trinitario premium, sélectionnés pour leur résistance exceptionnelle et leur production de cacao fin de saveur. Prêts pour la plantation dans les zones tropicales humides de Madagascar. Nos plants proviennent de pieds-mères greffés avec des rendements prouvés.'
        },
        benefits: {
            en: 'High-yield variety, disease resistant, fine flavor cocoa, excellent commercial potential. First harvest in 3-4 years.',
            fr: 'Variété à haut rendement, résistante aux maladies, cacao fin de saveur, excellent potentiel commercial. Première récolte en 3-4 ans.'
        },
        origin: 'Pépinière Ilon\'Ala, Ambanja, Madagascar',
        format: { en: 'Potted seedlings (20-40cm height)', fr: 'Plants en pots (hauteur 20-40cm)' },
        plantsAvailable: 5000,
        readyToPlant: true,
        moq: '100 plants (B2B) / 10 plants (B2C)',
        price: 3000,
        priceType: 'fixed',
        currency: 'MGA',
        markets: ['b2c-local', 'b2b-local', 'b2b-export'],
        image: 'https://images.unsplash.com/photo-1610611424854-5e07b4e25a16?q=80&w=1000&auto=format&fit=crop',
        slug: 'cacaoyer-trinitario',
        featured: true
    },

    // ═══════════════════════════════════════
    // CANNELLE / CINNAMON
    // ═══════════════════════════════════════
    {
        id: 'np-2',
        name: 'Cannelier',
        species: 'Cinnamomum zeylanicum',
        category: 'spice-tree',
        description: {
            en: 'True Ceylon cinnamon tree seedlings from Madagascar. These trees produce the finest cinnamon bark and leaves for essential oil distillation. Adapted to Madagascar\'s tropical and subtropical climates.',
            fr: 'Plants de cannelier de Ceylan vrai de Madagascar. Ces arbres produisent la meilleure écorce de cannelle et des feuilles pour la distillation d\'huile essentielle. Adaptés aux climats tropicaux et subtropicaux de Madagascar.'
        },
        benefits: {
            en: 'Dual harvest: bark for spice and leaves for essential oil. Fast-growing, first bark harvest at 3-4 years. Continuous leaf harvest.',
            fr: 'Double récolte : écorce pour épice et feuilles pour huile essentielle. Croissance rapide, première récolte d\'écorce à 3-4 ans. Récolte continue des feuilles.'
        },
        origin: 'Pépinière Ilon\'Ala, Madagascar',
        format: { en: 'Potted seedlings (15-30cm height)', fr: 'Plants en pots (hauteur 15-30cm)' },
        plantsAvailable: 8000,
        readyToPlant: true,
        moq: '50 plants (B2B) / 5 plants (B2C)',
        price: 2500,
        priceType: 'fixed',
        currency: 'MGA',
        markets: ['b2c-local', 'b2b-local', 'b2b-export'],
        image: 'https://images.unsplash.com/photo-1591857630384-72b5352a2593?q=80&w=1000&auto=format&fit=crop',
        slug: 'cannelier-ceylan',
        featured: true
    },

    // ═══════════════════════════════════════
    // CAFEIER / COFFEE
    // ═══════════════════════════════════════
    {
        id: 'np-3',
        name: 'Caféier Arabica',
        species: 'Coffea arabica',
        category: 'tropical-tree',
        description: {
            en: 'Superior Arabica coffee seedlings suited for Madagascar\'s highland climates. Selected from local heirloom varieties known for their complex cup profiles with fruity and floral notes.',
            fr: 'Plants de caféier Arabica supérieur adaptés aux climats des hauts plateaux de Madagascar. Sélectionnés parmi des variétés locales patrimoniales connues pour leurs profils de tasse complexes avec des notes fruitées et florales.'
        },
        benefits: {
            en: 'Specialty coffee potential, altitude-adapted, shade-tolerant. First harvest at 3-4 years. Excellent export value.',
            fr: 'Potentiel café de spécialité, adapté à l\'altitude, tolérant à l\'ombre. Première récolte à 3-4 ans. Excellente valeur export.'
        },
        origin: 'Pépinière Ilon\'Ala, Hauts Plateaux, Madagascar',
        format: { en: 'Potted seedlings (15-25cm height)', fr: 'Plants en pots (hauteur 15-25cm)' },
        plantsAvailable: 10000,
        readyToPlant: true,
        moq: '200 plants (B2B) / 10 plants (B2C)',
        price: 2000,
        priceType: 'fixed',
        currency: 'MGA',
        markets: ['b2c-local', 'b2b-local', 'b2b-export'],
        image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1000&auto=format&fit=crop',
        slug: 'cafeier-arabica',
        featured: true
    },

    // ═══════════════════════════════════════
    // KHAYA (ACAJOU D'AFRIQUE)
    // ═══════════════════════════════════════
    {
        id: 'np-4',
        name: 'Khaya (Acajou d\'Afrique)',
        species: 'Khaya madagascariensis',
        category: 'timber',
        description: {
            en: 'African Mahogany (Khaya) seedlings for timber reforestation and agroforestry. This high-value timber species is an excellent long-term investment with strong demand in furniture, construction, and export markets.',
            fr: 'Plants d\'Acajou d\'Afrique (Khaya) pour le reboisement et l\'agroforesterie. Cette espèce de bois de haute valeur est un excellent investissement à long terme avec une forte demande dans les marchés du meuble, de la construction et de l\'export.'
        },
        benefits: {
            en: 'Premium timber value, fast-growing tropical hardwood, carbon sequestration, shade provider for agroforestry.',
            fr: 'Valeur bois premium, bois dur tropical à croissance rapide, séquestration carbone, fournisseur d\'ombre pour l\'agroforesterie.'
        },
        origin: 'Pépinière Ilon\'Ala, Madagascar',
        format: { en: 'Potted seedlings (30-60cm height)', fr: 'Plants en pots (hauteur 30-60cm)' },
        plantsAvailable: 3000,
        readyToPlant: true,
        moq: '100 plants (B2B) / 5 plants (B2C)',
        price: 5000,
        priceType: 'fixed',
        currency: 'MGA',
        markets: ['b2c-local', 'b2b-local', 'b2b-export'],
        image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1000&auto=format&fit=crop',
        slug: 'khaya-acajou',
        featured: true
    },

    // ═══════════════════════════════════════
    // LIQUIDAMBAR
    // ═══════════════════════════════════════
    {
        id: 'np-5',
        name: 'Liquidambar',
        species: 'Liquidambar styraciflua',
        category: 'timber',
        description: {
            en: 'Sweet Gum tree seedlings adapted to Madagascar conditions. Produces valuable timber and decorative bark resin (storax). An excellent agroforestry and reforestation species.',
            fr: 'Plants de copalme d\'Amérique adaptés aux conditions de Madagascar. Produit du bois de valeur et de la résine d\'écorce décorative (storax). Excellente espèce d\'agroforesterie et de reboisement.'
        },
        benefits: {
            en: 'Versatile timber, resin production, fast growth, beautiful autumn foliage, erosion control.',
            fr: 'Bois polyvalent, production de résine, croissance rapide, beau feuillage automnal, contrôle de l\'érosion.'
        },
        origin: 'Pépinière Ilon\'Ala, Madagascar',
        format: { en: 'Potted seedlings (25-50cm height)', fr: 'Plants en pots (hauteur 25-50cm)' },
        plantsAvailable: 2000,
        readyToPlant: true,
        moq: '50 plants (B2B) / 5 plants (B2C)',
        price: 4000,
        priceType: 'fixed',
        currency: 'MGA',
        markets: ['b2c-local', 'b2b-local'],
        image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1000&auto=format&fit=crop',
        slug: 'liquidambar',
    },

    // ═══════════════════════════════════════
    // GIROFLIER / CLOVE TREE
    // ═══════════════════════════════════════
    {
        id: 'np-6',
        name: 'Giroflier',
        species: 'Syzygium aromaticum',
        category: 'spice-tree',
        description: {
            en: 'Clove tree seedlings – one of Madagascar\'s most profitable crops. Produces clove buds, leaves, and stems, all valuable for essential oil extraction and the spice trade.',
            fr: 'Plants de giroflier – l\'une des cultures les plus rentables de Madagascar. Produit des clous, des feuilles et des griffes de girofle, tous précieux pour l\'extraction d\'huile essentielle et le commerce des épices.'
        },
        benefits: {
            en: 'Triple harvest (buds, leaves, stems). Long-lived productive tree (50+ years). High eugenol content for oil extraction.',
            fr: 'Triple récolte (clous, feuilles, griffes). Arbre productif longévif (50+ ans). Haute teneur en eugénol pour l\'extraction d\'huile.'
        },
        origin: 'Pépinière Ilon\'Ala, Analanjirofo, Madagascar',
        format: { en: 'Potted seedlings (20-40cm height)', fr: 'Plants en pots (hauteur 20-40cm)' },
        plantsAvailable: 15000,
        readyToPlant: true,
        moq: '100 plants (B2B) / 10 plants (B2C)',
        price: 2000,
        priceType: 'fixed',
        currency: 'MGA',
        markets: ['b2c-local', 'b2b-local', 'b2b-export'],
        image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000&auto=format&fit=crop',
        slug: 'giroflier',
        featured: true
    },

    // ═══════════════════════════════════════
    // RAVINTSARA TREE
    // ═══════════════════════════════════════
    {
        id: 'np-7',
        name: 'Ravintsara',
        species: 'Cinnamomum camphora',
        category: 'aromatic',
        description: {
            en: 'Ravintsara tree seedlings from our own mother trees. The source of Madagascar\'s most famous essential oil. Grows well in highland climates with excellent leaf production for distillation.',
            fr: 'Plants de Ravintsara issus de nos propres pieds-mères. La source de l\'huile essentielle la plus célèbre de Madagascar. Pousse bien dans les climats d\'altitude avec une excellente production de feuilles pour la distillation.'
        },
        benefits: {
            en: 'High-demand essential oil crop, continuous leaf harvest, fast-growing, excellent ROI for distillers.',
            fr: 'Culture d\'huile essentielle très demandée, récolte continue des feuilles, croissance rapide, excellent retour sur investissement pour les distillateurs.'
        },
        origin: 'Pépinière Ilon\'Ala, Moramanga, Madagascar',
        format: { en: 'Potted seedlings (20-40cm height)', fr: 'Plants en pots (hauteur 20-40cm)' },
        plantsAvailable: 20000,
        readyToPlant: true,
        moq: '100 plants (B2B) / 10 plants (B2C)',
        price: 1500,
        priceType: 'fixed',
        currency: 'MGA',
        markets: ['b2c-local', 'b2b-local', 'b2b-export'],
        image: ahibalalaPlant,
        slug: 'ravintsara-plant',
        featured: true
    },

    // ═══════════════════════════════════════
    // EUCALYPTUS CITRIODORA
    // ═══════════════════════════════════════
    {
        id: 'np-8',
        name: 'Eucalyptus Citriodora',
        species: 'Corymbia citriodora',
        category: 'aromatic',
        description: {
            en: 'Lemon eucalyptus tree seedlings. Fast-growing species producing leaves rich in citronellal for essential oil distillation and natural insect repellent production.',
            fr: 'Plants d\'eucalyptus citronné. Espèce à croissance rapide produisant des feuilles riches en citronnellal pour la distillation d\'huile essentielle et la production de répulsif naturel.'
        },
        benefits: {
            en: 'Rapid growth, high biomass, year-round leaf harvest, ideal for essential oil production and reforestation.',
            fr: 'Croissance rapide, forte biomasse, récolte de feuilles toute l\'année, idéal pour la production d\'huile essentielle et le reboisement.'
        },
        origin: 'Pépinière Ilon\'Ala, Madagascar',
        format: { en: 'Potted seedlings (15-30cm height)', fr: 'Plants en pots (hauteur 15-30cm)' },
        plantsAvailable: 12000,
        readyToPlant: true,
        moq: '200 plants (B2B) / 10 plants (B2C)',
        price: 1200,
        priceType: 'fixed',
        currency: 'MGA',
        markets: ['b2c-local', 'b2b-local', 'b2b-export'],
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
        slug: 'eucalyptus-citriodora-plant',
    },

    // ═══════════════════════════════════════
    // YLANG YLANG
    // ═══════════════════════════════════════
    {
        id: 'np-9',
        name: 'Ylang Ylang',
        species: 'Cananga odorata',
        category: 'aromatic',
        description: {
            en: 'Ylang Ylang tree seedlings for essential oil production. The "flower of flowers" produces one of the world\'s most valuable perfumery ingredients. Ideal for Madagascar\'s coastal climates.',
            fr: 'Plants d\'Ylang Ylang pour la production d\'huile essentielle. La "fleur des fleurs" produit l\'un des ingrédients de parfumerie les plus précieux au monde. Idéal pour les climats côtiers de Madagascar.'
        },
        benefits: {
            en: 'Premium essential oil crop, continuous flowering, high market value, flower harvest starts at 3-4 years.',
            fr: 'Culture d\'huile essentielle premium, floraison continue, haute valeur marchande, récolte des fleurs à partir de 3-4 ans.'
        },
        origin: 'Pépinière Ilon\'Ala, Nosy Be, Madagascar',
        format: { en: 'Potted seedlings (20-40cm height)', fr: 'Plants en pots (hauteur 20-40cm)' },
        plantsAvailable: 6000,
        readyToPlant: true,
        moq: '50 plants (B2B) / 5 plants (B2C)',
        price: 3500,
        priceType: 'fixed',
        currency: 'MGA',
        markets: ['b2c-local', 'b2b-local', 'b2b-export'],
        image: 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?q=80&w=1000&auto=format&fit=crop',
        slug: 'ylang-ylang-plant',
    },

    // ═══════════════════════════════════════
    // POIVRIER / PEPPER
    // ═══════════════════════════════════════
    {
        id: 'np-10',
        name: 'Poivrier',
        species: 'Piper nigrum',
        category: 'spice-tree',
        description: {
            en: 'Black pepper vine seedlings from Madagascar. Our varieties are selected for high piperine content and excellent tropical adaptation. Requires support structures (tutors).',
            fr: 'Plants de poivrier noir de Madagascar. Nos variétés sont sélectionnées pour leur haute teneur en pipérine et leur excellente adaptation tropicale. Nécessite des structures de support (tuteurs).'
        },
        benefits: {
            en: 'High-value spice crop, continuous harvest, compact growth suitable for small plots, strong export demand.',
            fr: 'Culture d\'épice à haute valeur, récolte continue, croissance compacte adaptée aux petites parcelles, forte demande export.'
        },
        origin: 'Pépinière Ilon\'Ala, Madagascar',
        format: { en: 'Potted seedlings (15-25cm height)', fr: 'Plants en pots (hauteur 15-25cm)' },
        plantsAvailable: 4000,
        readyToPlant: true,
        moq: '50 plants (B2B) / 10 plants (B2C)',
        price: 2500,
        priceType: 'fixed',
        currency: 'MGA',
        markets: ['b2c-local', 'b2b-local'],
        image: 'https://images.unsplash.com/photo-1599909533190-b4af32e01891?q=80&w=1000&auto=format&fit=crop',
        slug: 'poivrier-noir',
    },
];

export const getNurseryBySlug = (slug: string) =>
    nurseryPlants.find(p => p.slug === slug);

export const getFeaturedNursery = () =>
    nurseryPlants.filter(p => p.featured);

export const getNurseryByCategory = (category: NurseryCategory) =>
    nurseryPlants.filter(p => p.category === category);
