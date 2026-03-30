import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const getSupabaseAdmin = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder_key';
  return createClient(supabaseUrl, supabaseServiceKey);
};

const STRIPE_PAYMENT_LINK = 'https://book.stripe.com/9B67sMd4Y6FK9n94lO8N200';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Checkout Lead Received:', JSON.stringify(body, null, 2));

    const { fullName, agencyName, email, channels } = body;

    // Validación
    if (!fullName || !agencyName || !email) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos (nombre, agencia, email)' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Insertar en Supabase
    const { data, error } = await getSupabaseAdmin()
      .from('erani_checkout_leads')
      .insert([
        {
          full_name: fullName,
          agency_name: agencyName,
          email: email,
          channels_slack: channels?.slack || false,
          channels_jira: channels?.jira || false,
          channels_clickup: channels?.clickup || false,
          stripe_redirect_url: STRIPE_PAYMENT_LINK,
          payment_status: 'pending',
          amount_mxn: 2950,
          source: 'checkout_form'
        }
      ])
      .select();

    if (error) {
      console.error('Supabase Checkout Error:', error);
      return NextResponse.json(
        { error: 'Error al registrar lead', details: error.message },
        { status: 500 }
      );
    }

    console.log('Checkout lead saved:', data);

    return NextResponse.json({
      success: true,
      redirectUrl: STRIPE_PAYMENT_LINK,
      leadId: data?.[0]?.id
    }, { status: 200 });

  } catch (error: any) {
    console.error('Checkout API Error:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor', message: error.message },
      { status: 500 }
    );
  }
}
