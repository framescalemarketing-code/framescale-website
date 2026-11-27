import type { NextRequest } from "next/server";

/** First hop from `x-forwarded-for`, else `x-real-ip`. */
export function getClientIp(req: NextRequest): string | null {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim() || null;
  return req.headers.get("x-real-ip") || null;
}

/**
 * Trim and cap length for untrusted string fields from JSON bodies. Anything
 * that is not a string becomes empty, bare carriage returns become newlines and
 * other control characters are dropped, so a field cannot smuggle a line break
 * into an email or calendar file that a lenient parser would honor. That
 * includes the C1 controls (U+0080 to U+009F, which hold U+0085 NEL, a line
 * break to some parsers) and the bidirectional overrides, which can make a name
 * display reversed in the owner's inbox or calendar.
 */
export function cleanString(value: unknown, maxLen: number): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/\r\n?/g, "\n")
    .replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f\u2028\u2029\u202a-\u202e\u2066-\u2069]/g, "")
    .trim()
    .slice(0, maxLen);
}

/** Like `cleanString`, for fields that must stay on one line (names, numbers, addresses). */
export function cleanLine(value: unknown, maxLen: number): string {
  return cleanString(value, maxLen * 4).replace(/\s+/g, " ").trim().slice(0, maxLen);
}
