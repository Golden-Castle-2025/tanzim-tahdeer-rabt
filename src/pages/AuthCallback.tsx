
import { useEffect } from "react";
import { handleAuthCallback } from "@/services/authService";
import { Card, CardContent } from "@/components/ui/card";
import { Loader } from "lucide-react";

const AuthCallback = () => {
  useEffect(() => {
    const processAuth = async () => {
      await handleAuthCallback();
    };
    
    processAuth();
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4" dir="rtl">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6 text-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <Loader className="h-8 w-8 animate-spin text-primary" />
            <p className="text-lg">جاري تسجيل الدخول...</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthCallback;
