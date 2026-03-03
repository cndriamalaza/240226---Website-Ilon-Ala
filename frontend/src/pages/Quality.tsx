import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Sprout, Microscope, MapPin, Award, Leaf, ArrowRight, CheckCircle, Droplets, FileCheck } from "lucide-react";

const Quality = () => {
    const { t, language } = useLanguage();

    const processSteps = language === 'fr'
        ? [
            { icon: <Sprout className="w-8 h-8" />, title: 'Sélection des Semences', desc: 'Nous sélectionnons les meilleures variétés de notre pépinière et de nos partenaires locaux, en privilégiant la résistance et la qualité.' },
            { icon: <Leaf className="w-8 h-8" />, title: 'Culture & Récolte', desc: 'Sur nos propres concessions ou celles de nos partenaires, la culture suit des méthodes durables et la récolte est réalisée au moment optimal.' },
            { icon: <Microscope className="w-8 h-8" />, title: 'Distillation & Transformation', desc: 'Nos alambics sur site assurent une distillation contrôlée. Chaque lot est analysé pour garantir la pureté et la composition chimique.' },
            { icon: <Award className="w-8 h-8" />, title: 'Contrôle Qualité', desc: 'Analyses chromatographiques (GC-MS), tests organoleptiques et vérifications de conformité avant chaque expédition.' },
            { icon: <Shield className="w-8 h-8" />, title: 'Conditionnement & Export', desc: 'Emballage conforme aux normes internationales (IFRA, ISO). Expédition avec certificats d\'analyse et de traçabilité.' },
        ]
        : [
            { icon: <Sprout className="w-8 h-8" />, title: 'Seed Selection', desc: 'We select the best varieties from our nursery and local partners, prioritizing disease resistance and quality.' },
            { icon: <Leaf className="w-8 h-8" />, title: 'Cultivation & Harvest', desc: 'On our own concessions or those of our partners, cultivation follows sustainable methods and harvest is done at the optimal moment.' },
            { icon: <Microscope className="w-8 h-8" />, title: 'Distillation & Processing', desc: 'Our on-site stills ensure controlled distillation. Each batch is analyzed to guarantee purity and chemical composition.' },
            { icon: <Award className="w-8 h-8" />, title: 'Quality Control', desc: 'Chromatographic analyses (GC-MS), organoleptic tests, and compliance checks before each shipment.' },
            { icon: <Shield className="w-8 h-8" />, title: 'Packaging & Export', desc: 'Packaging compliant with international standards (IFRA, ISO). Shipment with certificates of analysis and traceability.' },
        ];

    const terroirs = language === 'fr'
        ? [
            { region: 'Hauts Plateaux', products: 'Ravintsara, Romarin, Ahibalala, Caféier', climate: 'Altitude 800-1500m, climat tempéré' },
            { region: 'Nosy Be', products: 'Ylang Ylang Extra', climate: 'Île tropicale, sol volcanique riche' },
            { region: 'Analanjirofo', products: 'Girofle (clous, feuilles, griffes)', climate: 'Côte Est humide, sol fertile' },
            { region: 'SAVA', products: 'Vanille Bourbon', climate: 'Zone tropicale humide, conditions idéales' },
            { region: 'Sud-Ouest', products: 'Katrafay, Mandravasarotra', climate: 'Zone semi-aride, espèces endémiques' },
            { region: 'Moramanga', products: 'Eucalyptus Citriodora, Niaouli', climate: 'Transition climatique, sols diversifiés' },
        ]
        : [
            { region: 'Central Highlands', products: 'Ravintsara, Rosemary, Ahibalala, Coffee', climate: 'Altitude 800-1500m, temperate climate' },
            { region: 'Nosy Be', products: 'Ylang Ylang Extra', climate: 'Tropical island, rich volcanic soil' },
            { region: 'Analanjirofo', products: 'Clove (buds, leaves, stems)', climate: 'Humid East Coast, fertile soil' },
            { region: 'SAVA', products: 'Bourbon Vanilla', climate: 'Humid tropical zone, ideal conditions' },
            { region: 'South-West', products: 'Katrafay, Mandravasarotra (Saro)', climate: 'Semi-arid zone, endemic species' },
            { region: 'Moramanga', products: 'Eucalyptus Citriodora, Niaouli', climate: 'Climatic transition, diversified soils' },
        ];

    return (
        <div className="min-h-screen bg-background font-sans">
            {/* Hero */}
            <div className="relative h-[35vh] min-h-[300px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-botanical">
                    <img
                        src="https://images.unsplash.com/photo-1596395912440-27f6e3c5453e?q=80&w=2500&auto=format&fit=crop"
                        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
                        alt="Quality & Sourcing"
                    />
                </div>
                <div className="relative z-10 text-center text-white px-4 max-w-4xl">
                    <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 tracking-tight drop-shadow-md">{t('quality.title')}</h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">{t('quality.subtitle')}</p>
                </div>
            </div>

            {/* Process Steps - Replaced with new condensed version */}
            <section className="py-12 bg-background">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-14">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">{t('quality.process')}</h2>
                        <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
                    </div>

                    <div className="max-w-4xl mx-auto space-y-0">
                        {[
                            { icon: <Droplets className="w-10 h-10" />, title: language === 'fr' ? '1. Distillation à la Vapeur' : '1. Steam Distillation', desc: language === 'fr' ? 'Extraction lente à basse pression pour préserver l\'intégrité moléculaire de nos huiles essentielles.' : 'Slow, low-pressure extraction to preserve the molecular integrity of our essential oils.' },
                            { icon: <Shield className="w-10 h-10" />, title: language === 'fr' ? '2. Tests Chromatographiques' : '2. GC-MS Testing', desc: language === 'fr' ? 'Analyse rigoureuse de chaque lot par chromatographie en phase gazeuse pour garantir une pureté totale et l\'absence d\'adultérants.' : 'Rigorous analysis of every batch via gas chromatography to guarantee total purity and the absence of adulterants.' },
                            { icon: <FileCheck className="w-10 h-10" />, title: language === 'fr' ? '3. Certification & Traçabilité' : '3. Certification & Traceability', desc: language === 'fr' ? 'Délivrance de documents d\'analyse détaillés et suivi complet du champ de culture jusqu\'au flacon final.' : 'Issuance of detailed analysis documents and full tracking from the cultivation field to the final bottle.' },
                            { icon: <Leaf className="w-10 h-10" />, title: language === 'fr' ? '4. Emballage Protecteur' : '4. Protective Packaging', desc: language === 'fr' ? 'Conditionnement étudié sous atmosphère contrôlée pour préserver les principes actifs de l\'oxydation et de la lumière.' : 'Packaging designed under controlled atmosphere to protect active principles from oxidation and light.' },
                        ].map((step, i, arr) => (
                            <div key={i} className="relative flex gap-8 pb-12 last:pb-0">
                                {/* Vertical line */}
                                {i < arr.length - 1 && (
                                    <div className="absolute left-8 top-16 bottom-0 w-px bg-primary/20" />
                                )}

                                {/* Step icon */}
                                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary relative z-10 shadow-sm">
                                    {step.icon}
                                </div>

                                <div className="flex-1 pt-2">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-xs font-bold text-gold uppercase tracking-[0.2em]">{language === 'fr' ? 'Étape' : 'Step'} {i + 1}</span>
                                    </div>
                                    <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                                    <p className="text-muted-foreground text-lg leading-relaxed font-light">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Traceability */}
            <section className="py-12 bg-muted/30">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                        <div>
                            <span className="text-gold font-bold uppercase tracking-widest text-xs">{t('quality.traceability')}</span>
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">{language === 'fr' ? 'De la Graine au Flacon' : 'From Seed to Bottle'}</h2>
                            <div className="space-y-4">
                                {(language === 'fr'
                                    ? [
                                        'Numéro de lot unique pour chaque production',
                                        'Certificat d\'analyse (GC-MS) fourni sur demande',
                                        'Géolocalisation des parcelles de culture',
                                        'Historique complet : plantation, récolte, distillation',
                                        'Fiches de sécurité (MSDS) disponibles',
                                        'Conformité IFRA pour les huiles de parfumerie',
                                    ]
                                    : [
                                        'Unique batch number for each production',
                                        'Certificate of analysis (GC-MS) provided on request',
                                        'Geolocation of cultivation plots',
                                        'Full history: planting, harvest, distillation',
                                        'Safety data sheets (MSDS) available',
                                        'IFRA compliance for perfumery oils',
                                    ]
                                ).map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <p className="text-muted-foreground">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
                            <h3 className="font-serif text-xl font-bold text-foreground mb-6">{language === 'fr' ? 'Exemple de Traçabilité' : 'Traceability Example'}</h3>
                            <div className="space-y-4 text-sm">
                                {[
                                    { label: language === 'fr' ? 'Produit' : 'Product', value: 'Ravintsara Essential Oil' },
                                    { label: 'Lot', value: 'ILA-RAV-2025-047' },
                                    { label: language === 'fr' ? 'Origine' : 'Origin', value: 'Moramanga, Madagascar' },
                                    { label: language === 'fr' ? 'Récolte' : 'Harvest', value: language === 'fr' ? 'Janvier 2025' : 'January 2025' },
                                    { label: language === 'fr' ? 'Distillation' : 'Distillation', value: language === 'fr' ? '4h vapeur d\'eau' : '4h steam distillation' },
                                    { label: '1,8-Cinéole', value: '58.2%' },
                                    { label: language === 'fr' ? 'Pureté' : 'Purity', value: '100% — No additives' },
                                ].map((row, i) => (
                                    <div key={i} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                                        <span className="font-medium text-foreground">{row.label}</span>
                                        <span className="text-muted-foreground">{row.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Madagascar Terroir */}
            <section className="py-12 bg-background">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-14">
                        <span className="text-gold font-bold uppercase tracking-widest text-xs">{t('quality.terroir')}</span>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
                            {language === 'fr' ? 'Nos Régions de Production' : 'Our Production Regions'}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {terroirs.map((t, i) => (
                            <div key={i} className="bg-white rounded-xl p-6 border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-3 mb-4">
                                    <MapPin className="w-5 h-5 text-primary" />
                                    <h3 className="font-serif text-lg font-bold text-foreground">{t.region}</h3>
                                </div>
                                <p className="text-sm text-primary font-medium mb-2">{t.products}</p>
                                <p className="text-xs text-muted-foreground">{t.climate}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 bg-primary text-white text-center">
                <div className="container px-4 md:px-6 max-w-3xl mx-auto">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">{language === 'fr' ? 'Besoin d\'un certificat d\'analyse ?' : 'Need a certificate of analysis?'}</h2>
                    <p className="text-white/80 text-lg mb-8">{language === 'fr' ? 'Contactez-nous pour recevoir les fiches techniques et certificats de nos produits.' : 'Contact us to receive technical data sheets and certificates for our products.'}</p>
                    <Link to="/contact">
                        <Button size="lg" className="bg-white text-[#1e4d2b] hover:bg-[#f5f6f1] font-bold rounded-full px-12 h-16 text-lg shadow-xl hover:shadow-white/20 transition-all duration-300">
                            {t('nav.contact')}
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Quality;
