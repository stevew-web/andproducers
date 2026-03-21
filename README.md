# AndProducers — Site Documentation

Built with Astro, deployed on Vercel via GitHub. Zero running costs.

---

## Quick start

### Prerequisites
- Node.js 18+
- A GitHub account
- A Vercel account (free tier is fine)

### Local development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Project structure

```
andproducers/
├── public/
│   ├── downloads/        ← Put all downloadable PDFs/templates here
│   ├── images/           ← Article images, OG images
│   └── favicon.svg
├── src/
│   ├── content/          ← All site content (Markdown files)
│   │   ├── articles/     ← Weekly articles
│   │   ├── guides/       ← Evergreen guides
│   │   ├── templates/    ← Template pages (link to /public/downloads/)
│   │   ├── playbooks/    ← Playbook pages
│   │   └── config.ts     ← Content schema (frontmatter definitions)
│   ├── layouts/
│   │   ├── BaseLayout.astro    ← Nav, footer, SEO meta, AdSense script
│   │   └── ArticleLayout.astro ← Article page with sidebar + ad slots
│   ├── pages/
│   │   ├── index.astro         ← Homepage
│   │   ├── articles/
│   │   │   ├── index.astro     ← All articles listing
│   │   │   └── [slug].astro    ← Dynamic article page
│   │   ├── guides/[...]        ← Guides listing + dynamic page
│   │   ├── templates/[...]     ← Templates listing + dynamic page
│   │   ├── playbooks/[...]     ← Playbooks listing + dynamic page
│   │   ├── topic/[topic].astro ← Topic archive pages
│   │   ├── about.astro
│   │   ├── rss.xml.js
│   │   └── 404.astro
│   ├── styles/
│   │   └── global.css          ← Full design system
│   └── utils/
│       └── topics.ts           ← Topic labels + descriptions
└── astro.config.mjs
```

---

## Adding content

### Publishing a new article

Create a new `.md` file in `src/content/articles/`. The filename becomes the URL slug.

```
src/content/articles/my-article-title.md → /articles/my-article-title
```

**Required frontmatter:**

```yaml
---
title: "Your Article Title"
description: "One or two sentence description for SEO and card previews."
pubDate: 2026-03-24          # Publication date
topic: production-ops        # See topic options below
author: AndProducers
readingTime: 8               # Estimated minutes (optional)
featured: false              # Set true to feature on homepage (one at a time)
download: "/downloads/your-file.pdf"  # Optional — shows download banner
image: "/images/your-image.jpg"       # Optional — article hero image
imageAlt: "Description of image"      # Required if image is set
---

Your article content in Markdown here...
```

**Topic options:**
- `production-ops`
- `creative-strategy`
- `in-housing`
- `martech`
- `social-content`
- `video-motion`

### Adding a downloadable file

1. Put the file in `public/downloads/` (e.g. `public/downloads/my-template.pdf`)
2. Reference it in frontmatter as `download: "/downloads/my-template.pdf"`
3. A download banner automatically appears at the top of the article/template page

### Adding an image

1. Put the image in `public/images/` (recommended: 1200×630px for OG + article hero)
2. Reference it as `image: "/images/my-image.jpg"`

---

## Deploying to Vercel

### First deploy

1. Push the project to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Framework preset: **Astro** (Vercel detects this automatically)
5. Deploy — done

### Subsequent deploys

Every push to `main` triggers an automatic deploy. That's it.

---

## Setting up Google AdSense

### Step 1: Apply for AdSense

1. Go to [adsense.google.com](https://adsense.google.com)
2. Sign up with your Google account
3. Add your site: `andproducers.com`
4. You'll be given a publisher ID in the format `ca-pub-XXXXXXXXXX`

### Step 2: Add your publisher ID

In `src/layouts/BaseLayout.astro`, find the AdSense comment block and uncomment it, replacing the placeholder with your real publisher ID:

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossorigin="anonymous"></script>
```

### Step 3: Replace ad slot placeholders

The site has four ad slot types pre-built as placeholder divs:

| Class | Location | Recommended size |
|-------|----------|-----------------|
| `.ad-slot-banner` | Homepage top, article top, listing pages | 728×90 leaderboard |
| `.ad-slot-in-article` | Mid-article | 336×280 large rectangle |
| `.ad-slot-rect` | Article sidebar (sticky) | 300×250 medium rectangle |

Once AdSense approves your account, create ad units in the AdSense dashboard and replace the placeholder `<div>` elements with the actual AdSense `<ins>` code snippets.

**Current placeholder (in `ArticleLayout.astro`):**
```html
<div class="ad-slot ad-slot-banner" aria-hidden="true">
  <span>Advertisement</span>
</div>
```

**Replace with your AdSense unit:**
```html
<ins class="adsbygoogle ad-slot-banner"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXXXX"
     data-ad-slot="XXXXXXXXXX"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
```

### Ad revenue growth path

| Stage | Traffic threshold | Platform | Est. RPM |
|-------|------------------|----------|----------|
| 1 | Any | Google AdSense | £2–8 |
| 2 | 10k sessions/mo | Ezoic | £8–15 |
| 3 | 50k sessions/mo | Mediavine or Raptive | £20–40 |
| 4 | 100k sessions/mo | Direct sponsorships | Negotiated |

---

## SEO checklist

The site is built for strong SEO out of the box:

- ✅ Static HTML — zero JS on page load, perfect Lighthouse scores
- ✅ Canonical URLs on every page
- ✅ Open Graph + Twitter Card meta on every page
- ✅ Auto-generated sitemap at `/sitemap-index.xml` (via `@astrojs/sitemap`)
- ✅ RSS feed at `/rss.xml`
- ✅ Semantic HTML throughout
- ✅ Topic archive pages (6 × `/topic/[slug]`) — good for long-tail ranking

**Submit your sitemap** to Google Search Console at:
`https://andproducers.com/sitemap-index.xml`

---

## Weekly content workflow

Suggested process for adding a new article each week:

1. Draft in your editor of choice (Notion, VS Code, wherever)
2. Create `src/content/articles/your-slug.md` with frontmatter
3. If the article has a downloadable, add the file to `public/downloads/`
4. If you have a hero image, add it to `public/images/`
5. `git add . && git commit -m "Add: article title" && git push`
6. Vercel builds and deploys automatically — live in ~30 seconds

---

## Updating the ProductionStudio URL

The ProductionStudio URL appears in several places. Search for `productionstudio.com` across the project and replace with your actual URL if it's different:

- `src/layouts/BaseLayout.astro` — nav CTA + footer link
- `src/layouts/ArticleLayout.astro` — in-article CTA block
- `src/pages/index.astro` — homepage CTA section
- `src/pages/about.astro` — about page mention
