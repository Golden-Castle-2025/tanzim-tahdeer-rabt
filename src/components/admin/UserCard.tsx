
import React from "react";
import { UserData } from "@/services/types";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Edit, Trash2 } from "lucide-react";
import SuperAdminButton from "./SuperAdminButton";

interface UserCardProps {
  user: UserData;
  onEdit: () => void;
  onDelete: () => void;
}

const UserCard = ({ user, onEdit, onDelete }: UserCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          {user.full_name || 'مستخدم'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">البريد الإلكتروني</p>
              <p className="mt-1">{user.email}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">نوع المستخدم</p>
              <p className="mt-1">{user.user_type === 'internal' ? 'داخلي' : 'خارجي'}</p>
            </div>
          </div>
          
          {user.roles && user.roles.length > 0 && (
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">الأدوار</p>
              <div className="flex flex-wrap gap-2">
                {user.roles.map((role, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="bg-gov-blue text-white hover:bg-gov-blue/90"
                  >
                    {role}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          
          <div className="flex justify-end gap-2 pt-2">
            <Button
              variant="outline"
              size="icon"
              onClick={onEdit}
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={onDelete}
              className="text-destructive hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
            <SuperAdminButton userId={user.id} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
