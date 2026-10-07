import { NextResponse } from "next/server";

// The shared access key is retired. All accounts sign in through Better Auth.
export async function POST() {
  return NextResponse.json({ success: false, error: "USE_ACCOUNT_LOGIN" }, { status: 410 });
}
