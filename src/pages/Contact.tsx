
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, User, AtSign } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      <main className="flex-grow">
        {/* بانر الصفحة */}
        <div className="bg-gov-blue py-12 mb-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">تواصل معنا</h1>
          </div>
        </div>

        {/* معلومات الاتصال ونموذج التواصل */}
        <section className="py-12 mb-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* نموذج الاتصال */}
              <div className="bg-white p-8 rounded-lg shadow-md text-right">
                <h2 className="text-2xl font-bold text-gov-blue mb-6">ارسل رسالة</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="الاسم الكامل" 
                        className="w-full p-3 pr-10 border border-gray-300 rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-gov-blue"
                      />
                      <User className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                    </div>
                    <div className="relative">
                      <input 
                        type="email" 
                        placeholder="البريد الإلكتروني" 
                        className="w-full p-3 pr-10 border border-gray-300 rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-gov-blue"
                      />
                      <AtSign className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="الموضوع" 
                      className="w-full p-3 pr-10 border border-gray-300 rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-gov-blue"
                    />
                    <MessageSquare className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                  <div className="relative">
                    <textarea 
                      placeholder="الرسالة" 
                      rows={5}
                      className="w-full p-3 pr-10 border border-gray-300 rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-gov-blue"
                    ></textarea>
                    <Send className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                  <button 
                    type="submit" 
                    className="bg-gov-blue hover:bg-gov-gold text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center w-full md:w-auto"
                  >
                    إرسال الرسالة
                    <Send className="mr-2 h-5 w-5" />
                  </button>
                </form>
              </div>

              {/* معلومات الاتصال */}
              <div className="flex flex-col space-y-6">
                <div className="bg-gov-lightblue p-8 rounded-lg text-right">
                  <h2 className="text-2xl font-bold text-gov-blue mb-6">معلومات الاتصال</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-end">
                      <div>
                        <h3 className="font-bold text-gov-blue">العنوان</h3>
                        <p className="text-gray-600">ص.ب 12345، بغداد، العراق</p>
                      </div>
                      <div className="ml-4 p-3 bg-white rounded-full text-gov-blue">
                        <MapPin className="h-6 w-6" />
                      </div>
                    </div>

                    <div className="flex items-center justify-end">
                      <div>
                        <h3 className="font-bold text-gov-blue">رقم الهاتف</h3>
                        <p className="text-gray-600" dir="ltr">+964 123 4567</p>
                      </div>
                      <div className="ml-4 p-3 bg-white rounded-full text-gov-blue">
                        <Phone className="h-6 w-6" />
                      </div>
                    </div>

                    <div className="flex items-center justify-end">
                      <div>
                        <h3 className="font-bold text-gov-blue">البريد الإلكتروني</h3>
                        <p className="text-gray-600">info@psdc.gov.iq</p>
                      </div>
                      <div className="ml-4 p-3 bg-white rounded-full text-gov-blue">
                        <Mail className="h-6 w-6" />
                      </div>
                    </div>

                    <div className="flex items-center justify-end">
                      <div>
                        <h3 className="font-bold text-gov-blue">ساعات العمل</h3>
                        <p className="text-gray-600">الأحد - الخميس: 9:00 - 15:00</p>
                      </div>
                      <div className="ml-4 p-3 bg-white rounded-full text-gov-blue">
                        <Clock className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gov-blue p-8 rounded-lg text-white">
                  <h2 className="text-2xl font-bold mb-4">فروع المجلس</h2>
                  <div className="space-y-4">
                    <div className="p-4 border border-white/20 rounded-lg">
                      <h3 className="font-bold">المقر الرئيسي - بغداد</h3>
                      <p className="opacity-80">شارع الكرادة، بغداد</p>
                    </div>
                    <div className="p-4 border border-white/20 rounded-lg">
                      <h3 className="font-bold">فرع البصرة</h3>
                      <p className="opacity-80">شارع الجزائر، البصرة</p>
                    </div>
                    <div className="p-4 border border-white/20 rounded-lg">
                      <h3 className="font-bold">فرع أربيل</h3>
                      <p className="opacity-80">شارع 60 متر، أربيل</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* خريطة الموقع */}
        <section className="py-12 bg-gov-lightblue">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gov-blue">موقعنا على الخريطة</h2>
            </div>
            <div className="overflow-hidden rounded-lg h-[450px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5497.367731678447!2d44.425332!3d33.295382!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155781ba55b949cf%3A0x12fc1788a84fc1fe!2sgolden%20castle%20co.!5e1!3m2!1sen!2siq!4v1745099986489!5m2!1sen!2siq"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
