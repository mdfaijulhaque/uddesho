# Content editing notes

- **Countries:** Add or edit objects in `countries/countries.json`. Keep every existing key so the shared country template can render all sections. The `slug` becomes `/study-destinations/{slug}/`.
- **Scholarships:** Add objects in `scholarships/scholarships.json`. Never guess a deadline, stipend, age limit, eligibility rule, or coverage. Use `Verification pending` until an official source is checked.
- **Status:** After checking the current official call, set `status` to `Open`, `Upcoming`, or `Closed` and set `verified` to an exact ISO date such as `2026-08-05`. This automatically updates cards and filters.
- **Deadlines:** Put a general, verified window in `period`; direct readers to `source` for the exact date and timezone.
- **Guides:** Add practical checklist entries in `guides/guides.json`. The shared guide page renders headings and common mistakes.
- **Articles:** Add publication and update dates in `articles/articles.json`. The article appears on the listing, search, homepage (when recent), and RSS feed.
- **Homepage text:** Edit `src/pages/index.astro` near the `Edit homepage hero text here` comment.
- **Logo:** Replace both files in `public/images/` while preserving the logo proportions and filenames, or update the shared image path in `Header.astro`, `Footer.astro`, and `BaseLayout.astro`.
- **Contact details:** Edit `src/config.ts` once to change the WhatsApp number, email placeholder, canonical URL, or social links site-wide.
