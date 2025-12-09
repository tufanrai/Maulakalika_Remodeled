import { Layout } from "@/components/layout/Layout";
import { useParams, Link } from "react-router-dom";
import { projects } from "@/lib/data";
import { Zap, MapPin, Calendar, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchSpecificFile } from "@/api/files.api";

interface ITimeline {
  year: string;
  milestone: string;
}

interface ITechSpecs {
  Type: string;
  headHeight: string;
  turbineType: string;
  annualGeneration: string;
  gridConnection: string;
}

interface IProps {
  title: string;
  url: string;
  category: string;
  capacity: string;
  status: "Completed" | "Ongoing" | "Planning";
  location: string;
  startYear: string;
  fullDescription: string;
  features: string[];
  timeline: ITimeline[];
  technicalSpecs: ITechSpecs[];
}
const ProjectDetail = () => {
  const [project, setProject] = useState<IProps | undefined>(undefined);
  const { id } = useParams();

  // Fetch data
  const { data } = useQuery({
    queryKey: ["Fetch the data"],
    queryFn: () => fetchSpecificFile(id),
  });

  console.log(data?.file);

  useEffect(() => {
    setProject(data?.file);
  }, [data]);

  if (!project) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Project Not Found
          </h1>
          <Button asChild>
            <Link to="/projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src={project.url}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 pb-12">
          <div className="container mx-auto px-4 lg:px-8">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="mb-4 text-white/80 hover:text-white hover:bg-white/10"
            >
              <Link to="/projects">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
            </Button>
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                <Zap className="w-3.5 h-3.5" />
                {project.capacity}
              </span>
              <span
                className={`px-3 py-1.5 text-sm font-medium rounded-full ${
                  project.status === "Completed"
                    ? "bg-green-500 text-white"
                    : project.status === "Ongoing"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {project.status}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-white/80">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                {project.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                Started {project.startYear}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Project Overview
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                {project.fullDescription.split("\n\n").map((paragraph, idx) => (
                  <p key={idx} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Features */}
              <div className="mt-10">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Key Features
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full"
                    >
                      <CheckCircle className="w-4 h-4" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Project Timeline
                </h3>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
                  <div className="space-y-6">
                    {project.timeline.map((item, idx) => (
                      <div key={idx} className="relative pl-12">
                        <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                          <span className="text-xs font-bold text-accent">
                            {idx + 1}
                          </span>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-accent">
                            {item.year}
                          </span>
                          <p className="text-foreground">{item.milestone}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Technical Specifications
                </h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm text-muted-foreground">
                      Project Type
                    </dt>
                    <dd className="text-foreground font-medium">
                      {project.technicalSpecs.at(0).Type}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">
                      Head Height
                    </dt>
                    <dd className="text-foreground font-medium">
                      {project.technicalSpecs.at(0).headHeight}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">
                      Turbine Type
                    </dt>
                    <dd className="text-foreground font-medium">
                      {project.technicalSpecs.at(0).turbineType}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">
                      Annual Generation
                    </dt>
                    <dd className="text-foreground font-medium">
                      {project.technicalSpecs.at(0).annualGeneration}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">
                      Grid Connection
                    </dt>
                    <dd className="text-foreground font-medium">
                      {project.technicalSpecs.at(0).gridConnection}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 pt-6 border-t border-border">
                  <Button variant="accent" className="w-full" asChild>
                    <Link to="/contact">Inquire About This Project</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
