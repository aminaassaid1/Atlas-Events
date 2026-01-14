import { motion } from "framer-motion";
import { MapPin, CreditCard, Plane } from "lucide-react";
import offerImg from "@/assets/images/offer/pic1.jpg";
import hotBalloonRightImg from "@/assets/images/hotballon-right.png";
import cloudImg from "@/assets/images/cloud-1.png";
import girlImg from "@/assets/images/Girl-Image.png";
import support24Img from "@/assets/images/24-Image.png";
const steps = [{
  number: "01",
  icon: MapPin,
  title: "Choisissez Votre Destination",
  description: "Sélectionnez votre destination préférée et poursuivez"
}, {
  number: "02",
  icon: CreditCard,
  title: "Effectuez le Paiement",
  description: "Nous offrons des options de paiement sécurisées et flexibles"
}, {
  number: "03",
  icon: Plane,
  title: "Prêt à Voyager",
  description: "Tout est prêt pour vivre votre aventure inoubliable"
}];
const StepsSection = () => {
  return <section className="bg-white py-20 lg:py-32 relative overflow-hidden">
      {/* Decorative Blurs */}
      <div className="absolute w-96 h-80 -left-48 top-1/2 bg-[#FFAA0D]/10 blur-[100px]" />
      <div className="absolute w-96 h-80 -right-48 top-1/2 bg-primary/10 blur-[100px]" />
      <div className="absolute w-96 h-80 left-1/2 -translate-x-1/2 -top-32 bg-[#FFAA0D]/10 blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            {/* Title */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="max-w-md mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold text-primary">
                <span className="text-[#FFAA0D]">3 Étapes Faciles </span>
                pour Réserver Votre Prochain Voyage
              </h2>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Offer Card */}
              <motion.div initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} className="lg:w-60 flex-shrink-0">
                <div className="rounded-xl overflow-hidden">
                  <img alt="Offre spéciale" className="w-full h-52 object-cover" loading="lazy" src="/lovable-uploads/bbcc1f72-195f-4c4f-9c4d-215aca43b703.png" />
                </div>
                <div className="bg-[#FFAA0D] rounded-xl p-5 -mt-8 ml-3 relative z-10">
                  <span className="text-primary font-semibold text-lg block mb-2">
                    Offre Spéciale
                  </span>
                  <div className="flex items-baseline">
                    <span className="text-white text-7xl font-black">48</span>
                    <div className="text-primary text-xl font-black ml-1">
                      %<span className="block">Off</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Steps */}
              <div className="flex-1 space-y-5">
                {steps.map((step, index) => <motion.div key={step.number} initial={{
                opacity: 0,
                x: 20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1
              }} className="bg-white border border-[#DBEEEE] p-3 pl-12 shadow-lg rounded-r-full relative ml-10">
                    {/* Step Number */}
                    <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-20 h-16 bg-primary rounded-xl flex items-center justify-center text-white text-3xl font-black">
                      {step.number}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-primary text-xl font-medium mb-1">{step.title}</h4>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </div>
                      <div className="w-20 h-20 bg-[#FFAA0D] rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-[72px] h-[72px] bg-white rounded-full flex items-center justify-center">
                          <step.icon className="h-10 w-10 text-primary" />
                        </div>
                      </div>
                    </div>
                  </motion.div>)}
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="lg:col-span-5 relative">
            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="relative">
              {/* Decorations */}
              <motion.img animate={{
              y: [0, -15, 0]
            }} transition={{
              duration: 4,
              repeat: Infinity
            }} src={hotBalloonRightImg} alt="" className="absolute -top-8 right-16 w-28 z-10" loading="lazy" />
              <motion.img animate={{
              x: [0, 10, 0]
            }} transition={{
              duration: 5,
              repeat: Infinity
            }} src={cloudImg} alt="" className="absolute top-32 -left-8 w-32" loading="lazy" />

              {/* Main Image */}
              <div className="relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#FFF8EB] rounded-full -z-10" />
                <img alt="Voyageuse" className="relative z-10 mx-auto" style={{
                width: '440px',
                height: '577px'
              }} loading="lazy" src="/lovable-uploads/dd02e8ce-5162-4dcf-9e88-85b44c7c40f2.webp" />
                <div className="absolute left-full top-1/2 -rotate-90 origin-left whitespace-nowrap">
                  <span className="text-primary font-['Kaushan_Script',cursive] text-3xl">
                    For <span className="text-[#FFAA0D] text-7xl font-normal">Summer!</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Why Choose Us Banner */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="mt-20 bg-primary rounded-b-[100px] p-10 lg:p-16 flex flex-wrap items-center justify-between gap-8">
          <div className="max-w-lg">
            <h3 className="text-white text-3xl lg:text-4xl font-['Kaushan_Script',cursive] mb-6">
              Pourquoi Nous Choisir!
            </h3>
            <ul className="grid sm:grid-cols-2 gap-4 mb-6">
              {["Attention aux Détails", "Économisez Votre Budget", "Consultations Gratuites", "Certification Complète"].map(item => <li key={item} className="flex items-center gap-3 text-white">
                  <span className="w-7 h-7 bg-[#FFAA0D] rounded-full flex items-center justify-center text-sm">
                    ✓
                  </span>
                  {item}
                </li>)}
            </ul>
            <a href="/contact" className="inline-flex items-center gap-3 bg-[#FFAA0D] hover:bg-[#e69a0c] text-white font-semibold px-8 py-4 rounded-full transition-all">
              Découvrir Plus
            </a>
          </div>

          <div className="text-center">
            <img src={support24Img} alt="Support 24/7" className="w-32 mx-auto mb-4" loading="lazy" />
            <h3 className="text-white text-4xl lg:text-5xl font-black uppercase mb-2">
              Appelez-Nous
            </h3>
            <a href="tel:+212661438839" className="text-[#FFAA0D] text-2xl lg:text-3xl font-bold">
              +212 661 438 839
            </a>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default StepsSection;