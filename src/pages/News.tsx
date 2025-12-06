import { Layout } from "@/components/layout/Layout";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const newsItems = [
  {
    title: "Upper Maulakalika Project Reaches 80% Completion",
    excerpt: "Major milestone achieved as the flagship 42 MW project nears operational readiness.",
    date: "November 28, 2024",
    category: "Project Update",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format&fit=crop",
  },
  {
    title: "Annual General Meeting 2024 Successfully Concluded",
    excerpt: "Shareholders gather to review company performance and approve strategic plans for the coming year.",
    date: "October 15, 2024",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1560439514-e960a3ef5019?w=600&auto=format&fit=crop",
  },
  {
    title: "New Partnership Announced for Grid Infrastructure",
    excerpt: "Strategic collaboration to enhance power transmission capabilities across the region.",
    date: "September 5, 2024",
    category: "Partnership",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&auto=format&fit=crop",
  },
];

const News = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-16 pb-12 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              News & Updates
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Latest News
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest developments, project milestones, and company announcements.
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, idx) => (
              <article
                key={idx}
                className="rounded-xl overflow-hidden bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all group"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {item.excerpt}
                  </p>
                  <Button variant="ghost" size="sm" className="text-accent hover:text-accent p-0">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
