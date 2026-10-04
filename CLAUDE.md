# CLAUDE.md

Rahul Gowda R's personal portfolio: a single-page React + TypeScript site built with Vite and deployed to GitHub Pages at https://rahul-gowda-r.github.io/Rahul-Portfolio/.

## Commands

- `npm run dev` starts the dev server at http://localhost:3000/Rahul-Portfolio/ and opens a browser.
- `npm run typecheck` runs `tsc` in strict mode.
- `npm run build` builds the site into `dist/`.
- There are no tests or linter. Run `typecheck` and `build` after every change.

## Deployment

- Pushing to `main` runs `.github/workflows/main.yml`, which builds the site and deploys `dist/` through GitHub Actions Pages. This is the only deploy path.
- `dist/` is gitignored, because CI builds it fresh. Never commit it.
- A `gh-pages` branch still exists on the remote from an older deploy method. It is unused.

## Layout

- **Content lives in `src/data.tsx`**: profile, socials, stats, focus areas, tech stack, projects, experiences, education, certifications, activities, and the nav section list. Content comes from Rahul's resume, LinkedIn and GitHub; don't invent claims. Edit content there, not in the JSX.
- **`src/sections/`** has one component per page section, in order: `Hero` (`#top`), `About` (`#about`), `Skills` (`#skills`: focus areas plus the tech-stack table), `Projects` (`#projects`), `Experience` (`#experience`), `Education` (`#education`: degrees, certifications, activities), `Contact` (`#contact`), and `Footer`. `App.tsx` only composes them.
- **Design system:** `src/components/styles.ts` holds the shared class strings (`btnPrimary`, `btnSecondary`, `card`, `chip`, `iconTile`, ...), and `SectionHeader` renders each section's numbered eyebrow and title. Use them instead of one-off styles. The palette is a near-black page (`#05070d`), slate text, `white/10` borders and one cyan accent. Fonts are Inter (`font-sans`) and Space Grotesk (`font-display`, for headings), self-hosted with `@fontsource` and imported in `main.tsx`.
- `src/components/Background.tsx` is one fixed backdrop for the whole page (static glows, `StarField`, `ShootingStars`). Don't add star fields to individual sections.
- `src/components/Navbar.tsx` is the fixed top bar. It highlights the section on screen and has a mobile menu. Its links come from `navSections` in `data.tsx`, which must match the section `id`s.
- `src/components/ExperienceTimeline.tsx` renders `experiences` (type `Job`): one card per company, most recent first, with a nested list when a company has several roles. Dates are `'YYYY-MM'` strings; leave `end` out for a current role. Durations are calculated LinkedIn-style, counting the first and last month (Aug–Oct = 3 mos), so 'Present' roles stay up to date.
- `src/components/reveal.ts` exports the shared `reveal()` entrance animation.
- `src/components/ContactForm.tsx` owns the form state, so typing re-renders only the form.
- `src/components/cosmic/` holds `StarField`, `ShootingStars` and the `useLoopingAnimations` hook they share.
- `src/components/ui/` holds the only shadcn pieces still used: `input`, `textarea` and `utils`. `index.html` sets `class="dark"`, so their theme tokens use the dark set.
- `src/components/figma/ImageWithFallback.tsx` is an `<img>` that shows a placeholder if the image fails to load.
- `public/` holds static files (`resume.pdf`, `favicon.svg`). They are served under the base path, for example `/Rahul-Portfolio/resume.pdf`.
- `src/index.css` is the CSS entry point. It imports Tailwind and `src/styles/globals.css`, which holds the theme tokens, base styles and the site's custom CSS.

## Performance rules

These come from profiling idle and scrolling in Chrome, on desktop and on a throttled phone. Following them took idle main-thread time from ~100% to ~3%, and first-scroll late frames from ~50 to ~10.

