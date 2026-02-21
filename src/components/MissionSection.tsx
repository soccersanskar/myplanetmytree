import plantingTree from "@/assets/planting-tree.jpg";
import { Leaf, ShieldCheck, Users, Sprout } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "5-Year Care Guarantee",
    description: "Every sapling is maintained, monitored, and protected for a full five years after planting.",
  },
  {
    icon: Leaf,
    title: "Soil & Biodiversity Focus",
    description: "We enrich soil health and plant native species to restore local ecosystems—not monocultures.",
  },
  {
    icon: Users,
    title: "Founded by the Pandey Family",
    description: "Sanskar, Vidya, Sudhendu & Sanskriti Pandey created this to bridge donations and real impact.",
  },
  {
    icon: Sprout,
    title: "Quality Over Quantity",
    description: "Unlike dollar-a-tree initiatives, we invest deeply in every tree's long-term survival.",
  },
];

const MissionSection = () => {
  return (
    <section className="py-24 bg-gradient-earth">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Our Mission</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Strategic Reforestation with Real Impact
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Founded in 2025, My Planet My Tree was born from the Pandey family's belief that planting a tree should mean more than putting a seed in the ground. We are a high-impact organization focused on ensuring every tree planted thrives for decades.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our approach combines soil science, native biodiversity, and long-term maintenance to create forests that truly restore the Earth's lungs. 🌍
            </p>
          </div>
          <div className="relative">
            <img
              src={plantingTree}
              alt="Hands carefully planting a young sapling in rich soil"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-square"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-gold rounded-2xl -z-10" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item) => (
            <div
              key={item.title}
              className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <item.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
