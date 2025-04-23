
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Factory, Briefcase, Wheat, Construction, Home, Hotel, Zap, BadgeDollarSign, ShieldCheck, Truck, Stethoscope, GraduationCap, Globe, Lightbulb, UserCog, Users2, CreditCard, HelpingHand } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const Structure = () => {
  const sectors = [
    { name: "القطاع الصناعي", icon: Factory },
    { name: "التجارة العامة والوكالات التجارية", icon: Briefcase },
    { name: "القطاع الزراعي", icon: Wheat },
    { name: "قطاع المقاولات", icon: Construction },
    { name: "القطاع السكني والتطوير العقاري", icon: Home },
    { name: "قطاع السياحة والاستثمارات الترفيهية والفنادق والمطاعم", icon: Hotel },
    { name: "قطاع الطاقة", icon: Zap },
    { name: "قطاع المصارف", icon: BadgeDollarSign },
    { name: "قطاع التأمين", icon: ShieldCheck },
    { name: "قطاع النقل", icon: Truck },
    { name: "القطاع الصحي", icon: Stethoscope },
    { name: "قطاع التعليم الأهلي", icon: GraduationCap },
    { name: "قطاع الاقتصاد الرقمي وتقنيات المعلومات", icon: Globe },
    { name: "قطاع ريادة الأعمال", icon: Lightbulb },
    { name: "قطاع الخبراء", icon: UserCog },
    { name: "قطاع الشباب", icon: Users2 },
    { name: "قطاع الدفع الإلكتروني", icon: CreditCard },
    { name: "قطاع الخدمات الاستشارية", icon: HelpingHand },
  ];

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      <main className="flex-grow">
        {/* بانر الصفحة */}
        <div className="bg-gov-blue py-12 mb-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">هيكلية المجلس</h1>
          </div>
        </div>

        {/* محتوى الهيكلية */}
        <section className="py-12 mb-8">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Link 
                to="/about" 
                className="flex items-center text-gov-blue hover:text-gov-gold transition-colors"
              >
                <ChevronLeft className="ml-1" size={20} />
                <span>العودة إلى صفحة عن المجلس</span>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-gov-blue mb-6 text-center">نبذة عن هيكلية المجلس</h2>
              <p className="text-gray-700 text-lg mb-4 text-center">
                يتكون مجلس تطوير القطاع الخاص من تسعة عشر قطاعاً، تمثل مختلف القطاعات الاقتصادية في البلاد
              </p>
              <p className="text-gray-700 text-lg mb-4 text-center">
                تهدف هذه الهيكلية المتنوعة إلى ضمان تمثيل شامل لجميع مكونات القطاع الخاص وتلبية احتياجاتها المختلفة
              </p>
            </div>

            <h3 className="text-xl font-bold text-gov-blue mb-6">قطاعات المجلس</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {sectors.map((sector, index) => (
                <div 
                  key={index} 
                  className="p-6 border border-gov-lightblue rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gov-lightblue rounded-full">
                      <sector.icon className="h-6 w-6 text-gov-blue" />
                    </div>
                    <h4 className="text-lg font-medium text-gov-blue">{sector.name}</h4>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Button 
                variant="outline" 
                className="bg-gov-blue text-white hover:bg-gov-gold border-none"
                asChild
              >
                <Link to="/about">العودة إلى صفحة عن المجلس</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Structure;
