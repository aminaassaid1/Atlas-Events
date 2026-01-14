import { motion } from "framer-motion";
import { Clock, Award, Target, Users } from "lucide-react";
import customer1 from "@/assets/images/hpy-cus/pic1.jpg";
import customer2 from "@/assets/images/hpy-cus/pic2.jpg";
import customer3 from "@/assets/images/hpy-cus/pic3.jpg";
import customer4 from "@/assets/images/hpy-cus/pic4.jpg";
import customer5 from "@/assets/images/hpy-cus/pic5.jpg";
import customer6 from "@/assets/images/hpy-cus/pic6.jpg";
import customer7 from "@/assets/images/hpy-cus/pic7.jpg";
import weRecPic from "@/assets/images/we-rec-pic.png";
import planeImg from "@/assets/images/plane1.png";
const features = [{
  icon: Clock,
  title: "Support 24/7",
  description: "Notre équipe est disponible à tout moment pour vous accompagner"
}, {
  icon: Award,
  title: "Experts Locaux",
  description: "Des guides professionnels passionnés par le Maroc"
}, {
  icon: Target,
  title: "Sur Mesure",
  description: "Des expériences personnalisées adaptées à vos envies"
}, {
  icon: Users,
  title: "1500+ Clients",
  description: "La confiance de nombreux voyageurs satisfaits"
}];
const FeaturesSection = () => {
  return <section className="py-20 lg:py-32 bg-[#DBEEEE]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
              Nous <span className="text-[#FFAA0D]">Créons </span>
              des Expériences Inoubliables
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Atlas For Events est votre partenaire de confiance pour découvrir le Maroc autrement.
              Nous proposons des activités uniques, des excursions guidées et des expériences authentiques
              qui transforment vos voyages en souvenirs inoubliables.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {features.slice(1, 3).map((feature, index) => <motion.div key={feature.title} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: index * 0.1
            }} className="flex gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </motion.div>)}
            </div>

            {/* CTA & Stats */}
            <div className="flex flex-wrap items-center gap-6">
              <a href="/services" className="inline-flex items-center gap-3 bg-[#FFAA0D] hover:bg-[#e69a0c] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
                Découvrir Plus
              </a>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  
                  
                  
                  <img src={customer4} alt="Client satisfait" className="w-10 h-10 rounded-full border-2 border-white object-cover" loading="lazy" />
                  <img src={customer5} alt="Client satisfait" className="w-10 h-10 rounded-full border-2 border-white object-cover" loading="lazy" />
                  <img src={customer6} alt="Client satisfait" className="w-10 h-10 rounded-full border-2 border-white object-cover" loading="lazy" />
                  
                </div>
                <div>
                  <span className="block text-2xl font-black text-primary">1.5k+</span>
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">Clients Satisfaits</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="relative">
            {/* 24/7 Badge */}
            <div className="absolute -left-6 top-10 z-10 bg-white p-2 rounded-3xl shadow-xl">
              <div className="bg-primary p-6 rounded-2xl text-center">
                <span className="text-4xl font-black text-[#FFAA0D] block">24/7</span>
                <span className="text-white text-lg font-medium">Support</span>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden">
              <img alt="Events" className="w-full h-auto" loading="lazy" src="/lovable-uploads/a755758f-c224-48ee-a309-d38bd9474057.webp" />
            </div>

            {/* Floating Plane */}
            <motion.div animate={{
            x: [0, 10, 0],
            y: [0, -5, 0]
          }} transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }} className="absolute -top-10 -right-10">
              <img src={planeImg} alt="" className="w-48" loading="lazy" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default FeaturesSection;