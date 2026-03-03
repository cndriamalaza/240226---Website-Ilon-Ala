import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "@/data/products";
import { nurseryPlants } from "@/data/nurseries";
import ProductCard from "@/components/ProductCard";
import NurseryCard from "@/components/NurseryCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { Droplets, Sprout } from "lucide-react";

const Catalogue = () => {
  const { t, language } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();

  const initialTab = searchParams.get('tab') || 'products';
  const initialCat = searchParams.get('cat') || 'all';

  const [activeTab, setActiveTab] = useState<'products' | 'nursery'>(initialTab as any);
  const [productFilter, setProductFilter] = useState(initialCat);
  const [nurseryFilter, setNurseryFilter] = useState('all');

  useEffect(() => {
    const tab = searchParams.get('tab');
    const cat = searchParams.get('cat');
    if (tab === 'nursery' || tab === 'products') setActiveTab(tab);
    if (cat) setProductFilter(cat);
  }, [searchParams]);

  const productFilters = [
    { key: "all", label: t('cat.all') },
    { key: "essential-oil", label: t('cat.essential_oils') },
    { key: "cosmetic", label: t('cat.cosmetics') },
    { key: "spice", label: t('cat.spices') },
    { key: "food", label: t('cat.food') },
  ];

  const nurseryFilters = [
    { key: "all", label: t('cat.nursery_all') },
    { key: "tropical-tree", label: t('cat.tropical_tree') },
    { key: "spice-tree", label: t('cat.spice_tree') },
    { key: "aromatic", label: t('cat.aromatic') },
    { key: "timber", label: t('cat.timber') },
  ];

  const filteredProducts = productFilter === "all" ? products : products.filter(p => p.category === productFilter);
  const filteredNursery = nurseryFilter === "all" ? nurseryPlants : nurseryPlants.filter(p => p.category === nurseryFilter);

  const handleTabChange = (tab: 'products' | 'nursery') => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  return (
    <div className="pt-10 pb-16 px-4 bg-background min-h-screen">
      <div className="container mx-auto">
        {/* Header */}
        <section className="bg-botanical text-white py-14 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596395912440-27f6e3c5453e?q=80&w=2500&auto=format&fit=crop')] opacity-20 bg-cover bg-center mix-blend-overlay" />
          <div className="container relative z-10 px-4 text-center">
            <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              {t('nav.catalogue')}
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-base font-light italic">
              {t('cat.subtitle')}
            </p>
          </div>
        </section>
        {/* Tab Switcher */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex bg-muted/40 rounded-full p-1.5 border border-border/50">
            <button
              onClick={() => handleTabChange('products')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === 'products'
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              <Droplets className="w-4 h-4" />
              {t('cat.tab_products')}
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${activeTab === 'products' ? 'bg-white/20' : 'bg-muted'}`}>
                {products.length}
              </span>
            </button>
            <button
              onClick={() => handleTabChange('nursery')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === 'nursery'
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              <Sprout className="w-4 h-4" />
              {t('cat.tab_nursery')}
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${activeTab === 'nursery' ? 'bg-white/20' : 'bg-muted'}`}>
                {nurseryPlants.length}
              </span>
            </button>
          </div>
        </div>

        {/* ════════════════════════════ */}
        {/* PRODUCTS TAB */}
        {/* ════════════════════════════ */}
        {activeTab === 'products' && (
          <div className="space-y-16">
            {/* Product Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {productFilters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setProductFilter(f.key)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${productFilter === f.key
                    ? "bg-primary text-primary-foreground shadow-md transform scale-105"
                    : "bg-white text-muted-foreground border border-border hover:border-primary/40 hover:text-foreground hover:bg-muted/20"
                    }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Structured Sections by Category */}
            {productFilters.filter(f => f.key !== 'all').map((cat) => {
              const catProducts = filteredProducts.filter(p => p.category === cat.key);
              if (catProducts.length === 0) return null;

              return (
                <section key={cat.key} className="space-y-8 animate-fade-in">
                  <div className="flex items-center gap-4">
                    <div className="h-px bg-border flex-1" />
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-botanical px-4">
                      {cat.label}
                    </h2>
                    <div className="h-px bg-border flex-1" />
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
                    {catProducts.map((p) => (
                      <ProductCard key={p.slug} product={p} />
                    ))}
                  </div>
                </section>
              );
            })}

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-20 bg-muted/20 rounded-xl border border-dashed border-border">
                <p className="text-muted-foreground">{t('cat.no_products')}</p>
                <button onClick={() => setProductFilter('all')} className="mt-4 text-primary hover:underline font-medium">
                  {t('cat.view_all')}
                </button>
              </div>
            )}
          </div>
        )}

        {/* ════════════════════════════ */}
        {/* NURSERY TAB */}
        {/* ════════════════════════════ */}
        {activeTab === 'nursery' && (
          <>
            {/* Nursery Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {nurseryFilters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setNurseryFilter(f.key)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${nurseryFilter === f.key
                    ? "bg-lime-600 text-white shadow-md transform scale-105"
                    : "bg-white text-muted-foreground border border-border hover:border-lime-400 hover:text-foreground hover:bg-muted/20"
                    }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Nursery Count */}
            <div className="flex justify-between items-center mb-6 px-1">
              <p className="text-sm text-muted-foreground">
                {filteredNursery.length} {language === 'fr' ? 'plants disponibles' : 'plants available'}
              </p>
              <p className="text-sm text-emerald-600 font-medium">
                {filteredNursery.reduce((sum, p) => sum + p.plantsAvailable, 0).toLocaleString()} {language === 'fr' ? 'plants en stock total' : 'total plants in stock'}
              </p>
            </div>

            {/* Nursery Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
              {filteredNursery.map((p) => (
                <NurseryCard key={p.slug} plant={p} />
              ))}
            </div>

            {/* Empty State */}
            {filteredNursery.length === 0 && (
              <div className="text-center py-20 bg-muted/20 rounded-xl border border-dashed border-border">
                <p className="text-muted-foreground">{t('cat.no_products')}</p>
                <button onClick={() => setNurseryFilter('all')} className="mt-4 text-primary hover:underline font-medium">
                  {t('cat.view_all')}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Catalogue;
