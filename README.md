# Kadadev Sadaluva

Static website for Kadadev Sadaluva (Kataragama New Town). Plain HTML + a pre-built Tailwind CSS file, deployed on Vercel.

## Develop

```bash
npm install            # tailwindcss + sharp (dev only)
npm run build:css      # src/input.css  ->  styles.css (minified; commit the result)
npm run generate:icons # android-chrome icons from logo.png
```

All custom CSS lives in `src/input.css`. Edit it (not `styles.css`) and rebuild.

## Performance rules used in this project

- Animate only `transform` / `opacity` (compositor-only). No animated `box-shadow`, `width`, or `backdrop-filter`.
- Hero photo is a real `<img fetchpriority="high">` with a matching `<link rel="preload">`; everything else is `loading="lazy"`.
- Fonts and the icon font load without blocking first paint.
- Keep images small: use `nav-logo.webp`/`og-image.jpg`-sized assets, not the 1 MB source `logo.png`.
