// tailwind config is required for editor support

const tailwindPreset = '@myorg/tailwind-config/tailwind.config.cjs'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require(tailwindPreset)],
}
