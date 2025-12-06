import { Layout } from "@/components/layout/Layout";
import { Target, Eye, Users, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To harness Nepal's abundant hydropower potential through sustainable, environmentally responsible projects that benefit local communities and contribute to the nation's energy security.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To become a leading hydropower company in Nepal, recognized for engineering excellence, environmental stewardship, and positive community impact.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "We prioritize local employment, skill development, and infrastructure improvements in the communities where we operate.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in engineering, safety, and environmental compliance across all our projects.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-16 pb-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Powering Nepal, Empowering the World
            </h1>
            <p className="text-lg text-muted-foreground">
              Maulakalika Hydro Power Company Pvt. Ltd. is committed to developing Nepal's hydropower resources 
              through sustainable practices and cutting-edge engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to transform Nepal's energy landscape, Maulakalika Hydro Power Company 
                  has grown from a small local initiative to a significant player in the nation's hydropower sector.
                </p>
                <p>
                  Our journey began in the remote valleys of Nepal, where we saw firsthand the untapped potential 
                  of glacial rivers and mountain streams. Today, we operate multiple facilities with a combined 
                  capacity that powers tens of thousands of homes.
                </p>
                <p>
                  We believe in development that respects nature and uplifts communities. Every project we undertake 
                  is designed with environmental sustainability and social responsibility at its core.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop"
                alt="Himalayan mountains"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
