
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { complaintsFormSchema, type ComplaintsFormInput } from "../schema";
import { useEffect, useState } from "react";

export const useComplaintsForm = () => {
  const [userId, setUserId] = useState<string | null>(null);
  
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setUserId(data.session?.user?.id || null);
    };
    
    checkSession();
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setUserId(session?.user?.id || null);
      }
    );
    
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const form = useForm<ComplaintsFormInput>({
    resolver: zodResolver(complaintsFormSchema),
    defaultValues: {
      department_id: "",
      ministry: "",
      section: "",
      complaint_type: "problem",
      priority: "medium",
      problem_description: "",
      suggested_solution: "",
      problem_file_url: undefined,
      solution_file_url: undefined,
    }
  });

  const { mutate: submitComplaint, isPending } = useMutation({
    mutationFn: async (data: ComplaintsFormInput) => {
      if (!userId) {
        throw new Error("يجب تسجيل الدخول لإرسال مشكلة");
      }

      let problem_file_url = null;
      let solution_file_url = null;

      // Upload problem file if provided
      if (data.problem_file_url instanceof File) {
        const filePath = `${userId}/${Date.now()}_problem.pdf`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('complaints')
          .upload(filePath, data.problem_file_url);

        if (uploadError) throw new Error(`خطأ في رفع ملف المشكلة: ${uploadError.message}`);
        if (uploadData) problem_file_url = filePath;
      }

      // Upload solution file if provided
      if (data.solution_file_url instanceof File) {
        const filePath = `${userId}/${Date.now()}_solution.pdf`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('complaints')
          .upload(filePath, data.solution_file_url);

        if (uploadError) throw new Error(`خطأ في رفع ملف الحل: ${uploadError.message}`);
        if (uploadData) solution_file_url = filePath;
      }

      // We'll directly use the selected department_id without trying to create new departments
      // This avoids RLS policy violation issues
      console.log("Using department_id:", data.department_id);
      
      const complaintData = {
        ...data,
        user_id: userId,
        problem_file_url,
        solution_file_url,
      };
      
      console.log("Submitting complaint data:", complaintData);
      
      const { data: result, error } = await supabase
        .from("complaints")
        .insert([complaintData])
        .select();
      
      if (error) {
        console.error("Error submitting complaint:", error);
        throw new Error(`حدث خطأ: ${error.message}`);
      }
      
      if (!result || result.length === 0) {
        throw new Error("لم يتم حفظ الشكوى، يرجى المحاولة مرة أخرى");
      }
      
      return result;
    },
    onSuccess: () => {
      toast.success("تم إرسال المشكلة أو المقترح بنجاح");
      form.reset();
    },
    onError: (error: Error) => {
      console.error("Form submission error:", error);
      toast.error(error.message || "حدث خطأ أثناء إرسال المشكلة، يرجى المحاولة مرة أخرى");
    },
  });

  return {
    form,
    submitComplaint,
    isPending,
    isAuthenticated: !!userId,
    errors: form.formState.errors
  };
};
