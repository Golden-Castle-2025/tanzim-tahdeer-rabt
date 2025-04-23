
import { supabase } from "@/integrations/supabase/client";
import type { RegisterData } from "../types";

/**
 * تسجيل مستخدم جديد
 */
export async function register(
  email: string, 
  password: string, 
  userData: RegisterData
): Promise<boolean> {
  try {
    const { data: { user }, error: signUpError } = await supabase.auth.signUp({ 
      email, 
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`
      }
    });

    if (signUpError) throw signUpError;
    if (!user) return false;

    const { error: updateError } = await supabase
      .from('profiles')
      .update({
        full_name: userData.full_name,
        phone: userData.phone,
        organization: userData.organization,
        position: userData.position,
        department_id: userData.department_id,
        user_type: userData.user_type || 'external'
      })
      .eq('id', user.id);

    if (updateError) {
      console.error("خطأ في تحديث الملف الشخصي:", updateError);
      throw updateError;
    }

    return true;
  } catch (error: any) {
    console.error("خطأ في إنشاء الحساب:", error);
    throw new Error(error.message || "خطأ في إنشاء الحساب");
  }
}
