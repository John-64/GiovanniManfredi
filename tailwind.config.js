/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'mountain-meadow': {
          '50': '#edfcf5',
          '100': '#d3f8e6',
          '200': '#aaf0d2',
          '300': '#73e2b9',
          '400': '#3acd9b',
          '500': '#17b887',
          '600': '#0a916b',
          '700': '#087458',
          '800': '#095c47',
          '900': '#094b3c',
          '950': '#042a22',
        },
        'mountain-meadow-standards': {
          '0': '#ffffff',
          '100': '#1e1e1e',
          '800': '#18181b',
          '900': '#0e0e10',
        },
      }
    },
  },
  plugins: [],
}