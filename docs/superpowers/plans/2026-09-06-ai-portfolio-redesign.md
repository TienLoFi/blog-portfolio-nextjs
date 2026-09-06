# AI Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship the approved four-route Ngọc Tiến portfolio redesign and deploy it to the existing Vercel production project.

**Architecture:** Keep Next.js App Router and existing MDX blog infrastructure. Add a small portfolio presentation layer under `src/features/portfolio-site/`, reuse typed profile data, and keep route pages thin. Shared client controls own persisted theme/locale behavior; server-rendered sections consume bilingual copy selected by the existing next-intl context.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS 4, next-intl, next-themes, Radix Accordion, Motion.

## Global Constraints

- Production work happens on branch `dev`; merge to `main` only after the full verification gate passes.
- Visible brand is `Ngọc Tiến`; visible role is `AI-Powered Digital Marketer`; blog label is `Kho kiến thức` while route remains `/blog`.
- Preserve exact source photos and never generate or alter the user's face.
- Do not publish unverified credentials or any ChanhDai identifier, URL, key, or metadata.
- Theme and VI/EN selection persist on every route and respect reduced motion.
- No new runtime dependency unless the existing stack cannot satisfy a requirement.

---

### Task 1: Content model and legacy-data safety

**Files:**
- Create: `src/features/portfolio-site/data/site-content.ts`
- Create: `src/features/portfolio-site/data/site-content.test.ts`
- Modify: `src/data/user.ts`
- Modify: `src/features/profile/data/certifications.ts`
- Modify: `src/features/profile/data/awards.ts`

**Interfaces:**
- Produces: `SITE_NAV`, `CAREER_COMPANIES`, `PROJECT_CASE_STUDIES`, `KNOWLEDGE_COPY`, and `getLocalizedText(value, locale)`.
- Consumers: all route and section tasks below.

- [ ] **Step 1: Write the failing content-safety tests**

```ts
import test from "node:test";
import assert from "node:assert/strict";
import { CAREER_COMPANIES, PROJECT_CASE_STUDIES, SITE_NAV } from "./site-content";

test("portfolio navigation has four recruiter-facing destinations", () => {
  assert.deepEqual(SITE_NAV.map((item) => item.href), ["/", "/about", "/portfolio", "/blog"]);
});

test("Pascal Group retains four ordered role periods", () => {
  assert.equal(CAREER_COMPANIES[0].name, "Pascal Group");
  assert.equal(CAREER_COMPANIES[0].roles.length, 4);
});

test("case studies keep the three verified projects", () => {
  assert.deepEqual(PROJECT_CASE_STUDIES.map((item) => item.slug), ["cards-fimi-tech", "backend-fimi-tech", "zudo-app"]);
});
```

- [ ] **Step 2: Run the test and verify RED**

Run: `pnpm exec tsx --test src/features/portfolio-site/data/site-content.test.ts`
Expected: FAIL because `site-content.ts` does not exist.

- [ ] **Step 3: Implement the typed bilingual content model**

Create types `LocalizedText`, `SiteNavItem`, `CareerCompany`, `CareerRole`, and `ProjectCaseStudy`; populate them from current Ngọc Tiến/Pascal/project data. Remove legacy credential records and make awards empty until confirmed.

- [ ] **Step 4: Run content tests and legacy audit**

Run: `pnpm exec tsx --test src/features/portfolio-site/data/site-content.test.ts && ! rg -ni "chanhdai|chánh đại|chanh dai" src public`
Expected: all tests pass and `rg` prints no match.

- [ ] **Step 5: Commit**

```bash
git add src/data/user.ts src/features/profile/data src/features/portfolio-site/data
git commit -m "refactor: centralize verified portfolio content"
```

### Task 2: Shared shell, visual system, and assets

**Files:**
- Create: `src/features/portfolio-site/components/site-shell.tsx`
- Create: `src/features/portfolio-site/components/site-header.tsx`
- Create: `src/features/portfolio-site/components/site-footer.tsx`
- Create: `src/features/portfolio-site/components/tech-background.tsx`
- Create: `src/features/portfolio-site/components/theme-locale-controls.tsx`
- Modify: `src/app/globals.css`
- Create: `public/images/ngoc-tien/home-portrait.png`
- Create: `public/images/ngoc-tien/about-pointing-portrait.png`
- Test: `src/features/portfolio-site/components/site-shell.test.ts`

