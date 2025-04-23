
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Partners = () => {
  // بيانات الشركاء الوهميين
  const partners = [
    { id: 1, name: "وزارة التخطيط", category: "government" },
    { id: 2, name: "وزارة المالية", category: "government" },
    { id: 3, name: "وزارة التجارة", category: "government" },
    { id: 4, name: "وزارة الصناعة", category: "government" },
    { id: 5, name: "هيئة الاستثمار", category: "government" },
    { id: 6, name: "اتحاد الغرف التجارية", category: "private" },
    { id: 7, name: "اتحاد الصناعات", category: "private" },
    { id: 8, name: "رابطة المصارف", category: "private" },
    { id: 9, name: "البنك المركزي العراقي", category: "government" }, // New partner added
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gov-blue mb-2">شركاؤنا</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            يعمل المجلس مع مجموعة من الشركاء الاستراتيجيين من القطاعين العام والخاص
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="bg-gov-lightblue rounded-lg p-6 flex items-center justify-center h-32 hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-center">
                <div className={`text-xl font-bold ${
                  partner.category === "government" ? "text-gov-blue" : "text-gov-green"
                }`}>
                  {partner.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/partners" 
            className="inline-flex items-center text-gov-blue hover:text-gov-gold transition-colors font-medium"
          >
            عرض جميع الشركاء
            <ArrowLeft size={18} className="mr-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Partners;
