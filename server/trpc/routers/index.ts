import { baseProcedure, createTrpcRouter } from "../init.js";
import { z } from "zod";
import { testRouter } from "./testrouter.js";

export const appRouter = createTrpcRouter({
  test: testRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
