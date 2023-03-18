const { withPlausibleProxy } = require('next-plausible')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: 'standalone',
  images: {
    domains: ['avatars.githubusercontent.com', 'images.unsplash.com', 'tailwindui.com'],
  },
  experimental: {
    appDir: true,
  },
  // Rely on moon for these tasks
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
}

module.exports = withPlausibleProxy({ customDomain: 'https://stats.ghcr.dev' })(nextConfig)
