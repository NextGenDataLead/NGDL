import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';
import { CookieConsent } from '@/components/cookie-consent';

const inter = Inter({
  subsets: ['latin'], // Choose the subsets you need
  variable: '--font-inter', // Define a CSS variable for the font
  display: 'swap', // Optional: Improves loading experience
});

export const metadata: Metadata = {
  title: 'Next-Gen Data Lead | Modern Data Solutions',
  description: 'Transform your business with cutting-edge data management, analytics, and blockchain solutions.',
  keywords: 'data services, analytics, blockchain, data management, business intelligence',
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
