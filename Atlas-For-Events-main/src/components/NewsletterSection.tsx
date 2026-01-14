import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

import planeImg from "@/assets/images/plane1.png";
import hotBalloonRightImg from "@/assets/images/hotballon-right.png";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing:", email);
    setEmail("");
  };

  return (
    <section className="bg-primary py-16 lg:py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-10 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block"
      >
        <img src={planeImg} alt="" className="w-48" loading="lazy" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute right-10 top-10 opacity-30 hidden lg:block"
      >
        <img src={hotBalloonRightImg} alt="" className="w-24" loading="lazy" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h3 className="text-white text-2xl lg:text-3xl font-bold mb-2">
                Inscrivez-vous à Notre Newsletter
              </h3>
              <p className="text-white/70 font-normal">Recevez nos offres exclusives et dernières actualités</p>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="flex-1 max-w-md w-full"
            >
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  className="w-full px-6 py-4 pr-14 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#FFAA0D]"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#FFAA0D] hover:bg-[#e69a0c] text-white p-3 rounded-full transition-colors"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
