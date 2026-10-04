# Bassel Elbahnasy — Portfolio

Personal portfolio website, live at **https://bassel1000.github.io**

Built with React 19, TypeScript, Vite, Tailwind CSS and Framer Motion. Deployed to GitHub Pages with GitHub Actions (see `.github/workflows/deploy.yml`).

## Sections

- Hero + About
- **Phoenix** — featured graduation project (autonomous fire-detection & suppression robot)
- Selected projects (ML, hardware, data engineering, systems)
- Experience timeline
- Education, skills & certifications
- Contact & links (GitHub, Kaggle, Credly, LinkedIn, Upwork)

## Local development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build   # outputs to dist/
```

## How the photos work

Binary images are stored as base64 text in `assets-src/` so the repository stays text-only. The CI workflow decodes them into `src/assets/` before building. To replace a photo, either:

1. Update the corresponding `.b64` file (base64 of a WebP image), or
2. Commit real image files to `src/assets/` (e.g. `hero.webp`, `about.webp`) and delete the "Decode photo assets" step from the workflow.

## The CV / résumé download

The downloadable CV is served straight from the site root:

- File: **`public/Bassel_Elbahnasy_CV.pdf`** → published as `/Bassel_Elbahnasy_CV.pdf`
- Metadata (link, filename, label, size caption): the `cv` export in `src/data/content.ts`
- Download buttons/links: Hero, top nav (desktop + mobile drawer), and Contact

**To update the CV:** replace `public/Bassel_Elbahnasy_CV.pdf` with the new PDF (keep the same
filename so every existing link keeps working) and update `cv.detail` in `src/data/content.ts`
if the file size changed. Nothing else needs editing.

## Editing content

All text content (projects, experience, certifications, links, emails) lives in **`src/data/content.ts`** — edit that one file and push; the site rebuilds and redeploys automatically on every push to `main`.
