'use client'

import { useEffect } from 'react'
import ContactForm from './contact-form'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: Props) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(6,12,32,0.5)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-blanco rounded-2xl p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold text-navy-dark" style={{ fontFamily: 'Georgia, serif' }}>
              Hablemos
            </h3>
            <p className="text-sm text-navy-dark/50 mt-1">Te contactamos en menos de 24 horas.</p>
          </div>
          <button
            onClick={onClose}
            className="text-navy-dark/30 hover:text-navy-dark transition-colors mt-0.5"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <ContactForm onSuccess={() => {}} />
      </div>
    </div>
  )
}
