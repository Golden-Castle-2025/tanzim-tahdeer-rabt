
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface PasswordFieldProps {
  register: UseFormRegisterReturn;
  error?: FieldError;
  placeholder?: string;
}

export const PasswordField = ({ 
  register, 
  error, 
  placeholder = "كلمة المرور"
}: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        placeholder={placeholder}
        type={showPassword ? "text" : "password"}
        {...register}
        className="text-right pr-4 pl-10"
      />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="absolute left-0 top-0"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </Button>
      {error && (
        <span className="text-red-500 text-sm block text-right mt-1">{error.message}</span>
      )}
    </div>
  );
};
