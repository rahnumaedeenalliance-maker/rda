// config.js
const SUPABASE_URL = "https://fqzhnxxuetyjarebsyqn.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxemhueHh1ZXR5amFyZWJzeXFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4NDQ0NDEsImV4cCI6MjA4NzQyMDQ0MX0.cedVSAZQJmaRLnXoYUhX1AqMpJWqSeAwNX6D8WT2KiM";

// Initialize Supabase Client
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
