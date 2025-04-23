
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";

interface Program {
  title: string;
  date: string;
  location: string;
}

const ProgramCard = ({ program }: { program: Program }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm text-right">
    <div className="flex justify-end mb-4">
      <div className="p-2 bg-gov-lightblue rounded-full">
        <Calendar className="h-6 w-6 text-gov-blue" />
      </div>
    </div>
    <h3 className="text-xl font-bold text-gov-blue mb-2">{program.title}</h3>
    <p className="text-gray-600 mb-1"><strong>التاريخ:</strong> {program.date}</p>
    <p className="text-gray-600"><strong>المكان:</strong> {program.location}</p>
    <div className="mt-4">
      <Link 
        to="/services/register" 
        className="inline-flex items-center text-gov-gold hover:text-gov-blue transition-colors"
      >
        التسجيل
        <ArrowLeft size={16} className="mr-1" />
      </Link>
    </div>
  </div>
);

const UpcomingPrograms = () => {
  const programs = [
    {
      title: "برنامج تأهيل القيادات الإدارية في القطاع الخاص",
      date: "20 مايو 2025",
      location: "مركز التدريب - بغداد",
    },
    {
      title: "ورشة عمل حول التسويق الإلكتروني للشركات الصغيرة",
      date: "5 يونيو 2025",
      location: "قاعة الاجتماعات - مقر المجلس",
    },
    {
      title: "دورة إعداد دراسات الجدوى الاقتصادية",
      date: "15 يونيو 2025",
      location: "مركز التدريب - بغداد",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gov-blue mb-4">البرامج والفعاليات القادمة</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            يقدم المجلس مجموعة من البرامج والفعاليات التدريبية الدورية لتطوير وتنمية القدرات في القطاع الخاص
          </p>
        </div>

        <div className="bg-gov-lightgold p-6 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link 
            to="/services/programs" 
            className="inline-flex items-center bg-gov-blue text-white hover:bg-gov-gold transition-colors duration-300 px-6 py-3 rounded-lg font-medium"
          >
            عرض جميع البرامج والفعاليات
            <ArrowLeft size={18} className="mr-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingPrograms;
