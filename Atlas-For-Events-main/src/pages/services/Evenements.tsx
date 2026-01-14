import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Play, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import airplaneTakeoff from "@/assets/images/airplane-takeoff.png";

const eventTypes = [
  {
    title: "Mariages",
    description: "Planifiez votre journée parfaite",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
  },
  {
    title: "Fiançailles",
    description: "Célébrez ce moment unique",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80",
  },
  {
    title: "Anniversaires",
    description: "Rendez-le inoubliable avec nous",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
  },
  {
    title: "EVJF / EVJG",
    description: "Transformez chaque fête en souvenir mémorable",
    image: "https://images.unsplash.com/photo-1529543544277-750e038ad5c3?w=800&q=80",
  },
  {
    title: "Soirées privées",
    description: "Quelle que soit l'occasion, nous la rendons exceptionnelle",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
  },
  {
    title: "Autres services",
    description: "Organisez vos événements comme jamais auparavant",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  },
  {
    title: "Animations",
    description: "Vivez l'expérience complète avec le groupe musical Gipsy Sueño",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
  },
];

const gipsyVideos = [
  "https://atlasforevents.com/wp-content/uploads/2024/07/WhatsApp-Video-2024-07-04-at-18.52.58_2b37c77a.mp4",
  "https://atlasforevents.com/wp-content/uploads/2024/07/WhatsApp-Video-2024-07-04-at-18.52.58_7e33d036.mp4",
  "https://atlasforevents.com/wp-content/uploads/2024/07/WhatsApp-Video-2024-07-04-at-18.52.57_2a90b0ce.mp4",
  "https://atlasforevents.com/wp-content/uploads/2024/07/WhatsApp-Video-2024-07-04-at-18.52.57_7d58a4d0.mp4",
  "https://atlasforevents.com/wp-content/uploads/2024/07/WhatsApp-Video-2024-07-04-at-18.52.57_a0f7d79e.mp4",
];

const relatedServices = [
  { title: "Vacances", href: "/services/vacances" },
  { title: "Activités", href: "/services/activites" },
  { title: "Hébergement", href: "/services/hebergement" },
  { title: "Spa", href: "/services/spa" },
  { title: "Transport", href: "/services/transport" },
];

const tags = ["Mariage", "Fiançailles", "Anniversaire", "Corporate", "Séminaire", "Gala", "Décoration", "Traiteur", "Marrakech", "Événement"];

