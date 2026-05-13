const BASE_EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Stricter than a single regex: shape, length, and a real-looking domain with TLD. */
export function validateEmailInput(email: string): string | undefined {
  const e = email.trim().toLowerCase();
  if (!e) return "Email is required.";
  if (!BASE_EMAIL_RE.test(e)) return "Enter a valid email address.";
  const at = e.indexOf("@");
  if (at < 1) return "Enter a valid email address.";
  const local = e.slice(0, at);
  const domain = e.slice(at + 1);
  if (local.length > 64 || domain.length > 253) return "Enter a valid email address.";
  if (!domain.includes(".")) return "Enter a valid email address.";
  const tld = domain.split(".").pop() ?? "";
  if (tld.length < 2 || !/^[a-z0-9-]+$/i.test(tld)) return "Enter a valid email address.";
  if (e.includes("..")) return "Enter a valid email address.";
  return undefined;
}

export function validateEmailConfirm(email: string, confirm: string): string | undefined {
  const primary = validateEmailInput(email);
  if (primary) return primary;
  const c = confirm.trim();
  if (!c) return "Please confirm your email.";
  if (email.trim().toLowerCase() !== c.toLowerCase()) return "Email addresses do not match.";
  return undefined;
}
