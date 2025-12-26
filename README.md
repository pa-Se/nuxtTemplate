# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Capacitor - Project Building

https://www.djamware.com/post/68fc3a096ec70a546d45da39/build-a-pwa-with-nuxt-4-and-capacitor

1. Add a native platform which creates a native project/android or /ios folder

npm install @capacitor/android
npx cap add android

# or

npm install @capacitor/ios
npx cap add ios

2. Sync own web build with capacitor

npm run build:cap

3. Open the native project in your IDE

npx cap open android

# or

npx cap open ios

This will launch Android Studio or Xcode, where you can build and run your Nuxt PWA natively on an emulator or device.

✅ At this stage, your Nuxt 4 app is integrated with Capacitor and can run as a native Android or iOS application while still functioning as a PWA in browsers.
