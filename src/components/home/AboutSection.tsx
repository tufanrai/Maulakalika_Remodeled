import { Droplets, Mountain, Leaf, Users } from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "Hydropower Excellence",
    description:
      "Leveraging Nepal's abundant water resources with cutting-edge turbine technology.",
  },
  {
    icon: Mountain,
    title: "Himalayan Engineering",
    description:
      "Building resilient infrastructure adapted to the unique terrain of Nepal's mountains.",
  },
  {
    icon: Leaf,
    title: "Sustainable Future",
    description:
      "100% renewable energy generation with minimal environmental footprint.",
  },
  {
    icon: Users,
    title: "Community Impact",
    description:
      "Creating jobs and bringing reliable power to remote communities.",
  },
];

export function AboutSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Our Vision
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Powering Nepal's Future with Sustainable Energy
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine Nepal's natural hydropower potential with
            state-of-the-art engineering to deliver sustainable energy solutions
            for generations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
