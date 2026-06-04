'use client'

const cards = [
  {
    title: 'Título real, no derecho de uso',
    body: 'Tu participación queda inscrita en el Registro Público de la Propiedad. Eres propietario, no usuario. Puedes vender, heredar y rentar libremente.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: 'Protección entre copropietarios',
    body: 'El activo queda blindado ante deudas, embargos o problemas legales de cualquier otro copropietario. Tu fracción no se ve afectada por lo que le pase a los demás.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Acceso a zona costera para extranjeros',
    body: 'La Constitución Mexicana exige fideicomiso para que extranjeros adquieran propiedad dentro de los 50 km de cualquier costa. Kubos gestiona todo el proceso.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: 'Reglas de uso y distribución claras',
    body: 'El contrato del fideicomiso define cuándo usa cada propietario la propiedad y cómo se distribuyen los ingresos por renta. Sin ambigüedades, sin depender de que todos estén de acuerdo para operar.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
]

export default function Fideicomiso() {
  return (
    <section id="base-legal" className="pt-6 md:pt-8 pb-0 border-b border-[rgba(6,12,32,0.12)]">

      {/* Título + texto intro */}
      <div className="px-6 md:px-12 max-w-6xl mx-auto flex flex-col gap-6 mb-2">
        <h2
          className="text-3xl md:text-4xl font-normal leading-tight tracking-tight"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          La base legal
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-navy-dark/70">
          El fideicomiso bancario es el instrumento que convierte una compra compartida en una
          inversión real. Un banco mexicano resguarda el título de propiedad de forma independiente,
          mientras cada copropietario conserva todos sus derechos como fideicomisario. El resultado:
          un activo protegido, reglas claras y total independencia entre los socios.
        </p>
      </div>

      {/* Tarjetas 2×2 — bg-crema a ancho total */}
      <div className="w-full bg-crema">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={[
                'flex flex-col gap-5 p-8 bg-crema cursor-default',
                i % 2 === 0 ? 'sm:border-r border-[rgba(6,12,32,0.08)]' : '',
                i < 2 ? 'sm:border-b border-[rgba(6,12,32,0.08)]' : '',
              ].join(' ')}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(88,130,212,0.1)', color: '#5882D4' }}
              >
                {card.icon}
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-[17px] font-semibold text-navy-dark leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-navy-dark/60">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bloque "No es tiempo compartido" — ancho total */}
      <div className="w-full" style={{ background: '#1C3D82' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-6 md:py-8">
          <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(255,255,252,0.85)' }}>
            <strong className="text-blanco font-semibold">No es tiempo compartido.</strong> En el
            tiempo compartido compras el derecho a vacaciones — no eres dueño de nada. Con Kubos
            adquieres una fracción real del activo: participas en la plusvalía, puedes vender tu
            parte en el mercado y tu inversión puede heredarse.
          </p>
        </div>
      </div>

    </section>
  )
}
