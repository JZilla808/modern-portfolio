# Remove accent glyph outlines — 2026-10-10

User requested removal of the outline accepted in 97202d2. Deleted the em stroke rule and unused accent-stroke tokens; corrected its stale CSS comment. Exact #F8F676 fill, existing compact ink label backgrounds, portrait caption, keyboard focus indicators, button borders, typography and layout remain unchanged. No new backgrounds or color changes.

Actual Claude Code Sonnet 5.5 medium implementation (session 1b080063-d63a-405f-a3d0-2a60ed924bc9), followed by Codex diff and screenshot review. Initial sandbox invocation could not access the existing login; authorized existing-login invocation succeeded. No purchase, reset or login settings change.

Typecheck, lint, three existing tests and production build passed. Actual Chrome six cases: desktop 1440×1000, portrait 390×844, landscape 844×390, each light/dark. Exact yellow glyph fill and zero stroke verified; keyboard focus, button hover/active, menu/Escape and no overflow passed. Existing three selected demos played on first click in every case (18 checks). Results contain no unexpected runtime/resource errors. Eight actual Chrome screenshots capture large and small text, desktop/mobile, light/dark; Codex visually reviewed all four hero frames and both mobile experience frames.

Readability tradeoff: plain #F8F676 against #F6F4EF measures only 1.04:1. It does not meet WCAG large-text contrast, and this is visible in the light-theme hero. The requested outline removal is retained; no compensating stroke, shadow or added backing was introduced. Existing small ink-backed labels retain high contrast. Physical-device testing was not performed. Existing test module-type warning is nonfatal.

Evidence: [no-outline/](no-outline/). Preview http://127.0.0.1:3000/. Local only, no push or deployment. Prior QA documents describe earlier snapshots and are preserved for history.
