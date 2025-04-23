
import { apiRequest } from '../apiService';
import { API_ENDPOINTS, RequestMethod } from '../config';
import { deleteProjectFromPostgres } from '../postgresService';

export const deleteProject = async (
  id: string, 
  useLocalApi = true, 
  useBoth = false
): Promise<void> => {
  try {
    await deleteProjectFromPostgres(id);
    console.log('تم حذف المشروع من قاعدة البيانات بنجاح');
  } catch (pgError) {
    console.error('خطأ في حذف المشروع من قاعدة البيانات:', pgError);
  }
  
  try {
    await apiRequest<void>(
      API_ENDPOINTS.PROJECTS.DELETE(id),
      RequestMethod.DELETE,
      undefined,
      undefined,
      useLocalApi,
      useBoth
    );
  } catch (apiError) {
    console.error('خطأ في حذف المشروع من API:', apiError);
  }
};

export const exportProjects = async (
  format: 'csv' | 'xlsx' | 'pdf',
  useLocalApi = true,
  useBoth = false
): Promise<Blob> => {
  return await apiRequest<Blob>(
    API_ENDPOINTS.PROJECTS.EXPORT,
    RequestMethod.GET,
    undefined,
    {
      params: { format },
      responseType: 'blob',
    },
    useLocalApi,
    useBoth
  );
};
