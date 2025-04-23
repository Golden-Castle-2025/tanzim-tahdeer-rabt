
import { apiRequest } from "./apiService";
import { API_ENDPOINTS, RequestMethod } from "./config";
import { UserData } from "@/services/types";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  full_name?: string;
  phone?: string;
  organization?: string;
  position?: string;
  department_id?: string;
  user_type?: 'internal' | 'external';
}

export interface AuthResponse {
  user: UserData;
  token: string;
}

// تسجيل الدخول
export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  const response = await apiRequest<AuthResponse>(
    API_ENDPOINTS.AUTH.LOGIN,
    RequestMethod.POST,
    credentials
  );
  
  // حفظ التوكن في التخزين المحلي
  if (response.token) {
    localStorage.setItem("auth_token", response.token);
  }
  
  return response;
};

// التسجيل
export const register = async (data: RegisterData): Promise<AuthResponse> => {
  const response = await apiRequest<AuthResponse>(
    API_ENDPOINTS.AUTH.REGISTER,
    RequestMethod.POST,
    data
  );
  
  // حفظ التوكن في التخزين المحلي
  if (response.token) {
    localStorage.setItem("auth_token", response.token);
  }
  
  return response;
};

// جلب بيانات المستخدم الحالي
export const getCurrentUser = async (): Promise<UserData | null> => {
  try {
    // تحقق من وجود توكن
    const token = localStorage.getItem("auth_token");
    if (!token) {
      return null;
    }
    
    return await apiRequest<UserData>(
      API_ENDPOINTS.AUTH.USER,
      RequestMethod.GET
    );
  } catch (error) {
    // في حالة فشل الطلب، إزالة التوكن
    localStorage.removeItem("auth_token");
    return null;
  }
};

// تسجيل الخروج
export const logout = async (): Promise<void> => {
  try {
    await apiRequest<void>(
      API_ENDPOINTS.AUTH.LOGOUT,
      RequestMethod.POST
    );
  } finally {
    // حتى في حالة فشل الطلب، إزالة التوكن من التخزين المحلي
    localStorage.removeItem("auth_token");
  }
};

// تحديث دالة getUserData لتستخدم خدمة API الجديدة
export const getUserData = async (): Promise<UserData> => {
  const userData = await getCurrentUser();
  if (!userData) {
    throw new Error("المستخدم غير مسجل الدخول");
  }
  return userData;
};
