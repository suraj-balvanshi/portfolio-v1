# Portfolio Website V1

My first ever portfolio website. Connect with me if you have a job opportunities for me. Leave critcs for my digital home if you have any. Thanks for coming.

A portfolio website built with React, TypeScript, and Tailwind CSS. Currently under active development with foundational setup completed.

## Project Overview

This portfolio serves as a personal website to showcase projects, blog posts, and professional information. The project is designed with using shadcn/ui components.

## Current Progress

### Implemented Features

- **Foundation Setup** - Vite, React 19, TypeScript, Tailwind CSS 4
- **State Management** - Basic Zustand store for UI state (profile visibility toggle)
- **Data Fetching** - TanStack Query integration for fetching author profile from Supabase
- **Backend Connection** - Supabase client configured (author table only)
- **Basic UI** - Simple profile display component with toggle functionality

### Features to Implement

- **Multi-page Architecture** - Home, blog, and project showcase pages (requires React Router)
- **Responsive Design** - Thanks to Tailwind CSS
- **Modern UI Components** - Built with shadcn/ui and Radix UI primitives
- **Type-safe Development** - Full TypeScript implementation
- **SEO-Ready Structure** - Prepared for React Helmet integration

## Current Tech Stack

- **Vite** - Build tool and development server
- **React 19** - UI framework
- **TypeScript** - Type safety and developer experience
- **Tailwind CSS 4** - Styling and layout
- **shadcn/ui** - Component library (pending integration)
- **Radix UI** - Accessible primitive components
- **ESLint** - Code linting
- **Zustand** - Global state management (basic UI store implemented)
- **TanStack Query** - Server state and data fetching (author data fetching implemented)
- **Supabase** - Backend database (client configured, author table only)

## Planned Integrations

- **React Router** - Client-side routing for multi-page navigation
- **i18next** - Internationalization and localization
- **Zod** - Schema validation
- **Supabase** - Full backend database and authentication (posts, projects, comments tables)
- **React Helmet** - Dynamic SEO metadata

## Project Structure

```
portfolio-v1/
├── src/
│   ├── api/           # API functions (author.ts implemented)
│   │   └── author.ts
│   ├── assets/          # Static assets (images, icons)
│   ├── lib/             # Utility functions (supabaseClient.ts, utils.ts)
│   │   ├── supabaseClient.ts
│   │   └── utils.ts
│   ├── store/           # Zustand stores (ui-store.ts)
│   │   └── ui-store.ts
│   ├── types/           # TypeScript schemas and types
│   │   └── schema.ts
│   ├── App.tsx          # Root application component (with profile toggle and data fetching)
│   ├── App.css          # Application styles
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles and Tailwind
├── public/
│   ├── favicon.svg      # Site favicon
│   └── icons.svg        # Icon sprites
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
├── eslint.config.js     # ESLint configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── components.json      # shadcn/ui components configuration
```

## Development Workflow

### Prerequisites

- Node.js 18+
- npm or pnpm

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Preview production build
npm run preview
```

### Code Quality

The project uses ESLint with TypeScript-aware linting rules to maintain code quality and consistency.

## Deployment

- **Platform**: Vercel
- **Domain**: Managed via Porkbun

## Future Plans

- Implement routing with React Router for multi-page navigation
- Add shadcn/ui components for modern UI
- Implement blog functionality
- Add project showcase with filtering
- Integrate blog comments system
- Add admin/content management features
- Implement user authentication
- Add internationalization support
- Complete Supabase integration for all planned tables (posts, projects, comments)

---

## AI Development Workflow

This project is developed with AI-assisted development practices:

- **VSCode** - Primary code editor and OpenCode Desktop
- **OpenCode** - AI coding assistant for interactive development
- **Multiple LLM providers** - Used throughout development process
- **MemPalace integration** - Planned for persistent repository memory and context retention

## AI Memory Test Context

- This repository is a portfolio website project built with React, TypeScript, Vite, and Tailwind CSS
- OpenCode is used as the primary AI-assisted development tool
- MemPalace integration is planned for persistent repository memory
- Supabase backend integration is partially implemented (client configured, author table only)
- Zustand and TanStack Query are partially implemented (UI store and data fetching for author)
- Current project phase: Foundation setup completed, ready for feature implementation
