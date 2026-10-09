import Hero from '@/components/Hero';
import PhotoSlider from '@/components/PhotoSlider';
import OurWorks from '@/components/OurWorks';

export default function HomePage() {
  return (
    <main id="main-content">
      {/* 1. HERO (Single Fixed Local Image /images/hero.png) */}
      <Hero />

      {/* 2. 4-IMAGE AUTOMATIC SLIDER */}
      <PhotoSlider />

      {/* 3. OUR WORKS (Editorial 5-Image Asymmetric Layout) */}
      <OurWorks />
    </main>
  );
}
