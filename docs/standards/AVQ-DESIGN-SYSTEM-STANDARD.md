# AVQ Design System — ADS v3 Standard

**Version:** 3.1.0
**Status:** MANDATORY — All AVQ frontend components must follow this standard
**Applies to:** `avq-shastra`, `avq-artha`, `avq-astra`
**Brand:** Avonetiq — Engineered Clarity
**Canonical visual sources:**
- Dark theme: `AVQ-DESIGN-SYSTEM.html` (ADS v3 Glassmorphism)
- Light theme: `AVQ-DESIGN-SYSTEM-LIGHT.html` (ADS v2.1 Pearl)

When this document and the HTML files conflict, the HTML files win for visual specs. This document wins for architecture decisions and interaction patterns.

---

## Quick Reference

| Decision | Dark (ADS v3) | Light (ADS v2.1) |
|----------|--------------|-----------------|
| Theme trigger | Default / `data-theme="dark"` | `data-theme="light"` on `<html>` |
| Applies to | Shastra, Artha, Astra | Astra only |
| Page background | `#0C182C` | `#F4F5F7` (broken white — never pure white) |
| Card background | `#111d32` + glass blur | `#FFFFFF` solid |
| Primary accent | `#00C2B8` | `#00897B` (deepened for WCAG AA) |
| Score 70+ | `--avo-teal` `#00C2B8` | `--status-success` `#059669` |
| Score 50-69 | `--gold-base` `#F8B400` | `--gold-base` `#D4950A` |
| Score 0-49 | `--status-error` `#E3170A` | `--status-error` `#DC2626` |
| Glass layer | Glassmorphism + scene orbs | Frosted glass, no scene orbs |
| Topbar bg | `rgba(12,19,34,.88)` + blur 24px | `rgba(255,255,255,.82)` + blur 20px saturate |
| Shimmer | `rgba(255,255,255,.04)` | `rgba(0,0,0,.03)` |
| Display font | Space Grotesk | Space Grotesk |
| Body font | Manrope | Manrope |
| Mono font | DM Mono | DM Mono |
| Icons | Lucide React, line only | Lucide React, line only |
| Loading | Shimmer only | Shimmer only |
| Forms | Live-edit 3s debounce, no save buttons | Live-edit 3s debounce, no save buttons |
| Navigation | TopNav only (Shastra: sidebar OK) | TopNav only |
| Motion | Max 500ms, respect prefers-reduced-motion | Same |
| State | TanStack Query + Zustand | TanStack Query + Zustand |

---

## 1. Color Tokens

Token names are **identical** in both themes. Only the values change under `[data-theme="light"]`. Components written against CSS variables automatically respect both themes.

### Surface Hierarchy

| Token | Dark | Light | Role |
|-------|------|-------|------|
| `--navy-base` | `#0C182C` | `#F4F5F7` | L0 Page background |
| `--navy-deep` | `#111d32` | `#FFFFFF` | L1 Card background |
| `--navy-light` | `#152238` | `#ECEEF2` | L2 Overlay / drawer |
| `--navy-surface` | `#1c2a3f` | `#E3E6EC` | L3 Inner surface |
| `--navy-elevated` | `#243350` | `#D8DCE4` | L4 Elevated element |
| `--navy-edge` | `#334766` | `#C2C8D4` | L5 Border / divider |

Dark: children are always **lighter** than parent. Light: children are always **darker** than parent. Direction is inverted — the rule is the same (never skip levels).

### Avo Teal

| Token | Dark | Light |
|-------|------|-------|
| `--avo-glow` | `#004D49` | `#E0F7F6` |
| `--avo-subdued` | `#008F87` | `#00897B` |
| `--avo-teal` | `#00C2B8` | `#00897B` |
| `--avo-hover` | `#33D1C9` | `#00A89F` |
| `--avo-edge` | `#99F2EC` | `#004D49` |

Light teal values are deepened so they pass WCAG AA contrast on white backgrounds.

### Gold

| Token | Dark | Light |
|-------|------|-------|
| `--gold-deep` | `#593600` | `#FFF3D0` |
| `--gold-ochre` | `#A66900` | `#B8860B` |
| `--gold-base` | `#F8B400` | `#D4950A` |
| `--gold-hover` | `#FFCA3A` | `#E5A600` |
| `--gold-edge` | `#FFE8A3` | `#7A5200` |

### Pillars + Status + Sky

| Token | Dark | Light |
|-------|------|-------|
| `--pillar-optimize` | `#00C2B8` | `#00897B` |
| `--pillar-manifest` | `#7000FF` | `#5B00CC` |
| `--pillar-generative` | `#F8B400` | `#D4950A` |
| `--status-error` | `#E3170A` | `#DC2626` |
| `--status-success` | `#02605C` | `#059669` |
| `--status-warning` | `#D5650F` | `#D97706` |
| `--sky-base` | `#0EA5E9` | `#0284C7` |

### Text

| Token | Dark | Light |
|-------|------|-------|
| `--text-primary` | `#FCFCFC` | `#0F172A` |
| `--text-secondary` | `#94a3b8` | `#475569` |
| `--text-muted` | `#64748b` | `#94A3B8` |
| `--text-disabled` | `#475569` | `#CBD5E1` |

### Score Color Rule — Critical Difference Between Themes

