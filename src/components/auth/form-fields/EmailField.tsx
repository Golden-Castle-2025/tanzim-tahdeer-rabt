
import { Input } from "@/components/ui/input";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface EmailFieldProps {
  register: UseFormRegisterReturn;
  error?: FieldError;
}

export const EmailField = ({ register, error }: EmailFieldProps) => {
  return (
    <div>
      <Input
        placeholder="البريد الإلكتروني"
        type="email"
        {...register}
        className="text-right"
      />
      {error && (
        <span className="text-red-500 text-sm block text-right mt-1">{error.message}</span>
      )}
    </div>
  );
};
