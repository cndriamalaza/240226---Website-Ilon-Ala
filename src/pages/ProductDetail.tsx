
import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Clock, FileText, Globe, MessageCircle, Shield, ShoppingBag } from "lucide-react";

const ProductDetail = () => {
  const { slug } = useParams();
  const { t, language } = useLanguage();

  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/catalogue">
            <Button>Back to Catalogue</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Breadcrumbs */}
      <div className="bg-muted/30 border-b border-border">
        <div className="container px-4 md:px-6 py-4 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link> /
          <Link to="/catalogue" className="hover:text-primary mx-1">Catalogue</Link> /
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

            {/* Origin & Specs */}
            <div className="flex flex-wrap gap-4 text-sm text-foreground/80 font-medium">
              <div className="flex items-center gap-2 bg-muted/30 px-3 py-1.5 rounded-full border border-border">
                <Globe className="w-4 h-4 text-botanical" />
                {t('product.origin')}
              </div>
              {product.isB2B && (
                <div className="flex items-center gap-2 bg-muted/30 px-3 py-1.5 rounded-full border border-border">
                  <Clock className="w-4 h-4 text-botanical" />
                  {t('product.lead_time')}
                </div>
              )}
            </div>

            {/* B2C Actions */}
            {product.isB2C && (
              <div className="p-6 bg-white border border-border rounded-xl shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-muted-foreground uppercase tracking-widest">{t('product.retail_price')}</span>
                  <span className="font-serif text-3xl font-bold text-primary">{product.price} €</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-lg h-12">
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    {t('btn.buy')}
                  </Button>
                  <Button variant="outline" className="w-full border-green-600 text-green-700 hover:bg-green-50 h-12">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {t('btn.whatsapp')}
                  </Button>
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
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> {t('product.moq')}</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> {t('product.shipping')}</li>
                </ul>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button className="w-full bg-foreground text-background hover:bg-foreground/90 h-11">
                    {t('nav.quote')}
                  </Button>
                  <Button variant="outline" className="w-full border-foreground/20 h-11">
                    <FileText className="w-4 h-4 mr-2" />
                    {t('btn.download_sheet')}
                  </Button>
                </div>
              </div>
            )}

            {/* Details Tabs */}
            <Tabs defaultValue="benefits" className="w-full pt-8">
              <TabsList className="w-full justify-start border-b border-border bg-transparent p-0 h-auto rounded-none">
                <TabsTrigger
                  value="benefits"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-2"
                >
                  {t('product.benefits')}
                </TabsTrigger>
                <TabsTrigger
                  value="desc"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-2"
                >
                  {t('product.description')}
                </TabsTrigger>
              </TabsList>
              <TabsContent value="benefits" className="pt-4 text-muted-foreground">
                {product.benefits[language]}
              </TabsContent>
              <TabsContent value="desc" className="pt-4 text-muted-foreground">
                {product.description[language]}
              </TabsContent>
            </Tabs>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
