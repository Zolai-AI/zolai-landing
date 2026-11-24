# AGENTS.md — Zolai Landing

Part of the `zolai-ai` community org. This repo is the marketing/landing site for Zolai
AI Community (Vite + React + Bun, Cloudflare Pages). One component in the
Zolai-AI org multi-repo system; scope all reads to this repo.

## UI work

For page/section/layout design, color systems, typography, responsive, and design QA,
use the installed `web-design-master` skill at `~/.agents/skills/web-design-master`
(also `ui-ux-pro-max`, `design-system`, `ui-styling`). Persist durable choices into
`context/ui-context.md`.

## Secret Hygiene (repo-specific)

- This front-end bundle is fully public (Cloudflare Pages). Cloudflare/env secrets live in dashboard or `wrangler secret` — never in `src/`; public vars in `wrangler.toml` are visible to everyone.
- Canonical rules: workspace-root `AGENTS.md` § Secret Hygiene. Full procedure: `../context/code-standards.md` § Secret Hygiene — Prevention. Staged-change scan gate: `secret-scan` subagent; checklist: `secret-hygiene` skill. Do not duplicate that block here.

## Workspace alignment (2026-11-24)

`zolai-landing` is the live React + Vite + Three.js landing page at zolai.space.
This repo follows the workspace-canonical 7-stage SDLC and document map.

### ALIGNMENT RECORD — zolai-landing

- Canonical SDLC: [`../docs/SDLC.md`](../docs/SDLC.md)
- Canonical source-of-truth: [`../docs/governance/source-of-truth.md`](../docs/governance/source-of-truth.md)
- Status: aligned 2026-11-24; React + Vite stack unchanged, live URL probed 2026-11-24 (HTTP 200).

### FRONTEND ALIGNMENT RECORD — zolai-landing

- Existing React + Vite + Three.js composition retained; no framework migration.
- Component layer: shadcn/ui primary where UI is added; no Ant Design added.
- Next.js → Vite and React + Vite + API decoupling remain issues only; no work done here.

### REUSE-FIRST RECORD — zolai-landing

- New components / UI kits: `none created — reused existing`.
- Reused existing sections, styles, and assets; no dependency edits.
