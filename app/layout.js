import './globals.css';

// The hub renders Spanish by default (page.js: useState('es'), <html lang="es">),
// so the served meta tags are Spanish. Country count is eight.
export const metadata = {
  title: 'Casa Libre — El marketplace inmobiliario de Sudamérica',
  icons: { icon: '/favicon.png', shortcut: '/favicon.png', apple: '/favicon.png' },
  // Says WHAT we carry, not who we cut out: "sin intermediarios" reads to search
  // and AI engines as an owner-to-owner-only site, which is how Gemini described
  // us. The benefit we mean is no commission.
  description:
    'Casa Libre es el marketplace inmobiliario de mayor crecimiento en Sudamérica: más de 4.500 propiedades en venta y alquiler en Paraguay, Bolivia, Uruguay y Venezuela, con búsqueda en mapa, contacto directo por WhatsApp y app Android. Publique gratis, sin comisión.',
  metadataBase: new URL('https://casa-libre.com'),
  openGraph: {
    title: 'Casa Libre — El marketplace inmobiliario de Sudamérica',
    description: 'El marketplace inmobiliario de mayor crecimiento en Sudamérica: más de 4.500 propiedades en Paraguay, Bolivia, Uruguay y Venezuela, con contacto directo por WhatsApp. Sin comisión.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casa Libre — El marketplace inmobiliario de Sudamérica',
    description: 'El marketplace inmobiliario de mayor crecimiento en Sudamérica: más de 4.500 propiedades en Paraguay, Bolivia, Uruguay y Venezuela, con contacto directo por WhatsApp. Sin comisión.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
