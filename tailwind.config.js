import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        './node_modules/flowbite-react/lib/esm/**/*.js'
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                luckiestGuy: ['Luckiest Guy', 'cursive'],
                pressStart2P: ['Press Start 2P', 'cursive'],
                raleway: ['Raleway', 'sans-serif'],
                quicksand: ['Quicksand', 'sans-serif'],
            },
        },
        colors: {
            primary: '#020228',
            secondary: '#ff00e5',
            tertiary: '#b535f6',
            btnLinkBg: '#fff',
            btnLink: '#000',
            cardBg: 'linear-gradient(0deg, transparent, #3b1e63)',
            flipCardBg: '#3b1e63',
            navBg: 'rgba(0, 0, 0, 0.3)',
            text: '#fff',
            link: '#9e86ff',
            formBg: 'rgba(211, 211, 211, 0.06)',
            fieldBg: 'rgba(0, 0, 0, 0.2)',
            fieldBorder: '1px solid rgba(255, 255, 255, 0.7)',
            fieldPlaceholder: 'rgba(255, 255, 255, 0.7)',
            fieldError: 'rgb(255, 76, 76)',
          },
    },

    plugins: [
        forms,
        require('flowbite/plugin')
    ],
};
