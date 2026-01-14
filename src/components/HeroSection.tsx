import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import heroVideo from "@/assets/heroVideo.mp4";
import heroBg from "@/assets/images/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="3xl:h-237.5 2xl:h-225 sm:h-192 h-170 overflow-hidden relative">
      {/* Video Background */}
      <video
        muted
        loop
        autoPlay
        playsInline
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover size-full z-0"
        poster={heroBg}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Main Container with Rounded Overlay */}
      <div className="relative z-[2] 3xl:h-220 2xl:h-207.5 lg:h-171.25 h-195 lg:m-8.75 lg:rounded-3xl bg-black/35">
        <div className="xl:pt-50 md:pt-40 pt-37.5 md:pl-17.5 max-md:px-5 max-w-255">
          {/* Subtitle */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="2xl:text-48 text-3xl leading-17.5 text-aquamist xl:pl-12.5 font-display block"
          >
            Découvrez
          </motion.span>

          {/* Main Title with Outline Effect */}
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="!font-display 2xl:text-[180px] xl:text-[130px] md:text-[80px] text-[60px] !text-white relative inline-block animate-slide-left leading-none"
              title="Morocco"
            >
              Morocco
            </motion.h1>
            <h1
              className="!font-display 2xl:text-[180px] xl:text-[130px] md:text-[80px] text-[60px] !text-transparent absolute left-0 top-0 z-1 [-webkit-text-stroke:2px_#fff] animate-slide-left pointer-events-none leading-none"
              title="Morocco"
            >
              Morocco
            </h1>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg leading-7.5 text-white relative 2xl:ml-175 xl:ml-120 xl:max-w-57.5 w-full mb-7.5"
          >
            Créez des événements inoubliables avec Atlas For Events
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="2xl:ml-187.5 xl:ml-120 relative z-[4]"
          >
            <a
              href="/contact"
              className="site-button inline-block bg-secondary hover:bg-primary text-primary hover:text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 text-lg"
            >
              Contactez-nous
            </a>
          </motion.div>
        </div>

        {/* Social Links - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-white absolute bottom-7.5 3xl:right-112.5 2xl:right-64.5 sm:right-10 right-5 flex items-center z-4"
        >
          <span className="pr-26.25 text-xs leading-4.5 tracking-[0.2em] uppercase relative inline-block after:content-[''] after:absolute after:w-16 after:h-px after:bg-white after:right-5 after:top-1/2 after:-translate-y-1/2 max-sm:hidden">
            Suivez-nous
          </span>
          <ul className="flex">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl ml-5 duration-500 block hover:text-secondary hover:-translate-y-1.25"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl ml-5 duration-500 block hover:text-secondary hover:-translate-y-1.25"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl ml-5 duration-500 block hover:text-secondary hover:-translate-y-1.25"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </li>
            <li>
              <a
                href="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl ml-5 duration-500 block hover:text-secondary hover:-translate-y-1.25"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Decorative Rotating Circles - Desktop Only */}
        <div className="absolute inset-0 z-[3] overflow-hidden max-lg:hidden">
          <div className="absolute top-1/2 -translate-y-1/2 size-175 right-0">
            <div className="-right-4/5 absolute z-2 rotate-center animate-rotate-center">
              <span className="size-175 rounded-full border border-white/30 block relative after:size-3.5 after:bg-white after:rounded-full after:absolute after:right-8.75 after:top-1/4 after:z-10"></span>
            </div>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 size-225 right-0">
            <div className="right-[-70%] absolute z-2 animate-rotate-center">
              <span className="size-225 rounded-full border border-white/30 block relative after:size-3.5 after:bg-secondary after:rounded-full after:absolute after:right-18.75 after:bottom-1/5 after:z-10"></span>
            </div>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 size-275 right-0">
            <div className="-right-3/5 absolute z-2 animate-rotate-center">
              <span className="size-275 rounded-full border border-white/30 block relative after:size-3.5 after:bg-citrusyellow after:rounded-full after:absolute after:left-0.75 after:top-2/5 after:z-10"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
