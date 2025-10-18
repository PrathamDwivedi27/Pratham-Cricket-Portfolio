import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '../components/navigation';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pratham Dwivedi - Full Stack Developer | Cricket-Inspired Tech Journey',
  description: 'Just like cricket, my career is about strategy, precision, and consistency. Explore my full-stack development portfolio with MERN stack expertise.',
  keywords: 'Pratham Dwivedi, Full Stack Developer, React, Next.js, Node.js, IIIT Ranchi, Software Engineer',
  authors: [{ name: 'Pratham Dwivedi' }],
  openGraph: {
    title: 'Pratham Dwivedi - Full Stack Developer',
    description: 'Cricket-inspired tech journey featuring modern web development skills',
    url: 'https://prathamdwivedi.dev',
    siteName: 'Pratham Dwivedi Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pratham Dwivedi - Full Stack Developer',
    description: 'Cricket-inspired tech journey featuring modern web development skills',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="min-h-screen bg-background">
            <Navigation />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}