# Peace Kalamya Portfolio

Personal bilingual portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and `next-intl`.

## Highlights

- Locale-based routes: `/en` and `/de`
- Root redirect: `/` -> `/en`
- Bilingual UI with `next-intl`
- Data-driven sections (projects, profile, skills, experience, leadership, build log)
- Progressive disclosure UI for dense sections (`Show more` / `More details`)
- Brown + baby-pink design theme with CSS variables
- Production-ready build for Vercel

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- next-intl
- Framer Motion
- Lucide React

## Getting Started

### 1) Prerequisites

- Node.js 22+ (24 is also fine)
- npm

### 2) Install dependencies

```bash
npm install
```

### 3) Run development server

```bash
npm run dev
```

Open:

- `http://localhost:3000/en`
- `http://localhost:3000/de`

### 4) Production build

```bash
npm run build
npm run start
```

## Scripts

- `npm run dev` - starts dev server (configured with webpack fallback)
- `npm run build` - production build
- `npm run start` - run production server
- `npm run lint` - lint

## Project Structure

```text
app/
  [locale]/
    layout.tsx
    page.tsx
    projects/page.tsx
components/
data/
i18n/
messages/
public/
proxy.ts
```

## Internationalization (EN/DE)

- Messages:
  - `messages/en.json`
  - `messages/de.json`
- Routing config:
  - `i18n/routing.ts`
  - `i18n/request.ts`
  - `i18n/navigation.ts`
- Proxy redirect and locale matcher:
  - `proxy.ts`

## Content Editing Guide

### Main profile content

- `data/profile.ts`
  - Hero meta text
  - About text
  - Now panel
  - Contact details

### Projects

- `data/projects.ts`
  - Featured and regular projects
  - Bilingual titles/summaries/bullets
  - Tags and optional links

### Build Log

- `data/buildLog.ts`
  - Add newest entries at the top
  - Keep summaries short and factual

### Experience / Leadership / Skills

- `data/experience.ts`
- `data/leadership.ts`
- `data/skills.ts`

### CV Download

Put the PDF file here:

- `public/Peace-Kalamya-Tabulated-CV2.pdf`

The navbar and hero buttons already point to this path.

## Design Theme

Theme variables live in `app/globals.css`:

- `--bg`
- `--surface`
- `--text`
- `--muted`
- `--primary`
- `--accent`
- `--accent2`
- `--border`

Tailwind color aliases are mapped in `tailwind.config.ts`.

## Deployment (Vercel)

1. Push repository to GitHub.
2. Import repo into Vercel.
3. Framework preset: Next.js (auto-detected).
4. Build command: `npm run build`
5. Output: default Next.js output

No special env vars required for current setup.

## Troubleshooting

### PowerShell blocks npm (`npm.ps1` policy error)

Use:

```powershell
npm.cmd run dev
```

Or set execution policy for your user:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

### Port already in use

```bash
npm run dev -- --port 3001
```

### Turbopack runtime issues on Windows

Project already uses webpack fallback in dev script.

## Notes

- Keep project cards concise and employer/professor focused.
- Add Build Log entries for meaningful updates (features, content, UX changes).
- Prefer real projects and clear trade-offs over inflated claims.
