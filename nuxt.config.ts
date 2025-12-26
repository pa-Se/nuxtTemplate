// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  build: {
    transpile: ["trpc-nuxt"],
  },
  devtools: { enabled: true },
  alias: {
    "~": fileURLToPath(new URL("./", import.meta.url)),
  },
  features: {
    devLogs: true,
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/test-utils",
    "@vite-pwa/nuxt",
    "@pinia/nuxt",
    "@pinia/colada-nuxt",
    "@nuxtjs/i18n",
  ],
  css: ["./assets/css/main.css"],

  ssr: false,
  nitro: {
    static: false,
    prerender: {
      crawlLinks: true,
    },
  },
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "PlantHunt",
      short_name: "PH",
      description: "A game to discover the nature playfully",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      display: "standalone",
      start_url: "/",
      icons: [
        {
          src: "/logo.png",
          sizes: "180x180",
          type: "image/png",
          purpose: "any",
        },
      ],
      screenshots: [
        //TODO: Make screenshots of screens where pwa install prompt should be triggered
      ],
    },
    workbox: {
      cleanupOutdatedCaches: true,
      clientsClaim: true,
      globPatterns: [
        "**/*.{js,css,html,png,jpg,jpeg,gif,svg,woff,woff2,ttf,eot}",
      ],
      globIgnores: [
        "**/node_modules/**/*",
        "sw.js",
        "workbox-*.js",
        "**/_payload.json",
        "_nuxt/builds/**/*.json",
      ],
    },
    devOptions: {
      enabled: false,
      type: "module",
      navigateFallback: "/",
    },
  },

  colorMode: {
    preference: "light",
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  routeRules: {
    //"/": { prerender: true },
    // "/_nuxt/builds/**": { cache: { maxAge: 60 * 60 * 24 * 365 } }, //
  },
  //TODO:.env anlegen und supabase url
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabasePublishableKey: process.env.SUPABASE_PUBLISHABLE_KEY,
    },
  },

  i18n: {
    locales: [{ code: "de", language: "de-DE", file: "de.json" }],
    defaultLocale: "de",
  },
});
