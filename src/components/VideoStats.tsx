import { motion } from "framer-motion";
import { Award, Users, Trophy, Clock, Play, Pause } from "lucide-react";
import { useState, useEffect, useRef } from "react";

import videoBgMp4 from "@/assets/videos/video-stats-bg.mp4";

const stats = [
  { icon: Award, label: "Activités Proposées", value: 20, suffix: "+" },
  { icon: Users, label: "Clients Satisfaits", value: 1500, suffix: "+" },
  { icon: Trophy, label: "Excursions Réalisées", value: 500, suffix: "+" },
  { icon: Clock, label: "Années d'Expérience", value: 10, suffix: "+" },
];

const CountUp = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={ref} className="font-black text-2xl lg:text-4xl text-white">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
};

const VideoStats = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-[#DBEEEE]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl lg:rounded-[60px] overflow-hidden"
        >
          {/* Video Background */}
          <div className="relative h-[500px] lg:h-[640px] bg-black">
            {/* Video */}
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              src={videoBgMp4}
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-black/40" />

            {/* Play/Pause Button */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePlay}
                className="relative"
              >
                <span className="absolute inset-0 bg-white/30 rounded-full animate-ping" />
                <span className="absolute -inset-4 bg-white/20 rounded-full animate-pulse" />
                <div className="relative bg-white rounded-full p-6 lg:p-8 shadow-xl">
                  {isPlaying ? (
                    <Pause className="h-8 w-8 lg:h-12 lg:w-12 text-primary fill-primary" />
                  ) : (
                    <Play className="h-8 w-8 lg:h-12 lg:w-12 text-primary fill-primary" />
                  )}
                </div>
              </motion.button>
            </div>

            {/* "Say Yes" Banner */}
            <div className="absolute top-12 right-12 hidden lg:block">
              <div className="text-white text-4xl font-['Kaushan_Script',cursive]">
                Say <span className="text-[#FFAA0D] text-8xl block">Yes!</span>
                <span className="block">To New Adventure</span>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-primary/80 backdrop-blur-sm p-6 lg:p-10">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="flex-shrink-0">
                      <stat.icon className="h-8 w-8 lg:h-12 lg:w-12 text-[#FFAA0D]" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm lg:text-base mb-1">{stat.label}</p>
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoStats;
