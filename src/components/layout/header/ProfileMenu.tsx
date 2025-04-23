
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { UserRound, LogOut, KeyRound } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import ChangePasswordForm from "@/components/auth/ChangePasswordForm";

const ProfileMenu = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState<any>(null);
  const isMobile = useIsMobile();
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      
      localStorage.removeItem("auth_token");
      
      toast.success("تم تسجيل الخروج بنجاح");
      
      setTimeout(() => {
        navigate("/auth");
        if (isMobile) {
          window.location.reload();
        }
      }, 500);
    } catch (error) {
      console.error("خطأ في تسجيل الخروج:", error);
      toast.error("حدث خطأ أثناء تسجيل الخروج");
    }
  };

  return session ? (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="relative h-8 w-8 rounded-full"
          >
            <UserRound className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          <DropdownMenuItem
            className="cursor-pointer justify-end text-right font-medium"
            onClick={() => setShowPasswordDialog(true)}
          >
            <KeyRound className="ml-2 h-4 w-4" />
            تغيير كلمة المرور
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer justify-end text-right font-medium"
            onClick={handleLogout}
          >
            <LogOut className="ml-2 h-4 w-4" />
            تسجيل الخروج
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={showPasswordDialog} onOpenChange={setShowPasswordDialog}>
        <DialogContent className="sm:max-w-md" dir="rtl">
          <DialogHeader>
            <DialogTitle>تغيير كلمة المرور</DialogTitle>
          </DialogHeader>
          <ChangePasswordForm onSuccess={() => setShowPasswordDialog(false)} />
        </DialogContent>
      </Dialog>
    </>
  ) : (
    <Button
      variant="ghost"
      className="text-gov-blue hover:text-gov-gold transition-colors"
      onClick={() => navigate("/auth")}
    >
      تسجيل الدخول
    </Button>
  );
};

export default ProfileMenu;
