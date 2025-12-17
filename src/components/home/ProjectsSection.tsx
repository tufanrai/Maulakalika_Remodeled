import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchFiles } from "@/api/files.api";
import { useEffect, useState } from "react";

// iterface of the data to be displayed
interface IProps {
  title: string;
  capacity: string;
  status: string;
  description: string;
  url: string;
}

export function ProjectsSection() {
  // Query function to fetch all the data from the backend
  const { data } = useQuery({
    queryKey: ["Fetch recent data"],
    queryFn: fetchFiles,
  });

  const [Projects, setProjects] = useState<IProps[] | undefined>(undefined);

  useEffect(() => {
    setProjects(data?.files);
  }, [data]);

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
          {Projects && Projects != undefined ? (
            <>
              {Projects.map((project, idx) => (
                <Link
                  key={idx}
                  to="/projects"
                  className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={project.url}
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
  );
}
