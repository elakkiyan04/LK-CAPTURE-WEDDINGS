# LK CAPTURE WEDDINGS — Luxury Wedding Photography Website

A complete, production-quality, modern, editorial wedding photography website built with **Next.js (App Router)** and **TypeScript**.

---

## 🏛️ Brand Details
- **Brand Name**: LK CAPTURE WEDDINGS
- **Aesthetic**: Premium, Modern, Luxury, Cinematic, Editorial
- **Color Palette**: Muted Sage / Olive Green, Warm Beige / Tan, Soft Cream, Dark Charcoal

---

## 🚀 Technology Stack
- **Framework**: [Next.js](https://nextjs.org/) (App Router, Version 15)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Modern Vanilla CSS Design System with custom CSS variables & tokens
- **Typography**: Poppins (Clean, Modern & Luxury Sans-Serif across all sections)
- **Icons**: Lucide Icons
- **Image Optimization**: `next/image` with WebP/AVIF support
- **Hosting Ready**: Vercel & custom domain via GoDaddy

---

## 📁 Project Structure

```
├── public/
│   ├── images/
│   │   ├── hero.png              # User-provided fixed Hero photograph
│   │   ├── slider/               # 4-photo automatic slider images
│   │   │   ├── slide-1.jpg
│   │   │   ├── slide-2.jpg
│   │   │   ├── slide-3.jpg
│   │   │   └── slide-4.jpg
│   │   ├── portfolio/            # Editorial portfolio gallery images
│   │   │   ├── portfolio-1.jpg ... portfolio-8.jpg
│   │   └── stories/              # 3 cinematic story posters
│   │       ├── story-1.jpg
│   │       ├── story-2.jpg
│   │       └── story-3.jpg
│   └── videos/                   # 3 photographer story videos
│       ├── story-1.mp4
│       ├── story-2.mp4
│       └── story-3.mp4
├── src/
│   ├── app/
│   │   ├── globals.css           # Design tokens, color palette, responsive resets
│   │   ├── layout.tsx            # Metadata, OpenGraph, Schema.org JSON-LD
│   │   ├── page.tsx              # Main page flow
│   │   ├── robots.ts             # Search engine robots.txt
│   │   └── sitemap.ts            # Dynamic XML sitemap
│   ├── components/
│   │   ├── Navbar.tsx            # Sticky header with mobile drawer & Book Now
│   │   ├── Hero.tsx              # Single fixed image with editorial typography
│   │   ├── PhotoSlider.tsx       # 4-photo auto slider with controls & progress bar
│   │   ├── About.tsx             # Brand introduction & pillars
│   │   ├── Portfolio.tsx         # Filterable gallery & fullscreen Lightbox modal
│   │   ├── Stories.tsx           # 3 cinematic video stories
│   │   ├── Contact.tsx           # WhatsApp spotlight with direct chat action
│   │   ├── BookingModal.tsx      # Booking form with WhatsApp flow & mandatory note
│   │   ├── FloatingWhatsApp.tsx  # Sticky bottom-right WhatsApp quick action
│   │   └── Footer.tsx            # Brand footer, navigation, social & copyright
│   ├── data/
│   │   └── weddingData.ts        # All site content, images, videos & WhatsApp number
│   └── types/
│       └── index.ts              # TypeScript definitions
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🛠️ How to Run Locally

1. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or the port displayed in your terminal) in your browser.

3. **Build for production**:
   ```bash
   npm run build
   npm run start
   ```

---

## ⚙️ How to Customize

### 1. Update WhatsApp Phone Number & Studio Information
Open [`src/data/weddingData.ts`](file:///c:/Users/hp/Desktop/lk%20capture%20wedding/src/data/weddingData.ts):
```ts
export const SITE_CONFIG = {
  brandName: 'LK CAPTURE WEDDINGS',
  brandShort: 'LK CAPTURE',
  brandSub: 'WEDDINGS',
  whatsappNumber: '94772478445',     // Enter your WhatsApp number with country code (e.g. 94...)
  whatsappDisplay: '+94 77 247 8445', // How you want it formatted visually
  location: 'Visuvamadu, Mullaitivu',
  ...
};
```

### 2. Replace Hero Image
The Hero section uses the image placed at [`public/images/hero.webp`](file:///c:/Users/hp/Desktop/lk%20capture%20wedding/public/images/hero.webp).
Simply replace this file with any new photograph while keeping the filename `hero.webp`.

### 3. Replace Slider Photos
Replace files in [`public/images/slider/`](file:///c:/Users/hp/Desktop/lk%20capture%20wedding/public/images/slider/):
- `slide-1.jpg`
- `slide-2.jpg`
- `slide-3.jpg`
- `slide-4.jpg`

### 4. Replace Portfolio Photos
Replace or add images in [`public/images/portfolio/`](file:///c:/Users/hp/Desktop/lk%20capture%20wedding/public/images/portfolio/) and update the array in [`src/data/weddingData.ts`](file:///c:/Users/hp/Desktop/lk%20capture%20wedding/src/data/weddingData.ts).

### 5. Replace Story Videos
Drop your MP4 wedding highlight videos into [`public/videos/`](file:///c:/Users/hp/Desktop/lk%20capture%20wedding/public/videos/):
- `story-1.mp4`
- `story-2.mp4`
- `story-3.mp4`

---

## 📱 Booking → WhatsApp Flow
When visitors click **"BOOK NOW"** anywhere on the website:
1. The **Booking Modal** appears.
2. The user enters **Full Name**, **Phone Number**, and selects **Event Type** (*Wedding, Birthday, Model Shoot, Baptism Ceremony, Bride-to-Be, Others*).
3. The mandatory note is clearly displayed:
   > *"Package details will be discussed and finalized over the phone."*
4. Upon submission, the app formats the details into a WhatsApp message and opens WhatsApp chat directly:
   ```
   Hello LK Capture Weddings,

   I would like to make a booking.

   Full Name: [Client Name]
   Phone Number: [Phone Number]
   Event Type: [Event]

   Thank you.
   ```

---

## 🌐 Deploying to Vercel & Connecting GoDaddy Domain

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import the repository — Next.js settings will be auto-detected.
4. Click **Deploy**.
5. Once deployed, go to **Project Settings > Domains** in Vercel.
6. Enter your domain (e.g. `lkcaptureweddings.com`).
7. In your **GoDaddy DNS Management**, add:
   - **A Record**: `@` pointing to `76.76.21.21`
   - **CNAME Record**: `www` pointing to `cname.vercel-dns.com`
