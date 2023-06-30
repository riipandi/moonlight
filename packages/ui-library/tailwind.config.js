/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix ui lib classes to avoid conflicting with the app
  prefix: 'ui-',
  presets: [require('@myorg/tailwind-config/tailwind.config.cjs')],
  content: ['components/**/*.{js,ts,jsx,tsx}'],
}
