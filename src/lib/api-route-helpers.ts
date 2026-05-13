import type { NextRequest } from "next/server";

/** First hop from `x-forwarded-for`, else `x-real-ip`. */
export function getClientIp(req: NextRequest): string | null {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim() || null;
  return req.headers.get("x-real-ip") || null;
}

/** Trim and cap length for untrusted string fields from JSON bodies. */
export function cleanString(value: string | undefined, maxLen: number): string {
  return (value ?? "").trim().slice(0, maxLen);
}
