import { Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const News = () => {
  // بيانات الأخبار الوهمية
  const newsItems = [
    {
      id: 1,
      title: "مقترح إنشاء مركز التجارة العالمي في قلب العاصمة بغداد",
      date: "2025-04-19",
      image: "https://placehold.co/600x400/1A365D/FFFFFF/png?text=مركز+التجارة+العالمي",
      summary: "تم تقديم مقترح طموح لإنشاء مركز التجارة العالمي في قلب العاصمة بغداد، والذي سيعزز المكانة الاقتصادية للعراق ويجذب الاستثمارات العالمية"
    },
    {
      id: 2,
      title: "اجتماع المجلس مع ممثلي القطاع الخاص لمناقشة التحديات التي تواجه المستثمرين",
      date: "2025-04-15",
      image: "https://placehold.co/600x400/1A365D/FFFFFF/png?text=اجتماع+المجلس",
      summary: "عقد مجلس تطوير القطاع الخاص اجتماعاً موسعاً مع ممثلي القطاع الخاص لمناقشة التحديات والعقبات التي تواجه المستثمرين"
    },
    {
      id: 3,
      title: "إطلاق مبادرة تطوير المشاريع الصغيرة والمتوسطة",
      date: "2025-04-10",
      image: "https://placehold.co/600x400/2C5E1A/FFFFFF/png?text=مبادرة+المشاريع",
      summary: "أطلق المجلس مبادرة جديدة لدعم المشاريع الصغيرة والمتوسطة وتوفير التمويل اللازم لها وتسهيل إجراءات الترخيص"
    }
  ];

  // دالة لتنسيق التاريخ بالعربية
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('ar-EG', options);
  };

  return (
    <section className="py-16 bg-gov-gray">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <Link 
            to="/news" 
            className="inline-flex items-center text-gov-blue hover:text-gov-gold transition-colors font-medium"
          >
            جميع الأخبار
            <ArrowLeft size={18} className="mr-1" />
          </Link>
          <h2 className="text-3xl font-bold text-gov-blue">أحدث الأخبار</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 text-right">
                <div className="flex justify-end items-center text-gray-500 text-sm mb-2">
                  <span>{formatDate(item.date)}</span>
                  <Calendar size={16} className="mr-1 ml-2" />
                </div>
                <h3 className="text-xl font-bold text-gov-blue mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{item.summary}</p>
                <Link 
                  to={`/news/${item.id}`} 
                  className="inline-flex items-center text-gov-gold hover:text-gov-blue transition-colors font-medium"
                >
                  اقرأ المزيد
                  <ArrowLeft size={16} className="mr-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
