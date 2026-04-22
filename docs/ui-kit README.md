# Reportive UI Kit

Four dashboard surfaces for the Reportive marketing-analytics product. Open `index.html` to see them arranged on a design canvas (drag grip to reorder, click label to focus, arrows to step through).

## Surfaces
- **Login** — full-bleed gradient flare, glass card, Google SSO + email/password, vertical logo lockup
- **Dashboard overview** — hero banner, 4 KPI metrics, spend vs conversions area chart, donut spend-mix, channel summary table, bilingual 3-beat analyst note
- **Campaigns** (Google Ads deep-dive) — channel header, 4 KPIs, campaign list w/ type + status chips, daily spend pacing bars, top keywords, top-performer featured card (gold accent)
- **SEO & Organic** — Authority Score hero card, 12-month trend, Top Queries + Landing Pages tables, device split + country list, gold-accent SEO opportunity card

## Files
- `index.html` — canvas composer; loads all screens side-by-side
- `chrome.jsx` — `RSidebar`, `RTopBar`, `RFlare`, `RCard`, `RChip`, `RStatus`, `RDelta`, `RMetric`, `Spark`, `ChannelLogo`
- `screen-dashboard.jsx` — overview
- `screen-campaigns.jsx` — Google Ads drill
- `screen-seo.jsx` — Search Console + GA4
- `screen-login.jsx` — auth
- `design-canvas.jsx` — presentation wrapper

## Typography contract
- **Space Grotesk** — headlines, KPI values, button labels, eyebrow labels
- **Manrope** — body copy, analyst notes (brand TTF loaded locally from `/fonts`)
- **DM Mono** — data readouts, timestamps, section indices (brand TTF loaded locally)

## Bilingual copy
UI chrome is English; analyst copy is Indonesian — keep that split when extending.
