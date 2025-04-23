
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Users, Briefcase, Calendar, ClipboardCheck, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Consultations = () => {
  const consultationServices = [
    {
      icon: <FileText className="h-10 w-10 text-gov-blue" />,
      title: "استشارات اقتصادية",
      description: "تقديم الاستشارات الاقتصادية المتخصصة للشركات والمؤسسات في القطاع الخاص"
    },
    {
      icon: <Users className="h-10 w-10 text-gov-blue" />,
      title: "استشارات إدارية",
      description: "تطوير نظم الإدارة وتحسين الأداء المؤسسي وتطوير الهياكل التنظيمية"
    },
    {
      icon: <Briefcase className="h-10 w-10 text-gov-blue" />,
      title: "استشارات استثمارية",
      description: "تقييم الفرص الاستثمارية وإعداد دراسات الجدوى وتحليل المخاطر الاستثمارية"
    },
    {
      icon: <Calendar className="h-10 w-10 text-gov-blue" />,
      title: "استشارات تخطيط استراتيجي",
      description: "إعداد الخطط الاستراتيجية وتطوير مؤشرات الأداء وتقييم الأداء المؤسسي"
    }
  ];
  
  const expertiseAreas = [
    {
      title: "القطاع الصناعي",
      description: "استشارات متخصصة في مجالات التصنيع وتطوير المنتجات وتحسين الجودة وزيادة الإنتاجية"
    },
    {
      title: "القطاع التجاري",
      description: "استشارات في مجالات التسويق وتطوير المبيعات وإدارة المخزون وخدمة العملاء"
    },
    {
      title: "القطاع المالي",
      description: "استشارات في إدارة المخاطر المالية والتمويل وإعداد التقارير المالية والتحليل المالي"
    },
    {
      title: "قطاع الخدمات",
      description: "استشارات في تطوير الخدمات وتحسين جودة الخدمة وتطوير العمليات التشغيلية"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      <main className="flex-grow">
        {/* بانر الصفحة */}
        <div className="bg-gov-blue py-12 mb-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">خدمات الاستشارات</h1>
          </div>
        </div>

        {/* قسم المقدمة */}
        <section className="py-8 mb-8">
          <div className="container mx-auto px-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gov-blue mb-4">الاستشارات المتخصصة للقطاع الخاص</h2>
              <p className="text-gray-700 mb-4">
                يقدم المجلس خدمات استشارية متخصصة للشركات والمؤسسات في القطاع الخاص لمساعدتها على تطوير أعمالها وزيادة كفاءتها التشغيلية وتحسين قدرتها التنافسية في السوق. يتميز فريق المستشارين لدينا بالخبرة العملية والكفاءة العالية في مختلف المجالات الاقتصادية والإدارية.
              </p>
              <p className="text-gray-700">
                تشمل خدمات الاستشارات تقديم المشورة المتخصصة في مجالات الإدارة والتخطيط الاستراتيجي والتطوير المؤسسي والتحليل الاقتصادي والاستثماري وتطوير الأعمال وتحسين الأداء.
              </p>
            </div>
          </div>
        </section>

        {/* خدمات الاستشارات */}
        <section className="py-8 bg-gov-lightblue mb-8">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gov-blue mb-2">خدمات الاستشارات</h2>
              <p className="text-gray-600">مجموعة متنوعة من الخدمات الاستشارية المتخصصة للقطاع الخاص</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {consultationServices.map((service, index) => (
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
          </div>
        </section>

        {/* مجالات الخبرة */}
        <section className="py-12 mb-8">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gov-blue mb-2">مجالات الخبرة الاستشارية</h2>
              <p className="text-gray-600">يقدم المجلس خدمات استشارية متخصصة في القطاعات الرئيسية التالية</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {expertiseAreas.map((area, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-r-4 border-gov-blue">
                  <h3 className="text-xl font-bold text-gov-blue mb-2">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* نظام طلب الاستشارة */}
        <section className="py-8 bg-gov-lightgold mb-8">
          <div className="container mx-auto px-4">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold text-gov-blue mb-4">نظام طلب الاستشارة</h2>
                  <p className="text-gray-600 mb-4">
                    يمكنك طلب استشارة متخصصة من خلال نظام طلب الاستشارات الإلكتروني. يتيح النظام تقديم طلب الاستشارة وتحديد المجال والموضوع والمتطلبات بشكل دقيق.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <ClipboardCheck className="h-5 w-5 text-gov-gold ml-2" />
                      <span className="text-gray-700">تعبئة نموذج طلب الاستشارة</span>
                    </li>
                    <li className="flex items-center">
                      <MessageSquare className="h-5 w-5 text-gov-gold ml-2" />
                      <span className="text-gray-700">التواصل مع المستشار المختص</span>
                    </li>
                    <li className="flex items-center">
                      <Calendar className="h-5 w-5 text-gov-gold ml-2" />
                      <span className="text-gray-700">تحديد موعد للاجتماع الاستشاري</span>
                    </li>
                    <li className="flex items-center">
                      <FileText className="h-5 w-5 text-gov-gold ml-2" />
                      <span className="text-gray-700">استلام التقرير الاستشاري</span>
                    </li>
                  </ul>
                  <Button asChild>
                    <Link to="/contact" className="inline-flex items-center bg-gov-blue text-white hover:bg-gov-gold transition-colors duration-300 px-6 py-3 rounded-lg font-medium">
                      طلب استشارة
                      <ArrowLeft className="mr-2" size={18} />
                    </Link>
                  </Button>
                </div>
                <div className="bg-gov-lightblue p-6 rounded-lg hidden md:block">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gov-blue mb-4">فريق الاستشارات</h3>
                    <p className="text-gray-600 mb-4">
                      يضم المجلس نخبة من المستشارين المتخصصين في مختلف المجالات الاقتصادية والإدارية والمالية والاستثمارية.
                    </p>
                    <p className="text-gray-600">
                      يتميز فريق المستشارين بالخبرة العملية والكفاءة العالية في تقديم الحلول المبتكرة والعملية للتحديات التي تواجه الشركات والمؤسسات في القطاع الخاص.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Consultations;
