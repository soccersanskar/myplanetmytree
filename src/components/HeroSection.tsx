import heroForest from "@/assets/hero-forest.jpg";
import { TreePine } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroForest}
          alt="Aerial view of a lush reforestation project with young saplings growing among ancient trees"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-dark/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="flex justify-center mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <TreePine className="h-14 w-14 text-gold" />
        </div>
        <h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 animate-fade-in-up leading-tight"
          style={{ animationDelay: "0.3s" }}
        >
          My Planet My Tree
        </h1>
        <p
          className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 font-light animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          Restoring the Earth's lungs through strategic, high-care reforestation.
          Every tree planted has a long-term survival plan.
        </p>
        <div className="animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
          <a
            href="#donate"
            className="inline-block bg-gradient-gold text-accent-foreground font-semibold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            Plant a Tree Today 🌱
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
