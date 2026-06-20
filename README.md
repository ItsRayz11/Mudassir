# Mudassar Online Earning — Portfolio

A production-grade personal portfolio for **Mudassar Ishtiaq**, Content Creator &
Web3 Educator. Warm, earthy art direction with smooth scroll, scroll-triggered
animations, and a lazy-loaded 3D hero.

## ✨ Features

- **Hero** with an interactive React Three Fiber 3D scene (reacts to the pointer).
- **About**, **What I Do** (animated marquee + service grid), **Platforms**
  (YouTube, Telegram, X, WhatsApp, Facebook), **Exchanges** (Binance, OKX, Gate,
  Bitget, Bybit with one-tap copy referral codes), animated **Timeline**,
  **Community** stats band, and a working **Contact** form (mailto).
- Sticky animated **navbar** with smooth in-page scrolling and a mobile menu.
- **Lenis** smooth scrolling paired with Framer Motion reveals.
- Fully **responsive**, **accessible** (semantic HTML, focus states, keyboard nav,
  AA contrast), and **SEO-ready** (metadata, Open Graph, dynamic favicon, sitemap,
  robots).
- Respects `prefers-reduced-motion` (smoothing + WebGL are disabled for those users).

## 🧱 Tech stack

| Concern        | Choice                                  |
| -------------- | --------------------------------------- |
| Framework      | Next.js 14 (App Router) + TypeScript    |
| Styling        | Tailwind CSS                            |
| 2D animation   | Framer Motion                           |
| 3D             | React Three Fiber + drei + three        |
| Smooth scroll  | Lenis                                   |
| Icons          | lucide-react                            |
| Fonts          | next/font (Fraunces + Inter, self-hosted) |

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## 🗂️ Project structure

```
app/            # App Router: layout, page, globals, SEO (sitemap, robots, OG, icon)
components/     # Reusable UI (Navbar, Footer, SmoothScroll, ScrollReveal, …)
  hero/         # 3D hero scene + lazy loader
sections/       # Page sections (Hero, About, Skills, Platforms, …)
lib/            # data.ts (all content) + motion.ts (animation variants)
public/         # static assets
```

## ✏️ Editing content

All copy, links, stats, services, platforms, exchanges, and timeline entries live
in **[`lib/data.ts`](lib/data.ts)** — edit that single file to update the whole site.

### Adding a real portrait photo

The About section uses a styled monogram placeholder. To use a real photo:

1. Drop your image at `public/portrait.jpg`.
2. In [`sections/About.tsx`](sections/About.tsx), replace the placeholder block
   with `next/image`:

   ```tsx
   import Image from "next/image";
   // ...
   <Image
     src="/portrait.jpg"
     alt="Mudassar Ishtiaq"
     fill
     sizes="(max-width: 768px) 100vw, 400px"
     className="rounded-xl2 object-cover"
     priority
   />
   ```

## 🌐 Deploy to Vercel

1. Push to GitHub:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Mudassar Online Earning portfolio"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **Add New… → Project** → import the repo.
   Vercel auto-detects Next.js — just click **Deploy**.

3. (Optional) **Settings → Domains** to add a custom domain. After setting a real
   domain, update `SITE.url` in `lib/data.ts` so canonical, sitemap, and Open Graph
   tags point to it.

---

Built with care in Pakistan. Trade responsibly — never invest more than you can
afford to lose.
