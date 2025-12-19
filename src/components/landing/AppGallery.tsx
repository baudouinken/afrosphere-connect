import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Heart, Bell, Search, Home, Map, Plus, Users, Star, Calendar, Clock } from "lucide-react";

const screenshots = [
  {
    id: 1,
    title: "Accueil avec géolocalisation",
    description: "Découvre automatiquement les événements et activités près de toi",
    content: "home"
  },
  {
    id: 2,
    title: "Carte interactive",
    description: "Visualise tous les lieux et événements sur une carte",
    content: "map"
  },
  {
    id: 3,
    title: "Fiche événement",
    description: "Tous les détails, avis et réservation en un clic",
    content: "event"
  },
  {
    id: 4,
    title: "Stories & Social",
    description: "Partage tes moments et suis tes amis",
    content: "stories"
  },
  {
    id: 5,
    title: "Profil PRO vérifié",
    description: "Badge de confiance et statistiques avancées",
    content: "profile"
  },
  {
    id: 6,
    title: "Recherche avancée",
    description: "Trouve exactement ce que tu cherches",
    content: "search"
  },
];

const PhoneFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-56 md:w-64 mx-auto">
    <div className="absolute -inset-3 bg-gradient-hero rounded-[2.5rem] blur-xl opacity-20" />
    <div className="relative bg-foreground rounded-[2rem] p-1.5 shadow-2xl">
      <div className="bg-background rounded-[1.75rem] overflow-hidden aspect-[9/19]">
        {children}
      </div>
    </div>
  </div>
);

