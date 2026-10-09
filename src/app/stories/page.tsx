import type { Metadata } from 'next';
import StoriesClient from './StoriesClient';

export const metadata: Metadata = {
  title: 'Stories',
  description:
    'Watch 3 cinematic wedding films by LK Capture Weddings. Intimate vows, golden light, and emotional storytelling in motion.',
  openGraph: {
    title: 'Stories | LK Capture Weddings',
    description:
      'Three cinematic wedding films capturing the cadence of sacred vows, natural emotion, and timeless romance.',
  },
};

export default function StoriesPage() {
  return <StoriesClient />;
}
