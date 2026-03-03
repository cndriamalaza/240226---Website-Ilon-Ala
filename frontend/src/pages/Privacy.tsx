import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Privacy = () => {
  const { language } = useLanguage();
  const isFr = language === "fr";

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-3xl prose prose-neutral dark:prose-invert">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
          {isFr ? "Politique de confidentialité" : "Privacy Policy"}
        </h1>
        <p className="text-muted-foreground text-sm mt-2">
          {isFr ? "Dernière mise à jour :" : "Last updated:"} {new Date().toLocaleDateString(isFr ? "fr-FR" : "en-GB")}
        </p>

        <section className="mt-8 space-y-4 text-foreground">
          <h2 className="font-serif text-xl font-bold">{isFr ? "1. Responsable du traitement" : "1. Data controller"}</h2>
          <p>
            {isFr
              ? "Ilon'Ala Madagascar, Ilon'Ala Sarl – MANAKARA 316, Ivato Antananarivo, Madagascar. Contact : ilona.mada@gmail.com"
              : "Ilon'Ala Madagascar, Ilon'Ala Sarl – MANAKARA 316, Ivato Antananarivo, Madagascar. Contact: ilona.mada@gmail.com"}
          </p>
        </section>

        <section className="mt-8 space-y-4 text-foreground">
          <h2 className="font-serif text-xl font-bold">
            {isFr ? "2. Données collectées" : "2. Data collected"}
          </h2>
          <p>
            {isFr
              ? "Nous collectons les données que vous nous communiquez volontairement via le formulaire de contact et la newsletter : nom, adresse e-mail, numéro de téléphone, message, et le cas échéant le nom de votre entreprise."
              : "We collect the data you voluntarily provide via the contact form and newsletter: name, email address, phone number, message, and if applicable your company name."}
          </p>
        </section>

        <section className="mt-8 space-y-4 text-foreground">
          <h2 className="font-serif text-xl font-bold">
            {isFr ? "3. Finalités" : "3. Purposes"}
          </h2>
          <p>
            {isFr
              ? "Vos données sont utilisées uniquement pour répondre à vos demandes (devis, questions, partenariats), vous envoyer nos actualités si vous vous êtes inscrit à la newsletter, et améliorer nos services."
              : "Your data is used solely to respond to your requests (quotes, questions, partnerships), to send you our news if you subscribed to the newsletter, and to improve our services."}
          </p>
        </section>

        <section className="mt-8 space-y-4 text-foreground">
          <h2 className="font-serif text-xl font-bold">
            {isFr ? "4. Base légale et durée de conservation" : "4. Legal basis and retention"}
          </h2>
          <p>
            {isFr
              ? "Le traitement repose sur votre consentement et l'exécution de nos obligations contractuelles. Les données sont conservées pendant la durée nécessaire à ces finalités ou selon les obligations légales applicables à Madagascar."
              : "Processing is based on your consent and the performance of our contractual obligations. Data is retained for as long as necessary for these purposes or in accordance with applicable legal obligations in Madagascar."}
          </p>
        </section>

        <section className="mt-8 space-y-4 text-foreground">
          <h2 className="font-serif text-xl font-bold">
            {isFr ? "5. Vos droits" : "5. Your rights"}
          </h2>
          <p>
            {isFr
              ? "Vous disposez d'un droit d'accès, de rectification, de suppression et de limitation du traitement de vos données. Pour exercer ces droits, contactez-nous à ilona.mada@gmail.com."
              : "You have the right to access, rectify, delete and limit the processing of your data. To exercise these rights, contact us at ilona.mada@gmail.com."}
          </p>
        </section>

        <section className="mt-8 space-y-4 text-foreground">
          <h2 className="font-serif text-xl font-bold">
            {isFr ? "6. Cookies" : "6. Cookies"}
          </h2>
          <p>
            {isFr
              ? "Ce site peut utiliser des cookies techniques essentiels au fonctionnement du site. Aucun cookie publicitaire ou de traçage n'est utilisé sans votre consentement."
              : "This site may use technical cookies essential for its operation. No advertising or tracking cookies are used without your consent."}
          </p>
        </section>

        <div className="mt-12">
          <Link to="/" className="text-primary hover:underline font-medium">
            {isFr ? "← Retour à l'accueil" : "← Back to home"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
