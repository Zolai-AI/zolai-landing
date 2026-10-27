# AGENTS.md — Zolai Landing

Part of the `zolai-ai` community org. This repo is the marketing/landing site for Zolai
AI Community (Vite + React + Bun, Cloudflare Pages). One component in a multi-repo
system (core / web / tauri / datasets / training / wiki); scope all reads to this repo.

## UI work

For page/section/layout design, color systems, typography, responsive, and design QA,
use the installed `web-design-master` skill at `~/.agents/skills/web-design-master`
(also `ui-ux-pro-max`, `design-system`, `ui-styling`). Persist durable choices into
`context/ui-context.md`.

## Secret Hygiene (repo-specific)

- This front-end bundle is fully public (Cloudflare Pages). Cloudflare/env secrets live in dashboard or `wrangler secret` — never in `src/`; public vars in `wrangler.toml` are visible to everyone.
- Canonical rules: workspace-root `AGENTS.md` § Secret Hygiene. Full procedure: `../context/code-standards.md` § Secret Hygiene — Prevention. Staged-change scan gate: `secret-scan` subagent; checklist: `secret-hygiene` skill. Do not duplicate that block here.
