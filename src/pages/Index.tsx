import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import TreesSection from "@/components/TreesSection";
import DonationSection from "@/components/DonationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <TreesSection />
      <DonationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
