
import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { t, language } = useLanguage();

  return (
    <div className="group relative bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50">
      {/* Image */}
      <div className="aspect-[4/5] overflow-hidden bg-muted relative group-hover:shadow-inner">
        {/* Badge */}
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          <span className="bg-[#3A5A40] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
            {product.category === 'essential-oil' ? 'HUILE ESSENTIELLE' : product.category === 'cosmetic' ? 'COSMETIQUE' : product.category === 'spice' ? 'EPICE' : 'PRODUIT'}
          </span>
        </div>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Subtle Gradient Overlay - Bottom Only */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

        {/* "Voir la fiche" Button - Positioned in lower third */}
        <div className="absolute inset-x-0 bottom-6 flex justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <Link to={`/produit/${product.slug}`}>
            <span className="bg-white/95 backdrop-blur-sm text-[#1A3C34] text-xs font-bold uppercase tracking-wide px-5 py-2.5 rounded-full shadow-md hover:bg-white hover:shadow-lg transition-all flex items-center gap-2">
              Voir la fiche <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{product.latinName || product.category}</p>
          <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description[language]}
        </p>

        <div className="pt-4 flex items-center justify-between border-t border-border">
          {product.isB2C && product.price ? (
            <span className="font-bold text-lg text-primary">{product.price} €</span>
          ) : (
            <span className="font-medium text-sm text-muted-foreground">{t('btn.contact_price')}</span>
          )}

          <Link to={`/produit/${product.slug}`} className="hidden md:block">
            {/* Kept hidden for layout structure if needed, or remove entirely. Removing entirely is cleaner. */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
