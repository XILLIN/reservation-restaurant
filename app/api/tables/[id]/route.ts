import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { Table } from "@/models/Table";
import { requireAdmin } from "@/lib/auth-guards";
import { apiError, assertSameOrigin, readJson } from "@/lib/api";
import { objectIdSchema, tablePatchSchema } from "@/lib/validation";

type Context = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: Context) {
  try {
    assertSameOrigin(request);
    await requireAdmin(request);
    const id = objectIdSchema.parse((await params).id);
    const body = tablePatchSchema.parse(await readJson(request));
    await connectToDatabase();
    const table = await Table.findByIdAndUpdate(id, { $set: body }, { returnDocument: "after", runValidators: true });
    if (!table) return NextResponse.json({ success: false, error: "NOT_FOUND" }, { status: 404 });
    return NextResponse.json({ success: true, data: table });
  } catch (error) { return apiError(error); }
}

export async function DELETE(request: Request, { params }: Context) {
  try {
    assertSameOrigin(request);
    await requireAdmin(request);
    const id = objectIdSchema.parse((await params).id);
    await connectToDatabase();
    const table = await Table.findByIdAndDelete(id);
    if (!table) return NextResponse.json({ success: false, error: "NOT_FOUND" }, { status: 404 });
    return NextResponse.json({ success: true });
  } catch (error) { return apiError(error); }
}
