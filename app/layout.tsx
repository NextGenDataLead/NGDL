import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';
import { CookieConsent } from '@/components/cookie-consent';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
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
        url: 'https://iddatasolutions.nl/images/OpenGraph.jpg',
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
    images: ['https://iddatasolutions.nl/images/OpenGraph.jpg'],
    creator: '@NextGenDataLead',
    site: '@NextGenDataLead',
    creatorId: '43923174', // Replace with your actual Twitter user ID
  },
  other: {
    'linkedin:image': 'https://iddatasolutions.nl/images/OpenGraph.jpg',
    'og:image': 'https://iddatasolutions.nl/images/OpenGraph.jpg',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:type': 'image/jpeg',
    'twitter:image': 'https://iddatasolutions.nl/images/OpenGraph.jpg',
    'twitter:image:alt': 'Next-Gen Data Lead - Modern Data Solutions',
    'twitter:domain': 'iddatasolutions.nl',
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
        {/* Explicit OpenGraph meta tags */}
        <meta property="og:image" content="https://iddatasolutions.nl/images/OpenGraph.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        {/* Explicit Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@NextGenDataLead" />
        <meta name="twitter:creator" content="@NextGenDataLead" />
        <meta name="twitter:image" content="https://iddatasolutions.nl/images/OpenGraph.jpg" />
        <meta name="twitter:image:alt" content="Next-Gen Data Lead - Modern Data Solutions" />
        <meta name="twitter:domain" content="iddatasolutions.nl" />
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