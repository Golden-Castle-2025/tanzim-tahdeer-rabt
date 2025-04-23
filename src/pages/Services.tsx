
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { FileText, BarChart, Users, Briefcase, GraduationCap, Building, MessageSquare } from "lucide-react";
import ServiceCard from "../components/services/ServiceCard";
import ServiceTimeline from "../components/services/ServiceTimeline";
import UpcomingPrograms from "../components/services/UpcomingPrograms";

const Services = () => {
  const services = [
    {
      icon: <FileText className="h-10 w-10 text-gov-blue" />,
      title: "الدراسات والأبحاث",
      description: "إعداد وتقديم الدراسات والأبحاث المتخصصة في مجالات تطوير القطاع الخاص",
      link: "/services/research",
    },
    {
      icon: <BarChart className="h-10 w-10 text-gov-blue" />,
      title: "التحليل الاقتصادي",
      description: "تحليل البيانات الاقتصادية وتقديم التوصيات لتحسين أداء القطاع الخاص",
      link: "/services/economic-analysis",
    },
    {
      icon: <Users className="h-10 w-10 text-gov-blue" />,
      title: "خدمات القطاع الخاص",
      description: "مجموعة متكاملة من الخدمات المصممة خصيصاً لتلبية احتياجات القطاع الخاص",
      link: "/services/private-sector",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-gov-blue" />,
      title: "الاستشارات المتخصصة",
      description: "تقديم الاستشارات المتخصصة في المجالات الاقتصادية والإدارية والاستثمارية",
      link: "/services/consultations",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-gov-blue" />,
      title: "التمويل",
      description: "توفير المعلومات حول فرص التمويل المتاحة والمساعدة في إعداد دراسات الجدوى",
      link: "/services/funding",
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-gov-blue" />,
      title: "التدريب والتأهيل",
      description: "تنظيم برامج تدريبية متخصصة لتطوير مهارات العاملين في القطاع الخاص",
      link: "/services/training",
    },
    {
      icon: <Building className="h-10 w-10 text-gov-blue" />,
      title: "تطوير الأعمال",
      description: "تقديم خدمات تطوير الأعمال وتحسين الإنتاجية وزيادة التنافسية",
      link: "/services/business-development",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      <main className="flex-grow">
        <div className="bg-gov-blue py-12 mb-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">خدماتنا</h1>
          </div>
        </div>

        <section className="py-12 mb-8">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gov-blue mb-4">خدمات المجلس</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                يقدم مجلس تطوير القطاع الخاص مجموعة متنوعة من الخدمات للشركات والمؤسسات في القطاع الخاص لمساعدتها على النمو والتطور
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        <ServiceTimeline />
        <UpcomingPrograms />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
