import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { Table } from "@/models/Table";
import { requireAdmin } from "@/lib/auth-guards";
import { apiError, assertSameOrigin, readJson } from "@/lib/api";
import { tableSchema } from "@/lib/validation";

export async function GET(request: Request) {
  try {
    await requireAdmin(request);
    await connectToDatabase();
    const tables = await Table.find({}).sort({ zone: 1, tableNumber: 1 }).lean();
    return NextResponse.json({ success: true, data: tables });
  } catch (error) { return apiError(error); }
}

export async function POST(request: Request) {
  try {
    assertSameOrigin(request);
    await requireAdmin(request);
    const body = tableSchema.parse(await readJson(request));
    await connectToDatabase();
    const table = await Table.create(body);
    return NextResponse.json({ success: true, data: table }, { status: 201 });
  } catch (error) { return apiError(error); }
}
