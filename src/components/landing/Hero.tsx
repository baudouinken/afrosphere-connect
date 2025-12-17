import { Button } from "@/components/ui/button";
import { MapPin, Download, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-warm" />
      <div className="absolute inset-0 pattern-dots opacity-50" />
      
      {/* Decorative Circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
          {/* Left Content */}
          <div className="text-center lg:text-left py-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-slide-up">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Disponible dans 30+ pays</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-slide-up animation-delay-100">
              Découvre la vie
              <span className="block text-gradient">Afro près de toi</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-slide-up animation-delay-200">
              Events, activités, logements et shops africains – où que tu sois. 
              Ta communauté, à portée de main.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up animation-delay-300">
              <Button variant="hero" size="xl">
                <Download className="w-5 h-5" />
                Télécharger l'App
              </Button>
              <Button variant="outline" size="xl">
                <Play className="w-5 h-5" />
                Voir la démo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/50 animate-slide-up animation-delay-400">
              <div>
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient">50K+</div>
                <div className="text-sm text-muted-foreground">Utilisateurs</div>
              </div>
              <div>
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient">10K+</div>
                <div className="text-sm text-muted-foreground">Events</div>
              </div>
              <div>
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient">30+</div>
                <div className="text-sm text-muted-foreground">Pays</div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in animation-delay-200">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-72 md:w-80 animate-float">
                <div className="absolute -inset-4 bg-gradient-hero rounded-[3rem] blur-2xl opacity-30" />
                <div className="relative bg-foreground rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="bg-background rounded-[2rem] overflow-hidden aspect-[9/19.5]">
                    {/* App Screen Preview */}
                    <div className="h-full bg-gradient-warm p-4">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xs text-muted-foreground">9:41</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-2 bg-foreground/20 rounded-sm" />
                          <div className="w-4 h-2 bg-foreground/20 rounded-sm" />
                          <div className="w-4 h-2 bg-foreground/20 rounded-sm" />
                        </div>
                      </div>
                      
                      {/* Location Badge */}
                      <div className="flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1.5 w-fit mb-4">
                        <MapPin className="w-3 h-3 text-primary" />
                        <span className="text-xs font-medium">Yaoundé, Cameroun</span>
                      </div>

                      {/* Stories */}
                      <div className="flex gap-3 mb-4 overflow-hidden">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="flex-shrink-0">
                            <div className="w-14 h-14 rounded-full bg-gradient-hero p-0.5">
                              <div className="w-full h-full rounded-full bg-muted" />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Event Cards */}
                      <div className="space-y-3">
                        <div className="bg-card rounded-2xl p-3 shadow-sm">
                          <div className="w-full h-20 bg-gradient-sunset rounded-xl mb-2" />
                          <div className="h-3 w-3/4 bg-foreground/10 rounded mb-1" />
                          <div className="h-2 w-1/2 bg-foreground/5 rounded" />
                        </div>
                        <div className="bg-card rounded-2xl p-3 shadow-sm opacity-80">
                          <div className="w-full h-20 bg-gradient-gold rounded-xl mb-2" />
                          <div className="h-3 w-2/3 bg-foreground/10 rounded mb-1" />
                          <div className="h-2 w-1/3 bg-foreground/5 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-8 top-1/4 bg-card rounded-2xl p-4 shadow-card animate-slide-up animation-delay-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-sunset" />
                  <div>
                    <div className="font-medium text-sm">Afro Night Berlin</div>
                    <div className="text-xs text-muted-foreground">Ce samedi</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/3 bg-card rounded-2xl p-4 shadow-card animate-slide-up animation-delay-400">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-secondary-foreground" />
                  </div>
                  <span className="text-sm font-medium">+5 near you</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
