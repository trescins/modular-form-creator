# Modular Form Creator

Frontend for a resource management application built as a recruitment task. Implements a module-based form workflow where resources move through a draft/completed lifecycle.

## Features

- Create and delete resources from a list view
- Track module completion progress (Basic Info + Project Details)
- Provision resources once both modules are complete
- Edit completed resources via a local buffer — changes are held in frontend state and persisted only on explicit submit
- Confirmation modal for destructive actions
- Client-side and server-side validation with inline error display

- ## Screenshots

  <img width="1440" height="679" alt="Zrzut ekranu 2026-06-14 o 08 45 47" src="https://github.com/user-attachments/assets/b2285293-133d-4223-b942-5061b2ad805e" />

  <img width="1440" height="685" alt="Zrzut ekranu 2026-06-14 o 08 45 58" src="https://github.com/user-attachments/assets/e224d179-9756-4be0-bb48-87c645c77423" />

  <img width="1440" height="682" alt="Zrzut ekranu 2026-06-14 o 08 46 06" src="https://github.com/user-attachments/assets/0b9c67ba-499b-47c9-8ba3-fb1ffb843327" />

  <img width="1434" height="680" alt="Zrzut ekranu 2026-06-14 o 08 46 14" src="https://github.com/user-attachments/assets/c5baf3a4-3e1d-43d8-a2d6-020ec1152116" />

<img width="1440" height="686" alt="Zrzut ekranu 2026-06-14 o 08 46 22" src="https://github.com/user-attachments/assets/35cd8e69-0915-4417-84fb-8261079a00ed" />

<img width="1440" height="684" alt="Zrzut ekranu 2026-06-14 o 08 46 31" src="https://github.com/user-attachments/assets/aab8e196-c2d3-4b75-9efd-56dd25c003ed" />

<img width="1438" height="685" alt="Zrzut ekranu 2026-06-14 o 08 46 41" src="https://github.com/user-attachments/assets/918ccc0b-ff0d-465f-a6e1-4e784405a99c" />

<img width="1439" height="684" alt="Zrzut ekranu 2026-06-14 o 08 48 05" src="https://github.com/user-attachments/assets/92bf7641-afb2-4ba6-9165-d042768b3a9d" />

<img width="1438" height="681" alt="Zrzut ekranu 2026-06-14 o 08 49 48" src="https://github.com/user-attachments/assets/b17ece79-3379-4bb9-93a0-de4a04e71f4a" />


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
