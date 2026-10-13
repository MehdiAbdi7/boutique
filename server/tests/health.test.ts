import request from "supertest";
import { describe, expect, it } from "vitest";
import app from "../src/app.js";

describe("GET /health", () => {
  it("répond 200 avec le statut ok", async () => {
    const response = await request(app).get("/health");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ data: { status: "ok" } });
  });
});

describe("Route inconnue", () => {
  it("répond 404 avec un message d'erreur", async () => {
    const response = await request(app).get("/route-qui-n-existe-pas");
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: { message: "Route introuvable" } });
  });
});
