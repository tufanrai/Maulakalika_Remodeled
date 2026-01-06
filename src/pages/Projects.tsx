import { Layout } from "@/components/layout/Layout";
import { Zap, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchFiles } from "@/api/files.api";
import { useEffect, useState } from "react";

// interface of the data receiving
interface IProps {
  title: string;
  url: string;
  capacity: string;
  status: "Ongoing" | "Planning" | "Completed";
  location: string;
  startYear: string;
  description: string;
  features: string;
  _id: string;
}

const Projects = () => {
  const [Projects, setProjects] = useState<IProps[] | undefined>(undefined);

  // Fetching data
  const { data } = useQuery({
    queryKey: ["Fetch all projects"],
    queryFn: fetchFiles,
  });

  useEffect(() => {
    setProjects(data?.files);
  }, [data]);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-16 pb-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Our Projects
              <hr className="max-w-50 w-full h-1 rounded-full border-accent" />
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Hydropower Projects Across Nepal
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our portfolio of hydropower projects, from planning stages
              to fully operational facilities. Each project represents our
              commitment to sustainable energy and community development.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {Projects && Projects != undefined ? (
              <>
                {Projects.map((project, idx) => (
                  <div
                    key={idx}
                    className={`grid lg:grid-cols-2 gap-8 items-center ${
                      idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="relative overflow-hidden rounded-2xl group">
                        <img
                          src={project.url}
                          alt={project.title}
                          className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                            <Zap className="w-3.5 h-3.5" />
                            {project.capacity}
                          </span>
                          <span
                            className={`px-3 py-1.5 text-sm font-medium rounded-full ${
                              project.status === "Completed"
                                ? "bg-green-500/90 text-white"
                                : project.status === "Ongoing"
                                ? "bg-primary/90 text-primary-foreground"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
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
                        {project.features.split(",").map((feature, fidx) => (
                          <span
                            key={fidx}
                            className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <Button variant="default" asChild>
                        <Link to={`/projects/${project._id}`}>
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                <section className="w-full h-1/2 flex items-center justify-center">
                  <div className="min-h-[60vh] flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-bold text-foreground mb-4">
                      Something went wrong please refresh the page!
                    </h1>
                  </div>
                </section>
              </>
            )}
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
            Contact us to learn more about partnership opportunities or to
            request detailed project documentation.
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
