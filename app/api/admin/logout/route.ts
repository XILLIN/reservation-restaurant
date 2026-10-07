import { getAuth } from "@/lib/auth";
import { apiError, assertSameOrigin } from "@/lib/api";

export async function POST(request: Request) {
  try {
    assertSameOrigin(request);
    const auth = await getAuth();
    return await auth.api.signOut({ headers: request.headers, asResponse: true });
  } catch (error) { return apiError(error); }
}
