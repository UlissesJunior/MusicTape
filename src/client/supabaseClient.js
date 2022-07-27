import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_TEST_BASE_URL;
const supabaseAnonKey = import.meta.env.VITE_TEST_BASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey)