# Uddesho Abroad

A production-ready Bangla study-abroad information and student-support website for Bangladeshi students. The site is intentionally information-first: visitors can read country, scholarship, document, finance, visa, and pre-departure guidance before choosing to contact Uddesho Abroad through a structured WhatsApp message.

## Technology

- Astro 5 static site generation
- JSON-based editable content for countries, scholarships, guides, and articles
- Lightweight vanilla JavaScript for search, scholarship filters, mobile navigation, and WhatsApp forms
- Netlify deployment with sitemap, RSS, robots, redirects, security headers, and a custom 404 page
- Responsive CSS with accessible focus, contrast, forms, semantic landmarks, and reduced-motion support

## Local development

```bash
npm install
npm run dev
```

The production build command is `npm run build`; Netlify publishes the generated `dist` directory.

## Editing content

See `src/content/README.md` for step-by-step instructions. The most common settings are centralized in `src/config.ts`:

- WhatsApp number and display label
- Facebook pages and group links
- Editable email placeholder
- Production canonical URL

The homepage hero content is in `src/pages/index.astro`. The uploaded logo is copied to `public/images/uddesho-abroad-logo.png` and an optimized WebP version is used throughout the interface.

## Adding a country

Add an object to `src/content/countries/countries.json` using the same fields as an existing country. Astro automatically creates the new SEO-friendly detail URL from its `slug`.

## Adding or updating a scholarship

Add an object to `src/content/scholarships/scholarships.json`. Keep unverified information clearly marked. Only change `status` to `Open`, `Upcoming`, or `Closed` after checking the official source, then add the exact verification date to `verified`. Never copy an old deadline forward without checking the current call.

## WhatsApp form privacy

Forms do not write to a database. Required fields are validated in the browser, encoded into a structured message, and opened at `wa.me`. The visitor can review or edit the message before sending it. No sensitive document upload is offered on the public website.

## Deployment

Connect the repository to Netlify or deploy it directly. `netlify.toml` already defines the build command, publish directory, Node version, security headers, and the `/whatsapp` redirect.
