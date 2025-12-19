import { Button } from "@/components/ui/button";
import { Check, Sparkles, Clock, Gift } from "lucide-react";

const plans = [
  {
    name: "Gratuit",
    description: "Pour découvrir l'app",
    price: "0",
    currency: "FCFA",
    period: "/mois",
    features: [
      "Accès à tous les events",
      "Recherche d'activités",
      "Favoris illimités",
      "Stories et communauté",
      "Notifications basiques",
    ],
    cta: "Commencer gratuitement",
    variant: "outline" as const,
    popular: false,
  },
  {
    name: "PRO",
    description: "Pour les professionnels",
    price: "10 000",
    originalPrice: "15 000",
    currency: "FCFA",
    period: "/mois",
    features: [
      "Tout le plan Gratuit",
      "Badge vérifié",
      "Analytics détaillés",
      "Priorité dans les résultats",
      "Stories sponsorisées",
      "Support prioritaire 24/7",
      "Mise en avant géolocalisée",
      "Essai gratuit 14 jours",
    ],
    cta: "Essayer PRO gratuitement",
    variant: "hero" as const,
    popular: true,
  },
  {
    name: "Business",
    description: "Pour les entreprises",
    price: "Sur mesure",
    currency: "",
    period: "",
    features: [
      "Tout le plan PRO",
      "Équipe multi-comptes",
      "API access",
      "Rapports personnalisés",
      "Account manager dédié",
      "Intégrations avancées",
    ],
    cta: "Contacter",
    variant: "outline" as const,
    popular: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        {/* Urgency Banner */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-gradient-hero rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Gift className="w-5 h-5 text-primary-foreground" />
              <span className="text-primary-foreground font-display font-bold">
                Offre de lancement
              </span>
            </div>
            <p className="text-primary-foreground/90 text-sm">
              Compte PRO à <span className="font-bold">10 000 FCFA/mois</span> au lieu de 15 000 FCFA pendant 3 mois
            </p>
            <div className="flex items-center justify-center gap-2 mt-3 text-primary-foreground/70 text-xs">
              <Clock className="w-3 h-3" />
              <span>Offre limitée - Premiers arrivés, premiers servis</span>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Des plans adaptés à <span className="text-gradient">tes besoins</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Commence gratuitement et évolue avec nous. Rejoins 50 000+ utilisateurs aujourd'hui.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-3xl p-8 shadow-card ${
                plan.popular ? "ring-2 ring-primary scale-105" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-hero text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Plus populaire
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="font-display text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                
                <div className="flex items-baseline justify-center gap-1">
                  {plan.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through mr-2">
                      {plan.originalPrice}
                    </span>
                  )}
                  <span className="font-display text-4xl font-bold">{plan.price}</span>
                  {plan.currency && (
                    <span className="text-muted-foreground">{plan.currency}</span>
                  )}
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
                
                {plan.popular && (
                  <span className="inline-block mt-2 text-xs bg-green-500/10 text-green-600 px-3 py-1 rounded-full">
                    Économise 33% pendant 3 mois
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant={plan.variant} className="w-full" size="lg">
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Pricing Note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          * Les prix varient selon le pays. Prix affichés en FCFA pour l'Afrique. 
          Paiement Mobile Money, CB et PayPal acceptés.
        </p>
      </div>
    </section>
  );
};
