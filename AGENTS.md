# Uddesho Abroad architecture

## Project shape

- `src/pages/` contains Astro routes. Dynamic country, scholarship, guide, and article pages use `[slug].astro` templates.
- `src/content/` contains editable JSON records. Keep content separate from presentation and avoid duplicating records in page files.
- `src/components/` contains shared navigation, footer, cards, breadcrumbs, icons, floating contact, and reusable WhatsApp forms.
- `src/layouts/BaseLayout.astro` owns metadata, canonical links, social cards, organization structured data, and global chrome.
- `src/styles/global.css` contains design tokens and the full responsive visual system.
- `src/config.ts` is the single source for WhatsApp, social, email, site URL, and navigation settings.

## Conventions

- Keep the primary interface language natural Bangla while retaining standard English study-abroad terms.
- Use semantic HTML, visible focus states, descriptive labels, and `rel="noopener noreferrer"` on external links.
- Do not add fake deadlines, scholarship coverage, testimonials, partnerships, prices, guarantees, or success claims.
- Mark scholarship facts as pending until checked against the linked official source.
- Preserve the uploaded logo proportions. Do not redraw or distort it.
- Prefer JSON content changes and shared components over one-off hard-coded pages.
- Keep client JavaScript dependency-free unless a feature cannot reasonably be implemented otherwise.

## Non-obvious decisions

- WhatsApp forms intentionally remain client-only and do not persist personal information.
- Scholarship status filters include Open, Upcoming, and Closed, but unverified starter records remain labeled for verification rather than showing invented status.
- Country cost figures are approximate planning ranges and always appear with a variability warning.
- The production URL currently uses the assigned Netlify site slug and should be updated in both `astro.config.mjs` and `src/config.ts` when a custom domain is connected.
