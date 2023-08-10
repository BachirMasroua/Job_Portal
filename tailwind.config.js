/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor:{
        'custom-green': '#00CC99',
        'custom-grey':'#F2F2F2'
      },
      textColor: {
        'custom-green': '#00CC99',
      },
      colors: {
        'custom-green': '#00CC99',
        'custom-grey':'#F2F2F2',
      },
      screens: {
        '3xl': '2500px',
      },
    },
  },
  plugins: [],
}
