import { motion } from "framer-motion";
import { Calendar, Palmtree, Bike, Home, Sparkles, Car, Check, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    id: "evenements",
    icon: Calendar,
    title: "Événements",
    subtitle: "Des moments inoubliables",
    description: "Organisation d'événements sur mesure pour des moments inoubliables.",
    longDescription: "Que ce soit pour un mariage de rêve, des fiançailles intimes, un anniversaire mémorable ou tout autre événement spécial, notre équipe d'experts transforme vos idées en réalité. Nous gérons l'ensemble de la logistique avec une attention particulière aux détails.",
    features: [
      "Mariages de rêve",
      "Fiançailles et célébrations",
      "Anniversaires mémorables",
      "Événements d'entreprise",
      "Cérémonies privées",
      "Décoration sur mesure"
    ],
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    color: "bg-atlas-light-blue",
  },
  {
    id: "vacances",
    icon: Palmtree,
    title: "Vacances",
    subtitle: "Évasion et découverte",
    description: "Des séjours paradisiaques dans les plus beaux endroits du Maroc.",
    longDescription: "Laissez-nous créer pour vous des vacances sur mesure qui allient paysages naturels époustouflants, expériences culturelles authentiques, cuisine traditionnelle et aventures variées. Du désert aux montagnes, vivez le Maroc comme jamais auparavant.",
    features: [
      "Paysages naturels uniques",
      "Expériences culturelles",
      "Cuisine authentique",
      "Aventures variées",
      "Circuits personnalisés",
      "Séjours tout inclus"
    ],
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&q=80",
    color: "bg-atlas-gold",
  },
  {
    id: "activites",
    icon: Bike,
    title: "Activités",
    subtitle: "Aventure et émotions",
    description: "Excursions, sports et expériences authentiques pour tous les goûts.",
    longDescription: "Plongez au cœur de l'aventure marocaine avec notre sélection d'activités uniques. Quad dans le désert, balades à dos de dromadaire, vols en montgolfière, ateliers artisanaux et cours de cuisine... Chaque expérience est une invitation à l'émerveillement.",
    features: [
      "Excursions en quad et buggy",
      "Balades à dos de dromadaire",
      "Vols en montgolfière",
      "Cours de cuisine marocaine",
      "Ateliers artisanaux",
      "Dîners spectacles"
    ],
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/145-4.jpg",
    color: "bg-primary",
  },
  {
    id: "hebergement",
    icon: Home,
    title: "Hébergement",
    subtitle: "Confort et authenticité",
    description: "Sélection des meilleurs hébergements : riads, hôtels, villas et appartements.",
    longDescription: "Nous sélectionnons pour vous les meilleurs établissements du Maroc, alliant authenticité marocaine et confort moderne. Des riads traditionnels de la médina aux villas privées avec piscine, en passant par les camps de luxe dans le désert.",
    features: [
      "Riads traditionnels",
      "Hôtels de charme",
      "Villas privées",
      "Appartements équipés",
      "Camps de luxe dans le désert",
      "Kasbahs authentiques"
    ],
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/419760597_677102024567035_474413547800764016_n.jpg",
    color: "bg-atlas-light-blue",
  },
  {
    id: "spa",
    icon: Sparkles,
    title: "Spa",
    subtitle: "Détente et bien-être",
    description: "Hammam traditionnel et soins de bien-être authentiques.",
    longDescription: "Offrez-vous une parenthèse de sérénité avec nos soins spa exclusifs. Hammam traditionnel marocain, gommage au savon noir, massages relaxants à l'huile d'argan... Ressourcez-vous dans les meilleurs spas du Maroc.",
    features: [
      "Hammam traditionnel",
      "Gommage au savon noir",
      "Massages à l'huile d'argan",
      "Soins du visage",
      "Rituels de beauté",
      "Bains aromatiques"
    ],
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
    color: "bg-atlas-gold",
  },
  {
    id: "transport",
    icon: Car,
    title: "Transport",
    subtitle: "Mobilité et liberté",
    description: "Location de voitures, chauffeur personnel et transferts aéroport.",
    longDescription: "Voyagez en toute sérénité avec notre flotte de véhicules modernes et nos chauffeurs professionnels. Des transferts aéroport aux circuits privés, nous vous accompagnons partout au Maroc avec ponctualité et confort.",
    features: [
      "Location de voitures",
      "Chauffeur personnel",
      "Prise en charge à l'aéroport",
      "Transferts hôtel",
      "Circuits privés",
      "Service 24h/24"
    ],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    color: "bg-primary",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-atlas-gold font-medium mb-4 block">Nos Services</span>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Des Services <span className="text-primary">Exceptionnels</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Atlas For Events vous accompagne dans tous vos projets avec une gamme complète 
              de services haut de gamme, pensés pour créer des expériences mémorables.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className={`grid lg:grid-cols-2 gap-12 items-center mb-32 last:mb-0 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative overflow-hidden rounded-3xl aspect-[4/3]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                {/* Floating Icon */}
                <div className={`absolute -bottom-6 ${index % 2 === 1 ? "-left-6" : "-right-6"} ${service.color} p-6 rounded-2xl shadow-xl`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <span className="text-atlas-gold font-medium mb-2 block">{service.subtitle}</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  {service.longDescription}
                </p>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button asChild variant="outline" className="group">
                    <Link to={`/services/${service.id}`}>
                      En savoir plus
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild className="group">
                    <Link to="/contact">
                      Demander un devis
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Prêt à vivre une expérience unique ?
            </h2>
            <p className="text-white/80 mb-8">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir 
              comment nous pouvons transformer vos rêves en réalité.
            </p>
            <Button asChild variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">
                Contactez-nous
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
