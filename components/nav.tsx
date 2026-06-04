'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ContactModal from './contact-modal'

const links = [
  { label: 'Qué hacemos', href: '#que-hacemos' },
  { label: 'La base legal', href: '#base-legal' },
  { label: 'Destinos', href: '#destinos' },
]

export default function Nav() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <nav className="w-full px-6 md:px-12 py-4 flex items-center justify-between">
        <Image
          src="/kubosHeader.png"
          alt="Kubos"
          width={781}
          height={250}
          priority
          className="h-20 w-auto"
        />
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[13px] text-navy-dark/50 hover:text-navy transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setModalOpen(true)}
            className="text-[13px] font-semibold text-blanco px-5 py-2 rounded-lg transition-opacity hover:opacity-80"
            style={{ background: '#1C3D82' }}
          >
            Hablemos
          </button>
        </div>
      </nav>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
