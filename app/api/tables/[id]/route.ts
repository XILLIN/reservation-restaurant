import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { Table } from "@/models/Table";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    await connectToDatabase();
    const table = await Table.findByIdAndUpdate(id, body, { new: true });
    
    if (!table) {
      return NextResponse.json({ success: false, error: "Table not found" }, { status: 404 });
    }
    
    return NextResponse.json({ success: true, data: table });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message || "Failed to update table" }, { status: 400 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await connectToDatabase();
    const table = await Table.findByIdAndDelete(id);
    
    if (!table) {
      return NextResponse.json({ success: false, error: "Table not found" }, { status: 404 });
    }
    
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message || "Failed to delete table" }, { status: 400 });
  }
}
