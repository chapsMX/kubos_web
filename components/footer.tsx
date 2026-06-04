import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-8 border-t border-[rgba(6,12,32,0.12)]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-[12px] text-navy-dark/40">© 2026 Kubos</p>
        <p className="text-[12px] text-navy-dark/40">Un producto de RE/invent</p>
        <div className="flex items-center gap-4">
          <Link
            href="/privacidad"
            className="text-[12px] text-navy-dark/40 hover:text-navy transition-colors"
          >
            Política de privacidad
          </Link>
          <span className="text-[12px] text-navy-dark/20">·</span>
          <Link
            href="/terminos"
            className="text-[12px] text-navy-dark/40 hover:text-navy transition-colors"
          >
            Términos y condiciones
          </Link>
        </div>
      </div>
    </footer>
  )
}