- **Don't loop CSS `@keyframes` on many elements.** React listens for `animationiteration` at the document root, and any such listener makes Chrome run looping CSS animations on the main thread every frame. For many looping elements, use `element.animate()` through `useLoopingAnimations`. A few Tailwind `animate-*` decorations are fine.
- **Keep the number of animated elements low.** Even GPU animations get a style update on every scroll frame. `StarField` draws its stars once into 3 SVG layers and twinkles the layers; don't go back to one animated element per star.
- **No scroll listeners that read layout.** Reading `window.scrollY` or `getBoundingClientRect()` in a scroll handler forces pending style work mid-scroll. Use an IntersectionObserver instead, as the navbar's `topMarker` does.
- **Entrance animations use `reveal()` from `src/components/reveal.ts`.** It animates `opacity` plus one `transform` string, which Motion runs on the compositor. Don't use Motion's `x`/`y`/`scale`/`rotateX` shorthands or 3D perspective for entrances, because those update styles from JavaScript every frame.
- **Hover effects are CSS**, not `whileHover`: `hover:-translate-y-*`, `hover:scale-*` and `hover:rotate-*` with `transition-transform`. They use the separate `translate`/`scale`/`rotate` properties, so they compose with `reveal()`'s inline `transform`.
- **No `backdrop-blur`.** Re-blurring what's behind an element on every scroll frame was a major GPU cost, and it was barely visible on this dark design. Use a more opaque background instead.
- **Don't use Motion (`motion.div`) for infinite animations.** It runs in JavaScript every frame.
- **Keep random values stable.** Generate them in a `useState` initializer, and wrap background components in `memo`, so re-renders don't reshuffle them.
- **Off-screen pausing:** `App` sets `data-offscreen` on sections that aren't visible, and `globals.css` pauses their CSS animations. `useLoopingAnimations` pauses its own animations the same way.
- **Respect reduced motion.** Under `prefers-reduced-motion`, `useLoopingAnimations` doesn't start the star twinkle, and `globals.css` hides shooting stars and stops `animate-*` classes.

## Resume

- `public/resume.pdf` is generated from `resume/resume.html`. Run `npm run resume` after editing it; headless Chrome prints it at A4 with the bundled Latin Modern fonts (`resume/fonts/`), so it keeps the original LaTeX look.
- Keep the resume's section order and style: Professional Summary, Education, Experience, Projects, Technical Skills, and Certifications & Leadership.
- Keep the resume consistent with `src/data.tsx`. Its projects (ITSM Hub, SiteSculptor) come from Rahul's resume, not GitHub.
- Don't add soft hyphens or CSS hyphenation. Chrome splits hyphenated words in the PDF's text layer ("Se cu ri ty"), which breaks résumé scanners. Check with `pdftotext public/resume.pdf -` after changes.
- Tailwind skips `resume/` (`@source not` in `src/index.css`).

## Gotchas

- **Base path.** `vite.config.ts` sets `base: "/Rahul-Portfolio/"`. Hard-coded asset links in JSX must include that prefix (for example `/Rahul-Portfolio/resume.pdf`). In `index.html`, use a root path such as `/favicon.svg` and Vite adds the prefix.
- **Navbar scrolling.** Links scroll through `goTo()` in code, not the browser's anchor jump. On mobile the scroll waits for the menu's close animation to finish (`onExitComplete`), because that animation cancels any smooth scroll started while it runs.
- **Tailwind CSS v4** runs through the `@tailwindcss/vite` plugin and generates classes from the source files, so any standard utility class works. Custom CSS in `globals.css` is unlayered, so it beats Tailwind utilities without `!important`.
- **Animation:** import from `motion/react`, not `framer-motion`.
- **Contact form email.** `ContactForm.tsx` posts to FormSubmit's AJAX endpoint (`https://formsubmit.co/ajax/<address>`), which emails each message to `rrahulgowda733@gmail.com`. There's no backend: GitHub Pages is static. FormSubmit needs a one-time activation (it emails the address after the first real submission). After that, the address in `CONTACT_EMAIL` can be swapped for the random alias FormSubmit provides. A hidden `_honey` field filters out bots. Don't test against the real endpoint casually, since every successful request sends Rahul an email. Intercept the request instead.
- **External links** open in a new tab with `rel="noopener noreferrer"`. Icon-only links need an `aria-label`.

## Projects section

- The order of `projects` in `data.tsx` matters: the first `FEATURED_PROJECTS` (6) show under "All", and the rest after "View more". Put the strongest first.
- Each project has `areas` (`ai`, `mobile`, `web`) for the filter tabs and `tags` for its tech chips. A filter always shows every match; "View more" only applies to "All".
- Projects link to public repos under `github.com/Rahul-Gowda-R`; leave out `link` when there's no public repo (Shopeeva). Before adding or changing one, check that the link works (`curl -s -o /dev/null -w "%{http_code}"`); repos have been renamed or deleted before.
- Build images with the `unsplash(id)` helper, and give every project a distinct image. Check that an image URL returns 200 and that the picture fits the project.
- The profile README, this portfolio repo and `Python---File-Handling` are intentionally left out.
- **Skills:** every focus area names the projects or roles behind it, and every `techStack` item should be backed by a project or role. Don't add skill percentages.
