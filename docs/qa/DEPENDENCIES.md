# Dependency migration

Next 13.2.4 → 16.3.8, verified against the npm registry and official Next release/security guidance on 2026-10-02. Pages Router remains; no speculative routing rewrite. React/DOM → 19.3.0 with matching types, TypeScript → 5.9.3. Next's required moduleResolution=bundler and jsx=react-jsx migration applied. Production build uses webpack explicitly for a stable existing-project build path.

ESLint CLI replaces next lint; native Next flat configs replace legacy .eslintrc. ESLint 10.11 was tested but React/import/a11y plugins reject its removed API, so compatible 9.39.2 is retained deliberately despite its registry deprecation. Framework config/plugins are current. This is a tooling compatibility limitation, not a silent failed migration.

Removed Framer Motion, typewriter, social icons, React Hook Form, Tailwind and scrollbar plugin: new UI uses purposeful CSS motion, consistent Heroicons, native disclosures and direct contact. Retained only React, Next, Heroicons in runtime dependencies. All dependencies pinned; pnpm 10.28.2 and lockfile retained.

Official sources: https://nextjs.org/blog and https://nextjs.org/docs/app/guides/upgrading/version-16 . No paid APIs or usage resets used.
