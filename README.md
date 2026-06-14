# Modular Form Creator

Frontend for a resource management application built as a recruitment task. Implements a module-based form workflow where resources move through a draft/completed lifecycle.

## Features

- Create and delete resources from a list view
- Track module completion progress (Basic Info + Project Details)
- Provision resources once both modules are complete
- Edit completed resources via a local buffer — changes are held in frontend state and persisted only on explicit submit
- Confirmation modal for destructive actions
- Client-side and server-side validation with inline error display

## Tech stack

- **React 19** with TypeScript
- **React Router 7** — nested routes with Outlet context for shared resource state
- **React Query v5** — server state, cache invalidation on mutations
- **styled-components 6** — design system integration, per-component style files
- **Vitest + Testing Library** — unit tests

## Project structure

```
src/
├── app/              # Router
├── design-system/    # Provided UI component library (read-only)
├── shared/           # Cross-feature components (Loader, ErrorState)
└── features/
    └── resources/
        ├── api/       # Fetch client, API functions, DTOs
        ├── hooks/     # React Query hooks (one per operation)
        ├── model/     # TypeScript types and domain constants
        ├── utils/     # Business rules, validation, formatters
        ├── components/ # Reusable domain components (Layout, ModuleItem, Modal)
        └── pages/     # Route-level page components
```

## Getting started

**1. Start the backend**

```bash
docker compose up -d
```

Backend runs at `http://localhost:5001`. API docs at `http://localhost:5001/docs`.

**2. Install dependencies**

```bash
npm install
```

**3. Start the frontend**

```bash
npm run dev
```

App runs at `http://localhost:5173`.

## Running tests

```bash
npx vitest run --project unit
```

## Build

```bash
npm run build
```

## Environment variables

| Variable | Default | Description |
|---|---|---|
| `VITE_API_URL` | `http://localhost:5001` | Backend base URL |
