import { beforeAll, afterAll, describe, expect, it } from "vitest";
import { randomBytes } from "node:crypto";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { ObjectId } from "mongodb";
import { getAuth } from "@/lib/auth";
import { getAuthDatabase } from "@/lib/auth-database";
import connectToDatabase from "@/lib/mongodb";
import { Reservation } from "@/models/Reservation";
import { Customer } from "@/models/Customer";
import { GET as getAccount, PATCH as updateProfile } from "@/app/api/account/route";
import { POST as changePassword } from "@/app/api/account/password/route";
import { GET as getOwnReservations } from "@/app/api/account/reservations/route";
import { GET as listReservations, POST as createReservation } from "@/app/api/reservations/route";
import { PATCH as updateReservation, DELETE as deleteReservation } from "@/app/api/reservations/[id]/route";
import { GET as getCustomers } from "@/app/api/customers/route";
import { GET as getAnalytics } from "@/app/api/analytics/route";
import { GET as getTables, POST as createTable } from "@/app/api/tables/route";
import { PATCH as updateTable, DELETE as deleteTable } from "@/app/api/tables/[id]/route";

const origin = "http://localhost:3000";
const password = "Test passphrase 2026!";
let mongo: MongoMemoryServer;
let ownerCookie: string;
let otherCookie: string;
let adminCookie: string;
let ownerId: string;
let bookingId: string;
let bookingCode: string;
let ipSequence = 1;

function cookie(response: Response) {
  return response.headers.getSetCookie().map((entry) => entry.split(";")[0]).join("; ");
}

function request(path: string, method = "GET", body?: unknown, cookieValue?: string, requestOrigin = origin) {
  return new Request(`${origin}${path}`, {
    method,
    headers: { Origin: requestOrigin, "Content-Type": "application/json", "x-forwarded-for": `192.0.2.${ipSequence++}`, ...(cookieValue ? { Cookie: cookieValue } : {}) },
    ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
  });
}

async function authRequest(path: string, body?: unknown, cookieValue?: string) {
  const auth = await getAuth();
  return auth.handler(request(`/api/auth/${path}`, body ? "POST" : "GET", body, cookieValue));
}

beforeAll(async () => {
  mongo = await MongoMemoryServer.create({ binary: { downloadDir: "/private/tmp/maison-ember-mongodb-binaries" } });
  process.env.MONGODB_URI = mongo.getUri("maison_ember_accounts_test");
  process.env.BETTER_AUTH_URL = origin;
  process.env.BETTER_AUTH_SECRET = randomBytes(32).toString("base64");
  await connectToDatabase();
  for (const [email, role] of [["owner@example.com", "user"], ["other@example.com", "user"], ["staff@example.com", "admin"]]) {
    const response = await authRequest("sign-up/email", { name: "Test Member", email, phone: "0812345678", password, role: "admin" });
    expect(response.status).toBe(200);
    const result = await response.json();
    // Public registration must ignore any supplied elevated role.
    expect(result.user.role).toBe("user");
    if (email === "owner@example.com") { ownerCookie = cookie(response); ownerId = result.user.id; }
    if (email === "other@example.com") otherCookie = cookie(response);
    if (role === "admin") {
      const { db } = await getAuthDatabase();
      await db.collection("user").updateOne({ _id: new ObjectId(result.user.id) }, { $set: { role: "admin" } });
      adminCookie = cookie(response);
    }
  }
});

afterAll(async () => {
  await mongoose.disconnect();
  const cache = globalThis as typeof globalThis & { restaurantAuthDatabase?: Promise<import("mongodb").MongoClient> };
  if (cache.restaurantAuthDatabase) await (await cache.restaurantAuthDatabase).close();
  if (mongo) await mongo.stop();
});

