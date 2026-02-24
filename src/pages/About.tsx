
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Leaf, Users, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-botanical">
          <img
            src="https://images.unsplash.com/photo-1596395912440-27f6e3c5453e?q=80&w=2500&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
            alt="Madagascar Nature"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">{t('nav.about')}</h1>
          <p className="text-xl text-white/90">
            Cultivating excellence in the heart of Madagascar. From our soil to your hands.
          </p>
        </div>
      </div>

      {/* Story */}
      <div className="container px-4 md:px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-gold font-bold uppercase tracking-widest text-sm">Our Heritage</span>
            <h2 className="font-serif text-4xl font-bold text-foreground">A Legacy of Nature</h2>
            <div className="prose text-muted-foreground leading-relaxed space-y-4">
              <p>
                ILON’ALA was born from a deep connection to the rich biodiversity of Madagascar. "Ilon’ala" translates to the essence or spirit of the forest, reflecting our commitment to capturing the purest elements of nature.
              </p>
              <p>
                Unlike many exporters, we are not just middlemen. <strong>We own and operate our own plantation concessions</strong> for key ingredients like Ravintsara, Katrafay, and Eucalyptus Citriodora.
              </p>
              <p>
                This allows us to ensure absolute traceability and quality control, from the planting of the seedling to the final distillation process.
              </p>
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
      <div className="bg-cream py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-foreground">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white rounded-xl shadow-sm border border-border/50">
              <Leaf className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="font-serif text-xl font-bold mb-3">Sustainability</h3>
              <p className="text-muted-foreground text-sm">
                We practice ethical harvesting and replanting to ensure our forests thrive for generations.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-sm border border-border/50">
              <Users className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="font-serif text-xl font-bold mb-3">Community</h3>
              <p className="text-muted-foreground text-sm">
                Checkered by fair trade principles, we support local farmers and distillers with fair wages.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-sm border border-border/50">
              <Wallet className="w-12 h-12 text-primary mx-auto mb-6" /> // Using Wallet as placeholder for Quality/Value
              <h3 className="font-serif text-xl font-bold mb-3">Excellence</h3>
              <p className="text-muted-foreground text-sm">
                Our laboratory testing ensures 100% purity in every drop of oil and grain of spice.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container px-4 md:px-6 py-24 text-center">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Ready to work with us?</h2>
        <Link to="/contact">
          <Button size="lg" className="bg-primary text-white font-bold h-14 px-8">
            Get in Touch
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default About;
