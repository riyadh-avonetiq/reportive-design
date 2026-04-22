# reportive-design

**Reportive** is a multi-channel marketing analytics dashboard built by **Avonetiq**, an
Indonesian digital agency. It consolidates data from Google Ads, Meta Ads, Google Search
Console and GA4 into a single branded, presentation-ready report that agencies can share
with their clients.

The broader **AVQ Design System** (v1.1, Feb 2026) is Avonetiq's internal design language
for all its "Ops" products — an opinionated, dark-first, data-dense aesthetic built around
a navy stack, a teal primary, and a gold secondary.

## Products covered

| Product | Surface | Notes |
|---|---|---|
| **Reportive** | Dashboard app (login + 4-page report) | Marketing performance reporting; admin + guest roles |
| **AVQ Ops DS** | Internal design system spec page | Canonical token + component spec this kit derives from |

## Sources consumed

| Source | Path | Role |
|---|---|---|
| AVQ Design System spec | `Reporting Tools/../public/AVQ-DESIGN-SYSTEM.html` | Canonical color/type/spacing/component definitions (v1.1, Feb 2026) |
| Reportive app | `Reporting Tools/app/` — `index.html`, `login.html`, `assets/css/style.css` | Production dashboard; 2937-line HTML + 4800-line stylesheet |
| Logo pack | `Logo/` — Color, Dark, Flat Color, Light variants + `AVO Branding.pdf` | Official logo marks in multiple treatments |
| Brand book | `AVO Branding.pdf` (copied to `assets/`) | Source of truth for logo/color guidelines |

## File index

```
README.md                    — this file
colors_and_type.css          — all design tokens (import once, use anywhere)
SKILL.md                     — Agent-Skills-compatible entry point
assets/                      — logos (mark + horizontal/vertical lockups, 8 variants)
preview/                     — Design System tab cards (colors, type, components, brand)
ui_kits/
  reportive/                 — Reportive dashboard UI kit (JSX components + index.html)
    README.md, index.html, *.jsx
```

---

# Content Fundamentals

**Voice.** Analyst-to-client, not marketer-to-user. Reportive is a tool that agency
account managers show to their clients during review meetings — copy reads like a senior
analyst narrating a slide deck. Confident, factual, spare.

**Person.** Third-person about the data, second-person about actions. "Your CTR grew 12.4%
this period" — not "We noticed your CTR grew." Avoid "we" / "our team".

**Casing.** Title Case for navigation, card titles, and buttons. Sentence case for body
copy and descriptions. ALL CAPS (with +0.08em letter-spacing) reserved for eyebrow labels
and section indices like `01 COLOR TOKENS`.

**Numbers.** Tabular-nums always. Localized to the client's market — Reportive ships
Indonesian rupiah (`Rp 48,5 Jt`) using a comma decimal, "Jt" (juta = million) and "Rb"
(ribu = thousand) abbreviations, periods as thousand separators (`24.830`). Percentages
always include the unit (`3.78%`, never `3.78`). Deltas prefix a filled arrow: `▲ 12.4%`,
`▼ 3.1%`. pp = percentage points for rate-of-rate changes.

**Tone of analyst notes.** Three beats, every time:
1. **What happened** — factual summary, past tense
2. **Why it matters** — interpretation, present tense
3. **Next action** — imperative, forward-looking

Reportive's in-app narrative is bilingual: UI chrome is English, analyst copy can be
Indonesian (e.g. "Performa marketing bulan Maret 2025 menunjukkan tren positif"). Keep
that dual-language affordance when writing new report sections.

**Emoji.** Used sparingly as *semantic* markers — 📊 for "what happened", 💡 for "why it
matters", 🎯 for "next action". Never decorative. Never in UI chrome, buttons, or
navigation. If unsure, leave them out.

**Example copy (from production):**

> **Brand Awareness Q1** — Google Ads  
> Impressions 482.300 · Clicks 18.240 · CTR 3.78% · ROAS 4.1x ▲
>
> *Analyst note: Campaign "Brand Awareness Q1" di Google Ads mencapai ROAS 4.1x, menjadi
> campaign dengan performa terbaik bulan ini.*

