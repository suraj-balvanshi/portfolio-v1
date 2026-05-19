# Architecture Overview

This document describes the current and planned architecture for the portfolio website. It serves as a reference for myself and AI agents working on this project.

---

## Current Implementation

### Frontend Stack

- **Vite** - Build tool
- **React 19** - UI library with concurrent features
- **TypeScript** - Type safety (typescript ~6.0.2)
- **Tailwind CSS 4** - Styling via @tailwindcss/vite plugin

### Project Structure

```
src/
├── api/           # API functions (currently only author.ts)
│   └── author.ts
├── assets/           # Static images and icons
├── lib/              # Utility functions (utils.ts with cn helper, supabaseClient.ts)
├── store/            # Zustand stores (ui-store.ts)
├── types/            # TypeScript schemas and types
│   └── schema.ts
├── App.tsx           # Root component (with basic profile toggle and data fetching)
├── App.css           # Component styles
├── main.tsx          # Entry point
└── index.css         # Global styles + Tailwind directives
```

### Styling Strategy

- Tailwind CSS 4 for utility-first styling
- shadcn/ui components scaffolded but not yet configured (planned)
- Radix UI primitives available as peer dependency

### Build & Dev Commands

```
npm run dev      # Start Vite dev server
npm run build    # TypeScript + Vite production build
npm run lint     # ESLint check
npm run preview # Preview production build
```

### Current State Summary

The project currently implements a basic setup with:
- Vite, React 19, TypeScript, Tailwind CSS 4
- A simple Zustand store for UI state (profile visibility)
- TanStack Query for data fetching (author profile from Supabase)
- Supabase client configured (but only the 'website_author' table is used)
- No routing implemented (single page application)
- No shadcn/ui components integrated yet
- No blog, project, or comment features

---

## Planned Architecture

### Routing Architecture

**Technology**: React Router v7 (pending - not yet implemented)

```
src/
├── pages/           # Route page components (to be created)
│   ├── Home.tsx
│   ├── Blog.tsx
│   ├── BlogPost.tsx
│   └── Projects.tsx
├── components/      # Reusable UI components
├── layouts/         # Page layout wrappers (to be created)
└── App.tsx          # Router configuration (to be updated)
```

Routes planned:

- `/` - Home page
- `/blog` - Blog listing
- `/blog/:slug` - Individual blog post
- `/projects` - Project showcase

### State Management

**Technology**: Zustand + TanStack Query (partially implemented - Zustand store for UI, TanStack Query for data fetching)

- **Zustand** - Global client state (theme, user preferences, UI state) - implemented basic UI store
- **TanStack Query** - Server state (blog posts, project data, comments) - implemented for author data fetching

```
src/
├── stores/          # Zustand stores
│   └── useUIStore.ts (current - for UI state like profile visibility)
├── hooks/           # TanStack Query hooks (to be created for posts, projects)
│   ├── usePosts.ts
│   └── useProjects.ts
└── api/             # API client functions (partially implemented)
    ├── author.ts    # implemented
    ├── posts.ts     # to be created
    ├── projects.ts  # to be created
    └── comments.ts  # to be created
```

### Supabase Integration

**Technology**: Supabase (partially implemented - client configured, only author table used)

```
src/
├── lib/
│   └── supabase.ts  # Supabase client initialization (implemented)
├── api/             # Database operations
│   ├── posts.ts     # Blog post CRUD (to be created)
│   ├── projects.ts  # Project CRUD (to be created)
│   ├── comments.ts  # Blog comments (to be created)
│   └── author.ts    # implemented (for author profile)
└── types/           # Generated database types (to be generated)
```

Planned tables:

- `posts` - Blog posts with markdown content
- `projects` - Project showcase entries
- `comments` - Blog post comments with user auth

### Component Organization

```
src/
├── components/
│   ├── ui/          # shadcn/ui base components (not yet integrated)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── layout/      # Layout components (to be created)
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── features/   # Feature-specific components (to be created)
│   │   ├── blog/
│   │   └── projects/
│   └── shared/      # Cross-cutting components (to be created)
└── App.tsx
```

**Pattern**:

- `ui/` - Primitive components from shadcn/ui (planned)
- `layout/` - Structural components (header, footer, navigation) (planned)
- `features/` - Domain-specific components organized by feature (planned)
- `shared/` - Cross-cutting components (SEO Helmet, loading states) (planned)

### shadcn/ui Usage

Components will be installed via CLI (pending):

```bash
npx shadcn@latest add button
npx shadcn@latest add card
```

Each component maintained in `src/components/ui/` with:

- Component code
- Storybook stories (future)
- Tests (future)

### Styling Approach (Future)

- Tailwind CSS for all styling
- CSS variables for theming (shadcn/ui pattern)
- Dark/light mode via CSS custom properties
- Responsive design: mobile-first utility classes
- Animation: tw-animate-css for transitions

---

## Scalability Considerations

### Performance

- Code splitting per route (React Router future)
- Image optimization with lazy loading
- TanStack Query caching and deduplication

### SEO

- React Helmet for dynamic meta tags
- Semantic HTML structure
- Open Graph tags for social sharing

### Internationalization

- **Technology**: i18next

Structure:

```
src/
├── i18n/
│   ├── en.json      # English translations
│   └── hi.json      # Hindi translations
└── pages/           # Locale-aware routes
    ├── en/
    └── hi/
```

### Validation

- **Technology**: Zod

Used for:

- Form validation (contact, comments)
- API response schemas
- Environment variable validation

### Future Extensibility

- Admin panel routes (`/admin/*`)
- User authentication via Supabase Auth
- CMS-like content management
- Analytics integration

---

## Technology Roadmap

| Phase         | Technologies                      | Status   |
| ------------- | --------------------------------- | -------- |
| Foundation    | Vite, React, TypeScript, Tailwind | Complete |
| UI Components | shadcn/ui, Radix UI               | Partial  |
| Routing       | React Router                      | Pending  |
| State         | Zustand, TanStack Query           | Pending  |
| Backend       | Supabase                          | Pending  |
| i18n          | i18next                           | Pending  |
| SEO           | React Helmet                      | Pending  |
| Validation    | Zod                               | Pending  |

---

## Key Conventions

- Organize imports: external → internal → relative
- TypeScript strict mode enabled
- ESLint for code consistency
- Component files: named exports, PascalCase
- Utility files: named exports, camelCase
