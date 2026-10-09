import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Discover LK Capture Weddings — fine art wedding photography studio dedicated to preserving sacred vows, unspoken emotion, and timeless heirloom romance.',
  openGraph: {
    title: 'About | LK Capture Weddings',
    description:
      'Fine art wedding photography atelier honoring sacred vows, quiet stillness, and heirloom romance.',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
