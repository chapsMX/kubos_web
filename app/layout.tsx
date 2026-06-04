import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  title: 'Kubos - Fractional Real Estate en México',
  description:
    'Fracciones de bienes raíces. No es un contrato de uso, es un activo a tu nombre, con plusvalía, renta. Estructura de copropiedad inmobiliaria a través de fideicomisos bancarios.',
  keywords: [
    'fractional',
    'copropiedad',
    'copropiedad inmobiliaria',
    'fractional ownership',
    'propiedad fraccionada',
    'méxico',
  ],
  openGraph: {
    title: 'Kubos - Fractional Real Estate en México',
    description:
      'Fracciones de bienes raíces. No es un contrato de uso, es un activo a tu nombre, con plusvalía, renta. Estructura de copropiedad inmobiliaria a través de fideicomisos bancarios.',
    url: 'https://kubos.com.mx',
    siteName: 'Kubos',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://kubos.com.mx/kubosShare.png',
        width: 1200,
        height: 630,
        alt: 'Kubos — Copropiedad inmobiliaria en México',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kubos - Fractional Real Estate en México',
    description:
      'Fracciones de bienes raíces. No es un contrato de uso, es un activo a tu nombre, con plusvalía, renta.',
    images: ['https://kubos.com.mx/kubosShare.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' },
    ],
  },
  manifest: '/site.webmanifest',
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={jakartaSans.variable}>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M7DCN6DH"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <Analytics />
        <Script id="gtm" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M7DCN6DH');`}
        </Script>
      </body>
    </html>
  )
}
