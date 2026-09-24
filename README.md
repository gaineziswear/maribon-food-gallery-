# MARIBON HUB

Mauritius-first digital food gallery and food-court MVP, starting with the Saint Pierre → Moka pilot.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Current implementation boundary

This repository provides a production-quality responsive web experience and a clearly delineated demo data layer. Real authentication, PostgreSQL persistence, uploads, payments, maps, SMS, and deployment require the credentials listed in `.env.example`; no real company data, prices, ratings, or partnership claims are embedded.

## Deployment

Deploy the static `dist/` output to a CDN/static host. For the full operational service, pair it with an API service and PostgreSQL/object-storage providers configured through `.env.example`.