---

# Visual Foundations

**Core color vibe.** Dark, cold, and slightly cinematic. The app lives on `#0C182C` navy
base 24/7 — there is no light mode. Teal (`#00C2B8`) is the single accent for action,
positive deltas, and primary CTAs. Gold (`#F8B400`) is reserved for featured callouts,
active nav highlights, and the "generative" pillar. Violet (`#7000FF`) is a pillar color
only — never a CTA.

**Signature motif: the Avonetiq Gradient Flare.** Every hero surface (login page, report
banner) overlays three blurred radial gradients — gold top-left, teal bottom-right, indigo
drifting at 30%/20%. Each animates on a 14–18s ease-in-out loop with 8-point translate
keyframes. This is *the* thing that makes an Avonetiq surface look Avonetiq. Use the
`.avo-flare-container` scaffold in `colors_and_type.css`.

**Surface layering.** Five ordered navy levels, never skip:

| Level | Token | Use |
|---|---|---|
| L0 | `--navy-base` #0C182C | Page background |
| L1 | `--navy-deep` #111D32 | Demo demo containers, table headers |
| L2 | `--navy-surface` #1C2A3F | Cards, panels |
| L3 | `--navy-elevated` #243350 | Hover, form inputs, buttons |
| L4 | `--navy-edge` #334766 | Borders — always 1px or 1.5px |

**Liquid glass.** Premium emphasis surfaces use `backdrop-filter: blur(4px)` layered on
a gradient base like `linear-gradient(145deg, rgba(12,24,44,.6), rgba(255,255,255,.01))`.
Four variants exist: `.glass-primary` (teal border), `.glass-accent` (stronger teal),
`.glass-gold`, `.glass-nav`. **Never glass-on-glass** — use glass as a single accent, not
as a system.

**Typography.** Three-font stack, strict role assignment:
- **Space Grotesk** (display, 300–700) — headlines, scores, KPI values, button labels, badges
- **Manrope** (body, 300–800) — prose, descriptions, client-facing copy
- **DM Mono** (400, 500) — data readouts, stat lines, code, metric labels

**Corner radii.** Consistent: 4px (tags) · 6px (badges, small chips) · 8px (buttons,
inputs) · 12px (cards) · 16px (featured cards) · 20px (hero/login) · 9999px (pills/status
dots). Cards hover-lift 1–4px; buttons translate -1px on hover.

**Borders.** Always 1px or 1.5px. Use `--navy-edge` on dark surfaces; `rgba(255,255,255,.08)`
for glass borders with a lighter top edge `rgba(255,255,255,.16)` to fake an inner
highlight.

**Shadows.** Multi-layer, never single. Teal-tinted for hover (`0 10px 40px -10px
rgba(0,194,184,.2)`), pure black for elevation. Combine with `inset 0 1px 0
rgba(255,255,255,.1)` for the top-edge light catch on cards.

**Animation vocabulary.**
- **Button hover** — 200ms ease, translateY(-1px)
- **Card fade-in** — 800ms ease-out + 50ms stagger per sibling
- **Score ring / progress** — 1200ms cubic-bezier(.16,1,.3,1) on stroke-dashoffset
- **Shimmer** — 1500ms linear infinite (skeleton states)
- **Gradient flares** — 14–18s ease-in-out infinite (backdrop only)
- **Pulse (status dot)** — 2s cubic-bezier(.4,0,.6,1) on opacity
- **Prefers-reduced-motion** — all durations clamped to 0.01ms

**Hover / press states.**
- **Hover:** lighten surface one step (L2→L3), optional 1px lift, teal glow shadow
- **Active/press:** return to resting transform, `filter: brightness(.96)` on primary CTAs
- **Focus:** 2px teal outline, 2px offset, visible — never suppressed

**Transparency & blur.** Used judiciously: sidebar `rgba(10,20,38,.93)` + 24px blur;
glass surfaces 4–12px blur. Navigation chrome sits on 12px blur. Never blur page content.

