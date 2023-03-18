const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['src/**/*!(*.stories|*.spec).{ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: ({ colors }) => ({
                black: '#1B1C1E',
                gray: colors.gray,
                primary: colors.blue,
                secondary: colors.indigo,
            }),
        },
    },
    plugins: [
        // Additional first-party plugins
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/typography'),
        require('tailwind-scrollbar-hide'),
    ],
}
