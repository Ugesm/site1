/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  // Configuration pour HTTPS
  server: {
    https: true,
    port: 3000
  },
}

module.exports = nextConfig
