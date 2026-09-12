# zolai-landing — zolai.space

<p align="center"><img src="logo.png" alt="Zolai AI" width="120"></p>

Landing page for the [Zolai-AI](https://github.com/Zolai-AI) organization.
Deployed to **Cloudflare Workers** at `https://zolai.space`.

## Stack

- **React 19** + TypeScript
- **Vite 6** (build tool)
- **TanStack Query** (GitHub API data fetching)
- **Framer Motion** (animations)
- **Tailwind CSS v4** (styling)
- **shadcn/ui** components (Card, Button, Badge, Separator)
- **Lucide React** (icons)

## Features

- Animated hero with floating particles + gradient orbs
- 6 feature cards with scroll-triggered animations
- Live repo stats from GitHub API (TanStack Query, 5min stale cache)
- Tech stack grid with hover effects
- Animated gradient border CTA section
- Responsive mobile menu with AnimatePresence
- Dark theme with custom zolai-green color palette

## Development

```bash
bun install
bun run dev        # → http://localhost:3000
bun run build      # → dist/
bun run preview    # → preview build locally
```

## Deploy to Cloudflare

```bash
bunx wrangler pages deploy dist
# or
bun run deploy
```

### Custom Domain (zolai.space)

1. Add DNS in Cloudflare: `zolai.space` → CNAME to `<worker>.pages.dev`
2. Or configure routes in `wrangler.toml`

## Structure

```
src/
├── main.tsx              # React + QueryClientProvider entry
├── App.tsx               # Layout: Navbar → Hero → Features → Repos → Tech → CTA → Footer
├── index.css             # Tailwind v4 + custom theme + animations
├── components/
│   ├── ui/               # shadcn components (button, card, badge, separator)
│   ├── Navbar.tsx        # Fixed nav with mobile menu + scroll blur
│   ├── Hero.tsx          # Gradient text, particles, CTAs, stats
│   ├── Features.tsx      # 6 feature cards with stagger animation
│   ├── Repos.tsx         # Live GitHub repo grid (TanStack Query)
│   ├── TechStack.tsx     # 12-tech grid with hover scale
│   ├── CTA.tsx           # Animated border CTA section
│   └── Footer.tsx        # Org links + license
├── hooks/
│   └── useGitHubRepos.ts # TanStack Query hook → GitHub API
└── lib/
    └── utils.ts          # cn() utility
```
