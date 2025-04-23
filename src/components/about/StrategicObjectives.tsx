
import { Building2, Users, BookOpen, Target, Lightbulb, Award } from "lucide-react";

const StrategicObjectives = () => {
  return (
    <section className="py-12 mb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gov-blue mb-8 text-center">الأهداف الاستراتيجية</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ObjectiveCard
            icon={Building2}
            title="تحسين بيئة الأعمال"
            description="تطوير السياسات والإجراءات التي تساهم في تحسين بيئة الأعمال وتسهيل ممارسة الأنشطة التجارية."
          />
          <ObjectiveCard
            icon={BookOpen}
            title="دعم ريادة الأعمال"
            description="تشجيع ريادة الأعمال ودعم المشاريع الصغيرة والمتوسطة من خلال توفير التدريب والتمويل المناسب."
          />
          <ObjectiveCard
            icon={Award}
            title="تعزيز التنافسية"
            description="تعزيز القدرة التنافسية للمنتجات والخدمات المحلية في الأسواق المحلية والعالمية."
          />
          <ObjectiveCard
            icon={Users}
            title="تنمية الموارد البشرية"
            description="تنمية وتطوير الموارد البشرية في القطاع الخاص من خلال برامج التدريب والتأهيل المتخصصة."
          />
          <ObjectiveCard
            icon={Lightbulb}
            title="تطوير الابتكار"
            description="دعم وتشجيع الابتكار في القطاع الخاص وتبني التقنيات الحديثة لزيادة الإنتاجية والكفاءة."
          />
          <ObjectiveCard
            icon={Target}
            title="توطين الصناعة"
            description="دعم توطين الصناعات الاستراتيجية وزيادة المحتوى المحلي في المنتجات والخدمات."
          />
        </div>
      </div>
    </section>
  );
};

const ObjectiveCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="border border-gov-lightblue p-6 rounded-lg text-right hover:shadow-md transition-shadow duration-300">
    <div className="flex justify-end mb-4">
      <div className="p-2 bg-gov-lightblue rounded-full">
        <Icon className="h-6 w-6 text-gov-blue" />
      </div>
    </div>
    <h3 className="text-xl font-bold text-gov-blue mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default StrategicObjectives;
