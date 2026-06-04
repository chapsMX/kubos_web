import Image from 'next/image'

export default function Hero() {
  return (
    <section className="px-6 md:px-12 pt-14 pb-16 md:pt-20 md:pb-20 border-b border-[rgba(6,12,32,0.12)]">
      <div className="max-w-6xl mx-auto flex flex-col gap-14 md:gap-16">

        {/* Renglón 1 — H1 + logo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 items-center">
          <h1
            className="md:col-span-2 text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.12] tracking-tight"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            <span className="text-navy-dark">Fracciones de </span>
            <span className="text-navy">bienes raíces.</span>
            <br />
            <span className="text-navy-dark/50">
              No es un contrato de uso,
            </span>
            <span className="text-navy-dark"> es un activo a tu nombre, con </span>
            <span className="text-navy-light">plusvalía,</span>
            <span className="text-navy"> renta </span>
            <span className="text-navy-dark">y </span>
            <span className="text-navy-light">herencia.</span>
          </h1>

          <div className="flex justify-center items-center order-first md:order-last">
            <Image
              src="/kubos.png"
              alt="Kubos — tres cubos isométricos"
              width={400}
              height={400}
              priority
              className="w-56 md:w-72 lg:w-96"
            />
          </div>
        </div>

        {/* Renglón 2 — subtítulo */}
        <p className="text-base md:text-xl leading-relaxed text-navy-dark text-center">
          Kubos es el servicio de estructuración legal que hace posible la copropiedad
          inmobiliaria en México. Diseñamos el fideicomiso, definimos las reglas de operación y
          acompañamos todo el proceso — para que la compra compartida de una propiedad sea
          simple, segura y rentable.
        </p>

      </div>
    </section>
  )
}
