/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{inter:['Inter'],
        abhaya:['Abhaya Libre'],
        poppins:['Poppins']
      },

      screens: {
        'xxs':'320px',
        'xs':'375px',
        'sm':'425px',
        'md':'768px',
        'lg': '1024px',
        'xl' : '1280px',
        '2xl' : '1536px'
      }
    },
  },
  plugins: [],
}

