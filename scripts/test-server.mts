import { MongoMemoryServer } from "mongodb-memory-server";
import { randomBytes } from "node:crypto";
import { spawn } from "node:child_process";

// Browser tests always use an isolated, disposable database, never .env.local.
const mongo = await MongoMemoryServer.create({ binary: { downloadDir: "/private/tmp/maison-ember-mongodb-binaries" } });
const env = {
  ...process.env,
  MONGODB_URI: mongo.getUri("maison_ember_browser_test"),
  BETTER_AUTH_URL: "http://127.0.0.1:3100",
  BETTER_AUTH_SECRET: randomBytes(32).toString("base64"),
  ADMIN_NAME: "Test Staff",
  ADMIN_EMAIL: "staff@example.com",
  ADMIN_PHONE: "0812345678",
  ADMIN_PASSWORD: "Staff test passphrase!",
};

try {
  await new Promise<void>((resolve, reject) => {
    const seed = spawn(process.execPath, ["--import", "tsx", "scripts/create-admin.mts"], { env, stdio: "inherit" });
    seed.on("error", reject);
    seed.on("exit", (code) => code === 0 ? resolve() : reject(new Error("Test admin provisioning failed")));
  });
} catch (error) {
  await mongo.stop();
  throw error;
}

const server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", "3100"], { env, stdio: "inherit" });
let closing = false;
async function cleanup() {
  if (closing) return;
  closing = true;
  server.kill("SIGTERM");
  await mongo.stop();
}
process.on("SIGTERM", () => { void cleanup(); });
process.on("SIGINT", () => { void cleanup(); });
server.on("error", async (error) => { console.error(error.message); await cleanup(); process.exitCode = 1; });
server.on("exit", async (code) => { await cleanup(); process.exitCode = code ?? 0; });
