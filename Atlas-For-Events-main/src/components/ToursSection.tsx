import { motion } from "framer-motion";
import { Star, MapPin, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const tours = [
  {
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/145-4.jpg",
    location: "Palmeraie, Marrakech",
    duration: "2-3 heures",
    title: "Aventure en Quad à travers la Palmeraie de Marrakech",
    price: 35,
    rating: 4.9,
  },
  {
    image: "https://atlasforevents.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-31-at-11.58.10.jpeg",
    location: "Désert d'Agafay",
    duration: "5 heures",
    title: "Vol en Montgolfière au-dessus de l'Atlas au lever du soleil",
    price: 200,
    rating: 5.0,
  },
  {
    image: "https://atlasforevents.com/wp-content/uploads/2022/07/ignacio-ceballos-eP94dHUaY1U-unsplash-scaled.jpg",
    location: "Merzouga, Sahara",
    duration: "2 jours",
    title: "Aventure dans le désert du Sahara avec nuit en camp de luxe",
    price: 299,
    rating: 5.0,
  },
  {
    image: "https://atlasforevents.com/wp-content/uploads/2022/08/milad-alizadeh-JibMa0FbyHw-unsplash-scaled.jpg",
    location: "Chefchaouen",
    duration: "1 journée",
    title: "Découverte de la Perle Bleue du Maroc et ses ruelles colorées",
    price: 55,
    rating: 4.8,
  },
];

const ToursSection = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % tours.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + tours.length) % tours.length);
  };

  const getVisibleTours = () => {
    const visible = [];
    for (let i = 0; i < Math.min(3, tours.length); i++) {
      visible.push(tours[(startIndex + i) % tours.length]);
    }
    return visible;
  };

  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4">
            Explorez Nos <span className="text-atlas-gold">Tours Populaires!</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Des destinations à explorer! Voici quelques spots populaires
          </p>
        </motion.div>

        {/* Tours Slider */}
        <div className="relative">
          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-primary hover:text-white transition-all"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-primary hover:text-white transition-all"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Tours Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
            {getVisibleTours().map((tour, index) => (
              <motion.div
                key={`${tour.location}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                {/* Image */}
                <div className="rounded-t-3xl overflow-hidden relative">
                  <img
                    src={tour.image}
                    alt={tour.location}
                    className="w-full h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Duration Badge */}
                  <div className="absolute top-6 left-0 bg-primary text-white text-sm font-semibold py-2 px-4 rounded-r-full flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {tour.duration}
                  </div>

                  {/* Location */}
                  <div className="absolute bottom-0 left-0 right-0 bg-primary/60 backdrop-blur py-3 px-6">
                    <h3 className="text-white text-xl font-medium flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      {tour.location}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="bg-white p-6 rounded-b-3xl shadow-lg">
                  <div className="flex gap-4 mb-4">
                    <div>
                      <span className="text-atlas-gold text-2xl font-black">{tour.price}€</span>
                      <span className="text-sm block text-muted-foreground">Par personne</span>
                    </div>
                    <p className="flex-1 text-primary font-medium">
                      {tour.title}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link 
                      to="/activites" 
                      className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-2 rounded-full font-semibold transition-all"
                    >
                      Découvrir
                    </Link>
                    <div className="text-right">
                      <span className="text-sm text-muted-foreground">({tour.rating} Avis)</span>
                      <div className="flex gap-0.5 text-atlas-gold">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToursSection;