import type { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError.js";

export function notFound(_req: Request, res: Response) {
  res.status(404).json({ error: { message: "Route introuvable" } });
}

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      error: { message: err.message, details: err.details },
    });
    return;
  }

  if (
    typeof err === "object" &&
    err !== null &&
    "code" in err &&
    err.code === 11000
  ) {
    res.status(409).json({ error: { message: "Cette valeur existe déjà" } });
    return;
  }

  console.error(err);
  res.status(500).json({ error: { message: "Erreur interne du serveur" } });
}