describe("registration, authentication and authorization", () => {
  it("stores a password hash and rejects duplicate email regardless of case", async () => {
    const { db } = await getAuthDatabase();
    const account = await db.collection("account").findOne({ userId: new ObjectId(ownerId), providerId: "credential" });
    expect(account?.password).toBeTruthy();
    expect(account?.password).not.toContain(password);
    const duplicate = await authRequest("sign-up/email", { name: "Duplicate", email: "OWNER@EXAMPLE.COM", phone: "0812345678", password });
    expect(duplicate.status).toBeGreaterThanOrEqual(400);
    expect(await db.collection("user").countDocuments({ email: "owner@example.com" })).toBe(1);
  });

  it("rejects invalid credentials and a fabricated legacy admin cookie", async () => {
    expect((await authRequest("sign-in/email", { email: "owner@example.com", password: "wrong-password" })).status).toBe(401);
    expect((await getTables(request("/api/tables", "GET", undefined, "admin_token=authenticated"))).status).toBe(401);
    expect((await getAccount(request("/api/account"))).status).toBe(401);
  });

  it("protects every administrative read and mutation", async () => {
    const id = new ObjectId().toString();
    const context = { params: Promise.resolve({ id }) };
    const calls = [
      () => listReservations(request("/api/reservations", "GET", undefined, ownerCookie)),
      () => getTables(request("/api/tables", "GET", undefined, ownerCookie)),
      () => getCustomers(request("/api/customers", "GET", undefined, ownerCookie)),
      () => getAnalytics(request("/api/analytics", "GET", undefined, ownerCookie)),
      () => createTable(request("/api/tables", "POST", {}, ownerCookie)),
      () => updateTable(request(`/api/tables/${id}`, "PATCH", {}, ownerCookie), context),
      () => deleteTable(request(`/api/tables/${id}`, "DELETE", undefined, ownerCookie), context),
      () => updateReservation(request(`/api/reservations/${id}`, "PATCH", {}, ownerCookie), context),
      () => deleteReservation(request(`/api/reservations/${id}`, "DELETE", undefined, ownerCookie), context),
    ];
    for (const call of calls) expect((await call()).status).toBe(403);
    expect((await getTables(request("/api/tables", "GET", undefined, adminCookie))).status).toBe(200);
  });

  it("validates profiles and prevents changes to email or role", async () => {
    expect((await updateProfile(request("/api/account", "PATCH", { name: "Updated Member", phone: "0899999999", role: "admin" }, ownerCookie))).status).toBe(400);
    expect((await updateProfile(request("/api/account", "PATCH", { name: "Updated Member", phone: "0899999999", email: "other@example.com" }, ownerCookie))).status).toBe(400);
    expect((await updateProfile(request("/api/account", "PATCH", { name: "Updated Member", phone: "0899999999" }, ownerCookie))).status).toBe(200);
    const profile = await (await getAccount(request("/api/account", "GET", undefined, ownerCookie))).json();
    expect(profile.data).toMatchObject({ name: "Updated Member", phone: "0899999999", email: "owner@example.com", role: "user" });
    const direct = await authRequest("update-user", { role: "admin", name: "Updated Member" }, ownerCookie);
    expect([200, 400]).toContain(direct.status);
    expect((await (await getAccount(request("/api/account", "GET", undefined, ownerCookie))).json()).data.role).toBe("user");
  });

  it("rejects cross-origin profile, password and reservation requests", async () => {
    expect((await updateProfile(request("/api/account", "PATCH", { name: "Injected", phone: "0812345678" }, ownerCookie, "https://attacker.example"))).status).toBe(403);
    expect((await changePassword(request("/api/account/password", "POST", {}, ownerCookie, "https://attacker.example"))).status).toBe(403);
    expect((await createReservation(request("/api/reservations", "POST", {}, ownerCookie, "https://attacker.example"))).status).toBe(403);
  });
});

