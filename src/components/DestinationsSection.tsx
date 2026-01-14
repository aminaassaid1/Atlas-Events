import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar, Palmtree, Bike, Home, Sparkles, Car } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import cloudBg from "@/assets/images/background/Cloud-bg.png";
import hotBalloonLeftImg from "@/assets/images/hotballon-Left.png";
import hotBalloonRightImg from "@/assets/images/hotballon-right.png";

const services = [
  {
    id: "evenements",
    icon: Calendar,
    title: "Événements",
    description: "Mariages, fiançailles, anniversaires et événements d'entreprise sur mesure.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
  },
  {
    id: "vacances",
    icon: Palmtree,
    title: "Vacances",
    description: "Séjours paradisiaques dans les plus beaux endroits du Maroc.",
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&q=80",
  },
  {
    id: "activites",
    icon: Bike,
    title: "Activités",
    description: "Excursions, sports et expériences authentiques pour tous les goûts.",
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/145-4.jpg",
  },
  {
    id: "hebergement",
    icon: Home,
    title: "Hébergement",
    description: "Riads, hôtels de charme, villas et camps de luxe dans le désert.",
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/419760597_677102024567035_474413547800764016_n.jpg",
  },
  {
    id: "spa",
    icon: Sparkles,
    title: "Spa & Bien-être",
    description: "Hammam traditionnel et soins relaxants à l'huile d'argan.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
  },
  {
    id: "transport",
    icon: Car,
    title: "Transport",
    description: "Location de voitures, chauffeur personnel et transferts aéroport.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
  },
];

const DestinationsSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const getVisibleServices = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(services[(startIndex + i) % services.length]);
    }
    return visible;
  };

  return (
    <section className="relative py-20 lg:py-32 bg-[#EFFFFF] overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 bg-contain bg-bottom bg-repeat-x opacity-30"
        style={{ backgroundImage: `url(${cloudBg})` }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4 font-display">
            <span className="text-citrusyellow font-display">Nos </span>
            Services
          </h2>
          <p className="text-muted-foreground text-lg font-normal">
            Une gamme complète de services pour créer des expériences inoubliables au Maroc
          </p>
        </motion.div>

        {/* Services Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 md:p-3 hover:bg-primary hover:text-white transition-all duration-300"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 md:p-3 hover:bg-primary hover:text-white transition-all duration-300"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4 md:px-8">
            {getVisibleServices().map((service, index) => (
              <motion.div
                key={`${service.id}-${index}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <Link to={`/services#${service.id}`}>
                  {/* Hot Air Balloon */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10 opacity-0 group-hover:opacity-100 group-hover:-top-16 transition-all duration-500">
                    <img src={hotBalloonRightImg} alt="" className="w-20 h-auto" loading="lazy" />
                  </div>

                  {/* Card */}
                  <div className="relative rounded-3xl overflow-hidden h-[400px]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Title in White Pill */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white px-8 py-3 rounded-full shadow-sm z-10">
                      <h3 className="text-lg font-bold text-primary whitespace-nowrap">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description at Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 pt-12 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm line-clamp-2 font-medium">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Hot Air Balloons */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-20 top-1/3 opacity-50"
      >
        <img src={hotBalloonLeftImg} alt="" className="w-40" loading="lazy" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-10 top-1/4 opacity-60"
      >
        <img src={hotBalloonRightImg} alt="" className="w-24" loading="lazy" />
      </motion.div>
    </section>
  );
};

export default DestinationsSection;
