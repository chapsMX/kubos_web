import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Términos y condiciones — Kubos',
  robots: { index: false },
  alternates: { canonical: 'https://kubos.com.mx/terminos' },
}

export default function Terminos() {
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
          Términos y condiciones de uso
        </h1>
        <div className="text-navy-dark/70 leading-relaxed space-y-4">
          <p className="text-sm text-navy-dark/40 italic">
            Documento pendiente de completar al constituir la razón social. El contenido
            cumplirá con la LFPDPPP y la legislación mexicana aplicable.
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
