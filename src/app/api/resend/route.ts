import { getEmailTemplate } from '@/Components/Email/templateEmail';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Inicializa o Resend com a chave da API (coloque no .env)
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, name, message, recipient, phone } = await req.json();

    const emailHtml = getEmailTemplate(name, email, message, phone, recipient);

    const response = await resend.emails.send({
      from: 'C-five <no-reply@cfive.com.br>',
      to: [
        'felipe.unifieo@gmail.com',
        // 'Carolynenascimento0216@gmail.com'
      ],
      subject: '📩 Nova mensagem do site',
      html: emailHtml,
    });

    return NextResponse.json({ success: true, data: response });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
