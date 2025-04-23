
interface TimelineStepProps {
  number: number;
  title: string;
  description: string;
}

const TimelineStep = ({ number, title, description }: TimelineStepProps) => (
  <div className="flex">
    <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-gov-blue text-white font-bold ml-4">
      {number}
    </div>
    <div className="bg-white p-6 rounded-lg shadow-sm text-right flex-grow">
      <h3 className="text-xl font-bold text-gov-blue mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const ServiceTimeline = () => {
  return (
    <section className="py-12 bg-gov-lightblue mb-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gov-blue mb-4">كيفية طلب الخدمة</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            يمكن للشركات والأفراد طلب خدمات المجلس من خلال اتباع الخطوات التالية
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute h-full w-1 bg-gov-blue right-5 top-0"></div>
            <div className="space-y-8">
              <TimelineStep 
                number={1}
                title="تعبئة نموذج طلب الخدمة"
                description="قم بتعبئة نموذج طلب الخدمة إلكترونياً من خلال موقعنا الإلكتروني أو زيارة مقر المجلس."
              />
              <TimelineStep 
                number={2}
                title="مراجعة الطلب"
                description="سيقوم فريق المجلس بمراجعة الطلب وتحديد الإجراءات المناسبة خلال 3 أيام عمل."
              />
              <TimelineStep 
                number={3}
                title="تحديد موعد"
                description="سيتم التواصل معك لتحديد موعد لمناقشة الطلب وتقديم الخدمة المطلوبة."
              />
              <TimelineStep 
                number={4}
                title="تقديم الخدمة"
                description="يقوم الفريق المختص بتقديم الخدمة المطلوبة وفقاً للإجراءات والمعايير المعتمدة."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTimeline;
