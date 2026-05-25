import { NextRequest, NextResponse } from "next/server";
import { getVerifiedAdminUser } from "@/lib/admin-auth";
import type { AdminDashboardPayload } from "@/lib/admin-types";
import { getSupabaseServerClient } from "@/lib/supabase/server";

function getBearerToken(req: NextRequest): string | null {
  const authHeader = req.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return null;
  }
  return authHeader.slice("Bearer ".length).trim();
}

export async function GET(req: NextRequest) {
  const token = getBearerToken(req);
  if (!token) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const adminUser = await getVerifiedAdminUser(token);
  if (!adminUser) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const supabase = getSupabaseServerClient();
    const [contactsResult, bookingsResult] = await Promise.all([
      supabase
        .from("contact_submissions")
        .select("id, created_at, name, email, company, industry, message, source_page, status")
        .order("created_at", { ascending: false })
        .limit(50),
      supabase
        .from("discovery_call_bookings")
        .select("id, created_at, starts_at, name, email, company, notes, status")
        .order("created_at", { ascending: false })
        .limit(50),
    ]);

    if (contactsResult.error || bookingsResult.error) {
      return NextResponse.json({ error: "Unable to load admin data." }, { status: 500 });
    }

    const payload: AdminDashboardPayload = {
      contacts: contactsResult.data ?? [],
      bookings: bookingsResult.data ?? [],
    };

    return NextResponse.json(payload, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return NextResponse.json({ error: "Unable to load admin data." }, { status: 500 });
  }
}
