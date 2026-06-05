# TACT Web

Front public Nuxt de TACT.

## Pages

- `/` : landing d'installation de l'application
- `/paiement` : page de paiement
- `/:tactId` : page publique d'une carte

## Setup

```bash
pnpm install
pnpm dev
```

## Qualite

```bash
pnpm lint
pnpm test
pnpm typecheck
```

## Deploiement Vercel

```bash
NITRO_PRESET=vercel pnpm build
```

Variables publiques a configurer dans Vercel :

```bash
NUXT_PUBLIC_API_BASE_URL=https://api.gettact.app/api/v1
NUXT_PUBLIC_ANDROID_APP_URL=
NUXT_PUBLIC_APP_GALLERY_URL=
NUXT_PUBLIC_IOS_APP_URL=
```
