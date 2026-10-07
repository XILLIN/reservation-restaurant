import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { Reservation } from "@/models/Reservation";

export async function GET() {
  try {
    await connectToDatabase();
    const reservations = await Reservation.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: reservations });
  } catch (error: any) {
    console.error("API GET Error:", error);
    return NextResponse.json({ success: false, error: error.message || "Failed to fetch reservations" }, { status: 400 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Received POST body:", body);

    // Auto-generate reservationCode if not provided
    if (!body.reservationCode) {
      const dateStr = (body.date || new Date().toISOString().slice(0, 10)).replaceAll("-", "");
      body.reservationCode = `ME-${dateStr}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
    }

    // Default seatingOption if not provided
    if (!body.seatingOption) {
      body.seatingOption = "dining-room";
    }

    await connectToDatabase();
    console.log("Connected to DB successfully");
    const reservation = await Reservation.create(body);
    console.log("Created reservation:", reservation._id);
    return NextResponse.json({ success: true, data: reservation }, { status: 201 });
  } catch (error: any) {
    console.error("API POST Error:", error);
    return NextResponse.json({ success: false, error: error.message || "Failed to create reservation" }, { status: 400 });
  }
}
