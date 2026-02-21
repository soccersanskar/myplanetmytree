import { TreePine, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-forest-dark py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <TreePine className="h-6 w-6 text-gold" />
          <span className="font-serif text-lg font-bold text-primary-foreground">My Planet My Tree</span>
        </div>
        <p className="text-primary-foreground/60 text-sm mb-2">
          Founded by the Pandey Family — Sanskar, Vidya, Sudhendu & Sanskriti
        </p>
        <p className="text-primary-foreground/40 text-xs flex items-center justify-center gap-1">
          Made with <Heart className="h-3 w-3 text-gold" /> for the planet · © 2025 My Planet My Tree
        </p>
      </div>
    </footer>
  );
};

export default Footer;
