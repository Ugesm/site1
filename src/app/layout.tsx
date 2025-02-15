import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { siteConfig } from './config';
import Header from '@/components/Header';
import AnimationLayout from '@/components/AnimationLayout';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - ${siteConfig.description}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{
      url: siteConfig.ogImage,
      width: 1200,
      height: 630,
      alt: siteConfig.name
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@ugesmc'
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/icons/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  '@id': `${siteConfig.url}/#website`,
                  url: siteConfig.url,
                  name: siteConfig.name,
                  description: siteConfig.description,
                  publisher: {
                    '@type': 'Organization',
                    name: siteConfig.name,
                    logo: {
                      '@type': 'ImageObject',
                      url: `${siteConfig.url}/logo.png`
                    }
                  }
                },
                {
                  '@type': 'Organization',
                  '@id': `${siteConfig.url}/#organization`,
                  name: siteConfig.name,
                  url: siteConfig.url,
                  logo: {
                    '@type': 'ImageObject',
                    url: `${siteConfig.url}/logo.png`,
                    width: 112,
                    height: 112,
                    caption: siteConfig.name
                  },
                  sameAs: [
                    'https://twitter.com/ugesmc',
                    'https://www.facebook.com/ugesmc'
                  ]
                }
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-gray-50">
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <Breadcrumbs />
              <AnimationLayout>
                {children}
              </AnimationLayout>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
