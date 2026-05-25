import { NextResponse } from "next/server";
import { ensureAdminSupabaseUser } from "@/lib/admin-auth";
import { ADMIN_EMAIL } from "@/lib/admin-config";

export async function POST() {
  try {
    await ensureAdminSupabaseUser();
    return NextResponse.json({ ok: true, email: ADMIN_EMAIL });
  } catch {
    return NextResponse.json({ error: "Unable to prepare the admin login right now." }, { status: 500 });
  }
}
