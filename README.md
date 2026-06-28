# Kopi KHA Landing Page

Bold local coffee brand landing page. Next.js static export, deploy-ready for Cloudflare Pages.

## Tech

- Next.js 16 (static export)
- React 19
- Tailwind-free — pure CSS design tokens
- No additional dependencies

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Static export → `out/` |
| `npm run start` | Serve production build locally |

## Project Structure

```
├── app/
│   ├── layout.jsx          # Root layout, fonts, metadata
│   ├── page.jsx            # All sections (hero, menu, order, etc.)
│   ├── globals.css         # Design tokens + all styles
│   ├── error.jsx           # Error boundary
│   └── not-found.jsx       # 404 page
├── lib/
│   └── config.js           # Business data (contacts, location, brand)
├── public/
│   ├── kha-blue.svg        # Logo (blue, for light bg)
│   ├── kha-white.svg       # Logo (white, for dark bg)
│   ├── kha-original.png    # Product images
│   ├── kha-kha.png
│   ├── karmella.png
│   ├── mokha.png
│   ├── palmsuiker.png
│   ├── shokola.png
│   ├── og-image.png        # Social sharing image (1200×630)
│   └── favicon.svg
├── next.config.mjs
├── package.json
└── .node-version           # 22.16.0
```

## Configuration

All business data lives in `lib/config.js`. Before launch, update:

| Field | What to set |
|-------|-------------|
| `CONTACT.whatsappNumber` | Real number (`628xxxxxxxxxx`) |
| `CONTACT.instagramHandle` | Handle without `@` |
| `LOCATION.address` | Outlet address |
| `LOCATION.mapsUrl` | Google Maps link |
| `LOCATION.outletStatus` | `"active"` when open |

Product prices and testimonials are in `app/page.jsx` (`featuredProducts`, `allMenuItems`, `testimonials`).

Placeholders display honestly (e.g., "Harga segera diumumkan", "Segera Hadir") — no fake data.

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

## Notes

- Google Fonts (Anton, Caveat, Space Grotesk) via `next/font/google`. If CI fails on network, switch to `next/font/local` with licensed font files.
- `og-image.png` is a placeholder — replace with final branded design.
