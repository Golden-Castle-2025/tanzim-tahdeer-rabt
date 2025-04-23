
const AboutIntro = () => {
  return (
    <section className="py-12 mb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:ml-8">
            <div className="bg-gov-blue/10 p-2 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833"
                alt="مقر مجلس تطوير القطاع الخاص" 
                className="w-full h-auto rounded object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 text-right">
            <h2 className="text-2xl font-bold text-gov-blue mb-4 border-right-4 border-gov-gold pr-3">نبذة عن المجلس</h2>
            <p className="text-gray-700 mb-4">
              تم تأسيس مجلس تطوير القطاع الخاص استناداً للركيزة الرابعة من استراتيجية تطوير القطاع الخاص (2014-2030) "هيكلية التنفيذ"، ليكون أعلى هيكلية تشرف على الاستراتيجية. وانسجاماً مع ما جاء في الفقرة 25 من ورقة المنجاز الوزاري للحكومة والتي نصت على "الالتزام بدعم القطاع الخاص سواء في حقل التنفيذ أو التشريع باعتباره شريكاً في الإعمار والبناء".
            </p>
            <p className="text-gray-700 mb-4">
              يسعى المجلس إلى تحقيق التكامل بين القطاعين العام والخاص من خلال تطوير السياسات والإجراءات التي تساهم في تحسين بيئة الأعمال وجذب الاستثمارات وتنمية المشاريع الصغيرة والمتوسطة.
            </p>
            <p className="text-gray-700">
              يضم المجلس في عضويته ممثلين عن الجهات الحكومية والقطاع الخاص والمنظمات المهنية ذات العلاقة، مما يساهم في توفير رؤية شاملة ومتكاملة لتطوير القطاع الخاص.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
