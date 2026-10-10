# Exact yellow action theme and alignment — 2026-10-10

Prior video milestone was already fully committed at 92e40f86818dbc0615ae9484d3d7581227221f9f. No missing relevant files, so no empty pre-change commit.

Claude Code used existing claude.ai login and actual claude-sonnet-5-5 at medium effort for both implementation and the user's alignment feedback. Sessions: 9121f86f-322e-45b0-b62b-1bd28dfb35a5 and 0b8cc936-4267-4ccd-8995-684734c1c373. No fallback, purchase, reset or settings changes. Codex independently reviewed CSS, measured computed colors/contrast and reviewed actual screenshot pixels.

## Final treatment

Exact action-fill token #F8F676 in both themes. Light uses deep ink #171b18 over yellow; dark uses #20231f. Contrast ratios are 15.28:1 and 13.95:1. Yellow buttons have ink boundaries and hover/active states. Links, case notes, captions, heading emphasis, experience roles and resume subtitle use readable #4f4d00 on light (7.98:1 for small text against the page background), exact yellow on dark. Focus uses a two-tone ink/yellow ring. Disabled styles are muted/dashed; current markup does not use disabled actions. Text selection uses yellow with deep ink.

User supplied light/dark screenshots were materialized to the Mac, verified and viewed. Their misaligned generic highlight band was removed completely; no generic gradient remains on em or punctuation. Logo punctuation is a separate 7px yellow circle, aligned to the text baseline, with a subtle ink ring on light only. Accent text now follows each element's natural type alignment.

Independent pixel review also caught a mobile dark video-label paint issue. Final deep-ink tokens differ across themes and the overlay has explicit stacking above video; final screenshots verify both text and play icon. Temporary compositor/color-scheme experiments were removed. JS, video playback logic and all project assets are unchanged.

## Checks

Node 24.12.0 / pnpm 10.28.2: typecheck, lint, all 3 existing tests and production build passed. The pre-existing module-type test warning remains non-fatal.

Real Chrome matrix: 1440x1000 desktop and 390x844 phone, each light/dark. Exact fill verified by computed RGB (248,246,118), readable button/link/summary contrast, hover/active styling, visible keyboard focus, mobile menu open/Escape close, no horizontal overflow. Each of the 3 selected recordings advances currentTime on its first actual mouse click in all 4 cases (12 checks). No unexpected resource failures or runtime exceptions. Raw evidence: color/interaction-contrast-results.json.

Pixel screenshots reviewed across both themes and viewports: header/logo/hero/caption, main CTA, section emphasis, selected-work players and case notes, archive players/links, about, experience roles, capabilities/contact/footer and resume subtitle/print button. Additional mobile menu keyboard-focus and intentionally blocked video retry states were captured/reviewed. Retry succeeded after removing the block; screenshots showing an error are intentional negative tests. See color/*.jpg. Disabled styles were inspected by temporarily applying disabled to test DOM buttons, then restoring state. No physical device testing was performed.

Only local commit is authorized for this task: no push, main merge or production deployment. User untracked files are excluded. The visible Terminal dev preview is http://127.0.0.1:3000/ from the Codex portfolio checkout; keep its Terminal window open.
