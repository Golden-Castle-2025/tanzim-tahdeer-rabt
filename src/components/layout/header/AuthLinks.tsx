
import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Session } from "@supabase/supabase-js";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useIsMobile } from "@/hooks/use-mobile";

interface AuthLinksProps {
  session: Session | null;
}

const AuthLinks = ({ session }: AuthLinksProps) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      
      // مسح البيانات المخزنة محلياً
      localStorage.removeItem("auth_token");
      
      toast.success("تم تسجيل الخروج بنجاح");
      
      // إعادة التوجيه بشكل إجباري
      setTimeout(() => {
        navigate("/auth");
        if (isMobile) {
          // للأجهزة المحمولة، إعادة تحميل الصفحة لضمان الخروج التام
          window.location.reload();
        }
      }, 300);
    } catch (error) {
      console.error("خطأ في تسجيل الخروج:", error);
      toast.error("حدث خطأ أثناء تسجيل الخروج");
    }
  };

  const links = session ? [
    { name: "تسجيل الخروج", action: handleLogout }
  ] : [
    { name: "تسجيل الدخول", path: "/auth" }
  ];

  return (
    <>
      {links.map((link, index) => (
        link.path ? (
          <Link
            key={index}
            to={link.path}
            className="text-gov-blue hover:text-gov-gold transition-colors"
          >
            {link.name}
          </Link>
        ) : (
          <button
            key={index}
            onClick={link.action}
            className="text-gov-blue hover:text-gov-gold transition-colors"
          >
            {link.name}
          </button>
        )
      ))}
    </>
  );
};

export default AuthLinks;
