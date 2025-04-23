
import { Calendar, MapPin, Briefcase, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { toast } from "sonner";
import { deleteProject, Project } from "@/services/api/projectsService";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

interface ProjectsListProps {
  projects: Project[];
  loading: boolean;
  isAdmin: boolean;
  onProjectDeleted: () => void;
}

const ProjectsList = ({ projects, loading, isAdmin, onProjectDeleted }: ProjectsListProps) => {
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const getStatusColorClass = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in_progress":
        return "bg-blue-100 text-blue-800";
      case "planned":
        return "bg-yellow-100 text-yellow-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "مكتمل";
      case "in_progress":
        return "قيد التنفيذ";
      case "planned":
        return "مخطط";
      case "cancelled":
        return "ملغي";
      default:
        return status;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ar-SA', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };

  const formatBudget = (budget: number) => {
    return new Intl.NumberFormat('ar-SA', {
      style: 'currency',
      currency: 'IQD',
      maximumFractionDigits: 0
    }).format(budget);
  };

  const handleDeleteProject = async (id: string) => {
    try {
      setDeletingId(id);
      
      await deleteProject(id);
      
      toast.success("تم حذف المشروع بنجاح");
      onProjectDeleted();
    } catch (error) {
      console.error("خطأ في حذف المشروع:", error);
      toast.error("حدث خطأ أثناء حذف المشروع");
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-gov-blue border-r-transparent"></div>
        <p className="mt-4 text-gray-600">جاري تحميل المشاريع...</p>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">لا توجد مشاريع حالياً</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Card key={project.id} className="overflow-hidden">
          {project.image_url ? (
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image_url} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="h-48 bg-gov-lightblue flex items-center justify-center">
              <Briefcase className="h-12 w-12 text-gov-blue/30" />
            </div>
          )}
          
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gov-blue">{project.title}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColorClass(project.status)}`}>
                {getStatusText(project.status)}
              </span>
            </div>
            
            <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
            
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Calendar size={16} className="flex-shrink-0" />
              <span className="text-sm">{formatDate(project.start_date)}</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <MapPin size={16} className="flex-shrink-0" />
              <span className="text-sm">{project.location}</span>
            </div>
            
            <div className="mt-3 font-bold text-gov-green">
              {formatBudget(project.budget)}
            </div>
          </CardContent>
          
          {isAdmin && (
            <CardFooter className="border-t p-4 bg-gray-50">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    className="w-full flex items-center gap-2 justify-center"
                  >
                    <Trash2 size={16} />
                    <span>حذف المشروع</span>
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>هل أنت متأكد من حذف هذا المشروع؟</AlertDialogTitle>
                    <AlertDialogDescription>
                      هذا الإجراء لا يمكن التراجع عنه. سيتم حذف المشروع نهائياً من قاعدة البيانات.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter className="flex-row-reverse gap-2">
                    <AlertDialogAction 
                      onClick={() => handleDeleteProject(project.id)}
                      className="bg-red-600 hover:bg-red-700"
                    >
                      حذف
                    </AlertDialogAction>
                    <AlertDialogCancel>إلغاء</AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardFooter>
          )}
        </Card>
      ))}
    </div>
  );
};

export default ProjectsList;
