import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  BarChart3, 
  Users, 
  Star, 
  ArrowRight,
  Building2,
  Calendar,
  Store
} from "lucide-react";

const businessTypes = [
  {
    icon: Calendar,
    title: "Organisateurs d'événements",
    benefits: ["Billeterie intégrée", "Promotion ciblée", "Analytics détaillés"],
  },
  {
    icon: Building2,
    title: "Hôtels & Logements",
    benefits: ["Réservations directes", "Commission réduite", "Visibilité diaspora"],
  },
  {
    icon: Store,
    title: "Commerces & Shops",
    benefits: ["Fiche PRO", "Click-to-WhatsApp", "Promotions sponsorisées"],
  },
];

const stats = [
  { value: "3x", label: "Plus de visibilité" },
  { value: "50%", label: "Coûts réduits" },
  { value: "24/7", label: "Support dédié" },
];

export const Business = () => {
  return (
    <section id="business" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">Pour les professionnels</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Développe ton business avec <span className="text-gradient">AfroLife PRO</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Rejoins des milliers de professionnels qui utilisent AfroLife pour 
            atteindre la communauté africaine locale et diaspora.
          </p>
        </div>

        {/* Business Types */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {businessTypes.map((type) => (
            <div
              key={type.title}
              className="bg-card rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <type.icon className="w-7 h-7 text-secondary-foreground" />
              </div>
              
              <h3 className="font-display text-xl font-bold mb-4">{type.title}</h3>
              
              <ul className="space-y-3">
                {type.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Star className="w-3 h-3 text-primary" />
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* PRO Features */}
        <div className="bg-foreground rounded-3xl p-8 md:p-12 text-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">
                Passe au niveau supérieur avec PRO
              </h3>
              
              <div className="space-y-4 mb-8">
                {[
                  { icon: BarChart3, text: "Analytics avancés et insights" },
                  { icon: Star, text: "Badge vérifié et priorité de recherche" },
                  { icon: Users, text: "Accès à la communauté diaspora" },
                  { icon: TrendingUp, text: "Promotions et mises en avant" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <Button variant="hero" size="lg">
                Devenir PRO
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-6 rounded-2xl bg-background/5 backdrop-blur">
                  <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-background/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
