module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {//colorName
          300: '#996DFF',
          500: '#8257e6'
        }
      },
      borderRadius: {
        md: '4px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),//pacote de classes para forms
    require('tailwind-scrollbar'),//pacote de classes para a scrollbar
  ],
}
