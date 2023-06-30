// tailwind config is required for editor support

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `app/**/*.{js,ts,jsx,tsx}`,
    `components/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require('@myorg/tailwind-config/tailwind.config.js')],
}
