
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { login } from "@/services/authService";
import { toast } from "sonner";
import { EmailField } from "../form-fields/EmailField";
import { PasswordField } from "../form-fields/PasswordField";
import { useAuthValidation } from "@/hooks/useAuthValidation";

interface LoginFormProps {
  onShowResetForm: () => void;
}

const LoginForm = ({ onShowResetForm }: LoginFormProps) => {
  const navigate = useNavigate();
  const { 
    register, 
    handleSubmit, 
    errors, 
    loading, 
    setLoading,
    getEmailValidation,
    getPasswordValidation 
  } = useAuthValidation("login");

  const onSubmit = async (data: { email: string; password: string; }) => {
    setLoading(true);
    try {
      const success = await login(data.email, data.password);
      if (success) {
        toast.success("تم تسجيل الدخول بنجاح");
        navigate("/");
      }
    } catch (error: any) {
      let errorMessage = "حدث خطأ غير متوقع";
      
      if (error.message.includes('Invalid login credentials')) {
        errorMessage = "بيانات تسجيل الدخول غير صحيحة. يرجى التحقق من البريد الإلكتروني وكلمة المرور";
      } else if (error.message.includes('Email not confirmed')) {
        errorMessage = "يرجى تأكيد بريدك الإلكتروني قبل تسجيل الدخول";
      }
      
      toast.error(errorMessage, {
        style: { color: 'red' }
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <EmailField 
        register={register("email", getEmailValidation())} 
        error={errors.email} 
      />
      
      <PasswordField 
        register={register("password", getPasswordValidation())}
        error={errors.password}
      />

      <button
        type="button"
        onClick={onShowResetForm}
        className="text-sm text-muted-foreground hover:text-primary w-full text-right"
      >
        نسيت كلمة المرور؟
      </button>

      <Button 
        type="submit" 
        className="w-full" 
        disabled={loading}
      >
        {loading ? "جاري التحميل..." : "تسجيل الدخول"}
      </Button>
    </form>
  );
};

export default LoginForm;
