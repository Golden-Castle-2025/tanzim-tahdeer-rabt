
import React from 'react';
import { Users } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const EmptyUsers = () => {
  return (
    <Card>
      <CardContent className="py-10 text-center">
        <Users className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-4 text-muted-foreground">لم يتم العثور على أي مستخدمين</p>
        <p className="text-sm text-muted-foreground mt-2">قد تحتاج إلى تسجيل مستخدمين جدد أو التحقق من اتصالك بقاعدة البيانات</p>
      </CardContent>
    </Card>
  );
};

export default EmptyUsers;
