import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zpwkeviqclyznqescvxi.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpwd2tldmlxY2x5em5xZXNjdnhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE1NDE0ODEsImV4cCI6MjAyNzExNzQ4MX0.-YcT7sYah8epCZcBPpsZVmoDnJuR4S-AOaJjJE-APXQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
