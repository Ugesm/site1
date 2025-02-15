/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: true, // Pour Netlify
  },
  output: 'export', // Pour générer des fichiers statiques
  trailingSlash: true, // Pour une meilleure compatibilité avec Netlify
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://ugesm.org',
  },
}

module.exports = nextConfig
