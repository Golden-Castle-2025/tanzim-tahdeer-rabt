
import { Plus, Globe, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectsHeaderProps {
  isAdmin: boolean;
  onAddProject: () => void;
  useBothApis: boolean;
  onToggleApiMode: () => void;
}

const ProjectsHeader = ({ isAdmin, onAddProject, useBothApis, onToggleApiMode }: ProjectsHeaderProps) => {
  return (
    <div className="bg-gov-blue py-12 mb-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">مشاريع المجلس</h1>
          <div className="flex gap-2">
            <Button 
              onClick={onToggleApiMode}
              variant="secondary"
              className="flex items-center gap-2"
            >
              {useBothApis ? (
                <>
                  <Database size={18} />
                  <Globe size={18} />
                  <span>API مزدوج</span>
                </>
              ) : (
                <>
                  <Database size={18} />
                  <span>API فردي</span>
                </>
              )}
            </Button>

            {isAdmin && (
              <Button 
                onClick={onAddProject}
                className="bg-white text-gov-blue hover:bg-gray-100 flex items-center gap-2"
              >
                <Plus size={18} />
                <span>إضافة مشروع</span>
              </Button>
            )}
          </div>
        </div>
        <p className="text-white/80 mt-4 max-w-3xl">
          المشاريع التنموية التي يشرف عليها مجلس تطوير القطاع الخاص لتعزيز دور القطاع الخاص في التنمية الاقتصادية
        </p>
      </div>
    </div>
  );
};

export default ProjectsHeader;
