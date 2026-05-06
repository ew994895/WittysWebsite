# Witty's Website

Clean multi-page project and demo portfolio for Ethan Witkowski, built with HTML, CSS, and JavaScript for GitHub Pages.

## Files

- `index.html` is the landing page with a short intro, featured projects, and a demo reel preview.
- `projects.html` is the main project gallery with filter buttons and visual project cards.
- `demo.html` is the demo reel page for walkthroughs, screen recordings, and future video embeds.
- `resume.html` is a simplified resume page with a short summary and direct PDF link.
- `contact.html` is the contact page with email, GitHub, LinkedIn, and resume access.
- `styles.css` contains the shared layout, dark theme, cards, navigation, and responsive styles.
- `script.js` contains the mobile menu, active nav state, project filtering, and subtle reveal animation.
- `assets/Ethan-Witkowski-Resume.pdf` is the resume PDF used by the site.

## Run Locally

Run:

```bash
python3 -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

## Deploy To GitHub Pages

1. Push the project to a GitHub repository.
2. Open the repository on GitHub.
3. Go to `Settings` > `Pages`.
4. Deploy from the `main` branch and the repository root.
5. Save the settings and wait for GitHub Pages to publish the site.
6. Open the published URL and verify the navbar, project gallery, demo page, and resume link.

## Screenshots And Videos

- Replace project placeholders directly in the HTML files.
- Add screenshots, MP4 files, GIFs, or thumbnails inside `assets/`.
- `index.html`, `projects.html`, and `demo.html` include placeholder media blocks you can swap for screenshots or videos.
- `demo.html` includes HTML comments showing where to place a YouTube iframe, MP4 `<video>`, GIF, or screenshot link.

## Resume File

- Keep the resume PDF at `assets/Ethan-Witkowski-Resume.pdf`.
- If you update the resume later, keep the same filename so every resume link continues to work.

## Notes

- The site is static and GitHub Pages compatible.
- Navigation uses relative paths so the pages work locally and after deployment.
- Replace the placeholder GitHub and LinkedIn links with your real public URLs when ready.