**Dark:**
```
Score 70–100 → --avo-teal     (#00C2B8)
Score 50–69  → --gold-base    (#F8B400)
Score 0–49   → --status-error (#E3170A)
```

**Light:**
```
Score 70–100 → --status-success (#059669)   ← NOT --avo-teal (fails contrast on white)
Score 50–69  → --gold-base      (#D4950A)
Score 0–49   → --status-error   (#DC2626)
```

Never use `--avo-teal` for scores in light theme. `#00C2B8` on white fails WCAG AA. Never use Tailwind `emerald` / `amber` / `red` for scores in either theme.

### Pillar Color Rule — Same in Both Themes

`--pillar-manifest` is **pillar identity only**. Never use it to mean "moderate score" or for any non-pillar context.

Comparison colors (YOU vs THEM): `--avo-teal` = YOU, `--sky-base` = THEM. Same in both themes.

### Gradient Stops (CTA buttons + charts only)

| Gradient | From → To | Use |
|----------|-----------|-----|
| Analyze | `#0891b2 → #14b8a6` | Primary analysis CTA |
| Violet | `#7c3aed → #a855f7` | Ava / Visibility |
| Indigo / Blue | `#2563eb → #3b82f6` | Prospect actions |
| Gold | `#F8B400 → #FFCA3A` | Premium, winner |
| Pearl (light only) | `#1E293B → #334155` | Dark CTA on light bg |

Never use gradient hex values as flat fills, text, or backgrounds.

---

## 2. Glass + Surface System

### Dark Theme — Glass (ADS v3)

All surfaces use `backdrop-filter:blur()` + semi-transparent navy. Scene orbs provide chromatic depth that glass refracts.

**Glass background tokens:**

| Token | Value | Use |
|-------|-------|-----|
| `--glass-bg` | `rgba(19,29,48,.58)` | Default card |
| `--glass-bg-accent` | `rgba(0,194,184,.06)` | Score heroes, positive |
| `--glass-bg-gold` | `rgba(248,180,0,.05)` | Gap alerts, Ava actions |
| `--glass-bg-manifest` | `rgba(112,0,255,.06)` | Manifest pillar context only |
| `--glass-bg-error` | `rgba(227,23,10,.06)` | Error states |
| `--glass-bg-nav` | `rgba(12,19,34,.88)` | Topbar, drawers, modals |
| `--glass-bg-elevated` | `rgba(28,42,63,.70)` | Inner elevated surfaces |

**Glass blur tokens:**

| Token | Value | Use |
|-------|-------|-----|
| `--glass-blur` | `blur(16px)` | Default card |
| `--glass-blur-heavy` | `blur(24px)` | Topbar, modal, drawer |
| `--glass-blur-light` | `blur(8px)` | Subtle surfaces |

Max blur: `blur(24px)`. Never exceed.

**Glass border tokens:**

| Token | Value | Use |
|-------|-------|-----|
| `--glass-border` | `rgba(255,255,255,.06)` | Default border |
| `--glass-border-teal` | `rgba(0,194,184,.22)` | Teal accent |
| `--glass-border-gold` | `rgba(248,180,0,.22)` | Gold accent |
| `--glass-border-manifest` | `rgba(112,0,255,.22)` | Manifest accent |

**Glass shadow tokens:**

| Token | Value | Use |
|-------|-------|-----|
| `--glass-shadow` | `0 8px 32px rgba(0,0,0,.38), 0 2px 8px rgba(0,0,0,.2)` | Default card |
| `--glass-shadow-elevated` | `0 16px 48px rgba(0,0,0,.48), 0 4px 16px rgba(0,0,0,.28)` | Modal, drawer |
| `--glass-shadow-teal` | `0 8px 32px rgba(0,0,0,.35), 0 0 24px rgba(0,194,184,.08)` | Teal hero |

**Glass surface classes (dark):**

| Class | Background | Blur | Border | Use |
|-------|-----------|------|--------|-----|
| `.glass` | `--glass-bg` | 16px | `--glass-border` | Default card |
| `.glass-teal` | `--glass-bg-accent` | 16px | `--glass-border-teal` | Score heroes |
| `.glass-gold` | `--glass-bg-gold` | 16px | `--glass-border-gold` | Gap alerts |
| `.glass-manifest` | `--glass-bg-manifest` | 16px | `--glass-border-manifest` | Manifest pillar only |
| `.glass-nav` | `--glass-bg-nav` | 24px | `--glass-border` | Topbar, drawers, modals |
| `.glass-elevated` | `--glass-bg-elevated` | 16px | `rgba(255,255,255,.08)` | Inner elevated |
| `.glass-gb` | `--glass-bg` | 16px | Gradient mask via `::before` | Score hero gradient-border |

Pillar variants on `.glass-gb`: `.po` (optimize teal), `.pm` (manifest violet), `.pg` (generative gold).

**Scene Background (dark only — required):**

```html
<div class="scene-bg">
  <div class="scene-orb scene-orb-1"></div>  <!-- teal, top-left, 600px blur(80px) -->
  <div class="scene-orb scene-orb-2"></div>  <!-- violet, top-right, 500px -->
  <div class="scene-orb scene-orb-3"></div>  <!-- gold, bottom-center, 400px -->
</div>
```

Orbs drift with `orbDrift` 18s ease-in-out alternate. Without them, glass looks flat and opaque.

