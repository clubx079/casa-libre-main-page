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
    'Casa Libre reúne todas las propiedades de Sudamérica en un solo lugar: de inmobiliarias, agentes y dueños particulares. Compre, alquile o venda casas, departamentos y terrenos sin comisión. Una sola plataforma, ocho países.',
  metadataBase: new URL('https://casa-libre.com'),
  openGraph: {
    title: 'Casa Libre — El marketplace inmobiliario de Sudamérica',
    description: 'Una sola plataforma, ocho países. Todas las propiedades de Sudamérica en un solo lugar: inmobiliarias, agentes y dueños particulares, sin comisión.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casa Libre — El marketplace inmobiliario de Sudamérica',
    description: 'Una sola plataforma, ocho países. Todas las propiedades de Sudamérica en un solo lugar: inmobiliarias, agentes y dueños particulares, sin comisión.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
