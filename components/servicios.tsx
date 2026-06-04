const servicios = [
  {
    title: 'Amigos y familia',
    body: '¿Ya encontraron la propiedad? No importa si es en la playa, en la ciudad o en cualquier destino — nosotros estructuramos el fideicomiso para que la compartan sin conflictos. Definimos los derechos de uso de cada socio, las reglas de administración y el mecanismo para tomar decisiones colectivas. La propiedad que quieren, con la estructura legal que necesitan.',
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

export default function Servicios() {
  return (
    <section className="px-6 md:px-12 py-16 md:py-20 border-b border-[rgba(6,12,32,0.12)]">
      <div className="max-w-6xl mx-auto">
        <span className="section-label mb-10">Nuestros servicios</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {servicios.map((s) => (
            <div key={s.title} className="bg-crema rounded-xl p-6 flex flex-col gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(88,130,212,0.1)', color: '#5882D4' }}
              >
                {s.icon}
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-navy-dark mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed text-navy-dark/60">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
