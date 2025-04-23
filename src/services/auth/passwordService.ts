
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

/**
 * إرسال رابط إعادة تعيين كلمة المرور
 */
export async function resetPasswordRequest(email: string): Promise<boolean> {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`,
    });
    
    if (error) {
      if (error.message && error.message.includes('rate limit')) {
        throw new Error("لأسباب أمنية، يمكنك طلب إعادة تعيين كلمة المرور مرة واحدة فقط كل دقيقة");
      }
      throw error;
    }
    
    toast.success("تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني");
    return true;
  } catch (error: any) {
    console.error("خطأ في إرسال رابط إعادة تعيين كلمة المرور:", error);
    throw error;
  }
}

/**
 * تعيين كلمة مرور جديدة
 */
export async function updatePassword(newPassword: string): Promise<boolean> {
  try {
    const { error } = await supabase.auth.updateUser({
      password: newPassword
    });
    
    if (error) throw error;
    
    toast.success("تم تعيين كلمة المرور الجديدة بنجاح");
    return true;
  } catch (error: any) {
    console.error("خطأ في تعيين كلمة المرور الجديدة:", error);
    toast.error(error.message || "فشل تعيين كلمة المرور الجديدة");
    return false;
  }
}
