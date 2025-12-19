import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "L'app est-elle vraiment gratuite ?",
    answer: "Oui ! L'app est 100% gratuite pour les utilisateurs. Tu peux découvrir des événements, activités, logements et shops sans rien payer. Les comptes PRO sont payants pour les professionnels qui veulent plus de visibilité et de fonctionnalités."
  },
  {
    question: "Quels pays sont couverts par AfroLife ?",
    answer: "AfroLife est disponible dans plus de 30 pays, incluant les pays africains (Cameroun, Côte d'Ivoire, Sénégal, Nigeria...) et les pays de la diaspora (France, Allemagne, Belgique, Canada, USA, UK...). L'app s'adapte automatiquement à ton pays."
  },
  {
    question: "Comment fonctionne la géolocalisation automatique ?",
    answer: "Quand tu ouvres l'app, elle détecte automatiquement ta position et t'affiche les événements et activités pertinents pour ton pays. Si tu es au Cameroun, tu vois le contenu camerounais. Si tu es en Allemagne, tu vois les événements afro en Allemagne. Tu peux aussi changer manuellement de pays."
  },
  {
    question: "Puis-je organiser des événements sans compte PRO ?",
    answer: "Non, pour créer des événements tu as besoin d'un compte PRO. Cela nous permet de garantir la qualité des événements et d'offrir aux organisateurs des outils avancés comme les statistiques, le badge vérifié et la mise en avant."
  },
  {
    question: "Quand l'app iOS sera-t-elle disponible ?",
    answer: "L'app iOS est en cours de développement et sera disponible très prochainement. Inscris-toi à notre waitlist pour être notifié dès sa sortie et bénéficier d'un accès anticipé !"
  },
  {
    question: "Comment devenir organisateur vérifié ?",
    answer: "Pour obtenir le badge vérifié, il faut souscrire à un compte PRO et compléter la vérification de ton identité. Le badge augmente la confiance des utilisateurs et améliore ta visibilité dans les résultats de recherche."
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer: "Nous acceptons Mobile Money (Orange Money, MTN Mobile Money...), les cartes bancaires (Visa, Mastercard), PayPal et les virements. Les moyens disponibles varient selon ton pays."
  },
  {
    question: "Comment fonctionne la commission billetterie ?",
    answer: "Pour les événements payants, nous prélevons une commission de 5-10% sur chaque billet vendu. Cette commission couvre les frais de paiement, l'hébergement et le support. Les détails exacts sont affichés lors de la création de ton événement."
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer: "Absolument. Nous utilisons un chiffrement de bout en bout pour protéger tes données personnelles. Nous ne revendons jamais tes informations à des tiers. Tu peux consulter notre politique de confidentialité pour plus de détails."
  },
  {
    question: "Comment contacter le support ?",
    answer: "Tu peux nous contacter par email à hello@afrolife.app, via le chat intégré dans l'app, ou sur nos réseaux sociaux. Les utilisateurs PRO bénéficient d'un support prioritaire 24/7."
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Questions <span className="text-gradient">fréquentes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tout ce que tu dois savoir sur AfroLife
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 border-none shadow-sm data-[state=open]:shadow-card"
              >
                <AccordionTrigger className="text-left font-display font-medium hover:no-underline py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Tu ne trouves pas la réponse à ta question ?
          </p>
          <a 
            href="mailto:hello@afrolife.app"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Contacte-nous
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