const ScreenHome = () => (
  <div className="h-full flex flex-col bg-background">
    <div className="px-3 py-2 flex items-center justify-between border-b border-border/30">
      <span className="font-display font-bold text-sm">
        <span className="text-primary">AFRO</span>
        <span className="text-secondary">LIFE</span>
      </span>
      <div className="flex items-center gap-2">
        <Search className="w-3.5 h-3.5 text-muted-foreground" />
        <Bell className="w-3.5 h-3.5 text-muted-foreground" />
      </div>
    </div>
    <div className="px-3 py-2 bg-primary/5 flex items-center gap-2">
      <MapPin className="w-3 h-3 text-primary" />
      <span className="text-[10px] text-primary font-medium">Berlin, Allemagne</span>
    </div>
    <div className="flex-1 px-3 py-2 space-y-2 overflow-hidden">
      <div className="flex items-center justify-between">
        <span className="font-display font-bold text-xs text-primary">Événements</span>
        <span className="text-[8px] text-secondary">VOIR TOUT</span>
      </div>
      {[1, 2].map((i) => (
        <div key={i} className="bg-card rounded-lg p-2 shadow-sm">
          <div className="flex gap-2">
            <div className="w-12 h-12 rounded-lg bg-gradient-hero/30" />
            <div className="flex-1">
              <span className="text-[8px] text-secondary font-semibold">CONCERT</span>
              <div className="text-[10px] font-medium">Afro Night {i}</div>
              <div className="flex items-center gap-1 text-[8px] text-muted-foreground">
                <MapPin className="w-2 h-2" />
                <span>Berlin</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ScreenMap = () => (
  <div className="h-full flex flex-col bg-background">
    <div className="flex-1 bg-muted relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-secondary/5" />
      {[
        { top: "20%", left: "30%", color: "bg-primary" },
        { top: "40%", left: "60%", color: "bg-secondary" },
        { top: "60%", left: "25%", color: "bg-primary" },
        { top: "35%", left: "70%", color: "bg-accent" },
      ].map((pin, i) => (
        <div 
          key={i} 
          className={`absolute w-4 h-4 ${pin.color} rounded-full shadow-lg animate-pulse`}
          style={{ top: pin.top, left: pin.left }}
        />
      ))}
    </div>
    <div className="p-3 bg-card rounded-t-2xl -mt-4 relative z-10">
      <div className="text-xs font-medium">4 événements trouvés</div>
      <div className="text-[10px] text-muted-foreground">Dans un rayon de 5km</div>
    </div>
  </div>
);

const ScreenEvent = () => (
  <div className="h-full flex flex-col bg-background">
    <div className="h-24 bg-gradient-hero relative">
      <button className="absolute top-2 right-2 w-6 h-6 bg-background/90 rounded-full flex items-center justify-center">
        <Heart className="w-3 h-3 text-destructive fill-destructive" />
      </button>
    </div>
    <div className="flex-1 p-3 space-y-3">
      <div>
        <span className="text-[8px] bg-secondary/10 text-secondary px-2 py-0.5 rounded-full">FESTIVAL</span>
        <h3 className="font-display font-bold text-sm mt-1">Afro Vibes Festival</h3>
        <div className="flex items-center gap-2 mt-1">
          <Star className="w-3 h-3 fill-secondary text-secondary" />
          <span className="text-[10px]">4.8 (234 avis)</span>
        </div>
      </div>
      <div className="flex gap-2 text-[9px] text-muted-foreground">
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          <span>20 Déc</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>20:00</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          <span>Berlin</span>
        </div>
      </div>
      <button className="w-full bg-primary text-primary-foreground text-[10px] font-medium py-2 rounded-lg">
        Réserver - 25€
      </button>
    </div>
  </div>
);

const ScreenStories = () => (
  <div className="h-full flex flex-col bg-background">
    <div className="px-3 py-2 border-b border-border/30">
      <span className="font-display font-bold text-sm">Stories</span>
    </div>
    <div className="flex-1 p-3">
      <div className="flex gap-3 overflow-hidden">
        <div className="flex flex-col items-center gap-1">
          <div className="w-14 h-14 rounded-full bg-gradient-hero p-0.5">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/30 to-secondary/30" />
          </div>
          <span className="text-[8px]">marie_k</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-14 h-14 rounded-full bg-gradient-gold p-0.5">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-secondary/30 to-accent/30" />
          </div>
          <span className="text-[8px]">jean_p</span>
        </div>
      </div>
      <div className="mt-4 bg-card rounded-xl p-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-gradient-hero" />
          <div>
            <span className="text-[10px] font-medium">Nouveau follower</span>
            <p className="text-[8px] text-muted-foreground">aminata_d te suit</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ScreenProfile = () => (
  <div className="h-full flex flex-col bg-background">
    <div className="p-3 text-center">
      <div className="w-16 h-16 mx-auto rounded-full bg-gradient-hero p-0.5 mb-2">
        <div className="w-full h-full rounded-full bg-card flex items-center justify-center font-bold text-lg">
          MK
        </div>
      </div>
      <div className="flex items-center justify-center gap-1">
        <span className="font-display font-bold text-sm">Marie Kouassi</span>
        <div className="w-4 h-4 bg-secondary rounded-full flex items-center justify-center">
          <span className="text-[8px] text-secondary-foreground">✓</span>
        </div>
      </div>
      <span className="text-[10px] text-primary">Organisatrice PRO</span>
    </div>
    <div className="flex justify-around py-2 border-y border-border/30">
      <div className="text-center">
        <div className="font-bold text-sm">1.2k</div>
        <div className="text-[8px] text-muted-foreground">Followers</div>
      </div>
      <div className="text-center">
        <div className="font-bold text-sm">45</div>
        <div className="text-[8px] text-muted-foreground">Events</div>
      </div>
      <div className="text-center">
        <div className="font-bold text-sm">4.9</div>
        <div className="text-[8px] text-muted-foreground">Rating</div>
      </div>
    </div>
    <div className="flex-1 p-3">
      <div className="bg-primary/5 rounded-lg p-2">
        <span className="text-[9px] font-medium">Stats du mois</span>
        <div className="flex justify-between mt-1 text-[8px] text-muted-foreground">
          <span>Vues: 2.3k</span>
          <span>Clics: 456</span>
        </div>
      </div>
    </div>
  </div>
);

const ScreenSearch = () => (
  <div className="h-full flex flex-col bg-background">
    <div className="p-3">
      <div className="bg-muted rounded-lg px-3 py-2 flex items-center gap-2">
        <Search className="w-3 h-3 text-muted-foreground" />
        <span className="text-[10px] text-muted-foreground">Rechercher...</span>
      </div>
    </div>
    <div className="px-3 flex gap-2 overflow-hidden">
      {["Musique", "Food", "Sport", "Art"].map((cat) => (
        <span key={cat} className="px-2 py-1 bg-primary/10 text-primary text-[8px] rounded-full whitespace-nowrap">
          {cat}
        </span>
      ))}
    </div>
    <div className="flex-1 p-3 space-y-2">
      <span className="text-[10px] text-muted-foreground">Résultats récents</span>
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-2 bg-card p-2 rounded-lg">
          <div className="w-8 h-8 rounded-lg bg-gradient-hero/30" />
          <div className="flex-1">
            <div className="text-[10px] font-medium">Résultat {i}</div>
            <div className="text-[8px] text-muted-foreground">Event • Berlin</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const screenComponents: { [key: string]: React.ReactNode } = {
  home: <ScreenHome />,
  map: <ScreenMap />,
  event: <ScreenEvent />,
  stories: <ScreenStories />,
  profile: <ScreenProfile />,
  search: <ScreenSearch />,
};

export const AppGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Découvre l'app
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Une app pensée pour <span className="text-gradient">toi</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Interface intuitive, fonctionnalités puissantes
          </p>
        </div>

        {/* Gallery */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-card rounded-full shadow-card flex items-center justify-center hover:shadow-card-hover transition-shadow"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-card rounded-full shadow-card flex items-center justify-center hover:shadow-card-hover transition-shadow"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Phone Display */}
          <div className="flex items-center justify-center gap-4 md:gap-8 py-8">
            {/* Previous Phone (smaller) */}
            <div className="hidden md:block opacity-40 scale-75 transform">
              <PhoneFrame>
                {screenComponents[screenshots[(activeIndex - 1 + screenshots.length) % screenshots.length].content]}
              </PhoneFrame>
            </div>

            {/* Current Phone (large) */}
            <div className="transform scale-100">
              <PhoneFrame>
                {screenComponents[screenshots[activeIndex].content]}
              </PhoneFrame>
            </div>

            {/* Next Phone (smaller) */}
            <div className="hidden md:block opacity-40 scale-75 transform">
              <PhoneFrame>
                {screenComponents[screenshots[(activeIndex + 1) % screenshots.length].content]}
              </PhoneFrame>
            </div>
          </div>

          {/* Caption */}
          <div className="text-center mt-8">
            <h3 className="font-display text-xl font-bold mb-2">
              {screenshots[activeIndex].title}
            </h3>
            <p className="text-muted-foreground">
              {screenshots[activeIndex].description}
            </p>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex 
                    ? "w-8 bg-primary" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
