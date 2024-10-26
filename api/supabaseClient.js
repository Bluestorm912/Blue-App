import { createClient } from "@supabase/supabase-js";

const SUPBASE_URL = 'https://beidbwfczgfugwdgdjtt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlaWRid2ZjemdmdWd3ZGdkanR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwMDg0OTgsImV4cCI6MjA0NDU4NDQ5OH0.4ru35jfR03-1ptfWx5WtU0gQ0DjeA1kDJlqXF3NsFQs';

export const supabase = createClient(SUPBASE_URL, SUPABASE_ANON_KEY);
