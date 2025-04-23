
import { 
  Users, TrendingUp, FileText, Building2, HandshakeIcon, GraduationCap 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Building2 className="h-10 w-10 text-gov-blue" />,
      title: "تطوير القطاع الخاص",
      description: "دعم وتطوير الشركات المحلية وتعزيز قدرتها التنافسية في السوق المحلي والعالمي"
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-gov-blue" />,
      title: "جذب الاستثمارات",
      description: "تسهيل عملية جذب الاستثمارات المحلية والأجنبية وتوفير بيئة استثمارية مناسبة"
    },
    {
      icon: <HandshakeIcon className="h-10 w-10 text-gov-blue" />,
      title: "الشراكات الاستراتيجية",
      description: "بناء شراكات استراتيجية بين القطاعين العام والخاص لتحقيق التنمية المستدامة"
    },
    {
      icon: <FileText className="h-10 w-10 text-gov-blue" />,
      title: "اللوائح التنظيمية",
      description: "تطوير اللوائح والسياسات التي تدعم نمو القطاع الخاص وتحسين بيئة الأعمال"
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-gov-blue" />,
      title: "التدريب والتأهيل",
      description: "تقديم برامج تدريبية للكوادر الوطنية ورفع مستوى الأداء المهني في القطاع الخاص"
    },
    {
      icon: <Users className="h-10 w-10 text-gov-blue" />,
      title: "الدعم الفني",
      description: "تقديم الاستشارات والدعم الفني للمؤسسات والشركات في مختلف المجالات"
    }
  ];

  return (
    <section className="py-16 bg-gov-lightblue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gov-blue mb-2">مجالات عمل المجلس</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            يعمل مجلس تطوير القطاع الخاص على تحقيق التكامل بين القطاعين العام والخاص من خلال عدة محاور رئيسية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-right"
            >
              <div className="mb-4 rounded-full bg-gov-lightblue inline-flex p-3">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gov-blue mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
