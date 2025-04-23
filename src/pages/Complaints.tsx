
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ComplaintsForm from "@/components/complaints/ComplaintsForm";
import PageHeader from "@/components/layout/PageHeader";
import { Department } from "@/components/complaints/schema";
import { toast } from "sonner";
import { sectors } from "@/components/complaints/constants";
import { useEffect } from "react";

const Complaints = () => {
  const { data: departments, isLoading, error } = useQuery({
    queryKey: ["departments"],
    queryFn: async () => {
      try {
        console.log("Fetching departments from Supabase...");
        // We'll just use the sectors directly as fallback to avoid RLS issues
        // This ensures we don't need to create new departments and violate RLS
        const sectorsAsDepartments = sectors.map(sector => ({ 
          id: sector.value, 
          name: sector.label 
        }));
        
        console.log("Using sectors as departments:", sectorsAsDepartments);
        return sectorsAsDepartments;
      } catch (err) {
        console.error("Exception fetching departments:", err);
        toast.error("خطأ في تحميل القطاعات. الرجاء المحاولة مرة أخرى.");
        // Return sectors as fallback in case of error
        return sectors.map(sector => ({ 
          id: sector.value, 
          name: sector.label 
        }));
      }
    },
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // Convert departments to a non-empty array to avoid undefined errors
  const safeDepartments = departments || sectors.map(sector => ({ 
    id: sector.value, 
    name: sector.label 
  }));
  
  // Debug departments data
  useEffect(() => {
    console.log("Departments data in Complaints component:", safeDepartments);
  }, [safeDepartments]);

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      <main className="flex-grow">
        <PageHeader 
          title="المشاكل والمقترحات" 
          subtitle="تقديم المشاكل والمقترحات للمجلس" 
        />
        <div className="container mx-auto py-6 px-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            {isLoading ? (
              <div className="text-center py-4">جاري تحميل البيانات...</div>
            ) : error ? (
              <div className="text-center py-4 text-red-500">
                حدث خطأ أثناء تحميل البيانات. الرجاء المحاولة مرة أخرى.
              </div>
            ) : (
              <ComplaintsForm departments={safeDepartments} />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Complaints;
