
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
} from "@/components/ui/form";
import { UserData } from "@/services/types";

interface UserFormData {
  email: string;
  password: string;
  full_name: string;
  user_type: 'internal' | 'external';
}

interface UserDialogProps {
  isOpen: boolean;
  onClose: () => void;
  user?: UserData | null;
  onSubmit: (data: UserFormData) => Promise<void>;
}

const UserDialog = ({ isOpen, onClose, user, onSubmit }: UserDialogProps) => {
  const form = useForm<UserFormData>({
    defaultValues: {
      email: user?.email || '',
      full_name: user?.full_name || '',
      password: '',
      user_type: user?.user_type || 'external'
    }
  });

  // Reset form when user changes
  useEffect(() => {
    if (isOpen) {
      form.reset({
        email: user?.email || '',
        full_name: user?.full_name || '',
        password: '',
        user_type: user?.user_type || 'external'
      });
    }
  }, [user, isOpen, form]);

  const handleSubmit = async (data: UserFormData) => {
    try {
      await onSubmit(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{user ? 'تعديل المستخدم' : 'إضافة مستخدم جديد'}</DialogTitle>
          <DialogDescription>
            {user ? 'قم بتحديث معلومات المستخدم أدناه' : 'أدخل معلومات المستخدم الجديد'}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>البريد الإلكتروني</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      type="email" 
                      required={!user} 
                      disabled={!!user} // Disable email field when editing
                    />
                  </FormControl>
                  {user && (
                    <FormDescription>
                      لا يمكن تغيير البريد الإلكتروني بعد إنشاء المستخدم
                    </FormDescription>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="full_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>الاسم الكامل</FormLabel>
                  <FormControl>
                    <Input {...field} required />
                  </FormControl>
                </FormItem>
              )}
            />
            {!user && (
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>كلمة المرور</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" required />
                    </FormControl>
                  </FormItem>
                )}
              />
            )}
            <FormField
              control={form.control}
              name="user_type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>نوع المستخدم</FormLabel>
                  <FormControl>
                    <select 
                      {...field} 
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="internal">داخلي</option>
                      <option value="external">خارجي</option>
                    </select>
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex justify-end gap-2 mt-4">
              <Button type="button" variant="outline" onClick={onClose}>
                إلغاء
              </Button>
              <Button type="submit">
                {user ? 'تحديث' : 'إضافة'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default UserDialog;
