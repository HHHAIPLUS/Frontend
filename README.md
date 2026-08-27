# HHHAI Frontend

Mobile-first control surface for HHHAI. The browser is only the control/visualization layer; the backend remains authoritative.

## Pages

- `/` — main HHHAI control center
- `/admin.html` — authenticated admin control room

Set `VITE_HHHAI_API_URL` to the deployed Render backend URL.

## Deploy to Vercel

Import this directory as a Vercel project. Vercel detects Vite automatically. The SPA rewrite is included in `vercel.json`.

Do not put Binance, Bitget, Supabase service-role or admin secrets in frontend environment variables.

## Current deployment configuration

`VITE_HHHAI_API_URL` must point to the Render backend (for example, the deployed HHHAI backend URL). This is a public endpoint URL, so it belongs in Vercel as a **Config** variable, not a Secret. Never place exchange API keys, Supabase service-role keys, or the admin token in Vercel.

The admin control room can start/stop the autonomous backend worker and request the validated-model bootstrap through authenticated backend endpoints.
