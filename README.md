# Cinematic Portfolio — Abhinav

A production-ready, cinematic dark-mode developer & creator portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  layout.tsx        # Root layout, fonts, SEO metadata
  page.tsx           # Assembles all sections
  globals.css         # Theme tokens, glass/gradient/noise utilities
components/
  Navbar.tsx          # Floating glass navbar with scroll-spy
  Hero.tsx            # Hero with gradient headline + floating shapes
  About.tsx           # Story + focus areas + animated stat counters
  Projects.tsx        # Filterable project grid with tilt cards
  Reels.tsx           # Instagram reels / content showcase
  Skills.tsx          # Categorized tech stack wall
  SocialHub.tsx       # High-contrast social links
  Contact.tsx         # Animated contact form
  Footer.tsx          # Footer with quick nav + back-to-top
  ui/                 # Reusable primitives (MagneticButton, TiltCard, etc.)
lib/
  data.ts             # All site content/data in one place
  utils.ts            # cn() classnames helper
types/
  index.ts            # Shared TypeScript interfaces
```

## Editing Content

All copy, links, projects, reels, and skills live in `lib/data.ts` — edit that
one file to update site content without touching components.

## Wiring Up the Contact Form

The form in `components/Contact.tsx` currently simulates a submission. To make
it functional, replace the `setTimeout` block in `handleSubmit` with a call to
your email provider (e.g. Resend, EmailJS) or a serverless API route.

## Deployment

Push to GitHub and import the repo on [Vercel](https://vercel.com/new) — zero
config needed.
