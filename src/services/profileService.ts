
import { supabase } from "@/integrations/supabase/client";
import { UserData } from "./types";

/**
 * الحصول على بيانات الملف الشخصي للمستخدم
 */
export async function getUserProfile(userId: string): Promise<UserData | null> {
  try {
    const { data: profiles, error } = await supabase
      .from('profiles')
      .select(`
        id,
        full_name,
        user_type,
        department_id,
        role_id
      `)
      .eq('id', userId)
      .single();
    
    if (error) {
      console.error("خطأ في الحصول على بيانات المستخدم:", error);
      return null;
    }

    if (!profiles) {
      return null;
    }
    
    // الحصول على معلومات الدور إذا كان متوفراً
    let roles: string[] = [];
    if (profiles.role_id) {
      const { data: roleData, error: roleError } = await supabase
        .from('roles')
        .select('name')
        .eq('id', profiles.role_id)
        .single();
        
      if (!roleError && roleData) {
        roles = [roleData.name];
      }
    }
    
    return {
      id: userId,
      email: '', // سيتم تعبئته من بيانات الجلسة
      roles: roles,
      full_name: profiles.full_name,
      user_type: profiles.user_type,
      department_id: profiles.department_id
    };
  } catch (error) {
    console.error("خطأ في الحصول على الملف الشخصي:", error);
    return null;
  }
}

/**
 * تحديث بيانات الملف الشخصي
 */
export async function updateUserProfile(userId: string, profileData: Partial<UserData>) {
  try {
    const { error } = await supabase
      .from('profiles')
      .update({
        full_name: profileData.full_name,
        user_type: profileData.user_type,
        department_id: profileData.department_id,
      })
      .eq('id', userId);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error("خطأ في تحديث بيانات المستخدم:", error);
    return false;
  }
}

