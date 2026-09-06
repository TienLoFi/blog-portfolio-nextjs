# Ngọc Tiến AI Portfolio Redesign

## Goal

Turn the existing single-page developer portfolio into a recruiter-ready personal site for Ngọc Tiến's move from full-stack development toward AI-powered digital marketing, while preserving verified legacy experience, projects, blog posts, theme switching, and Vietnamese/English support.

## Information architecture

- `/`: short landing page only. Dark hero with the exact black-polo portrait, a concise positioning statement, and two destination cards: Portfolio and Knowledge Hub.
- `/about`: personal story. The exact pointing portrait appears on the left with the name and AI-Powered Digital Marketer positioning on the right. The lower sections explain the IT-to-AI transition and career timeline.
- `/portfolio`: recruiter-first profile. Order: positioning and contact CTA; quick profile and skills; experience grouped by company with expandable role periods; detailed project case studies; verified credentials/awards; final hiring CTA.
- `/blog`: visible label “Kho kiến thức” while retaining the `/blog` route and existing post detail routes. The page explains that it collects AI knowledge, experiments, marketing notes, and older technical learning.

## Visual direction

- Preserve the approved Immersive Motion identity: near-black blue surfaces, restrained cyan and crimson accents, thin grid, constellation details, soft grain, outlined display type only where Vietnamese diacritics remain legible.
- Alternate dark and warm neutral sections. Do not copy the cream/orange palette or assets from the reference site.
- Dark-mode constellation details must be brighter than the dark surface; light-mode details remain subtle.
- Use generous line-height for Vietnamese headings. Solid text replaces outline text when accents collide.
- Motion is subtle: portrait entrance, ticker, hover lift, dropdown transitions. Respect `prefers-reduced-motion`.

## Content rules

- Display name: `Ngọc Tiến`.
- Role: `AI-Powered Digital Marketer`.
- Positioning must honestly state a transition from full-stack development to AI/digital marketing; do not claim unverified professional AI experience.
- Reuse verified Pascal Group role periods and the three projects `cards.fimi.tech`, `backend.fimi.tech`, and `zudo.vn` from existing data.
- Project case studies show role, timeframe, team/context, purpose, responsibilities, and technology.
- Do not expose legacy ChanhDai names, URLs, credential IDs, storage keys, or metadata.
- Credentials and awards must be hidden unless the record is confirmed to belong to Ngọc Tiến. The implementation may preserve the data file internally only after legacy records are removed.

## Interaction and responsive behavior

- Navigation exposes Trang chủ, Về mình, Portfolio, and Kho kiến thức.
- Theme and VI/EN controls work on every page and persist across navigation/reload.
- Portfolio experience is grouped by company. Each role period is an accessible accordion/dropdown. New companies can be appended without changing the layout.
- Portfolio project details remain readable without hover and links are keyboard accessible.
- Desktop, tablet, and 390px mobile layouts have no horizontal overflow.
- Images use source-faithful cutouts; no generative face alteration.

## Assets

- Homepage portrait source: `/Users/tien/Downloads/DSCF2866_Original.JPG`, rendered from the deterministic transparent cutout created during design.
- About portrait source: `/Users/tien/Downloads/IMG_1824.HEIC`, rendered from the deterministic half-body transparent cutout created during design.
- Both production assets live under `public/images/ngoc-tien/` with descriptive names.

## Acceptance criteria

- All four routes render directly and through navigation.
- The homepage ends after its two destination cards and footer.
- The About page uses the pointing portrait; the homepage uses the black-polo portrait.
- Portfolio groups Pascal Group roles in an accessible accordion and places project case studies below experience.
- Blog is labeled Kho kiến thức but existing `/blog/[slug]` URLs continue working.
- Theme and locale persist, reduced-motion is respected, and mobile has no overlap/overflow.
- Prettier, ESLint, TypeScript, registry builds, Next production build, browser QA, and a repository-wide ChanhDai string audit complete before production deployment.
