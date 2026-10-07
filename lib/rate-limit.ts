import { getAuthDatabase } from "@/lib/auth-database";
import { HttpError } from "@/lib/api";

export async function limitUserAction(userId: string, action: string, max: number) {
  const { db } = await getAuthDatabase();
  const bucket = Math.floor(Date.now() / 60000);
  const result = await db.collection<{ _id: string; count: number; expiresAt: Date }>("appRateLimit").findOneAndUpdate(
    { _id: `${action}:${userId}:${bucket}` },
    { $inc: { count: 1 }, $setOnInsert: { expiresAt: new Date((bucket + 2) * 60000) } },
    { upsert: true, returnDocument: "after" },
  );
  if (!result || result.count > max) throw new HttpError(429, "RATE_LIMITED");
}
