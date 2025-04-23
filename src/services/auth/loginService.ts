
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

/**
 * تسجيل الدخول باستخدام البريد الإلكتروني وكلمة المرور
 */
export async function login(email: string, password: string): Promise<boolean> {
  try {
    const { data: { session }, error } = await supabase.auth.signInWithPassword({ 
      email, 
      password 
    });

    if (error) {
      let errorMessage = error.message;
      if (error.message.includes('Invalid login credentials')) {
        errorMessage = 'بيانات تسجيل الدخول غير صحيحة';
      } else if (error.message.includes('Email not confirmed')) {
        errorMessage = 'يرجى تأكيد بريدك الإلكتروني';
      }
      throw new Error(errorMessage);
    }
    
    return !!session;
  } catch (error: any) {
    console.error("خطأ في تسجيل الدخول:", error);
    throw new Error(error.message || "خطأ في تسجيل الدخول");
  }
}
