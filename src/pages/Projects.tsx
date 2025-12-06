import { Layout } from "@/components/layout/Layout";
import { Zap, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Upper Maulakalika Hydro Project",
    capacity: "42 MW",
    status: "Ongoing",
    location: "Maulakalika Region, Nepal",
    startYear: "2020",
    description: "A flagship run-of-river project harnessing the power of glacial streams. This project represents our commitment to sustainable energy development in Nepal's remote regions.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop",
    features: ["Run-of-river design", "Minimal environmental impact", "Community partnership"],
  },
  {
    title: "River Basin Diversion Project",
    capacity: "30 MW",
    status: "Planning",
    location: "Western Nepal",
    startYear: "2024",
    description: "Strategic water diversion infrastructure for optimized power generation. This innovative approach maximizes output while preserving natural waterways.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop",
    features: ["Diversion tunnel system", "Modern turbine technology", "Grid connectivity ready"],
  },
  {
    title: "Lower Valley Hydroelectric Station",
    capacity: "25 MW",
    status: "Completed",
    location: "Central Nepal",
    startYear: "2018",
    description: "Our first completed project, now successfully generating clean energy for thousands of households across the region.",
    image: "https://images.unsplash.com/photo-1518173946687-a4c036bc1c9a?w=800&auto=format&fit=crop",
    features: ["Fully operational", "25,000+ homes powered", "Zero carbon emissions"],
  },
];

const Projects = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-16 pb-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Our Projects
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Hydropower Projects Across Nepal
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our portfolio of hydropower projects, from planning stages to fully operational facilities. 
              Each project represents our commitment to sustainable energy and community development.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative overflow-hidden rounded-2xl group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                        <Zap className="w-3.5 h-3.5" />
                        {project.capacity}
                      </span>
                      <span className={`px-3 py-1.5 text-sm font-medium rounded-full ${
                        project.status === "Completed" 
                          ? "bg-green-500/90 text-white" 
                          : project.status === "Ongoing"
                          ? "bg-primary/90 text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {project.title}
                  </h2>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-accent" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-accent" />
                      Started {project.startYear}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((feature, fidx) => (
                      <span
                        key={fidx}
                        className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button variant="default" asChild>
                    <Link to="/contact">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Interested in Our Projects?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Contact us to learn more about partnership opportunities or to request detailed project documentation.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
