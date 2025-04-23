
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { UserData } from "@/services/types";
import { getUserRoles } from "@/services/roleService";

export const useUserManagement = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      // Fetch profiles data
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('id, full_name, user_type, updated_at');
      
      if (profilesError) {
        throw profilesError;
      }
      
      // Get current user's session to access their email
      const { data: sessionData } = await supabase.auth.getSession();
      const currentUserEmail = sessionData?.session?.user?.email || '';
      const currentUserId = sessionData?.session?.user?.id || '';
      
      console.log("Current user:", currentUserId, currentUserEmail);
      console.log("Fetched profiles:", profiles?.length);
      
      // Format the users with their roles
      const formattedUsers: UserData[] = [];
      for (const profile of profiles || []) {
        try {
          const userRoles = await getUserRoles(profile.id);
          const roleNames = userRoles.map(ur => ur.role);
          
          // Use current user's email if the profile ID matches
          const email = currentUserId === profile.id 
            ? currentUserEmail 
            : '• مستخدم مسجل •'; // For security, show a placeholder for other users
          
          formattedUsers.push({
            id: profile.id,
            email: email,
            roles: roleNames,
            full_name: profile.full_name || 'مستخدم بدون اسم',
            user_type: profile.user_type || 'external',
          });
        } catch (roleError) {
          console.error("Error fetching roles for user:", profile.id, roleError);
        }
      }
      
      console.log("Formatted users:", formattedUsers.length);
      setUsers(formattedUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error("حدث خطأ في جلب المستخدمين");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateUser = async (data: any) => {
    try {
      console.log("Creating user with data:", data);
      
      // Create the user in Supabase Auth via a server function or API
      // Since direct auth.admin access requires higher privileges
      
      // For demonstration, we'll create a temporary record without actual auth
      // In production, this should be handled by a secure server-side function
      
      const tempUserId = `temp-${Date.now()}`;
      
      // Create profile record
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .insert({
          id: tempUserId, // In production, this would be a real user ID
          full_name: data.full_name,
          user_type: data.user_type
        })
        .select();

      if (profileError) {
        console.error("Profile error:", profileError);
        throw profileError;
      }

      toast.success('تم إضافة المستخدم بنجاح');
      toast.info('ملاحظة: في البيئة الإنتاجية، يتم إنشاء الحسابات من خلال وظيفة خلفية آمنة');
      
      fetchUsers();
      return true;
    } catch (error) {
      console.error('Error creating user:', error);
      toast.error('حدث خطأ في إنشاء المستخدم');
      return false;
    }
  };

  const handleUpdateUser = async (userId: string, data: any) => {
    try {
      console.log("Updating user:", userId, data);
      
      const { error: profileError } = await supabase
        .from('profiles')
        .update({
          full_name: data.full_name,
          user_type: data.user_type
        })
        .eq('id', userId);

      if (profileError) {
        console.error("Profile update error:", profileError);
        throw profileError;
      }

      toast.success('تم تحديث المستخدم بنجاح');
      fetchUsers();
      return true;
    } catch (error) {
      console.error('Error updating user:', error);
      toast.error('حدث خطأ في تحديث المستخدم');
      return false;
    }
  };

  const handleDeleteUser = async (userId: string) => {
    if (!confirm('هل أنت متأكد من حذف هذا المستخدم؟')) return;

    try {
      console.log("Deleting user:", userId);
      
      // Delete the profile first
      const { error: profileError } = await supabase
        .from('profiles')
        .delete()
        .eq('id', userId);
      
      if (profileError) {
        console.error("Profile delete error:", profileError);
        throw profileError;
      }
      
      // In production, deletion of auth user would be handled by a secure server-side function
      
      toast.success('تم حذف المستخدم بنجاح');
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('حدث خطأ في حذف المستخدم');
    }
  };

  return {
    users,
    loading,
    fetchUsers,
    handleCreateUser,
    handleUpdateUser,
    handleDeleteUser
  };
};
