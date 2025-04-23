
import { createClient } from '@supabase/supabase-js';

// تكوين Supabase الأساسي
const primaryUrl = 'https://ipsdc.gcc.iq';
const fallbackUrl = 'https://rfcuuenvbyqwapnvtpie.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmY3V1ZW52Ynlxd2FwbnZ0cGllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5Njk4MzUsImV4cCI6MjA2MDU0NTgzNX0.DKwUQhxhL4SRqZvomFXop1Ff-fbE3avPdfPO2cmcEmU';

// تحديث عميل Supabase مع إمكانية استخدام العنوان البديل
export const supabase = createClient(fallbackUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true
  }
});

// تحقق من الاتصال وطباعة معلومات التكوين
console.log('تم تكوين اتصال Supabase لقاعدة بيانات IPSDC_system');
console.log('استخدام عنوان Supabase:', fallbackUrl);

