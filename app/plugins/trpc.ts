import { httpLink } from "@trpc/client";
import SuperJSON from "superjson";
import { createTRPCNuxtClient, httpBatchLink } from "trpc-nuxt/client";
import type { AppRouter } from "~/server/trpc/routers";

export default defineNuxtPlugin(() => {
  const trpc = createTRPCNuxtClient<AppRouter>({
    links: [
      httpLink({
        url: "/api/trpc/",
      }),
    ],
  });

  return {
    provide: {
      trpc,
    },
  };
});
