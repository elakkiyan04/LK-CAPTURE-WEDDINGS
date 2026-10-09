import type { Metadata } from 'next';
import PortfolioClient from './PortfolioClient';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Explore the fine art wedding photography portfolio by LK Capture Weddings. Sacred ceremonies, emotional portraits, and heirloom moments.',
  openGraph: {
    title: 'Portfolio | LK Capture Weddings',
    description:
      'Curated wedding photography portfolio capturing sacred ceremonies, candid joy, and timeless portraits.',
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
