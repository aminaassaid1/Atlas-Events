import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Users, MapPin, Check, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const activities = [
  {
    id: "quad",
    title: "Aventure en Quad",
    subtitle: "Palmeraie de Marrakech",
    shortDescription: "Vivez une montée d'adrénaline incroyable à travers la Palmeraie !",
    duration: "2-3 heures",
    groupSize: "1-10 personnes",
    location: "Palmeraie de Marrakech",
    price: "35€",
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/145-4.jpg",
    category: "aventure",
  },
  {
    id: "montgolfiere",
    title: "Vol en Montgolfière",
    subtitle: "Survol de Marrakech",
    shortDescription: "Survolez les villages berbères et l'Atlas au lever du soleil.",
    duration: "5 heures",
    groupSize: "2-12 personnes",
    location: "Désert d'Agafay",
    price: "200€",
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-31-at-11.58.10.jpeg",
    category: "aventure",
  },
  {
    id: "chameau-palmeraie",
    title: "Balade à Dos de Chameau",
    subtitle: "Palmeraie de Marrakech",
    shortDescription: "Une expérience envoûtante à travers l'oasis de palmiers.",
    duration: "1-2 heures",
    groupSize: "1-20 personnes",
    location: "Palmeraie de Marrakech",
    price: "40€",
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/d2daa107ff6b37140d01fafba2a01625.jpg-1.webp",
    category: "aventure",
  },
  {
    id: "chameau-agafay",
    title: "Trekking dans l'Agafay",
    subtitle: "Désert d'Agafay",
    shortDescription: "Aventure à dos de chameau et délices culturels au cœur du désert.",
    duration: "3-4 heures",
    groupSize: "2-15 personnes",
    location: "Désert d'Agafay",
    price: "50€",
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/randoagafay.jpg",
    category: "aventure",
  },
  {
    id: "buggy",
    title: "Aventure en Buggy",
    subtitle: "Palmeraie de Marrakech",
    shortDescription: "Préparez-vous pour une aventure palpitante à travers la palmeraie !",
    duration: "2 heures",
    groupSize: "1-8 personnes",
    location: "Palmeraie de Marrakech",
    price: "70€",
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/Buggy-Tour-at-the-plam-grove-of-Marrakech.jpg",
    category: "aventure",
  },
  {
    id: "cuisine",
    title: "Cours de Cuisine Marocaine",
    subtitle: "Désert d'Agafay",
    shortDescription: "Apprenez les secrets de la cuisine marocaine dans un cadre exceptionnel.",
    duration: "4 heures",
    groupSize: "2-10 personnes",
    location: "Désert d'Agafay",
    price: "60€",
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-08-at-23.28.29-1.jpeg",
    category: "culture",
  },
  {
    id: "diner-spectacle",
    title: "Dîner Spectacle chez Ali",
    subtitle: "Soirée Magique",
    shortDescription: "Vivez la magie des Mille et Une Nuits avec dîner et spectacle folklorique.",
    duration: "4 heures",
    groupSize: "2-50 personnes",
    location: "Complexe Chez Ali, Marrakech",
    price: "45€",
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/9cabd722-e487-4d05-be00-109180fcf9d9.avif",
    category: "culture",
  },
  {
    id: "coucher-soleil-agafay",
    title: "Coucher de Soleil dans l'Agafay",
    subtitle: "Dîner sous les étoiles",
    shortDescription: "Évadez-vous avec un coucher de soleil magique et dîner dans le désert.",
    duration: "5 heures",
    groupSize: "2-20 personnes",
    location: "Désert d'Agafay",
    price: "45€",
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/78b38e7f-e50d-402f-a9fa-b13e30075673.jpeg",
    category: "aventure",
  },
  {
    id: "cascades-ouzoud",
    title: "Cascades d'Ouzoud",
    subtitle: "Excursion d'une journée",
    shortDescription: "Découvrez les plus hautes cascades du Maroc avec 110m de chute.",
    duration: "10 heures",
    groupSize: "2-15 personnes",
    location: "Cascades d'Ouzoud",
    price: "40€",
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/Ouzoud-Waterfalls-636x426.jpg.webp",
    category: "excursion",
  },
  {
    id: "visite-marrakech",
    title: "Visite Culturelle de Marrakech",
    subtitle: "Trésors de la Médina",
    shortDescription: "Explorez les lieux incontournables et les trésors cachés de Marrakech.",
    duration: "7 heures",
    groupSize: "1-10 personnes",
    location: "Médina de Marrakech",
    price: "40€",
    image: "https://atlasforevents.com/wp-content/uploads/revslider/destinations-card-slider1/miltiadis-fragkidis-ILxHs003uMc-unsplash-scaled.jpg",
    category: "culture",
  },
  // Nouvelles excursions
  {
    id: "merzouga",
    title: "Aventure à Merzouga",
    subtitle: "Désert du Sahara",
    shortDescription: "Trekking à chameau, Erg Chebbi et camps de luxe dans le Sahara.",
    duration: "2 jours",
    groupSize: "2-20 personnes",
    location: "Merzouga, Erg Chebbi",
    price: "299€",
    image: "https://atlasforevents.com/wp-content/uploads/2022/07/ignacio-ceballos-eP94dHUaY1U-unsplash-scaled.jpg",
    category: "excursion",
  },
  {
    id: "ouarzazate",
    title: "Ouarzazate & Kasbahs",
    subtitle: "Porte du Sahara",
    shortDescription: "Explorez le désert et les kasbahs historiques d'Ouarzazate.",
    duration: "1 journée",
    groupSize: "2-15 personnes",
    location: "Ouarzazate",
    price: "50€",
    image: "https://atlasforevents.com/wp-content/uploads/2022/07/hassan-ouajbir-INcADDyMwwo-unsplash-scaled.jpg",
    category: "excursion",
  },
  {
    id: "ourika",
    title: "Vallée de l'Ourika",
    subtitle: "Cascades & Nature",
    shortDescription: "Cascades majestueuses et randonnées au pied de l'Atlas.",
    duration: "1 journée",
    groupSize: "2-15 personnes",
    location: "Vallée de l'Ourika",
    price: "45€",
    image: "https://atlasforevents.com/wp-content/uploads/2022/07/matthew-fainman-3yonP2JaGTU-unsplash-scaled.jpg",
    category: "excursion",
  },
  {
    id: "essaouira",
    title: "Essaouira",
    subtitle: "Médina & Plages",
    shortDescription: "La médina historique et les plages de la côte atlantique.",
    duration: "1 journée",
    groupSize: "2-15 personnes",
    location: "Essaouira",
    price: "45€",
    image: "https://atlasforevents.com/wp-content/uploads/2022/07/rigel-No_Y3bn4lNQ-unsplash-scaled.jpg",
    category: "excursion",
  },
  {
    id: "asilah",
    title: "Asilah",
    subtitle: "Ville Côtière",
    shortDescription: "Murs blanchis, fresques colorées et plages de sable doré.",
    duration: "1 journée",
    groupSize: "2-15 personnes",
    location: "Asilah",
    price: "55€",
    image: "https://atlasforevents.com/wp-content/uploads/2022/08/aziz-acharki-Bl-azXExvOs-unsplash-scaled.jpg",
    category: "excursion",
  },
  {
    id: "chefchaouen",
    title: "Chefchaouen",
    subtitle: "La Perle Bleue",
    shortDescription: "Tours photographiques dans la ville bleue emblématique du Maroc.",
    duration: "1 journée",
    groupSize: "2-15 personnes",
    location: "Chefchaouen",
    price: "55€",
    image: "https://atlasforevents.com/wp-content/uploads/2022/08/milad-alizadeh-JibMa0FbyHw-unsplash-scaled.jpg",
    category: "excursion",
  },
  {
    id: "imlil",
    title: "Trekking à Imlil",
    subtitle: "Montagnes de l'Atlas",
    shortDescription: "Portail vers les Hautes Atlas : trekking et sentiers scéniques.",
    duration: "1 journée",
    groupSize: "2-10 personnes",
    location: "Imlil, Haut Atlas",
    price: "45€",
    image: "https://atlasforevents.com/wp-content/uploads/2022/08/alpha-plus-wmwnqKDZHfo-unsplash-1-scaled.jpg",
    category: "excursion",
  },
  {
    id: "cooperative-argan",
    title: "Coopérative d'Argan",
    subtitle: "Expérience Authentique",
    shortDescription: "Visitez une coopérative berbère d'Argan de référence au Maroc.",
    duration: "2-3 heures",
    groupSize: "2-20 personnes",
    location: "Route d'Essaouira",
    price: "60€",
    image: "https://atlasforevents.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-09-at-20.56.55-2.jpeg",
    category: "culture",
  },
];

