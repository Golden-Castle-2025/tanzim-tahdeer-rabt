import { useState, useEffect } from "react";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const GeneralAssembly = () => {
  const [documentUrl, setDocumentUrl] = useState<string | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  
  // التحقق من وجود ملف سابق عند تحميل المكون
  useEffect(() => {
    async function fetchLatestDocument() {
      try {
        const { data, error } = await supabase.storage
          .from('internal_docs')
          .list('', {
            limit: 1,
            sortBy: { column: 'created_at', order: 'desc' }
          });

        if (error) throw error;
        
        if (data && data.length > 0) {
          const { data: { publicUrl } } = supabase.storage
            .from('internal_docs')
            .getPublicUrl(data[0].name);
            
          setDocumentUrl(publicUrl);
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    }
    
    fetchLatestDocument();
  }, []);

  const openPreview = () => {
    if (documentUrl) {
      setIsPreviewOpen(true);
    }
  };

  return (
    <section className="py-12 bg-gray-50 mb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gov-blue mb-8 text-right">الهيئة العامة</h2>
        
        <div className="bg-white p-8 rounded-lg shadow-md text-right mb-8">
          <div className="flex justify-end mb-4">
            <div className="p-3 bg-gov-lightblue rounded-full">
              <FileText className="h-8 w-8 text-gov-blue" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-gov-blue mb-4">النظام الداخلي والهيكل التنظيمي</h3>
          <p className="text-gray-700 mb-6">
            تتكون الهيئة العامة ضمن هذا النظام من ممثلي الاتحادات والنقابات والجمعيات وممثلي القطاع الخاص وتتكون من (203) عضو عند التأسيس تم اختيارهم وفق المعايير والآليات المعتمدة بالاتفاق بين وزارة التخطيط والجهات أعلاه، مع مراعاة تمثيل ��لنساء والشباب والمحافظات ومكونات الشعب العراقي ضمن عضوية هذه الهيئة.
          </p>
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gov-blue mb-3">معايير العضوية:</h4>
            <ul className="list-disc list-inside space-y-2 pr-4">
              <li>معيار رأس المال (الكفاءة المالية)</li>
              <li>معيار حجم المشاريع الاستثمارية أو الأعمال المنفذة</li>
              <li>معيار تشغيل الأيدي العاملة</li>
              <li>معيار سنوات الخبرة والكفاءة</li>
              <li>معيار المساهمات المجتمعية ذات النفع العام</li>
              <li>معيار الالتزام بدفع الضرائب</li>
              <li>معيار تسجيل العاملين ضمن دائرة الضمان الاجتماعي في وزارة العمل والشؤون الاجتماعية</li>
            </ul>
          </div>
          <div className="flex flex-wrap justify-end items-center gap-4">
            {documentUrl && (
              <Button
                className="bg-gov-blue hover:bg-gov-gold flex items-center gap-2"
                onClick={() => window.open(documentUrl, '_blank')}
              >
                <Download size={18} />
                <span>تحميل النظام الداخلي</span>
              </Button>
            )}
          </div>
          
          {documentUrl && (
            <div className="mt-6">
              <Button
                variant="outline"
                className="w-full text-gov-blue border-gov-blue hover:bg-gov-blue/10"
                onClick={openPreview}
              >
                عرض النظام الداخلي
              </Button>
            </div>
          )}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md text-right">
          <h3 className="text-xl font-bold text-gov-blue mb-4">مهام الهيئة العامة</h3>
          <ul className="list-disc list-inside space-y-3 pr-4 text-gray-700">
            <li>المشاركة في صياغة السياسات والاستراتيجيات المتعلقة بتطوير القطاع الخاص</li>
            <li>مراجعة وإقرار خطط عمل المجلس واستراتيجياته طويلة المدى</li>
            <li>انتخاب ممثلي القطاع الخاص في مجلس الإدارة</li>
            <li>متابعة ومراقبة أداء المجلس وأنشطته</li>
            <li>المساهمة في تعزيز التواصل والتنسيق بين المجلس ومكونات القطاع الخاص</li>
            <li>اقتراح مبادرات وبرامج لتطوير القطاع الخاص ورفع تنافسيته</li>
          </ul>
        </div>
      </div>

      {/* نافذة معاينة الملف */}
      <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <DialogContent className="sm:max-w-4xl h-[90vh] max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="text-right">النظام الداخلي</DialogTitle>
            <DialogDescription className="text-right">
              يمكنك تصفح النظام الداخلي هنا أو تحميله
            </DialogDescription>
          </DialogHeader>
          <div className="flex-1 overflow-hidden rounded-md border">
            {documentUrl && (
              <iframe 
                src={`${documentUrl}#toolbar=0`} 
                className="w-full h-full" 
                style={{ height: 'calc(90vh - 150px)' }}
                title="النظام الداخلي"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GeneralAssembly;
