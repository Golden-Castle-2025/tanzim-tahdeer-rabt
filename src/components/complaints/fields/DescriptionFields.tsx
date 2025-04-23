
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ComplaintsFormInput } from "../schema";
import { UseFormReturn } from "react-hook-form";
import { FileUploadField } from "./FileUploadField";

interface DescriptionFieldsProps {
  form: UseFormReturn<ComplaintsFormInput>;
}

export const DescriptionFields = ({ form }: DescriptionFieldsProps) => {
  const complaintTypes = [
    { value: "suggestion", label: "مقترح" },
    { value: "problem", label: "مشكلة" },
    { value: "inquiry", label: "استفسار" }
  ];

  const priorityTypes = [
    { value: "low", label: "منخفض" },
    { value: "medium", label: "متوسط" },
    { value: "high", label: "مرتفع" }
  ];

  return (
    <>
      <div className="grid md:grid-cols-2 gap-4">
        {/* إخفاء حقل نوع الطلب والاحتفاظ به في النموذج */}
        <div className="hidden">
          <FormField
            control={form.control}
            name="complaint_type"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange} defaultValue="problem">
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر نوع الطلب" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {complaintTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* إخفاء حقل الأولوية والاحتفاظ به في النموذج */}
        <div className="hidden">
          <FormField
            control={form.control}
            name="priority"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange} defaultValue="medium">
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر الأولوية" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {priorityTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <FormField
        control={form.control}
        name="problem_description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>وصف المشكلة أو المقترح</FormLabel>
            <FormControl>
              <Textarea 
                {...field} 
                placeholder="اكتب تفاصيل مفصلة وواضحة" 
                className="h-32"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FileUploadField 
        form={form}
        fieldName="problem_file_url"
        label="ارفاق ملف المشكلة (PDF)"
      />

      <FormField
        control={form.control}
        name="suggested_solution"
        render={({ field }) => (
          <FormItem>
            <FormLabel>الحل المقترح</FormLabel>
            <FormControl>
              <Textarea 
                {...field} 
                placeholder="اكتب الحل أو الاقتراح بشكل مفصل" 
                className="h-32"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FileUploadField 
        form={form}
        fieldName="solution_file_url"
        label="ارفاق ملف الحل المقترح (PDF)"
      />
    </>
  );
};
