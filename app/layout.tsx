import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';
import { CookieConsent } from '@/components/cookie-consent';

export const metadata: Metadata = {
  title: 'Next-Gen Data Lead | Modern Data Solutions',
  description: 'Transform your business with cutting-edge data management, analytics, and blockchain solutions.',
  keywords: 'data services, analytics, blockchain, data management, business intelligence',
  metadataBase: new URL('https://nextgendatalead.com'),
  openGraph: {
    title: 'Next-Gen Data Lead | Modern Data Solutions',
    description: 'Transform your business with cutting-edge data management, analytics, and blockchain solutions.',
    url: 'https://nextgendatalead.com',
    siteName: 'Next-Gen Data Lead',
    images: [
      {
        url: '/images/logo_text.png',
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
    description: 'Transform your business with cutting-edge data management, analytics, and blockchain solutions.',
    images: ['/images/logo_text.png'],
    creator: '@NextGenDataLead',
  },
  other: {
    'linkedin:image': '/images/logo_text.png',
    'whatsapp:image': '/images/logo_text.png',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:type': 'image/png',
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
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
