/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#4ade80',
          dark: '#1a473a',
        },
        blue: {
          DEFAULT: '#60a5fa',
        },
        earth: {
          brown: '#a16207',
        },
        charcoal: '#1f2937',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-red-500',
    'bg-yellow-500',
    'bg-green-500',
    'bg-red-50',
    'bg-yellow-50',
    'bg-green-50',
    'bg-red-900/20',
    'bg-yellow-900/20',
    'bg-green-900/20',
    'border-red-200',
    'border-yellow-200',
    'border-green-200',
    'border-red-800',
    'border-yellow-800',
    'border-green-800',
    'text-red-600',
    'text-yellow-600',
    'text-green-600',
    'text-red-400',
    'text-yellow-400',
    'text-green-400',
    'text-red-900',
    'text-yellow-900',
    'text-green-900',
    'text-red-100',
    'text-yellow-100',
    'text-green-100',
    'text-red-700',
    'text-yellow-700',
    'text-green-700',
    'text-red-300',
    'text-yellow-300',
    'text-green-300',
  ],
}
