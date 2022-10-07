const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

const colorPlugin = plugin(function() {}, {
  theme: {
    colors: {
      'primary-10': '#FAFFFB',
      'primary-1000': '#025053',
    }
  }
})

module.exports = colorPlugin