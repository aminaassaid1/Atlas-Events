import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SearchBar from "@/components/SearchBar";
import DestinationsSection from "@/components/DestinationsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ClientLogos from "@/components/ClientLogos";
import VideoStats from "@/components/VideoStats";
import ServicesSection from "@/components/ServicesSection";
import ToursSection from "@/components/ToursSection";
import StepsSection from "@/components/StepsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import GipsySuenoSection from "@/components/GipsySuenoSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="accueil">
          <HeroSection />
        </section>
        <SearchBar />
        <section id="destinations">
          <DestinationsSection />
        </section>
        <FeaturesSection />
        <ClientLogos />
        <VideoStats />
        <section id="services">
          <ServicesSection />
        </section>
        <section id="evenements">
          <ToursSection />
        </section>
        <StepsSection />
        <GipsySuenoSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