describe("reservation ownership and non-destructive customer data", () => {
  const booking = { name: "Booking Guest", email: "owner@example.com", phone: "0812345678", date: "2099-10-10", time: "19:00", guests: 2, seatingOption: "dining-room" };

  it("rejects spoofed ownership and status, then creates a server-owned reservation", async () => {
    expect((await createReservation(request("/api/reservations", "POST", booking))).status).toBe(401);
    expect((await createReservation(request("/api/reservations", "POST", { ...booking, userId: "someone-else", status: "confirmed" }, ownerCookie))).status).toBe(400);
    const response = await createReservation(request("/api/reservations", "POST", booking, ownerCookie));
    expect(response.status).toBe(201);
    const result = await response.json();
    expect(result.data.userId).toBe(ownerId);
    expect(result.data.status).toBe("pending");
    bookingId = result.data._id;
    bookingCode = result.data.reservationCode;
  });

  it("shows only the owner's bookings, even when a query specifies another user", async () => {
    const own = await (await getOwnReservations(request("/api/account/reservations", "GET", undefined, ownerCookie))).json();
    expect(own.data.map((entry: { _id: string }) => entry._id)).toContain(bookingId);
    const other = await (await getOwnReservations(request(`/api/account/reservations?userId=${ownerId}`, "GET", undefined, otherCookie))).json();
    expect(other.data).toEqual([]);
    await Reservation.create({ ...booking, reservationCode: "LEGACY-UNCLAIMED", status: "pending" });
    const ownAgain = await (await getOwnReservations(request("/api/account/reservations", "GET", undefined, ownerCookie))).json();
    expect(ownAgain.data).toHaveLength(1);
    expect(ownAgain.data[0].reservationCode).toBe(bookingCode);
  });

  it("allows admin status changes, rejects invalid statuses, and preserves customer notes and IDs on reads", async () => {
    const context = { params: Promise.resolve({ id: bookingId }) };
    expect((await updateReservation(request(`/api/reservations/${bookingId}`, "PATCH", { status: "invented" }, adminCookie), context)).status).toBe(400);
    expect((await updateReservation(request(`/api/reservations/${bookingId}`, "PATCH", { status: "completed" }, adminCookie), context)).status).toBe(200);
    const customer = await Customer.create({ name: "Saved Customer", email: "owner@example.com", phone: "0812345678", specialNotes: "Preserve this note" });
    for (let index = 0; index < 2; index++) {
      const response = await getCustomers(request("/api/customers", "GET", undefined, adminCookie));
      expect(response.status).toBe(200);
      const result = await response.json();
      expect(result.data.find((entry: { email: string }) => entry.email === "owner@example.com")).toMatchObject({ _id: String(customer._id), specialNotes: "Preserve this note", totalReservations: 2, completedReservations: 1 });
    }
    expect(await Customer.countDocuments({ _id: customer._id })).toBe(1);
  });
});

describe("password change, session revocation and logout", () => {
  it("requires the correct current password and matching confirmation, and revokes the other device", async () => {
    const second = await authRequest("sign-in/email", { email: "owner@example.com", password });
    const secondCookie = cookie(second);
    const newPassword = "New test passphrase 2026!";
    expect((await changePassword(request("/api/account/password", "POST", { currentPassword: password, newPassword, confirmPassword: "Mismatch passphrase" }, ownerCookie))).status).toBe(400);
    expect((await changePassword(request("/api/account/password", "POST", { currentPassword: "Wrong passphrase", newPassword, confirmPassword: newPassword }, ownerCookie))).status).toBe(400);
    const changed = await changePassword(request("/api/account/password", "POST", { currentPassword: password, newPassword, confirmPassword: newPassword }, ownerCookie));
    expect(changed.status).toBe(200);
    expect((await getAccount(request("/api/account", "GET", undefined, secondCookie))).status).toBe(401);
    expect((await authRequest("sign-in/email", { email: "owner@example.com", password })).status).toBe(401);
    expect((await authRequest("sign-in/email", { email: "owner@example.com", password: newPassword })).status).toBe(200);
    ownerCookie = cookie(changed) || ownerCookie;
    expect((await getAccount(request("/api/account", "GET", undefined, ownerCookie))).status).toBe(200);
  });

  it("invalidates a logged-out session", async () => {
    const response = await authRequest("sign-out", {}, otherCookie);
    expect(response.status).toBe(200);
    expect((await getAccount(request("/api/account", "GET", undefined, otherCookie))).status).toBe(401);
  });

  it("rate limits repeated sign-in attempts", async () => {
    const auth = await getAuth();
    let response: Response | undefined;
    for (let index = 0; index < 11; index++) {
      const attempted = request("/api/auth/sign-in/email", "POST", { email: "missing@example.com", password });
      attempted.headers.set("x-forwarded-for", "198.51.100.250");
      response = await auth.handler(attempted);
    }
    expect(response?.status).toBe(429);
  });
});
