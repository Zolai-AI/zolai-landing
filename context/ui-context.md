# UI Context

## Theme

Dark landing page with a custom zolai-green palette. `src/index.css` defines the
color tokens plus gradient text, glow, grid background, animated border and particle
effects, and disables animations under `prefers-reduced-motion`. Source: README.md,
src/index.css.

## Colors

Real CSS custom properties declared under `@theme` in HEAD `src/index.css`:

| Role | CSS Variable | Value | Source |
|------|--------------|-------|--------|
| Zolai 50 | `--color-zolai-50` | `#f0fdf4` | src/index.css |
| Zolai 100 | `--color-zolai-100` | `#dcfce7` | src/index.css |
| Zolai 200 | `--color-zolai-200` | `#bbf7d0` | src/index.css |
| Zolai 400 | `--color-zolai-400` | `#4ade80` | src/index.css |
| Zolai 500 | `--color-zolai-500` | `#22c55e` | src/index.css |
| Zolai 600 | `--color-zolai-600` | `#16a34a` | src/index.css |
| Zolai 700 | `--color-zolai-700` | `#15803d` | src/index.css |
| Zolai 900 | `--color-zolai-900` | `#14532d` | src/index.css |
| Gold 400 | `--color-gold-400` | `#facc15` | src/index.css |
| Gold 500 | `--color-gold-500` | `#eab308` | src/index.css |

## Typography

| Role | Font | Variable | Source |
|------|------|----------|--------|
| UI text | N/A — no font token declared in HEAD | N/A — source: src/index.css | src/index.css |
| Code/mono | N/A — no font token declared in HEAD | N/A — source: src/index.css | src/index.css |

## Border Radius

| Context | Class / Rule | Value | Source |
|---------|--------------|-------|--------|
| Animated border CTA | `.animated-border` | `border-radius: 1rem` | src/index.css |
| Floating particles | `.particle` | `border-radius: 50%` | src/index.css |

## Component Library

shadcn/ui primitives are committed under `src/components/ui/` (badge, button, card,
copy-button, separator); app sections live in `src/components/`. Reuse the committed
components rather than adding a new kit, as recorded in AGENTS.md. Source: git
ls-tree -r HEAD -- src, README.md, AGENTS.md.

## Layout Patterns

- Navbar → Hero → Features → Repos → Tech → CTA → Footer composition in `src/App.tsx` (source: README.md).
- Fixed nav with scroll blur and responsive mobile menu using AnimatePresence (source: README.md).
- Animated gradient border CTA section and tech grid with hover effects (source: README.md).

## Icons

Lucide React, as declared in `package.json` and documented in README.md.

## Skills (UI / UX)

Use these installed skills when designing or implementing UI. They complement
`web-design-guidelines` and `shadcn` (Agent Skills) — do not replace them.

| Skill | When to use |
| ----- | ----------- |
| `ui-ux-pro-max` | Product/page UI reasoning, stack-aware patterns, UX guidelines; optional `search.py` (Python 3) for CSV design data |
| `brand` | Logo, voice, color/type identity, brand guideline sync |
| `design-system` | Tokens, component specs, Tailwind integration; hierarchical pages via `design-system/MASTER.md` when needed |
| `ui-styling` | Tailwind/shadcn theming, responsive utilities, canvas fonts |
| `web-design-master` | Page/section/layout design, color systems, typography scale, accessibility, design QA review |

**Persist → this file:** When a skill (or `--persist` / design-system output) produces tokens,
colors, typography, or component conventions, write the durable choices into
`context/ui-context.md` (project source of truth). Keep long hierarchical design
docs in `design-system/` only when the project needs multi-page token trees.
