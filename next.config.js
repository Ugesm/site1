/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['localhost', 'ugesm.org', 'images.unsplash.com'],
  },
  output: 'export'
}

module.exports = nextConfig
