import { getAuth } from "@/lib/auth";
import { apiError } from "@/lib/api";

export const runtime = "nodejs";

async function handle(request: Request) {
  try {
    const auth = await getAuth();
    return await auth.handler(request);
  } catch (error) { return apiError(error); }
}

export const GET = handle;
export const POST = handle;
