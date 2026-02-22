import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import DonationSection from "@/components/DonationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { CheckCircle, X, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (searchParams.get("donation") === "success") {
      setShowBanner(true);
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

      {/* Trees CTA */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <TreePine className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Discover Why Trees Matter
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            From carbon sequestration to human health, trees are the planet's most powerful natural technology. Dive into the science.
          </p>
          <Button asChild size="lg" className="text-base px-8">
            <Link to="/about-trees">
              <TreePine className="h-5 w-5 mr-2" />
              Read About Trees
            </Link>
          </Button>
        </div>
      </section>

      <DonationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
