const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `app/**/*.{js,ts,jsx,tsx}`,
    `components/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['var(--jetbrains-mono-font)', ...defaultTheme.fontFamily.mono],
      },
      colors: ({ colors }) => ({
        'black': '#121314',
        'gray': colors.gray,
        'primary': colors.blue,
        'secondary': colors.indigo,
        'brand-blue': colors.blue[500],
        'brand-red': colors.red[500],
      }),
    },
    debugScreens: {
      position: ['bottom', 'left'],
      ignore: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-debug-screens'),
  ],
}
