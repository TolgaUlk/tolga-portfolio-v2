# Rebuild Notes

This is a restructure of the original Lovable-generated portfolio site. Same content,
cleaner architecture. Read this before making further changes.

## What changed and why

1. **One data file drives everything.** `src/data/projects.ts` now contains every
   project's title, category, role, thumbnail, hero media, awards, and full
   case-study content (as a `sections` array). To add or remove a project, or
   change what's on its page, edit this file — no JSX hunting required.

2. **Videos point to Vimeo, with automatic local fallback.** `src/data/vimeoMap.ts`
   is where you paste Vimeo video IDs as you upload. Until an ID is filled in, the
   site automatically uses the original local video file, so nothing breaks
   mid-migration. Once every ID is filled in, delete the corresponding `src/assets/*.mp4`
   files to shrink the repo drastically (see "Why this matters" below).

3. **Awards and client logos are now a consistent size.** The old code had
   hand-tuned pixel widths per award badge (135px, 286px, 291px, 616px...) and
   per-logo percentage widths (28%, 40%, 52%, 75%, 100%...) that didn't match each
   other. `AwardsRow.tsx` and `LogoOverlay.tsx` now size everything from a single
   rule, so any award/logo you add automatically matches the others.

4. **The 1,200-line case-study page is now ~150 lines.** `PortfolioDetail.tsx` used
   to be one giant chain of `{item.id === 1 && ...}`, `{item.id === 2 && ...}` blocks —
   effectively 10 different hand-coded pages glued into one file. It's now a single
   template (`ProjectSection.tsx`) that reads each project's `sections` array and
   renders accordingly.

5. **Scroll animations added.** `useScrollReveal()` (in `src/hooks/`) fades content
   in as it scrolls into view, applied to the thumbnail grid and every case-study
   section block. Respects `prefers-reduced-motion` automatically.

6. **Font mismatch fixed.** `tailwind.config.ts` declared `Playfair Display` /
   `DM Sans` as the site's fonts, but `index.css` was actually loading and applying
   `Archivo Expanded` everywhere. Now consistent — Playfair Display for headings,
   DM Sans for body text, both loaded correctly.

## Things you need to do

### 1. Missing award images (blocking)
Four award badge images are **not included in the downloadable code** — they only
exist on Lovable's internal asset server and were referenced via `.asset.json`
pointer files:

- `gema-awards-row.png`
- `gema-awards-row-black.png`
- `omni-award-white.png`
- `omni-award-black.png`

The build currently references `gema-awards-row.png.asset.json` and
`omni-award-white.png.asset.json` directly, which will NOT resolve outside of
Lovable's hosting. **Export/download these 4 images from Lovable directly** (open
each in the Lovable editor and save/download it), then replace the imports in
`src/data/projects.ts`:

```ts
// Replace this:
import gemaAwardsRow from '@/assets/gema-awards-row.png.asset.json';
// with this, once you've added the real file:
import gemaAwardsRow from '@/assets/gema-awards-row.png';
// and change `gemaAwardsRow.url` to just `gemaAwardsRow` in the awards array below.
```
Same pattern for the OMNI award image.

### 2. Upload videos to Vimeo, fill in `vimeoMap.ts`
See `src/data/vimeoMap.ts` for the full list, grouped by priority. As you upload
each video (set to **Unlisted**), copy the numeric ID from its Vimeo URL
(`vimeo.com/123456789` → `123456789`) into the matching key.

### 3. Why this matters for the monthly-fee problem
Right now, all 47 videos are bundled directly into the site (total ~650MB —
`hp-takeover-main.mp4` alone is 94MB). That's why the current site is slow and
needs paid hosting to serve reasonably. Once videos are migrated to Vimeo:
- The deployed site shrinks to a few MB (just images + code)
- Vimeo's free CDN serves the actual video weight, not your host
- Free hosting tiers (Vercel/Netlify) comfortably handle the rest

## Adding a new project (once this is live)

1. Add your images/videos to `src/assets/` (or skip local files entirely and only
   use a Vimeo ID once uploaded).
2. Add a new entry to the `projects` array in `src/data/projects.ts` — copy an
   existing one as a template.
3. That's it — it automatically appears in the homepage grid and gets a working
   case-study page at `/project/{id}`.

## Removing a project

Delete its entry from the `projects` array, or set `hidden: true` on it to keep
the data but hide it from the site.
