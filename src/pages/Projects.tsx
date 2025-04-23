import { useState, useEffect } from "react";
import { toast } from "sonner";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ProjectsHeader from "@/components/projects/ProjectsHeader";
import ProjectsList from "@/components/projects/ProjectsList";
import ProjectForm from "@/components/projects/ProjectForm";
import { fetchProjects } from "@/services/api/projectsService";
import { getCurrentUser } from "@/services/api/authService";
import { isAdmin } from "@/services/roleService";
import { Project } from "@/services/api/projectsService";
import { UserData } from "@/services/types";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isUserAdmin, setIsUserAdmin] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [useBothApis, setUseBothApis] = useState(false);
  const navigate = useNavigate();

  // التحقق من المصادقة وجلب بيانات المستخدم
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await getCurrentUser();
        if (!user) {
          toast.error("يجب تسجيل الدخول للوصول إلى هذه الصفحة");
          navigate("/auth");
          return;
        }

        setUserData(user);
        
        // التحقق مما إذا كان المستخدم مسؤولاً
        const adminStatus = await isAdmin(user);
        setIsUserAdmin(adminStatus);
      } catch (error) {
        console.error("Error checking authentication:", error);
        toast.error("حدث خطأ في التحقق من الصلاحيات");
        navigate("/auth");
      }
    };

    checkAuth();
  }, [navigate]);

  // جلب المشاريع
  useEffect(() => {
    loadProjects();
  }, [useBothApis]);

  const loadProjects = async () => {
    try {
      setLoading(true);
      const data = await fetchProjects(true, useBothApis);
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

  const toggleApiMode = () => {
    setUseBothApis(!useBothApis);
    toast.info(useBothApis ? "تم التبديل إلى API واحد" : "تم التبديل إلى استخدام كلا API معًا");
  };

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      <main className="flex-grow">
        <ProjectsHeader 
          isAdmin={isUserAdmin} 
          onAddProject={() => setShowAddForm(true)} 
          useBothApis={useBothApis}
          onToggleApiMode={toggleApiMode}
        />
        <div className="container mx-auto px-4 py-12">
          {showAddForm && isUserAdmin ? (
            <div className="mb-8">
              <ProjectForm 
                onSuccess={handleProjectAdded} 
                onCancel={() => setShowAddForm(false)} 
                useBothApis={useBothApis}
              />
            </div>
          ) : null}
          
          <ProjectsList 
            projects={projects} 
            loading={loading}
            isAdmin={isUserAdmin}
            onProjectDeleted={loadProjects}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
