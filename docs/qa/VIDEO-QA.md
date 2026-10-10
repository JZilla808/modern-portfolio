# Inline recorded demos — 2026-10-10

## Implementation and review

Claude Code implemented the frontend using the existing claude.ai Pro login, model `claude-sonnet-5-5`, medium effort, session `dc1db516-a6fc-4ac2-b595-3aafdd60184f`. No fallback, purchase, quota reset, dependency installation or settings changes. Codex reviewed the implementation and performed the checks below.

All 12 existing recordings (3 selected, 9 archive) now use a permanently mounted inline video with native controls, playsInline and preload=none. A prominent semantic button calls play() directly from the first user gesture. Nothing autoplays. Posters reserve the existing 16:10 composition. The old disclosure and redundant recording links are removed; case notes, project descriptions and original deployment/game links remain. Archive players appear when the existing archive is opened. Loading/error statuses and retry operate on the same element.

The existing untracked `node_modules 2` dependency copy made TypeScript scan old third-party sources and initially blocked typecheck/build. Added only that directory to tsconfig exclusions; its files were not modified. Untracked AGENTS.md and CLAUDE.md were retained.

## Verification

Checks ran with installed Node 24.12.0 and pnpm 10.28.2: typecheck, lint, all 3 existing tests and production webpack build passed. Existing Node module-type warning remains in the theme test; it does not fail the tests.

Real local Google Chrome, not a DOM-only playback assertion: CDP dispatched real mouse clicks to every play button, then checked currentTime progression. The 8-case matrix tested 1440x1000 desktop, 768x1024 tablet, 390x844 phone portrait and 844x390 phone landscape, each in light and dark. All 96 first clicks advanced playback; every clip paused and resumed; all players initially paused at zero, with controls/playsInline/preload=none. No horizontal overflow, runtime errors or unexpected resource failures. See video-playback-matrix.json.

Additional checks passed: Enter and Space start playback; actual Chrome native control buttons pause/resume; changing theme and opening case notes preserves the identical video element, increasing playback time and playing state. Intentionally blocking FlippyHop's MP4 produced the error/retry state; after unblocking, one retry resumed time progression. The resource failure in video-interaction-results.json is this intentional negative test. No runtime errors. Reduced motion yields 0s transition duration.

Visually inspected both desktop themes and phone portrait/landscape screenshots. Prominent play button is clear, player controls remain visible, project text/case notes stay intact. These are Chrome viewport simulations; physical iOS/Android devices were not tested.

Local dev remains in the visible Terminal window at http://127.0.0.1:3000/, running from the Codex portfolio checkout. Keep that Terminal window open. No main merge or production deployment was requested.
