import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sprout, Truck, Beaker, TreePine, Users, BarChart3, ArrowRight, CheckCircle, MessageCircle, Globe, Building, Microscope, GraduationCap, LineChart, Droplets, Shield, FileCheck, Leaf, MapPin, Mail, Phone } from "lucide-react";

const Agribusiness = () => {
    const { language, t } = useLanguage();

    const services = language === 'fr'
        ? [
            {
                icon: <Truck className="w-8 h-8" />,
                title: 'Vente en Gros',
                desc: 'Huiles essentielles, épices et produits naturels en vrac. MOQ flexibles, prix compétitifs, livraison mondiale.',
                features: ['Huiles essentielles en fûts (25L, 200L)', 'Épices en vrac (25kg, 50kg)', 'Conditionnement sur mesure', 'Certificats d\'analyse inclus'],
            },
            {
                icon: <Sprout className="w-8 h-8" />,
                title: 'Pépinière en Gros',
                desc: 'Fourniture de plants en grande quantité pour projets agricoles, reforestation et investissements agro.',
                features: ['Cacao, Cannelle, Café, Girofle', 'Plants sélectionnés et résistants', 'Livraison sur site à Madagascar', 'Accompagnement plantation'],
            },
            {
                icon: <Beaker className="w-8 h-8" />,
                title: 'Conseil & Expertise',
                desc: 'Accompagnement technique complet : culture, récolte, distillation, post-récolte.',
                features: ['Étude de faisabilité culture', 'Formation distillation', 'Optimisation rendement', 'Conseil post-récolte'],
            },
            {
                icon: <Globe className="w-8 h-8" />,
                title: 'Sourcing Premium',
                desc: 'Service de sourcing sur mesure pour vos besoins spécifiques en matières premières malgaches.',
                features: ['Recherche de produits spécifiques', 'Négociation et achat', 'Contrôle qualité sur place', 'Logistique export clé en main'],
            },
        ]
        : [
            {
                icon: <Truck className="w-8 h-8" />,
                title: 'Wholesale Supply',
                0: 'Essential oils, spices and natural products in bulk. Flexible MOQs, competitive pricing, worldwide delivery.',
                features: ['Essential oils in drums (25L, 200L)', 'Bulk spices (25kg, 50kg)', 'Custom packaging', 'Certificates of analysis included'],
            },
            {
                icon: <Sprout className="w-8 h-8" />,
                title: 'Bulk Nursery Supply',
                desc: 'Large-quantity seedling supply for agricultural projects, reforestation, and agri-investments.',
                features: ['Cocoa, Cinnamon, Coffee, Clove', 'Selected, disease-resistant plants', 'On-site delivery in Madagascar', 'Planting assistance'],
            },
            {
                icon: <Beaker className="w-8 h-8" />,
                title: 'Consulting & Expertise',
                desc: 'Complete technical support: cultivation, harvest, distillation, post-harvest.',
                features: ['Cultivation feasibility study', 'Distillation training', 'Yield optimization', 'Post-harvest consulting'],
            },
            {
                icon: <Globe className="w-8 h-8" />,
                title: 'Premium Sourcing',
                desc: 'Custom sourcing service for your specific Malagasy raw material needs.',
                features: ['Specific product sourcing', 'Negotiation and purchasing', 'On-site quality control', 'Turnkey export logistics'],
            },
        ];

    const stats = [
        { value: '20+', label: language === 'fr' ? 'Huiles Essentielles' : 'Essential Oils' },
        { value: '10+', label: language === 'fr' ? 'Espèces de Plants' : 'Plant Species' },
        { value: '80K+', label: language === 'fr' ? 'Plants en Pépinière' : 'Plants in Nursery' },
        { value: '6', label: language === 'fr' ? 'Régions de Production' : 'Production Regions' },
    ];

    return (
        <div className="min-h-screen bg-background font-sans">
            {/* Hero */}
            <div className="relative h-[35vh] min-h-[280px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-botanical">
                    <img
                        src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2500&auto=format&fit=crop"
                        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
                        alt="Agribusiness"
                    />
                </div>
                <div className="relative z-10 text-center text-white px-4 max-w-4xl">
                    <p className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4">B2B</p>
                    <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4 tracking-tight">{t('agri.title')}</h1>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed font-light">{t('agri.subtitle')}</p>
                </div>
            </div>

            {/* Stats Bar */}
            <section className="py-10 bg-primary/5 border-b border-primary/10">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, i) => (
                            <div key={i} className="group">
                                <p className="font-serif text-3xl md:text-5xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">{stat.value}</p>
                                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mt-2">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-20 bg-background">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
                            {language === 'fr' ? 'Solutions B2B & Export' : 'B2B & Export Solutions'}
                        </h2>
                        <div className="w-20 h-1 bg-gold mx-auto mb-6 rounded-full" />
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
                            {language === 'fr' ? 'Nous accompagnons les professionnels avec une expertise complète du terroir malgache.' : 'Supporting professionals with complete expertise of the Malagasy terroir.'}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {services.map((service, i) => (
                            <div key={i} className="p-8 bg-white rounded-2xl border border-border pb-10 shadow-sm hover:shadow-xl transition-all duration-300 group">
                                <div className="text-primary mb-6 bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">{service.icon}</div>
                                <h3 className="font-serif text-2xl font-bold mb-4">{service.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6 h-12">
                                    {/* Handle the weird object property name if it exists or use default */}
                                    {/* @ts-ignore */}
                                    {service.desc || service[0]}
                                </p>
                                <ul className="space-y-3 pt-6 border-t border-border/50">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                                            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Process */}
            <section className="py-20 bg-muted/30">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                            {language === 'fr' ? 'Notre Processus d\'Excellence' : 'Our Excellence Process'}
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
                            {language === 'fr' ? 'Un contrôle rigoureux de la plantation à l\'exportation.' : 'Rigorous control from plantation to export.'}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {[
                            { icon: <Droplets className="w-10 h-10" />, title: language === 'fr' ? '1. Distillation' : '1. Distillation', desc: language === 'fr' ? 'Extraction lente basse pression.' : 'Slow low-pressure extraction.' },
                            { icon: <Shield className="w-10 h-10" />, title: language === 'fr' ? '2. Tests GC-MS' : '2. GC-MS Testing', desc: language === 'fr' ? 'Pureté garantie par analyse.' : 'Purity guaranteed by analysis.' },
                            { icon: <FileCheck className="w-10 h-10" />, title: language === 'fr' ? '3. Certification' : '3. Certification', desc: language === 'fr' ? 'Traçabilité totale par lot.' : 'Full batch traceability.' },
                            { icon: <Leaf className="w-10 h-10" />, title: language === 'fr' ? '4. Export' : '4. Export', desc: language === 'fr' ? 'Logistique mondiale sécurisée.' : 'Secure global logistics.' },
                        ].map((step, i) => (
                            <div key={i} className="text-center p-8 bg-white rounded-2xl border border-border pb-10 shadow-sm hover:shadow-xl transition-all duration-300">
                                <div className="text-primary mx-auto mb-6 bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center">{step.icon}</div>
                                <h3 className="font-serif text-xl font-bold mb-4">{step.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Target Markets */}
            <section className="py-20 bg-background">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                            {language === 'fr' ? 'Partenariats Mondiaux' : 'Global Partnerships'}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                icon: <Users className="w-6 h-6" />,
                                title: language === 'fr' ? 'B2C Madagascar' : 'B2C Madagascar',
                                desc: language === 'fr' ? 'Vente au détail et livraison locale rapide' : 'Retail sales and fast local delivery',
                                color: 'bg-emerald-600',
                            },
                            {
                                icon: <Building className="w-6 h-6" />,
                                title: language === 'fr' ? 'B2B Local' : 'B2B Local',
                                desc: language === 'fr' ? 'Spas, pharmacies et industries locales' : 'Spas, pharmacies and local industries',
                                color: 'bg-teal-700',
                            },
                            {
                                icon: <Globe className="w-6 h-6" />,
                                title: language === 'fr' ? 'B2C Export' : 'B2C Export',
                                desc: language === 'fr' ? 'Vente en ligne avec livraison mondiale' : 'Online sales with worldwide delivery',
                                color: 'bg-primary',
                            },
                            {
                                icon: <BarChart3 className="w-6 h-6" />,
                                title: language === 'fr' ? 'B2B Export' : 'B2B Export',
                                desc: language === 'fr' ? 'Importateurs et marques internationales' : 'Importers and international brands',
                                color: 'bg-botanical',
                            },
                        ].map((market, i) => (
                            <div key={i} className="bg-white rounded-xl p-8 border border-border/50 shadow-sm text-center hover:shadow-md transition-shadow">
                                <div className={`w-14 h-14 rounded-full ${market.color} flex items-center justify-center text-white mx-auto mb-6`}>
                                    {market.icon}
                                </div>
                                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{market.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{market.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-botanical text-white text-center">
                <div className="container px-4 md:px-6 max-w-3xl mx-auto">
                    <TreePine className="w-12 h-12 text-gold mx-auto mb-6" />
                    <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
                        {language === 'fr' ? 'Co-créons l\'excellence' : 'Co-creating excellence'}
                    </h2>
                    <p className="text-white/80 text-xl mb-12 font-light">
                        {language === 'fr'
                            ? 'Contactez notre service commercial pour une proposition sur mesure.'
                            : 'Contact our sales department for a tailored proposal.'}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/contact">
                            <Button size="lg" className="bg-gold text-botanical hover:bg-gold-light font-bold rounded-full px-12 h-16 text-lg min-w-[250px]">
                                {t('btn.request_quote')}
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                        <a href={`https://wa.me/${t('contact.phone_link')}`} target="_blank" rel="noopener noreferrer">
                            <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 font-bold rounded-full px-12 h-16 text-lg min-w-[250px]">
                                <MessageCircle className="w-5 h-5 mr-2" />
                                WhatsApp
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Agribusiness;
