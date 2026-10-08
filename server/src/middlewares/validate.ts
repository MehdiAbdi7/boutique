import type { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { AppError } from "../utils/AppError.js";

type Schemas = {
  body?: z.ZodType;
  query?: z.ZodType;
  params?: z.ZodType;
};

function check(schema: z.ZodType, value: unknown) {
  const result = schema.safeParse(value);
  if (!result.success) {
    throw new AppError(
      400,
      "Données invalides",
      z.flattenError(result.error).fieldErrors,
    );
  }
  return result.data;
}

export function validate(schemas: Schemas) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (schemas.body) {
      req.body = check(schemas.body, req.body);
    }
    if (schemas.params) {
      req.params = check(schemas.params, req.params) as Request["params"];
    }
    if (schemas.query) {
      res.locals.query = check(schemas.query, req.query);
    }
    next();
  };
}
