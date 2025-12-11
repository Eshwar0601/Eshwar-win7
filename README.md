# Eshwar's Windows 7 Portfolio

Live demo: https://eshwar.netlify.app/

**Project**: A Windows‑7 themed personal portfolio built with Next.js. It simulates a Windows 7 boot + login experience and then shows a desktop/home screen with a taskbar and desktop icons.

**Key Features**
- Boot-style BIOS screen that types lines one-by-one.
- Boot animation (video) + animated "Starting Portfolio" message.
- Login screen with user avatar, Windows‑7 style glass border, startup audio (plays after user interaction), and a shutdown menu.
- Smooth transitions: fade-out/in when logging in, "Logging in — please wait..." message.
- Home screen that looks like Windows 7 with a taskbar, start button, system tray and clock, and desktop icons.
- Single flexible global state using `app/context/GlobalContext.tsx` so components can read/write application state.

**Tech Stack**
- **Framework:** `Next.js` (v16)
- **UI:** React (v19) + Tailwind CSS
- **Language:** TypeScript (project contains TS settings)

**Important Files**
- `app/layout.tsx` — application root, wraps app in `GlobalProvider`
- `app/context/GlobalContext.tsx` — global state store (`useGlobal()` hook)
- `app/page.tsx` — entry page (decides show BIOS / Loading / Login / Main layout)
- `components/LoadingScreen.tsx` — boot animation + video
- `components/BiosScreen.tsx` — BIOS typewriter-style text
- `components/LoginScreen.tsx` — login UI + shutdown menu + audio handling
- `components/HomeScreen.tsx` — desktop and taskbar UI
- `components/*.module.css` — component styles
- `public/assets` — images, videos and audio used in the UI

**Local Development**
Prerequisites: Node.js (recommended 18+), pnpm / npm / yarn.

1. Install dependencies

```bash
npm install
# or
# pnpm install
```

2. Start dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
npm run start
```

4. Lint

```bash
npm run lint
```

**Notes & Gotchas**
- Browsers block audio autoplay. The startup sound is triggered only after a user interaction (click) to avoid `NotAllowedError`.
- Static assets (images, videos, audio) live in `public/assets/*` and are referenced from components as `/assets/...`.
- If you change CSS module names or move files, ensure imports (for example `LoadingScreen.module.css`) remain correct.

**How to add a new global state value**
- Open `app/context/GlobalContext.tsx` and add an initial key to `state`.
- Use `const { state, setState, getState } = useGlobal()` in any component to read or update values.

**Deployment**
- The live site is hosted at https://eshwar.netlify.app/. To redeploy, push to the branch linked with Netlify or configure Netlify to run `npm run build` and `npm run start` (or use their Next.js build settings). If you use another host, follow its Next.js deployment instructions.

**Development Tips**
- To debug the BIOS text timing, open `components/BiosScreen.tsx` and tweak the timers and text arrays.
- Video playback issues: ensure the MP4 is present in `public/assets/videos/` and add `muted playsInline autoPlay` attributes if desired (browsers require `muted` for autoplay).

**License**
This repository is personal — use as you like. Add a license file (e.g., `LICENSE` with MIT) if you plan to share it publicly.

**Contact**
- Website: https://eshwar.netlify.app/
- If you'd like changes or improvements, open an issue or reach out via the contact details on the site.