### Light Theme — Frosted Glass (ADS v2.1)

No scene orbs needed. White background provides natural depth.

**Light glass surface classes:**

| Class | Background | Blur | Border | Use |
|-------|-----------|------|--------|-----|
| `.glass-primary` | `rgba(255,255,255,.65)` | 12px | `rgba(0,137,123,.15)` | Default card, score heroes |
| `.glass-accent` | `rgba(0,137,123,.04)` | 16px | `rgba(0,137,123,.15)` | Teal accent surfaces |
| `.glass-gold` | `rgba(212,149,10,.04)` | 10px | `rgba(212,149,10,.15)` | Gap alerts, premium |
| `.glass-nav` | `rgba(255,255,255,.82)` | 20px + saturate(1.4) | `rgba(194,200,212,.5)` | Topbar only |

**Light theme solid cards** (used more than glass in light mode):
```css
.card {
  background: var(--navy-deep);                  /* #FFFFFF */
  border: 1px solid rgba(194,200,212,.5);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0,0,0,.04);         /* max shadow in light theme */
}
```

Gradient-border variant `.card-gb` with pillar modifiers `.po`, `.pm`, `.pg` — same pattern as dark, light token values.

### Class Name Differences (important)

Components must NOT assume glass class names are the same between themes:

| Dark class | Light equivalent | Notes |
|------------|-----------------|-------|
| `.glass` | `.glass-primary` | Different name |
| `.glass-teal` | `.glass-accent` | Different name |
| `.glass-gold` | `.glass-gold` | Same name |
| `.glass-manifest` | No equivalent | No manifest glass in light |
| `.glass-nav` | `.glass-nav` | Same name, different value |

Write components against CSS variables, not class names, so the token swap handles both themes. Do not branch on theme in component JSX.

---

## 3. Typography

Identical across both themes. Three fonts only. No others.

| Font | Weight | Role |
|------|--------|------|
| **Space Grotesk** | 400–700 | Headlines, scores, UI labels, buttons, badge text |
| **Manrope** | 400–800 | Body text, paragraphs, descriptions, client copy |
| **DM Mono** | 400–500 | Data values, scores, weights, stats, code, timestamps |

```css
--font-display: 'Space Grotesk', system-ui, sans-serif;
--font-body:    'Manrope', system-ui, sans-serif;
--font-mono:    'DM Mono', monospace;
```

### Type Scale

| Context | Font | Size | Weight |
|---------|------|------|--------|
| Page title | Space Grotesk | 24px | 700 |
| Hero ring score | Space Grotesk | 52px | 700 |
| Card metric value | Space Grotesk | 28px | 700 |
| Card heading | Space Grotesk | 16px | 600 |
| Button label | Space Grotesk | 14px | 600 |
| Badge text | Space Grotesk | 11px | 600 |
| Nav link | Space Grotesk | 13px | 500 |
| Body text | Manrope | 14px | 400 |
| Description | Manrope | 13px | 400 |
| Score (table cell) | DM Mono | 13px | 400 |
| Weight / config | DM Mono | 11px | 400 |
| Table header | DM Mono | 10px uppercase | 500 |
| Timestamp / axis | DM Mono | 10px | 400 |

Minimum font size: **9px**. Never smaller.

---

## 4. Surface Layering

```
Dark                          Light
L0  #0C182C  navy-base        #F4F5F7  (broken white)
L1  #111d32  navy-deep        #FFFFFF  (pure white cards)
L2  #152238  navy-light       #ECEEF2
L3  #1c2a3f  navy-surface     #E3E6EC
L4  #243350  navy-elevated    #D8DCE4
L5  #334766  navy-edge        #C2C8D4
```

Dark: each child is **lighter**. Light: each child is **darker**. Never skip levels in either theme.

---

## 5. Score Ring — The Trademark

Identical construction in both themes. Stroke colors use the theme's pillar tokens.

### Ring Sizes

| Size | SVG | `r` | `stroke-width` | Use |
|------|-----|-----|----------------|-----|
| Hero | 280px | 126 | 22 | Main domain view |
| Inspector | 120px | 50 | 10 | Two-pillar header |
| Card | 96px | 39 | 12 | Domain list |
| Table | 48px | 18 | 7 | Compact row |

### Construction Rules (both themes)

1. **Rotate SVG −90deg** — 12 o'clock start
2. **Three segments** — Optimize, Manifest, Generative
3. **Proportional fill** — `(pillar_score / Σscores) × (C − gap_total)`. Ring fills completely, no empty track.
4. **3px gap** between segments
5. **`stroke-linecap:butt`** — never round
6. **Gradient fills** per segment
7. **`filter:drop-shadow`** glow per segment color
8. **Center text** — `position:absolute; inset:0` div inside `position:relative` wrapper sized to SVG

### Ring Math

```
Circumference C = 2π × r

Hero (r=126):   C = 791.7px
Card (r=39):    C = 245.0px
Table (r=18):   C = 113.1px

Segment dasharray  = (score_i / Σscores) × (C − 3 × n_gaps)
Segment dashoffset = −(Σ previous segments + gaps)
```

Single-score rings (card/table): `dasharray = C`, `dashoffset = C × (1 − score/100)`.

### Theme-Specific Ring Values

