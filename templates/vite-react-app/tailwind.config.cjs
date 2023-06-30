// tailwind config is required for editor support

const tailwindPreset = '@myorg/tailwind-config/tailwind.config.cjs'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,ts,jsx,tsx}', 'index.html'],
  presets: [require(tailwindPreset)],
}
