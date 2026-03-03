import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { products, getFeaturedProducts } from "@/data/products";
import { nurseryPlants, getFeaturedNursery } from "@/data/nurseries";
import ProductCard from "@/components/ProductCard";
import NurseryCard from "@/components/NurseryCard";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import { Leaf, Globe, Shield, Sprout, ArrowRight, MessageCircle, TreePine, Droplets, ChevronDown } from "lucide-react";

const Index = () => {
  const { t, language } = useLanguage();
  const featuredProducts = getFeaturedProducts().slice(0, 3);
  const featuredNursery = getFeaturedNursery().slice(0, 3);

  const categories = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: language === 'fr' ? 'Huiles Essentielles' : 'Essential Oils',
      desc: language === 'fr' ? 'Ravintsara, Ylang Ylang, Katrafay et plus de 20 variétés' : 'Ravintsara, Ylang Ylang, Katrafay and 20+ varieties',
      count: products.filter(p => p.category === 'essential-oil').length,
      link: '/catalogue?tab=products&cat=essential-oil',
      color: 'bg-primary',
    },
    {
      icon: <Sprout className="w-8 h-8" />,
      title: language === 'fr' ? 'Pépinière & Plants' : 'Nursery & Seedlings',
      desc: language === 'fr' ? 'Cacao, Cannelle, Café, Girofle, Ravintsara, Khaya et plus' : 'Cocoa, Cinnamon, Coffee, Clove, Ravintsara, Khaya and more',
      count: nurseryPlants.length,
      link: '/catalogue?tab=nursery',
      color: 'bg-botanical-light',
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: language === 'fr' ? 'Épice & Délice' : 'Spice & Delight',
      desc: language === 'fr' ? 'Vanille, Girofle, Maniguette, Miel sauvage' : 'Vanilla, Clove, Grains of Paradise, Wild Honey',
      count: products.filter(p => p.category === 'spice' || p.category === 'food').length,
      link: '/catalogue?tab=products&cat=spice',
      color: 'bg-gold',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: language === 'fr' ? 'Cosmétiques Naturels' : 'Natural Cosmetics',
      desc: language === 'fr' ? 'Savons artisanaux, huiles de soin, produits de beauté' : 'Artisanal soaps, care oils, beauty products',
      count: products.filter(p => p.category === 'cosmetic').length,
      link: '/catalogue?tab=products&cat=cosmetic',
      color: 'bg-[#b68d40]', // A refined gold/earth tone
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">

      {/* ═══════════════════════════════════════ */}
      {/* HERO SECTION */}
      {/* ═══════════════════════════════════════ */}
      <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Madagascar Landscape" className="w-full h-full object-cover" style={{ animation: 'slowZoom 30s ease-in-out infinite alternate' }} />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center pb-24" style={{ animation: 'fadeInUp 1s ease-out forwards' }}>
          {/* Logo as requested */}
          <div className="mb-10 hover:scale-105 transition-transform duration-500">
            <img src={logo} alt="Ilon'Ala Logo" className="h-32 md:h-48 w-auto object-contain" />
          </div>

          <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-white/90 font-bold mb-6">
            Madagascar <span className="text-gold mx-2">•</span> Natural <span className="text-gold mx-2">•</span> Premium
          </p>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            {t('hero.title')}
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 font-medium tracking-wide italic">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            <Link to="/catalogue">
              <Button size="lg" className="bg-[#1e4d2b] hover:bg-[#163d22] text-white font-bold min-w-[220px] h-14 text-base rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
                {t('hero.cta_products')}
              </Button>
            </Link>
            <Link to="/catalogue?tab=nursery">
              <Button size="lg" variant="outline" className="border-white/80 text-white hover:bg-white hover:text-[#1e4d2b] min-w-[220px] h-14 text-base rounded-full backdrop-blur-md bg-white/10 transition-all duration-300 font-bold flex items-center gap-2">
                <Sprout className="w-5 h-5 mr-2" />
                {t('hero.cta_nursery')}
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/30 animate-bounce">
          <ChevronDown className="w-10 h-10" />
        </div>
      </section>


      {/* ═══════════════════════════════════════ */}
      {/* PHILOSOPHY SECTION — Enhanced Branding */}
      {/* ═══════════════════════════════════════ */}
      <section id="philosophy" className="py-24 md:py-32 px-4 bg-white overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-gold font-bold mb-6">{t('section.philosophy')}</p>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              {t('section.welcome')}
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center text-muted-foreground text-lg md:text-xl leading-relaxed space-y-8">
              <p>
                {language === 'fr'
                  ? <>Chez <strong className="text-[#1e4d2b]">Ilon'Ala</strong>, nous ne sommes pas de simples marchands. Nous sommes des <span className="text-primary font-bold">producteurs directs</span>.</>
                  : <>At <strong className="text-[#1e4d2b]">Ilon'Ala</strong>, we are more than just merchants. We are <span className="text-primary font-bold">direct producers</span>.</>
                }
              </p>
              <p>
                {language === 'fr'
                  ? <>De nos <span className="text-primary font-bold">pépinières intégrées</span> à nos propres concessions forestières à Madagascar, nous maîtrisons chaque goutte. Notre modèle vertical garantit une pureté absolue et une traçabilité totale, de la graine au flacon, pour nos partenaires à travers le <span className="text-primary font-bold">monde entier</span>.</>
                  : <>From our <span className="text-primary font-bold">integrated nurseries</span> to our own forest concessions in Madagascar, we control every drop. Our vertical model ensures absolute purity and total traceability, from seed to bottle, for our partners <span className="text-primary font-bold">worldwide</span>.</>
                }
              </p>
            </div>
          </div>

          {/* Features Grid - As per image */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
            <div className="space-y-6">
              <div className="bg-white p-7 rounded-2xl border border-primary/10 flex flex-col items-center text-center group shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="bg-primary/5 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                  <TreePine className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-foreground mb-2">{t('trust.plantation')}</h4>
                <p className="text-[10px] text-muted-foreground leading-relaxed">{t('trust.plantation.desc')}</p>
              </div>
              <div className="bg-white p-7 rounded-2xl border border-primary/10 flex flex-col items-center text-center mt-6 group shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="bg-primary/5 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                  <Sprout className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-foreground mb-2">{t('trust.nursery')}</h4>
                <p className="text-[10px] text-muted-foreground leading-relaxed">{t('trust.nursery.desc')}</p>
              </div>
            </div>
            <div className="space-y-6 pt-10">
              <div className="bg-white p-7 rounded-2xl border border-primary/10 flex flex-col items-center text-center group shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="bg-primary/5 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                  <Globe className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-foreground mb-2">{t('trust.export')}</h4>
                <p className="text-[10px] text-muted-foreground leading-relaxed">{t('trust.export.desc')}</p>
              </div>
              <div className="bg-white p-7 rounded-2xl border border-primary/10 flex flex-col items-center text-center mt-6 group shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="bg-primary/5 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                  <Shield className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-foreground mb-2">{t('trust.quality')}</h4>
                <p className="text-[10px] text-muted-foreground leading-relaxed">{t('trust.quality.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* PRODUCT CATEGORIES */}
      {/* ═══════════════════════════════════════ */}
      <section id="categories" className="py-24 bg-[#f5f6f1]">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-gold font-bold mb-4">ILON'ALA</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1e4d2b] mb-6 uppercase tracking-tight">{t('section.categories')}</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">{language === 'fr' ? 'Une biodiversité unique, une qualité sans compromis.' : 'A unique biodiversity, uncompromising quality.'}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {categories.map((cat, i) => (
              <Link to={cat.link} key={i} className="group">
                <div className="relative bg-[#f5f1e8] rounded-2xl p-6 border border-primary/5 pb-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full flex flex-col items-center text-center">
                  <div className={`w-14 h-14 rounded-xl ${cat.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    {cat.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-2">
                    {cat.desc}
                  </p>
                  <div className="pt-4 border-t border-primary/10 w-full mt-auto">
                    <span className="text-xs font-bold text-primary bg-primary/5 px-4 py-1 rounded-full uppercase tracking-wider">{cat.count} {language === 'fr' ? 'produits' : 'products'}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* FEATURED PRODUCTS */}
      {/* ═══════════════════════════════════════ */}
      <section id="featured-products" className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-gold font-bold mb-4">{language === 'fr' ? 'Sélection' : 'Selection'}</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1e4d2b] mb-6 uppercase tracking-tight">{t('section.products')}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto italic">
              {language === 'fr' ? 'Le meilleur de notre terroir, de la plantation à votre flacon' : 'The best of our terroir, from plantation to your bottle'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/catalogue">
              <Button variant="outline" className="border-[#1e4d2b] text-[#1e4d2b] hover:bg-[#1e4d2b] hover:text-white px-12 py-6 rounded-full font-bold transition-all duration-300 shadow-sm hover:shadow-xl text-base tracking-wide h-auto bg-transparent">
                {t('btn.view_catalogue')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* FEATURED NURSERY PLANTS — DARK SECTION */}
      {/* ═══════════════════════════════════════ */}
      <section id="featured-nursery" className="py-24 bg-[#1e4d2b] text-white overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-gold font-bold mb-6">{language === 'fr' ? 'Nos Plants de Pépinière' : 'Our Nursery Plants'}</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight text-white">{t('section.nursery')}</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto italic">
              {language === 'fr' ? 'Plants premium prêts à planter, pour agriculteurs et investisseurs' : 'Premium seedlings ready to plant, for farmers and investors'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredNursery.map((plant) => (
              <NurseryCard key={plant.id} plant={plant} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/catalogue?tab=nursery">
              <Button className="bg-white text-[#1e4d2b] hover:bg-[#f5f6f1] px-12 py-6 rounded-full font-bold transition-all duration-300 shadow-xl hover:shadow-white/20 text-base tracking-widest uppercase h-auto">
                {t('btn.view_all')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* B2B / AGRIBUSINESS CTA — LIGHT SECTION */}
      {/* ═══════════════════════════════════════ */}
      <section id="b2b-cta" className="py-32 bg-[#f5f6f1] text-[#1e4d2b] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <span className="text-gold font-bold uppercase tracking-widest text-xs">{t('nav.agribusiness')}</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1e4d2b] tracking-tight uppercase">{t('section.partner')}</h2>
              <p className="text-[#1e4d2b]/80 text-lg leading-relaxed">
                {language === 'fr'
                  ? 'Que vous cherchiez des huiles essentielles en vrac, des plants pour vos plantations ou un partenaire de sourcing fiable à Madagascar, ILON\'ALA vous garantit qualité et traçabilité de la pépinière à votre porte.'
                  : 'Whether you need bulk essential oils, seedlings for your plantations, or a reliable sourcing partner in Madagascar, ILON\'ALA guarantees quality and traceability from nursery to your door.'}
              </p>
              <ul className="space-y-2 text-[#1e4d2b]/70 text-sm">
                {(language === 'fr'
                  ? ['Vente en gros d\'huiles essentielles et épices', 'Pépinières en gros (100+ plants)', 'Conseil en culture, récolte et distillation', 'Traçabilité et sourcing premium']
                  : ['Wholesale essential oils and spices', 'Bulk nursery supply (100+ plants)', 'Cultivation, harvest and distillation consulting', 'Traceability and premium sourcing']
                ).map((item, i) => (
                  <li key={i} className="flex items-center gap-2 font-medium tracking-wide"><Leaf className="w-4 h-4 text-gold flex-shrink-0" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4 items-center md:items-start lg:pl-12">
              <Link to="/contact">
                <Button size="lg" className="bg-[#c8a84e] text-white hover:bg-[#b68d40] font-bold rounded-full px-16 h-16 text-lg min-w-[300px] shadow-xl hover:shadow-2xl transition-all duration-300">
                  {t('btn.get_quote')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div >
  );
};

export default Index;
