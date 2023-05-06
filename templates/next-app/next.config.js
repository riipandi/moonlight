const { withPlausibleProxy } = require('next-plausible')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: ['avatars.githubusercontent.com', 'images.unsplash.com'],
  },
  compiler: { removeConsole: process.env.NODE_ENV === 'production' },
  experimental: { appDir: true },
  // Rely on moon for these tasks
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
}

module.exports = withPlausibleProxy({
  customDomain: 'https://stats.fltr.dev',
  subdirectory: undefined,
  scriptName: undefined,
})(nextConfig)
