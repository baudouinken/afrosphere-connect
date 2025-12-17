import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 pattern-dots opacity-20" />
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary-foreground/10 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-primary-foreground/10 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 px-4 py-2 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground"></span>
            </span>
            <span className="text-sm font-medium">Disponible maintenant sur Android</span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            Rejoins la communauté AfroLife aujourd'hui
          </h2>

          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Plus de 50 000 utilisateurs découvrent déjà leur vie Afro. 
            Et toi, qu'est-ce que tu attends ?
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero-outline" size="xl" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
              <Download className="w-5 h-5" />
              Télécharger sur Android
            </Button>
            <Button variant="hero-outline" size="xl">
              En savoir plus
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* App Store Badge */}
          <div className="mt-10 flex flex-col items-center gap-3">
            <p className="text-sm text-primary-foreground/60">Bientôt disponible sur</p>
            <div className="flex gap-4">
              <div className="bg-primary-foreground/10 rounded-xl px-6 py-3 flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5 12.3c0-1.3.7-2.4 1.7-3.1-.7-1-1.7-1.6-2.9-1.8-.8-.1-1.8.2-2.4.5-.6.3-.9.3-1.4 0-.7-.3-1.5-.6-2.4-.5-1.4.2-2.8 1.1-3.6 2.8-1.5 3.3-.4 8.1 1.1 10.8.8 1.3 1.7 2.8 2.9 2.7 1.1 0 1.5-.7 2.9-.7s1.7.7 2.9.7c1.2 0 2-1.3 2.8-2.6.5-.8.9-1.7 1.2-2.6-1.6-.6-2.8-2.2-2.8-4.2zM14.5 5c.7-.9 1-2 .9-3-.9.1-2 .6-2.6 1.3-.6.7-1.1 1.7-.9 2.7 1 .1 2-.4 2.6-1z"/>
                </svg>
                <span className="text-sm font-medium">iOS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
