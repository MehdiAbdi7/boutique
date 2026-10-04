import "dotenv/config";
import { z } from "zod";
const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  PORT: z.coerce.number().int().positive().default(5000),
  MONGODB_URI: z.string().min(1, { error: "MONGODB_URI is required" }),
});

const result = envSchema.safeParse(process.env);
if (!result.success) {
  console.error("Invalid environment variables:");
  console.error(z.prettifyError(result.error));
  process.exit(1);
}
export const env = result.data;
