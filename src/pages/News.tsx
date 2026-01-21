import { Layout } from "@/components/layout/Layout";
import { Calendar, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchNews } from "@/api/files.api";
import { useEffect, useState } from "react";

// Interface of the data receiving
interface IProps {
  title: string;
  url: string;
  date: string;
  excerpt: string;
  category: string;
  _id: string;
}

const News = () => {
  const [news, setNews] = useState<IProps[] | undefined>(undefined);

  // Fetch datas
  const { data } = useQuery({
    queryKey: ["Fetch All News"],
    queryFn: fetchNews,
  });

  // join new news to the list
  useEffect(() => {
    const News = data?.all_news;
    setNews(News);
  }, [data]);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-16 pb-12 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              News & Updates
              <hr className="max-w-50 w-full h-1 rounded-full border-accent" />
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Latest News
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest developments, project milestones, and
              company announcements.
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news && news != undefined ? (
              <>
                {news.map((item, idx) => (
                  <article
                    key={idx}
                    className="rounded-xl overflow-hidden bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all group"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={item.url}
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
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-accent hover:text-white p-2"
                        asChild
                      >
                        <Link to={`/news/${item._id}`}>
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </article>
                ))}
              </>
            ) : (
              <>
                <div className="md:col-span-2 lg:col-span-3 min-h-[60vh] flex flex-col items-center justify-center mx-auto">
                  <h1 className="text-2xl font-bold text-foreground mb-4">
                    Article Not Found
                  </h1>
                  <Button asChild>
                    <Link to="/news">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to News
                    </Link>
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
