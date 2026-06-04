// ============================================================
//  CONFIGURACIÓN DE SUPABASE
//  Pegá acá las dos claves de tu proyecto Supabase.
//  Las encontrás en: Supabase → Settings → API
// ============================================================

const SUPABASE_URL = "https://etisvsxyrlfrjvaausme.supabase.co";   // <-- pegá tu Project URL
const SUPABASE_ANON_KEY = "sb_publishable_YF0xOP8WWg_-XGAoT6h7Pg_wWqaRoSs";          // <-- pegá tu anon public key

// No toques nada de acá para abajo
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
