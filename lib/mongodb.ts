import mongoose from "mongoose";

const databaseGlobal = globalThis as typeof globalThis & {
  restaurantMongo?: Promise<typeof mongoose>;
};

export default async function connectToDatabase() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is required. See .env.example.");
  if (!databaseGlobal.restaurantMongo) {
    databaseGlobal.restaurantMongo = mongoose.connect(uri, {
      bufferCommands: false,
      serverSelectionTimeoutMS: 10000,
    }).catch((error: unknown) => {
      databaseGlobal.restaurantMongo = undefined;
      throw error;
    });
  }
  return databaseGlobal.restaurantMongo;
}
