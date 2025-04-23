
import { BookOpen, ChevronLeft, FileText, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CouncilStrategy = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gov-blue mb-8 text-center">استراتيجية المجلس</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-right">
            <div className="flex justify-end mb-4">
              <div className="p-4 bg-gov-lightblue rounded-full">
                <FileText className="h-10 w-10 text-gov-blue" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gov-blue mb-6">وثيقة الاستراتيجية</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              تمثل استراتيجية مجلس تطوير القطاع الخاص خارطة طريق شاملة لتنمية وتطوير القطاع الخاص في العراق. تركز الاستراتيجية على تحقيق رؤية المجلس وتعزيز دور القطاع الخاص كمحرك رئيسي للتنمية الاقتصادية.
            </p>
            <div className="mt-6 text-left">
              <Button asChild variant="outline" className="bg-gov-blue text-white hover:bg-gov-gold border-none">
                <Link to="/about/strategy">
                  <BookOpen size={20} className="ml-2" />
                  عرض التفاصيل الكاملة
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-right">
            <div className="flex justify-end mb-4">
              <div className="p-4 bg-gov-lightblue rounded-full">
                <Target className="h-10 w-10 text-gov-blue" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gov-blue mb-6">الأهداف الاستراتيجية</h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>تحسين بيئة الأعمال وجذب الاستثمارات</li>
              <li>دعم ريادة الأعمال والمشاريع الصغيرة والمتوسطة</li>
              <li>تعزيز تنافسية القطاع الخاص محلياً وعالمياً</li>
              <li>تطوير البنية التشريعية والتنظيمية</li>
              <li>تشجيع الابتكار والتحول الرقمي</li>
              <li>بناء القدرات وتنمية الموارد البشرية</li>
            </ul>
            <div className="mt-6 text-left">
              <Button asChild variant="outline" className="bg-gov-blue text-white hover:bg-gov-gold border-none">
                <Link to="/about/strategy">
                  <ChevronLeft size={20} className="ml-2" />
                  تفاصيل أكثر
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CouncilStrategy;
