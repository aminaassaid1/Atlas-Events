import { motion } from "framer-motion";
import { Calendar, Palmtree, Sparkles } from "lucide-react";
import travelerImg from "@/assets/images/traveler.png";

const steps = [
  {
    icon: Calendar,
    title: "Réservez",
    description: "Choisissez votre destination et vos dates, nous nous occupons du reste",
    step: "01",
    color: "bg-atlas-light-blue",
  },
  {
    icon: Palmtree,
    title: "Préparez-vous",
    description: "Recevez votre itinéraire personnalisé et tous les détails de votre voyage",
    step: "02",
    color: "bg-atlas-gold",
  },
  {
    icon: Sparkles,
    title: "Profitez",
    description: "Vivez une expérience inoubliable au Maroc sans aucun souci",
    step: "03",
    color: "bg-primary",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-primary relative overflow-hidden py-20 lg:py-32">
      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={travelerImg}
                alt="Traveler"
                className="relative z-10 max-w-full h-auto rounded-3xl"
              />
            </motion.div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:col-span-8">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                Nous Offrons Les Meilleurs{" "}
                <span className="text-atlas-gold">Services</span>
              </h2>
              <p className="text-white/80 text-lg max-w-xl font-normal">
                Atlas For Events est une agence primée spécialisée dans l'organisation
                d'événements. Nous créons des expériences uniques et mémorables.
              </p>
            </motion.div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {steps.map((stepItem, index) => (
                <motion.div
                  key={stepItem.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-tl-[60px] rounded-br-[60px] rounded-tr-2xl rounded-bl-2xl p-6 pt-10 pb-16 text-center relative ml-3">
                    {/* Icon */}
                    <div className="mb-6">
                      <stepItem.icon className="h-12 w-12 mx-auto text-primary" />
                    </div>
                    
                    {/* Content */}
                    <h4 className="text-xl font-bold text-primary mb-3">
                      {stepItem.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {stepItem.description}
                    </p>

                    {/* Step Number */}
                    <div className="absolute -left-3 -bottom-4">
                      <div className={`${stepItem.color} text-white py-4 px-3 rounded-lg`}>
                        <span className="text-xs font-semibold block">Étape</span>
                        <span className="text-xl font-bold">{stepItem.step}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
