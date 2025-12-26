import { baseProcedure, createTrpcRouter } from "../init.js";
import { z } from "zod";

export const testRouter = createTrpcRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
});
