import './globals.css';

// The hub renders Spanish by default (page.js: useState('es'), <html lang="es">),
// so the served meta tags are Spanish. Country count is eight.
export const metadata = {
  title: 'Casa Libre — El marketplace inmobiliario de Sudamérica',
  description:
    'Casa Libre es el marketplace inmobiliario de Sudamérica: compre, alquile y venda casas, departamentos y terrenos de forma directa, sin intermediarios. Una sola plataforma, ocho países.',
  metadataBase: new URL('https://casa-libre.com'),
  openGraph: {
    title: 'Casa Libre — El marketplace inmobiliario de Sudamérica',
    description: 'Una sola plataforma, ocho países. Compre, alquile y venda propiedades de forma directa en toda Sudamérica.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casa Libre — El marketplace inmobiliario de Sudamérica',
    description: 'Una sola plataforma, ocho países. Compre, alquile y venda propiedades de forma directa en toda Sudamérica.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
