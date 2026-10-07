export type AccountProfile = { id: string; name: string; email: string; phone: string; role: string };

export function safeReturnTo(value?: string) {
  if (!value || value.includes("\\")) return undefined;
  const path = value.split("?")[0];
  if (!["/reservations", "/account", "/account/reservations"].includes(path)) return undefined;
  return value;
}

export function authErrorKey(code?: string, status?: number) {
  if (status === 429) return "rateLimit";
  switch (code) {
    case "INVALID_EMAIL_OR_PASSWORD": return "invalidCredentials";
    case "USER_ALREADY_EXISTS":
    case "USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL": return "duplicateEmail";
    case "INVALID_PASSWORD": return "invalidCurrentPassword";
    case "UNAUTHORIZED": return "sessionExpired";
    case "FORBIDDEN": return "forbidden";
    case "PASSWORD_TOO_SHORT":
    case "PASSWORD_TOO_LONG": return "password";
    case "INVALID_PROFILE":
    case "INVALID_INPUT":
    case "INVALID_EMAIL": return "invalidInput";
    default: return "server";
  }
}
