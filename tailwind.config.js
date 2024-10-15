const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}', 
      flowbite.content(),
    ],
    theme: {
      colors: {
        'primary': '#00abf0',
        'secondary': '#112e42',
        'tertiary': '#171427',
        'site-bg': '#081b29',
        'text-w': '#fff',
        'aux': '#00eeff1f',
        'white': '#ededed',
      },
      extend: {},
    },
    plugins: [flowbite.plugin(),],
  }