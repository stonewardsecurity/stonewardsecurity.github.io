# CyberGuard Security

**Your On-Demand Security Team.** AI-powered security assessments, monitoring, and incident response for small businesses — human-reviewed, trust-first, and built so your logs never leave your network.

🌐 **Live site:** [https://miguelito1997mv44-byte.github.io](https://miguelito1997mv44-byte.github.io/)
📧 **Contact:** [vdzelectric@gmail.com](mailto:vdzelectric@gmail.com)

---

## What this is

This repository hosts the public marketing site for **CyberGuard Security**, a managed security service built around the *CyberGuard AI* agent. The site explains the service, pricing, and privacy model — including **Tier 2 client-site analysis**, where a code-signed collector runs on your premises so raw logs never leave your network.

> **Honest positioning:** we are advisory-only. No service can guarantee security, and we do not claim to. Every report is a DRAFT until a human reviews and signs off.

## Site structure

- `index.html` — the complete landing page, including content, styling, and lightweight JavaScript
- `og-card.png` — social-share preview image for Open Graph and Twitter cards
- `favicon.ico`, `icon-*.png`, and `apple-touch-icon.png` — browser and device icons
- `site.webmanifest` — PWA metadata for installability
- `cyberguard_logo*.svg` — brand logo assets in dark and light variants
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
