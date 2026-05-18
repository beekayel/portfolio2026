# Dan Hodeanu — Portfolio (2026)

Next.js 15 · React · TypeScript · Tailwind CSS v4 · Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Push this repo to GitHub (replace the old `portfolio2026` repo content, or create a new one).
2. In Vercel → Add New → Project → import the repo.
3. Framework preset: **Next.js** (auto-detected). No env vars needed.
4. Deploy.

The site is configured **noindex / nofollow** via both `app/layout.tsx` metadata and `next.config.mjs` headers, plus a `public/robots.txt` disallow.

## Edit the content

- Hero copy: `components/Hero.tsx`
- Numbers strip: `components/MetricsStrip.tsx`
- Case studies: `CASES` array in `components/SelectedWork.tsx`
- Horologius stack: `STACK` array in `components/Horologius.tsx`
- How I work prose: `components/HowIWork.tsx`
- Toolbox lists: `GROUPS` array in `components/Toolbox.tsx`
- Contact / footer: `components/Contact.tsx`

## Design tokens

Defined in `app/globals.css` under `@theme`:

- `--color-ink` `#0c0b09` — warm near-black background
- `--color-cream` `#f3ebda` — cream body text
- `--color-bronze` `#c8946a` — single accent

Type:
- Display: **Fraunces** (variable serif)
- Body: **Instrument Sans**
- Mono / metrics: **JetBrains Mono**
