
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { resetPasswordRequest, checkEmailExists } from "@/services/authService";
import { toast } from "sonner";
import { EmailField } from "../form-fields/EmailField";
import { useAuthValidation } from "@/hooks/useAuthValidation";

interface ResetPasswordFormProps {
  onBack: () => void;
}

const ResetPasswordForm = ({ onBack }: ResetPasswordFormProps) => {
  const [resetSent, setResetSent] = useState(false);
  const { 
    register, 
    handleSubmit, 
    errors, 
    loading, 
    setLoading,
    getEmailValidation 
  } = useAuthValidation("reset");

  const onSubmit = async (data: { email: string }) => {
    try {
      setLoading(true);
      
      const emailExists = await checkEmailExists(data.email);
      
      if (!emailExists) {
        toast.error("البريد الإلكتروني غير مسجل في النظام", {
          style: { color: 'red' }
        });
        return;
      }
      
      const success = await resetPasswordRequest(data.email);
      
      if (success) {
        setResetSent(true);
        toast.success("تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني");
      }
    } catch (error: any) {
      let errorMessage = "فشل إرسال رابط إعادة تعيين كلمة المرور";
      
      // Check for rate limit error
      if (error.message && error.message.includes('rate limit')) {
        errorMessage = "لأسباب أمنية، يمكنك طلب إعادة تعيين كلمة المرور مرة واحدة فقط كل دقيقة";
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

      <div className="flex flex-col gap-2">
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "جاري الإرسال..." : "إرسال رابط إعادة تعيين كلمة المرور"}
        </Button>
        <Button 
          type="button" 
          variant="outline" 
          onClick={onBack}
          className="w-full"
        >
          العودة لتسجيل الدخول
        </Button>
      </div>
      
      {resetSent && (
        <div className="bg-green-50 border border-green-200 rounded p-3 mt-4 text-right">
          <p className="text-green-800">
            تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.
            يرجى التحقق من بريدك الوارد والمجلد الخاص بالرسائل غير المرغوبة.
          </p>
        </div>
      )}
    </form>
  );
};

export default ResetPasswordForm;
