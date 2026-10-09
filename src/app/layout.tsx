import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SITE_CONFIG } from '@/data/weddingData';
import { BookingProvider } from '@/context/BookingContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const viewport: Viewport = {
  themeColor: '#51634b',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.brandName} | Luxury & Fine Art Wedding Photography`,
    template: `%s | ${SITE_CONFIG.brandName}`,
  },
  description:
    'Editorial wedding photography and cinematography capturing sacred vows, unspoken emotion, and timeless romance. Based in Tamil Nadu, available worldwide for luxury destination weddings.',
  keywords: [
    'LK CAPTURE WEDDINGS',
    'LK Capture',
    'Luxury Wedding Photography',
    'Fine Art Wedding Photographer',
    'Editorial Wedding Photography',
    'Cinematic Wedding Films',
    'Destination Wedding Photography',
    'Candid Wedding Photographer',
    'Indian Wedding Photography',
    'Tamil Nadu Wedding Photography',
  ],
  authors: [{ name: SITE_CONFIG.brandName }],
  creator: SITE_CONFIG.brandName,
  publisher: SITE_CONFIG.brandName,
  metadataBase: new URL('https://lkcaptureweddings.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${SITE_CONFIG.brandName} | Fine Art Wedding Photography`,
    description:
      'Editorial wedding photography and cinematic storytelling honoring sacred vows, unspoken emotion, and heirloom moments.',
    url: 'https://lkcaptureweddings.com',
    siteName: SITE_CONFIG.brandName,
    images: [
      {
        url: '/images/hero.png',
        width: 1672,
        height: 941,
        alt: `${SITE_CONFIG.brandName} - Luxury Wedding Photography`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.brandName} | Fine Art Wedding Photography`,
    description:
      'Editorial wedding photography and cinematic storytelling honoring sacred vows, unspoken emotion, and heirloom moments.',
    images: ['/images/hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Schema for LocalBusiness / Photographer */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: SITE_CONFIG.brandName,
              image: 'https://lkcaptureweddings.com/images/hero.png',
              telephone: SITE_CONFIG.whatsappDisplay,
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'LK',
                addressLocality: 'Visuvamadu',
                addressRegion: 'Mullaitivu',
              },
              priceRange: '$$$$',
              description: SITE_CONFIG.tagline,
              url: 'https://lkcaptureweddings.com',
            }),
          }}
        />
      </head>
      <body>
        <BookingProvider>
          <Navbar />
          {children}
          <Footer />
        </BookingProvider>
      </body>
    </html>
  );
}
