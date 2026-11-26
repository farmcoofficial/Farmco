# Farm Co. — 3D Next.js starter

A premium agritourism landing page starter using Next.js, Tailwind CSS, Three.js, React Three Fiber and Drei.

## Requirements
- Node.js 18.17 or later
- npm

## Run locally

1. Extract this ZIP.
2. Open the extracted folder in VS Code.
3. Open Terminal in VS Code and run:

```bash
npm install
npm run dev
```

4. Visit http://localhost:3000

## Add to an existing Next.js project

Back up your current project first. Copy these folders/files into your existing project:
- `app/page.jsx`
- `app/layout.jsx`
- `app/globals.css`
- `components/FarmScene.jsx`
- `tailwind.config.js` (merge the content/theme settings if you already have one)
- `postcss.config.mjs` (merge if already present)

Install the 3D packages in your existing project:

```bash
npm install three @react-three/fiber @react-three/drei
```

Do not replace your existing `package.json` wholesale if your app already has dependencies. Merge the packages instead.

## Notes
- The 3D farm scene is generated from Three.js geometry and is a starter scene, not a photorealistic scanned farm model.
- Photography uses remote Unsplash image URLs and therefore needs an internet connection.
- Booking, payment, authentication, farm listings and database integration are not included yet.
- Replace the placeholder contact email `hello@farmco.com` with your official contact address before publishing.
