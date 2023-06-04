/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-saber': '#0077FF',
        'red-saber': '#FF0000',
        'green-saber': '#01EB14',
        'purple-saber': '#D000FF',
      },
    },
  },
  plugins: [],
}

