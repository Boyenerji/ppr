/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,vue}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  darkMode: 'selector',
  plugins: [
    require('flowbite/plugin')
  ]
}

