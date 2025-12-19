import { Star, Quote } from "lucide-react";

const userTestimonials = [
  {
    name: "Aminata Diallo",
    location: "Paris, France",
    avatar: "AD",
    rating: 5,
    quote: "Grâce à AfroLife, j'ai découvert des événements afro incroyables près de chez moi. La géolocalisation automatique est magique !",
    type: "user"
  },
  {
    name: "Kwame Asante",
    location: "Berlin, Allemagne",
    avatar: "KA",
    rating: 5,
    quote: "Enfin une app qui comprend notre communauté. J'ai trouvé des restos camerounais et des soirées afro que je ne connaissais pas.",
    type: "user"
  },
  {
    name: "Fatou Ndiaye",
    location: "Bruxelles, Belgique",
    avatar: "FN",
    rating: 5,
    quote: "J'utilise AfroLife chaque week-end pour découvrir les activités. L'interface est super intuitive !",
    type: "user"
  },
  {
    name: "Yannick Mbida",
    location: "Douala, Cameroun",
    avatar: "YM",
    rating: 5,
    quote: "En tant que local, c'est parfait pour rester au courant de tous les événements de ma ville.",
    type: "user"
  },
];

const proTestimonials = [
  {
    name: "Marie Kouassi",
    role: "Organisatrice d'événements",
    location: "Paris, France",
    avatar: "MK",
    result: "500+ billets vendus en 2 semaines",
    quote: "Avec le compte PRO, j'ai triplé ma visibilité. Mes événements se remplissent beaucoup plus vite qu'avant.",
  },
  {
    name: "Jean-Pierre Ondo",
    role: "Gérant d'hôtel",
    location: "Yaoundé, Cameroun",
    avatar: "JP",
    result: "40% d'augmentation des réservations",
    quote: "AfroLife nous amène des clients diaspora qui cherchent un hébergement de confiance. Le badge vérifié fait toute la différence.",
  },
  {
    name: "Adama Traoré",
    role: "Propriétaire de boutique afro",
    location: "Berlin, Allemagne",
    avatar: "AT",
    result: "3x plus de contacts clients",
    quote: "Sans e-commerce, on génère quand même beaucoup de trafic grâce à la fiche PRO et les promos sponsorisées.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Témoignages
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ce qu'ils disent d'<span className="text-gradient">AfroLife</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Rejoins des milliers d'utilisateurs satisfaits à travers le monde
          </p>
        </div>

        {/* User Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {userTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-medium text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
              
              <div className="flex gap-1 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* PRO Success Stories */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
              Success Stories PRO
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold">
              Ils ont boosté leur business avec AfroLife
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {proTestimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-secondary/20 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-gradient-gold text-secondary-foreground px-4 py-1 rounded-bl-xl text-xs font-bold">
                  PRO
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-display font-bold">{testimonial.name}</div>
                    <div className="text-sm text-primary">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
                
                <div className="bg-primary/5 rounded-xl p-4 mb-6">
                  <div className="text-xs text-muted-foreground mb-1">Résultat</div>
                  <div className="font-display font-bold text-primary text-lg">{testimonial.result}</div>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
