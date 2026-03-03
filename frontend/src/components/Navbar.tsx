import { useState, useRef, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Search,
  Globe,
  ShoppingBag,
  ChevronDown,
  ChevronRight,
  Leaf,
  Sparkles,
  FlaskConical,
  CookingPot,
  Droplets,
  TreePine,
  Briefcase,
  BookOpen,
  Award,
  MapPin,
  Phone,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo.png";

/* ═══════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════ */
interface SubMenuItem {
  path: string;
  labelKey: string;
  icon: React.ReactNode;
  descKey?: string;
}

interface NavItem {
  path: string;
  labelKey: string;
  children?: SubMenuItem[];
}

/* ═══════════════════════════════════════════════════════
   NAVBAR COMPONENT
   ═══════════════════════════════════════════════════════ */
const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  // State
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Navigation data
  const navItems: NavItem[] = [
    { path: "/", labelKey: "nav.home" },
    {
      path: "/catalogue",
      labelKey: "nav.catalogue",
      children: [
        {
          path: "/catalogue?tab=products&cat=essential-oil",
          labelKey: "nav.sub.essential_oils",
          icon: <Droplets className="w-4 h-4" />,
          descKey: "nav.sub.essential_oils_desc",
        },
        {
          path: "/catalogue?tab=products&cat=cosmetic",
          labelKey: "nav.sub.cosmetics",
          icon: <Sparkles className="w-4 h-4" />,
          descKey: "nav.sub.cosmetics_desc",
        },
        {
          path: "/catalogue?tab=products&cat=spice",
          labelKey: "nav.sub.spices",
          icon: <CookingPot className="w-4 h-4" />,
          descKey: "nav.sub.spices_desc",
        },
        {
          path: "/catalogue?tab=products&cat=food",
          labelKey: "nav.sub.honey",
          icon: <FlaskConical className="w-4 h-4" />,
          descKey: "nav.sub.honey_desc",
        },
        {
          path: "/catalogue?tab=nursery",
          labelKey: "nav.sub.nursery",
          icon: <TreePine className="w-4 h-4" />,
          descKey: "nav.sub.nursery_desc",
        },
        {
          path: "/agribusiness",
          labelKey: "nav.sub.agribusiness",
          icon: <Briefcase className="w-4 h-4" />,
          descKey: "nav.sub.agribusiness_desc",
        },
      ],
    },
    {
      path: "/a-propos",
      labelKey: "nav.about_menu",
      children: [
        {
          path: "/a-propos",
          labelKey: "nav.sub.story",
          icon: <BookOpen className="w-4 h-4" />,
          descKey: "nav.sub.story_desc",
        },
        {
          path: "/qualite",
          labelKey: "nav.sub.quality",
          icon: <Award className="w-4 h-4" />,
          descKey: "nav.sub.quality_desc",
        },
        {
          path: "/a-propos#terroir",
          labelKey: "nav.sub.terroir",
          icon: <MapPin className="w-4 h-4" />,
          descKey: "nav.sub.terroir_desc",
        },
      ],
    },
    { path: "/contact", labelKey: "nav.contact" },
  ];

  // ── Scroll effect ──
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Close mobile on route change ──
  useEffect(() => {
    setMobileOpen(false);
    setMobileSubmenu(null);
    setSearchOpen(false);
  }, [location]);

  // ── Search submit ──
  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (searchQuery.trim()) {
        navigate(`/catalogue?search=${encodeURIComponent(searchQuery.trim())}`);
        setSearchQuery("");
        setSearchOpen(false);
      }
    },
    [searchQuery, navigate]
  );

  // ── Dropdown handlers (desktop) ──
  const openDropdown = (key: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(key);
  };

  const closeDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  // ── Active check ──
  const isActive = (item: NavItem) => {
    if (item.path === "/") return location.pathname === "/";
    return location.pathname.startsWith(item.path.split("?")[0]);
  };

  return (
    <>

      {/* ═══ MAIN NAVBAR ═══ */}
      <nav
        className={`navbar-main sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
          ? "bg-white/98 shadow-lg backdrop-blur-lg"
          : "bg-white/95 backdrop-blur-md shadow-sm"
          }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-[68px]">
          {/* ── LOGO ── */}
          <Link
            to="/"
            className="flex items-center gap-2.5 flex-shrink-0 group"
            aria-label="ILON'ALA — La goutte essentielle"
          >
            <img
              src={Logo}
              alt="ILON'ALA — La goutte essentielle"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-bold text-[22px] leading-none text-[#1e4d2b] tracking-wider uppercase">
                ILON'ALA
              </span>
              <span className="text-[8px] uppercase tracking-[0.2em] text-[#3a7d4c] font-bold leading-none mt-1">
                {t('nav.tagline')}
              </span>
            </div>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.labelKey}
                className="relative"
                onMouseEnter={() =>
                  item.children && openDropdown(item.labelKey)
                }
                onMouseLeave={() => item.children && closeDropdown()}
              >
                <Link
                  to={item.path}
                  className={`nav-link-desktop flex items-center gap-1 px-3.5 py-2 rounded-md text-[13.5px] font-semibold transition-all duration-200 ${isActive(item)
                    ? "text-[#1e4d2b] bg-[#1e4d2b]/5"
                    : "text-[#3d4f44] hover:text-[#1e4d2b] hover:bg-[#f5f7f5]"
                    }`}
                >
                  {t(item.labelKey)}
                  {item.children && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.labelKey ? "rotate-180" : ""
                        }`}
                    />
                  )}
                </Link>

                {/* ── Dropdown ── */}
                {item.children && activeDropdown === item.labelKey && (
                  <div
                    className="dropdown-menu absolute top-full left-0 mt-1 w-[300px] bg-white rounded-xl shadow-2xl border border-gray-100/80 overflow-hidden"
                    onMouseEnter={() => openDropdown(item.labelKey)}
                    onMouseLeave={closeDropdown}
                  >
                    <div className="p-2">
                      {item.children.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="dropdown-item flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-[#f0f5f1] transition-colors duration-150 group/item"
                        >
                          <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#1e4d2b]/8 flex items-center justify-center text-[#1e4d2b] group-hover/item:bg-[#1e4d2b] group-hover/item:text-white transition-all duration-200 mt-0.5">
                            {sub.icon}
                          </span>
                          <div className="flex flex-col min-w-0">
                            <span className="text-[13px] font-semibold text-[#1e4d2b] group-hover/item:text-[#1e4d2b]">
                              {t(sub.labelKey)}
                            </span>
                            {sub.descKey && (
                              <span className="text-[11px] text-gray-500 leading-snug mt-0.5">
                                {t(sub.descKey)}
                              </span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                    {/* Dropdown footer CTA */}
                    {item.labelKey === "nav.catalogue" && (
                      <div className="border-t border-gray-100 px-3 py-2.5 bg-[#fafbfa]">
                        <Link
                          to="/catalogue"
                          className="text-[12px] font-semibold text-[#1e4d2b] hover:text-[#c8a84e] transition-colors flex items-center gap-1"
                        >
                          {t("nav.view_all_products")}
                          <ChevronRight className="w-3 h-3" />
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ── DESKTOP ACTIONS ── */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => {
                  setSearchOpen(!searchOpen);
                  setTimeout(() => searchInputRef.current?.focus(), 100);
                }}
                className="p-2 rounded-lg text-[#3d4f44] hover:text-[#1e4d2b] hover:bg-[#f5f7f5] transition-all duration-200"
                aria-label={t("nav.search")}
              >
                <Search className="w-[18px] h-[18px]" />
              </button>

              {/* Search panel */}
              {searchOpen && (
                <div className="absolute right-0 top-full mt-2 w-[320px]">
                  <form
                    onSubmit={handleSearch}
                    className="flex items-center bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                  >
                    <Search className="w-4 h-4 text-gray-400 ml-3.5 flex-shrink-0" />
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={t("nav.search_placeholder")}
                      className="flex-1 px-3 py-3 text-[13px] bg-transparent outline-none text-[#1e4d2b] placeholder:text-gray-400"
                    />
                    <button
                      type="button"
                      onClick={() => setSearchOpen(false)}
                      className="p-2 mr-1 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Language */}
            <button
              onClick={() => setLanguage(language === "en" ? "fr" : "en")}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[12px] font-bold text-[#3d4f44] hover:text-[#1e4d2b] hover:bg-[#f5f7f5] transition-all duration-200 uppercase border border-gray-200"
              aria-label={`Switch to ${language === "en" ? "French" : "English"}`}
            >
              <Globe className="w-3.5 h-3.5" />
              {language === "en" ? "FR" : "EN"}
            </button>

            {/* Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-lg text-[#3d4f44] hover:text-[#1e4d2b] hover:bg-[#f5f7f5] transition-all duration-200"
              aria-label={`${t("nav.cart")} (${totalItems})`}
            >
              <ShoppingBag className="w-[18px] h-[18px]" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-[18px] h-[18px] bg-[#c8a84e] text-white text-[9px] font-bold rounded-full flex items-center justify-center shadow-sm">
                  {totalItems}
                </span>
              )}
            </button>

            {/* CTA */}
            <Link to="/contact" className="ml-1">
              <Button className="cta-button bg-[#1e4d2b] hover:bg-[#163d22] text-white text-[13px] font-bold px-8 py-2.5 rounded-full shadow-md hover:shadow-xl transition-all duration-300">
                {t("nav.quote")}
              </Button>
            </Link>
          </div>

          {/* ── MOBILE ACTIONS ── */}
          <div className="lg:hidden flex items-center gap-1.5">
            {/* Mobile search toggle */}
            <button
              onClick={() => {
                setSearchOpen(!searchOpen);
                setTimeout(() => searchInputRef.current?.focus(), 100);
              }}
              className="p-2 rounded-lg text-[#3d4f44]"
              aria-label={t("nav.search")}
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Language */}
            <button
              onClick={() => setLanguage(language === "en" ? "fr" : "en")}
              className="px-2 py-1 text-[11px] font-bold text-[#3d4f44] uppercase border border-gray-200 rounded-md"
            >
              {language === "en" ? "FR" : "EN"}
            </button>

            {/* Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2"
              aria-label={`${t("nav.cart")} (${totalItems})`}
            >
              <ShoppingBag className="w-5 h-5 text-[#1e4d2b]" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#c8a84e] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-[#1e4d2b] hover:bg-[#f5f7f5] transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* ── MOBILE SEARCH BAR ── */}
        {searchOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-3">
            <form onSubmit={handleSearch} className="flex items-center bg-[#f5f7f5] rounded-lg overflow-hidden">
              <Search className="w-4 h-4 text-gray-400 ml-3 flex-shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("nav.search_placeholder")}
                className="flex-1 px-3 py-2.5 text-[13px] bg-transparent outline-none text-[#1e4d2b] placeholder:text-gray-400"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="p-2 mr-1 text-gray-400"
              >
                <X className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

        {/* ── MOBILE MENU ── */}
        {mobileOpen && (
          <div className="lg:hidden mobile-menu bg-white border-t border-gray-100 shadow-xl max-h-[calc(100vh-68px)] overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.labelKey}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileSubmenu(
                            mobileSubmenu === item.labelKey
                              ? null
                              : item.labelKey
                          )
                        }
                        className={`w-full flex items-center justify-between px-3 py-3 rounded-lg text-[15px] font-semibold transition-colors ${isActive(item)
                          ? "text-[#1e4d2b] bg-[#1e4d2b]/5"
                          : "text-[#3d4f44] hover:bg-[#f5f7f5]"
                          }`}
                      >
                        {t(item.labelKey)}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${mobileSubmenu === item.labelKey ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      {/* Mobile submenu */}
                      {mobileSubmenu === item.labelKey && (
                        <div className="ml-3 mt-1 mb-2 space-y-0.5 border-l-2 border-[#1e4d2b]/10 pl-3">
                          {item.children.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13.5px] text-[#3d4f44] hover:text-[#1e4d2b] hover:bg-[#f0f5f1] transition-colors"
                            >
                              <span className="w-7 h-7 rounded-md bg-[#1e4d2b]/8 flex items-center justify-center text-[#1e4d2b] flex-shrink-0">
                                {sub.icon}
                              </span>
                              <div className="flex flex-col">
                                <span className="font-medium">
                                  {t(sub.labelKey)}
                                </span>
                                {sub.descKey && (
                                  <span className="text-[11px] text-gray-400 leading-tight">
                                    {t(sub.descKey)}
                                  </span>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-3 py-3 rounded-lg text-[15px] font-semibold transition-colors ${isActive(item)
                        ? "text-[#1e4d2b] bg-[#1e4d2b]/5"
                        : "text-[#3d4f44] hover:bg-[#f5f7f5]"
                        }`}
                    >
                      {t(item.labelKey)}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-3 border-t border-gray-100 mt-3">
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full bg-[#1e4d2b] hover:bg-[#163d22] text-white font-semibold py-3 rounded-lg shadow-md flex items-center justify-center gap-2">
                    <Leaf className="w-4 h-4" />
                    {t("nav.quote")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;