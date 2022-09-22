const daisyui = require('daisyui');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['src/**/*.{html,js,tsx,ts}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['roboto', ...defaultTheme.fontFamily.sans],
      },
    },
    boxShadow: {
      'top-xl': '0 -20px 25px -5px rgba(0, 0,  0,  .1)',
    },
  },

  daisyui: {
    themes: [
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
        },
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
        },
      },
    ],
  },
  plugins: [daisyui],
};

module.exports = config;
