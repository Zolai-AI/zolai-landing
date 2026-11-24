# zolai-landing — zolai.space

## Overview

Landing page for the Zolai-AI organization, deployed to Cloudflare Pages at
`https://zolai.space`. It presents the organization, its features and repositories,
and a call to action for contributors. **Status: LIVE** — the live URL was probed
2026-11-24 (HTTP 200). Source: README.md, AGENTS.md, project.yaml.

## Goals

1. Present the Zolai-AI organization and its work to visitors at `zolai.space` (source: README.md).
2. Show live repository statistics from the GitHub API with a short stale cache (source: README.md).
3. Keep a responsive, animated landing experience without a framework migration (source: README.md, AGENTS.md).

## Core User Flow

1. A visitor loads the static bundle served by Cloudflare Pages (source: README.md, wrangler.toml).
2. The page composes Navbar → Hero → Features → Repos → Tech → CTA → Footer (source: README.md).
3. The Repos section fetches GitHub repository data through TanStack Query (source: README.md).
4. The visitor uses the responsive mobile menu or the CTA links to reach org destinations (source: README.md).

## Features

### Presentation

- Animated hero with floating particles and gradient orbs (source: README.md).
- Six feature cards with scroll-triggered animations (source: README.md).
- Animated gradient border CTA section and responsive mobile menu (source: README.md).

### Live data and UI

- Live repo stats from the GitHub API via TanStack Query, five-minute stale cache (source: README.md).
- Tech stack grid with hover effects and shadcn/ui primitives (source: README.md, git ls-tree -r HEAD -- src).
- Dark theme with a custom zolai-green palette (source: README.md, src/index.css).

## Scope

### In Scope

- Public marketing/landing page at `zolai.space`, including its animated sections (source: README.md, AGENTS.md).
- GitHub statistics fetching and display in the browser (source: README.md).
- Static deployment to Cloudflare Pages with the documented custom-domain route (source: README.md, wrangler.toml).

### Out of Scope

- A backend, database, or sign-in system; none exists in HEAD (source: git ls-tree -r HEAD -- src, package.json).
- Next.js migration and React/Vite/API decoupling; these remain issues only (source: AGENTS.md).
- New component kits; the alignment pass reused existing sections and styles (source: AGENTS.md).

## Success Criteria

1. The site is served at `https://zolai.space` (source: README.md, AGENTS.md).
2. `bun run build` produces `dist/` and `bun run deploy` publishes it to Cloudflare Pages (source: README.md).
3. The Repos grid renders live GitHub statistics at runtime (source: README.md).
