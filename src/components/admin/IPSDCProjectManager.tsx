
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Loader2, Plus, Trash, Edit } from "lucide-react";
import { 
  fetchIPSDCProjects, 
  createIPSDCProject, 
  deleteIPSDCProject,
  updateIPSDCProject,
  CreateProjectPayload 
} from "@/services/api/projectsService";
import { Project } from "@/services/api/projects/types";
import ProjectForm from "@/components/projects/ProjectForm";

const IPSDCProjectManager = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      setLoading(true);
      const data = await fetchIPSDCProjects();
      setProjects(data);
    } catch (error) {
      console.error("خطأ في جلب المشاريع:", error);
      toast.error("حدث خطأ في تحميل المشاريع");
    } finally {
      setLoading(false);
    }
  };

  const handleProjectAdded = () => {
    loadProjects();
    setShowAddForm(false);
    toast.success("تم إضافة المشروع بنجاح");
  };

  const handleProjectUpdated = () => {
    loadProjects();
    setEditingProject(null);
    toast.success("تم تحديث المشروع بنجاح");
  };

  const handleDeleteProject = async (id: string) => {
    if (window.confirm("هل أنت متأكد من حذف هذا المشروع؟")) {
      try {
        await deleteIPSDCProject(id);
        loadProjects();
        toast.success("تم حذف المشروع بنجاح");
      } catch (error) {
        console.error("خطأ في حذف المشروع:", error);
        toast.error("حدث خطأ أثناء حذف المشروع");
      }
    }
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gov-blue">إدارة مشاريع IPSDC</h2>
        <Button onClick={() => setShowAddForm(true)}>
          <Plus className="ml-2 h-4 w-4" />
          إضافة مشروع جديد
        </Button>
      </div>

      {showAddForm && (
        <div className="mb-8 bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold text-gov-blue mb-4">إضافة مشروع جديد</h3>
          <ProjectForm
            onSuccess={handleProjectAdded}
            onCancel={() => setShowAddForm(false)}
            customSubmitHandler={async (data: CreateProjectPayload) => {
              await createIPSDCProject(data);
              return true;
            }}
          />
        </div>
      )}

      {editingProject && (
        <div className="mb-8 bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold text-gov-blue mb-4">تحديث المشروع</h3>
          <ProjectForm
            initialData={editingProject}
            onSuccess={handleProjectUpdated}
            onCancel={() => setEditingProject(null)}
            customSubmitHandler={async (data: CreateProjectPayload) => {
              if (editingProject) {
                await updateIPSDCProject(editingProject.id, data);
                return true;
              }
              return false;
            }}
          />
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-gov-blue" />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {projects.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <p className="text-gray-500">لا توجد مشاريع متاحة</p>
            </div>
          ) : (
            projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between">
                  <h3 className="text-xl font-bold text-gov-blue">{project.title}</h3>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleEditProject(project)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => handleDeleteProject(project.id)}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <span className="font-semibold">الميزانية:</span> {project.budget}
                  </div>
                  <div>
                    <span className="font-semibold">القطاع:</span> {project.sector}
                  </div>
                  <div>
                    <span className="font-semibold">الموقع:</span> {project.location}
                  </div>
                  <div>
                    <span className="font-semibold">الحالة:</span>{" "}
                    {project.status === "pending"
                      ? "مخطط"
                      : project.status === "in_progress"
                      ? "قيد التنفيذ"
                      : project.status === "completed"
                      ? "مكتمل"
                      : "ملغي"}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default IPSDCProjectManager;
