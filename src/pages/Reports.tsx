import { Layout } from "@/components/layout/Layout";
import { FileText, Download, Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { fetchReports } from "@/api/files.api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

// interface of the data receiving
interface IProps {
  title: string;
  type: string;
  date: string;
  pages: number;
  icon: any;
  url: string;
}

const Reports = () => {
  // fetch reports
  const { data } = useQuery({
    queryKey: ["Fetch the reports"],
    queryFn: fetchReports,
  });

  // set the reports
  const [Report, setReport] = useState<IProps[] | undefined>(undefined);
  useEffect(() => {
    if (!data?.files) {
      return;
    }

    const file = data?.files.map((report) => {
      return {
        title: report.title,
        type: report.Type,
        date: report.date,
        pages: report.pages,
        url: report.url,
        icon: FileText,
      };
    });

    setReport(file);
  }, [data]);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-16 pb-12 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Reports & Documents
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Transparent Reporting
            </h1>
            <p className="text-lg text-muted-foreground">
              Access our comprehensive reports and financial documents. We
              believe in transparency and accountability to all our
              stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Reports List */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Report && Report != undefined ? (
              <>
                {Report.map((report, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                        <report.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="inline-block px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded mb-2">
                          {report.type}
                        </span>
                        <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2 truncate">
                          {report.title}
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {report.date}
                          </span>
                          <span>{report.pages} pages</span>
                        </div>
                      </div>
                    </div>
                    <a href={report.url}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full mt-4 group-hover:border-accent group-hover:text-white"
                      >
                        <Download className="w-4 h-4" />
                        Download PDF
                      </Button>
                    </a>
                  </div>
                ))}
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reports;
