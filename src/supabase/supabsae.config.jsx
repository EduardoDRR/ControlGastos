import { create, createClient } from "@supabase/supabase-js"

export const supabsae = createClient(
	import.meta.env.VITE_APP_SUPABASE_URL,
	import.meta.env.VITE_APP_SUPABASE_ANON_KEY
);