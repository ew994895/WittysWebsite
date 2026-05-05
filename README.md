# Witty's Website

Multi-page static portfolio website for Ethan Witkowski, built with HTML, CSS, and JavaScript for direct GitHub Pages deployment.

## Project Structure

- `index.html` is the landing page with the hero, featured project previews, and quick portfolio highlights.
- `about.html` contains the about section, developer journey timeline, and personal trait cards.
- `projects.html` contains the full projects section and filter buttons.
- `skills.html` contains the full categorized skills section.
- `resume.html` contains the resume summary and PDF access links.
- `contact.html` contains contact links and quick actions.
- `styles.css` contains the shared theme, layout, card styling, and responsive page styles.
- `script.js` contains the typing effect, mobile menu behavior, active nav highlighting, project filtering, and reveal animations.
- `assets/` stores the resume PDF and any future media files.

## Run Locally

1. From the project folder, run:

```bash
python3 -m http.server 5500
```

2. Open:

```text
http://localhost:5500
```

## Deploy To GitHub Pages

1. Push the full project to a GitHub repository.
2. Open the repository on GitHub.
3. Go to `Settings` > `Pages`.
4. Set the source to deploy from the `main` branch and the repository root.
5. Save the settings and wait for GitHub Pages to publish the site.
6. Open the published GitHub Pages URL to verify the multi-page navigation and resume link.

## Resume PDF

- Store the resume at `assets/Ethan-Witkowski-Resume.pdf`.
- If you replace the file later, keep the same filename so all resume buttons continue to work.

## Notes

- The site is fully static and works on GitHub Pages without a backend or build step.
- All navigation uses relative links so the pages work locally and after deployment.
- Replace the placeholder GitHub and LinkedIn links in the HTML files with your real public profile URLs.
