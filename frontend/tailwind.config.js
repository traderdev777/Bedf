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
        navy: {
          50: '#EEF4FC',
          100: '#D5E4F8',
          200: '#ADC9F2',
          300: '#75A5E8',
          400: '#3D7DDC',
          500: '#1D5CB8',
          600: '#0B2D5B', // Primary Navy
          700: '#09254C',
          800: '#071A33', // Deep Navy
          900: '#041021',
          950: '#020914',
        },
        gold: {
          50: '#FDFBF2',
          100: '#FAF5DF',
          200: '#F3E5AB',
          300: '#EBD277',
          400: '#DFBD44',
          500: '#D4AF37', // Official Gold
          600: '#B89224',
          700: '#8F6E18',
          800: '#6E5317',
          900: '#543F15',
        },
        bedf: {
          lightBg: '#F6F8FB',
          darkBg: '#051124',
          darkCard: '#091B38',
          textDark: '#172033',
          textMuted: '#6B7280',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'sans-serif'],
        heading: ['Manrope', 'Inter', 'sans-serif'],
        kannada: ['"Noto Sans Kannada"', 'sans-serif'],
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
