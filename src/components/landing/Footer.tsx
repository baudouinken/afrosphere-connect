import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Youtube,
  Mail,
  MapPin
} from "lucide-react";

const footerLinks = {
  product: {
    title: "Produit",
    links: [
      { label: "Features", href: "#features" },
      { label: "Comment ça marche", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#" },
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
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
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
