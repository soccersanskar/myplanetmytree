import canopy from "@/assets/canopy.jpg";
import { TreePine, Droplets, Wind, Sun, Leaf } from "lucide-react";

const treeTypes = [
  {
    name: "Conifers",
    emoji: "🌲",
    description: "Evergreen giants like pines, spruces, and firs. They thrive in cold climates, provide year-round carbon absorption, and create critical habitat for wildlife.",
    benefit: "Carbon storage champions—conifers absorb CO₂ even in winter months.",
  },
  {
    name: "Deciduous",
    emoji: "🍂",
    description: "Oaks, maples, and birches that shed their leaves seasonally. Their fallen foliage enriches soil and their broad canopies cool urban areas significantly.",
    benefit: "Natural soil enrichment through annual leaf decomposition cycles.",
  },
  {
    name: "Tropical",
    emoji: "🌴",
    description: "Banyan, mahogany, and teak—the lungs of the equator. These giants support the highest biodiversity on Earth and regulate global rainfall patterns.",
    benefit: "One tropical tree can support over 400 insect species alone.",
  },
  {
    name: "Fruit-Bearing",
    emoji: "🍎",
    description: "Mango, apple, and citrus trees provide food security alongside environmental benefits. They support local communities economically and nutritionally.",
    benefit: "Dual impact: ecological restoration + community food security.",
  },
];

const stats = [
  { icon: Wind, value: "22kg", label: "CO₂ absorbed per tree/year" },
  { icon: Droplets, value: "100gal", label: "Water filtered per tree/day" },
  { icon: Sun, value: "10°F", label: "Cooling effect in urban areas" },
  { icon: TreePine, value: "80+", label: "Species supported per tree" },
];

const TreesSection = () => {
  return (
    <section id="trees" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">The Science</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Trees Matter
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Trees are the planet's most powerful natural technology. They sequester carbon, regulate water cycles, prevent erosion, and create the habitats that sustain life on Earth.
          </p>
        </div>

        {/* Stats bar */}
        <div className="bg-gradient-forest rounded-2xl p-8 mb-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="h-8 w-8 text-gold mx-auto mb-3" />
              <p className="text-3xl font-bold text-primary-foreground font-serif">{stat.value}</p>
              <p className="text-primary-foreground/70 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Canopy image + tree types */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="sticky top-24">
            <img
              src={canopy}
              alt="Sunlight streaming through a beautiful forest canopy viewed from below"
              className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
            />
            <p className="text-muted-foreground text-sm mt-4 italic text-center">
              Every tree planted contributes to a living, breathing ecosystem.
            </p>
          </div>

          <div className="space-y-6">
            {treeTypes.map((tree) => (
              <div
                key={tree.name}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
              >
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                  {tree.emoji} {tree.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">{tree.description}</p>
                <p className="text-primary font-medium text-sm flex items-center gap-2">
                  <Leaf className="h-4 w-4" />
                  {tree.benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreesSection;
