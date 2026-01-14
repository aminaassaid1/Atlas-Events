import { motion } from "framer-motion";
import { Compass, Target, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Template images from assets
import cloudImg from "@/assets/images/cloud.png";
import hotBalloonLeft from "@/assets/images/hotballon-Left.png";
import hotBalloonRight from "@/assets/images/hotballon-right.png";
import planeImg from "@/assets/images/plane1.png";
import weRecPic from "@/assets/images/we-rec-pic.png";
import weRecPic2 from "@/assets/images/we-rec-pic2.jpg";
import weRecPic3 from "@/assets/images/we-rec-pic3.jpg";
import travelerImg from "@/assets/images/traveler.png";
import testimonial1 from "@/assets/images/testimonial-1.jpg";
import testimonial2 from "@/assets/images/testimonial-2.jpg";
import testimonial3 from "@/assets/images/testimonial-3.jpg";

const features = [
  {
    icon: Compass,
    title: "Guide de confiance",
    description: "Nous fournissons des conseils fiables pour vous aider à planifier vos événements efficacement.",
  },
  {
    icon: Target,
    title: "Mission & Vision",
    description: "Connecter les gens à des expériences positives à travers des événements mémorables.",
  },
];

const destinations = [
  { name: "Marrakech", image: "https://images.unsplash.com/photo-1597212720452-f43c0a0d9292?w=400&q=80" },
  { name: "Essaouira", image: "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=400&q=80" },
  { name: "Fès", image: "https://images.unsplash.com/photo-1548769979-a1fc1f1b3dff?w=400&q=80" },
  { name: "Agadir", image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=400&q=80" },
  { name: "Casablanca", image: "https://images.unsplash.com/photo-1577147443647-81856d5150a4?w=400&q=80" },
  { name: "Tanger", image: "https://images.unsplash.com/photo-1553899017-94f0e13f8896?w=400&q=80" },
];

const services = [
  { title: "Guide Expert", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { title: "Divertissement", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80" },
  { title: "Transport VIP", image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&q=80" },
  { title: "Gastronomie", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80" },
  { title: "Cuisine Locale", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80" },
  { title: "Spa & Massage", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80" },
  { title: "Repos & Détente", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=80" },
  { title: "Hébergement", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80" },
];


// Counter animation hook
const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return { count, setIsVisible };
};

const About = () => {
  const happyCustomers = useCounter(3500);
  const yearsExperience = useCounter(25);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Header />

      {/* Hero Banner - Template Style with Sky Background */}
      <section className="relative min-h-[500px] lg:min-h-[600px] overflow-hidden bg-gradient-to-b from-accent/30 via-accent/20 to-background">
        {/* Clouds Layer */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.img
            src={cloudImg}
            alt=""
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 0.8 }}
            transition={{ duration: 1.5 }}
            className="absolute top-[20%] left-[5%] w-32 lg:w-48"
          />
          <motion.img
            src={cloudImg}
            alt=""
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 0.6 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute top-[30%] right-[10%] w-24 lg:w-40"
          />
        </div>

        {/* Animated Plane */}
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-[15%] right-[15%] hidden lg:block"
        >
          <motion.img
            src={planeImg}
            alt=""
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-40"
          />
        </motion.div>

        {/* Hot Air Balloons */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[5%] top-[25%] hidden md:block"
        >
          <img src={hotBalloonRight} alt="" className="w-20 lg:w-28" />
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[8%] top-[40%] hidden lg:block"
        >
          <img src={hotBalloonLeft} alt="" className="w-16 opacity-70" />
        </motion.div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-[500px] lg:min-h-[600px] text-center px-4 pt-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-bold text-5xl md:text-6xl lg:text-7xl text-primary mb-6"
          >
            À Propos
          </motion.h1>
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 text-lg"
          >
            <Link to="/" className="text-primary hover:text-atlas-gold transition-colors font-medium">
              Accueil
            </Link>
            <span className="text-muted-foreground">—</span>
            <span className="text-atlas-gold font-semibold">À Propos</span>
          </motion.nav>
        </div>
      </section>

      {/* We Recommend Section - Template Layout */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Images Composition (Template Style) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative flex justify-center lg:justify-start">
                {/* Main Image */}
                <div className="relative z-10">
                  <div className="absolute -inset-4 lg:-inset-6 bg-accent/20 rounded-full -z-10" />
                  <img
                    src={weRecPic}
                    alt="Voyageur"
                    className="w-64 lg:w-80 rounded-[2rem] shadow-2xl"
                  />
                </div>

                {/* Top Right Circular Image */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="absolute -top-4 right-[5%] lg:right-[-10%] z-20"
                >
                  <div className="w-28 h-28 lg:w-36 lg:h-36 rounded-full border-[6px] border-background shadow-xl overflow-hidden">
                    <img
                      src={weRecPic2}
                      alt="Guide"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Large Circular Image - Bottom Right */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-[-20%] right-[-5%] lg:right-[-15%] z-0"
                >
                  <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full border-[12px] border-accent/30 overflow-hidden shadow-2xl">
                    <img
                      src={weRecPic3}
                      alt="Aventure"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pl-8"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Nous Vous <span className="text-atlas-gold">Recommandons</span> De Belles Destinations Chaque Mois
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                Atlas For Events est une agence événementielle primée, spécialisée dans la création 
                d'expériences uniques au Maroc. Avec l'une des communautés les plus influentes dans 
                l'événementiel de luxe, nous aidons nos clients à créer des moments inoubliables.
              </p>

              {/* Feature Cards */}
              <div className="space-y-4 mb-10">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-5 p-5 bg-background border border-border/50 rounded-2xl hover:shadow-lg transition-shadow group"
                  >
                    <div className="w-14 h-14 min-w-[56px] bg-atlas-gold/10 rounded-xl flex items-center justify-center group-hover:bg-atlas-gold/20 transition-colors">
                      <feature.icon className="w-7 h-7 text-atlas-gold" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA and Happy Customers */}
              <div className="flex flex-wrap items-center gap-6">
                <Button asChild size="lg" className="rounded-full px-8 bg-atlas-gold hover:bg-atlas-orange text-white">
                  <Link to="/services">
                    Découvrir Plus
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <motion.div 
                  className="flex items-center gap-4"
                  onViewportEnter={() => happyCustomers.setIsVisible(true)}
                >
                  <div className="flex -space-x-3">
                    {[testimonial1, testimonial2, testimonial3].map((src, i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                        <img src={src} alt="Customer" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <span className="block font-black text-2xl text-secondary">{happyCustomers.count.toLocaleString()}+</span>
                    <span className="text-xs uppercase font-medium text-muted-foreground">Clients Satisfaits</span>
                  </div>
                </motion.div>
              </div>

              {/* Years Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                onViewportEnter={() => yearsExperience.setIsVisible(true)}
                className="mt-10 inline-flex items-center gap-4"
              >
                <span 
                  className="text-7xl md:text-8xl font-black text-atlas-gold"
                  style={{ textShadow: '3px 4px 0 hsl(var(--primary))' }}
                >
                  {yearsExperience.count}
                </span>
                <span className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                  Années<br />d'Expérience
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-background via-accent/10 to-background relative overflow-hidden">
        {/* Decorative Balloons */}
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-3%] top-[30%] hidden lg:block"
        >
          <img src={hotBalloonLeft} alt="" className="w-20 opacity-50" />
        </motion.div>

        <div className="container mx-auto px-4">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              <span className="text-atlas-gold">Destinations</span> Populaires
            </h2>
            <p className="text-muted-foreground text-lg">
              Des destinations qui valent le détour ! Voici quelques endroits populaires
            </p>
          </motion.div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative"
              >
                <div className="rounded-3xl overflow-hidden aspect-[3/5] relative">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%]">
                  <div className="bg-background text-foreground text-center py-3 rounded-xl font-bold text-sm transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground shadow-lg">
                    {dest.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Amazing Services */}
      <section className="py-20 lg:py-32 bg-primary relative">
        <div className="container mx-auto px-4">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Nos <span className="text-atlas-gold">Services</span> Incroyables
            </h2>
            <p className="text-white/70 text-lg">
              Des services exceptionnels pour des événements mémorables
            </p>
          </motion.div>

          {/* Services Grid - Template Style */}
          <div className="bg-accent/20 rounded-[2rem] p-6 md:p-10 lg:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-background rounded-2xl p-3 text-center shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="rounded-xl overflow-hidden mb-4 aspect-square">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-foreground group-hover:text-atlas-gold transition-colors pb-2">
                    {service.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Using shared component */}
      <TestimonialsSection />

      {/* CTA / Newsletter Section - Template Style */}
      <section className="bg-atlas-gold py-10 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-white">Abonnez-vous</span>{" "}
                <span className="text-primary">Maintenant!</span>
              </h2>
              <p className="text-primary/80 font-medium text-lg mt-2">
                Inscrivez-vous à notre newsletter pour recevoir les dernières mises à jour.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-md"
            >
              <div className="bg-accent rounded-full p-1.5 flex items-center">
                <input
                  type="email"
                  placeholder="Adresse email..."
                  className="flex-1 bg-white rounded-full px-5 py-4 text-foreground outline-none"
                />
                <button className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center ml-1.5 hover:bg-primary/90 transition-colors">
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
