import type { Metadata } from 'next';
import { Merriweather, Mulish } from 'next/font/google';
import './globals.css';
import { FathomAnalytics } from './fathom';

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const mulish = Mulish({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Smerin | Musician and producer from Bristol, UK',
  description:
    'Welcome to the website of Smerin, musician and producer from Bristol (UK).',
  metadataBase: new URL('https://smerin.com'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Smerin',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${merriweather.variable} ${mulish.variable}`}>
      <body>
        <FathomAnalytics />
        {children}
        <div id="modal-root" />
      </body>
    </html>
  );
}
