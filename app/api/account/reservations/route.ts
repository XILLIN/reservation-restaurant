import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { Reservation } from "@/models/Reservation";
import { requireUser } from "@/lib/auth-guards";
import { apiError } from "@/lib/api";

export async function GET(request: Request) {
  try {
    const session = await requireUser(request);
    await connectToDatabase();
    const reservations = await Reservation.find({ userId: session.user.id }).sort({ date: -1, time: -1 }).lean();
    return NextResponse.json({ success: true, data: reservations });
  } catch (error) { return apiError(error); }
}
