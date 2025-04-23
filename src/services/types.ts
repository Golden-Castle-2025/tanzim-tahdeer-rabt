
export interface UserData {
  id: string;
  email: string;
  roles: string[];
  full_name?: string;
  user_type?: 'internal' | 'external';
  department_id?: string;
}

export interface RegisterData {
  full_name?: string;
  phone?: string;
  organization?: string;
  position?: string;
  department_id?: string;
  user_type?: 'internal' | 'external';
  account_type?: 'individual' | 'organization';
}

export type AppRole = 'مدير' | 'مشرف' | 'مشرف رئيسي' | 'مستخدم';

export interface UserRole {
  id: string;
  user_id: string;
  role: AppRole;
  created_at: string;
}
