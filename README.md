# Portfolio

Next.js 14 (App Router, static export) + TypeScript (strict) + SCSS (BEM) + Framer Motion.
Deployed to GitHub Pages. The ATS CV is generated from the same data as the site.

## Architecture

```
src/
  app/                 Next.js routes, layout, global tokens
  components/          Atomic Design
    atoms/             Button, Chip, SectionTitle
    molecules/         Section, TimelineEntry, ProjectItem, SkillGroup
    organisms/         Header, Hero, ProjectList, *Section, Footer
    templates/         HomeTemplate (page composition, no data fetching)
  features/cv/         cvModel (pure data -> document model) + renderCv (pdfkit)
  data/profile.ts      Single source of truth (typed)
  types/profile.ts     Domain types
  styles/              SCSS: abstracts (variables, mixins), base, one partial per component
  config/ lib/ hooks/  Site constants, pure utilities, reusable hooks
scripts/generate-cv.ts Build step that writes public/cv.pdf
```

Rules: data flows top-down via props; only Hero, ProjectList and ProjectItem are client components;
styling is SCSS partials with BEM class names, one partial per component under `src/styles/components`; imports use the `@/` alias and barrel files per layer.

## Scripts

`npm run dev` · `build` · `lint` · `typecheck` · `test` · `format` · `cv`

## Deploy

1. Edit `src/data/profile.ts`.
2. Push to `main`. In GitHub: Settings > Pages > Source: **GitHub Actions**.
3. The workflow runs lint, typecheck and tests on every push/PR, and deploys only from `main`.
   It sets the base path automatically for project repos.
