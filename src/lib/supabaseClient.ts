import { createClient } from '@supabase/supabase-js';

const URL  = import.meta.env.VITE_SUPABASE_URL!;
const ANON = import.meta.env.VITE_SUPABASE_ANON!;

export const supabase = createClient(URL, ANON);
