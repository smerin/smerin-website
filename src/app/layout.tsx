import type { Metadata } from 'next';
import { Merriweather, Mulish } from 'next/font/google';
import './globals.css';

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
  title: {
    default: 'George Smerin | Musician and web developer from Bristol, UK',
    template: '%s | George Smerin',
  },
  description:
    'Welcome to the website of George Smerin, musician and web developer from Bristol (UK). Read all about my recent adventures in music and technology.',
  metadataBase: new URL('https://smerin.com'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'George Smerin',
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
        {children}
      </body>
    </html>
  );
}
