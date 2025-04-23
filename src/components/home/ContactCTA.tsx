
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="py-16 bg-gov-lightgold">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center md:items-stretch">
          <div className="md:w-2/3 text-right mb-8 md:mb-0 md:ml-8">
            <h2 className="text-3xl font-bold text-gov-blue mb-4">تواصل معنا</h2>
            <p className="text-gray-600 mb-6">
              هل لديك استفسار أو ترغب في التعاون مع مجلس تطوير القطاع الخاص؟ نحن هنا للإجابة على استفساراتك وتقديم الدعم اللازم.
            </p>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex items-center justify-end bg-gov-lightblue rounded-lg p-4">
                <div>
                  <div className="font-medium">راسلنا عبر البريد الإلكتروني</div>
                  <div className="text-gov-blue">info@psdc.gov.iq</div>
                </div>
                <Mail className="ml-3 text-gov-blue h-10 w-10" />
              </div>
              <div className="flex items-center justify-end bg-gov-lightblue rounded-lg p-4">
                <div>
                  <div className="font-medium">اتصل بنا</div>
                  <div className="text-gov-blue" dir="ltr">+964 123 4567</div>
                </div>
                <Phone className="ml-3 text-gov-blue h-10 w-10" />
              </div>
            </div>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-gov-blue text-white hover:bg-gov-gold transition-colors duration-300 px-6 py-3 rounded-lg font-medium"
            >
              المزيد من طرق التواصل
              <ArrowLeft className="mr-2" size={18} />
            </Link>
          </div>
          <div className="md:w-1/3 bg-gov-lightblue rounded-lg p-6">
            <h3 className="text-xl font-bold text-gov-blue mb-4 text-center">نموذج التواصل السريع</h3>
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="الاسم الكامل" 
                  className="w-full p-3 border border-gray-300 rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-gov-blue"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="البريد الإلكتروني" 
                  className="w-full p-3 border border-gray-300 rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-gov-blue"
                />
              </div>
              <div>
                <textarea 
                  placeholder="رسالتك" 
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-gov-blue"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-gov-gold hover:bg-yellow-600 text-white py-3 rounded-lg font-medium transition-colors duration-300"
              >
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
