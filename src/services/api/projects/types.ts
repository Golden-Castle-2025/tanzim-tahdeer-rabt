
export interface Project {
  id: string;
  title: string;
  description: string;
  budget: number;
  start_date: string;
  end_date: string | null;
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  sector: string;
  location: string;
  image_url: string | null;
  created_at: string;
  analytics?: ProjectAnalytics;
}

export interface ProjectAnalytics {
  budget_utilization: number;
  progress_percentage: number;
  timeline_status: 'on_track' | 'delayed' | 'ahead';
  risk_level: 'low' | 'medium' | 'high';
}

export interface CreateProjectPayload {
  title: string;
  description: string;
  budget: number;
  start_date: string;
  end_date?: string | null;
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  sector: string;
  location: string;
  image?: File;
  user_id?: string; // Added user_id property
}

export interface ProjectSearchParams {
  query?: string;
  sector?: string;
  status?: string;
  minBudget?: number;
  maxBudget?: number;
  startDate?: string;
  endDate?: string;
}
