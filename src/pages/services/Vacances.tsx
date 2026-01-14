import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, MapPin, Users, Calendar, Car, Plane, UserCheck, Star, Globe, Award, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const destinations = [
  {
    name: "Marrakech",
    image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800&q=80",
    description: "La ville rouge et ses jardins enchanteurs"
  },
  {
    name: "Désert du Sahara",
    image: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&q=80",
    description: "Aventure dans les dunes dorées"
  },
  {
    name: "Chefchaouen",
    image: "https://images.unsplash.com/photo-1553244929-7c4b0c56ad73?w=800&q=80",
    description: "La perle bleue du Maroc"
  },
  {
    name: "Essaouira",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    description: "Charme côtier et vents alizés"
  },
  {
    name: "Fès",
    image: "https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=800&q=80",
    description: "La capitale spirituelle et culturelle"
  },
  {
    name: "Atlas",
    image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80",
    description: "Montagnes majestueuses et villages berbères"
  }
];

const whyChooseUs = [
  {
    icon: Star,
    title: "Expertise locale",
    description: "Connaissance approfondie du Maroc et de ses trésors cachés"
  },
  {
    icon: Heart,
    title: "Service personnalisé",
    description: "Chaque voyage est adapté à vos envies et besoins"
  },
  {
    icon: Award,
    title: "Qualité garantie",
    description: "Partenaires sélectionnés pour leur excellence"
  },
  {
    icon: Globe,
    title: "Accompagnement complet",
    description: "Assistance 24h/24 pendant tout votre séjour"
  }
];

const stats = [
  { value: "20+", label: "Destinations" },
  { value: "100+", label: "Partenaires" },
  { value: "150+", label: "Utilisateurs actifs quotidiens" },
  { value: "5000+", label: "Réservations annuelles" }
];

const transportServices = [
  {
    icon: Car,
    title: "Location de voitures",
    description: "Nous vous proposons une large gamme de voitures pour vous assurer tranquillité d'esprit !"
  },
  {
    icon: Plane,
    title: "Prise en charge à l'aéroport",
    description: "Une fois arrivé, nous vous attendrons pour vous prendre en charge à l'aéroport et vous conduire à votre hôtel ou à votre logement."
  },
  {
    icon: UserCheck,
    title: "Chauffeur personnel",
    description: "Fini les tracas de conduite, nous fournissons des chauffeurs professionnels pour vous emmener où vous le souhaitez !"
  }
];

const tours = [
  {
    name: "Circuit Impérial",
    duration: "7 jours",
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&q=80",
    description: "Découvrez les villes impériales du Maroc"
  },
  {
    name: "Aventure Désert",
    duration: "4 jours",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80",
    description: "Nuits sous les étoiles dans le Sahara"
  },
  {
    name: "Escapade Côtière",
    duration: "5 jours",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    description: "Les plus belles plages du Maroc"
  },
  {
    name: "Trek Atlas",
    duration: "6 jours",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    description: "Randonnée dans les montagnes de l'Atlas"
  }
];

const Vacances = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=1920&q=80"
            alt="Vacances au Maroc"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-sm mb-8"
          >
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary">Vacances</span>
          </motion.nav>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Découvrez le Maroc comme jamais
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-white/90"
          >
            Découvrez le Maroc autrement sans les tracas de la planification, profitez de nos voyages clé en main, déjà préparés pour vous.
          </motion.p>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Destinations populaires
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Découvrez les destinations populaires qui promettent des expériences inoubliables et des moments époustouflants. Laissez-nous vous aider à explorer les meilleurs endroits qui rendront votre voyage véritablement remarquable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold">{destination.name}</h3>
                  </div>
                  <p className="text-white/80">{destination.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pourquoi nous choisir
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Avec des années d'expérience et une connaissance approfondie du Maroc, nous créons des voyages personnalisés qui mettent en valeur le meilleur du pays.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Travel Excellence Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Excellence Mondiale du Voyage
            </h2>
            <p className="text-lg max-w-3xl mx-auto opacity-90">
              Explorez des destinations à travers le Maroc en toute simplicité. Rejoignez des milliers d'utilisateurs quotidiens pour une expérience de voyage sans faille. Partenaire avec les meilleurs fournisseurs, nous gérons des millions de réservations chaque année. Fiable pour la qualité et la satisfaction par une vaste communauté de voyageurs.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Transport assuré
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Avec Atlas For Events, oubliez les soucis de transport et les tarifs élevés.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transportServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos circuits
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Découvrez nos circuits soigneusement préparés pour une expérience inoubliable au Maroc.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tours.map((tour, index) => (
              <motion.div
                key={tour.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-muted/50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-sm text-primary mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{tour.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{tour.name}</h3>
                  <p className="text-sm text-muted-foreground">{tour.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Prêt pour l'aventure ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contactez-nous dès maintenant pour planifier votre voyage de rêve au Maroc.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              <Users className="w-5 h-5" />
              Contactez-nous
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vacances;
