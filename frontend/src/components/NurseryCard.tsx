
import { Link } from "react-router-dom";
import { NurseryPlant } from "@/data/nurseries";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Sprout, TreePine } from "lucide-react";

interface NurseryCardProps {
    plant: NurseryPlant;
}

const NurseryCard = ({ plant }: NurseryCardProps) => {
    const { t, language } = useLanguage();

    const categoryLabel = {
        'tropical-tree': language === 'fr' ? 'Arbre Tropical' : 'Tropical Tree',
        'spice-tree': language === 'fr' ? 'Arbre à Épices' : 'Spice Tree',
        'aromatic': language === 'fr' ? 'Aromatique' : 'Aromatic',
        'timber': language === 'fr' ? 'Bois Précieux' : 'Timber',
        'fruit-tree': language === 'fr' ? 'Arbre Fruitier' : 'Fruit Tree',
    };

    const formatPrice = (price: number, currency: string) => {
        if (currency === 'MGA') return `${price.toLocaleString()} Ar`;
        if (currency === 'EUR') return `${price} €`;
        return `$${price}`;
    };

    return (
        <div className="group relative bg-card rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50">
            {/* Image */}
            <div className="aspect-square overflow-hidden bg-muted relative group-hover:shadow-inner">
                {/* Badge */}
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                    <span className="bg-lime-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                        <Sprout className="w-3 h-3" />
                        {categoryLabel[plant.category]}
                    </span>
                </div>

                {/* Ready to plant badge */}
                {plant.readyToPlant && (
                    <div className="absolute top-4 right-4 z-20">
                        <span className="bg-emerald-500 text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                            ✓ {t('nursery.ready_to_plant')}
                        </span>
                    </div>
                )}

                <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                />

                {/* Hover overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                <div className="absolute inset-x-0 bottom-6 flex justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Link to={`/pepiniere/${plant.slug}`}>
                        <span className="bg-white/95 backdrop-blur-sm text-[#1A3C34] text-xs font-bold uppercase tracking-wide px-5 py-2.5 rounded-full shadow-md hover:bg-white hover:shadow-lg transition-all flex items-center gap-2">
                            {t('btn.view_sheet')} <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
                <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1 italic">{plant.species}</p>
                    <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {plant.name}
                    </h3>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2">
                    {plant.description[language]}
                </p>

                {/* Stock & Plants info */}
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-100">
                        <TreePine className="w-3.5 h-3.5" />
                        <span className="font-bold">{plant.plantsAvailable.toLocaleString()}</span>
                        <span>{language === 'fr' ? 'plants disponibles' : 'available plants'}</span>
                    </div>
                    <span className="text-muted-foreground/30">•</span>
                    <span>{plant.origin}</span>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-border">
                    {plant.priceType === 'fixed' && plant.price ? (
                        <div className="flex items-baseline gap-1">
                            <span className="font-bold text-lg text-primary">
                                {formatPrice(plant.price, plant.currency || 'MGA')}
                            </span>
                            <span className="text-xs text-muted-foreground">/ {t('nursery.per_unit')}</span>
                        </div>
                    ) : (
                        <span className="font-medium text-sm text-muted-foreground">{t('btn.contact_price')}</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NurseryCard;
