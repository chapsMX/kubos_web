'use client'

const destinos = [
  { ciudad: 'Los Cabos', estado: 'Baja California Sur' },
  { ciudad: 'Riviera Nayarit', estado: 'Nayarit' },
  { ciudad: 'Mazatlán', estado: 'Sinaloa' },
  { ciudad: 'Riviera Maya', estado: 'Quintana Roo' },
]

export default function Destinos() {
  return (
    <section id="destinos" className="pt-6 md:pt-8 pb-0 border-b border-[rgba(6,12,32,0.12)]">

      {/* Título + texto intro */}
      <div className="px-6 md:px-12 max-w-6xl mx-auto flex flex-col gap-6 mb-2">
        <h2
          className="text-3xl md:text-4xl font-normal leading-tight tracking-tight"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Destinos
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-navy-dark/70">
          Seleccionamos destinos con tres características no negociables: demanda de renta vacacional
          comprobada, plusvalía histórica sostenida y mercado de compradores internacionales activo.
          No operamos en todos lados — operamos donde el activo trabaja.
        </p>
      </div>

      {/* Tarjetas 4 en fila — bg-crema a ancho total */}
      <div className="w-full bg-crema">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4">
          {destinos.map((d, i) => (
            <div
              key={d.ciudad}
              className={[
                'flex flex-col gap-3 p-8 bg-crema cursor-default',
                i < 3 ? 'md:border-r border-[rgba(6,12,32,0.08)]' : '',
                i < 2 ? 'border-b md:border-b-0 border-[rgba(6,12,32,0.08)]' : '',
              ].join(' ')}
            >
              <div
                className="w-8 h-8 rounded-md flex items-center justify-center"
                style={{ background: 'rgba(88,130,212,0.1)' }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="#5882D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="text-[15px] font-semibold text-navy-dark">{d.ciudad}</p>
                <p className="text-[12px] text-navy-dark/50 mt-0.5">{d.estado}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer azul */}
      <div className="w-full" style={{ background: '#1C3D82' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-6 md:py-8">
          <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(255,255,252,0.85)' }}>
            ¿Tu destino no está en la lista?{' '}
            <strong className="text-blanco font-semibold">El modelo Kubos aplica en cualquier mercado con demanda de renta vacacional comprobada.</strong>{' '}
            Hablemos.
          </p>
        </div>
      </div>

    </section>
  )
}
