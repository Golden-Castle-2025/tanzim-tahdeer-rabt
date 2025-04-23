
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Lightbulb, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const Vision = () => {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      <main className="flex-grow">
        {/* بانر الصفحة */}
        <div className="bg-gov-blue py-12 mb-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">الرؤية والرسالة</h1>
          </div>
        </div>

        {/* محتوى الرؤية والرسالة */}
        <section className="py-12 mb-8">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Link 
                to="/about" 
                className="flex items-center text-gov-blue hover:text-gov-gold transition-colors"
              >
                <ChevronLeft className="ml-1" size={20} />
                <span>العودة إلى صفحة عن المجلس</span>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-right">
                <div className="flex justify-end mb-4">
                  <div className="p-4 bg-gov-lightblue rounded-full">
                    <Lightbulb className="h-10 w-10 text-gov-blue" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gov-blue mb-6">الرؤية</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  قطاع خاص رائد ومتطور يساهم بفعالية في تحقيق التنمية الاقتصادية المستدامة ويُعزز من تنافسية الاقتصاد الوطني.
                </p>
                <div className="mt-6">
                  <h4 className="text-xl font-semibold text-gov-blue mb-3">مرتكزات الرؤية</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>الريادة والتطور</li>
                    <li>المساهمة الفعالة في التنمية الاقتصادية</li>
                    <li>تعزيز تنافسية الاقتصاد الوطني</li>
                    <li>الاستدامة</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-right">
                <div className="flex justify-end mb-4">
                  <div className="p-4 bg-gov-lightblue rounded-full">
                    <Target className="h-10 w-10 text-gov-blue" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gov-blue mb-6">الرسالة</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  توفير بيئة محفزة للأعمال تمكن القطاع الخاص من النمو والتطور والمنافسة محلياً وعالمياً من خلال التنسيق بين الجهات المعنية وتقديم الدعم الفني والاستشاري اللازم.
                </p>
                <div className="mt-6">
                  <h4 className="text-xl font-semibold text-gov-blue mb-3">مرتكزات الرسالة</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>توفير بيئة محفزة للأعمال</li>
                    <li>تمكين القطاع الخاص من النمو والتطور</li>
                    <li>تعزيز المنافسة المحلية والعالمية</li>
                    <li>التنسيق بين الجهات المعنية</li>
                    <li>تقديم الدعم الفني والاستشاري</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <Button 
                variant="outline" 
                className="bg-gov-blue text-white hover:bg-gov-gold border-none"
                asChild
              >
                <Link to="/about">العودة إلى صفحة عن المجلس</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Vision;
