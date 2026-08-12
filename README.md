# Stoneward Security

**Clear risk. Stronger defenses.** Human-reviewed cybersecurity assessments, monitoring, and incident response for small businesses — practical, evidence-backed, and built so your logs never have to leave your network.

🌐 **Live site:** [https://stonewardsecurity.github.io](https://stonewardsecurity.github.io/)
📧 **Contact:** [stonewardsecurity@gmail.com](mailto:stonewardsecurity@gmail.com)

---

## What this is

This repository hosts the public marketing site for **Stoneward Security**, a nationwide cybersecurity service for small businesses. The site explains the service, pricing, and privacy model — including **Tier 2 client-site analysis**, where a code-signed collector runs on your premises so raw logs never leave your network.

> **Honest positioning:** we are advisory-only. No service can guarantee security, and we do not claim to. Every report is a DRAFT until a human reviews and signs off.

## Site structure

- `index.html` — the complete landing page, including content, styling, and lightweight JavaScript
- `privacy.html` — public website and inquiry privacy policy
- `terms.html` — website terms of use
- `data-handling.html` — operational policy for client and inquiry data
- `responsible-disclosure.html` — coordinated vulnerability disclosure policy
- `legal.css` — shared styles for trust and legal pages
- `og-card.png` — social-share preview image for Open Graph and Twitter cards
- `favicon.ico`, `icon-*.png`, and `apple-touch-icon.png` — browser and device icons
- `site.webmanifest` — PWA metadata for installability
- `stoneward_logo*.svg` — brand logo assets in dark and light variants
- `robots.txt` — crawler guidance for search engines
- `.nojekyll` — ensures GitHub Pages serves the site as a plain static site

## Preview locally

Open `index.html` directly in your browser, or serve the folder with a simple local web server such as:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000/
```
