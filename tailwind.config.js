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
        'white': '#ededed',
      },
      extend: {},
    },
    plugins: [flowbite.plugin(),],
  }