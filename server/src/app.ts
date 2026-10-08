import express from "express";
import { errorHandler, notFound } from "./middlewares/errorHandler.js";

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ data: { status: "ok" } });
});

app.use(notFound);
app.use(errorHandler);

export default app;