| | Dark | Light |
|-|------|-------|
| Optimize stroke | `--pillar-optimize` `#00C2B8` | `#00897B` |
| Manifest stroke | `--pillar-manifest` `#7000FF` | `#5B00CC` |
| Generative stroke | `--pillar-generative` `#F8B400` | `#D4950A` |
| Track fill | `rgba(51,71,102,.2)` | `rgba(51,71,102,.2)` |
| Optimize glow | `rgba(0,194,184,.5)` | `rgba(0,137,123,.4)` |
| Manifest glow | `rgba(112,0,255,.4)` | `rgba(91,0,204,.35)` |
| Generative glow | `rgba(248,180,0,.5)` | `rgba(212,149,10,.4)` |
| Center score color | `--avo-teal` (70+) | `--status-success` (70+) |

### Center Text Elements

```
auth-ring-label   — "AUTHORITY SCORE" in DM Mono 10px uppercase
auth-ring-score   — "84.7" in Space Grotesk 52px 700, score-band color
auth-ring-sep     — thin horizontal rule
auth-ring-ci      — "72.1 — 89.3" confidence interval in DM Mono
auth-ring-conf    — "HIGH +/−4.2" frosted badge
auth-ring-stats   — "n:12 · σ:4.2" in DM Mono small
```

### Pillar Bars (below ring)

Three horizontal bars. Each: pillar dot + name + right-aligned score (Display 700) + 10px gradient bar. Formula footer: `AS = O^0.33 × M^0.33 × G^0.34` in DM Mono 9px.

---

## 6. Buttons

### Dark Theme Button System (T1 / T2 / T3)

**T1 — Gradient Fill:**

| Class | Gradient | Use |
|-------|----------|-----|
| `btn-primary` | Teal solid + glow | Primary CTAs |
| `btn-analyze` | `#0891b2 → #14b8a6` | Main analysis trigger |
| `btn-violet` | `#7c3aed → #a855f7` | Ava / VS features |
| `btn-indigo` | `#4f46e5 → #9333ea` | Prospect actions |
| `btn-gold` | Gold solid + glow | Insights, export |
| `btn-grad-gold` | `#F8B400 → #FFCA3A` | Premium / winner |
| `btn-danger` | Red solid | Destructive only |

**T2 — Gradient Outline:** `btn-outline`, `btn-outline-teal`, `btn-outline-gold`, etc.

**T3 — Utility:**

| Class | Style |
|-------|-------|
| `btn-secondary` | Frosted glass dark bg |
| `btn-ghost` | Transparent + border |
| `btn-muted` | Frosted subdued |
| `btn-icon` | Transparent, icon only |
| `btn-tab` | Card tab; `.active-teal` or `.active-violet` modifier |

### Light Theme — Expanded Button System

Light introduces `btn-blue` (replaces `btn-indigo`) and `btn-pearl` (dark navy gradient for light bg):

**T1 additions in light:**

| Class | Gradient | Use |
|-------|----------|-----|
| `btn-blue` | `#2563eb → #3b82f6` | Prospect actions |
| `btn-pearl` | `#1E293B → #334155` | Primary CTA on light bg |

**T2 additions in light:** `btn-outline-analyze`, `btn-outline-violet`, `btn-outline-blue`, `btn-outline-gold`, `btn-outline-pearl`.

**T3 in light:** `btn-secondary` uses `var(--navy-elevated)` bg with `var(--navy-edge)` border (pearl surface colors).

### Sizes (both themes)

| Modifier | Padding | Font |
|----------|---------|------|
| `btn-xs` | 4px 10px | 11px uppercase |
| `btn-sm` | 6px 12px | 12px |
| (default) | 10px 20px | 14px |
| `btn-lg` | 14px 28px | 15px |

**States:** `btn-loading` (spinner overlay), `:disabled` (45% opacity), hover (`translateY(-1px)` + glow), active (`translateY(0)`).

---

## 7. Badges + Classification

### Badge Variants (both themes)

| Class | Color | Use |
|-------|-------|-----|
| `bd-t` | Teal | Optimize, high confidence |
| `bd-g` | Gold | Generative, medium |
| `bd-v` | Violet | Manifest |
| `bd-e` | Error red | Failed, critical |
| `bd-sky` | Sky blue | Info, competitor |
| `bd-n` | Neutral | Inactive, pending |
| `+bd-pill` | — | Pill shape modifier |

Dark badges: `backdrop-filter:blur(4px)`. Light badges: solid tint backgrounds.

### Classification Bands

| Class | Range | Label |
|-------|-------|-------|
| `cl-i` | 70–100 | Ideal |
| `cl-s` | 60–69 | Strong |
| `cl-m` | 50–59 | Moderate |
| `cl-w` | 0–49 | Weak |

Special: `.winner` (gold gradient pill), `.lite` (small gold chip).

---

## 8. Inputs + Forms

### Input Classes

