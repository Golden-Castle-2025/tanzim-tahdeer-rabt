
import { useState } from "react";
import { useForm } from "react-hook-form";

export interface AuthValidationFields {
  email?: string;
  password?: string;
  full_name?: string;
  organization_name?: string;
  position?: string;
  phone?: string;
  account_type?: "individual" | "organization";
  confirmPassword?: string;
}

export const useAuthValidation = (type: "login" | "register" | "reset") => {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, watch, setValue } = 
    useForm<AuthValidationFields>();

  const getEmailValidation = () => ({
    required: { value: true, message: "البريد الإلكتروني مطلوب" },
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "البريد الإلكتروني غير صالح"
    }
  });

  const getPasswordValidation = () => ({
    required: { value: true, message: "كلمة المرور مطلوبة" },
    minLength: {
      value: 6,
      message: "يجب أن تكون كلمة المرور 6 أحرف على الأقل"
    }
  });

  return {
    register,
    handleSubmit,
    errors,
    loading,
    setLoading,
    watch,
    setValue,
    getEmailValidation,
    getPasswordValidation
  };
};
