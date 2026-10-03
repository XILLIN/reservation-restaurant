# Maison Ember

A responsive restaurant website and mock reservation experience built with Next.js App Router, TypeScript, Tailwind CSS, and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

## Routes

- `/` — restaurant homepage and quick reservation
- `/menu` — seasonal menu
- `/about` — restaurant story
- `/contact` — hours, location, and visit details
- `/reservations` — four-step reservation flow
- `/reservations/confirmation` — reservation request confirmation

Availability and seating are sample data in `data/restaurant.ts`. The flow is ready to be connected to a reservation API; the demo stores the submitted details in session storage only so the confirmation page can display them.

The UI direction and tokens are documented in `design-system/maison-ember/MASTER.md`.
