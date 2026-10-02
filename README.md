# Jay Zhou — recruiting portfolio

Next.js Pages Router / React / TypeScript portfolio with paper and ink themes, selected work, accessible native case notes, opt-in recorded demos, project archive and a printable engineering resume.

## Local development

Use Node 24 (`.nvmrc`) and pnpm 10.28.2 (pinned packageManager).

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm typecheck
pnpm lint
pnpm test
pnpm build
pnpm start
```

Production deployments need Node 24. No keys or provider accounts required. This overhaul has not been pushed or deployed.

Content: `data/portfolio.ts`; layout/styles: `components/Portfolio*`, `components/SelectedWork.tsx`, `styles/globals.css`. See `docs/CODEBASE_MAP.md`, `docs/DESIGN.md` and `docs/qa/` for design, content provenance, dependency decisions and verification.

The portrait and project videos come from the original portfolio. Stills were extracted from those videos. Google Fonts are self-hosted with SIL OFL licenses. Recordings preserve historical work when live deployments are unavailable. The resume uses verified employment dates and deliberately excludes unverified metrics and certifications.
