# Portfolio — Thibault Cauche

Mon site personnel : présentation, parcours, compétences et projets. Disponible en français, anglais et allemand.

🔗 [thibaultcauche.com](https://www.thibaultcauche.com)

## Fonctionnalités

- Site multilingue (fr / en / de) avec détection automatique de la langue du navigateur
- Timeline expériences pro / études, compétences groupées par catégorie
- Skateboard 3D interactif (Three.js) et galerie photo
- Formulaire de contact (Formspree) avec protection anti-spam (honeypot)
- Pages Mentions légales / Confidentialité, image de partage social générée dynamiquement, sitemap
- Analytics sans cookie (Plausible)

## Stack

- **Framework** : Next.js 15 (App Router, Turbopack), React 19, TypeScript
- **UI** : Tailwind CSS v4, Radix UI, Framer Motion, Lucide
- **3D** : Three.js / @react-three/fiber / drei
- **i18n** : next-intl
- **Déploiement** : Vercel

## Architecture

```
src/
├─ app/
│  ├─ [locale]/          # routes localisées (fr/en/de)
│  │  ├─ layout.tsx      # providers (i18n, thème), metadata, analytics
│  │  ├─ page.tsx        # assemble les sections de la home
│  │  ├─ mentions-legales/, confidentialite/
│  │  └─ opengraph-image.tsx  # image de partage générée à la volée
│  ├─ sections/          # Hero, About, Timeline, Skills, Projects, Contact, Footer
│  └─ sitemap.ts, robot.ts
├─ components/           # nav, fonds animés, primitives UI
├─ messages/              # fr.json, en.json, de.json (tout le texte du site)
└─ i18n/                 # config next-intl
```

Le routage multilingue passe par un middleware `next-intl` qui préfixe chaque page par `/fr`, `/en` ou `/de`. Tout le contenu textuel (y compris les expériences et les compétences) vit dans `src/messages/*.json`, donc éditer le site ne demande pas de toucher aux composants.

## Lancer le projet

```bash
pnpm install
pnpm dev
```

Puis ouvrir [http://localhost:3000](http://localhost:3000).

```bash
pnpm build && pnpm start   # build de prod
pnpm lint                  # ESLint
```

## Choix techniques

- **`images.unoptimized: true`** : les photos sont pré-converties en WebP par `scripts/gen-photos-manifest.mjs` / `convert_photos.py` plutôt que de dépendre de l'optimiseur d'images de Next au runtime.
- **Pas de bannière de cookies** : Plausible ne pose aucun cookie et le seul cookie du site (`NEXT_LOCALE`) est strictement fonctionnel — inutile d'ajouter une bannière RGPD pour rien.
- **CSP stricte** définie dans `next.config.ts`, calée sur les domaines tiers réellement utilisés (Formspree, Plausible, Iconify, assets Three.js/drei).
