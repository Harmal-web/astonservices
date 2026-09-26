# Aston Services Limited — Website

Production-ready Next.js website for Aston Services Limited (Security & Commercial Cleaning, Manchester).

## Tech stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 19**

## Getting started

```bash
cd aston-services
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Project structure

```
app/                  # App Router pages & layouts
  page.tsx            # Homepage
  security/           # Security services overview + dynamic [slug]
  cleaning/           # Cleaning services overview + dynamic [slug]
  about/
  areas/
  contact/
  robots.ts
  sitemap.ts
components/           # Reusable UI components
lib/                  # Data, utils
public/images/        # Service & hero images
```

## Form integration

The contact form (`components/ContactForm.tsx`) is client-side validated and currently simulates a successful submission. Replace the submit handler with your preferred integration:

- Formspree / Basin / Getform
- Custom API route + Resend / Nodemailer
- CRM webhook

Look for the comment: `// Integration point: replace with your form handling endpoint`

## Domain & metadata

Metadata and sitemap use the placeholder domain `https://astonservices.co.uk`. Update `metadataBase` in `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts` when the live domain is confirmed.

## Design notes

- Custom dual-pillar identity for Security (primary navy) and Commercial Cleaning (accent teal)
- Mobile-first, accessible, conversion-focused
- No invented claims (licences, awards, years of experience, etc.)
- UK English throughout
- Real contact details only as provided in the brief

## Company details used

- **Company:** Aston Services Limited  
- **Company number:** 15065209  
- **Registered office:** 317 3-9 Hyde Road, Manchester, England, M12 6BQ  
- **Phone:** 07440 127087  
- **Email:** Tajuddinnajar6@gmail.com  
- **Contact:** Mahammad Tajuddin Najaar  
