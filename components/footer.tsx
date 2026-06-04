import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-8 border-t border-[rgba(6,12,32,0.12)]">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-[12px] text-navy-dark/40">© 2026 Happy Panda Corporation S.A. de C.V.</p>
            <a
              href="https://www.reinvent.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-navy-dark/40 hover:text-navy transition-colors"
            >
              Un producto de RE/invent
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[12px] text-navy-dark/30 font-medium">Nuestras redes</p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/re-invent-mx/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] text-navy-dark/40 hover:text-navy transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-[12px] text-navy-dark/20">·</span>
              <span className="text-[12px] text-navy-dark/40">Facebook</span>
              <span className="text-[12px] text-navy-dark/20">·</span>
              <span className="text-[12px] text-navy-dark/40">Instagram</span>
            </div>
          </div>
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
      </div>
    </footer>
  )
}
