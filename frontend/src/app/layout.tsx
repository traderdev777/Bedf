import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileContactBar from '@/components/MobileContactBar';

export const metadata: Metadata = {
  title: 'BEDF | Belagavi Economic Development Foundation (ಬೆಳಗಾವಿ ಆರ್ಥಿಕ ಅಭಿವೃದ್ಧಿ ಪ್ರತಿಷ್ಠಾನ)',
  description:
    'Building Belagavi. Empowering North Karnataka. An independent regional development platform uniting industry, technology, aerospace, precision manufacturing, and education.',
  keywords: [
    'Belagavi',
    'Belgaum',
    'BEDF',
    'Economic Development',
    'Aequs SEZ',
    'VTU Belagavi',
    'Karnataka Industries',
    'Aerospace Hub',
    'Foundry Capital',
    'North Karnataka Development'
  ],
  authors: [{ name: 'Belagavi Economic Development Foundation' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'BEDF | Belagavi Economic Development Foundation',
    description: 'Building Belagavi. Empowering North Karnataka. Uniting industry, aerospace, and talent.',
    url: 'https://bedf.org',
    siteName: 'BEDF',
    locale: 'en_IN',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#071A33',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased selection:bg-gold-500 selection:text-navy-950 pb-16 lg:pb-0">
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <MobileContactBar />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
