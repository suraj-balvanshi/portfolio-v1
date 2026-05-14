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
├── assets/           # Static images and icons
├── lib/              # Utility functions (utils.ts with cn helper)
├── App.tsx           # Root component
├── App.css           # Component styles
├── main.tsx          # Entry point
└── index.css         # Global styles + Tailwind directives
```

### Styling Strategy

- Tailwind CSS 4 for utility-first styling
- shadcn/ui components scaffolded but not yet configured
- Radix UI primitives available as peer dependency

### Build & Dev Commands

```
npm run dev      # Start Vite dev server
npm run build    # TypeScript + Vite production build
npm run lint     # ESLint check
npm run preview # Preview production build
```

---

## Planned Architecture

### Routing Architecture

**Technology**: React Router v7

```
src/
├── pages/           # Route page components
│   ├── Home.tsx
│   ├── Blog.tsx
│   ├── BlogPost.tsx
│   └── Projects.tsx
├── components/      # Reusable UI components
├── layouts/         # Page layout wrappers
└── App.tsx          # Router configuration
```

Routes planned:

- `/` - Home page
- `/blog` - Blog listing
- `/blog/:slug` - Individual blog post
- `/projects` - Project showcase

### State Management

**Technology**: Zustand + TanStack Query

- **Zustand** - Global client state (theme, user preferences, UI state)
- **TanStack Query** - Server state (blog posts, project data, comments)

```
src/
├── stores/          # Zustand stores
│   └── useAppStore.ts
├── hooks/           # TanStack Query hooks
│   ├── usePosts.ts
│   └── useProjects.ts
└── api/             # API client functions
    └── supabase.ts
```

### Supabase Integration

**Technology**: Supabase (pending)

```
src/
├── lib/
│   └── supabase.ts  # Supabase client initialization
├── api/             # Database operations
│   ├── posts.ts     # Blog post CRUD
│   ├── projects.ts  # Project CRUD
│   └── comments.ts  # Blog comments
└── types/           # Generated database types
```

Planned tables:

- `posts` - Blog posts with markdown content
- `projects` - Project showcase entries
- `comments` - Blog post comments with user auth

### Component Organization

```
src/
├── components/
│   ├── ui/          # shadcn/ui base components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── layout/      # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── features/   # Feature-specific components
│   │   ├── blog/
│   │   └── projects/
│   └── shared/      # Cross-cutting components
└── App.tsx
```

**Pattern**:

- `ui/` - Primitive components from shadcn/ui
- `layout/` - Structural components (header, footer, navigation)
- `features/` - Domain-specific components organized by feature
- `shared/` - Cross-cutting components (SEO Helmet, loading states)

### shadcn/ui Usage

Components will be installed via CLI:

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
