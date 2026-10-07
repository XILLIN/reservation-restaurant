import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import { loadEnvFile } from "node:process";
import { randomBytes } from "node:crypto";
import { spawn } from "node:child_process";
import { resolve } from "node:path";
import { MongoMemoryServer } from "mongodb-memory-server";

// A persistent, loopback-only development database. Production uses your own URI.
const localURI = "mongodb://127.0.0.1:27018/maison_ember";
if (!existsSync(".env.local")) {
  await writeFile(".env.local", [
    `MONGODB_URI=${process.env.MONGODB_URI || localURI}`,
    `BETTER_AUTH_URL=${process.env.BETTER_AUTH_URL || "http://localhost:3000"}`,
    `BETTER_AUTH_SECRET=${process.env.BETTER_AUTH_SECRET || randomBytes(32).toString("base64")}`,
    "",
  ].join("\n"), { mode: 0o600, flag: "wx" });
  console.log("Created local configuration in .env.local.");
}
loadEnvFile(".env.local");

let mongo: MongoMemoryServer | undefined;
if (process.env.MONGODB_URI === localURI) {
  const dbPath = resolve(".local-data/mongodb");
  await mkdir(dbPath, { recursive: true });
  mongo = await MongoMemoryServer.create({
    instance: { port: 27018, portGeneration: false, ip: "127.0.0.1", dbPath, storageEngine: "wiredTiger" },
    binary: { downloadDir: resolve(".local-data/bin") },
  });
  console.log("Local MongoDB is ready. Data persists in .local-data/mongodb.");
}

const server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "dev", "--webpack", "--port", new URL(process.env.BETTER_AUTH_URL || "http://localhost:3000").port || "3000"], { env: process.env, stdio: "inherit" });
let closing = false;
async function cleanup() {
  if (closing) return;
  closing = true;
  server.kill("SIGTERM");
  // Keep the configured dbPath intact when stopping the development database.
  await mongo?.stop({ doCleanup: false });
}
process.on("SIGTERM", () => { void cleanup(); });
process.on("SIGINT", () => { void cleanup(); });
server.on("error", async (error) => { console.error(error.message); await cleanup(); process.exitCode = 1; });
server.on("exit", async (code) => { await cleanup(); process.exitCode = code ?? 0; });
