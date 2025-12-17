import { Layout } from "@/components/layout/Layout";
import { useParams, Link } from "react-router-dom";
import { Calendar, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { fetchNews, FetchSpecificNews } from "@/api/files.api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

// Interface of the data receiving
interface IProps {
  title: string;
  category: string;
  date: string;
  url: string;
  description: string;
}
const NewsDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<IProps | undefined>(undefined);
  const [relatedArticle, setRelatedArticle] = useState<any | null>(null);

  // fetch details
  const { data } = useQuery({
    queryKey: ["Fetch detailed info"],
    queryFn: () => FetchSpecificNews(id),
  });

  // fetching some more data for next news
  useEffect(() => {
    let article = data?.specific_news;

    setArticle(article);
  }, [data]);

  // copy the url on the clipboard
  const copyUrl = async () => {
    try {
      const url = window.location.href;
      await navigator.clipboard.writeText(url);
      toast.success("Url copied to clipboard successfully");
    } catch (err: any) {
      console.log(err);
    }
  };

  // fetch next news
  useEffect(() => {
    async function fetchOtherNews() {
      try {
        const resp = await fetchNews();
        setRelatedArticle(
          resp?.all_news.filter((n) => n._id !== id).slice(0, 2)
        );
      } catch (err) {
        console.log(err);
      }
    }
    fetchOtherNews();
  }, [data]);

  if (!article) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
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
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[350px]">
        <div className="absolute inset-0">
          <img
            src={article.url}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 pb-12">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="mb-4 text-neutral-400 hover:text-white hover:bg-neutral-100/20"
            >
              <Link to="/news">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to News
              </Link>
            </Button>
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5 text-neutral-400 text-sm">
                <Calendar className="w-4 h-4" />
                {article.date}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-300 leading-tight">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-end mb-8">
              <Button onClick={copyUrl} variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </Button>
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              {article.description.split("\n\n").map((block, idx) => {
                if (block.startsWith("## ")) {
                  return (
                    <h2
                      key={idx}
                      className="text-xl font-bold text-foreground mt-8 mb-4"
                    >
                      {block.replace("## ", "")}
                    </h2>
                  );
                }
                if (block.startsWith("**") && block.includes(":**")) {
                  return (
                    <p key={idx} className="text-foreground font-semibold mb-2">
                      {block.replace(/\*\*/g, "")}
                    </p>
                  );
                }
                if (block.startsWith("- ")) {
                  const items = block.split("\n");
                  return (
                    <ul
                      key={idx}
                      className="list-disc list-inside space-y-2 text-muted-foreground mb-4"
                    >
                      {items.map((item, i) => (
                        <li key={i}>{item.replace("- ", "")}</li>
                      ))}
                    </ul>
                  );
                }
                if (block.match(/^\d\./)) {
                  const items = block.split("\n");
                  return (
                    <ol
                      key={idx}
                      className="list-decimal list-inside space-y-2 text-muted-foreground mb-4"
                    >
                      {items.map((item, i) => (
                        <li key={i}>{item.replace(/^\d\.\s/, "")}</li>
                      ))}
                    </ol>
                  );
                }
                return (
                  <p
                    key={idx}
                    className="text-muted-foreground mb-4 leading-relaxed"
                  >
                    {block}
                  </p>
                );
              })}
            </article>

            {/* Related Articles */}
            {relatedArticle && relatedArticle !== null ? (
              <>
                {relatedArticle.length > 0 && (
                  <div className="mt-16 pt-12 border-t border-border">
                    <h3 className="text-xl font-bold text-foreground mb-6">
                      Related News
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {relatedArticle.map((item) => (
                        <Link
                          key={item._id}
                          to={`/news/${item._id}`}
                          className="group flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors"
                        >
                          <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                            <img
                              src={item.url}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-xs text-accent font-medium">
                              {item.category}
                            </span>
                            <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2 mt-1">
                              {item.title}
                            </h4>
                            <span className="text-xs text-muted-foreground mt-2 block">
                              {item.date}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsDetail;
