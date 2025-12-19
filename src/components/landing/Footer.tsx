import { useState } from "react";
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Youtube,
  Mail,
  MapPin,
  Send,
  Apple,
  Smartphone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const footerLinks = {
  product: {
    title: "Produit",
    links: [
      { label: "Features", href: "#features" },
      { label: "Comment ça marche", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  business: {
    title: "Business",
    links: [
      { label: "AfroLife PRO", href: "#business" },
      { label: "Partenaires", href: "#" },
      { label: "Devenir organisateur", href: "#" },
      { label: "API", href: "#" },
    ],
  },
  company: {
    title: "Entreprise",
    links: [
      { label: "À propos", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Carrières", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  legal: {
    title: "Légal",
    links: [
      { label: "Confidentialité", href: "#" },
      { label: "CGU", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [iosEmail, setIosEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Inscription réussie !",
        description: "Tu recevras nos dernières actualités.",
      });
      setEmail("");
    }
  };

  const handleIosWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (iosEmail) {
      toast({
        title: "Inscription à la waitlist iOS !",
        description: "Tu seras notifié dès la sortie de l'app iOS.",
      });
      setIosEmail("");
    }
  };

  return (
    <footer className="bg-foreground text-background">
      {/* iOS Waitlist Section */}
      <div className="border-b border-background/10 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-background/10 px-4 py-2 rounded-full mb-4">
              <Apple className="w-5 h-5" />
              <span className="text-sm font-medium">iOS arrive bientôt</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Sois notifié en premier pour l'app iOS
            </h3>
            <p className="text-background/60 mb-6">
              Inscris-toi pour bénéficier d'un accès anticipé et d'une réduction exclusive sur ton premier mois PRO
            </p>
            <form onSubmit={handleIosWaitlist} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={iosEmail}
                onChange={(e) => setIosEmail(e.target.value)}
                placeholder="Ton email"
                className="flex-1 px-4 py-3 rounded-xl bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-primary"
                required
              />
              <Button variant="hero" className="whitespace-nowrap">
                <Send className="w-4 h-4 mr-2" />
                M'inscrire
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Reste connecté
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Reçois les meilleurs événements et actualités de ta communauté
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ton email"
                className="flex-1 px-4 py-3 rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <Button variant="outline" className="bg-background text-foreground hover:bg-background/90 whitespace-nowrap">
                S'inscrire
              </Button>
            </form>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">A</span>
              </div>
              <span className="font-display font-bold text-xl">AfroLife</span>
            </a>
            
            <p className="text-background/60 mb-6 max-w-sm">
              La plateforme n°1 pour découvrir la vie Afro partout dans le monde. 
              Events, activités, logements et shops.
            </p>

            {/* Download Buttons */}
            <div className="flex gap-3 mb-6">
              <a href="#" className="flex items-center gap-2 bg-background/10 hover:bg-background/20 transition-colors px-4 py-2 rounded-xl">
                <Smartphone className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-[10px] text-background/60">Télécharger sur</div>
                  <div className="text-sm font-medium">Android</div>
                </div>
              </a>
              <a href="#" className="flex items-center gap-2 bg-background/10 hover:bg-background/20 transition-colors px-4 py-2 rounded-xl opacity-60">
                <Apple className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-[10px] text-background/60">Bientôt sur</div>
                  <div className="text-sm font-medium">iOS</div>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-display font-bold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-background/60 hover:text-background transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Bar */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center py-8 border-t border-background/10">
          <div className="flex flex-wrap gap-6 text-sm text-background/60">
            <a href="mailto:hello@afrolife.app" className="flex items-center gap-2 hover:text-background transition-colors">
              <Mail className="w-4 h-4" />
              hello@afrolife.app
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Yaoundé, Cameroun | Berlin, Allemagne
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row gap-4 justify-between items-center text-sm text-background/40">
          <p>© 2024 AfroLife. Tous droits réservés.</p>
          <p>Made with ❤️ for the African community worldwide</p>
        </div>
      </div>
    </footer>
  );
};
