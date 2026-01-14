import { motion, AnimatePresence } from "framer-motion";
import { Music, Sparkles, Heart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import gipsy1 from "@/assets/images/gipsy/gipsy-1.webp";
import gipsy2 from "@/assets/images/gipsy/gipsy-2.webp";
import gipsy3 from "@/assets/images/gipsy/gipsy-3.webp";
import gipsy4 from "@/assets/images/gipsy/gipsy-4.webp";
import gipsy5 from "@/assets/images/gipsy/gipsy-5.webp";

const accordionItems = [
  {
    id: "experience",
    icon: Music,
    title: "Une expérience musicale unique",
    content:
      "Gipsy Sueño mélange Flamenco, musique latine et gitane, créant une ambiance vibrante qui rend votre événement inoubliable. Ils ont enchanté des événements prestigieux comme ceux de Maserati et des mariages au Camp Nou.",
  },
  {
    id: "performances",
    icon: Sparkles,
    title: "Des performances énergétiques",
    content:
      "Leurs performances passionnées et dynamiques captivent vos invités, garantissant une ambiance festive. Gipsy Sueño est le choix privilégié pour des soirées exclusives.",
  },
  {
    id: "adapte",
    icon: Heart,
    title: "Adapté à votre événement",
    content:
      "Gipsy Sueño ajuste leur musique pour correspondre à l'ambiance et au style de votre événement, offrant une touche personnalisée. Ils ont su s'adapter aux attentes des événements de haut niveau.",
  },
];

const GipsySuenoSection = () => {
  const [openItem, setOpenItem] = useState<string | null>("experience");

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <div className="col-span-2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden rounded-2xl shadow-xl"
                >
                  <img
                    src={gipsy4}
                    alt="Gipsy Sueño performance en plein air"
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                </motion.div>
              </div>

              {/* Two smaller images */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={gipsy1}
                  alt="Gipsy Sueño groupe"
                  className="w-full h-40 lg:h-48 object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={gipsy2}
                  alt="Gipsy Sueño en bar"
                  className="w-full h-40 lg:h-48 object-cover"
                />
              </motion.div>

              {/* Two more smaller images */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={gipsy3}
                  alt="Gipsy Sueño performance privée"
                  className="w-full h-40 lg:h-48 object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={gipsy5}
                  alt="Gipsy Sueño portrait"
                  className="w-full h-40 lg:h-48 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/30 rounded-full blur-2xl" />
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-8 leading-tight">
              Faites vibrer vos moments avec{" "}
              <span className="text-primary">Gipsy Sueño</span>
            </h2>

            <div className="space-y-4">
              {accordionItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-border/50 rounded-xl bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-5 flex items-center justify-between hover:bg-muted/30 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-left font-semibold text-foreground">
                        {item.title}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: openItem === item.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openItem === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-muted-foreground pb-5 px-6 pl-[4.5rem]">
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Réservez maintenant
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GipsySuenoSection;
