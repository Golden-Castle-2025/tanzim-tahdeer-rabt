
import { useState, useEffect } from "react";
import { SearchableDropdown } from "./SearchableDropdown";
import { ComplaintsFormInput, Department } from "../schema";
import { UseFormReturn } from "react-hook-form";
import { ministries } from "../constants";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface DepartmentFieldsProps {
  form: UseFormReturn<ComplaintsFormInput>;
  departments: Department[];
}

export const DepartmentFields = ({ form, departments }: DepartmentFieldsProps) => {
  const [ministryOpen, setMinistryOpen] = useState(false);
  const [sectorOpen, setSectorOpen] = useState(false);
  const [filteredDepartments, setFilteredDepartments] = useState<Department[]>([]);
  const isMobile = useIsMobile();

  const selectedMinistry = form.watch("ministry");
  const ministryError = form.formState.errors.ministry;
  const departmentError = form.formState.errors.department_id;
  
  const shouldShowDepartmentError = selectedMinistry && departmentError;

  useEffect(() => {
    const validDepartments = Array.isArray(departments) ? departments : [];
    
    if (!selectedMinistry) {
      setFilteredDepartments([]);
      form.setValue("department_id", "", { shouldValidate: false });
      return;
    }
    
    setFilteredDepartments(validDepartments);
    
    // Log available departments for debugging
    console.log("Available departments:", validDepartments);
  }, [selectedMinistry, departments, form]);

  const departmentOptions = filteredDepartments.map(dept => ({
    value: dept.id,
    label: dept.name || "قطاع غير معروف"
  }));

  const handleMinistrySelect = (value: string) => {
    form.setValue("department_id", "", { shouldValidate: false });
    console.log("Selected ministry:", value);
    
    setTimeout(() => {
      setSectorOpen(true);
    }, 300);
  };

  return (
    <div className="space-y-4 md:space-y-6" dir="rtl">
      <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200">
        <div className="mb-4 md:mb-6">
          <h2 className="text-lg md:text-xl font-bold mb-2">
            <div className="flex flex-col space-y-3">
              <div className="flex flex-wrap items-center gap-2 text-sm md:text-base">
                <span className="font-semibold ml-2">مسجل الشكوى:</span>
                <span className="text-blue-600">القطاع الخاص</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-sm md:text-base">
                <span className="font-semibold ml-2">المشتكى منه:</span>
                <span>القطاع العام والدوائر التابعة له</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-sm md:text-base">
                <span className="font-semibold ml-2">مستقبل الشكوى:</span>
                <span>مجلس تطوير القطاع الخاص</span>
              </div>
            </div>
          </h2>
        </div>

        <div className="grid gap-4 md:gap-6">
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-2">الوزارة المعنية</h3>
            <SearchableDropdown
              form={form}
              name="ministry"
              label=""
              placeholder="اختر الوزارة"
              emptyMessage="لم يتم العثور على وزارة"
              options={ministries}
              onSelect={handleMinistrySelect}
              open={ministryOpen}
              setOpen={setMinistryOpen}
            />
            {ministryError && (
              <p className="text-red-500 text-sm mt-1">{ministryError.message}</p>
            )}
          </div>

          <div>
            <h3 className="text-base md:text-lg font-semibold mb-2">
              الجهة المشتكى اليها قطاعات مجلس تطوير القطاع الخاص
            </h3>
            <SearchableDropdown
              form={form}
              name="department_id"
              label=""
              placeholder={selectedMinistry ? "اختر القطاع" : "اختر الوزارة أولاً"}
              emptyMessage="لم يتم العثور على قطاع"
              options={departmentOptions}
              open={sectorOpen}
              setOpen={setSectorOpen}
              disabled={!selectedMinistry}
              error={shouldShowDepartmentError ? departmentError : undefined}
            />
            {shouldShowDepartmentError && (
              <p className="text-red-500 text-sm mt-1">{departmentError.message}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
