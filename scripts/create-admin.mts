import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";
import { ObjectId } from "mongodb";
import { getAuth } from "../lib/auth";
import { getAuthDatabase } from "../lib/auth-database";
import { passwordSchema, profileSchema } from "../lib/validation";
import { z } from "zod";

async function readPassword() {
  if (!stdin.isTTY) throw new Error("Set ADMIN_PASSWORD for non-interactive provisioning.");
  stdout.write("Admin password (hidden, 12–128 characters): ");
  stdin.setRawMode(true);
  stdin.resume();
  stdin.setEncoding("utf8");
  return new Promise<string>((resolve, reject) => {
    let password = "";
    const finish = () => { stdin.setRawMode(false); stdin.pause(); stdin.off("data", handle); stdout.write("\n"); };
    const handle = (chunk: string) => {
      for (const character of chunk) {
        if (character === "\u0003") { finish(); reject(new Error("Cancelled")); return; }
        if (character === "\r" || character === "\n") { finish(); resolve(password); return; }
        if (character === "\u007f" || character === "\b") password = password.slice(0, -1);
        else if (character >= " ") password += character;
      }
    };
    stdin.on("data", handle);
  });
}

async function main() {
  const prompts = createInterface({ input: stdin, output: stdout });
  const name = process.env.ADMIN_NAME || await prompts.question("Admin full name: ");
  const email = (process.env.ADMIN_EMAIL || await prompts.question("Admin email: ")).trim().toLowerCase();
  const phone = process.env.ADMIN_PHONE || await prompts.question("Admin phone: ");
  prompts.close();
  const profile = profileSchema.parse({ name, phone });
  z.email().parse(email);
  const password = passwordSchema.parse(process.env.ADMIN_PASSWORD || await readPassword());
  const { db } = await getAuthDatabase();
  const existing = await db.collection("user").findOne({ email });
  if (existing) {
    if (existing.role !== "admin") throw new Error("This email belongs to an existing user. Use a new email for the admin account.");
    console.log("Admin already exists. No changes made.");
    return;
  }
  const auth = await getAuth();
  const result = await auth.api.signUpEmail({ body: { ...profile, email, password } });
  const id = new ObjectId(result.user.id);
  await db.collection("user").updateOne({ _id: id }, { $set: { role: "admin", emailVerified: true } });
  await db.collection("session").deleteMany({ userId: { $in: [id, result.user.id] } });
  console.log("Admin created. Sign in through /th/admin/login or /en/admin/login.");
}

try { await main(); }
catch (error) {
  console.error(error instanceof z.ZodError ? "Invalid admin details. Check the name, email, phone and password length." : error instanceof Error ? error.message : "Unable to create admin.");
  process.exitCode = 1;
} finally {
  const cache = globalThis as typeof globalThis & { restaurantAuthDatabase?: Promise<import("mongodb").MongoClient> };
  if (cache.restaurantAuthDatabase) await (await cache.restaurantAuthDatabase.catch(() => null))?.close();
}
