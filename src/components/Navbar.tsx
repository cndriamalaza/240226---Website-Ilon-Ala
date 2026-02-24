
import { MessageCircle, FileDown, Search, Menu, X, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const Navbar = () => {
    const { t, language, setLanguage } = useLanguage();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (path: string) => location.pathname === path;

    const navLinks = [
        { path: "/", label: t('nav.home') },
        { path: "/catalogue", label: t('nav.catalogue') },
        { path: "/a-propos", label: t('nav.about') },
        { path: "/contact", label: t('nav.contact') },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
            <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20 group-hover:scale-105 transition-transform duration-300">
                        <span className="text-primary font-serif font-bold text-xl">I</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-serif font-bold text-xl tracking-wide text-primary">ILON’ALA</span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Botanicals</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-sm font-medium transition-colors hover:text-primary ${isActive(link.path) ? "text-primary font-bold" : "text-muted-foreground"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    {/* Language Switch */}
                    <button
                        onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                        className="flex items-center gap-1 text-xs font-bold text-muted-foreground hover:text-primary transition-colors uppercase border px-2 py-1 rounded-md"
                    >
                        <Globe className="w-3 h-3" />
                        {language}
                    </button>

                    <Button variant="outline" size="sm" className="hidden lg:flex gap-2 border-primary/20 hover:border-primary/50 text-foreground">
                        <FileDown className="w-4 h-4" />
                        {t('hero.download')}
                    </Button>
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-white shadow-md">
                        {t('nav.quote')}
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                        className="text-sm font-bold text-muted-foreground uppercase"
                    >
                        {language}
                    </button>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="w-6 h-6 text-primary" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-background border-l-primary/10">
                            <div className="flex flex-col gap-8 mt-10">
                                <div className="flex flex-col gap-4">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.path}
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`text-lg font-serif ${isActive(link.path) ? "text-primary font-bold" : "text-foreground"
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                                <div className="h-px bg-border my-2" />
                                <div className="flex flex-col gap-3">
                                    <Button variant="outline" className="w-full justify-start gap-2">
                                        <FileDown className="w-4 h-4" />
                                        {t('hero.download')}
                                    </Button>
                                    <Button className="w-full justify-start gap-2 bg-primary">
                                        <MessageCircle className="w-4 h-4" />
                                        {t('nav.quote')}
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
