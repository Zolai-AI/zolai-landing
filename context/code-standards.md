# Code Standards

## General

- Scope all reads to this repo rather than the workspace root (source: AGENTS.md).
- Reuse committed sections, styles and assets; no new component kit was created in the alignment pass (source: AGENTS.md).
- Persist durable UI choices into `context/ui-context.md` (source: AGENTS.md).
- Never put secrets in `src/`; public variables in `wrangler.toml` are visible to everyone (source: AGENTS.md).

## TypeScript

- `bun run build` runs `tsc -b && vite build`; `bun run typecheck` runs `tsc --noEmit` (source: package.json).
- Further TypeScript rules are UNKNOWN — source: AGENTS.md.

## React + Vite

- Keep the existing React + Vite + Three.js composition; no framework migration is implemented (source: AGENTS.md).
- Vite scripts are `dev`, `build` and `preview`; `deploy` runs `wrangler pages deploy dist` (source: package.json, README.md).
- Keep shadcn/ui as the primary component layer for added UI; no Ant Design was added (source: AGENTS.md).

## Styling

- Tailwind CSS v4 is installed through `@tailwindcss/vite`; the theme lives in `src/index.css` (source: package.json, src/index.css).
- Use the committed `--color-zolai-*` and `--color-gold-*` tokens and the reduced-motion rules in `src/index.css` (source: src/index.css).

## API Routes

- N/A — source: package.json, git ls-tree -r HEAD -- src. This is a static front-end repo with no API routes.

## Data and Storage

- GitHub repository statistics are fetched in the browser with TanStack Query; there is no database in HEAD (source: README.md, package.json).
- No secrets in tracked files; Cloudflare/env secrets stay in the dashboard or `wrangler secret` (source: AGENTS.md).

## File Organization

- `src/components/` — landing sections (source: git ls-tree -r HEAD -- src).
- `src/components/ui/` — shadcn/ui primitives (source: git ls-tree -r HEAD -- src).
- `src/hooks/` — TanStack Query hooks (source: git ls-tree -r HEAD -- src).
- `src/lib/` — shared utilities (source: git ls-tree -r HEAD -- src).
- `src/assets/` — committed static images (source: git ls-tree -r HEAD -- src).
