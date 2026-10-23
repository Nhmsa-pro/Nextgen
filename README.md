# NHMSA Nextgen

A bilingual, mobile-first Next.js foundation for the NEXTGEN Heavy Machinery & Skills Academy (NHMSA Somalia) project.

## Overview

This repository currently contains the UX baseline under `docs/ux/`, and this foundation adds the technical architecture and the minimal application shell needed for the next implementation phase.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase PostgreSQL, Auth, and Storage placeholders
- Vitest for the initial test setup
- Vercel-ready deployment structure

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```
3. Start the app in development mode:
   ```bash
   npm run dev
   ```
4. Open http://localhost:3000

## Available scripts

- `npm run dev` – local development server
- `npm run build` – production build
- `npm run start` – production server
- `npm run lint` – ESLint validation
- `npm run typecheck` – TypeScript type checking
- `npm run test` – test suite

## Important notes

- The project intentionally avoids fabricated academy facts and public claims.
- Placeholder content is identified as such and should be replaced only after owner approval.
- Actual Supabase project credentials and live database configuration must be added via environment variables and a verified project setup.
