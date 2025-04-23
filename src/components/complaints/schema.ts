
import { z } from "zod";

export const complaintsFormSchema = z.object({
  ministry: z.string({
    required_error: "الوزارة مطلوبة"
  }).min(1, "الوزارة مطلوبة"),
  
  department_id: z.string({
    required_error: "يجب اختيار القطاع بعد تحديد الوزارة"
  }).min(1, "يجب اختيار القطاع بعد تحديد الوزارة"),

  complaint_type: z.enum(["suggestion", "problem", "inquiry"], {
    required_error: "يرجى تحديد نوع الطلب"
  }),
  priority: z.enum(["low", "medium", "high"], {
    required_error: "يرجى تحديد أولوية الطلب"
  }),
  section: z.string().optional(),
  
  problem_description: z.string()
    .min(10, "وصف المشكلة يجب أن يكون 10 أحرف على الأقل")
    .max(500, "الوصف يجب ألا يتجاوز 500 حرف"),
  suggested_solution: z.string()
    .min(10, "المقترح يجب أن يكون 10 أحرف على الأقل")
    .max(500, "المقترح يجب ألا يتجاوز 500 حرف"),

  problem_file_url: z.any().optional(),
  solution_file_url: z.any().optional(),
});

export type ComplaintsFormInput = z.infer<typeof complaintsFormSchema>;

// إضافة النوع الخاص بالقطاعات
export interface Department {
  id: string;
  name: string;
}

// إضافة props الخاصة بمكون المشاكل والمقترحات
export interface ComplaintsFormProps {
  departments?: Department[];
}
