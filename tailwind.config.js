// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class', // Adicionando suporte ao modo escuro
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
