
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner"; // Assuming sonner is installed as per package.json

const Contact = () => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We will get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-botanical text-white py-20 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">{t('nav.contact')}</h1>
        <p className="text-white/80 max-w-xl mx-auto text-lg">
          We are available for all your inquiries, whether for bulk orders, partnerships, or product questions.
        </p>
      </div>

      <div className="container px-4 md:px-6 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-border flex items-start gap-4">
              <div className="bg-muted p-3 rounded-full">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Phone & WhatsApp</h3>
                <p className="text-sm text-muted-foreground mb-1">Mon-Fri, 8am - 5pm</p>
                <a href="tel:+261340000000" className="text-primary font-bold hover:underline">+261 34 00 000 00</a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-border flex items-start gap-4">
              <div className="bg-muted p-3 rounded-full">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Email</h3>
                <p className="text-sm text-muted-foreground mb-1">For general inquiries</p>
                <a href="mailto:contact@ilon-ala.com" className="text-primary font-bold hover:underline">contact@ilon-ala.com</a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-border flex items-start gap-4">
              <div className="bg-muted p-3 rounded-full">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Office</h3>
                <p className="text-sm text-muted-foreground">
                  Lot II A 123<br />
                  Antananarivo, Madagascar
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-border">
            <h2 className="font-serif text-2xl font-bold mb-6 text-foreground">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <Input placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Company (Optional)</label>
                  <Input placeholder="Your Company Ltd." />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="john@example.com" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone / WhatsApp</label>
                  <Input type="tel" placeholder="+1 234 567 8900" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Interested In</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="essential-oils">Essential Oils (Bulk)</SelectItem>
                    <SelectItem value="retail">Retail Products</SelectItem>
                    <SelectItem value="private-label">Private Label / White Label</SelectItem>
                    <SelectItem value="distribution">Distribution Partnership</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea className="min-h-[150px]" placeholder="Tell us more about your needs..." required />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12">
                {t('btn.submit')}
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
