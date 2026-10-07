import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { Table } from "@/models/Table";

export async function GET() {
  try {
    await connectToDatabase();
    const tables = await Table.find({}).sort({ zone: 1, tableNumber: 1 });
    return NextResponse.json({ success: true, data: tables });
  } catch (error: any) {
    console.error("API GET Error:", error);
    return NextResponse.json({ success: false, error: error.message || "Failed to fetch tables" }, { status: 400 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await connectToDatabase();
    const table = await Table.create(body);
    return NextResponse.json({ success: true, data: table }, { status: 201 });
  } catch (error: any) {
    console.error("API POST Error:", error);
    if (error.code === 11000) {
      return NextResponse.json({ success: false, error: "Table number already exists" }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: error.message || "Failed to create table" }, { status: 400 });
  }
}
