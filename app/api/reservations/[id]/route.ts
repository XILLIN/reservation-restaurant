import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { Reservation } from "@/models/Reservation";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    await connectToDatabase();

    const updatedReservation = await Reservation.findByIdAndUpdate(
      id,
      { status: body.status },
      { new: true }
    );

    if (!updatedReservation) {
      return NextResponse.json({ success: false, error: "Reservation not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updatedReservation });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to update reservation" }, { status: 400 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await connectToDatabase();

    const deletedReservation = await Reservation.findByIdAndDelete(id);

    if (!deletedReservation) {
      return NextResponse.json({ success: false, error: "Reservation not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to delete reservation" }, { status: 400 });
  }
}
