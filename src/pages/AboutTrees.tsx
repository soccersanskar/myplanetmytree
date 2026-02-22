import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TreesSection from "@/components/TreesSection";
import { TreePine, Leaf, Droplets, Wind, Sun, Mountain, Heart } from "lucide-react";

const AboutTrees = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <TreesSection />

      {/* Long-form article */}
      <article className="py-24 bg-gradient-earth">
        <div className="container mx-auto px-6 max-w-4xl">
          <header className="mb-16 text-center">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Deep Dive</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              The Complete Guide to Trees & Our Planet
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              An in-depth exploration of why trees are the single most important natural resource for the future of life on Earth.
            </p>
          </header>

          <div className="prose-custom space-y-16">
            {/* Section 1 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Wind className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-foreground">Trees & Carbon: Earth's Natural Air Purifiers</h3>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Trees are among the most effective carbon sinks on the planet. Through the process of photosynthesis, a single mature tree can absorb approximately 22 kilograms of carbon dioxide per year, while releasing enough oxygen for two human beings. Over the course of its lifetime, one tree can sequester over a tonne of CO₂ from the atmosphere.
                </p>
                <p>
                  Forests collectively absorb roughly 2.6 billion tonnes of carbon dioxide each year—about 30% of all human CO₂ emissions. The Amazon rainforest alone stores an estimated 150–200 billion tonnes of carbon. When we lose forests to deforestation, that stored carbon is released back into the atmosphere, accelerating climate change in a devastating feedback loop.
                </p>
                <p>
                  Recent research published in <em>Science</em> magazine suggests that planting 1.2 trillion trees across the globe could capture up to two-thirds of all the CO₂ that humans have pumped into the atmosphere since the Industrial Revolution. This represents the single most effective climate change solution available today—far cheaper than any engineered technology and requiring no ongoing energy input.
                </p>
                <p>
                  Urban trees are especially valuable. A strategically placed tree in a city absorbs pollutants like nitrogen dioxide, sulphur dioxide, and particulate matter. Studies from the US Forest Service show that urban trees remove 711,000 tonnes of air pollution annually in the United States alone, providing health benefits worth $3.8 billion.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Droplets className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-foreground">The Water Cycle: How Trees Regulate Rainfall</h3>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Trees play a critical role in the water cycle that most people never consider. A single large oak tree can transpire over 150,000 litres of water per year, releasing moisture into the atmosphere that forms clouds and returns as rainfall. In tropical forests, this process generates so-called "flying rivers"—massive atmospheric streams of moisture that travel thousands of kilometres to bring rain to distant regions.
                </p>
                <p>
                  The Amazon rainforest generates approximately 50–75% of its own rainfall through transpiration. Deforestation disrupts this cycle, leading to reduced rainfall not just locally but across entire continents. Scientists have linked Amazon deforestation to droughts in São Paulo, Buenos Aires, and even regions as far away as the American Midwest.
                </p>
                <p>
                  Tree roots also act as natural water filters. As rainwater percolates through the soil around tree roots, contaminants are absorbed and broken down by the tree's root system and the microorganisms that live in symbiosis with it. A mature tree can filter up to 100 gallons of water per day, making forests the world's most cost-effective water treatment plants.
                </p>
                <p>
                  In watersheds, forests prevent erosion and sedimentation that would otherwise choke rivers and reduce water quality. New York City famously invested $1.5 billion in protecting the forests of the Catskill Mountains rather than spending $6–8 billion on a conventional water filtration plant—a decision that continues to provide clean drinking water to 9 million people.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Leaf className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-foreground">Biodiversity: The Living Cathedrals of Nature</h3>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  A single tree can be home to hundreds of species. An old-growth oak in a temperate forest may host over 2,300 species of invertebrates, fungi, mosses, lichens, and birds. In tropical forests, this number is even higher—a single hectare of Amazonian rainforest can contain over 400 species of trees alone, more than exist in all of North America combined.
                </p>
                <p>
                  Forests cover about 31% of the Earth's land surface, yet they harbour approximately 80% of the world's terrestrial biodiversity. This includes 60,000 tree species, 80% of amphibian species, 75% of bird species, and 68% of mammal species. The canopy, understory, forest floor, and root systems each create distinct micro-habitats that support unique communities of organisms.
                </p>
                <p>
                  The relationship between trees and fungi deserves special mention. The "Wood Wide Web"—a vast underground network of mycorrhizal fungi—connects trees across entire forests. Through this network, trees share nutrients, water, and even chemical warning signals about pest attacks. Mother trees use these fungal networks to preferentially feed their seedlings, directing carbon and nutrients to the next generation. When a tree is dying, it dumps its remaining resources into the network for neighbouring trees to use.
                </p>
                <p>
                  Dead trees are almost as ecologically important as living ones. A fallen log can take 50–100 years to fully decompose, during which time it provides habitat for woodpeckers, owls, salamanders, beetles, and countless fungi. In managed forests where dead wood is removed, biodiversity drops by up to 50%. This is why conservation biologists advocate for leaving dead trees standing and fallen logs in place.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sun className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-foreground">Urban Forests: Cooling Our Cities</h3>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Cities are heat islands—concrete, asphalt, and steel absorb and radiate heat, making urban areas 1–7°F hotter than surrounding rural landscapes. Trees combat this through two mechanisms: shade (blocking solar radiation) and evapotranspiration (releasing water vapour that cools the air). A single mature tree can produce the cooling equivalent of 10 room-sized air conditioners running 20 hours a day.
                </p>
                <p>
                  Research from the University of Wisconsin found that neighbourhoods with mature tree canopy cover had surface temperatures up to 10°F lower than treeless areas in the same city. This isn't just about comfort—heat-related illness kills more people than hurricanes, tornadoes, floods, and lightning combined. Urban trees are literally life-saving infrastructure.
                </p>
                <p>
                  Trees also reduce energy consumption dramatically. The US Department of Energy estimates that strategically planted trees around buildings can reduce air conditioning costs by 25–40% and heating costs by 10–20% (by serving as windbreaks in winter). Across the United States, urban trees save an estimated $7.8 billion in energy costs annually.
                </p>
                <p>
                  Beyond temperature, urban trees reduce noise pollution by absorbing and deflecting sound waves. A belt of trees 30 metres wide can reduce noise by 6–10 decibels. They also reduce stormwater runoff—a major cause of urban flooding—by intercepting rainfall in their canopy and absorbing it through their roots. A mature deciduous tree can intercept 500–760 gallons of stormwater per year.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mountain className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-foreground">Soil & Erosion: The Hidden Root Network</h3>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Beneath every tree lies a root system that can extend two to three times the width of the canopy above. These roots bind soil particles together, preventing erosion from wind and water. In mountainous regions, tree roots stabilize slopes and prevent landslides. The devastating mudslides that have struck deforested hillsides in Southeast Asia, Central America, and East Africa are a tragic testament to what happens when trees are removed from steep terrain.
                </p>
                <p>
                  Tree roots also improve soil structure by creating channels that allow water to infiltrate rather than run off the surface. This increases groundwater recharge and reduces flooding downstream. A forested watershed can absorb up to 18 inches of precipitation before producing any surface runoff, compared to just 1–2 inches for a paved or deforested surface.
                </p>
                <p>
                  Leaf litter—the annual deposit of fallen leaves, twigs, and fruit—is the foundation of soil fertility. As this organic matter decomposes, it releases nutrients back into the soil, feeds earthworms and micro-organisms, and builds humus, the dark, carbon-rich substance that gives healthy soil its characteristic colour and sponge-like structure. A single hectare of deciduous forest produces 3–6 tonnes of leaf litter per year.
                </p>
                <p>
                  Trees also fix nitrogen through symbiotic relationships with bacteria in their root nodules (particularly leguminous trees like acacias and alders). This natural fertilisation enriches the soil without any chemical inputs, making trees essential components of sustainable agroforestry systems that feed millions of people in the developing world.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-foreground">Trees & Human Health: The Healing Power of Forests</h3>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  The Japanese practice of <em>shinrin-yoku</em> (forest bathing) has gained worldwide recognition as research validates what cultures have known for millennia: spending time among trees is profoundly healing. Studies show that a two-hour forest walk reduces cortisol levels by 16%, blood pressure by 2%, and heart rate by 4%. The effects can last for up to a week after a single visit.
                </p>
                <p>
                  Trees release volatile organic compounds called phytoncides—natural oils that form part of their defence system against insects and disease. When humans inhale these compounds, our bodies respond by increasing the number and activity of natural killer (NK) cells, a type of white blood cell that fights infections and tumours. A three-day forest visit has been shown to increase NK cell activity by 50%, with the boost lasting for more than 30 days.
                </p>
                <p>
                  Hospital patients with views of trees recover faster from surgery, require fewer painkillers, and have fewer post-operative complications than patients with views of walls. Children with ADHD show significant symptom reduction after spending time in green spaces with trees. And elderly residents of neighbourhoods with tree cover have been found to have lower rates of depression, cardiovascular disease, and all-cause mortality.
                </p>
                <p>
                  The economic value of these health benefits is staggering. A study by the US Forest Service estimated that urban trees in the United States provide $6.8 billion in healthcare savings annually. In an era of rising healthcare costs and mental health crises, investing in tree planting may be one of the most cost-effective public health interventions available.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <TreePine className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-foreground">The Future: Planting for Generations</h3>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  The best time to plant a tree was twenty years ago. The second best time is now. Reforestation and afforestation represent humanity's most powerful, most scalable, and most cost-effective tool for combating climate change, protecting biodiversity, securing water supplies, and improving human health. Every tree planted is an investment in the future—a gift to generations we will never meet.
                </p>
                <p>
                  At <strong>My Planet My Tree</strong>, we believe that every individual can make a meaningful difference. A single tree may seem small against the scale of global deforestation (approximately 10 million hectares lost per year), but the collective impact of millions of people each planting or sponsoring a tree is transformative. The Billion Tree Campaign, launched by the United Nations in 2006, has already resulted in over 15 billion trees being planted worldwide.
                </p>
                <p>
                  The trees we plant today will clean our air, filter our water, cool our cities, shelter our wildlife, and heal our bodies for decades and centuries to come. They will stand as living monuments to our commitment to the planet—growing, breathing, giving, long after we are gone. This is the promise of a tree: patient, enduring, and generous beyond measure.
                </p>
                <p>
                  Join us. Plant a tree. Change the world—one root, one branch, one leaf at a time.
                </p>
              </div>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default AboutTrees;
