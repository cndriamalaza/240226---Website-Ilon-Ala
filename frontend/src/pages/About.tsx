import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Leaf, Users, Award, TreePine, Sprout, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const { t, language } = useLanguage();

  const values = language === 'fr'
    ? [
      { icon: <Leaf className="w-10 h-10" />, title: 'Durabilité', desc: 'Nous pratiquons la récolte éthique et le reboisement pour que nos forêts prospèrent pour les générations futures.' },
      { icon: <Users className="w-10 h-10" />, title: 'Communauté', desc: 'Guidés par les principes du commerce équitable, nous soutenons les agriculteurs et distillateurs locaux avec des salaires justes.' },
      { icon: <Award className="w-10 h-10" />, title: 'Excellence', desc: 'Nos tests en laboratoire garantissent une pureté à 100% dans chaque goutte d\'huile et chaque grain d\'épice.' },
      { icon: <TreePine className="w-10 h-10" />, title: 'Traçabilité', desc: 'De la pépinière au produit fini, chaque lot est traçable avec un numéro unique et un certificat d\'analyse.' },
      { icon: <Sprout className="w-10 h-10" />, title: 'Innovation', desc: 'Notre pépinière intégrée nous permet de contrôler la qualité dès le premier jour, avec des variétés sélectionnées.' },
      { icon: <Heart className="w-10 h-10" />, title: 'Passion', desc: 'Chaque produit Ilon\'Ala est le fruit d\'une passion profonde pour la nature malgache et ses trésors botaniques.' },
    ]
    : [
      { icon: <Leaf className="w-10 h-10" />, title: 'Sustainability', desc: 'We practice ethical harvesting and replanting to ensure our forests thrive for generations.' },
      { icon: <Users className="w-10 h-10" />, title: 'Community', desc: 'Guided by fair trade principles, we support local farmers and distillers with fair wages.' },
      { icon: <Award className="w-10 h-10" />, title: 'Excellence', desc: 'Our laboratory testing ensures 100% purity in every drop of oil and grain of spice.' },
      { icon: <TreePine className="w-10 h-10" />, title: 'Traceability', desc: 'From nursery to finished product, every batch is traceable with a unique number and certificate of analysis.' },
      { icon: <Sprout className="w-10 h-10" />, title: 'Innovation', desc: 'Our integrated nursery allows us to control quality from day one, with selected varieties.' },
      { icon: <Heart className="w-10 h-10" />, title: 'Passion', desc: 'Every Ilon\'Ala product is the fruit of a deep passion for Malagasy nature and its botanical treasures.' },
    ];

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Hero Section */}
      <section className="relative h-[35vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-botanical">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay" />
        </div>
        <div className="container relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 tracking-tight drop-shadow-md">
            {t('about.heritage')}
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            {t('about.legacy')}
          </p>
        </div>
      </section>

      {/* Story */}
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-gold font-bold uppercase tracking-widest text-sm">{t('about.heritage')}</span>
            <h2 className="font-serif text-4xl font-bold text-foreground">{t('about.legacy')}</h2>
            <div className="prose text-muted-foreground leading-relaxed space-y-4">
              {language === 'fr' ? (
                <>
                  <p>
                    Ilon'Ala est née d'une connexion profonde avec la riche biodiversité de Madagascar. « Ilon'ala » signifie l'essence ou l'esprit de la forêt, reflétant notre engagement à capturer les éléments les plus purs de la nature.
                  </p>
                  <p>
                    Contrairement à beaucoup d'exportateurs, nous ne sommes pas de simples intermédiaires. <strong>Nous possédons et exploitons nos propres concessions de plantation</strong> pour des ingrédients clés comme le Ravintsara, le Katrafay et l'Eucalyptus Citriodora.
                  </p>
                  <p>
                    Notre pépinière intégrée produit des plants de cacao, cannelle, café, girofle et bien d'autres, permettant une traçabilité complète de la graine au produit fini.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Ilon'Ala was born from a deep connection to the rich biodiversity of Madagascar. "Ilon'ala" translates to the essence or spirit of the forest, reflecting our commitment to capturing the purest elements of nature.
                  </p>
                  <p>
                    Unlike many exporters, we are not just middlemen. <strong>We own and operate our own plantation concessions</strong> for key ingredients like Ravintsara, Katrafay, and Eucalyptus Citriodora.
                  </p>
                  <p>
                    Our integrated nursery produces cocoa, cinnamon, coffee, clove, and many more seedlings, enabling complete traceability from seed to finished product.
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1623945202652-325251a37c38?q=80&w=1000&auto=format&fit=crop"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Plantation"
            />
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-cream py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">{t('about.values')}</h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl shadow-sm border border-border/50 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-primary mx-auto mb-6">{v.icon}</div>
                <h3 className="font-serif text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container px-4 md:px-6 py-12 text-center">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-6">{t('about.cta')}</h2>
        <div className="flex gap-4 justify-center">
          <Link to="/contact">
            <Button size="lg" className="bg-[#1e4d2b] hover:bg-[#163d22] text-white font-bold h-14 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              {t('nav.contact')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link to="/agribusiness">
            <Button size="lg" variant="outline" className="border-[#1e4d2b] text-[#1e4d2b] hover:bg-[#1e4d2b] hover:text-white font-bold h-14 px-10 rounded-full transition-all duration-300">
              {t('nav.agribusiness')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
