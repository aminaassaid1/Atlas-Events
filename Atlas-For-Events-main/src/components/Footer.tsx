import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import footerBg from "@/assets/footer-bg.png";

const Footer = () => {
  return (
    <footer className="relative text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-primary"
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 bg-primary/40" />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="Atlas For Events"
              className="h-12 mb-6"
            />
            <p className="text-white/70 mb-6 font-normal">
              Votre partenaire de confiance pour l'organisation d'événements
              exceptionnels au Maroc.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-secondary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-secondary transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/activites" className="text-white/70 hover:text-secondary transition-colors">
                  Activités
                </Link>
              </li>
              <li>
                <Link to="/boutique" className="text-white/70 hover:text-secondary transition-colors">
                  Boutique
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Nos Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/activites" className="text-white/70 hover:text-secondary transition-colors">
                  Aventures (Quad, Buggy)
                </Link>
              </li>
              <li>
                <Link to="/activites" className="text-white/70 hover:text-secondary transition-colors">
                  Excursions Guidées
                </Link>
              </li>
              <li>
                <Link to="/activites" className="text-white/70 hover:text-secondary transition-colors">
                  Expériences Culturelles
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-secondary transition-colors">
                  Hébergement & SPA
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-secondary transition-colors">
                  Transport & Transferts
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#FFAA0D] flex-shrink-0 mt-1" />
                <span className="text-white/70">
                  Marrakech, Maroc
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#FFAA0D]" />
                <a href="tel:+212661438839" className="text-white/70 hover:text-secondary transition-colors">
                  +212 661 438 839
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#FFAA0D]" />
                <a href="mailto:contact@atlasforevents.com" className="text-white/70 hover:text-secondary transition-colors">
                  contact@atlasforevents.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-white/50 text-sm">
            © {new Date().getFullYear()} Atlas For Events. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
