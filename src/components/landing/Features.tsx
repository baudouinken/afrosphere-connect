import { 
  CalendarDays, 
  MapPin, 
  Building2, 
  ShoppingBag, 
  Users, 
  Heart,
  Globe,
  Smartphone
} from "lucide-react";

const features = [
  {
    icon: CalendarDays,
    title: "Events",
    description: "Concerts, festivals, soirées afro, conférences et plus encore. Ne manque plus rien.",
    color: "bg-gradient-sunset",
  },
  {
    icon: MapPin,
    title: "Activities",
    description: "Restaurants, bars, clubs, salons de coiffure africains – tous les spots près de toi.",
    color: "bg-gradient-gold",
  },
  {
    icon: Building2,
    title: "Logement",
    description: "Hôtels, appartements meublés et locations pour tes voyages et retours au pays.",
    color: "bg-primary",
  },
  {
    icon: ShoppingBag,
    title: "Shops",
    description: "Boutiques africaines, supermarchés, mode et accessoires – consomme local.",
    color: "bg-accent",
  },
  {
    icon: Users,
    title: "Communauté",
    description: "Suis tes amis, partage des stories et découvre les tendances de ta ville.",
    color: "bg-secondary",
  },
  {
    icon: Heart,
    title: "Favoris",
    description: "Sauvegarde tes coups de cœur et reçois des notifications personnalisées.",
    color: "bg-gradient-hero",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pattern-grid" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium">Tout en une app</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ta vie Afro, <span className="text-gradient">partout dans le monde</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Que tu sois au Cameroun, en France, en Allemagne ou ailleurs – 
            retrouve ta communauté et découvre ce qui se passe autour de toi.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-hero opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Geolocation Highlight */}
        <div className="mt-16 bg-gradient-hero rounded-3xl p-8 md:p-12 text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-foreground/20 px-4 py-2 rounded-full mb-4">
                <Smartphone className="w-4 h-4" />
                <span className="text-sm font-medium">Géolocalisation automatique</span>
              </div>
              
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                L'app s'adapte à ton pays
              </h3>
              
              <p className="text-primary-foreground/80 mb-6">
                Active ta localisation et l'application te montre automatiquement 
                les événements et lieux africains autour de toi. Au Cameroun, 
                en Allemagne ou partout ailleurs.
              </p>

              <div className="flex flex-wrap gap-3">
                {["🇨🇲 Cameroun", "🇫🇷 France", "🇩🇪 Allemagne", "🇧🇪 Belgique", "🇨🇮 Côte d'Ivoire"].map((country) => (
                  <span key={country} className="bg-primary-foreground/20 px-3 py-1.5 rounded-full text-sm">
                    {country}
                  </span>
                ))}
                <span className="bg-primary-foreground/20 px-3 py-1.5 rounded-full text-sm">
                  +25 autres
                </span>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                {/* Globe Visualization */}
                <div className="absolute inset-0 rounded-full border-2 border-primary-foreground/20" />
                <div className="absolute inset-4 rounded-full border-2 border-primary-foreground/30" />
                <div className="absolute inset-8 rounded-full border-2 border-primary-foreground/40" />
                
                {/* Location Pins */}
                <div className="absolute top-8 left-12 w-3 h-3 bg-primary-foreground rounded-full animate-pulse" />
                <div className="absolute top-16 right-8 w-3 h-3 bg-primary-foreground rounded-full animate-pulse animation-delay-200" />
                <div className="absolute bottom-12 left-8 w-3 h-3 bg-primary-foreground rounded-full animate-pulse animation-delay-300" />
                <div className="absolute bottom-20 right-12 w-3 h-3 bg-primary-foreground rounded-full animate-pulse animation-delay-100" />
                
                {/* Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    <Globe className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
