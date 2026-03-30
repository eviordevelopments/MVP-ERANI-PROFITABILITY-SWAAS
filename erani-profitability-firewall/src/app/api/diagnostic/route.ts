import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const getSupabaseAdmin = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder_key';
  return createClient(supabaseUrl, supabaseServiceKey);
};
import { runEraniInference, ForensicInputs } from '@/lib/eraniInferenceEngine';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Diagnostic Payload Received:', JSON.stringify(body, null, 2));
    
    // 1. Extraer los datos crudos del formulario (ForensicInputs)
    // El frontend usa IDs de steps como llaves (1, 2, 3, 4)
    const rawAccuracy = body[2];
    const accuracy = (typeof rawAccuracy === 'number' ? rawAccuracy : parseInt(rawAccuracy || '65')) as ForensicInputs['accuracy'];

    const inputs: ForensicInputs = {
      challenge: body[1] || 'unknown',
      accuracy: [40, 65, 85, 95].includes(accuracy) ? accuracy : 65,
      monthlyRevenue: parseInt(body[3] || '0'),
      collaborators: parseInt(body[4] || '0'),
      contact: body.contact
    };

    if (!inputs.contact?.name || !inputs.contact?.email) {
      console.error('Validation Error: Missing contact information');
      return NextResponse.json({ error: 'Faltan datos de contacto críticos' }, { status: 400 });
    }

    // 2. Correr el Motor de Inferencia en Backend
    const results = runEraniInference(inputs);

    // 3. Insertar en Supabase
    const { data: dbData, error } = await getSupabaseAdmin()
      .from('erani_diagnostics')
      .insert([
        {
          challenge: inputs.challenge,
          accuracy_level: inputs.accuracy.toString(),
          monthly_revenue: inputs.monthlyRevenue,
          collaborators: inputs.collaborators,
          contact_name: inputs.contact.name,
          contact_email: inputs.contact.email,
          contact_whatsapp: inputs.contact.whatsapp || '',
          calculated_hemorragia: Math.round(results.hemorragiaMensual),
          calculated_coi: Math.round(results.coiAnual),
          privacy_accepted: body.privacyAccepted || false
        }
      ])
      .select();

    if (error) {
      console.error('Supabase Insertion Error:', error);
      return NextResponse.json({ 
        error: 'Error al registrar en base de datos', 
        details: error.message,
        code: error.code 
      }, { status: 500 });
    }

    console.log('Diagnostic data saved successfully');
    return NextResponse.json({ success: true, results }, { status: 200 });
  } catch (error: any) {
    console.error('Critical API Route Error:', error);
    return NextResponse.json({ 
      error: 'Error interno del servidor en el procesamiento forense',
      message: error.message 
    }, { status: 500 });
  }
}
