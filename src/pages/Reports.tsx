import { Layout } from "@/components/layout/Layout";
import {
  FileText,
  Download,
  Calendar,
  ArrowLeft,
  CalendarCog,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { fetchReports } from "@/api/files.api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// interface of the data receiving
interface IProps {
  title: string;
  type: string;
  date: string;
  pages: number;
  icon: any;
  url: string;
}

interface IFilter {
  value: string;
  name: string;
  selected: boolean;
}

const filters: IFilter[] = [
  { value: "Annual", name: "Annual Reports", selected: false },
  { value: "quarter_report", name: "Quarter Reports", selected: false },
  { value: "agm_report", name: "AGM Reports", selected: false },
];

const Reports = () => {
  const [Report, setReport] = useState<IProps[] | undefined>(undefined);
  const [filter, setFilter] = useState<string>("all");
  const [agmReports, setAGMReports] = useState<IProps[]>([]);
  const [annualReports, setAnnualReports] = useState<IProps[]>([]);
  const [quarterlyReports, setQuarterlyReports] = useState<IProps[]>([]);
  const [ext_filter, setExtFilter] = useState<string | null>(null);

  // fetch reports
  const { data } = useQuery({
    queryKey: ["Fetch the reports"],
    queryFn: fetchReports,
  });

  // set the reports
  useEffect(() => {
    if (!data?.files) {
      return;
    }

    const file = data?.files.map((report) => {
      return {
        title: report.title,
        type: report.type,
        date: report.date,
        pages: report.pages,
        url: report.url,
        icon: FileText,
      };
    });

    console.log(file);

    const agmreports = file.filter((report) => report.type === "agm_report");
    const quarterlyreports = file.filter(
      (report) => report.type === "quarter_report",
    );
    const annualreport = file.filter(
      (report) => report.type === undefined || report.type === "Annual",
    );

    setAGMReports(agmreports);
    setQuarterlyReports(quarterlyreports);
    setAnnualReports(annualreport);
    setReport(file);
  }, [data]);

  // Look for external filter
  useEffect(() => {
    const external_filter = sessionStorage.getItem("filter");
    if (filter) {
      setFilter(external_filter);

      const selectedFilter = filters.find((filter) => {
        if (filter.value === external_filter) filter.selected = true;
        return;
      });

      if (selectedFilter) setExtFilter(selectedFilter.name);
      setTimeout(() => {
        sessionStorage.removeItem("filter");
      }, 1000);
      return;
    }
    console.log("No filter available");
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-16 pb-12 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Reports & Documents
              <hr className="max-w-50 w-full h-1 rounded-full border-accent" />
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
          <div className="block w-full flex items-center justify-end px-4 py-2">
            {ext_filter && ext_filter !== null ? (
              <>
                <select
                  defaultValue={ext_filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="bg-foreground/10 text-foreground text-regural focus:outline-none"
                >
                  <option value="all">All Reports</option>
                  {filters.map((val, idx) => (
                    <option key={idx} value={val.value}>
                      {val.name}
                    </option>
                  ))}
                </select>
              </>
            ) : (
              <>
                <select
                  onChange={(e) => setFilter(e.target.value)}
                  className="bg-foreground/10 text-foreground text-regural focus:outline-none"
                >
                  <option value="all">All Reports</option>
                  {filters.map((val, idx) => (
                    <option key={idx} value={val.value}>
                      {val.name}
                    </option>
                  ))}
                </select>
              </>
            )}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Report && Report != undefined ? (
              <>
                {filter && filter !== "all" ? (
                  <>
                    {filter && filter !== "Annual" ? (
                      <>
                        {filter && filter !== "agm_report" ? (
                          <>
                            {quarterlyReports.map((report, idx) => (
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
                            {agmReports.map((report, idx) => (
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
                        )}
                      </>
                    ) : (
                      <>
                        {annualReports.map((report, idx) => (
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
                    )}
                  </>
                ) : (
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
                )}
              </>
            ) : (
              <>
                <div className="min-h-[60vh] md:col-span-2 lg:col-span-3 flex flex-col items-center justify-center">
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
