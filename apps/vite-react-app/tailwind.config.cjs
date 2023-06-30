// tailwind config is required for editor support

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,ts,jsx,tsx}', 'index.html'],
  presets: [require('@myorg/tailwind-config/tailwind.config.js')],
}
