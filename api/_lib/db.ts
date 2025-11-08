import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "../../shared/schema";

declare global {
  // eslint-disable-next-line no-var
  var __drizzlePool: Pool | undefined;
}

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not set");
}

const pool =
  globalThis.__drizzlePool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
    max: Number(process.env.PGPOOL_MAX || 3),
    connectionTimeoutMillis: Number(process.env.PGPOOL_TIMEOUT || 5_000),
  });

if (!globalThis.__drizzlePool) {
  globalThis.__drizzlePool = pool;
}

export const db = drizzle(pool, { schema });


