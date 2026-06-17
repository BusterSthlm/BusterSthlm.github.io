# Web Developer Portfolio — Minimal Template

This is a production‑ready, minimal web developer portfolio template built with HTML, CSS and vanilla JavaScript.

Features
- Semantic, accessible HTML5 structure
- Responsive, mobile‑first CSS with variables for colors and spacing
- Reusable components: buttons, cards, grids
- Smooth CSS micro‑animations and hover states
- Minimal JS for form interaction and smooth scrolling

How to customize
- Edit the main content in `index.html` (headline, bio, projects, services).
- Change colors and typography in `css/style.css` (CSS variables at the top).
- Replace placeholder images in `assets/` with your own images.
- Hook up the contact form in `js/main.js` to your backend or email provider.

Development
1. Open `index.html` in your browser to preview.

Deploy to GitHub Pages
1. Ensure the repository is pushed to GitHub on the `main` branch.
2. In your repository settings → Pages, select `main` branch and `/ (root)` folder, then save. Your site will publish at `https://<username>.github.io/<repo>`.

Customization tips
- To change the accent color, update `--accent` and `--accent2` variables at the top of `css/style.css`.
- Replace placeholder SVGs in the `assets/` folder with optimized PNG or WebP images for production.
- To wire the contact form to Formspree: replace the form `action` with your Formspree endpoint and remove the demo JS handler in `js/main.js`.

Local testing
- Use a simple static server, e.g. Python: 
```bash
python -m http.server 8080
```
Then open `http://localhost:8080`.

Notes
- Fonts are loaded from Google Fonts (Inter). Replace or self‑host if needed.
- No build step required — just static files.

Contact
If you want me to adapt this template (custom branding, animations, CMS), tell me what you'd like changed.
