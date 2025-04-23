
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ChangePasswordForm from "@/components/auth/ChangePasswordForm";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
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
          <CardTitle>تغيير كلمة المرور</CardTitle>
          <CardDescription>
            قم بإدخال كلمة المرور الحالية وكلمة المرور الجديدة
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChangePasswordForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default ChangePassword;
