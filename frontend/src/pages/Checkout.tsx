import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ordersStore, clientsStore } from "@/backend/services/store";
import { Link } from "react-router-dom";
import { CheckCircle, Minus, Plus, Trash2, CreditCard, Smartphone, Building2 } from "lucide-react";
import { toast } from "sonner";

const Checkout = () => {
    const { t, language } = useLanguage();
    const { items, updateQuantity, removeItem, clearCart, totalPrice } = useCart();
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [orderNumber, setOrderNumber] = useState('');
    const [paymentMethod, setPaymentMethod] = useState<'mvola' | 'bank-transfer' | 'paypal'>('mvola');

    const [form, setForm] = useState({
        customerName: '',
        customerEmail: '',
        customerPhone: '',
        company: '',
        country: 'Madagascar',
        shippingAddress: '',
        notes: '',
    });

    const handleChange = (field: string, value: string) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (items.length === 0) {
            toast.error(language === 'fr' ? 'Votre panier est vide' : 'Your cart is empty');
            return;
        }

        // Create or find client
        clientsStore.getOrCreate({
            name: form.customerName,
            email: form.customerEmail,
            phone: form.customerPhone,
            company: form.company,
            country: form.country,
            type: items.some(i => i.type === 'nursery') ? 'b2b' : 'b2c',
            totalOrders: 1,
            totalSpent: totalPrice,
        });

        // Create order
        const order = ordersStore.create({
            customerName: form.customerName,
            customerEmail: form.customerEmail,
            customerPhone: form.customerPhone,
            company: form.company,
            country: form.country,
            items: items.map(i => ({
                productId: i.id,
                name: i.name,
                quantity: i.quantity,
                price: i.price,
                priceType: i.priceType,
                type: i.type,
            })),
            subtotal: totalPrice,
            currency: 'EUR',
            paymentMethod,
            paymentStatus: 'pending',
            orderStatus: 'new',
            shippingMethod: form.country === 'Madagascar' ? 'local' : 'export',
            shippingAddress: form.shippingAddress,
            notes: form.notes,
        });

        setOrderNumber(order.orderNumber);
        setOrderPlaced(true);
        clearCart();
        toast.success(t('checkout.success'));
    };

    if (orderPlaced) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background px-4">
                <div className="text-center max-w-md space-y-6">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h1 className="font-serif text-3xl font-bold text-foreground">{t('checkout.success')}</h1>
                    <p className="text-lg text-primary font-bold">N° {orderNumber}</p>
                    <p className="text-muted-foreground">{t('checkout.success_msg')}</p>

                    {paymentMethod === 'mvola' && (
                        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-left">
                            <h3 className="font-bold text-orange-800 mb-2">Mvola</h3>
                            <p className="text-sm text-orange-700">{language === 'fr' ? 'Envoyez le montant au:' : 'Send the amount to:'}</p>
                            <p className="font-bold text-orange-900 mt-1">034 00 000 00</p>
                            <p className="text-xs text-orange-600 mt-1">{language === 'fr' ? 'Référence: ' : 'Reference: '}{orderNumber}</p>
                        </div>
                    )}
                    {paymentMethod === 'bank-transfer' && (
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-left">
                            <h3 className="font-bold text-blue-800 mb-2">{language === 'fr' ? 'Virement Bancaire' : 'Bank Transfer'}</h3>
                            <p className="text-sm text-blue-700">IBAN: MG46 0001 XXXX XXXX XXXX</p>
                            <p className="text-sm text-blue-700">BIC: SMCMMGMG</p>
                            <p className="text-xs text-blue-600 mt-1">{language === 'fr' ? 'Référence: ' : 'Reference: '}{orderNumber}</p>
                        </div>
                    )}
                    {paymentMethod === 'paypal' && (
                        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-left">
                            <h3 className="font-bold text-indigo-800 mb-2">PayPal</h3>
                            <p className="text-sm text-indigo-700">{language === 'fr' ? 'Un email PayPal vous sera envoyé avec le lien de paiement.' : 'A PayPal email will be sent to you with the payment link.'}</p>
                        </div>
                    )}

                    <div className="flex gap-4 justify-center pt-4">
                        <Link to="/catalogue">
                            <Button variant="outline" className="rounded-full">{t('cart.continue')}</Button>
                        </Link>
                        <Link to="/">
                            <Button className="rounded-full bg-primary">{t('nav.home')}</Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="bg-botanical text-white py-16 text-center">
                <h1 className="font-serif text-4xl md:text-5xl font-bold">{t('checkout.title')}</h1>
            </div>

            <div className="container px-4 md:px-6 -mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Order Summary */}
                    <div className="lg:col-span-1 order-2 lg:order-1">
                        <div className="bg-white rounded-xl shadow-sm border border-border p-6 sticky top-24">
                            <h2 className="font-serif text-xl font-bold mb-6">{t('checkout.your_order')}</h2>

                            {items.length === 0 ? (
                                <div className="text-center py-8">
                                    <p className="text-muted-foreground mb-4">{t('cart.empty')}</p>
                                    <Link to="/catalogue">
                                        <Button variant="outline" size="sm">{t('cart.continue')}</Button>
                                    </Link>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {items.map((item) => (
                                        <div key={item.id} className="flex gap-3 pb-4 border-b border-border/50 last:border-0">
                                            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                                            <div className="flex-1 min-w-0">
                                                <p className="font-medium text-sm text-foreground truncate">{item.name}</p>
                                                <p className="text-xs text-muted-foreground">{item.type === 'nursery' ? '🌱' : '🧴'}</p>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-6 h-6 rounded-full border flex items-center justify-center hover:bg-muted">
                                                        <Minus className="w-3 h-3" />
                                                    </button>
                                                    <span className="text-sm font-bold w-8 text-center">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-6 h-6 rounded-full border flex items-center justify-center hover:bg-muted">
                                                        <Plus className="w-3 h-3" />
                                                    </button>
                                                    <button onClick={() => removeItem(item.id)} className="ml-auto text-destructive hover:text-destructive/80">
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                {item.price ? (
                                                    <p className="font-bold text-sm text-primary">
                                                        {(item.price * item.quantity).toFixed(2)} {item.currency === 'MGA' ? 'Ar' : item.currency === 'EUR' ? '€' : '$'}
                                                    </p>
                                                ) : (
                                                    <p className="text-xs text-muted-foreground">{t('btn.contact_price')}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}

                                    <div className="pt-4 border-t border-border">
                                        <div className="flex justify-between items-center text-lg font-bold">
                                            <span>{t('cart.total')}</span>
                                            <span className="text-primary">{totalPrice.toFixed(2)} €</span>
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-1">{language === 'fr' ? '* Hors frais de livraison' : '* Shipping not included'}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Checkout Form */}
                    <div className="lg:col-span-2 order-1 lg:order-2">
                        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-border p-8 space-y-8">

                            {/* Customer Info */}
                            <div>
                                <h3 className="font-serif text-lg font-bold mb-4">{t('checkout.shipping')}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">{t('contact.name')} *</label>
                                        <Input value={form.customerName} onChange={(e) => handleChange('customerName', e.target.value)} required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">{t('contact.company')}</label>
                                        <Input value={form.company} onChange={(e) => handleChange('company', e.target.value)} />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">{t('contact.email')} *</label>
                                        <Input type="email" value={form.customerEmail} onChange={(e) => handleChange('customerEmail', e.target.value)} required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">{t('contact.phone')} *</label>
                                        <Input type="tel" value={form.customerPhone} onChange={(e) => handleChange('customerPhone', e.target.value)} required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">{t('contact.country')} *</label>
                                        <Select value={form.country} onValueChange={(v) => handleChange('country', v)}>
                                            <SelectTrigger><SelectValue /></SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Madagascar">Madagascar</SelectItem>
                                                <SelectItem value="France">France</SelectItem>
                                                <SelectItem value="Belgium">Belgique / Belgium</SelectItem>
                                                <SelectItem value="Switzerland">Suisse / Switzerland</SelectItem>
                                                <SelectItem value="Canada">Canada</SelectItem>
                                                <SelectItem value="Germany">Allemagne / Germany</SelectItem>
                                                <SelectItem value="USA">États-Unis / USA</SelectItem>
                                                <SelectItem value="UK">Royaume-Uni / UK</SelectItem>
                                                <SelectItem value="Other">{language === 'fr' ? 'Autre' : 'Other'}</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm font-medium">{language === 'fr' ? 'Adresse de livraison' : 'Shipping Address'} *</label>
                                        <Textarea value={form.shippingAddress} onChange={(e) => handleChange('shippingAddress', e.target.value)} required className="min-h-[80px]" />
                                    </div>
                                </div>
                            </div>

                            {/* Payment Method */}
                            <div>
                                <h3 className="font-serif text-lg font-bold mb-4">{t('checkout.payment')}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {[
                                        { key: 'mvola' as const, label: t('checkout.mvola'), icon: <Smartphone className="w-6 h-6" />, desc: 'Mobile Money', color: 'border-orange-400 bg-orange-50' },
                                        { key: 'bank-transfer' as const, label: t('checkout.bank'), icon: <Building2 className="w-6 h-6" />, desc: language === 'fr' ? 'Virement' : 'Wire Transfer', color: 'border-blue-400 bg-blue-50' },
                                        { key: 'paypal' as const, label: t('checkout.paypal'), icon: <CreditCard className="w-6 h-6" />, desc: language === 'fr' ? 'Carte / PayPal' : 'Card / PayPal', color: 'border-indigo-400 bg-indigo-50' },
                                    ].map((method) => (
                                        <button
                                            type="button"
                                            key={method.key}
                                            onClick={() => setPaymentMethod(method.key)}
                                            className={`p-4 rounded-xl border-2 text-left transition-all ${paymentMethod === method.key
                                                ? `${method.color} shadow-md`
                                                : 'border-border bg-white hover:border-primary/30'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                {method.icon}
                                                <div>
                                                    <p className="font-bold text-sm">{method.label}</p>
                                                    <p className="text-xs text-muted-foreground">{method.desc}</p>
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Notes */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium">{language === 'fr' ? 'Notes supplémentaires' : 'Additional Notes'}</label>
                                <Textarea value={form.notes} onChange={(e) => handleChange('notes', e.target.value)} className="min-h-[80px]" placeholder={language === 'fr' ? 'Instructions spéciales, demandes...' : 'Special instructions, requests...'} />
                            </div>

                            <Button type="submit" disabled={items.length === 0} className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 text-lg rounded-xl">
                                {t('checkout.place_order')}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
