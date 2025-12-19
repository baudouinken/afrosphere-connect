import { Check, X, Globe, Layers, Users, MapPin } from "lucide-react";

const comparisonData = [
  {
    feature: "Scope géographique",
    others: "Local OU Diaspora",
    afrolife: "Panafricain + Diaspora",
    advantage: true
  },
  {
    feature: "Services disponibles",
    others: "Events uniquement",
    afrolife: "Events + Activities + Logement + Shop",
    advantage: true
  },
  {
    feature: "Dimension sociale",
    others: "Non",
    afrolife: "Stories, Followers, Reviews",
    advantage: true
  },
  {
    feature: "Géolocalisation",
    others: "Manuelle",
    afrolife: "Automatique contextuelle",
    advantage: true
  },
  {
    feature: "Multi-devise",
    others: "EUR uniquement",
    afrolife: "FCFA, EUR, USD + Mobile Money",
    advantage: true
  },
  {
    feature: "Comptes PRO",
    others: "Limités",
    afrolife: "Statistiques avancées + Badge vérifié",
    advantage: true
  },
];

const differentiators = [
  {
    icon: Globe,
    title: "Panafricain + Diaspora",
    description: "La seule app qui couvre à la fois l'Afrique et la diaspora mondiale. Où que tu sois, retrouve ta communauté."
  },
  {
    icon: Layers,
    title: "Tout-en-un",
    description: "Events, activités, logements, shops - tout dans une seule app. Plus besoin de jongler entre plusieurs plateformes."
  },
  {
    icon: MapPin,
    title: "Géoloc intelligente",
    description: "L'app détecte automatiquement ton pays et t'affiche le contenu pertinent. Voyage et l'app s'adapte."
  },
];

export const WhyDifferent = () => {
  return (
    <section className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Pourquoi nous choisir
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Pourquoi <span className="text-gradient">AfroLife</span> est différent
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pas juste une app d'événements - une plateforme lifestyle complète
          </p>
        </div>

        {/* Differentiator Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {differentiators.map((item, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-hero flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-center mb-8">
            Comparatif détaillé
          </h3>
          
          <div className="bg-card rounded-2xl shadow-card overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-muted p-4 font-display font-bold text-sm">
              <div>Fonctionnalité</div>
              <div className="text-center text-muted-foreground">Autres Apps</div>
              <div className="text-center text-primary">AfroLife</div>
            </div>

            {/* Table Rows */}
            {comparisonData.map((row, index) => (
              <div 
                key={index}
                className={`grid grid-cols-3 p-4 items-center text-sm ${
                  index !== comparisonData.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="font-medium">{row.feature}</div>
                <div className="text-center text-muted-foreground flex items-center justify-center gap-2">
                  <X className="w-4 h-4 text-destructive/50" />
                  <span className="hidden sm:inline">{row.others}</span>
                </div>
                <div className="text-center flex items-center justify-center gap-2 text-primary font-medium">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="hidden sm:inline">{row.afrolife}</span>
                  <span className="sm:hidden">✓</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