| Class | Dark bg | Light bg |
|-------|---------|---------|
| `.inp` | `rgba(12,24,44,.6)` + blur(8px) | `var(--navy-deep)` (#FFF) solid |
| `.inp-hero` | Darker frosted | White solid, 2px border |
| `.form-input` | Same as inp | Same as inp |

Focus ring dark: `box-shadow: 0 0 0 3px rgba(0,194,184,.1)`.
Focus ring light: `box-shadow: 0 0 0 3px rgba(0,137,123,.08)` (deepened teal alpha).

Date input: `color-scheme: dark` (dark) / `color-scheme: light` (light) — **critical for native picker UI**.

### Selection Controls (both themes)

| Control | Class | Rule |
|---------|-------|------|
| Boolean toggle | `.tog` + `.tog.on` | Always toggle. Never checkbox. |
| Multi-select | `.checkbox-wrap` | Genuine multi-select only |
| Single-select | `.radio-wrap` | Exclusive options only |
| Numeric range | `.sl-tr` + `.sl-fi` + `.sl-th` | Always slider. Never plus/minus. |
| Date | `.date-input` | Match `color-scheme` to theme |
| Tag input | `.tag-input-wrap` + `.tag` | Domain tags, filters |

### Debounce Save States (both themes)

```
Idle    → no indicator
Saving  → spinner + "Saving…"
Saved   → teal check + "Saved" (fades 2s)
Error   → red X + toast → returns to idle
```

3 second debounce after last keystroke. **No save buttons on settings.**

### Hero Search (both themes)

300ms debounce. Spinner while loading. Results: favicon (Google S2 API `sz=48`) + company name + readiness badge + AS score chip. Bottom: "Add [query] as new domain."

---

## 9. Data Display

### Data Table

| Element | Dark | Light |
|---------|------|-------|
| Container | `.glass` padding:0 overflow:hidden | `.card` padding:0 or solid border |
| Header | `rgba(8,14,26,.5)` + blur(4px) | `var(--navy-light)` `#ECEEF2` |
| Row hover | `rgba(255,255,255,.02)` | `var(--navy-surface)` `#E3E6EC` |
| Border | `rgba(51,71,102,.3)` | `rgba(51,71,102,.3)` |

Score columns: center, Display 700, score-band color (theme-appropriate).
Numeric columns: right, Mono, `tabular-nums`.

### Sparkline SVG (both themes)

```
80×28px SVG
Area fill: linear gradient score-color 30% → 0%
Line: 1.5px stroke-linecap:round
End dot: r=2.5
Trend delta: ▲ / ▼ in DM Mono 9px 600
Color: based on trend direction (up=teal, down=error)
```

### Vector Accordion (DP Drilldown)

Container: dark → `.glass` padding:0; light → `.card` padding:0. Structure identical:
1. Vector row: 32px pillar icon + name + pillar label + score
2. DP rows (52px indent): 6px dot + name + detail + weight (mono) + score (Display 700) + 4px score bar

### Stat Cards / KPI

```html
<div class="stat-card">
  <div class="stat-icon">...</div>      <!-- 36px rounded icon -->
  <div class="stat-label">...</div>     <!-- DM Mono 10px uppercase -->
  <div class="stat-value">...</div>     <!-- Space Grotesk 28px 700 -->
  <div class="stat-sub">...</div>       <!-- Manrope 12px secondary -->
  <div class="stat-trend up/down/flat"> <!-- DM Mono 11px 600 ▲▼ -->
</div>
```

Dark: glass backing. Light: `var(--navy-deep)` white card. Always in `.grid-4`.

---

## 10. Charts (Recharts)

| Property | Value |
|----------|-------|
| Container | `ResponsiveContainer` 100% width |
| Grid | `--navy-edge` dashed 50% opacity |
| Axis text | `--text-muted`, 10px, DM Mono |
| Tooltip dark | `rgba(28,42,63,.92)` + blur(12px) |
| Tooltip light | `var(--navy-deep)` + border `--navy-edge` |
| Animation | 800ms ease-out |
| Bar radius | `[0, 4, 4, 0]` |
| Area fill | Score color 25% → 2% opacity gradient |
| Radar stroke | `#22d3ee` cyan, 2.5px, drop-shadow glow |

---

## 11. Navigation + Layout

### Topbar

| Property | Dark | Light |
|----------|------|-------|
| Background | `rgba(12,19,34,.88)` | `rgba(255,255,255,.82)` |
| Blur | `blur(24px)` | `blur(20px) saturate(1.4)` |
| Border | `--glass-border` | `rgba(194,200,212,.5)` |
| Active nav link | Teal tint + border | `var(--navy-elevated)` bg + weight 600 |
| Logo bg | Teal gradient | `var(--avo-teal)` solid |
| Logo text | `--navy-base` | `--navy-base` |

Height: ~54px. Max-width inner: 1280px.

### Page Shell Structure (both themes)

```html
<div class="page-shell">          <!-- min-height:100vh, flex column -->
  <nav class="topbar">...</nav>
  <main class="page-content">    <!-- max-width 1280px, auto margins, 24px padding -->
    <div class="page-header">
      <h1 class="page-title">...</h1>
      <div class="page-actions">...</div>
    </div>
    <!-- content grids -->
  </main>
  <footer class="app-footer">...</footer>
</div>
```

Three widths: default (1280px), `.wide` (1440px), `.narrow` (960px).

### Responsive Breakpoints

| Breakpoint | Width | Grid |
|------------|-------|------|
| Desktop | >1280px | grid-4 = 4 col |
| Laptop | <1280px | grid-4 = 3 col |
| Tablet | <1024px | grid-3/4 = 2 col |
| Mobile | <768px | All = 1 col |
| Small | <480px | 1 col, tight padding |

### Layout Grid Classes

| Class | Columns | Collapses |
|-------|---------|-----------|
| `.grid-2` | 2 equal | 1 at 768px |
| `.grid-3` | 3 equal | 2 at 1024px, 1 at 768px |
| `.grid-4` | 4 equal | 3 at 1280px, 2 at 1024px, 1 at 768px |
| `.grid-auto` | auto-fill 280px min | — |
| `.two-pillar` | `1fr auto 1fr` | 1 at 768px |

### Two-Pillar Inspector Header

`1fr auto 1fr`: AS card (`.glass-gb.po`) → Gap center → VS card (`.glass-gb.pm`).

Gap label colors: `|gap| ≤ 5` = teal (Aligned), `gap > 5` = gold (Wasted), `gap < −5` = error (Fragile).

### Page + Card Tabs

**Page tabs** (`.page-tabs` + `.page-tab`): underline, 2px teal active bar. Top-level sections.
**Card tabs** (`.btn-tab.active-teal/.active-violet`): gradient pill inside frosted container. Within-card views. Never mix.

---

## 12. Feedback Components

### Shimmer

Dark: `rgba(255,255,255,.04)` sweep. Light: `rgba(0,0,0,.03)` sweep. Same 1.5s infinite animation. Shimmer only — never skeleton loaders.

Card loading: shimmer → content fade-in. No layout shift.

### Alerts (both themes)

4 variants: `alert-info` (sky), `alert-warning` (gold), `alert-error` (red), `alert-success` (teal).
Dark: `backdrop-filter:blur(8px)`. Light: solid tint backgrounds.
Compact: `.alert-compact`.

### Toasts (both themes)

4 variants. Dark: `rgba(22,34,56,.88)` + blur(20px). Light: `var(--navy-surface)` solid. `toast-progress` bar 2px bottom. Auto-dismiss 5s. Stack top-right. Max 4.

### Empty State

```html
<div class="empty-state">
  <div class="empty-icon">...</div>   <!-- 64px, icon inside -->
  <div class="empty-title">...</div>  <!-- 16px 600 -->
  <div class="empty-desc">...</div>   <!-- 13px secondary, max 360px -->
  <button>CTA</button>
  <div class="empty-hint">...</div>   <!-- 11px muted, optional -->
</div>
```

---

## 13. Overlay Components

### Modal (both themes)

Destructive confirmation ONLY. Never for forms.
- Dark backdrop: `rgba(6,10,20,.65)` + blur(8px); Panel: `rgba(17,25,42,.92)` + blur(24px)
- Light backdrop: `rgba(0,0,0,.3)` + blur(4px); Panel: `var(--navy-deep)` solid
- Animation: scale from 0.96 + translateY(8px)

### Drawer (both themes)

All forms with 3+ fields. Right-slide.
- `.sm` 380px, `.md` 50vw (min 480px), `.lg` 92vw
- Dark: `rgba(14,22,38,.90)` + blur(24px), left border `--glass-border`
- Light: `var(--navy-light)` solid, left border `--navy-edge`
- Left-edge resize handle: 4px, hover → teal

### Select / Dropdown

Dark: trigger `rgba(28,42,63,.7)`; panel `rgba(14,22,38,.94)` + blur(20px).
Light: trigger `var(--navy-deep)` solid; panel `var(--navy-deep)` solid + shadow.
Both: max-height 220px, group labels, dividers, active check marks.

### Tooltips

Simple (text) and rich (title + body, 240px). Fade + translateY(-2px). Arrow `::after`. `z-index:50`.

---

## 14. Progress + Timelines

### Progress Bar Variants

| Variant | Class | Use |
|---------|-------|-----|
| Standard | `.pb` + `.pf` | Pillar scores, DP bars |
| Segmented | `.progress-segmented` | Pipeline steps |
| Stacked | `.progress-stacked` | Multi-pillar bar |
| Indeterminate | `.progress-indet` | Loading |
| Circular | `.progress-circle` | 64px ring with value |

Dark: glass-backed track `rgba(51,71,102,.4)` + glow on fill. Light: `var(--navy-elevated)` track.

### Timelines

**Step progress (horizontal):** `.step-node-complete` (teal solid), `.step-node-active` (frosted + teal + pulse), `.step-node-pending` (edge), `.step-node-error` (error border).

**Vertical timeline:** `.tl-dot-done` (teal check), `.tl-dot-run` (spinning), `.tl-dot-wait` (edge), `.tl-dot-err` (error).

**Version timeline:** `.vt-item.active` (full opacity, teal dot), `.vt-item` (60% opacity, edge dot).

---

## 15. Miscellaneous Components

**Avatars:** 4 sizes (xs 24px, sm 32px, md 40px, lg 56px). 4 variants: `avatar-default`, `avatar-teal`, `avatar-gold`, `avatar-violet`. Group: `-8px` overlap.

**Code block:** Dark `rgba(8,14,26,.7)` + blur(8px). Light `var(--navy-light)` solid. DM Mono 12px. Optional header with copy button. Inline: `.code-inline` teal.

**Breadcrumb:** 12px, muted separators, max 4 levels, `.active` = text-secondary.

**Pagination:** Mono font. Active: teal tint + border. Page size selector right-aligned. Only when >20 items.

**Collapse / Accordion:** `.collapse-trigger` + chevron rotates on `.open`.

**Copy button:** `.copy-btn` → `.copy-btn.copied` (teal tint, auto-resets).

**Inline confirm:** Red tint + border. Actions inline right. No modal.

**Snackbar:** Fixed bottom-center. Dark `rgba(22,34,56,.92)` + blur. Light `var(--navy-surface)` solid. Slide up animation.

**Scroll to Top:** Fixed bottom-right. Visible after 300px scroll. Hover → teal border.

---

## 16. Ava Components

### Expression System (15 moods)

Normal, Pleased, Skeptic, Unimpressed, Bored, Sad, Shocked, Error, Idle, Suspicious, Excited, Smug, Confused, Victory, Defeat.

Each: unique eye shape (SVG ellipse rx/ry), body SMIL animation, color variant class, flash symbol that crossfades to eyes.

Color variants: default teal, `.ava-err` red, `.ava-gold` gold, `.ava-violet` manifest, `.ava-sky` sky, `.ava-dim` faded.

Mood badge classes: `.mood-normal`, `.mood-pleased`, `.mood-skeptic`, `.mood-unimp`, `.mood-bored`, `.mood-sad`, `.mood-shocked`, `.mood-error`, `.mood-idle`, `.mood-suspicious`, `.mood-excited`, `.mood-smug`, `.mood-confused`, `.mood-victory`, `.mood-defeat`.

### Ava Card Rendering Rules (both themes)

- Render in `priority` order (1 = highest)
- Show `narrative` verbatim — never truncate, rewrite, or paraphrase
- Show `projected_impact` as `+{delta}` formatting
- `confidence < 0.5` → show low-confidence indicator
- No output → show empty state. Never generate placeholder cards.
- Messages from `ava_message_catalog` via API — never in frontend

---

## 17. Animation Tokens (both themes)

| Element | Duration | Easing | Notes |
|---------|----------|--------|-------|
| Button hover | 200ms | `cubic-bezier(.16,1,.3,1)` | translateY(-1px) + glow |
| Card fade-in | 500ms | ease-out | + stagger |
| Score ring | 900ms | `cubic-bezier(.16,1,.3,1)` | stroke-dashoffset |
| Shimmer | 1500ms | linear | Infinite |
| Progress bar | 600ms | ease-out | Width |
| Toggle | 200ms | `cubic-bezier(.16,1,.3,1)` | Thumb translate |
| Drawer slide | 350ms | `cubic-bezier(.16,1,.3,1)` | translateX |
| Modal scale | 300ms | `cubic-bezier(.16,1,.3,1)` | scale + translateY |
| Toast in | 350ms | `cubic-bezier(.16,1,.3,1)` | translateX from right |
| Orb drift | 18s | ease-in-out alternate | Dark theme scene orbs only |

### Stagger Utilities

| Class | Delay |
|-------|-------|
| `.w1` | 50ms |
| `.w2` | 120ms |
| `.w3` | 200ms |
| `.w4` | 280ms |
| `.w5` | 360ms |

### Reduced Motion (global, both themes)

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
  }
}
```

No per-component opt-out. Global override only.

---

## 18. Tailwind v4 — Full Token Block

```css
/* globals.css */

