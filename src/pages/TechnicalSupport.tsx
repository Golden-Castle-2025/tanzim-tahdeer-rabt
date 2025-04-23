
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Wrench, Clock, PhoneCall, MessageSquare, ClipboardCheck, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const TechnicalSupport = () => {
  const supportServices = [
    {
      icon: <Wrench className="h-10 w-10 text-gov-blue" />,
      title: "الدعم الفني المباشر",
      description: "فريق متخصص لتقديم الدعم الفني المباشر للشركات والمؤسسات في مختلف المجالات"
    },
    {
      icon: <Clock className="h-10 w-10 text-gov-blue" />,
      title: "الدعم على مدار الساعة",
      description: "خدمة الدعم الفني متاحة على مدار الساعة لحل المشكلات الطارئة بأسرع وقت ممكن"
    },
    {
      icon: <PhoneCall className="h-10 w-10 text-gov-blue" />,
      title: "الاستشارات الهاتفية",
      description: "خط ساخن للاستشارات الفنية السريعة لحل المشكلات البسيطة والإجابة على الاستفسارات"
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-gov-blue" />,
      title: "الدعم الإلكتروني",
      description: "منصة إلكترونية متكاملة لتقديم الدعم الفني عبر البريد الإلكتروني والمحادثة المباشرة"
    }
  ];
  
  const steps = [
    {
      icon: <ClipboardCheck className="h-6 w-6 text-white" />,
      title: "تقديم طلب الدعم",
      description: "تعبئة نموذج طلب الدعم الفني مع توضيح المشكلة والاحتياجات المطلوبة"
    },
    {
      icon: <User className="h-6 w-6 text-white" />,
      title: "تحديد فريق الدعم",
      description: "يتم تحديد الفريق المختص بناءً على نوع المشكلة وتعيين مسؤول متابعة للطلب"
    },
    {
      icon: <PhoneCall className="h-6 w-6 text-white" />,
      title: "التواصل المباشر",
      description: "يقوم فريق الدعم بالتواصل المباشر لتحديد موعد لحل المشكلة أو تقديم الاستشارة"
    },
    {
      icon: <Wrench className="h-6 w-6 text-white" />,
      title: "تقديم الدعم الفني",
      description: "يقوم الفريق المختص بتقديم الدعم الفني وحل المشكلة وفقاً للإجراءات والمعايير المعتمدة"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      <main className="flex-grow">
        {/* بانر الصفحة */}
        <div className="bg-gov-blue py-12 mb-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">خدمات الدعم الفني</h1>
          </div>
        </div>

        {/* قسم مقدمة */}
        <section className="py-8 mb-8">
          <div className="container mx-auto px-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gov-blue mb-4">الدعم الفني للقطاع الخاص</h2>
              <p className="text-gray-700 mb-4">
                يقدم المجلس خدمات الدعم الفني المتكاملة للشركات والمؤسسات في القطاع الخاص لمساعدتها على تجاوز التحديات التقنية والفنية التي تواجهها في مسيرة أعمالها. يتميز فريق الدعم الفني لدينا بالخبرة والكفاءة العالية في مختلف المجالات التقنية والإدارية.
              </p>
              <p className="text-gray-700">
                تشمل خدمات الدعم الفني تقديم المساعدة في حل المشكلات التقنية، وتطوير الأنظمة الإدارية، وتحسين العمليات التشغيلية، وزيادة الكفاءة الإنتاجية للشركات والمؤسسات.
              </p>
            </div>
          </div>
        </section>

        {/* خدمات الدعم الفني */}
        <section className="py-8 bg-gov-lightblue mb-8">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gov-blue mb-2">خدمات الدعم الفني</h2>
              <p className="text-gray-600">مجموعة متنوعة من خدمات الدعم الفني المتخصصة للقطاع الخاص</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {supportServices.map((service, index) => (
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

        {/* خطوات الحصول على الدعم */}
        <section className="py-12 mb-8">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gov-blue mb-2">خطوات الحصول على الدعم الفني</h2>
              <p className="text-gray-600">اتبع الخطوات التالية للحصول على خدمات الدعم الفني</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gov-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                    <span className="absolute bg-white text-gov-blue w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold border-2 border-gov-blue" style={{ right: '-5px', top: '-5px' }}>{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gov-blue mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* تواصل معنا */}
        <section className="py-8 bg-gov-lightgold">
          <div className="container mx-auto px-4">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h2 className="text-2xl font-bold text-gov-blue mb-4">بحاجة إلى مساعدة فنية؟</h2>
              <p className="text-gray-600 mb-6">فريق الدعم الفني جاهز لمساعدتك في أي وقت. تواصل معنا الآن!</p>
              <Button asChild>
                <Link to="/contact" className="inline-flex items-center bg-gov-blue text-white hover:bg-gov-gold transition-colors duration-300 px-6 py-3 rounded-lg font-medium">
                  طلب الدعم الفني
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

export default TechnicalSupport;
