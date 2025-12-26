import { initTRPC, TRPCError } from "@trpc/server";
import type { H3Event } from "h3";
import SuperJSON from "superjson";

export const createTRPCContext = async (event: H3Event) => {
  /**
   * @see: https://trpc.io/docs/server/context
   */

  return {
    auth: event.context.auth,
    requestCtx: event ?? undefined,
  };
};

const t = initTRPC.create();

export const createTrpcRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;

//TODO: Check if such a procedure is necessary
const authenticatedProceure = baseProcedure.use(async (opts) => {
  const { ctx } = opts;

  try {
    return opts.next({
      ctx: {},
    });
  } catch (err) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Loggin needed",
    });
  }
});
