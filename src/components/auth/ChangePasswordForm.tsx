
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { PasswordField } from "./form-fields/PasswordField";

interface ChangePasswordFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface Props {
  onSuccess?: () => void;
}

const ChangePasswordForm = ({ onSuccess }: Props) => {
  const [loading, setLoading] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    watch,
    formState: { errors }
  } = useForm<ChangePasswordFormData>();

  const newPassword = watch("newPassword");

  const onSubmit = async (data: ChangePasswordFormData) => {
    if (data.newPassword !== data.confirmPassword) {
      toast.error("كلمتا المرور غير متطابقتين");
      return;
    }

    try {
      setLoading(true);

      // First verify current password by attempting to sign in
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: (await supabase.auth.getUser()).data.user?.email || '',
        password: data.currentPassword,
      });

      if (signInError) {
        toast.error("كلمة المرور الحالية غير صحيحة");
        return;
      }

      // Update password
      const { error: updateError } = await supabase.auth.updateUser({
        password: data.newPassword
      });

      if (updateError) throw updateError;

      toast.success("تم تغيير كلمة المرور بنجاح");
      onSuccess?.();
      
    } catch (error: any) {
      toast.error(error.message || "حدث خطأ أثناء تحديث كلمة المرور");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <PasswordField
          register={register("currentPassword", { 
            required: "كلمة المرور الحالية مطلوبة" 
          })}
          error={errors.currentPassword}
          placeholder="كلمة المرور الحالية"
        />
      </div>

      <div>
        <PasswordField
          register={register("newPassword", {
            required: "كلمة المرور الجديدة مطلوبة",
            minLength: {
              value: 6,
              message: "يجب أن تكون كلمة المرور 6 أحرف على الأقل"
            }
          })}
          error={errors.newPassword}
          placeholder="كلمة المرور الجديدة"
        />
      </div>

      <div>
        <PasswordField
          register={register("confirmPassword", {
            required: "تأكيد كلمة المرور مطلوب",
            validate: value => value === newPassword || "كلمتا المرور غير متطابقتين"
          })}
          error={errors.confirmPassword}
          placeholder="تأكيد كلمة المرور الجديدة"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full" 
        disabled={loading}
      >
        {loading ? "جاري التحديث..." : "تغيير كلمة المرور"}
      </Button>
    </form>
  );
};

export default ChangePasswordForm;
