import { Shield, Lock, CreditCard, Award, TrendingUp } from "lucide-react";

const partners = [
  { name: "MTN Mobile Money", initials: "MTN" },
  { name: "Orange Money", initials: "OM" },
  { name: "Visa", initials: "VISA" },
  { name: "PayPal", initials: "PP" },
  { name: "Stripe", initials: "S" },
];

const trustBadges = [
  {
    icon: Shield,
    title: "Données protégées",
    description: "Chiffrement SSL 256-bit"
  },
  {
    icon: Lock,
    title: "Paiements sécurisés",
    description: "Transactions cryptées"
  },
  {
    icon: CreditCard,
    title: "Multi-paiement",
    description: "Mobile Money & CB"
  },
  {
    icon: Award,
    title: "Organisateurs vérifiés",
    description: "Badge de confiance"
  },
];

const growthStats = [
  { value: "250%", label: "Croissance annuelle" },
  { value: "98%", label: "Satisfaction clients" },
  { value: "4.8/5", label: "Note moyenne" },
];

export const TrustSignals = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {trustBadges.map((badge, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 bg-card rounded-xl p-4 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <badge.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-medium text-sm">{badge.title}</div>
                <div className="text-xs text-muted-foreground">{badge.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Partners / Payment Methods */}
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-sm mb-6">Moyens de paiement acceptés</p>
          <div className="flex flex-wrap justify-center gap-6">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="w-20 h-12 bg-card rounded-lg shadow-sm flex items-center justify-center"
              >
                <span className="font-display font-bold text-xs text-muted-foreground">
                  {partner.initials}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Stats */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12">
          <div className="flex items-center justify-center gap-2 mb-8">
            <TrendingUp className="w-6 h-6 text-primary-foreground" />
            <span className="text-primary-foreground font-display font-bold text-lg">
              Notre croissance
            </span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {growthStats.map((stat, index) => (
              <div key={index}>
                <div className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
