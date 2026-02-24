
import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useLanguage } from "@/contexts/LanguageContext";

const Catalogue = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<string>("all");

  // Aligning categories with actual data types
  const filters = [
    { key: "all", label: t('cat.all') },
    { key: "essential-oil", label: t('cat.essential_oils') },
    { key: "cosmetic", label: t('cat.cosmetics') },
    { key: "spice", label: t('cat.spices') },
    { key: "food", label: t('cat.food') },
  ];

  const filtered = filter === "all" ? products : products.filter(p => p.category === filter);

  return (
    <div className="py-16 px-4 bg-background min-h-screen">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-3">Collection Ilon'ALA</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-3">{t('nav.catalogue')}</h1>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg leading-relaxed">
            {t('cat.subtitle')}
          </p>
          <div className="w-24 h-0.5 mx-auto bg-primary/20 mt-8" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${filter === f.key
                  ? "bg-primary text-primary-foreground shadow-md transform scale-105"
                  : "bg-white text-muted-foreground border border-border hover:border-primary/40 hover:text-foreground hover:bg-muted/20"
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Count */}
        <div className="flex justify-between items-center mb-6 px-1">
          <p className="text-sm text-muted-foreground">
            {filtered.length} {filtered.length > 1 ? (t('cat.products_suffix') || "produits") : (t('cat.product_suffix') || "produit")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-20 bg-muted/20 rounded-xl border border-dashed border-border">
            <p className="text-muted-foreground">{t('cat.no_products')}</p>
            <button
              onClick={() => setFilter('all')}
              className="mt-4 text-primary hover:underline font-medium"
            >
              {t('cat.view_all')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalogue;
