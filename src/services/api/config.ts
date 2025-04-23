// تكوين واجهة برمجة التطبيقات API
export const API_CONFIG = {
  EXTERNAL: {
    // تكوين API الخارجي
    BASE_URL: "https://api.dev.example.com",
    API_KEY: "dev-api-key-123", 
    VERSION: "v1",
  },
  LOCAL: {
    // تكوين API المحلي للتطوير
    BASE_URL: "http://localhost:5000",
    FALLBACK_TO_EXTERNAL: true,
    VERSION: "v1",
  }
};

// تكوين قاعدة البيانات
export const DB_CONFIG = {
  POSTGRES: {
    HOST: "65.20.159.30",
    DATABASE: "IPSDC_system",
    USER: "IPSDC",
    PASSWORD: "IPSDC.com",
    PORT: 5432
  },
  SUPABASE: {
    URL: "https://rfcuuenvbyqwapnvtpie.supabase.co",
    FALLBACK_URL: "https://ipsdc.gcc.iq",
    ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmY3V1ZW52Ynlxd2FwbnZ0cGllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5Njk4MzUsImV4cCI6MjA2MDU0NTgzNX0.DKwUQhxhL4SRqZvomFXop1Ff-fbE3avPdfPO2cmcEmU",
    PROJECT_ID: "rfcuuenvbyqwapnvtpie",
  }
};

// تعريف نقاط النهاية للتوثيق Swagger
export const SWAGGER_CONFIG = {
  LOCAL: "http://localhost:5000/docs",
  EXTERNAL: "https://api.dev.example.com/docs",
};

// تعريف نقاط النهاية
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    USER: "/auth/user",
    LOGOUT: "/auth/logout",
  },
  PROJECTS: {
    LIST: "/projects",
    DETAIL: (id: string) => `/projects/${id}`,
    CREATE: "/projects",
    UPDATE: (id: string) => `/projects/${id}`,
    DELETE: (id: string) => `/projects/${id}`,
    SEARCH: "/projects/search",
    ANALYTICS: "/projects/analytics",
    EXPORT: "/projects/export",
  },
  REPORTS: {
    ANNUAL: "/reports/annual",
    QUARTERLY: "/reports/quarterly",
  },
  NEWS: {
    LIST: "/news",
    DETAIL: (id: string) => `/news/${id}`,
  },
  STRATEGY: {
    DOCUMENT: "/strategy/document",
    UPLOAD: "/strategy/upload",
  },
};

// نوع الطلب
export enum RequestMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH"
}

// واجهة لتكوين الAPI
export interface ApiConfiguration {
  baseUrl: string;
  apiKey?: string;
  version: string;
}

// دالة مساعدة للحصول على التكوين الحالي
export const getCurrentApiConfig = (useLocalApi: boolean = true): ApiConfiguration => {
  const config = useLocalApi ? API_CONFIG.LOCAL : API_CONFIG.EXTERNAL;
  return {
    baseUrl: config.BASE_URL,
    apiKey: 'API_KEY' in config ? config.API_KEY : undefined,
    version: config.VERSION,
  };
};

// دالة مساعدة للحصول على عنوان Swagger
export const getSwaggerUrl = (useLocalApi: boolean = true): string => {
  return useLocalApi ? SWAGGER_CONFIG.LOCAL : SWAGGER_CONFIG.EXTERNAL;
};

// دالة مساعدة للتحقق من حالة الاتصال بالخادم
export const checkApiConnection = async (useLocalApi: boolean = true): Promise<boolean> => {
  try {
    const config = getCurrentApiConfig(useLocalApi);
    const response = await fetch(`${config.baseUrl}/health-check`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return response.ok;
  } catch (error) {
    console.error('فشل الاتصال بالخادم:', error);
    return false;
  }
};

// دالة للحصول على عنوان API الكامل لإحدى نقاط النهاية
export const getApiUrl = (endpoint: string, useLocalApi: boolean = true): string => {
  const config = getCurrentApiConfig(useLocalApi);
  return `${config.baseUrl}${endpoint}`;
};

// دالة للحصول على تكوين قاعدة البيانات
export const getDbConfig = () => {
  return DB_CONFIG.SUPABASE;
};

// دالة للحصول على تكوين قاعدة البيانات PostgreSQL
export const getPostgresConfig = () => {
  return DB_CONFIG.POSTGRES;
};
