import HeroSection from "@/components/HeroSection";
import ItinerarySection from "@/components/ItinerarySection";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OfferSection from "@/components/OfferSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ItinerarySection />
      <ExperienceSection />
      <TestimonialsSection />
      <OfferSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
