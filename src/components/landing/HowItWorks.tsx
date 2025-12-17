import { Download, MapPin, Sparkles, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Télécharge l'app",
    description: "Disponible sur Android. iOS arrive bientôt.",
  },
  {
    icon: MapPin,
    step: "02",
    title: "Active ta position",
    description: "L'app détecte ton pays et te montre ce qui se passe près de toi.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Explore & Découvre",
    description: "Events, activités, logements, shops – tout à portée de main.",
  },
  {
    icon: PartyPopper,
    step: "04",
    title: "Vis ta meilleure vie",
    description: "Réserve, partage avec tes amis et profite de ta communauté.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Comment ça <span className="text-gradient">marche</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            En quelques étapes simples, rejoins la plus grande communauté afro lifestyle.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/10" />
              )}

              <div className="relative bg-card rounded-3xl p-8 text-center shadow-card group-hover:shadow-card-hover transition-all duration-300 group-hover:-translate-y-1">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-hero text-primary-foreground font-display font-bold px-4 py-1 rounded-full text-sm">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <step.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
