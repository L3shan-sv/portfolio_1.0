# Leshan Favor — Portfolio

A TypeScript + React + Tailwind CSS rewrite of the portfolio site.

## Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS v3** for styling
- **Vite** for bundling and dev server
- **DM Sans / DM Mono / Fraunces** fonts via Google Fonts

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Fixed top navigation
│   ├── Hero.tsx            # Hero section with typewriter + terminal
│   ├── Terminal.tsx        # Animated terminal widget
│   ├── ProjectsSection.tsx # 3-column project grid
│   ├── ProjectModal.tsx    # Project detail modal (3 tabs + lightbox)
│   ├── ToolsSection.tsx    # Tech stack chip groups
│   ├── ResumeSection.tsx   # Experience + education
│   ├── CertsSection.tsx    # Certifications grid
│   ├── CertModal.tsx       # Cert detail modal
│   ├── Footer.tsx          # Site footer
│   └── Reveal.tsx          # Scroll-triggered reveal wrapper
├── data/
│   ├── projects.ts         # All 6 project definitions
│   ├── certs.ts            # 4 certifications
│   └── tools.ts            # 14 tool groups / ~100 tools
├── hooks/
│   ├── useInView.ts        # IntersectionObserver hook
│   └── useTypewriter.ts    # Typewriter animation hook
├── types.ts                # Shared TypeScript interfaces
├── App.tsx                 # Root component
├── main.tsx                # React entry point
└── index.css               # Global styles + Tailwind directives
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customisation

### Update your email
Search for `leshanfavor@gmail.com` in `Hero.tsx` and `Footer.tsx`.

### Add/Edit projects
Edit `src/data/projects.ts` — each project has:
- `icon`, `cat`, `title`, `github`
- `purpose`, `desc`, `features[]`, `stack[]`
- `docs.arch`, `docs.setup[]`, `docs.codeLabel`, `docs.code` (HTML string with syntax spans)
- `images[]` with `src` and `caption`

### Add/Edit certifications
Edit `src/data/certs.ts`.

### Add/Edit tools
Edit `src/data/tools.ts` — each group has a `label` and `tools[]` array.

### CV download link
In `ResumeSection.tsx`, replace the `alert(...)` with `window.open('YOUR_CV_URL')`.

### Color palette
All colors are defined in `tailwind.config.js` under `theme.extend.colors` and map to CSS variable equivalents used across components.
