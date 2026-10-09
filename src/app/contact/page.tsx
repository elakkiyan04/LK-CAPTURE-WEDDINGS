import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact LK Capture Weddings via WhatsApp for wedding photography inquiries, date availability, and bespoke package consultations.',
  openGraph: {
    title: 'Contact | LK Capture Weddings',
    description:
      'Direct WhatsApp booking and consultation for LK Capture Weddings. Based in Tamil Nadu, available worldwide.',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
