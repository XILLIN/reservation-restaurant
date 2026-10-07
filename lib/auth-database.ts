import { MongoClient } from "mongodb";

const authGlobal = globalThis as typeof globalThis & {
  restaurantAuthDatabase?: Promise<MongoClient>;
};

export async function getAuthDatabase() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is required. See .env.example.");
  if (!authGlobal.restaurantAuthDatabase) {
    const client = new MongoClient(uri, { serverSelectionTimeoutMS: 10000 });
    authGlobal.restaurantAuthDatabase = (async () => {
      await client.connect();
      const db = client.db();
      await Promise.all([
        db.collection("user").createIndex({ email: 1 }, { unique: true }),
        db.collection("session").createIndex({ token: 1 }, { unique: true }),
        db.collection("session").createIndex({ userId: 1 }),
        db.collection("session").createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 }),
        db.collection("account").createIndex({ providerId: 1, accountId: 1 }, { unique: true }),
        db.collection("account").createIndex({ userId: 1 }),
        db.collection("appRateLimit").createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 }),
      ]);
      return client;
    })().catch(async (error: unknown) => {
      authGlobal.restaurantAuthDatabase = undefined;
      await client.close();
      throw error;
    });
  }
  const client = await authGlobal.restaurantAuthDatabase;
  return { client, db: client.db() };
}
