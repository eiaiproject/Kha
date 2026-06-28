# Kopi KHA Landing Page

[![Deploy to Cloudflare Pages](https://img.shields.io/badge/deploy-cloudflare_pages-blue?logo=cloudflare)](https://pages.cloudflare.com)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![Node](https://img.shields.io/badge/node-22.16.0-green)](.node-version)

Bold local coffee brand landing page. Typography-first, zero dependencies, deploy-ready for Cloudflare Pages.

**[Live Demo →](https://kopikha.pages.dev)**

## Preview

![KHA Landing Page](public/og-image.png)

## Features

- **Typography-first** — Logo IS the visual. No product images in hero.
- **Static export** — Zero server, edge-deployed to Cloudflare Pages.
- **Zero dependencies** — Pure CSS design tokens, no UI frameworks.
- **Accessible** — Skip link, ARIA labels, keyboard navigation, reduced motion.
- **Mobile-first** — Sticky CTA, full-screen nav overlay, responsive grid.
- **Indonesian** — Bahasa content, honest placeholders (no fake data).

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (static export) |
| UI | React 19 |
| Styling | Pure CSS (design tokens) |
| Fonts | Anton, Caveat, Space Grotesk (Google Fonts) |
| Deploy | Cloudflare Pages |

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

All business data lives in `lib/config.js`. Before launch, update:

| Field | Description |
|-------|-------------|
| `CONTACT.whatsappNumber` | Real number (`628xxxxxxxxxx`) |
| `CONTACT.instagramHandle` | Handle without `@` |
| `LOCATION.address` | Outlet address |
| `LOCATION.mapsUrl` | Google Maps link |
| `LOCATION.outletStatus` | `"active"` when open |

Product prices and testimonials are in `app/page.jsx` (`featuredProducts`, `allMenuItems`, `testimonials`).

Placeholders display honestly — no fake data.

## Deploy to Cloudflare Pages

1. Push to GitHub
2. Cloudflare Dashboard → Pages → Create project → Connect repo
3. Settings:
   - **Framework preset:** Next.js Static HTML Export
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node version:** `22.16.0`
4. Deploy

No environment variables required.

## Project Structure

```
├── app/
│   ├── layout.jsx          # Root layout, fonts, metadata
│   ├── page.jsx            # All sections (hero, menu, testimonials, etc.)
│   ├── globals.css         # Design tokens + all styles
│   ├── error.jsx           # Error boundary
│   └── not-found.jsx       # 404 page
├── lib/
│   └── config.js           # Business data (contacts, location, brand)
├── public/
│   ├── kha-blue.svg        # Logo (blue, for light bg)
│   ├── kha-white.svg       # Logo (white, for dark bg)
│   ├── *.png               # Product images + OG image
│   └── favicon.svg
├── next.config.mjs         # Static export config
├── package.json
└── .node-version           # 22.16.0
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Static export → `out/` |
| `npm run start` | Serve production build locally |

## Known Issues

- `og-image.png` is a placeholder — replace with final branded design.
- Google Fonts via `next/font/google`. If CI fails on network, switch to `next/font/local`.

## License

All rights reserved. © 2026 Kopi KHA.

## Author

Built by [Your Name](https://github.com/yourusername).