const Evenements = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxVideo, setLightboxVideo] = useState<number | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % eventTypes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + eventTypes.length) % eventTypes.length);
  };

  const openLightbox = (index: number) => {
    setLightboxVideo(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxVideo(null);
    document.body.style.overflow = 'auto';
  }, []);

  const nextVideo = useCallback(() => {
    setLightboxVideo((prev) => (prev !== null ? (prev + 1) % gipsyVideos.length : 0));
  }, []);

  const prevVideo = useCallback(() => {
    setLightboxVideo((prev) => (prev !== null ? (prev - 1 + gipsyVideos.length) % gipsyVideos.length : 0));
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxVideo === null) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          prevVideo();
          break;
        case 'ArrowRight':
          nextVideo();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxVideo, closeLightbox, nextVideo, prevVideo]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-atlas-light-blue via-white to-atlas-gold/20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-atlas-gold/30 blur-3xl" />
        </div>
        
        {/* Animated clouds */}
        <div className="absolute top-1/3 left-0 w-full h-32 z-10 overflow-hidden pointer-events-none">
          <motion.div
            className="whitespace-nowrap inline-block"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <svg className="inline-block h-24 opacity-20" viewBox="0 0 200 60">
              <ellipse cx="60" cy="40" rx="50" ry="20" fill="white" />
              <ellipse cx="90" cy="35" rx="40" ry="18" fill="white" />
              <ellipse cx="40" cy="42" rx="30" ry="15" fill="white" />
            </svg>
            <svg className="inline-block h-24 opacity-20 ml-20" viewBox="0 0 200 60">
              <ellipse cx="60" cy="40" rx="50" ry="20" fill="white" />
              <ellipse cx="90" cy="35" rx="40" ry="18" fill="white" />
              <ellipse cx="40" cy="42" rx="30" ry="15" fill="white" />
            </svg>
          </motion.div>
        </div>

        {/* Airplane */}
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20"
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.img
            src={airplaneTakeoff}
            alt="Airplane"
            className="w-48 md:w-64 lg:w-80 opacity-90"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Hot air balloons */}
        <motion.div
          className="absolute right-8 bottom-10 z-10"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-12 h-16 bg-gradient-to-b from-atlas-gold to-primary rounded-t-full relative">
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-4 bg-primary/80 rounded-b" />
          </div>
        </motion.div>

        <div className="container mx-auto px-4 py-32 lg:py-40 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Événements
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Créez des événements inoubliables grâce à une planification experte et à une touche personnalisée.
            </p>
            <nav className="flex items-center justify-center gap-2 text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-primary font-medium">Événements</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-sm mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Demande de renseignements
                </h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom</Label>
                    <Input id="name" placeholder="Votre nom" className="rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Votre email" className="rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Catégorie d'événement</Label>
                    <Select>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Sélectionner une catégorie" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mariage">Mariage</SelectItem>
                        <SelectItem value="fiancailles">Fiançailles</SelectItem>
                        <SelectItem value="anniversaire">Anniversaire</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="date" className="rounded-xl" />
                  </div>
                  <div className="md:col-span-2">
                    <Button type="submit" className="w-full md:w-auto px-8 rounded-xl">
                      Envoyer la demande
                    </Button>
                  </div>
                </form>
              </motion.div>

              {/* Main Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-sm mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Votre grand jour commence avec nous !
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Qu'il s'agisse de petits rassemblements ou de grandes célébrations, nous orchestrons chaque détail avec soin pour assurer le succès de votre événement.
                </p>
              </motion.div>

              {/* Event Types Carousel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-sm mb-8"
              >
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                  Types d'événements
                </h3>
                <div className="relative">
                  <div className="overflow-hidden rounded-2xl">
                    <motion.div
                      className="flex transition-transform duration-500 ease-out"
                      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                      {eventTypes.map((event, index) => (
                        <div
                          key={index}
                          className="w-full flex-shrink-0 relative"
                        >
                          <div className="aspect-[16/9] relative overflow-hidden rounded-2xl">
                            <img
                              src={event.image}
                              alt={event.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 text-white">
                              <h4 className="text-2xl md:text-3xl font-bold mb-2">{event.title}</h4>
                              <p className="text-white/90 text-lg">{event.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Navigation Controls */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10"
                  >
                    <ChevronLeft className="w-6 h-6 text-foreground" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10"
                  >
                    <ChevronRight className="w-6 h-6 text-foreground" />
                  </button>

                  {/* Dots */}
                  <div className="flex justify-center gap-2 mt-6">
                    {eventTypes.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentSlide ? "bg-primary" : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Gipsy Sueño Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-sm mb-8"
              >
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  Gipsy Sueño International Band
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                  <p>
                    Jordan Serviole et Johann Tarres, amis d'enfance dans la vingtaine, ont grandi au milieu des caravanes et des feux de camp, apprenant dès leur plus jeune âge l'art de la guitare flamenca auprès de leurs aînés. Miguel Santiago, l'aîné du groupe, originaire d'Andalousie, est l'« expérience » et la voix du groupe.
                  </p>
                  <p>
                    Gipsy Sueño est composé de musiciens et chanteurs extrêmement talentueux, chacun apportant un ton et une dimension uniques. Nous nous produisons en France et à l'international : Paris, Lyon, Cannes, Angleterre, Maroc, Espagne, Catalogne, Dubaï, Courchevel, Megève, Chamonix… Quelle que soit l'occasion, nous avons le talent pour créer l'ambiance parfaite.
                  </p>
                </div>

                {/* Video Gallery */}
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Vidéos Gipsy Sueño
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {gipsyVideos.map((video, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                      onClick={() => openLightbox(index)}
                    >
                      <video
                        src={video}
                        className="w-full h-full object-cover"
                        muted
                        preload="metadata"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 text-primary ml-1" />
                        </div>
                      </div>
                      <span className="absolute bottom-2 left-2 text-white text-sm font-medium">
                        Vidéo {index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Video Lightbox Modal */}
              <AnimatePresence>
                {lightboxVideo !== null && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
                    onClick={closeLightbox}
                  >
                    {/* Close Button */}
                    <button
                      onClick={closeLightbox}
                      className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                    >
                      <X className="w-6 h-6 text-white" />
                    </button>

                    {/* Video Counter */}
                    <div className="absolute top-4 left-4 text-white/80 text-sm font-medium">
                      {lightboxVideo + 1} / {gipsyVideos.length}
                    </div>

                    {/* Previous Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevVideo();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                    >
                      <ChevronLeft className="w-8 h-8 text-white" />
                    </button>

                    {/* Next Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextVideo();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                    >
                      <ChevronRight className="w-8 h-8 text-white" />
                    </button>

                    {/* Video Container */}
                    <motion.div
                      key={lightboxVideo}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="w-full max-w-5xl mx-4 aspect-video"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <video
                        src={gipsyVideos[lightboxVideo]}
                        controls
                        autoPlay
                        className="w-full h-full rounded-lg"
                      />
                    </motion.div>

                    {/* Video Thumbnails */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {gipsyVideos.map((_, index) => (
                        <button
                          key={index}
                          onClick={(e) => {
                            e.stopPropagation();
                            setLightboxVideo(index);
                          }}
                          className={`w-3 h-3 rounded-full transition-all ${
                            index === lightboxVideo 
                              ? "bg-white scale-125" 
                              : "bg-white/40 hover:bg-white/60"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Keyboard hints */}
                    <div className="absolute bottom-4 right-4 text-white/50 text-xs hidden md:block">
                      ← → Navigation • Esc Fermer
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              {/* Related Services */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-foreground mb-4 pl-4 border-l-4 border-atlas-gold bg-gradient-to-r from-atlas-gold/20 to-transparent py-2 px-4">
                  Services associés
                </h4>
                <div className="bg-white border border-muted rounded-3xl p-6">
                  <ul className="space-y-3">
                    {relatedServices.map((service, index) => (
                      <li key={index} className="flex items-center justify-between">
                        <Link
                          to={service.href}
                          className="text-lg font-medium text-foreground hover:text-atlas-gold transition-colors"
                        >
                          {service.title}
                        </Link>
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-foreground mb-4 pl-4 border-l-4 border-atlas-gold bg-gradient-to-r from-atlas-gold/20 to-transparent py-2 px-4">
                  Tags populaires
                </h4>
                <div className="bg-white border border-muted rounded-3xl p-6">
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-muted/50 text-foreground text-sm font-medium rounded-full hover:bg-atlas-gold hover:text-white transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-primary rounded-3xl p-6 text-center">
                <h4 className="text-xl font-bold text-white mb-3">
                  Besoin d'aide ?
                </h4>
                <p className="text-white/80 mb-6 text-sm">
                  Notre équipe est disponible pour répondre à toutes vos questions.
                </p>
                <Button asChild variant="secondary" className="w-full bg-white text-primary hover:bg-white/90">
                  <Link to="/contact">Contactez-nous</Link>
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Evenements;
