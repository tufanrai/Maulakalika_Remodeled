import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Download, ArrowRight } from "lucide-react";

const reports = [
  {
    title: "Annual Report 2024/25",
    type: "Annual",
    date: "December 2024",
    pages: "52 pages",
  },
  {
    title: "Semi-Annual Report 2024",
    type: "Semi-Annual",
    date: "June 2024",
    pages: "28 pages",
  },
  {
    title: "Financial Statement FY 2023/24",
    type: "Financial",
    date: "April 2024",
    pages: "18 pages",
  },
];

export function ReportsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Transparency
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Annual & Semi-Annual Reports
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Transparent, accessible, and publicly available reports for
              stakeholders around the world. Download our comprehensive
              documentation showcasing financial performance and project
              progress.
            </p>
            <Button variant="default" size="lg" asChild>
              <Link to="/reports">
                View All Reports
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Reports Cards */}
          <div className="space-y-4">
            {reports.map((report, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-md transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors truncate">
                    {report.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {report.type} • {report.date} • {report.pages}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
