import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CartDrawer = () => {
    const { items, updateQuantity, removeItem, totalItems, totalPrice, isCartOpen, setIsCartOpen } = useCart();
    const { t, language } = useLanguage();

    return (
        <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
            <SheetContent side="right" className="w-full sm:max-w-md bg-background">
                <SheetHeader className="pb-6">
                    <SheetTitle className="font-serif text-xl flex items-center gap-2">
                        <ShoppingBag className="w-5 h-5" /> {t('cart.title')} ({totalItems})
                    </SheetTitle>
                </SheetHeader>

                {items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-[60vh] text-center">
                        <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mb-4" />
                        <p className="text-muted-foreground mb-6">{t('cart.empty')}</p>
                        <Button variant="outline" onClick={() => setIsCartOpen(false)} asChild>
                            <Link to="/catalogue">{t('cart.continue')}</Link>
                        </Button>
                    </div>
                ) : (
                    <div className="flex flex-col h-[calc(100vh-120px)]">
                        {/* Items */}
                        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                            {items.map((item) => (
                                <div key={item.id} className="flex gap-3 pb-4 border-b border-border/50">
                                    <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover flex-shrink-0" />
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium text-sm text-foreground truncate">{item.name}</p>
                                        <p className="text-xs text-muted-foreground mb-2">
                                            {item.type === 'nursery' ? '🌱 Plant' : '🧴 Produit'}
                                        </p>

                                        {item.price ? (
                                            <p className="text-sm font-bold text-primary">
                                                {item.price} {item.currency === 'MGA' ? 'Ar' : item.currency === 'EUR' ? '€' : '$'}
                                                <span className="text-xs font-normal text-muted-foreground"> × {item.quantity}</span>
                                            </p>
                                        ) : (
                                            <p className="text-xs text-muted-foreground">{t('btn.contact_price')}</p>
                                        )}

                                        <div className="flex items-center gap-2 mt-2">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                                            >
                                                <Minus className="w-3 h-3" />
                                            </button>
                                            <span className="text-sm font-bold w-8 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                                            >
                                                <Plus className="w-3 h-3" />
                                            </button>
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="ml-auto text-destructive/60 hover:text-destructive transition-colors"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="pt-6 border-t border-border space-y-4">
                            <div className="flex justify-between items-center text-lg font-bold">
                                <span>{t('cart.total')}</span>
                                <span className="text-primary">{totalPrice.toFixed(2)} €</span>
                            </div>
                            <p className="text-xs text-muted-foreground">{language === 'fr' ? '* Les articles sans prix seront confirmés par notre équipe' : '* Items without price will be confirmed by our team'}</p>

                            <Link to="/checkout" onClick={() => setIsCartOpen(false)}>
                                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-xl">
                                    {t('btn.checkout')} <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>

                            <Button variant="outline" className="w-full" onClick={() => setIsCartOpen(false)}>
                                {t('cart.continue')}
                            </Button>
                        </div>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
};

export default CartDrawer;
