/** @type {import('tailwindcss').Config} */
// Casa Libre brand tokens — mirrors the Paraguay site (casa-libre.com.py).
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        paper: '#F9F4EE',
        bone: '#FAF7F1',
        card: '#FFFFFF',
        hatch1: '#EAE6DD',
        hatch2: '#F4F1EA',
        canvas: '#E9E6DF',
      },
      fontFamily: {
        sans: ["'Space Grotesk'", 'system-ui', 'sans-serif'],
        serif: ["'Instrument Serif'", 'serif'],
        mono: ["'IBM Plex Mono'", 'monospace'],
      },
      boxShadow: {
        hard: '5px 5px 0 #111111',
        'hard-sm': '4px 4px 0 #111111',
        'hard-lg': '8px 8px 0 #111111',
        'hard-soft': '4px 4px 0 rgba(17,17,17,.2)',
      },
      borderRadius: { pill: '999px', card: '20px', input: '14px', section: '36px' },
      letterSpacing: { display: '-0.045em', head: '-0.03em', label: '.12em' },
    },
  },
  plugins: [],
};
