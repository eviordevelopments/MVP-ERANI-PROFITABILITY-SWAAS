-- erani_diagnostics.sql
-- Script para inicializar la base de datos de captación de leads y peritaje.
-- Corre esto en el Editor SQL dentro de tu panel de Supabase.

CREATE TABLE IF NOT EXISTS public.erani_diagnostics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  challenge TEXT NOT NULL,
  accuracy_level TEXT NOT NULL,
  monthly_revenue NUMERIC NOT NULL,
  collaborators INTEGER NOT NULL,
  contact_name TEXT NOT NULL,
  contact_email TEXT NOT NULL,
  contact_whatsapp TEXT NOT NULL,
  calculated_hemorragia NUMERIC NOT NULL,
  calculated_coi NUMERIC NOT NULL,
  privacy_accepted BOOLEAN NOT NULL DEFAULT FALSE
);

-- Si deseas permitir que cualquiera (el frontend) inserte sin autenticación formal de usuarios usando SUPABASE_ANON_KEY:
-- 1. Habilitamos Role Level Security
ALTER TABLE public.erani_diagnostics ENABLE ROW LEVEL SECURITY;

-- 2. Permitimos inserciones anónimas (cualquier visitante del frontend puede llenar el formulario)
CREATE POLICY "Permitir inserciones publicas a diagnosticos" 
ON public.erani_diagnostics FOR INSERT 
TO public
WITH CHECK (true);

-- 3. Solo usuarios autenticados (tu panel del admin) puedan LEER la base de datos de leads.
CREATE POLICY "Permitir ver a usuarios autenticados" 
ON public.erani_diagnostics FOR SELECT
TO authenticated
USING (true);