/* ─── Dark (default) ───────────────────────────── */
@theme {
  --color-navy-base: #0C182C;
  --color-navy-deep: #111d32;
  --color-navy-light: #152238;
  --color-navy-surface: #1c2a3f;
  --color-navy-elevated: #243350;
  --color-navy-edge: #334766;

  --color-avo-glow: #004D49;
  --color-avo-subdued: #008F87;
  --color-avo-teal: #00C2B8;
  --color-avo-hover: #33D1C9;
  --color-avo-edge: #99F2EC;

  --color-gold-deep: #593600;
  --color-gold-ochre: #A66900;
  --color-gold-base: #F8B400;
  --color-gold-hover: #FFCA3A;
  --color-gold-edge: #FFE8A3;

  --color-pillar-optimize: #00C2B8;
  --color-pillar-manifest: #7000FF;
  --color-pillar-generative: #F8B400;

  --color-status-error: #E3170A;
  --color-status-success: #02605C;
  --color-status-warning: #D5650F;
  --color-sky-base: #0EA5E9;

  --color-text-primary: #FCFCFC;
  --color-text-secondary: #94a3b8;
  --color-text-muted: #64748b;
  --color-text-disabled: #475569;

  --font-family-display: 'Space Grotesk', system-ui, sans-serif;
  --font-family-body: 'Manrope', system-ui, sans-serif;
  --font-family-mono: 'DM Mono', monospace;

  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-pill: 9999px;

  /* Glass tokens (dark only) */
  --color-glass-bg: rgba(19,29,48,.58);
  --color-glass-bg-accent: rgba(0,194,184,.06);
  --color-glass-bg-gold: rgba(248,180,0,.05);
  --color-glass-bg-nav: rgba(12,19,34,.88);
  --color-glass-border: rgba(255,255,255,.06);
  --color-glass-border-teal: rgba(0,194,184,.22);
  --color-glass-border-gold: rgba(248,180,0,.22);
}

