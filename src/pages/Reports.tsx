import { Layout } from "@/components/layout/Layout";
import { FileText, Download, Calendar, FileSpreadsheet } from "lucide-react";
import { Button } from "@/components/ui/button";

const reports = [
  { title: "Annual Report 2024/25", type: "Annual", date: "December 2024", pages: 52, icon: FileText },
  { title: "Semi-Annual Report 2024", type: "Semi-Annual", date: "June 2024", pages: 28, icon: FileText },
  { title: "Financial Statement FY 2023/24", type: "Financial", date: "April 2024", pages: 18, icon: FileSpreadsheet },
  { title: "Annual Report 2023/24", type: "Annual", date: "December 2023", pages: 48, icon: FileText },
  { title: "AGM Minutes 2024", type: "AGM", date: "October 2024", pages: 12, icon: FileText },
  { title: "Semi-Annual Report 2023", type: "Semi-Annual", date: "June 2023", pages: 24, icon: FileText },
];

const Reports = () => {
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
              Access our comprehensive reports and financial documents. We believe in transparency 
              and accountability to all our stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Reports List */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((report, idx) => (
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
                <Button variant="outline" size="sm" className="w-full mt-4 group-hover:border-accent group-hover:text-accent">
                  <Download className="w-4 h-4" />
                  Download PDF
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reports;
