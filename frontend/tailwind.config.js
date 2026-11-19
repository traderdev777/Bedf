/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#FDF5F0',
          100: '#FCE7DC',
          200: '#F9CFB9',
          300: '#F4AC86',
          400: '#EE804B',
          500: '#D95B20', // Official Deep Orange (Energy, Innovation, Action)
          600: '#C24A15',
          700: '#A13A11',
          800: '#833012',
          900: '#6C2A13',
          950: '#3A1306',
        },
        emerald: {
          50: '#F2F8F5',
          100: '#E1F0E9',
          200: '#C4E1D3',
          300: '#97CAB5',
          400: '#54A887',
          500: '#145A45', // Official Deep Emerald (Primary Brand Accent)
          600: '#0F4736',
          700: '#0C382B',
          800: '#0A2B22',
          900: '#08231C',
          950: '#03130F',
        },
        navy: {
          50: '#EEF4FC',
          100: '#D5E4F8',
          200: '#ADC9F2',
          300: '#75A5E8',
          400: '#3D7DDC',
          500: '#1D5CB8',
          600: '#142B45', // Midnight Navy (#142B45)
          700: '#0B2D5B', // Primary Navy (#0B2D5B)
          800: '#071A33', // Deep Navy (#071A33)
          900: '#041021',
          950: '#020914',
        },
        gold: {
          50: '#FAF8F0',
          100: '#F5F0DD',
          200: '#ECE0BA',
          300: '#E1CE92',
          400: '#D3BA6A',
          500: '#C5A15B', // Champagne Gold (#C5A15B) & Official Gold #D4AF37
          600: '#A98442',
          700: '#836534',
          800: '#674F2D',
          900: '#533F27',
        },
        ivory: {
          DEFAULT: '#F7F8F4', // Warm Ivory
          50: '#FCFDFB',
          100: '#F7F8F4',
          200: '#EFF2E8',
          300: '#E4E9D8',
        },
        sage: {
          DEFAULT: '#E5EDE6', // Soft Sage
          50: '#F5F8F5',
          100: '#E5EDE6',
          200: '#CFE0D2',
          300: '#B4CDB8',
        },
        charcoal: {
          DEFAULT: '#263238', // Charcoal
          50: '#ECEFF1',
          100: '#CFD8DC',
          200: '#B0BEC5',
          300: '#90A4AE',
          400: '#78909C',
          500: '#607D8B',
          600: '#546E7A',
          700: '#455A64',
          800: '#37474F',
          900: '#263238',
        },
        bedf: {
          lightBg: '#F7F8F4', // Warm Ivory (#F7F8F4)
          ivory: '#F7F8F4',
          emerald: '#145A45',
          navy: '#142B45',
          gold: '#C5A15B',
          orange: '#D95B20',
          sage: '#E5EDE6',
          charcoal: '#263238',
          darkBg: '#051124',
          darkCard: '#091B38',
          textDark: '#263238',
          textMuted: '#6B7280',
        }
      },
      fontFamily: {
        sans: ['var(--font-body)', 'DM Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body: ['var(--font-body)', 'DM Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['var(--font-display)', 'Manrope', 'sans-serif'],
        heading: ['var(--font-display)', 'Manrope', 'sans-serif'],
        serif: ['var(--font-serif)', '"Playfair Display"', 'Georgia', 'serif'],
        editorial: ['var(--font-serif)', '"Playfair Display"', 'Georgia', 'serif'],
        kannada: ['var(--font-kannada)', '"Noto Sans Kannada"', 'sans-serif'],
      },
      keyframes: {
        pulseSlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.08)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      animation: {
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      }
    },
  },
  plugins: [],
}

