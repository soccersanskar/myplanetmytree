import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import TreesSection from "@/components/TreesSection";
import DonationSection from "@/components/DonationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { CheckCircle, X } from "lucide-react";

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (searchParams.get("donation") === "success") {
      setShowBanner(true);
      // Clean the URL
      searchParams.delete("donation");
      setSearchParams(searchParams, { replace: true });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {showBanner && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground py-4 px-6 flex items-center justify-center gap-3 shadow-lg animate-fade-in-up">
          <CheckCircle className="h-5 w-5 flex-shrink-0" />
          <p className="font-semibold text-center">
            Thank you for your generous donation! 🌳 The Pandey family sends their deepest gratitude.
          </p>
          <button onClick={() => setShowBanner(false)} className="ml-4 hover:opacity-70 transition-opacity">
            <X className="h-5 w-5" />
          </button>
        </div>
      )}
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
