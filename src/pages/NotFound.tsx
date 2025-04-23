import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center bg-white p-8 rounded-lg shadow-md">
            <div className="text-9xl font-bold text-gov-blue mb-4">404</div>
            <h1 className="text-2xl font-bold text-gov-darkgray mb-4">عذراً، الصفحة غير موجودة</h1>
            <p className="text-gray-600 mb-8">
              الصفحة التي تحاول الوصول إليها غير متوفرة أو تم نقلها إلى عنوان آخر.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center bg-gov-blue text-white hover:bg-gov-gold transition-colors duration-300 px-6 py-3 rounded-lg font-medium"
            >
              <Home className="ml-2" size={18} />
              العودة إلى الصفحة الرئيسية
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
