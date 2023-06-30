/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Rely on moon for these tasks
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
}
