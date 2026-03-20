import HeroSection from "@/components/HeroSection";
import ItinerarySection from "@/components/ItinerarySection";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OfferSection from "@/components/OfferSection";

import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <OfferSection />
      <ItinerarySection />
      <ExperienceSection />
      <TestimonialsSection />
      
      <Footer />
    </main>
  );
};

export default Index;
