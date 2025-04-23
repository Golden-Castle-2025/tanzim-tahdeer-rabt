
import { useQuery } from "@tanstack/react-query";
import { FileText, Download } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const mockReports = [
  {
    id: "1",
    title: "التقرير السنوي 2024",
    report_date: "2024-03-15",
    content: "/reports/annual-report-2024.pdf",
    type: "annual"
  }
];

const AnnualReport = () => {
  const { data: reports, isLoading } = useQuery({
    queryKey: ["annual-reports"],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      return mockReports;
    },
  });

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gov-blue mb-8">التقارير السنوية</h1>
          
          {isLoading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gov-blue"></div>
            </div>
          ) : (
            <div className="grid gap-4">
              {reports?.map((report) => (
                <div
                  key={report.id}
                  className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gov-lightblue rounded-full">
                      <FileText className="text-gov-blue h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gov-blue">
                        {report.title}
                      </h3>
                      <p className="text-gov-darkgray mt-1">
                        {new Date(report.report_date).toLocaleDateString("ar-SA")}
                      </p>
                    </div>
                  </div>
                  
                  <a
                    href={report.content}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gov-blue hover:text-gov-gold transition-colors"
                  >
                    <span>تحميل التقرير</span>
                    <Download className="h-5 w-5" />
                  </a>
                </div>
              ))}

              {reports?.length === 0 && (
                <div className="text-center py-8 text-gov-darkgray">
                  لا توجد تقارير متاحة حالياً
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AnnualReport;
