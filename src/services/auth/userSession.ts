
import { User, Session } from '@supabase/supabase-js';
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

/**
 * الحصول على جلسة المستخدم الحالية
 */
export async function getUserSession(): Promise<{ user: User | null; session: Session | null }> {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    return {
      session,
      user: session?.user ?? null
    };
  } catch (error) {
    console.error("خطأ في الحصول على جلسة المستخدم:", error);
    return { user: null, session: null };
  }
}

/**
 * تسجيل الخروج
 */
export async function logout(): Promise<void> {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    
    localStorage.removeItem("auth_token");
    toast.success("تم تسجيل الخروج بنجاح");
    
    setTimeout(() => {
      window.location.href = "/auth";
    }, 300);
  } catch (error) {
    console.error("خطأ في تسجيل الخروج:", error);
    toast.error("حدث خطأ أثناء تسجيل الخروج");
  }
}
