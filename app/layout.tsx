import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';
import { CookieConsent } from '@/components/cookie-consent';

const inter = Inter({
  subsets: ['latin'], // Choose required subsets
  variable: '--font-inter', // Create a CSS variable for the font
  display: 'swap', // Optimize loading behavior
});

export const metadata: Metadata = {
  title: 'Next-Gen Data Lead | Modern Data Solutions',
  description: 'Transform your business with cutting-edge data management, analytics, AI, and blockchain solutions.',
  keywords: 'data services, analytics, blockchain, data management, business intelligence',
  metadataBase: new URL('https://iddatasolutions.nl'),
  openGraph: {
    title: 'Next-Gen Data Lead | Modern Data Solutions',
    description: 'Transform your business with cutting-edge data management, analytics, AI, and blockchain solutions.',
    url: 'https://iddatasolutions.nl',
    siteName: 'Next-Gen Data Lead',
    images: [
      {
        url: '/images/OpenGraph.jpg',
        width: 1200,
        height: 630,
        alt: 'Next-Gen Data Lead - Modern Data Solutions',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next-Gen Data Lead | Modern Data Solutions',
    description: 'Transform your business with cutting-edge data management, analytics, AI, and blockchain solutions.',
    images: ['/images/OpenGraph.jpg'],
    creator: '@NextGenDataLead',
  },
  other: {
    'linkedin:image': '/images/OpenGraph.jpg',
    'whatsapp:image': '/images/OpenGraph.jpg',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:type': '/images/OpenGraph.jpg',
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icon.png',
        type: 'image/png',
        sizes: '32x32',
      },
    ],
    apple: {
      url: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
            <CookieConsent />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
