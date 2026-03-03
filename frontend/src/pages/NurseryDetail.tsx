import { useParams, Link } from "react-router-dom";
import { nurseryPlants } from "@/data/nurseries";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Globe, MessageCircle, Shield, Sprout, TreePine, MapPin, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

const NurseryDetail = () => {
    const { slug } = useParams();
    const { t, language } = useLanguage();
    const { addItem } = useCart();

    const plant = nurseryPlants.find(p => p.slug === slug);

    if (!plant) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">{t('product.not_found')}</h1>
                    <Link to="/catalogue?tab=nursery">
                        <Button variant="outline" className="border-[#1e4d2b] text-[#1e4d2b] hover:bg-[#1e4d2b] hover:text-white rounded-full transition-all">
                            {t('product.back_catalogue')}
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    const formatPrice = (price: number, currency: string) => {
        if (currency === 'MGA') return `${price.toLocaleString()} Ar`;
        if (currency === 'EUR') return `${price} €`;
        return `$${price}`;
    };

    const handleAddToCart = () => {
        addItem({
            id: plant.id,
            type: 'nursery',
            name: plant.name,
            price: plant.price,
            priceType: plant.priceType,
            currency: plant.currency,
            image: plant.image,
            slug: plant.slug,
        }, 10); // Minimum 10 for nursery
        toast.success(language === 'fr' ? 'Ajouté au panier !' : 'Added to cart!');
    };

    const categoryLabel = {
        'tropical-tree': language === 'fr' ? 'Arbre Tropical' : 'Tropical Tree',
        'spice-tree': language === 'fr' ? 'Arbre à Épices' : 'Spice Tree',
        'aromatic': language === 'fr' ? 'Aromatique' : 'Aromatic',
        'timber': language === 'fr' ? 'Bois Précieux' : 'Timber',
        'fruit-tree': language === 'fr' ? 'Arbre Fruitier' : 'Fruit Tree',
    };

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Breadcrumbs */}
            <div className="bg-muted/30 border-b border-border">
                <div className="container px-4 md:px-6 py-4 text-sm text-muted-foreground">
                    <Link to="/" className="hover:text-primary">{t('nav.home')}</Link> /
                    <Link to="/catalogue?tab=nursery" className="hover:text-primary mx-1">{t('nav.nursery')}</Link> /
                    <span className="text-foreground font-medium mx-1">{plant.name}</span>
                </div>
            </div>

            <div className="container px-4 md:px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

                    {/* Image Section */}
                    <div className="space-y-6">
                        <div className="aspect-square bg-white rounded-2xl overflow-hidden border border-border/50 shadow-lg relative group">
                            <img
                                src={plant.image}
                                alt={plant.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {plant.readyToPlant && (
                                <div className="absolute top-4 right-4">
                                    <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                                        <Sprout className="w-3.5 h-3.5" /> {t('nursery.ready_to_plant')}
                                    </span>
                                </div>
                            )}
                        </div>
                        <div className="flex gap-4 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                            <TreePine className="w-8 h-8 text-emerald-600 opacity-80" />
                            <div>
                                <h4 className="font-bold text-sm text-foreground">{t('nursery.plants_available')}</h4>
                                <p className="text-lg font-bold text-emerald-600">{plant.plantsAvailable.toLocaleString()} plants</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-lime-600 font-bold uppercase tracking-widest text-xs mb-2 block">
                                {categoryLabel[plant.category]}
                            </span>
                            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-2">
                                {plant.name}
                            </h1>
                            <p className="text-lg text-muted-foreground italic font-serif">
                                {plant.species}
                            </p>
                        </div>

                        <div className="prose text-muted-foreground leading-relaxed">
                            <p>{plant.description[language]}</p>
                        </div>

                        {/* Specs */}
                        <div className="flex flex-wrap gap-4 text-sm text-foreground/80 font-medium">
                            <div className="flex items-center gap-2 bg-muted/30 px-3 py-1.5 rounded-full border border-border">
                                <MapPin className="w-4 h-4 text-primary" />
                                {plant.origin}
                            </div>
                            <div className="flex items-center gap-2 bg-muted/30 px-3 py-1.5 rounded-full border border-border">
                                <Globe className="w-4 h-4 text-primary" />
                                {plant.format[language]}
                            </div>
                        </div>

                        {/* Pricing */}
                        <div className="p-6 bg-white border border-border rounded-xl shadow-sm space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-sm text-muted-foreground uppercase tracking-widest">{t('product.retail_price')}</span>
                                {plant.priceType === 'fixed' && plant.price ? (
                                    <div className="text-right">
                                        <span className="font-serif text-3xl font-bold text-primary">
                                            {formatPrice(plant.price, plant.currency || 'MGA')}
                                        </span>
                                        <span className="text-sm text-muted-foreground ml-1">/ {t('nursery.per_unit')}</span>
                                    </div>
                                ) : (
                                    <span className="font-serif text-xl font-bold text-muted-foreground">{t('btn.contact_price')}</span>
                                )}
                            </div>

                            <p className="text-sm text-muted-foreground">MOQ: {plant.moq}</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <Button onClick={handleAddToCart} className="w-full bg-[#1e4d2b] hover:bg-[#163d22] text-white font-bold text-lg h-14 rounded-full shadow-lg transition-all font-sans">
                                    <ShoppingBag className="w-5 h-5 mr-2" />
                                    {t('btn.buy')}
                                </Button>
                                <a href={`https://wa.me/261344181857?text=${encodeURIComponent(`Bonjour, je suis intéressé par les plants de ${plant.name} (${plant.species}). Quantité souhaitée: `)}`} target="_blank" rel="noopener noreferrer">
                                    <Button className="w-full bg-[#c8a84e] hover:bg-[#b68d40] text-white font-bold text-lg h-14 rounded-full shadow-lg transition-all font-sans">
                                        <MessageCircle className="w-5 h-5 mr-2" />
                                        {t('btn.whatsapp')}
                                    </Button>
                                </a>
                            </div>
                        </div>

                        {/* B2B section */}
                        <div className="p-6 bg-muted/30 border border-border rounded-xl space-y-4">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-gold text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">{t('product.professional')}</span>
                                <span className="font-bold text-sm text-foreground uppercase tracking-widest">{t('product.bulk_wholesale')}</span>
                            </div>

                            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> MOQ: {plant.moq}</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> {language === 'fr' ? 'Livraison sur site à Madagascar' : 'On-site delivery in Madagascar'}</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> {language === 'fr' ? 'Accompagnement plantation' : 'Plantation support'}</li>
                            </ul>

                            <Link to="/contact">
                                <Button className="w-full bg-[#c8a84e] hover:bg-[#b68d40] text-white font-bold h-12 rounded-full shadow-md transition-all font-sans">
                                    {t('btn.request_quote')}
                                </Button>
                            </Link>
                        </div>

                        {/* Details Tabs */}
                        <Tabs defaultValue="benefits" className="w-full pt-4">
                            <TabsList className="w-full justify-start border-b border-border bg-transparent p-0 h-auto rounded-none">
                                <TabsTrigger value="benefits" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-2">
                                    {t('product.benefits')}
                                </TabsTrigger>
                                <TabsTrigger value="desc" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-2">
                                    {t('product.description')}
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="benefits" className="pt-4 text-muted-foreground leading-relaxed">
                                {plant.benefits[language]}
                            </TabsContent>
                            <TabsContent value="desc" className="pt-4 text-muted-foreground leading-relaxed">
                                {plant.description[language]}
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NurseryDetail;
