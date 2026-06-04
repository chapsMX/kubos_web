import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { nombre, correo, destino, comentarios } = await req.json()

  if (!nombre || !correo) {
    return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
  }

  await resend.emails.send({
    from: 'Kubos <hola@kubos.com.mx>',
    to: 'carlos@alcocersola.com',
    replyTo: correo,
    subject: `Nuevo contacto Kubos — ${nombre}`,
    text: [
      `Nombre: ${nombre}`,
      `Correo: ${correo}`,
      `Destino: ${destino || 'No especificado'}`,
      `Comentarios: ${comentarios || '—'}`,
    ].join('\n'),
  })

  return NextResponse.json({ ok: true })
}
