/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['localhost', 'ugesm.org', 'images.unsplash.com'],
  },
  // Removed webpack config to use Next.js defaults
}

module.exports = nextConfig
