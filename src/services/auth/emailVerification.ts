
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

/**
 * التحقق من وجود البريد الإلكتروني
 */
export async function checkEmailExists(email: string): Promise<boolean> {
  try {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('id')
        .eq('email', email)
        .maybeSingle();
      
      if (!error && data) {
        return true;
      }
    } catch (e) {
      console.error("خطأ في استعلام جدول البروفايل:", e);
    }
    
    const { data, error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        shouldCreateUser: false
      }
    });
    
    if (error && error.message.includes('Invalid login credentials')) {
      return false;
    }
    
    return true;
  } catch (error) {
    console.error("خطأ في التحقق من وجود البريد الإلكتروني:", error);
    return false;
  }
}

/**
 * التعامل مع عملية استدعاء المصادقة
 */
export async function handleAuthCallback(): Promise<void> {
  try {
    const { error } = await supabase.auth.getSession();
    if (error) throw error;
    
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      toast.success("تم تسجيل الدخول بنجاح");
      window.location.href = "/";
    } else {
      toast.error("فشل تسجيل الدخول");
      window.location.href = "/auth";
    }
  } catch (error) {
    console.error("خطأ في معالجة استدعاء المصادقة:", error);
    toast.error("حدث خطأ أثناء عملية تسجيل الدخول");
    window.location.href = "/auth";
  }
}
