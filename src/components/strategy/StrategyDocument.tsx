
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StrategyDocumentProps {
  url: string;
}

const StrategyDocument = ({ url }: StrategyDocumentProps) => {
  if (!url) {
    return (
      <div className="text-center mb-8">
        <p className="text-gray-600 mb-4">لا توجد وثيقة استراتيجية محملة حالياً</p>
      </div>
    );
  }

  // Extract filename from URL for display
  const fileName = url.split('/').pop() || "strategy-document.pdf";

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gov-blue">وثيقة الاستراتيجية</h2>
        <Button
          onClick={() => window.open(url, '_blank')}
          className="bg-gov-blue hover:bg-gov-blue/90 text-white flex items-center gap-2"
        >
          <Download size={16} />
          <span>تحميل الوثيقة</span>
        </Button>
      </div>
      
      <div className="aspect-video border border-gray-300 rounded-lg overflow-hidden">
        <iframe 
          src={`${url}#toolbar=0`} 
          className="w-full h-full" 
          style={{ height: '70vh' }}
          title="وثيقة استراتيجية المجلس"
        />
      </div>
    </div>
  );
};

export default StrategyDocument;
