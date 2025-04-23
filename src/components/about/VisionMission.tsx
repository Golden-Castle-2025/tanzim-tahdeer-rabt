
import { Lightbulb, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const VisionMission = () => {
  return (
    <section className="py-12 bg-gov-lightblue mb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-right">
            <div className="flex justify-end mb-4">
              <div className="p-3 bg-gov-lightblue rounded-full">
                <Lightbulb className="h-8 w-8 text-gov-blue" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gov-blue mb-4">الرؤية</h3>
            <p className="text-gray-700">
              قطاع خاص رائد ومتطور يساهم بفعالية في تحقيق التنمية الاقتصادية المستدامة ويُعزز من تنافسية الاقتصاد الوطني.
            </p>
            <div className="mt-4 text-left">
              <Button asChild>
                <Link to="/about/vision" className="text-gov-blue hover:text-gov-gold transition-colors">المزيد عن الرؤية والرسالة</Link>
              </Button>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-right">
            <div className="flex justify-end mb-4">
              <div className="p-3 bg-gov-lightblue rounded-full">
                <Target className="h-8 w-8 text-gov-blue" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gov-blue mb-4">الرسالة</h3>
            <p className="text-gray-700">
              توفير بيئة محفزة للأعمال تمكن القطاع الخاص من النمو والتطور والمنافسة محلياً وعالمياً من خلال التنسيق بين الجهات المعنية وتقديم الدعم الفني والاستشاري اللازم.
            </p>
            <div className="mt-4 text-left">
              <Button asChild>
                <Link to="/about/strategy" className="text-gov-blue hover:text-gov-gold transition-colors">عرض الاستراتيجية</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
