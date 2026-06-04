'use client'

import { useState } from 'react'

const destinos = [
  'Los Cabos',
  'Riviera Nayarit',
  'Mazatlán',
  'Riviera Maya',
  'Otro destino',
]

interface Props {
  onSuccess?: () => void
}

export default function ContactForm({ onSuccess }: Props) {
  const [form, setForm] = useState({ nombre: '', correo: '', destino: '', comentarios: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      onSuccess?.()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-3 py-8 text-center">
        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(88,130,212,0.1)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#5882D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <p className="text-[15px] font-semibold text-navy-dark">¡Gracias, {form.nombre}!</p>
        <p className="text-sm text-navy-dark/60">Te contactamos pronto.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-medium tracking-wide uppercase text-navy-dark/50">Nombre</label>
          <input
            type="text"
            name="nombre"
            required
            value={form.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            className="w-full border border-navy-dark/15 rounded-lg px-4 py-2.5 text-sm text-navy-dark placeholder:text-navy-dark/30 focus:outline-none focus:border-navy-light bg-transparent"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-medium tracking-wide uppercase text-navy-dark/50">Correo</label>
          <input
            type="email"
            name="correo"
            required
            value={form.correo}
            onChange={handleChange}
            placeholder="tu@correo.com"
            className="w-full border border-navy-dark/15 rounded-lg px-4 py-2.5 text-sm text-navy-dark placeholder:text-navy-dark/30 focus:outline-none focus:border-navy-light bg-transparent"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] font-medium tracking-wide uppercase text-navy-dark/50">Destino de interés</label>
        <select
          name="destino"
          value={form.destino}
          onChange={handleChange}
          className="w-full border border-navy-dark/15 rounded-lg px-4 py-2.5 text-sm text-navy-dark focus:outline-none focus:border-navy-light bg-transparent"
        >
          <option value="">Selecciona un destino</option>
          {destinos.map((d) => <option key={d} value={d}>{d}</option>)}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] font-medium tracking-wide uppercase text-navy-dark/50">Comentarios</label>
        <textarea
          name="comentarios"
          value={form.comentarios}
          onChange={handleChange}
          rows={3}
          placeholder="¿Tienes alguna pregunta o contexto que quieras compartir?"
          className="w-full border border-navy-dark/15 rounded-lg px-4 py-2.5 text-sm text-navy-dark placeholder:text-navy-dark/30 focus:outline-none focus:border-navy-light bg-transparent resize-none"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-500">Ocurrió un error. Intenta de nuevo.</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-1 w-full py-3 rounded-lg text-[13px] font-semibold text-blanco transition-opacity disabled:opacity-60"
        style={{ background: '#1C3D82' }}
      >
        {status === 'loading' ? 'Enviando…' : 'Enviar'}
      </button>
    </form>
  )
}
