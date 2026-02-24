import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png"; // Assuming logo is available here as per V2 instructions

const Index = () => {
  const { t } = useLanguage();
  // Filter for specific featured products or just take first few
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">

      {/* HERO SECTION - V2 Design */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Madagascar Landscape" className="w-full h-full object-cover animate-scale-slow" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/20" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center animate-fade-in-up">
          {/* Logo Integration */}
          <img
            src={logo}
            alt="Ilon'ALA"
            className="h-32 md:h-48 mb-8 drop-shadow-2xl filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-700"
          />

          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-white/80 font-medium mb-4">
            Madagascar • Natural • Premium
          </p>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            {t('hero.title')}
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/catalogue">
              <Button size="lg" className="bg-primary hover:bg-gold text-primary-foreground hover:text-botanical-foreground font-bold min-w-[200px] h-14 text-lg rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                {t('nav.catalogue')}
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-botanical min-w-[200px] h-14 text-lg rounded-full backdrop-blur-md bg-white/10 transition-all duration-300">
                {t('hero.contact')}
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-4">Notre Philosophie</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-8 text-botanical">Bienvenue chez Ilon'ALA</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-10 rounded-full" />
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-light">
            <strong className="text-foreground font-medium">Ilon'ALA</strong> propose des huiles essentielles et des savons naturels de qualité premium,
            issus des richesses botaniques de <span className="text-primary font-medium">Madagascar</span>. Chaque produit est sélectionné avec soin
            pour ses propriétés authentiques et son origine traçable. Notre engagement est simple : vous offrir
            le meilleur de la nature malgache, dans le respect de l'environnement et des hommes.
          </p>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">{t('section.products')}</h2>
            <p className="text-muted-foreground">Une sélection de nos meilleures ventes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/catalogue">
              <Button variant="outline" className="border-primary/30 text-primary px-10 py-6 rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg text-lg tracking-wide h-auto">
                View Entire Catalogue
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-botanical text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10 filter invert"></div>
        <div className="container px-4 md:px-6 relative z-10 text-center max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-3xl md:text-5xl font-bold">Partner with the Source</h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Whether you need bulk essential oils for your industry or premium packaged products for your retail store, ILON’ALA guarantees quality from the plantation to your door.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg" className="bg-gold text-botanical hover:bg-gold-light font-bold rounded-full px-8 h-14 text-lg">
              {t('nav.quote')}
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;
