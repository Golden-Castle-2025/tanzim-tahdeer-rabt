
import { FileText } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StrategyHeader from "@/components/strategy/StrategyHeader";
import StrategyDocument from "@/components/strategy/StrategyDocument";
import PageHeader from "@/components/layout/PageHeader";

const bucketName = "strategy_documents";
const documentPath = "current_strategy.pdf";

const Strategy = () => {
  // Fetch the current strategy document
  const { data: strategyDocument, isLoading, error: fetchError } = useQuery({
    queryKey: ["strategyDocument"],
    queryFn: async () => {
      try {
        const { data } = supabase.storage
          .from(bucketName)
          .getPublicUrl(documentPath);

        return { url: data.publicUrl, exists: true };
      } catch (error) {
        console.error("خطأ في استرجاع الوثيقة:", error);
        return { url: "", exists: false };
      }
    },
  });

  if (fetchError) {
    console.error("فشل في تحميل الوثيقة:", fetchError);
  }

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      <main className="flex-grow">
        <PageHeader 
          title="استراتيجية المجلس" 
          subtitle="وثيقة استراتيجية مجلس تطوير القطاع الخاص" 
        />

        <div className="container mx-auto py-6 px-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            {isLoading ? (
              <div className="text-center py-10">جاري التحميل...</div>
            ) : strategyDocument?.exists && strategyDocument.url ? (
              <div className="mb-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gov-blue">وثيقة الاستراتيجية</h2>
                  <a 
                    href={strategyDocument.url} 
                    download 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gov-blue text-white rounded-md hover:bg-gov-blue/90 transition-colors"
                  >
                    <FileText className="h-4 w-4" />
                    تنزيل الوثيقة
                  </a>
                </div>
                
                <div className="aspect-video border border-gray-300 rounded-lg overflow-hidden">
                  <iframe 
                    src={`${strategyDocument.url}#toolbar=0`} 
                    className="w-full h-full" 
                    style={{ height: '70vh' }}
                    title="وثيقة استراتيجية المجلس"
                  />
                </div>
              </div>
            ) : (
              <div className="text-center py-10 border border-dashed border-gray-300 rounded-lg">
                <FileText className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-gray-500">لا توجد وثيقة استراتيجية حالياً</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Strategy;
