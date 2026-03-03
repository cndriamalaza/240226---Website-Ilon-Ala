import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Leaf,
  ArrowRight,
  Heart,
  Droplets,
} from "lucide-react";
import Logo from "@/assets/logo.png";

/* ═══════════════════════════════════════════════════════
   FOOTER — Ilon'Ala Madagascar
   Premium, crédible, optimisé SEO & international
   ═══════════════════════════════════════════════════════ */
const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e4d2b] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* ── Brand ── */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start">
              <Link to="/" className="group mb-4 uppercase">
                <h3 className="text-2xl font-bold tracking-[0.2em] mb-1">ILON'ALA</h3>
                <p className="text-xs tracking-[0.3em] font-bold text-gold uppercase">
                  {t('nav.tagline')}
                </p>
              </Link>
              <div className="h-0.5 w-12 bg-white/20 mb-6" />
              <p className="text-white/80 text-sm leading-relaxed max-w-xs font-medium italic">
                {language === 'fr'
                  ? "L'essence de la nature malgache, capturée avec passion et excellence."
                  : "The essence of Malagasy nature, captured with passion and excellence."}
              </p>
            </div>
          </div>

          {/* ── Catalogue ── */}
          <div className="space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-widest">{t("nav.catalogue")}</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link to="/catalogue" className="hover:text-gold transition-colors">{t("nav.sub.essential_oils")}</Link></li>
              <li><Link to="/catalogue" className="hover:text-gold transition-colors">{t("nav.sub.spices")}</Link></li>
              <li><Link to="/catalogue?tab=nursery" className="hover:text-gold transition-colors">{t("nav.agribusiness")}</Link></li>
              <li><Link to="/catalogue" className="hover:text-gold transition-colors">Vegetable Oils & Wellness</Link></li>
            </ul>
          </div>

          {/* ── Contact ── */}
          <div className="space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-widest">{t("footer.contact")}</h4>
            <div className="space-y-4 text-sm text-white/70">
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
                <div className="flex flex-col gap-2">
                  <span>{t("contact.address_manakara")}</span>
                  <span>{t("contact.address_tana")}</span>
                </div>
              </div>
              <a href={`tel:${t("contact.phone_link")}`} className="flex items-center gap-3 justify-center lg:justify-start hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>{t("contact.phone_val")}</span>
              </a>
              <a href={`mailto:${t("contact.email_val")}`} className="flex items-center gap-3 justify-center lg:justify-start hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>{t("contact.email_val")}</span>
              </a>
            </div>
          </div>

          {/* ── Follow Us ── */}
          <div className="space-y-6 text-center lg:text-left">
            <h4 className="font-bold text-sm uppercase tracking-widest">{language === 'fr' ? 'Suivez-nous' : 'Follow Us'}</h4>
            <div className="flex gap-4 justify-center lg:justify-start">
              {[
                { icon: <Facebook className="w-4 h-4" />, href: "https://facebook.com/ilonala" },
                { icon: <Instagram className="w-4 h-4" />, href: "https://instagram.com/ilonala" },
                { icon: <Linkedin className="w-4 h-4" />, href: "https://linkedin.com/company/ilonala" }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300 cursor-pointer">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-white/40">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p>© {currentYear} ILON'ALA. {t("footer.rights")}</p>
            <div className="flex items-center gap-4 border-l border-white/10 pl-6">
              <span className="text-white/60 font-medium italic tracking-wide">{t("footer.producer_statement")}</span>
            </div>
          </div>
          <div className="flex items-center gap-8 uppercase tracking-[0.1em]">
            <Link to="/privacy" className="hover:text-gold transition-colors">{t("footer.privacy")}</Link>
            <Link to="/privacy" className="hover:text-gold transition-colors">{t("footer.terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
