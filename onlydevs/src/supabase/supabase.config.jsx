import {createCLient} from "@supabase/supabase-js"
export const supabase = createCLient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
)