/* ─── Light override ────────────────────────────── */
[data-theme="light"] {
  --color-navy-base: #F4F5F7;
  --color-navy-deep: #FFFFFF;
  --color-navy-light: #ECEEF2;
  --color-navy-surface: #E3E6EC;
  --color-navy-elevated: #D8DCE4;
  --color-navy-edge: #C2C8D4;

  --color-avo-glow: #E0F7F6;
  --color-avo-subdued: #00897B;
  --color-avo-teal: #00897B;
  --color-avo-hover: #00A89F;
  --color-avo-edge: #004D49;

  --color-gold-deep: #FFF3D0;
  --color-gold-ochre: #B8860B;
  --color-gold-base: #D4950A;
  --color-gold-hover: #E5A600;
  --color-gold-edge: #7A5200;

  --color-pillar-optimize: #00897B;
  --color-pillar-manifest: #5B00CC;
  --color-pillar-generative: #D4950A;

  --color-status-error: #DC2626;
  --color-status-success: #059669;
  --color-status-warning: #D97706;
  --color-sky-base: #0284C7;

  --color-text-primary: #0F172A;
  --color-text-secondary: #475569;
  --color-text-muted: #94A3B8;
  --color-text-disabled: #CBD5E1;
}
```

Always use Tailwind class utilities. Never inline `rgba()` or hex in JSX:

```tsx
// Correct — works in both themes automatically
<div className="bg-navy-deep text-avo-teal font-display rounded-xl border border-glass-border">
  <span className="font-mono text-gold-base">84.7</span>