**Imagery.** The brand uses no photography in-product — the gradient flare is the visual
rhythm. External marketing imagery (where needed) should be cool, dim, cinematic — desaturated
or monochrome-tinted toward navy. Avoid warm-tone stock.

**Iconography.** See `ICONOGRAPHY` below.

**Layout rules.**
- Max width 1280px (`--page-max`), 1440px for wide analytics views, 960px for narrow (auth, settings)
- Sidebar fixed at 240px (`--sidebar-w`), sticky header at 56px (`--header-h`)
- 24px page padding desktop, 16px tablet, 12px mobile
- Grid system: `.grid-4 .grid-3 .grid-2` with 16px gap, responsive collapse to 3/2/1 at 1280/1024/768

**Data-viz palette (never use as flat fills).** Per-source channel badges use brand
colors of the platform: Google Ads `#4285F4`, Meta Ads `#1877F2`, GA4 green, Search
Console teal tint. Trend lines pull from sparkline `data-color`: yellow, teal, navy,
green. Chart accent gradients use the approved gradient pairs only.

---

# Iconography

**System: inline SVG, stroke-based, Lucide-compatible.** Reportive's production codebase
inlines its own small SVG icon set directly into HTML — every icon is `currentColor`,
`stroke-width: 2`, `viewBox: 0 0 24 24`, no fills. This matches Lucide / Feather line-icon
conventions exactly, so **for new designs, use Lucide icons via CDN** — the stroke
vocabulary matches seamlessly.

```html
<!-- Reportive's actual icon usage -->
<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
  <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
</svg>
```

**CDN.** Lucide Icons via `https://unpkg.com/lucide@latest`. Use stroke-width 2, size
13–18px for inline UI chrome, 20–24px for feature icons, 36–48px with a tinted background
square for empty states.

**Icon sizing.**
- **Inline UI** 13–16px (buttons, menu items, nav)
- **Feature** 18–24px (card headers, stat icons in a 36×36 tinted square)
- **Illustrative** 32–48px (empty states, drop zones)

**Tinted icon chips.** Icons in "feature" positions live in a rounded square chip tinted
by domain:

```css
/* Google Ads icon chip */
background: rgba(66,133,244,.12); color: #4285F4;
/* Meta Ads icon chip */
background: rgba(24,119,242,.12); color: #1877F2;
/* Teal/generic chip */
background: rgba(0,194,184,.12); color: var(--avo-teal);
/* Gold chip */
background: rgba(248,180,0,.10); color: var(--gold-base);
```

**Delta / trend glyphs.** Filled unicode triangles, not icon-font glyphs: `▲` for up,
`▼` for down. Colored with `--status-positive` or `--status-negative`. Matches tabular
number rendering.

**Brand marks for data sources.** Google Ads, Meta, GA4, Search Console use their official
brand SVGs inlined directly (not icons). See `Reporting Tools/app/index.html` for the
exact paths used in channel summary rows.

**Platform logos are not Lucide.** Google/Meta multi-color brand glyphs live inline in the
source HTML (`viewBox: 0 0 24 24`, filled paths in official brand hex). When adding new
channels, fetch the official brand SVG, don't recreate.

**Logo vs mark.** `logo-mark.png` = the hexagonal gold+teal mark alone. `logo-horizontal*`
= mark + AVONETIQ wordmark. In Reportive's chrome, the mark alone (30×30) appears in the
sidebar; the full horizontal lockup appears on the login screen only.

**Emoji are icons too — but only 3 of them.** 📊 💡 🎯 — strictly inside analyst note
panels, one per point, never anywhere else. No other emoji in the system.

**⚠️ Font substitution caveat.** Space Grotesk, Manrope, and DM Mono are all already on
Google Fonts — no substitutions needed. If the brand ever needs a bespoke display face,
it would come from the AVO Branding.pdf print book; flag that to the user if required.

---

## Next steps for the reader

- Open `preview/` cards in the Design System tab to see tokens rendered.
- Use `ui_kits/reportive/index.html` as the starting point for a new dashboard design.
- Import `colors_and_type.css` at the top of any HTML file to get all tokens + base type styles.
