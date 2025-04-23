
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { assignSuperAdmin } from "@/services/roleService";

interface SuperAdminButtonProps {
  userId: string;
}

const SuperAdminButton = ({ userId }: SuperAdminButtonProps) => {
  const [loading, setLoading] = useState(false);

  const handleAssignSuperAdmin = async () => {
    setLoading(true);
    try {
      const result = await assignSuperAdmin(userId);
      if (result) {
        toast.success("تم إضافة دور المشرف الرئيسي بنجاح");
      } else {
        toast.error("حدث خطأ في إضافة دور المشرف الرئيسي");
      }
    } catch (error) {
      console.error(error);
      toast.error("حدث خطأ غير متوقع");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button 
      onClick={handleAssignSuperAdmin} 
      disabled={loading}
      variant="outline"
      className="mr-2"
    >
      {loading ? "جاري الإضافة..." : "تعيين كمشرف رئيسي"}
    </Button>
  );
};

export default SuperAdminButton;