**Interfaces:**
- Consumes: `SITE_NAV`.
- Produces: `SiteShell({ children, activePath })`, `TechBackground`, and persisted theme/locale controls.

- [ ] **Step 1: Write failing pure tests for persisted preference helpers**

```ts
test("theme parser accepts only light and dark", () => {
  assert.equal(parseTheme("light"), "light");
  assert.equal(parseTheme("unknown"), null);
});
test("locale parser accepts only vi and en", () => {
  assert.equal(parseLocale("vi"), "vi");
  assert.equal(parseLocale("fr"), null);
});
```

- [ ] **Step 2: Verify RED**

Run: `pnpm exec tsx --test src/features/portfolio-site/components/site-shell.test.ts`
Expected: FAIL because parsers do not exist.

- [ ] **Step 3: Implement shell and styling**

Implement semantic header/nav/footer, persisted controls using `localStorage`, warm-neutral/dark alternating tokens, grid/constellation layers, motion-reduction CSS, focus states, and responsive containers. Copy the two approved PNG cutouts from the brainstorm assets to the production asset paths without re-encoding faces.

- [ ] **Step 4: Verify tests and formatting**

Run: `pnpm exec tsx --test src/features/portfolio-site/components/site-shell.test.ts && pnpm exec prettier --check src/features/portfolio-site src/app/globals.css`
Expected: tests pass and Prettier reports all matched files formatted.

- [ ] **Step 5: Commit**

```bash
git add src/features/portfolio-site/components src/app/globals.css public/images/ngoc-tien
git commit -m "feat: add portfolio site shell and visual system"
```

### Task 3: Landing and About routes

**Files:**
- Modify: `src/app/page.tsx`
- Create: `src/app/about/page.tsx`
- Create: `src/features/portfolio-site/components/home-page.tsx`
- Create: `src/features/portfolio-site/components/about-page.tsx`
- Test: `src/features/portfolio-site/components/route-contracts.test.ts`

**Interfaces:**
- Consumes: `SiteShell`, approved portrait assets, bilingual content.
- Produces: `/` and `/about`.

- [ ] **Step 1: Add failing source-contract tests**

Test that home source includes links to `/portfolio` and `/blog`, excludes project/experience section IDs, and About source references `about-pointing-portrait.png`.

- [ ] **Step 2: Verify RED**

Run: `pnpm exec tsx --test src/features/portfolio-site/components/route-contracts.test.ts`
Expected: FAIL because route components do not exist.

- [ ] **Step 3: Implement the approved pages**

Homepage contains only dark hero, exact black-polo portrait, two destination cards, and footer. About contains the pointing portrait on the left, name/role copy on the right, a feathered photo edge, transition story, and career summary.

- [ ] **Step 4: Verify contracts and TypeScript**

Run: `pnpm exec tsx --test src/features/portfolio-site/components/route-contracts.test.ts && pnpm exec tsc --noEmit`
Expected: all tests and TypeScript pass.

- [ ] **Step 5: Commit**

```bash
git add src/app/page.tsx src/app/about src/features/portfolio-site/components
git commit -m "feat: build landing and about pages"
```

### Task 4: Recruiter-ready Portfolio route

**Files:**
- Create: `src/app/portfolio/page.tsx`
- Create: `src/features/portfolio-site/components/portfolio-page.tsx`
- Create: `src/features/portfolio-site/components/company-experience.tsx`
- Create: `src/features/portfolio-site/components/project-case-study.tsx`
- Test: `src/features/portfolio-site/components/portfolio-contracts.test.ts`

**Interfaces:**
- Consumes: `CAREER_COMPANIES`, `PROJECT_CASE_STUDIES`, `SiteShell`.
- Produces: accessible `/portfolio` route and reusable company/project renderers.

- [ ] **Step 1: Write failing structure tests**

Test that company experience renders one company heading with four role triggers, the project list appears after experience, and every project has purpose, responsibilities, and technologies.

- [ ] **Step 2: Verify RED**

