import axios, { AxiosRequestConfig } from 'axios';
import { API_CONFIG, getCurrentApiConfig, RequestMethod } from './config';

// إضافة نوع الاستجابة العامة
export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
  timestamp: string;
}

export const apiRequest = async <T>(
  endpoint: string,
  method: string,
  data?: any,
  config?: AxiosRequestConfig,
  useLocalApi = true,
  useBoth = false
): Promise<T> => {
  const apiConfig = getCurrentApiConfig(useLocalApi);
  
  const headers = {
    ...config?.headers,
    'Content-Type': data instanceof FormData ? 'multipart/form-data' : 'application/json',
    'Accept': 'application/json',
  };

  // إضافة API key إذا كان متوفراً
  if (apiConfig.apiKey) {
    headers['Authorization'] = `Bearer ${apiConfig.apiKey}`;
  }

  const makeRequest = async (baseURL: string): Promise<T> => {
    try {
      const response = await axios({
        url: endpoint,
        method,
        baseURL,
        data,
        headers,
        ...config,
      });
      
      console.log(`[API] ${method} ${baseURL}${endpoint} Response:`, response.data);
      return response.data as T;
    } catch (error) {
      console.error(`[API] Error making request to ${baseURL}${endpoint}:`, error);
      throw error;
    }
  };

  if (useBoth) {
    try {
      // إرسال الطلبات بشكل متوازي للواجهتين
      const [localResponse, remoteResponse] = await Promise.all([
        makeRequest(API_CONFIG.LOCAL.BASE_URL),
        makeRequest(API_CONFIG.EXTERNAL.BASE_URL),
      ]);
      
      // تسجيل النتائج من كلا المصدرين
      console.log('[API] Local Response:', localResponse);
      console.log('[API] Remote Response:', remoteResponse);
      
      // إعادة الاستجابة المحلية كقيمة افتراضية
      return localResponse;
    } catch (error) {
      console.error('[API] Error making parallel requests:', error);
      throw error;
    }
  }

  return makeRequest(apiConfig.baseUrl);
};
