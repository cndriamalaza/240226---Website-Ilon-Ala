import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Clock, FileText, Globe, MessageCircle, Shield, ShoppingBag, MapPin, Package, Leaf } from "lucide-react";
import { toast } from "sonner";

const ProductDetail = () => {
  const { slug } = useParams();
  const { t, language } = useLanguage();
  const { addItem } = useCart();

  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t('product.not_found')}</h1>
          <Link to="/catalogue">
            <Button variant="outline" className="border-[#1e4d2b] text-[#1e4d2b] hover:bg-[#1e4d2b] hover:text-white rounded-full transition-all">
              {t('product.back_catalogue')}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      type: 'product',
      name: product.name,
      price: product.price,
      priceType: product.priceType,
      currency: product.currency,
      image: product.image,
      slug: product.slug,
    });
    toast.success(language === 'fr' ? 'Ajouté au panier !' : 'Added to cart!');
  };

  // Get related products (same category, different slug)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Breadcrumbs */}
      <div className="bg-muted/30 border-b border-border">
        <div className="container px-4 md:px-6 py-4 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">{t('nav.home')}</Link> /
          <Link to="/catalogue" className="hover:text-primary mx-1">{t('nav.catalogue')}</Link> /
          <span className="text-foreground font-medium mx-1">{product.name}</span>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

          {/* Image Section */}
          <div className="space-y-6">
            <div className="aspect-square bg-white rounded-2xl overflow-hidden border border-border/50 shadow-lg relative group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {product.stock <= 50 && product.stock > 0 && (
                <div className="absolute top-4 right-4">
                  <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {t('product.limited')}
                  </span>
                </div>
              )}
            </div>
            <div className="flex gap-4 p-4 bg-muted/20 rounded-xl border border-border/50">
              <Shield className="w-8 h-8 text-botanical opacity-80" />
              <div>
                <h4 className="font-bold text-sm text-foreground">{t('trust.quality')}</h4>
                <p className="text-xs text-muted-foreground">{t('trust.quality.desc')}</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <span className="text-gold font-bold uppercase tracking-widest text-xs mb-2 block">
                {product.isB2B && product.isB2C ? t('product.wholesale_retail') : product.isB2B ? t('product.wholesale_only') : t('product.retail_only')}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-2">
                {product.name}
              </h1>
              {product.latinName && (
                <p className="text-lg text-muted-foreground italic font-serif">
                  {product.latinName}
                </p>
              )}
            </div>

            <div className="prose text-muted-foreground leading-relaxed">
              <p>{product.description[language]}</p>
            </div>

            {/* Origin, Format & Specs */}
            <div className="flex flex-wrap gap-3 text-sm text-foreground/80 font-medium">
              <div className="flex items-center gap-2 bg-muted/30 px-3 py-1.5 rounded-full border border-border">
                <MapPin className="w-4 h-4 text-primary" />
                {product.origin}
              </div>
              {product.format && (
                <div className="flex items-center gap-2 bg-muted/30 px-3 py-1.5 rounded-full border border-border">
                  <Package className="w-4 h-4 text-primary" />
                  {product.format[language]}
                </div>
              )}
              <div className="flex items-center gap-2 bg-muted/30 px-3 py-1.5 rounded-full border border-border">
                <Leaf className="w-4 h-4 text-primary" />
                {product.availability[language]}
              </div>
              {product.isB2B && (
                <div className="flex items-center gap-2 bg-muted/30 px-3 py-1.5 rounded-full border border-border">
                  <Clock className="w-4 h-4 text-primary" />
                  {t('product.lead_time')}
                </div>
              )}
            </div>

            {/* B2C Pricing & Actions */}
            {product.isB2C && (
              <div className="p-6 bg-white border border-border rounded-xl shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-muted-foreground uppercase tracking-widest">{t('product.retail_price')}</span>
                  {product.priceType === 'fixed' && product.price ? (
                    <span className="font-serif text-3xl font-bold text-primary">
                      {product.price} {product.currency === 'MGA' ? 'Ar' : product.currency === 'EUR' ? '€' : '$'}
                    </span>
                  ) : (
                    <span className="font-serif text-xl font-bold text-muted-foreground">{t('btn.contact_price')}</span>
                  )}
                </div>
                {product.moq && (
                  <p className="text-sm text-muted-foreground">MOQ: {product.moq}</p>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.priceType === 'fixed' && (
                    <Button onClick={handleAddToCart} className="w-full bg-[#1e4d2b] hover:bg-[#163d22] text-white font-bold text-lg h-14 rounded-full shadow-lg transition-all font-sans">
                      <ShoppingBag className="w-5 h-5 mr-2" />
                      {t('btn.buy')}
                    </Button>
                  )}
                  <a href={`https://wa.me/261344181857?text=${encodeURIComponent(`Bonjour, je suis intéressé par ${product.name} (${product.latinName || ''}). `)}`} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-[#c8a84e] hover:bg-[#b68d40] text-white font-bold text-lg h-14 rounded-full shadow-lg transition-all font-sans">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      {t('btn.whatsapp')}
                    </Button>
                  </a>
                </div>
              </div>
            )}

            {/* B2B Actions */}
            {product.isB2B && (
              <div className="p-6 bg-muted/30 border border-border rounded-xl space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-gold text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">{t('product.professional')}</span>
                  <span className="font-bold text-sm text-foreground uppercase tracking-widest">{t('product.bulk_wholesale')}</span>
                </div>

                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> {product.moq ? `MOQ: ${product.moq}` : t('product.moq')}</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> {t('product.shipping')}</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> {language === 'fr' ? 'Certificats d\'analyse disponibles' : 'Certificates of analysis available'}</li>
                </ul>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Link to="/contact">
                    <Button className="w-full bg-[#c8a84e] hover:bg-[#b68d40] text-white font-bold h-12 rounded-full shadow-md transition-all font-sans">
                      {t('btn.request_quote')}
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full border-[#1e4d2b] text-[#1e4d2b] hover:bg-[#1e4d2b] hover:text-white h-12 rounded-full transition-all font-sans">
                    <FileText className="w-4 h-4 mr-2" />
                    {t('btn.download_sheet')}
                  </Button>
                </div>
              </div>
            )}

            {/* Details Tabs */}
            <Tabs defaultValue="benefits" className="w-full pt-4">
              <TabsList className="w-full justify-start border-b border-border bg-transparent p-0 h-auto rounded-none">
                <TabsTrigger value="benefits" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-2">
                  {t('product.benefits')}
                </TabsTrigger>
                <TabsTrigger value="usage" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-2">
                  {t('product.usage')}
                </TabsTrigger>
                <TabsTrigger value="desc" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-2">
                  {t('product.description')}
                </TabsTrigger>
              </TabsList>
              <TabsContent value="benefits" className="pt-4 text-muted-foreground leading-relaxed">
                {product.benefits[language]}
              </TabsContent>
              <TabsContent value="usage" className="pt-4 text-muted-foreground leading-relaxed">
                {product.usage ? product.usage[language] : product.description[language]}
              </TabsContent>
              <TabsContent value="desc" className="pt-4 text-muted-foreground leading-relaxed">
                {product.description[language]}
              </TabsContent>
            </Tabs>

          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-8">{t('product.related')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map(p => (
                <Link to={`/produit/${p.slug}`} key={p.slug} className="group block">
                  <div className="bg-white rounded-xl overflow-hidden border border-border/50 shadow-sm hover:shadow-lg transition-all">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-muted-foreground italic">{p.latinName}</p>
                      <h3 className="font-serif font-bold text-foreground group-hover:text-primary transition-colors">{p.name}</h3>
                      {p.price && <p className="text-primary font-bold mt-1">{p.price} {p.currency === 'EUR' ? '€' : p.currency === 'MGA' ? 'Ar' : '$'}</p>}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
