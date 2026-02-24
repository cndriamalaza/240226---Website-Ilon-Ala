
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex flex-col">
              <span className="font-serif font-bold text-2xl tracking-wide">ILON’ALA</span>
              <span className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70">Botanicals of Madagascar</span>
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed max-w-xs">
              {t('hero.subtitle')}
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-lg">{t('nav.catalogue')}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/catalogue" className="hover:text-gold transition-colors">Essential Oils</Link></li>
              <li><Link to="/catalogue" className="hover:text-gold transition-colors">Vegetable Oils</Link></li>
              <li><Link to="/catalogue" className="hover:text-gold transition-colors">Spices</Link></li>
              <li><Link to="/catalogue" className="hover:text-gold transition-colors">Handicrafts</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-lg">{t('footer.contact')}</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-gold" />
                <span>Antananarivo, Madagascar</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold" />
                <span>+261 34 00 000 00</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold" />
                <span>contact@ilon-ala.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-lg">{t('footer.follow')}</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} ILON’ALA. {t('footer.rights')}</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
