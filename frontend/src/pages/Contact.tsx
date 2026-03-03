import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, MessageCircle, Phone, Droplets } from "lucide-react";
import { messagesStore } from "@/backend/services/store";
import { toast } from "sonner";

const Contact = () => {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    messagesStore.create({
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      company: formData.get('company') as string,
      interest: formData.get('interest') as string,
      message: formData.get('message') as string,
    });

    toast.success(language === 'fr' ? 'Message envoyé avec succès !' : 'Message sent successfully!');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="relative h-[35vh] min-h-[300px] flex items-center justify-center overflow-hidden mb-12">
        <div className="absolute inset-0 bg-botanical">
          <img
            src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2500&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
            alt="Contact"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 tracking-tight drop-shadow-md">{t('contact.title')}</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">{t('contact.subtitle')}</p>
        </div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-border space-y-8">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-gold font-bold mb-6">{language === 'fr' ? 'Nos Coordonnées' : 'Contact Details'}</h3>
                <div className="space-y-5">
                  <a href={`tel:${t('contact.phone_link')}`} className="flex items-center gap-4 group">
                    <div className="bg-primary/5 p-3 rounded-xl group-hover:bg-primary/10 transition-colors shadow-sm"><Phone className="w-5 h-5 text-primary" /></div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase text-muted-foreground font-bold tracking-wider">{language === 'fr' ? 'Téléphone' : 'Phone'}</span>
                      <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{t('contact.phone_val')}</span>
                    </div>
                  </a>
                  <a href={`mailto:${t('contact.email_val')}`} className="flex items-center gap-4 group">
                    <div className="bg-primary/5 p-3 rounded-xl group-hover:bg-primary/10 transition-colors shadow-sm"><Mail className="w-5 h-5 text-primary" /></div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase text-muted-foreground font-bold tracking-wider">{language === 'fr' ? 'E-mail' : 'Email'}</span>
                      <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{t('contact.email_val')}</span>
                    </div>
                  </a>
                  <a href={`https://wa.me/${t('contact.phone_link')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="bg-green-500/5 p-3 rounded-xl group-hover:bg-green-500/10 transition-colors shadow-sm"><MessageCircle className="w-5 h-5 text-green-600" /></div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase text-green-600/70 font-bold tracking-wider">WhatsApp</span>
                      <span className="text-sm font-bold text-foreground group-hover:text-green-600 transition-colors">Direct Chat</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h3 className="text-xs uppercase tracking-widest text-gold font-bold mb-6">{language === 'fr' ? 'Nos Implantations' : 'Our Locations'}</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-primary/5 p-3 rounded-xl shadow-sm shrink-0"><MapPin className="w-5 h-5 text-primary" /></div>
                    <div className="flex items-center">
                      <p className="text-sm text-foreground font-medium leading-relaxed">{t('contact.address_manakara')}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/5 p-3 rounded-xl shadow-sm shrink-0"><MapPin className="w-5 h-5 text-primary" /></div>
                    <div className="flex items-center">
                      <p className="text-sm text-foreground font-medium italic">{t('contact.address_tana')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-border">
            <h2 className="font-serif text-2xl font-bold mb-6 text-foreground">{t('contact.form_title')}</h2>

            {submitted && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 text-sm">
                ✓ {language === 'fr' ? 'Message envoyé avec succès ! Nous vous répondrons sous 24h.' : 'Message sent successfully! We will respond within 24h.'}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t('contact.name')} *</label>
                  <Input name="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t('contact.company')}</label>
                  <Input name="company" placeholder="Your Company Ltd." />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t('contact.email')} *</label>
                  <Input name="email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t('contact.phone')}</label>
                  <Input name="phone" type="tel" placeholder="+1 234 567 8900" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t('contact.country')}</label>
                  <Select name="country">
                    <SelectTrigger><SelectValue placeholder={language === 'fr' ? 'Sélectionner' : 'Select'} /></SelectTrigger>
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
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t('contact.interest')}</label>
                  <Select name="interest">
                    <SelectTrigger><SelectValue placeholder={language === 'fr' ? 'Sélectionner' : 'Select'} /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="essential-oils">{language === 'fr' ? 'Huiles Essentielles (Vrac)' : 'Essential Oils (Bulk)'}</SelectItem>
                      <SelectItem value="retail">{language === 'fr' ? 'Produits Détail' : 'Retail Products'}</SelectItem>
                      <SelectItem value="nursery">{language === 'fr' ? 'Pépinière / Plants' : 'Nursery / Seedlings'}</SelectItem>
                      <SelectItem value="spices">{language === 'fr' ? 'Épices en Gros' : 'Wholesale Spices'}</SelectItem>
                      <SelectItem value="private-label">{language === 'fr' ? 'Marque Blanche' : 'Private Label / White Label'}</SelectItem>
                      <SelectItem value="distribution">{language === 'fr' ? 'Partenariat Distribution' : 'Distribution Partnership'}</SelectItem>
                      <SelectItem value="consulting">{language === 'fr' ? 'Conseil Agribusiness' : 'Agribusiness Consulting'}</SelectItem>
                      <SelectItem value="other">{language === 'fr' ? 'Autre' : 'Other'}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">{t('contact.message')} *</label>
                <Textarea name="message" className="min-h-[150px]" placeholder={language === 'fr' ? 'Décrivez votre besoin...' : 'Tell us about your needs...'} required />
              </div>

              <Button type="submit" className="w-full bg-[#c8a84e] hover:bg-[#b68d40] text-white font-bold h-14 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 text-lg uppercase tracking-widest mt-4">
                {t('btn.submit')}
              </Button>
            </form>
          </div>

        </div>

        {/* Legal Info Row */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-md">
            <h3 className="font-bold text-foreground text-sm uppercase tracking-widest mb-4">Informations Légales</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-xs text-muted-foreground">
              <p><span className="font-medium text-foreground">NIF :</span> 4005120591</p>
              <p><span className="font-medium text-foreground">STAT :</span> 01283 12 2021 0 00220</p>
              <p className="sm:col-span-2 mt-2">Ilon'Ala SARL au capital de 2.000.000 Ar — Siège social à Manakara</p>
            </div>
          </div>
          <div className="text-xs text-muted-foreground md:text-right italic self-end">
            Ilon'Ala — La goutte essentielle.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
