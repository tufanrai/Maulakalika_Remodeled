import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const projects = [
  {
    title: "Upper Maulakalika Hydro Project",
    capacity: "42 MW",
    status: "Ongoing",
    description:
      "A flagship run-of-river project harnessing the power of glacial streams.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop",
  },
  {
    title: "River Basin Diversion Project",
    capacity: "30 MW",
    status: "Planning",
    description:
      "Strategic water diversion infrastructure for optimized power generation.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop",
  },
];

export function ProjectsSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Our Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Major Hydropower Projects
            </h2>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <Link to="/projects">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <Link
              key={idx}
              to="/projects"
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                    <Zap className="w-3.5 h-3.5" />
                    {project.capacity}
                  </span>
                  <span className="text-xs text-muted-foreground px-2 py-1 bg-muted rounded-full">
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
