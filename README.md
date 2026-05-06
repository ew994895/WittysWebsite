# Witty's Website

Published multi-page portfolio for Ethan Witkowski, built with HTML, CSS, and JavaScript and hosted on GitHub Pages.

## Live Site

Expected GitHub Pages URL for this repository:

```text
https://ew994895.github.io/WittysWebsite/
```

## Current Structure

- `index.html` is the landing page with the hero and current project preview cards.
- `projects.html` contains the current project gallery.
- `demo.html` contains the embedded demos for the current app projects.
- `resume.html` contains the resume summary and direct PDF link.
- `contact.html` contains contact links.
- `styles.css` contains the shared theme, layout, cards, and responsive styles.
- `script.js` contains the mobile nav, active page state, and reveal animation.

## Assets

- `assets/Ethan-Witkowski-Resume.pdf` is the live resume file used across the site.
- `assets/portfolio.mp4`, `assets/orthoforge.mp4`, and `assets/rankit.mp4` are the current embedded demo videos.
- `assets/portfolio  logo.png`, `assets/orthoforge logo.png`, and `assets/rankit logo.png` are the current project logos.
- `assets/wittys-website-logo.svg` is the website logo used in the navbar and website project visuals.

## Run Locally

```bash
python3 -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

## Publish Updates

1. Commit and push changes to `main`.
2. GitHub Pages will publish the updated site from the repository root.
3. Recheck the live site after the push finishes.

## Notes

- The site is static and GitHub Pages compatible.
- Navigation uses relative paths so the pages work locally and when published.
- Keep the resume filename the same if you replace it later so the existing links continue to work.
