import { limitUserAction } from "@/lib/rate-limit";
import { z } from "zod";
import { getAuth } from "@/lib/auth";
import { requireUser } from "@/lib/auth-guards";
import { apiError, assertSameOrigin, readJson } from "@/lib/api";
import { passwordSchema } from "@/lib/validation";

const schema = z.object({
  currentPassword: z.string().min(1).max(128),
  newPassword: passwordSchema,
  confirmPassword: passwordSchema,
}).strict().refine((data) => data.newPassword === data.confirmPassword && data.newPassword !== data.currentPassword);

export async function POST(request: Request) {
  try {
    assertSameOrigin(request);
    const session = await requireUser(request);
    await limitUserAction(session.user.id, "password", 5);
    const { currentPassword, newPassword } = schema.parse(await readJson(request));
    const auth = await getAuth();
    // Return the library response so rotated session cookies reach the browser.
    return await auth.api.changePassword({
      headers: request.headers,
      body: { currentPassword, newPassword, revokeOtherSessions: true },
      asResponse: true,
    });
  } catch (error) { return apiError(error); }
}
