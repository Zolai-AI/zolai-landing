# Architecture Context

## Stack

| Layer | Technology | Role | Source |
|-------|-----------|------|--------|
| Language | TypeScript | Application language | project.yaml, package.json |
| UI | React | Component framework | project.yaml, package.json |
| Build | Vite | Dev server and bundler | project.yaml, package.json |
| Data fetching | TanStack Query | GitHub API data fetching | package.json, README.md |
| Animation | Framer Motion | Scroll and menu animation | package.json, README.md |
| 3D | Three.js with React Three Fiber and Drei | Hero scene | package.json, src tree |
| Styling | Tailwind CSS with shadcn/ui primitives | Styling and UI kit | package.json, README.md, git ls-tree -r HEAD -- src |
| Icons | Lucide React | Icon set | package.json, README.md |
| Hosting | Cloudflare Pages | Static hosting and route | wrangler.toml, README.md |
| Package manager | bun | Dependency and script runner | project.yaml |

## System Boundaries

- `src/App.tsx` — page composition from Navbar through Footer (source: README.md, git ls-tree -r HEAD -- src).
- `src/main.tsx` — React and QueryClientProvider entry (source: README.md).
- `src/components/` — landing sections including Navbar, Hero, Features, Repos, TechStack, CTA, Footer, Connect, Credits and HeroScene (source: git ls-tree -r HEAD -- src).
- `src/components/ui/` — shadcn/ui primitives: badge, button, card, copy-button, separator (source: git ls-tree -r HEAD -- src).
- `src/hooks/` — `useGitHubRepos.ts`, the TanStack Query hook for GitHub data (source: git ls-tree -r HEAD -- src, README.md).
- `src/lib/` — `utils.ts` with the `cn()` helper (source: git ls-tree -r HEAD -- src, README.md).
- `src/index.css` — Tailwind theme, custom tokens and animations (source: src/index.css, README.md).
- `wrangler.toml` — Cloudflare Pages route `zolai.space/*` (source: wrangler.toml).

## Storage Model

- **Application database**: N/A — source: package.json, wrangler.toml, git ls-tree -r HEAD -- src.
- **Runtime data**: GitHub repository statistics fetched client-side through TanStack Query with a five-minute stale cache (source: README.md).
- **Build output**: `dist/`, deployed to Cloudflare Pages (source: README.md, wrangler.toml).

## Auth and Access Model

- No sign-in, ownership or access-control model exists in HEAD sources (source: README.md, git ls-tree -r HEAD -- src).
- The front-end bundle is fully public; Cloudflare/env secrets live in the dashboard or via `wrangler secret`, never in `src/` (source: AGENTS.md).
- Public variables in `wrangler.toml` are visible to everyone (source: AGENTS.md).

## System Design & Infrastructure

| Concept | Service / Tech | Notes | Source |
|---------|---------------|-------|--------|
| **Compute** | Cloudflare Pages static bundle | No server runtime in the repo | README.md, wrangler.toml |
| **Database** | N/A — source: package.json | No database dependency or binding | package.json |
| **Object Storage** | N/A — source: wrangler.toml | No bucket binding | wrangler.toml |
| **CDN** | Cloudflare Pages | Custom domain route `zolai.space/*` | wrangler.toml |
| **Caching** | TanStack Query | Five-minute stale cache for GitHub stats | README.md |
| **Queue / Async** | N/A — source: package.json | No queue dependency | package.json |
| **Rate Limiting** | N/A — source: package.json | No rate-limiting code in HEAD | package.json |
| **Load Balancing** | N/A — source: wrangler.toml | Handled by the hosting platform, not configured here | wrangler.toml |
| **Microservices** | N/A — source: README.md | Static front end only | README.md |
| **Observability** | N/A — source: wrangler.toml | No observability block in HEAD | wrangler.toml |
| **Search** | N/A — source: README.md | No search feature documented | README.md |
| **Streaming / Realtime** | N/A — source: README.md | No realtime transport documented | README.md |

## Scaling & Performance Constraints

- Traffic volume: UNKNOWN — source: README.md.
- Latency target: UNKNOWN — source: README.md.
- Data growth estimate: UNKNOWN — source: README.md.
- Availability target: UNKNOWN — source: README.md.
- Budget constraint: UNKNOWN — source: README.md.

## Invariants

1. No secrets in `src/`; Cloudflare/env secrets stay in the dashboard or `wrangler secret` (source: AGENTS.md).
2. Treat public variables in `wrangler.toml` as visible to everyone (source: AGENTS.md).
3. Scope all reads to this repo rather than the workspace root (source: AGENTS.md).
4. Persist durable design choices into `context/ui-context.md` (source: AGENTS.md).
