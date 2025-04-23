
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, BarChart, Users, Target, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivateSectorServices = () => {
  const privateServices = [
    {
      icon: <FileText className="h-10 w-10 text-gov-blue" />,
      title: "الاستشارات الاستراتيجية",
      description: "تقديم استشارات متخصصة في مجال التخطيط الاستراتيجي وتطوير الأعمال",
    },
    {
      icon: <BarChart className="h-10 w-10 text-gov-blue" />,
      title: "دراسات السوق",
      description: "إعداد دراسات تحليلية معمقة لأوضاع السوق والفرص المتاحة للمستثمرين",
    },
    {
      icon: <Users className="h-10 w-10 text-gov-blue" />,
      title: "تأهيل الكوادر",
      description: "برامج تدريبية متخصصة لتأهيل الكوادر العاملة في القطاع الخاص",
    },
    {
      icon: <Target className="h-10 w-10 text-gov-blue" />,
      title: "تطوير المنتجات",
      description: "المساعدة في تطوير المنتجات والخدمات لزيادة القدرة التنافسية",
    }
  ];

  const successStories = [
    {
      company: "شركة الرواد للخدمات الفنية",
      sector: "التكنولوجيا",
      achievement: "زيادة الإنتاجية بنسبة 35% بعد الاستفادة من خدمات المجلس الاستشارية",
    },
    {
      company: "مجموعة النهضة التجارية",
      sector: "التجارة",
      achievement: "توسيع نطاق الأعمال ليشمل 3 أسواق إقليمية جديدة بدعم من المجلس",
    },
    {
      company: "شركة المستقبل للصناعات الغذائية",
      sector: "الصناعات الغذائية",
      achievement: "تطوير خط إنتاج جديد بمواصفات عالمية بمساعدة المجلس",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      <main className="flex-grow">
        {/* بانر الصفحة */}
        <div className="bg-gov-blue py-12 mb-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">خدمات القطاع الخاص</h1>
          </div>
        </div>

        {/* قسم مقدمة */}
        <section className="py-8 mb-8">
          <div className="container mx-auto px-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gov-blue mb-4">دعم وتطوير القطاع الخاص</h2>
              <p className="text-gray-700 mb-4">
                يقدم المجلس مجموعة متكاملة من الخدمات المصممة خصيصاً لتلبية احتياجات القطاع الخاص وتمكينه من المساهمة بفعالية في التنمية الاقتصادية. تهدف خدماتنا إلى تعزيز القدرة التنافسية للشركات وتطوير قدراتها وفتح آفاق جديدة للنمو والتوسع.
              </p>
              <p className="text-gray-700">
                تتميز خدماتنا بأنها مصممة وفقاً لأفضل الممارسات العالمية وتقدم من قبل خبراء متخصصين في مختلف المجالات الاقتصادية والإدارية والفنية.
              </p>
            </div>
          </div>
        </section>

        {/* قسم الخدمات المقدمة */}
        <section className="py-8 bg-gov-lightblue mb-8">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gov-blue mb-2">خدماتنا للقطاع الخاص</h2>
              <p className="text-gray-600">مجموعة متنوعة من الخدمات المتخصصة لتلبية احتياجات الشركات والمؤسسات</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {privateServices.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-end mb-4">
                    <div className="p-3 bg-gov-lightblue rounded-full">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gov-blue mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button asChild>
                <Link to="/services" className="inline-flex items-center bg-gov-blue text-white hover:bg-gov-gold transition-colors duration-300 px-6 py-3 rounded-lg font-medium">
                  جميع الخدمات
                  <ArrowLeft className="mr-2" size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* قصص النجاح */}
        <section className="py-8 mb-8">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gov-blue mb-2">قصص نجاح</h2>
              <p className="text-gray-600">شركات استفادت من خدمات المجلس وحققت نتائج متميزة</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {successStories.map((story, index) => (
                <div key={index} className="bg-white border border-gov-lightblue p-6 rounded-lg shadow-sm">
                  <div className="flex justify-end mb-4">
                    <div className="p-2 bg-gov-lightgold rounded-full">
                      <Building className="h-6 w-6 text-gov-blue" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gov-blue mb-2">{story.company}</h3>
                  <p className="text-gov-gold font-medium mb-2">القطاع: {story.sector}</p>
                  <p className="text-gray-600">{story.achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* طلب الخدمة */}
        <section className="py-8 bg-gov-lightgold">
          <div className="container mx-auto px-4">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h2 className="text-2xl font-bold text-gov-blue mb-4">هل تحتاج إلى خدماتنا؟</h2>
              <p className="text-gray-600 mb-6">يمكنك التواصل معنا لطلب أي من خدماتنا أو للاستفسار عن التفاصيل</p>
              <Button asChild>
                <Link to="/contact" className="inline-flex items-center bg-gov-blue text-white hover:bg-gov-gold transition-colors duration-300 px-6 py-3 rounded-lg font-medium">
                  تواصل معنا
                  <ArrowLeft className="mr-2" size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivateSectorServices;
