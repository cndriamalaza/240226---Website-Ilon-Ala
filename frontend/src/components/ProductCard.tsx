
import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { t, language } = useLanguage();

  const categoryLabels: Record<string, string> = {
    'essential-oil': language === 'fr' ? 'Huile Essentielle' : 'Essential Oil',
    'cosmetic': language === 'fr' ? 'Cosmétique' : 'Cosmetic',
    'spice': language === 'fr' ? 'Épice' : 'Spice',
    'food': language === 'fr' ? 'Épicerie' : 'Pantry',
    'vegetable-oil': language === 'fr' ? 'Huile Végétale' : 'Vegetable Oil',
  };

  return (
    <div className="group relative bg-card rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50">
      {/* Image */}
      <div className="aspect-square overflow-hidden bg-muted relative group-hover:shadow-inner">
        {/* Badges */}
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          <span className="bg-[#1e4d2b] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
            {categoryLabels[product.category] || product.category}
          </span>
        </div>

        {/* Stock badge */}
        {product.stock <= 50 && product.stock > 0 && (
          <div className="absolute top-4 right-4 z-20">
            <span className="bg-amber-500 text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
              {t('product.limited')}
            </span>
          </div>
        )}

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Gradient overlay on hover */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

        {/* View sheet button on hover */}
        <div className="absolute inset-x-0 bottom-6 flex justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <Link to={`/produit/${product.slug}`}>
            <span className="bg-white/95 backdrop-blur-sm text-[#1A3C34] text-xs font-bold uppercase tracking-wide px-5 py-2.5 rounded-full shadow-md hover:bg-white hover:shadow-lg transition-all flex items-center gap-2">
              {t('btn.view_sheet')} <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{product.latinName || categoryLabels[product.category]}</p>
          <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description[language]}
        </p>

        <div className="pt-4 flex items-center justify-between border-t border-border">
          {product.priceType === 'fixed' && product.price ? (
            <span className="font-bold text-lg text-primary">
              {product.price} {product.currency === 'MGA' ? 'Ar' : product.currency === 'EUR' ? '€' : '$'}
            </span>
          ) : (
            <span className="font-medium text-sm text-muted-foreground">{t('btn.contact_price')}</span>
          )}

          {/* Market badges */}
          <div className="flex gap-1.5 opacity-80">
            {product.isB2B && (
              <span className="text-[9px] font-bold uppercase bg-muted px-1.5 py-0.5 rounded text-muted-foreground border border-border/10">B2B</span>
            )}
            {product.isB2C && (
              <span className="text-[9px] font-bold uppercase bg-primary/5 px-1.5 py-0.5 rounded text-primary border border-primary/10">B2C</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
