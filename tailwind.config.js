/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,vue}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  darkMode: 'selector',
  plugins: [
    require('flowbite/plugin'),
    require('tailwindcss-primeui')
  ]
}

