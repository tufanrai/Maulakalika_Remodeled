import { Layout } from "@/components/layout/Layout";
import { Box, RotateCcw, ZoomIn, Move } from "lucide-react";

const models = [
  {
    title: "Powerhouse Exterior",
    description:
      "Complete 3D visualization of the main powerhouse structure with turbine hall and control room.",
  },
  {
    title: "Turbine Hall Structure",
    description:
      "Internal view of the turbine installation including Francis turbines and generator assembly.",
  },
  {
    title: "Dam Structure",
    description:
      "Architectural model of the main dam with spillway gates and intake structures.",
  },
  {
    title: "Penstock System",
    description:
      "High-pressure water conveyance system from reservoir to powerhouse.",
  },
];

const ThreeDModels = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-16 pb-12 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              3D Models
              <hr className="max-w-50 w-full h-1 rounded-full border-accent" />
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Interactive 3D Visualization
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore detailed 3D models of our hydropower infrastructure.
              Experience our engineering projects with real-time visualization
              technology.
            </p>
          </div>
        </div>
      </section>

      {/* Controls Info */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-accent" />
              <span>Click & Drag to Rotate</span>
            </div>
            <div className="flex items-center gap-2">
              <ZoomIn className="w-4 h-4 text-accent" />
              <span>Scroll to Zoom</span>
            </div>
            <div className="flex items-center gap-2">
              <Move className="w-4 h-4 text-accent" />
              <span>Right Click to Pan</span>
            </div>
          </div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {models.map((model, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden bg-card border border-border hover:border-accent/50 transition-all"
              >
                {/* 3D Viewer Placeholder */}
                <div className="aspect-[16/10] bg-muted/50 flex items-center justify-center relative">
                  <div className="text-center">
                    <Box className="w-16 h-16 text-accent/50 mx-auto mb-4" />
                    <p className="text-muted-foreground text-sm">
                      3D Model Viewer
                    </p>
                    <p className="text-muted-foreground/60 text-xs mt-1">
                      Integration Ready
                    </p>
                  </div>
                  <div className="absolute inset-0 border-2 border-dashed border-border/50 m-4 rounded-lg" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    {model.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {model.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-8 rounded-xl bg-muted/30 border border-border">
            <Box className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              More Models Coming Soon
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              We're continuously adding new 3D models of our infrastructure.
              Check back for updates or contact us for specific model requests.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ThreeDModels;
