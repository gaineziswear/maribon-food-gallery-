# MARIBON HUB

Mauritius-first digital food gallery and food-court MVP, starting with the Saint Pierre → Moka pilot. This app now has a dependency-free static build so it can be built and hosted in restricted environments.

## Run locally

```bash
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

Deploy the static `dist/` output to a CDN/static host. A GitHub Pages workflow is included and publishes automatically after the repository is connected to GitHub and Pages is enabled with **GitHub Actions** as its source.

For the full operational service, pair it with an API service and PostgreSQL/object-storage providers configured through `.env.example`.
