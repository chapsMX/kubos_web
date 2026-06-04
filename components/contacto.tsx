import ContactForm from './contact-form'

export default function Contacto() {
  return (
    <section className="py-16 md:py-20 border-b border-[rgba(6,12,32,0.12)]">
      <div className="px-6 md:px-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

        <div className="flex flex-col gap-5">
          <h2
            className="text-3xl md:text-4xl font-normal leading-tight tracking-tight"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Hablemos
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-navy-dark/70">
            Si tienes una propiedad en mente, quieres invertir en una de las nuestras o eres
            desarrollador buscando ampliar tu base de compradores — cuéntanos.
            Te contactamos en menos de 24 horas.
          </p>
        </div>

        <ContactForm />

      </div>
    </section>
  )
}