Run: `pnpm exec tsx --test src/features/portfolio-site/components/portfolio-contracts.test.ts`
Expected: FAIL because portfolio components do not exist.

- [ ] **Step 3: Implement Portfolio**

Implement recruiter hero and email CTA, quick profile, skills, Radix Accordion grouped by company, three detailed case studies, verified-only credential section, and final hiring CTA. Use native links and headings in logical order.

- [ ] **Step 4: Verify contracts and TypeScript**

Run: `pnpm exec tsx --test src/features/portfolio-site/components/portfolio-contracts.test.ts && pnpm exec tsc --noEmit`
Expected: tests and TypeScript pass.

- [ ] **Step 5: Commit**

```bash
git add src/app/portfolio src/features/portfolio-site/components
git commit -m "feat: add recruiter-ready portfolio page"
```

### Task 5: Knowledge Hub and existing MDX compatibility

**Files:**
- Modify: `src/app/(app)/blog/page.tsx`
- Modify: `src/app/(app)/blog/[slug]/page.tsx`
- Modify: `src/features/blog/components/drawer-post.tsx`
- Modify: `src/components/post-item.tsx`
- Test: `src/features/portfolio-site/components/blog-contracts.test.ts`

**Interfaces:**
- Consumes: existing `getAllPosts()` and `SiteShell`.
- Produces: recruiter-consistent `/blog` list while preserving `/blog/[slug]`.

- [ ] **Step 1: Write failing blog contract tests**

Assert visible Vietnamese label `Kho kiến thức`, category derivation for AI/Marketing/Development, and unchanged post href format `/blog/${slug}`.

- [ ] **Step 2: Verify RED**

Run: `pnpm exec tsx --test src/features/portfolio-site/components/blog-contracts.test.ts`
Expected: FAIL because the new knowledge-hub contract is absent.

- [ ] **Step 3: Implement the knowledge hub**

Add readable solid Vietnamese hero text, approved description, category chips, existing MDX cards, and shared shell. Keep metadata, RSS, sitemap, and detail routes compatible.

- [ ] **Step 4: Verify contracts and route build types**

Run: `pnpm exec tsx --test src/features/portfolio-site/components/blog-contracts.test.ts && pnpm exec tsc --noEmit`
Expected: tests and TypeScript pass.

- [ ] **Step 5: Commit**

```bash
git add 'src/app/(app)/blog' src/features/blog src/components/post-item.tsx src/features/portfolio-site/components
git commit -m "feat: redesign blog as knowledge hub"
```

### Task 6: Full verification, browser QA, integration, and deployment

**Files:**
- Modify if defects are found: files from Tasks 1–5 only
- Create: `docs/superpowers/reports/2026-09-06-ai-portfolio-verification.md`

**Interfaces:**
- Consumes: completed site.
- Produces: verified `dev`, merged `main`, and production deployment URL.

- [ ] **Step 1: Run the automated verification gate**

```bash
pnpm exec prettier --check ./src
pnpm exec eslint ./src
pnpm exec tsc --noEmit
pnpm run registry:internal:build
pnpm run registry:build
pnpm run build
git diff --check
! rg -ni "chanhdai|chánh đại|chanh dai" src public
```

Expected: every command exits 0; ESLint may report only documented pre-existing warnings.

- [ ] **Step 2: Run local browser QA**

Run `pnpm dev`, then verify `/`, `/about`, `/portfolio`, `/blog`, and one `/blog/[slug]` at desktop and 390x844. Confirm no overflow, correct portraits, working navigation, accordion, persisted theme/locale, readable Vietnamese headings, and reduced-motion behavior.

- [ ] **Step 3: Write the verification report**

Record commands, exit codes, tested URLs/viewports, visible results, and any intentionally hidden unverified credentials in the report file.

- [ ] **Step 4: Commit verification fixes/report and merge**

```bash
git add src public docs/superpowers/reports
git commit -m "test: verify portfolio redesign"
git checkout main
git merge --no-ff dev
```

- [ ] **Step 5: Push and deploy production**

```bash
git push origin dev
git push origin main
vercel deploy --prod --yes
```

Expected: Vercel returns a production URL for the existing `hangoctien` project; verify the returned URL and `https://hangoctien.vercel.app` render the new build.
