
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormFieldProps {
  label: string;
  type?: string;
  value: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}

const FormField = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={label}>{label} {required && "*"}</Label>
      <Input
        id={label}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default FormField;
