import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de privacidad — Kubos',
  robots: { index: false },
  alternates: { canonical: 'https://kubos.com.mx/privacidad' },
}

export default function Privacidad() {
  return (
    <>
      <header className="px-6 md:px-12 py-5 border-b border-[rgba(6,12,32,0.12)]">
        <Link href="/" className="text-[13px] text-navy hover:text-navy-dark transition-colors">
          ← Kubos
        </Link>
      </header>
      <main className="px-6 md:px-12 py-16 max-w-3xl mx-auto">
        <span className="section-label mb-6">Legal</span>
        <h1
          className="text-3xl md:text-4xl font-normal text-navy-dark mb-8 mt-6"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Política de privacidad
        </h1>
        <div className="prose prose-sm max-w-none text-navy-dark/70 leading-relaxed space-y-4">
          <p className="text-sm text-navy-dark/40 italic">
            Documento pendiente de completar al constituir la razón social. El contenido
            cumplirá con la LFPDPPP (Ley Federal de Protección de Datos Personales en Posesión de
            Particulares).
          </p>
          <p>
            <strong>[RAZÓN SOCIAL, S.A. DE C.V.]</strong>
            <br />
            <strong>[DOMICILIO FISCAL COMPLETO]</strong>
          </p>
        </div>
      </main>
    </>
  )
}
