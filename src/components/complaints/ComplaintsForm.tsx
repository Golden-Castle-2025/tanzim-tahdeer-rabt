
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { DepartmentFields } from "./fields/DepartmentFields";
import { DescriptionFields } from "./fields/DescriptionFields";
import { useComplaintsForm } from "./hooks/useComplaintsForm";
import { ComplaintsFormProps } from "./schema";
import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const ComplaintsForm = ({ departments = [] }: ComplaintsFormProps) => {
  const { form, submitComplaint, isPending, isAuthenticated, errors } = useComplaintsForm();
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const safeDepartments = Array.isArray(departments) ? departments : [];

  useEffect(() => {
    // تحديد قيم افتراضية للحقول المخفية
    form.setValue("complaint_type", "problem");
    form.setValue("priority", "medium");
  }, [form]);

  useEffect(() => {
    // التحقق من الأخطاء بعد الإرسال
    if (formSubmitted && Object.keys(errors).length > 0) {
      toast.error("يرجى التحقق من جميع الحقول المطلوبة");
      setFormSubmitted(false);
    }
  }, [errors, formSubmitted]);

  const handleSubmit = (data: any) => {
    console.log("Form submitted with data:", data);
    setFormSubmitted(true);
    submitComplaint(data);
  };

  if (!isAuthenticated) {
    return (
      <Alert variant="destructive" className="mb-6">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>يجب تسجيل الدخول</AlertTitle>
        <AlertDescription className="mt-2">
          يجب عليك <Link to="/auth" className="underline font-semibold">تسجيل الدخول</Link> أو إنشاء حساب جديد لإرسال المشاكل والمقترحات.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6" dir="rtl">
        <DepartmentFields form={form} departments={safeDepartments} />

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">تفاصيل المشكلة والمقترح</CardTitle>
          </CardHeader>
          <CardContent>
            <DescriptionFields form={form} />
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button 
            type="submit" 
            className="w-full md:w-auto" 
            disabled={isPending}
          >
            {isPending ? "جاري الإرسال..." : "إرسال المشكلة والمقترح"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ComplaintsForm;
