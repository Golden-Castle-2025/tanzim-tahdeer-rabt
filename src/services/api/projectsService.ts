
import { supabase } from "@/integrations/supabase/client";
import { API_ENDPOINTS, RequestMethod } from './config';
import { apiRequest } from './apiService';
import { Project, CreateProjectPayload } from './projects/types';

// تصدير كل الوظائف والأنواع من الملفات الموجودة
export * from './projects/types';
export * from './projects/queries';
export * from './projects/mutations';
export * from './projects/operations';

// استخدام جدول IPSDC_projects مباشرة
export const fetchIPSDCProjects = async () => {
  try {
    const { data, error } = await supabase
      .from('ipsdc_projects')
      .select('*');
    
    if (error) {
      console.error('خطأ في جلب المشاريع من IPSDC:', error);
      return [];
    }
    
    console.log('تم جلب مشاريع IPSDC بنجاح:', data);
    return data;
  } catch (err) {
    console.error('حدث خطأ أثناء جلب مشاريع IPSDC:', err);
    return [];
  }
};

// إنشاء مشروع جديد في جدول IPSDC_projects
export const createIPSDCProject = async (projectData: CreateProjectPayload) => {
  try {
    const { data, error } = await supabase
      .from('ipsdc_projects')
      .insert([{
        title: projectData.title,
        description: projectData.description,
        budget: projectData.budget,
        start_date: projectData.start_date,
        end_date: projectData.end_date,
        status: projectData.status,
        sector: projectData.sector,
        location: projectData.location,
        user_id: projectData.user_id // Now this is properly typed
      }])
      .select();
    
    if (error) {
      console.error('خطأ في إنشاء مشروع جديد:', error);
      throw error;
    }
    
    console.log('تم إنشاء مشروع IPSDC بنجاح:', data);
    return data[0];
  } catch (err) {
    console.error('حدث خطأ أثناء إنشاء مشروع IPSDC:', err);
    throw err;
  }
};

// حذف مشروع من جدول IPSDC_projects
export const deleteIPSDCProject = async (id: string) => {
  try {
    const { error } = await supabase
      .from('ipsdc_projects')
      .delete()
      .eq('id', id);
    
    if (error) {
      console.error('خطأ في حذف المشروع:', error);
      throw error;
    }
    
    console.log('تم حذف مشروع IPSDC بنجاح:', id);
    return true;
  } catch (err) {
    console.error('حدث خطأ أثناء حذف مشروع IPSDC:', err);
    throw err;
  }
};

// جلب مشروع محدد من IPSDC_projects
export const getIPSDCProject = async (id: string) => {
  try {
    const { data, error } = await supabase
      .from('ipsdc_projects')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) {
      console.error('خطأ في جلب المشروع:', error);
      throw error;
    }
    
    console.log('تم جلب مشروع IPSDC بنجاح:', data);
    return data;
  } catch (err) {
    console.error('حدث خطأ أثناء جلب مشروع IPSDC:', err);
    throw err;
  }
};

// تحديث مشروع في جدول IPSDC_projects
export const updateIPSDCProject = async (id: string, projectData: Partial<CreateProjectPayload>) => {
  try {
    const { data, error } = await supabase
      .from('ipsdc_projects')
      .update({
        title: projectData.title,
        description: projectData.description,
        budget: projectData.budget,
        start_date: projectData.start_date,
        end_date: projectData.end_date,
        status: projectData.status,
        sector: projectData.sector,
        location: projectData.location,
        user_id: projectData.user_id
      })
      .eq('id', id)
      .select();
    
    if (error) {
      console.error('خطأ في تحديث المشروع:', error);
      throw error;
    }
    
    console.log('تم تحديث مشروع IPSDC بنجاح:', data);
    return data[0];
  } catch (err) {
    console.error('حدث خطأ أثناء تحديث مشروع IPSDC:', err);
    throw err;
  }
};
