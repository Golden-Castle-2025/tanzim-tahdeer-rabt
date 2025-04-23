import { supabase } from "@/integrations/supabase/client";
import { UserData, AppRole, UserRole } from "./types";

/**
 * التحقق مما إذا كان المستخدم لديه دور محدد
 */
export async function hasRole(userData: UserData | null, role: AppRole): Promise<boolean> {
  if (!userData || !userData.id) {
    return false;
  }

  try {
    const { data, error } = await supabase
      .from('user_roles')
      .select('*')
      .eq('user_id', userData.id)
      .eq('role', role)
      .single();

    if (error) {
      console.error("خطأ في التحقق من الدور:", error);
      return false;
    }

    return !!data;
  } catch (error) {
    console.error("خطأ في التحقق من الدور:", error);
    return false;
  }
}

/**
 * التحقق مما إذا كان المستخدم مديراً
 */
export async function isAdmin(userData: UserData | null): Promise<boolean> {
  return hasRole(userData, 'مدير');
}

/**
 * إضافة دور جديد للمستخدم
 */
export async function addUserRole(userId: string, role: AppRole): Promise<UserRole | null> {
  try {
    const { data, error } = await supabase
      .from('user_roles')
      .insert([
        { user_id: userId, role }
      ])
      .select()
      .single();

    if (error) {
      console.error("خطأ في إضافة الدور:", error);
      return null;
    }

    return data;
  } catch (error) {
    console.error("خطأ في إضافة الدور:", error);
    return null;
  }
}

/**
 * حذف دور من المستخدم
 */
export async function removeUserRole(userId: string, role: AppRole): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('user_roles')
      .delete()
      .match({ user_id: userId, role });

    if (error) {
      console.error("خطأ في حذف الدور:", error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("خطأ في حذف الدور:", error);
    return false;
  }
}

/**
 * جلب جميع أدوار المستخدم
 */
export async function getUserRoles(userId: string): Promise<UserRole[]> {
  try {
    const { data, error } = await supabase
      .from('user_roles')
      .select('*')
      .eq('user_id', userId);

    if (error) {
      console.error("خطأ في جلب الأدوار:", error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error("خطأ في جلب الأدوار:", error);
    return [];
  }
}

/**
 * التحقق مما إذا كان المستخدم مشرفًا رئيسيًا
 */
export async function isSuperAdmin(userData: UserData | null): Promise<boolean> {
  return hasRole(userData, 'مشرف رئيسي');
}

/**
 * إضافة دور المشرف الرئيسي لمستخدم
 */
export async function assignSuperAdmin(userId: string): Promise<boolean> {
  try {
    const result = await addUserRole(userId, 'مشرف رئيسي');
    return !!result;
  } catch (error) {
    console.error("خطأ في إضافة دور المشرف الرئيسي:", error);
    return false;
  }
}
