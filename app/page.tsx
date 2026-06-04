import type { Metadata } from 'next'
import Nav from '@/components/nav'
import Hero from '@/components/hero'
import QueHacemos from '@/components/que-hacemos'
import Fideicomiso from '@/components/fideicomiso'
import Destinos from '@/components/destinos'
import Contacto from '@/components/contacto'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  alternates: { canonical: 'https://kubos.com.mx' },
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <QueHacemos />
        <Fideicomiso />
        <Contacto />
        <Destinos />
      </main>
      <Footer />
    </>
  )
}
