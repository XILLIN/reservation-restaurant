import { limitUserAction } from "@/lib/rate-limit";
import { NextResponse } from "next/server";
import { getAuth } from "@/lib/auth";
import { requireUser } from "@/lib/auth-guards";
import { apiError, assertSameOrigin, readJson } from "@/lib/api";
import { profileSchema } from "@/lib/validation";

export async function GET(request: Request) {
  try {
    const { user } = await requireUser(request);
    return NextResponse.json({ success: true, data: { id: user.id, name: user.name, email: user.email, phone: user.phone, role: user.role } });
  } catch (error) { return apiError(error); }
}

export async function PATCH(request: Request) {
  try {
    assertSameOrigin(request);
    const session = await requireUser(request);
    await limitUserAction(session.user.id, "profile", 20);
    const profile = profileSchema.parse(await readJson(request));
    const auth = await getAuth();
    await auth.api.updateUser({ headers: request.headers, body: profile });
    return NextResponse.json({ success: true });
  } catch (error) { return apiError(error); }
}
