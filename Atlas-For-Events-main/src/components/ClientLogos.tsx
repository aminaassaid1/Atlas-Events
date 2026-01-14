import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import partnerLogo1 from "@/assets/images/partner-logo-1.webp";
import partnerLogo2 from "@/assets/images/partner-logo-2.webp";
import partnerLogo3 from "@/assets/images/partner-logo-3.webp";
import partnerLogo4 from "@/assets/images/partner-logo-4.webp";
import partnerLogo5 from "@/assets/images/partner-logo-5.webp";

const ClientLogos = () => {
  const logos = [partnerLogo1, partnerLogo2, partnerLogo3, partnerLogo4, partnerLogo5];
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.5;
      if (scrollContainer.scrollWidth / 2 <= scrollPosition) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="p-5 bg-muted">
      <div className="py-12 bg-white border-4 border-dashed border-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl lg:text-4xl font-black text-primary">
              Nos Précieux Partenaires
            </h2>
          </motion.div>

          <div
            ref={scrollRef}
            className="flex gap-12 overflow-hidden"
            style={{ scrollBehavior: "auto" }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.7 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                viewport={{ once: true }}
                className="flex-shrink-0 flex items-center justify-center h-24 transition-all duration-300"
              >
                <img
                  src={logo}
                  alt={`Partenaire ${(index % logos.length) + 1}`}
                  className="h-14 lg:h-20 w-auto grayscale hover:grayscale-0 transition-all duration-300 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
