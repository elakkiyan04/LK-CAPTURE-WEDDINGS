export type EventType =
  | 'Wedding'
  | 'Birthday'
  | 'Model Shoot'
  | 'Baptism Ceremony'
  | 'Bride-to-Be'
  | 'Others';

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Ceremonies' | 'Portraits' | 'Moments' | 'Details';
  imageUrl: string;
  width: number;
  height: number;
  location?: string;
  objectPosition?: string;
  altText?: string;
}

export interface StoryVideo {
  id: string;
  title: string;
  couple: string;
  location: string;
  duration: string;
  posterUrl: string;
  videoUrl: string;
}

export interface SliderPhoto {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  objectPosition?: string;
  altText?: string;
}

export interface BookingFormData {
  fullName: string;
  phoneNumber: string;
  eventType: EventType;
  customEventType?: string;
  eventDate?: string;
  message?: string;
}
