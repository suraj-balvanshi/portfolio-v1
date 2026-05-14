# Portfolio Website V1

My first ever portfolio website. Connect with me if you have a job opportunities for me. Leave critcs for my digital home if you have any. Thanks for coming.

A multi-page portfolio website built with React, TypeScript, and Tailwind CSS. Currently under active development.

## Project Overview

This portfolio serves as a personal website to showcase projects, blog posts, and professional information. The project is designed with using shadcn/ui components.

## Features

- **Multi-page Architecture** - Home, blog, and project showcase pages
- **Responsive Design** - Thanks to Tailwind CSS
- **Modern UI Components** - Built with shadcn/ui and Radix UI primitives
- **Type-safe Development** - Full TypeScript implementation
- **SEO-Ready Structure** - Prepared for React Helmet integration

## Current Tech Stack

- **Vite** - Build tool and development server
- **React 19** - UI framework
- **TypeScript** - Type safety and developer experience
- **Tailwind CSS 4** - Styling and layout
- **shadcn/ui** - Component library (installation pending component setup)
- **Radix UI** - Accessible primitive components
- **ESint** - Code linting

## Planned Integrations

- **React Router** - Client-side routing for multi-page navigation
- **i18next** - Internationalization and localization
- **Zod** - Schema validation
- **Zustand** - Global state management
- **TanStack Query** - Server state and data fetching
- **Supabase** - Backend database and authentication
- **React Helmet** - Dynamic SEO metadata

## Project Structure

```
portfolio-v1/
├── src/
│   ├── assets/          # Static assets (images, icons)
│   ├── lib/             # Utility functions
│   ├── App.tsx          # Root application component
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

- Implement blog
- Add project showcase with filtering
- Integrate blog comments system
- Add admin/content management features
- Implement user authentication
- Add internationalization support

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
- Supabase backend integration is pending implementation
- Zustand and TanStack Query are planned for state management architecture
- Current project phase: Early development with only initial/early stage/foundation setup
