import { ZodOpenApiPathsObject } from "zod-openapi";
import { createPartner } from "./create-partner";

export const partnersPaths: ZodOpenApiPathsObject = {
  "/partners": {
    post: createPartner,
  },
};
