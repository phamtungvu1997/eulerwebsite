# Euler Website

Modern React + Vite single-page application (SPA) with an Express email API.

## Prerequisites
- Node.js 18 or newer (recommended 20+)
- npm 9+

Verify versions:
```bash
node -v
npm -v
```

## 1) Clone and install
```bash
# Clone
git clone https://github.com/your-org/eulerwebsite.git
cd eulerwebsite

# Install dependencies
npm install
```

## 2) Configure environment variables
This project has two parts:
- The frontend (Vite/React) — no env needed for local dev
- The email API server (`server/index.js`) — requires SMTP and CORS config

Create a `.env` file at the project root based on `env.example`:
```bash
cp env.example .env
```
Then set values:
- `SERVER_PORT` — Port for the Express server (default `3001`)
- `ALLOW_ORIGIN` — Comma-separated allowed origins for CORS (e.g. `http://localhost:5173,http://localhost:3000`)
- `CONTACT_TO` — Destination email for contact messages (default `info@euler-digital.com`)
- `CONTACT_FROM` — From address (must be valid for your SMTP account)
- `SMTP_HOST` — SMTP server host
- `SMTP_PORT` — SMTP port (e.g. `587` or `465`)
- `SMTP_SECURE` — `true` if using port `465`, otherwise `false`
- `SMTP_USER` — SMTP username
- `SMTP_PASS` — SMTP password

## 3) Run locally (development)
Open two terminals.

Terminal A — run the frontend (Vite dev server):
```bash
npm run dev
```
By default Vite opens on `http://localhost:5173`.

Terminal B — run the email API server:
```bash
npm run server
```
Server starts on `http://localhost:3001`.

Ensure `ALLOW_ORIGIN` in `.env` includes the Vite origin (e.g. `http://localhost:5173`).

## 4) Build for production
```bash
npm run build
```
This outputs static assets to `dist/`:
- `dist/index.html`
- `dist/assets/*`

Preview the production build locally:
```bash
npm run preview
```

## 5) Deploy options
### Static hosting (SPA)
Deploy the entire `dist/` directory. Because this is an SPA using React Router, configure a rewrite so all routes serve `index.html`:
- Netlify: Single Page App redirect to `/index.html`
- Vercel / Cloudflare Pages: Add SPA fallback rewrite to `/index.html`
- NGINX/Apache: Configure fallback to `index.html`

If you must open `dist/index.html` via file://, ensure the Vite `base` option is set appropriately for relative assets. Hosting over HTTP(S) is recommended.

### Email API server
Deploy `server/index.js` as a Node service (e.g., Render, Railway, Fly.io, VPS, or your own server):
1. Copy `.env` to the server and fill SMTP values
2. Run `npm ci` and `npm run server` (or use a process manager like PM2)
3. Set CORS `ALLOW_ORIGIN` to your production site origin (e.g., `https://yourdomain.com`)

Update the frontend contact form endpoint if needed; by default it targets the same origin path `/api/contact` via the middleware utilities.

## 6) Project scripts
- `npm run dev` — Start Vite dev server
- `npm run build` — Build production assets into `dist/`
- `npm run preview` — Preview built site locally
- `npm run server` — Start Express email API
- `npm run lint` — Lint
- `npm run lint:fix` — Lint and fix

## 7) Troubleshooting
- Blank page after opening `dist/index.html` directly: host `dist/` with a static server or ensure relative asset paths are used; prefer `npm run preview`.
- Contact form not sending:
  - Ensure server is running and reachable
  - Check `.env` SMTP values and `CONTACT_FROM`
  - Confirm CORS: `ALLOW_ORIGIN` includes your site origin
  - Check server logs for `[mailer] verify` and `/api/contact` errors
- Ports in use: change Vite port in `vite.config.ts` or server port via `SERVER_PORT`.

## 8) Tech stack
- React 19, React Router 6
- Vite 7
- TailwindCSS
- Express 4, Nodemailer

## License
See `LICENSE`.
