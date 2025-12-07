import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroDam from "@/assets/istockphoto-1748155170-640_adpp_is.mp4";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <video
          src={heroDam}
          muted
          loop
          autoPlay
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground">
              Sustainable Energy Solutions
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Clean Energy from the Heart of{" "}
            <span className="text-accent">Nepal</span>
          </h1>

          <p
            className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Introducing Maulakalika Hydro Power Company Pvt. Ltd. to the world —
            harnessing the power of Himalayan rivers for a sustainable future.
          </p>

          <div
            className="flex flex-wrap gap-4 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/projects">
                View Our Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/3d-models">
                <Play className="w-5 h-5" />
                Explore 3D Models
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div
            className="mt-16 grid grid-cols-3 gap-8 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { value: "72+", label: "MW Capacity" },
              { value: "10+", label: "Years Experience" },
              { value: "100%", label: "Clean Energy" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center md:text-left">
                <p className="text-3xl md:text-4xl font-bold text-accent">
                  {stat.value}
                </p>
                <p className="text-sm text-primary-foreground/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
