import { Layout } from "@/components/layout/Layout";
import {
  Target,
  Eye,
  Users,
  Award,
  Leaf,
  ScrollIcon,
  ShieldCheck,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Innovation & Excellence",
    description:
      "We continuously adopt modern technologies, innovative solutions, and best industry practices to improve efficiency and sustainability.",
  },
  {
    icon: Eye,
    title: "Integrity",
    description:
      "We uphold honesty, fairness, and ethical standards in all our business operations.",
  },
  {
    icon: Users,
    title: "Respect & Partnership",
    description:
      "We value strong, respectful relationships with stakeholders, communities, and institutional partners.",
  },
  {
    icon: Award,
    title: "Good Governance",
    description:
      "We practice transparent decision-making, responsible management, and full compliance with national laws and regulations.",
  },
  {
    icon: ScrollIcon,
    title: "Accountability",
    description:
      "We take responsibility for our actions and remain committed to delivering high-quality results and performance excellence.",
  },
  {
    icon: Leaf,
    title: "Environmental & Social Responsibility",
    description:
      "We prioritize environmental protection, community welfare, and sustainable development in all project activities.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Reliability",
    description:
      "We ensure safe working environments and reliable, uninterrupted hydropower operations.",
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
              <hr className="max-w-50 w-full h-1 rounded-full border-accent" />
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Powering Nepal, Empowering the World
            </h1>
            <p className="text-lg text-muted-foreground">
              Maula Kalika Hydropower Company Ltd. is committed to developing
              Nepal's hydropower resources through sustainable practices and
              cutting-edge engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-justify text-muted-foreground leading-relaxed">
                <p>
                  Maula Kalika Hydropower Company Ltd is a newly established
                  hydropower company in Nepal, founded by a team of highly
                  experienced professionals with a strong track record in the
                  energy sector. Leveraging years of expertise in hydropower
                  development, the company was formed to deliver sustainable,
                  reliable, and socially responsible energy solutions that
                  contribute to Nepal’s clean energy future and long-term energy
                  self-reliance.
                </p>
                <p>
                  While the company itself is newly initiated, its founders
                  bring extensive experience from prior engagements in other
                  hydropower and infrastructure projects, ensuring that Maula
                  Kalika Hydropower Company Ltd operates with a deep
                  understanding of technical excellence, operational efficiency,
                  and industry best practices. This knowledge serves as the
                  foundation for every project, enabling the company to meet
                  international standards in engineering, safety, and
                  environmental stewardship.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop"
                alt="Himalayan mountains"
                className="rounded-2xl shadow-lg ease-in-out duration-500 scale-100 hover:scale-105 hover:shadow-xl hover:shadow-foreground/30"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg ">
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
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-justify leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship project */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop"
                alt="Himalayan mountains"
                className="rounded-2xl shadow-lg ease-in-out duration-500 scale-100 hover:scale-105 hover:shadow-xl hover:shadow-foreground/30"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Flagship Project
              </h2>
              <div className="space-y-4 text-justify text-muted-foreground leading-relaxed">
                <p>
                  The company’s first project, the Kalika Kaligandaki Hydropower
                  Project (KKHEP), is a 47.7 MW initiative that harnesses
                  Nepal’s indigenous water resources to generate clean,
                  reliable, and renewable electricity. This flagship project
                  plays a crucial role in strengthening national power
                  generation capacity, enhancing energy security, and reducing
                  reliance on imported energy. Beyond electricity generation,
                  KKHEP supports local economic growth by creating employment
                  opportunities, developing community infrastructure, and
                  engaging closely with surrounding communities to ensure shared
                  benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Members */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl text-end font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-justify text-muted-foreground leading-relaxed">
                <p>
                  Maula Kalika Hydropower Company Ltd is a newly established
                  hydropower company in Nepal, founded by a team of highly
                  experienced professionals with a strong track record in the
                  energy sector. Leveraging years of expertise in hydropower
                  development, the company was formed to deliver sustainable,
                  reliable, and socially responsible energy solutions that
                  contribute to Nepal’s clean energy future and long-term energy
                  self-reliance.
                </p>
                <p>
                  While the company itself is newly initiated, its founders
                  bring extensive experience from prior engagements in other
                  hydropower and infrastructure projects, ensuring that Maula
                  Kalika Hydropower Company Ltd operates with a deep
                  understanding of technical excellence, operational efficiency,
                  and industry best practices. This knowledge serves as the
                  foundation for every project, enabling the company to meet
                  international standards in engineering, safety, and
                  environmental stewardship.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop"
                alt="Himalayan mountains"
                className="rounded-2xl shadow-lg ease-in-out duration-500 scale-100 hover:scale-105 hover:shadow-xl hover:shadow-foreground/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Personals behind the frames.
            </p>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default About;
