
import { FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FileUp } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { ComplaintsFormInput } from "../schema";

interface FileUploadFieldProps {
  form: UseFormReturn<ComplaintsFormInput>;
  fieldName: "problem_file_url" | "solution_file_url";
  label: string;
}

export const FileUploadField = ({ form, fieldName, label }: FileUploadFieldProps) => {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field: { onChange, value, ...field } }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <div className="flex items-center gap-2">
            <Input
              type="file"
              accept=".pdf"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  console.log(`Selected ${fieldName} file:`, file.name);
                  onChange(file);
                }
              }}
              {...field}
              className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
            />
            <FileUp className="h-5 w-5 text-gray-500" />
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
