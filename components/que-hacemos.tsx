'use client'

const servicios = [
  {
    label: 'Copropiedad · Familia y Amigos',
    title: 'Amigos y familia',
    body: '¿Ya encontraron la propiedad? No importa si es en la playa, en la ciudad o en cualquier destino — estructuramos el fideicomiso para que la compartan sin conflictos. Definimos los derechos de uso de cada socio, las reglas de administración y el mecanismo para tomar decisiones colectivas. La propiedad que quieren, con la estructura legal que necesitan.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: 'Inversión Patrimonial ',
    title: 'Propiedades gestionadas',
    body: 'Identificamos propiedades en destinos de alta demanda, las fraccionamos y abrimos la participación a inversionistas. Nuestro equipo gestiona la operación, el mantenimiento y la renta vacacional — tú recibes rendimientos periódicos sin ocuparte de nada. Una inversión patrimonial con flujo de caja desde el primer año.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    label: 'Desarrolladores · Veta de inventario',
    title: 'Inventario y desarrolladores',
    body: 'Nos asociamos con desarrolladores para estructurar y comercializar unidades bajo esquema de copropiedad. Diseñamos el modelo fraccionado, proveemos el marco legal y ejecutamos la estrategia de ventas — acelerando los ciclos de comercialización y ampliando la base de compradores potenciales.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
]

export default function QueHacemos() {
  return (
    <section id="que-hacemos" className="pt-6 md:pt-8 pb-0 border-b border-[rgba(6,12,32,0.12)]">

      {/* Encabezado + texto intro */}
      <div className="px-6 md:px-12 max-w-6xl mx-auto flex flex-col gap-6 mb-2">
        <h2
          className="text-3xl md:text-4xl font-normal leading-tight tracking-tight"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Qué hacemos
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-navy-dark/70">
          Kubos estructura la copropiedad inmobiliaria a través de fideicomisos bancarios — el
          único mecanismo que convierte la compra colectiva de una propiedad en una inversión con
          título legal real, rendimientos y plusvalía. Manejamos todo: desde el vehículo jurídico
          hasta la administración de la renta vacacional, para que copropietarios e inversionistas
          solo se preocupen por la oportunidad.
        </p>
      </div>

      {/* Tarjetas de servicios — bg-crema a ancho total */}
      <div className="w-full bg-crema">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3">
          {servicios.map((s, i) => (
            <div
              key={s.title}
              className={[
                'flex flex-col gap-5 p-8 bg-crema cursor-default',
                i < 2 ? 'md:border-r border-[rgba(6,12,32,0.08)]' : '',
              ].join(' ')}
            >
              {/* Label categoría */}
              <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-navy-light">
                {s.label}
              </p>

              {/* Icono */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(88,130,212,0.1)', color: '#5882D4' }}
              >
                {s.icon}
              </div>

              {/* Título + cuerpo */}
              <div className="flex flex-col gap-3 flex-1">
                <h3 className="text-[17px] font-semibold text-navy-dark leading-snug">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-navy-dark/60">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer azul */}
      <div className="w-full" style={{ background: '#1C3D82' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-6 md:py-8">
          <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(255,255,252,0.85)' }}>
            El fractional ownership sin estructura legal es una fuente de conflictos.{' '}
            <strong className="text-blanco font-semibold">Kubos pone el fideicomiso, las reglas y la operación</strong>{' '}
            — para que la única pregunta sea en qué propiedad quieres invertir.
          </p>
        </div>
      </div>

    </section>
  )
}
