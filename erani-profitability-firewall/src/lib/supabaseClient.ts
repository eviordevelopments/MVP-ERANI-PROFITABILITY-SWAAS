import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("ERROR: Faltan las variables de entorno de Supabase. Revisa tu .env.local")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Función rápida de diagnóstico
export const testConnection = async () => {
    const { data, error } = await supabase.from('_ui_settings').select('*').limit(1)
    // Nota: Cambia '_ui_settings' por cualquier tabla que ya tengas creada
    if (error) return { success: false, message: error.message }
    return { success: true, data }
}
