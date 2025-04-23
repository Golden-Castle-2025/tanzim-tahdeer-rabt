import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Calendar, Clock, Search, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const News = () => {
  // بيانات الأخبار الوهمية
  const allNewsItems = [
    {
      id: 1,
      title: "اجتماع المجلس مع ممثلي القطاع الخاص لمناقشة التحديات التي تواجه المستثمرين",
      date: "2025-04-15",
      time: "11:00",
      category: "اجتماعات",
      image: "https://placehold.co/600x400/1A365D/FFFFFF?text=اجتماع+المجلس",
      summary: "عقد مجلس تطوير القطاع الخاص اجتماعاً موسعاً مع ممثلي القطاع الخاص لمناقشة التحديات والعقبات التي تواجه المستثمرين وسبل تذليلها"
    },
    {
      id: 2,
      title: "إطلاق مبادرة تطوير المشاريع الصغيرة والمتوسطة",
      date: "2025-04-10",
      time: "10:30",
      category: "مبادرات",
      image: "https://placehold.co/600x400/2C5E1A/FFFFFF?text=مبادرة+المشاريع",
      summary: "أطلق المجلس مبادرة جديدة لدعم المشاريع الصغيرة والمتوسطة وتوفير التمويل اللازم لها وتسهيل إجراءات الترخيص والتشغيل"
    },
    {
      id: 3,
      title: "ورشة عمل حول تحسين بيئة الأعمال وجذب الاستثمارات",
      date: "2025-04-05",
      time: "09:00",
      category: "فعاليات",
      image: "https://placehold.co/600x400/BF9B30/FFFFFF?text=ورشة+عمل",
      summary: "نظم المجلس ورشة عمل متخصصة حول سبل تحسين بيئة الأعمال وإزالة العقبات التي تواجه المستثمرين وتبسيط الإجراءات الإدارية"
    },
    {
      id: 4,
      title: "توقيع مذكرة تفاهم مع غرفة التجارة لتعزيز التعاون المشترك",
      date: "2025-03-28",
      time: "13:00",
      category: "اتفاقيات",
      image: "https://placehold.co/600x400/1A365D/FFFFFF?text=مذكرة+تفاهم",
      summary: "وقع المجلس مذكرة تفاهم مع غرفة التجارة تهدف إلى تعزيز التعاون المشترك في مجالات تطوير القطاع الخاص ودعم المشاريع الاستثمارية"
    },
    {
      id: 5,
      title: "دورة تدريبية حول إعداد دراسات الجدوى الاقتصادية",
      date: "2025-03-20",
      time: "10:00",
      category: "تدريب",
      image: "https://placehold.co/600x400/2C5E1A/FFFFFF?text=دورة+تدريبية",
      summary: "نظم المجلس دورة تدريبية متخصصة حول إعداد دراسات الجدوى الاقتصادية للمشاريع الاستثمارية بمشاركة خبراء محليين ودوليين"
    },
    {
      id: 6,
      title: "إصدار تقرير حالة القطاع الخاص للربع الأول من عام 2025",
      date: "2025-03-15",
      time: "12:00",
      category: "تقارير",
      image: "https://placehold.co/600x400/BF9B30/FFFFFF?text=تقرير",
      summary: "أصدر المجلس تقريراً شاملاً عن حالة القطاع الخاص خلال الربع الأول من عام 2025، متضمناً تحليلاً للمؤشرات الاقتصادية وآفاق النمو"
    },
  ];

  // دالة لتنسيق التاريخ بالعربية
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('ar-EG', options);
  };

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      <main className="flex-grow">
        {/* بانر الصفحة */}
        <div className="bg-gov-blue py-12 mb-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">الأخبار والفعاليات</h1>
          </div>
        </div>

        {/* قسم الأخبار */}
        <section className="mb-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allNewsItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 text-right">
                    <div className="flex justify-between items-center mb-2">
                      <span className="bg-gov-lightblue text-gov-blue px-3 py-1 rounded-full text-sm">
                        {item.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <span className="ml-4">{formatDate(item.date)}</span>
                        <Calendar size={16} className="ml-1" />
                        <span className="mr-2">{item.time}</span>
                        <Clock size={16} className="mr-1" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gov-blue mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{item.summary}</p>
                    <a 
                      href={`/news/${item.id}`} 
                      className="inline-flex items-center text-gov-gold hover:text-gov-blue transition-colors font-medium"
                    >
                      اقرأ المزيد
                      <ChevronLeft size={16} className="mr-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* قسم الترقيم */}
        <section className="mb-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <nav className="inline-flex">
                <a href="#" className="px-4 py-2 border border-gray-300 bg-white text-gov-blue hover:bg-gov-lightblue rounded-l-lg">
                  <ChevronRight size={20} />
                </a>
                <a href="#" className="px-4 py-2 border-t border-b border-gray-300 bg-gov-blue text-white">
                  1
                </a>
                <a href="#" className="px-4 py-2 border-t border-b border-gray-300 bg-white text-gov-blue hover:bg-gov-lightblue">
                  2
                </a>
                <a href="#" className="px-4 py-2 border-t border-b border-gray-300 bg-white text-gov-blue hover:bg-gov-lightblue">
                  3
                </a>
                <a href="#" className="px-4 py-2 border border-gray-300 bg-white text-gov-blue hover:bg-gov-lightblue rounded-r-lg">
                  <ChevronLeft size={20} />
                </a>
              </nav>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;
