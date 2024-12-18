import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://hspwxkoiplaqcmaxngzi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzcHd4a29pcGxhcWNtYXhuZ3ppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk3NjUxMDgsImV4cCI6MjA0NTM0MTEwOH0.MphT-vU534eESU7IvTAdYiruM2kCK18sJ7sJSvcXruY';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);