
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/auth/AuthForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Home } from "lucide-react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4" dir="rtl">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center relative">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute left-4 top-4 bg-gov-lightblue rounded-full p-2"
            onClick={handleHomeClick}
          >
            <Home className="h-6 w-6 text-gov-blue" />
          </Button>
          <CardTitle>{isLogin ? "تسجيل الدخول" : "إنشاء حساب جديد"}</CardTitle>
          <CardDescription>
            {isLogin 
              ? "قم بتسجيل الدخول للوصول إلى حسابك" 
              : "قم بإنشاء حساب جديد للوصول إلى خدمات المجلس"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AuthForm isLogin={isLogin} />
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="w-full text-sm text-muted-foreground hover:text-primary mt-4"
          >
            {isLogin 
              ? "ليس لديك حساب؟ إنشاء حساب جديد" 
              : "لديك حساب بالفعل؟ تسجيل الدخول"}
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
