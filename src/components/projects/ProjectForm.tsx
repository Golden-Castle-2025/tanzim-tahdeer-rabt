
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { createProject, CreateProjectPayload, Project } from "@/services/api/projectsService";
import FormField from "./form/FormField";
import DatePickerField from "./form/DatePickerField";
import StatusSelect from "./form/StatusSelect";
import ImageUpload from "./form/ImageUpload";
import { getCurrentUser } from "@/services/api/authService";

interface ProjectFormProps {
  onSuccess: () => void;
  onCancel: () => void;
  useBothApis?: boolean;
  initialData?: Project;
  customSubmitHandler?: (data: CreateProjectPayload) => Promise<boolean>;
}

const ProjectForm = ({ 
  onSuccess, 
  onCancel, 
  useBothApis = false, 
  initialData,
  customSubmitHandler 
}: ProjectFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [status, setStatus] = useState("pending");
  const [sector, setSector] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  
  // إعداد البيانات الأولية إذا كانت متوفرة
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setDescription(initialData.description || "");
      setBudget(initialData.budget ? initialData.budget.toString() : "");
      setStatus(initialData.status || "pending");
      setSector(initialData.sector || "");
      setLocation(initialData.location || "");
      
      if (initialData.start_date) {
        setStartDate(new Date(initialData.start_date));
      }
      
      if (initialData.end_date) {
        setEndDate(new Date(initialData.end_date));
      }
    }
  }, [initialData]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !description || !budget || !startDate || !sector || !location) {
      toast.error("يرجى ملء جميع الحقول الإلزامية");
      return;
    }
    
    try {
      setSubmitting(true);
      
      // محاولة الحصول على معرف المستخدم الحالي
      let userId: string | undefined;
      try {
        const currentUser = await getCurrentUser();
        userId = currentUser?.id;
      } catch (error) {
        console.warn("تعذر الحصول على معرف المستخدم:", error);
      }
      
      const projectData: CreateProjectPayload = {
        title,
        description,
        budget: Number(budget),
        start_date: startDate.toISOString(),
        end_date: endDate ? endDate.toISOString() : null,
        status: status as 'pending' | 'in_progress' | 'completed' | 'cancelled',
        sector,
        location,
        image: image || undefined,
        user_id: userId
      };
      
      // استخدام المعالج المخصص إذا كان موجودًا
      if (customSubmitHandler) {
        const success = await customSubmitHandler(projectData);
        if (success) {
          resetForm();
          onSuccess();
        }
      } else {
        await createProject(projectData, true, useBothApis);
        resetForm();
        onSuccess();
      }
      
    } catch (error) {
      console.error("خطأ في إنشاء/تحديث المشروع:", error);
      toast.error("حدث خطأ أثناء إنشاء/تحديث المشروع");
    } finally {
      setSubmitting(false);
    }
  };
  
  const resetForm = () => {
    setTitle("");
    setDescription("");
    setBudget("");
    setStartDate(undefined);
    setEndDate(undefined);
    setStatus("pending");
    setSector("");
    setLocation("");
    setImage(null);
  };

  const formTitle = initialData ? "تحديث المشروع" : "إضافة مشروع جديد";
  const submitButtonText = initialData ? "تحديث المشروع" : "حفظ المشروع";

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-gov-blue mb-6">
        {formTitle} {useBothApis && !initialData && <span className="text-sm text-gray-500">(سيتم الإرسال إلى كلا API)</span>}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="عنوان المشروع"
          value={title}
          onChange={setTitle}
          placeholder="أدخل عنوان المشروع"
          required
        />
        
        <FormField
          label="الميزانية"
          type="number"
          value={budget}
          onChange={setBudget}
          placeholder="أدخل ميزانية المشروع"
          required
        />
        
        <FormField
          label="القطاع"
          value={sector}
          onChange={setSector}
          placeholder="أدخل قطاع المشروع"
          required
        />
        
        <FormField
          label="الموقع"
          value={location}
          onChange={setLocation}
          placeholder="أدخل موقع المشروع"
          required
        />
        
        <DatePickerField
          label="تاريخ البدء"
          value={startDate}
          onChange={setStartDate}
          isRequired
        />
        
        <DatePickerField
          label="تاريخ الانتهاء"
          value={endDate}
          onChange={setEndDate}
          minDate={startDate}
        />
        
        <StatusSelect value={status} onChange={setStatus} />
        
        <ImageUpload onChange={setImage} />
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">
            وصف المشروع *
          </label>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="أدخل وصف المشروع"
            required
            rows={4}
          />
        </div>
      </div>
      
      <div className="flex justify-end gap-3">
        <Button type="button" variant="outline" onClick={onCancel}>
          إلغاء
        </Button>
        <Button type="submit" disabled={submitting}>
          {submitting ? (
            <>
              <Loader2 className="ml-2 h-4 w-4 animate-spin" />
              جارِ الحفظ...
            </>
          ) : (
            submitButtonText
          )}
        </Button>
      </div>
    </form>
  );
};

export default ProjectForm;
