import { createClient } from '@supabase/supabase-js'

const URL = "https://mgctrmgfghylyrtetans.supabase.co";
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nY3RybWdmZ2h5bHlydGV0YW5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MjkyMzIsImV4cCI6MjA2MDQwNTIzMn0.5SemasUsJ5J5BPRvS8vMWXPUai9dN5v43e0cCk5HtGY';

export const supabase = createClient(URL, API_KEY);
