
import { Input } from "@/components/ui/input";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface OrganizationFieldsProps {
  registerOrgName: UseFormRegisterReturn;
  registerPosition: UseFormRegisterReturn;
  errors: {
    organization_name?: FieldError;
    position?: FieldError;
  };
}

export const OrganizationFields = ({ 
  registerOrgName, 
  registerPosition, 
  errors 
}: OrganizationFieldsProps) => {
  return (
    <>
      <div>
        <Input
          placeholder="اسم المؤسسة"
          {...registerOrgName}
          className="text-right"
        />
        {errors.organization_name && (
          <span className="text-red-500 text-sm block text-right mt-1">{errors.organization_name.message}</span>
        )}
      </div>

      <div>
        <Input
          placeholder="المنصب الوظيفي"
          {...registerPosition}
          className="text-right"
        />
        {errors.position && (
          <span className="text-red-500 text-sm block text-right mt-1">{errors.position.message}</span>
        )}
      </div>
    </>
  );
};
