# Codebase Map

## Overview

This is a Next.js 13 portfolio site using the `pages` router, React, TypeScript, Tailwind CSS, Framer Motion, and static assets from `public/`.

## App Entry Points

- `pages/index.tsx` composes the single-page portfolio sections: header, hero, about, skills, projects, experience, contact, and footer.
- `pages/_app.tsx` loads global styles and wraps all pages.
- `pages/_document.tsx` customizes the HTML document shell.
- `pages/api/hello.ts` is the default sample API route.

## Components

- `components/Header.tsx` renders social profile links and the "Get In Touch" contact shortcut.
- `components/Hero.tsx` renders the first viewport, animated portrait, role label, typewriter text, and section navigation buttons.
- `components/About.tsx` renders the portrait and biography paragraph.
- `components/Skills.tsx` owns the `skillList` data and renders each skill through `components/Skill.tsx`.
- `components/Projects.tsx` owns the 12-project `projectsList` data and renders the horizontally scrolling project showcase.
- `components/WorkExperience.tsx` owns the experience data and renders cards through `components/ExperienceCard.tsx`.
- `components/ContactMe.tsx` renders contact details and the mailto-backed contact form.
- `components/BackgroundCircles.tsx` renders the animated hero background treatment.

## Static Assets

- `public/project_thumbnails/` contains GIF previews for the project carousel.
- `public/skills/` contains skill icons used by `components/Skills.tsx`.
- `public/experiences/` contains employer and project logos used by `components/WorkExperience.tsx`.
- `public/portraitFull.png`, `public/portraitFull.jpg`, and `public/portrait-circle-50.png` are portrait assets used by hero/about sections.

## Styling

- `styles/globals.css` contains Tailwind base imports and shared custom classes such as `heroButton` and `contactInput`.
- `tailwind.config.js` defines Tailwind content paths, custom screen names, and plugins.

## Content Update Notes

- Portfolio section copy is stored directly in component files rather than a CMS or data folder.
- Text-only updates usually live in `components/Hero.tsx`, `components/About.tsx`, `components/Skills.tsx`, `components/Projects.tsx`, and `components/WorkExperience.tsx`.
