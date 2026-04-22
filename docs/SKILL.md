---
name: Reportive Design System
description: Avonetiq's dark-first, bilingual marketing analytics design system. Import tokens + type + components from this project.
---

# Reportive Design System

Avonetiq's internal design language for "Ops" products. Dark-first (#0C182C navy), teal primary (#00C2B8), gold secondary (#F8B400), bilingual UI (English chrome / Indonesian analyst copy).

## Import

```html
<link rel="stylesheet" href="colors_and_type.css">
```

That single import gives you:
- All color tokens (navy stack L0–L4, teal, gold, pillar accents, status, gradients)
- Three font families loaded locally: Space Grotesk (display), Manrope (body, variable), DM Mono (data)
- Semantic defaults for `h1–h5`, `p`, `code`, `.metric-value`, `.eyebrow`, focus rings
- The signature `.avo-flare-container` animated gradient motif

## When building

1. **Never glass-on-glass.** Use liquid-glass surfaces (`.glass-*`) as a single accent, not as a system.
2. **Three fonts, three roles.** Space Grotesk = display/numerics, Manrope = prose, DM Mono = data/code. Never mix.
3. **Numbers.** Tabular-nums, `Rp` + Indonesian separators (`Rp 48,5 Jt`, `24.830`), deltas prefix `▲`/`▼`.
4. **Analyst notes = 3 beats.** 📊 What happened · 💡 Why it matters · 🎯 Next action. Only these three emoji, only in note panels.
5. **Iconography.** Lucide line icons, stroke 2, `currentColor`. Brand marks for data sources stay multi-color.
6. **Layering.** Five navy levels — never skip. Borders always 1 or 1.5px on `--navy-edge`.
7. **Motion.** 200ms button, 800ms card stagger, 14–18s flare loops. Honor prefers-reduced-motion.

## What's here

- `colors_and_type.css` — all tokens
- `fonts/` — brand TTFs (Manrope variable + DM Mono upright/italic)
- `assets/` — logo pack (mark, horizontal, vertical × on-dark/on-light/flat)
- `preview/` — 21 design-system cards (colors, type, spacing, components, brand)
- `ui_kits/reportive/` — 4 production surfaces (login, dashboard, campaigns, SEO) on a design canvas
- `README.md` — full content + visual foundations
