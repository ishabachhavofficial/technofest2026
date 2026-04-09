import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechEventsSection from "@/components/TechEventsSection";
import NonTechEventsSection from "@/components/NonTechEventsSection";
import RulesSection from "@/components/RulesSection";
import PrizesSection from "@/components/PrizesSection";
import EventDetailsSection from "@/components/EventDetailsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen grid-bg">
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TechEventsSection />
        <NonTechEventsSection />
        <RulesSection />
        <PrizesSection />
        <EventDetailsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