</div>

// Violation — breaks light theme, hardcodes dark values
<div style={{ background: 'rgba(19,29,48,.58)', color: '#00C2B8' }}>
```

---

## 19. Theme Switching (Astra only)

```tsx
// src/stores/theme.store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'dark' | 'light';

interface ThemeStore {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggle: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: 'dark',
      setTheme: (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        set({ theme });
      },
      toggle: () => get().setTheme(get().theme === 'dark' ? 'light' : 'dark'),
    }),
    { name: 'avq-theme' }
  )
);

// Apply before React renders (in main.tsx, before createRoot)
const stored = JSON.parse(localStorage.getItem('avq-theme') || '{}');
document.documentElement.setAttribute('data-theme', stored?.state?.theme ?? 'dark');
```

User preference syncs to Sutra (`PATCH /api/client/account` with `{ preferences: { theme } }`) for cross-device persistence.

**Rules:**
- Attribute on `<html>` only — never on individual components
- Never branch on theme in JSX — CSS vars handle it
- Default is dark — light is opt-in per user
- Shastra and Artha: dark only — no toggle

---

## 20. System-Specific Context

### Shastra (Engineer Console)

| | |
|-|-|
| Theme | Dark only |
| Users | Engineers |
| Navigation | Sidebar permitted for diagnostic tree |
| Unique | Full raw DP breakdown visible, all config editable |

### Artha (Ops Console)

| | |
|-|-|
| Theme | Dark only |
| Users | Ops team |
| Navigation | TopNav only |
| Unique | Score cells show summary (no raw DP), comparison = teal YOU / sky THEM |

### Astra (Client Portal)

| | |
|-|-|
| Theme | Dark + Light (user toggle) |
| Users | Clients |
| Navigation | TopNav only |
| Unique | Dynamic rendering only. InsightsPage is Ava's primary surface. White-label from hostname. |

---

## 21. Never Do

### Visual — Both Themes

- Skeleton loaders — shimmer only
- Fonts beyond Space Grotesk + Manrope + DM Mono
- Emoji icons — Lucide React line only
- Font size below 9px
- Instant card appearance — always fadeIn + stagger
- Hardcoded hex or rgba in JSX — CSS vars / Tailwind tokens only
- Tailwind `emerald` / `amber` / `red` for score colors
- `--pillar-manifest` for score quality — pillar identity only
- `stroke-linecap:round` on score ring segments

### Visual — Dark Theme

- Light mode components in dark context
- Glass blur above `blur(24px)`
- Glass surface inside another glass surface
- Glass without scene background orbs
- Mixing flat cards and glass cards in the same context
- Box shadows on cards (glass-shadow tokens only)

### Visual — Light Theme

- Dark theme score colors (`#00C2B8`, `#F8B400`) on light surfaces — fails WCAG AA
- Pure white `#FFFFFF` for page background — use `#F4F5F7`
- Dark glass classes (`.glass`, `.glass-teal`) in light context
- Scene orbs in light context — not needed
- Box shadows deeper than `0 1px 3px rgba(0,0,0,.04)` on cards

### Interaction — Both Themes

- Save buttons on settings — live-edit + 3s debounce only
- Plus/minus for numbers — use sliders
- Checkboxes for boolean settings — use toggles
- Modal for forms — Drawer only (modal = destructive confirm only)
- Confirm dialog for non-destructive actions
- Pagination for <20 items
- Full page reload after mutation — use TanStack Query invalidation
- Ava messages generated in frontend — always from `ava_message_catalog` via API
- Ava placeholder/fallback cards — show empty state instead
- `window.print()` for PDF — use printer service via Sutra
- `prefers-reduced-motion` override per component

---

## 22. CJK + Multilingual Rules (both themes)

9 languages: `en`, `id`, `de`, `ja`, `zh`, `ko`, `ms`, `th`, `ar`.

- Never `\w` for content — use `\p{L}\p{N}` with `u` flag
- Arabic: `dir="rtl"` on text containers, code blocks stay LTR
- Min-height on text containers (not fixed height) — CJK needs more line height
- Language selectors default to domain language — not hardcoded `['en']`
- Single-token brand names need transliteration aliases for CJK markets