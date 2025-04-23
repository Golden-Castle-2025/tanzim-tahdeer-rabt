
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, ChevronLeft } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative">
      {/* شريط الإعلانات المتحرك */}
      <div className="bg-gov-gold text-white p-2 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/announcements" className="text-sm flex items-center hover:underline whitespace-nowrap">
              <ChevronLeft size={16} />
              <span>كل الإعلانات</span>
            </Link>
            <div className="flex-1 overflow-hidden mx-4">
              <div className="animate-marquee flex items-center whitespace-nowrap">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Calendar size={16} />
                  <span className="text-sm font-medium">إعلان: فتح باب التقديم على برنامج دعم المشاريع الصغيرة والمتوسطة</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* البانر الرئيسي */}
      <div className="bg-gov-blue relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="text-white text-right z-10 mb-10 md:mb-0 md:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">مجلس تطوير القطاع الخاص</h1>
            <p className="text-lg md:text-xl opacity-90 mb-6">شراكة استراتيجية بين القطاعين العام والخاص لتحقيق التنمية المستدامة</p>
            <div className="flex flex-wrap gap-3 justify-end">
              <Link 
                to="/services"
                className="bg-white text-gov-blue hover:bg-gray-100 px-6 py-3 rounded-lg font-medium flex items-center"
              >
                خدماتنا
                <ArrowLeft className="mr-2" size={18} />
              </Link>
              <Link 
                to="/about"
                className="bg-transparent text-white border border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium"
              >
                تعرف علينا
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative z-10 flex justify-center">
            <div className="w-80 h-80 bg-gov-gold/10 rounded-full flex items-center justify-center p-8">
              <div className="w-64 h-64 rounded-full bg-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-gov-gold text-5xl font-bold mb-2">2030</div>
                  <div className="text-white text-lg">رؤية التنمية المستدامة</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* الزخارف الخلفية */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gov-gold opacity-10 skew-x-12 transform origin-top-right"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gov-green opacity-10 -skew-x-12 transform origin-bottom-left"></div>
      </div>
    </div>
  );
};

export default Hero;
