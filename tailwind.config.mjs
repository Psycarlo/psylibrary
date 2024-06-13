/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        mdl: '1180px'
      },
      colors: {
        brand: {}
      },
      fontFamily: {
        brand: ['Inter Variable', 'sans-serif']
      }
    }
  },
  plugins: []
}
