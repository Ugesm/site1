/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'ugesm.org', 'images.unsplash.com'],
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/utils/imageLoader.js',
  },
  output: 'export',
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://ugesm.org',
  },
  experimental: {
    fallbackNodePolyfills: false
  }
}

module.exports = nextConfig