const categories = [
  { id: "all", label: "Toutes" },
  { id: "aventure", label: "Aventure" },
  { id: "excursion", label: "Excursions" },
  { id: "culture", label: "Culture" },
];
const Activites = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredActivities = activeCategory === "all" 
    ? activities 
    : activities.filter(activity => activity.category === activeCategory);
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
            <span className="text-atlas-gold font-medium mb-4 block">Nos Activités</span>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Aventures <span className="text-primary">Inoubliables</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Découvrez notre sélection d'activités uniques au Maroc : quad, montgolfière, 
              balades à dos de chameau, cours de cuisine et bien plus encore.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.p 
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground mb-8"
          >
            {filteredActivities.length} activité{filteredActivities.length > 1 ? 's' : ''} trouvée{filteredActivities.length > 1 ? 's' : ''}
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-atlas-gold text-sm font-medium">{activity.subtitle}</span>
                    <h3 className="text-white text-xl font-bold">{activity.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {activity.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-muted-foreground text-sm mb-4">
                    {activity.shortDescription}
                  </p>

                  {/* Info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{activity.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{activity.groupSize}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-muted-foreground text-sm mb-6">
                    <MapPin className="w-4 h-4" />
                    <span>{activity.location}</span>
                  </div>

                  <Button asChild className="w-full group/btn">
                    <Link to="/contact">
                      Réserver
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Details Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ce qui est <span className="text-primary">inclus</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Toutes nos activités incluent des prestations premium pour une expérience sans souci.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Transport", description: "Transferts aller-retour depuis votre hôtel ou riad" },
              { title: "Guides Locaux", description: "Accompagnement par des guides professionnels bilingues" },
              { title: "Assurance", description: "Couverture complète pour toutes les activités" },
              { title: "Rafraîchissements", description: "Thé traditionnel et collations marocaines inclus" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
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
              Prêt pour l'aventure ?
            </h2>
            <p className="text-white/80 mb-8">
              Contactez-nous pour réserver votre activité ou créer une expérience sur mesure.
              Notre équipe est à votre disposition 7j/7.
            </p>
            <Button asChild variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">
                Réserver maintenant
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

export default Activites;
