import './globals.css';

export const metadata = {
  title: 'Casa Libre — The property marketplace of South America',
  description:
    'Casa Libre is the home marketplace of South America — buy, rent and sell houses, apartments and land directly, with no intermediaries. One platform, six countries: Paraguay, Argentina, Brazil, Bolivia, Chile and Uruguay.',
  metadataBase: new URL('https://casa-libre.com'),
  openGraph: {
    title: 'Casa Libre — The property marketplace of South America',
    description: 'One platform, six countries. Buy, rent and sell property directly across South America.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
