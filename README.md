# Maison Ember

Restaurant website and reservation system built with Next.js App Router, TypeScript, MongoDB/Mongoose, Better Auth, Tailwind CSS and next-intl. Customer account pages support Thai and English.

## Quick start with a local database

Requires Node.js 22.15+.

```bash
npm install
npm run dev:local
```

On the first run, this command creates `.env.local` with a random auth secret and starts a local MongoDB on `127.0.0.1:27018`. The MongoDB binary is downloaded on first use. Database files persist in `.local-data/mongodb`; shutting down the command does not delete member or reservation data. Local data, binaries and secrets are ignored by Git. This database is for local development and binds only to loopback.

Open `http://localhost:3000/th/register` to create a member account. Keep `dev:local` running and create your admin account in another terminal:

```bash
npm run create-admin
```

The script prompts for a name, email, phone and hidden password (12–128 characters). It does not create a shared or default admin password, and it refuses to promote an existing member by accident. Re-running for an existing admin leaves that account unchanged. Sign in at `/th/admin/login` or `/en/admin/login`. Admins edit their own details and password at `/th/account` or `/en/account`.

For non-interactive provisioning, supply `ADMIN_NAME`, `ADMIN_EMAIL`, `ADMIN_PHONE` and `ADMIN_PASSWORD` through the process environment. Avoid putting passwords in shell command history or committing them to a file. `ADMIN_PASSWORD` is used only by the provisioning script; it no longer grants access to the website.

## Use an existing MongoDB / deploy

Copy `.env.example` to `.env.local` and configure:

- `MONGODB_URI`: your MongoDB URI, including a database name. The account adapter creates indexes and requires permission to create them. Existing reservation/customer collections remain intact.
- `BETTER_AUTH_URL`: the exact origin serving the website, e.g. `http://localhost:3000` locally or your HTTPS domain in production.
- `BETTER_AUTH_SECRET`: a random secret of at least 32 characters. Generate one with `openssl rand -base64 32`.

Run `npm run dev` with an existing database, or `npm run build` followed by `npm start` for production. Configure the same variables in your hosting service. Use HTTPS in production so secure session cookies work. If deployed behind a proxy, ensure it overwrites client IP headers so authentication rate limits use reliable client addresses.

## Accounts and permissions

- Public registration always creates a `user`; browser requests cannot set or modify roles.
- Members can edit their name/phone, change their password with the current password, and view their own reservations. Email changes are disabled in this first version.
- Admins can access the existing restaurant dashboard and its reservation, table, customer and analytics APIs.
- Reservations require sign-in. A selected date/time/party size survives the login/register flow. Guest contact details are prefilled, while each reservation keeps its own contact snapshot.
- Sessions are stored in MongoDB and sent through HttpOnly cookies. Server guards validate live sessions and roles for protected pages and each API, without relying on cookie presence alone.
- Password changes revoke other sessions. Logout invalidates the current session. The legacy shared-key admin endpoint returns `410`.
- Public auth requests are rate limited; profile, password and reservation mutations also have per-account limits. Custom mutation routes check Origin and validate allowed fields.

## Routes

All pages have `/th` and `/en` prefixes.

| Route | Purpose |
| --- | --- |
| `/login`, `/register` | Member sign-in and registration |
| `/account` | Profile, password and logout |
| `/account/reservations` | Reservations belonging to the signed-in member |
| `/reservations` | Four-step booking flow |
| `/reservations/confirmation?ref=...` | Confirmation loaded from the member's saved reservation |
| `/admin/login` | Individual staff account sign-in |
| `/admin` and child pages | Restaurant management, admin only |

Auth endpoints are mounted at `/api/auth/*`. App endpoints include `GET/PATCH /api/account`, `POST /api/account/password`, `GET /api/account/reservations`, and the protected existing admin data APIs.

## Existing data

`Reservation.userId` is optional for historical reservations, and is required by the creation API for new reservations. Historical bookings remain visible to admins; they are not automatically assigned to a member based on an unverified email match. Profile edits do not rewrite reservation snapshots.

Customer lists calculate reservation statistics without deleting/re-inserting stored customers. Existing IDs, notes and contact records are preserved. Derived customers are returned for display without modifying the stored customer collection.

## Validation

```bash
npm run lint
npm run typecheck
npm test
npm run build
npx playwright install chromium
npm run test:e2e
```

Integration tests start a disposable MongoDB database and cover role injection, protected APIs, forged legacy cookies, profile restrictions, cross-origin requests, booking ownership, customer preservation, password changes, revoked sessions and authentication rate limits. Browser tests use the production build and a separate disposable database, provision a test admin, and exercise English desktop and Thai mobile flows. Tests never use `.env.local` or the live database. The MongoDB test binary is downloaded on first use. Browsers and test servers require local process/port access.

## Current scope

Email verification, forgotten-password emails, social login and guest booking are not included. Email/password registration and password changes while signed in are implemented. Availability slots and seating availability still use sample data in `data/restaurant.ts`; this work does not implement automatic allocation or prevent booking capacity conflicts.

The remaining npm audit advisory is in the development-only ESLint dependency chain (`braces`); compatible runtime dependency security updates have been applied. Do not downgrade ESLint's Next.js configuration to address it without checking compatibility.

Design tokens and visual direction are documented in `design-system/maison-ember/MASTER.md`.
