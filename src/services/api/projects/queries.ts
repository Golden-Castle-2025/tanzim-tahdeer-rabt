import { apiRequest } from '../apiService';
import { API_ENDPOINTS, RequestMethod } from '../config';
import { fetchProjectsFromPostgres } from '../postgresService';
import { Project, ProjectAnalytics, ProjectSearchParams } from './types';
import { useQuery } from '@tanstack/react-query';

export const fetchProjects = async (useLocalApi = true, useBoth = false): Promise<Project[]> => {
  try {
    // Try API first since Supabase connection is disabled
    try {
      return await apiRequest<Project[]>(
        API_ENDPOINTS.PROJECTS.LIST,
        RequestMethod.GET,
        undefined,
        undefined,
        useLocalApi,
        useBoth
      );
    } catch (apiError) {
      console.error('Error fetching projects from API, using mock data:', apiError);
      
      // Return empty array from postgres stub
      const mockProjects = await fetchProjectsFromPostgres();
      
      // If no projects from postgres stub, generate some mock data
      if (mockProjects.length === 0) {
        return [
          {
            id: 'mock-1',
            title: 'مشروع تطوير البنية التحتية',
            description: 'تطوير البنية التحتية في المناطق النائية',
            budget: 1000000,
            start_date: '2025-01-01',
            end_date: '2025-12-31',
            status: 'in_progress',
            sector: 'البنية التحتية',
            location: 'المنطقة الشمالية',
            image_url: null,
            created_at: '2025-03-15T00:00:00Z',
            analytics: {
              budget_utilization: 35,
              progress_percentage: 40,
              timeline_status: 'on_track',
              risk_level: 'low'
            }
          },
          {
            id: 'mock-2',
            title: 'مشروع التدريب المهني',
            description: 'برامج تدريب مهني للشباب',
            budget: 500000,
            start_date: '2025-02-01',
            end_date: '2025-08-31',
            status: 'pending',
            sector: 'التعليم',
            location: 'المنطقة الوسطى',
            image_url: null,
            created_at: '2025-04-01T00:00:00Z',
            analytics: {
              budget_utilization: 0,
              progress_percentage: 0,
              timeline_status: 'on_track',
              risk_level: 'medium'
            }
          }
        ];
      }
      
      return mockProjects;
    }
  } catch (error) {
    console.error('Error in fetchProjects:', error);
    return [];
  }
};

export const fetchProjectById = async (
  id: string, 
  useLocalApi = true,
  useBoth = false
): Promise<Project> => {
  return await apiRequest<Project>(
    API_ENDPOINTS.PROJECTS.DETAIL(id),
    RequestMethod.GET,
    undefined,
    undefined,
    useLocalApi,
    useBoth
  );
};

export const searchProjects = async (
  params: ProjectSearchParams,
  useLocalApi = true,
  useBoth = false
): Promise<Project[]> => {
  return await apiRequest<Project[]>(
    API_ENDPOINTS.PROJECTS.SEARCH,
    RequestMethod.GET,
    undefined,
    { params },
    useLocalApi,
    useBoth
  );
};

export const getProjectAnalytics = async (
  id: string,
  useLocalApi = true,
  useBoth = false
): Promise<ProjectAnalytics> => {
  return await apiRequest<ProjectAnalytics>(
    `${API_ENDPOINTS.PROJECTS.ANALYTICS}/${id}`,
    RequestMethod.GET,
    undefined,
    undefined,
    useLocalApi,
    useBoth
  );
};

export const useProject = (id: string) => {
  return useQuery({
    queryKey: ['project', id],
    queryFn: () => fetchProjectById(id),
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    gcTime: 30 * 60 * 1000, // Keep in cache for 30 minutes (replaced cacheTime)
  });
};

export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: () => fetchProjects(),
    staleTime: 2 * 60 * 1000, // Cache for 2 minutes
    gcTime: 10 * 60 * 1000, // Keep in cache for 10 minutes (replaced cacheTime)
  });
};

export const useProjectSearch = (params: ProjectSearchParams) => {
  return useQuery({
    queryKey: ['projects', 'search', params],
    queryFn: () => searchProjects(params),
    staleTime: 1 * 60 * 1000, // Cache for 1 minute
    gcTime: 5 * 60 * 1000, // Keep in cache for 5 minutes (replaced cacheTime)
  });
};

export const useProjectAnalytics = (projectId: string) => {
  return useQuery({
    queryKey: ['project', projectId, 'analytics'],
    queryFn: () => getProjectAnalytics(projectId),
    staleTime: 30 * 1000, // Cache for 30 seconds
    refetchInterval: 2 * 60 * 1000, // Refresh every 2 minutes
  });
};
