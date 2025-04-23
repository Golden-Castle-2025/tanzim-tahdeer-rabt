
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { register as registerUser } from "@/services/authService";
import { toast } from "sonner";
import { EmailField } from "../form-fields/EmailField";
import { PasswordField } from "../form-fields/PasswordField";
import { OrganizationFields } from "../form-fields/OrganizationFields";
import { useAuthValidation } from "@/hooks/useAuthValidation";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { 
    register, 
    handleSubmit, 
    errors, 
    loading, 
    setLoading,
    setValue,
    watch,
    getEmailValidation,
    getPasswordValidation 
  } = useAuthValidation("register");
  
  const accountType = watch("account_type");

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const success = await registerUser(data.email, data.password, {
        full_name: data.full_name,
        phone: data.phone,
        organization: data.organization_name,
        position: data.position,
        account_type: data.account_type || 'individual'
      });
      
      if (success) {
        toast.success("تم إنشاء الحساب بنجاح");
        navigate("/");
      }
    } catch (error: any) {
      let errorMessage = "حدث خطأ أثناء إنشاء الحساب";
      
      if (error.message.includes('Email already exists')) {
        errorMessage = "البريد الإلكتروني مسجل مسبقاً";
      }
      
      toast.error(errorMessage, {
        style: { color: 'red' }
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          placeholder="الاسم الكامل"
          {...register("full_name", { 
            required: { value: true, message: "الاسم الكامل مطلوب" } 
          })}
          className="text-right"
        />
        {errors.full_name && (
          <span className="text-red-500 text-sm block text-right mt-1">{errors.full_name.message}</span>
        )}
      </div>
      
      <div className="space-y-2">
        <Select onValueChange={(value) => setValue('account_type', value as "individual" | "organization")}>
          <SelectTrigger className="text-right">
            <SelectValue placeholder="نوع الحساب" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="individual">فرد</SelectItem>
            <SelectItem value="organization">مؤسسة</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {accountType === "organization" && (
        <OrganizationFields 
          registerOrgName={register("organization_name", { 
            required: { value: true, message: "اسم المؤسسة مطلوب" }
          })}
          registerPosition={register("position")}
          errors={errors} 
        />
      )}

      <div>
        <Input
          placeholder="رقم الهاتف"
          {...register("phone")}
          className="text-right"
          type="tel"
        />
        {errors.phone && (
          <span className="text-red-500 text-sm block text-right mt-1">{errors.phone.message}</span>
        )}
      </div>

      <EmailField 
        register={register("email", getEmailValidation())}
        error={errors.email}
      />

      <PasswordField
        register={register("password", getPasswordValidation())}
        error={errors.password}
      />

      <Button 
        type="submit" 
        className="w-full" 
        disabled={loading}
      >
        {loading ? "جاري التحميل..." : "إنشاء حساب"}
      </Button>
    </form>
  );
};

export default RegisterForm;
