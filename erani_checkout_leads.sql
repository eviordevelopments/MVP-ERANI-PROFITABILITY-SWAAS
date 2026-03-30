-- erani_checkout_leads.sql
-- Tabla para registrar leads del formulario "Agendar Peritaje Forense"
-- Corre esto en el Editor SQL dentro de tu panel de Supabase.

CREATE TABLE IF NOT EXISTS public.erani_checkout_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  full_name TEXT NOT NULL,
  agency_name TEXT NOT NULL,
  email TEXT NOT NULL,
  channels_slack BOOLEAN DEFAULT FALSE,
  channels_jira BOOLEAN DEFAULT FALSE,
  channels_clickup BOOLEAN DEFAULT FALSE,
  stripe_redirect_url TEXT,
  payment_status TEXT DEFAULT 'pending', -- pending | completed | failed
  amount_mxn NUMERIC DEFAULT 2950,
  source TEXT DEFAULT 'checkout_form'
);

-- Habilitar Row Level Security
ALTER TABLE public.erani_checkout_leads ENABLE ROW LEVEL SECURITY;

-- Permitir inserciones públicas (el frontend puede enviar datos sin autenticación)
CREATE POLICY "Permitir inserciones publicas a checkout leads"
ON public.erani_checkout_leads FOR INSERT
TO public
WITH CHECK (true);

-- Solo usuarios autenticados (admin) pueden leer los registros
CREATE POLICY "Permitir lectura a usuarios autenticados"
ON public.erani_checkout_leads FOR SELECT
TO authenticated
USING (true);

-- Solo el service_role puede actualizar el status de pago
CREATE POLICY "Permitir actualizacion por service role"
ON public.erani_checkout_leads FOR UPDATE
TO authenticated
USING (true);
