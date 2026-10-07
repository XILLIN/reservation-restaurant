import { limitUserAction } from "@/lib/rate-limit";
import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { Reservation } from "@/models/Reservation";
import { requireAdmin, requireUser } from "@/lib/auth-guards";
import { apiError, assertSameOrigin, readJson } from "@/lib/api";
import { reservationSchema } from "@/lib/validation";

export async function GET(request: Request) {
  try {
    await requireAdmin(request);
    await connectToDatabase();
    const reservations = await Reservation.find({}).sort({ createdAt: -1 }).lean();
    return NextResponse.json({ success: true, data: reservations });
  } catch (error) { return apiError(error); }
}

export async function POST(request: Request) {
  try {
    assertSameOrigin(request);
    const session = await requireUser(request);
    await limitUserAction(session.user.id, "reservation", 10);
    const body = reservationSchema.parse(await readJson(request));
    await connectToDatabase();
    const reservation = await Reservation.create({
      ...body,
      userId: session.user.id,
      reservationCode: `ME-${body.date.replaceAll("-", "")}-${randomUUID().slice(0, 8).toUpperCase()}`,
      status: "pending",
    });
    return NextResponse.json({ success: true, data: reservation }, { status: 201 });
  } catch (error) { return apiError(error); }
}
