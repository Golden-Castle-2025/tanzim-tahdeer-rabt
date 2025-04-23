
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { updatePassword } from "@/services/authService";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface FormData {
  password: string;
  confirmPassword: string;
}

const ResetPasswordForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>();

  const password = watch("password", "");

  const onSubmit = async (data: FormData) => {
    if (data.password !== data.confirmPassword) {
      toast.error("كلمتا المرور غير متطابقتين");
      return;
    }

    try {
      setLoading(true);
      const result = await updatePassword(data.password);
      
      if (result) {
        setSuccess(true);
        setShowDialog(true);
      }
    } catch (error: any) {
      toast.error(error.message || "حدث خطأ أثناء تحديث كلمة المرور");
    } finally {
      setLoading(false);
    }
  };

  const handleLoginRedirect = () => {
    navigate("/auth");
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Input
            placeholder="كلمة المرور الجديدة"
            type="password"
            {...register("password", { 
              required: true,
              minLength: { value: 6, message: "يجب أن تكون كلمة المرور على الأقل 6 أحرف" } 
            })}
            className="text-right"
          />
          {errors.password && (
            <span className="text-destructive text-sm">
              {errors.password.message || "هذا الحقل مطلوب"}
            </span>
          )}
        </div>

        <div>
          <Input
            placeholder="تأكيد كلمة المرور"
            type="password"
            {...register("confirmPassword", { 
              required: true,
              validate: value => value === password || "كلمتا المرور غير متطابقتين"
            })}
            className="text-right"
          />
          {errors.confirmPassword && (
            <span className="text-destructive text-sm">
              {errors.confirmPassword.message || "هذا الحقل مطلوب"}
            </span>
          )}
        </div>

        <Button 
          type="submit" 
          className="w-full" 
          disabled={loading}
        >
          {loading ? "جاري التحديث..." : "تعيين كلمة المرور الجديدة"}
        </Button>
      </form>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>تم تعيين كلمة المرور بنجاح</DialogTitle>
            <DialogDescription>
              تم تعيين كلمة المرور الجديدة بنجاح. يمكنك الآن تسجيل الدخول باستخدام كلمة المرور الجديدة.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={handleLoginRedirect}>الذهاب إلى صفحة تسجيل الدخول</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ResetPasswordForm;
