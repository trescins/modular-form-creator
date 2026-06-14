# Modular Form Creator

Frontend for the Resources Management application. Allows creating, tracking and completing resources through a structured module workflow.

## Requirements

- Node.js 18+
- Docker (for the backend)

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
