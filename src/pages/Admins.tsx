
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import { UserPlus } from "lucide-react";
import UserDialog from "@/components/admin/UserDialog";
import LoadingSpinner from "@/components/admin/LoadingSpinner";
import EmptyUsers from "@/components/admin/EmptyUsers";
import UserList from "@/components/admin/UserList";
import { useUserManagement } from "@/hooks/useUserManagement";
import { UserData } from "@/services/types";

const Admins = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const { users, loading, fetchUsers, handleCreateUser, handleUpdateUser, handleDeleteUser } = useUserManagement();

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDialogClose = () => {
    setDialogOpen(false);
    setSelectedUser(null);
  };

  const handleEditUser = (user: UserData) => {
    setSelectedUser(user);
    setDialogOpen(true);
  };

  const handleSubmit = async (data: any) => {
    const success = selectedUser 
      ? await handleUpdateUser(selectedUser.id, data)
      : await handleCreateUser(data);
    
    if (success) {
      handleDialogClose();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50" dir="rtl">
      <Header />
      <PageHeader 
        title="إدارة المستخدمين والمشرفين"
        subtitle="إدارة صلاحيات وأدوار المستخدمين في النظام"
      />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button 
            onClick={() => setDialogOpen(true)}
            className="flex items-center gap-2"
          >
            <UserPlus className="h-4 w-4" />
            إضافة مستخدم جديد
          </Button>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : users.length === 0 ? (
          <EmptyUsers />
        ) : (
          <UserList 
            users={users}
            onEdit={handleEditUser}
            onDelete={handleDeleteUser}
          />
        )}
      </main>
      <Footer />

      <UserDialog
        isOpen={dialogOpen}
        onClose={handleDialogClose}
        user={selectedUser}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Admins;
