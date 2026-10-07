import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getAuth } from "@/lib/auth";
import { HttpError } from "@/lib/api";

export async function getSession(requestHeaders: Headers) {
  const auth = await getAuth();
  return auth.api.getSession({ headers: requestHeaders, query: { disableCookieCache: true } });
}

export async function requireUser(request: Request) {
  const session = await getSession(request.headers);
  if (!session) throw new HttpError(401, "UNAUTHORIZED");
  return session;
}

export async function requireAdmin(request: Request) {
  const session = await requireUser(request);
  if (session.user.role !== "admin") throw new HttpError(403, "FORBIDDEN");
  return session;
}

export async function requirePageUser(locale: string, returnTo = "/account") {
  const session = await getSession(await headers());
  if (!session) redirect(`/${locale}/login?next=${encodeURIComponent(returnTo)}`);
  return session;
}

export async function requirePageAdmin(locale: string) {
  const session = await getSession(await headers());
  if (!session) redirect(`/${locale}/admin/login`);
  if (session.user.role !== "admin") redirect(`/${locale}/account`);
  return session;
}
