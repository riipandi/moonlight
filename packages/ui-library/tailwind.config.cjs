const taiwindPreset = '@myorg/tailwind-config/tailwind.config.cjs'

/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix ui lib classes to avoid conflicting with the app
  prefix: 'ui-',
  presets: [require(taiwindPreset)],
  content: ['src/**/*.{js,ts,jsx,tsx}'],
}
