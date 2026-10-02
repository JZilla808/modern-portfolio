# Codebase map

Pages Router Next.js portfolio, TypeScript, React. Single page with a print-friendly engineering resume.

- pages/index.tsx: SEO/social metadata and portfolio composition.
- pages/resume.tsx: verified engineering resume, browser print/save as PDF.
- pages/_document.tsx: language and pre-paint persisted/system theme initialization.
- components/PortfolioHeader.tsx: desktop/mobile navigation, theme switch, shared SVG arrow.
- components/SelectedWork.tsx: selected projects, native case-note/demo disclosures, nine-project archive.
- components/PortfolioAbout.tsx: about, vertical employment timeline and capability groups.
- data/portfolio.ts: substantiated project and employment content; user-verified dates override old CVs.
- styles/globals.css: theme tokens, self-hosted typography, responsive layouts, focus, reduced-motion and print rules.
- public/project_stills: optimized stills extracted from real recorded demos, no fabricated screenshots.
- public/project_thumbnails: original recordings, only loaded on explicit playback.
- public/fonts: DM Sans and DM Serif Display with SIL OFL licenses.
- docs/qa: audit, migration and final verification evidence.

Legacy components remain temporarily archived in Git history as the new implementation is verified. Public employer logos and older assets are preserved.
