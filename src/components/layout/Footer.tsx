import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gov-blue text-white">
      {/* القسم الرئيسي للفوتر */}
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-right">
          {/* العمود الأول - معلومات الاتصال */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-r-4 border-gov-gold pr-3">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-end">
                <span className="text-sm">ص.ب 12345، بغداد، العراق</span>
                <MapPin className="mr-2 h-5 w-5 text-gov-gold" />
              </li>
              <li className="flex items-center justify-end">
                <span className="text-sm" dir="ltr">+964 123 4567</span>
                <Phone className="mr-2 h-5 w-5 text-gov-gold" />
              </li>
              <li className="flex items-center justify-end">
                <span className="text-sm">info@psdc.gov.iq</span>
                <Mail className="mr-2 h-5 w-5 text-gov-gold" />
              </li>
            </ul>
          </div>

          {/* العمود الثاني - روابط سريعة */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-r-4 border-gov-gold pr-3">روابط مهمة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-gov-gold transition-colors">من نحن</Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-gov-gold transition-colors">خدماتنا</Link>
              </li>
              <li>
                <Link to="/news" className="text-sm hover:text-gov-gold transition-colors">الأخبار والفعاليات</Link>
              </li>
              <li>
                <Link to="/reports" className="text-sm hover:text-gov-gold transition-colors">التقارير والإصدارات</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-gov-gold transition-colors">اتصل بنا</Link>
              </li>
            </ul>
          </div>

          {/* العمود الثالث - الجهات الحكومية */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-r-4 border-gov-gold pr-3">الجهات ذات العلاقة</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://mop.gov.iq" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gov-gold transition-colors">وزارة التخطيط</a>
              </li>
              <li>
                <a href="https://investpromo.gov.iq" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gov-gold transition-colors">الهيئة العامة للاستثمار</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gov-gold transition-colors">وزارة المالية</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gov-gold transition-colors">وزارة التجارة</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gov-gold transition-colors">وزارة الصناعة</a>
              </li>
            </ul>
          </div>

          {/* العمود الرابع - النشرة البريدية */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-r-4 border-gov-gold pr-3">النشرة البريدية</h3>
            <p className="text-sm mb-3">اشترك في النشرة البريدية للحصول على آخر الأخبار والتحديثات</p>
            <div className="flex">
              <button className="bg-gov-gold hover:bg-yellow-600 text-white px-4 py-2 rounded-r">اشتراك</button>
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="px-3 py-2 text-black text-right flex-grow rounded-l focus:outline-none"
              />
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-bold mb-2">تابعنا على:</h4>
              <div className="flex space-x-3 space-x-reverse justify-end">
                <a href="#" className="hover:text-gov-gold transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-gov-gold transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-gov-gold transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-gov-gold transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* شريط الحقوق */}
      <div className="py-4 border-t border-gray-700 text-center text-sm">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} مجلس تطوير القطاع الخاص. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
