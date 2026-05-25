"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarDays, LogOut, Mailbox, RefreshCw } from "lucide-react";
import { Button } from "@/components/design/Button";
import type { AdminDashboardPayload } from "@/lib/admin-types";
import { getSupabaseBrowserClient } from "@/lib/supabase/browser";
import { PAGE_SHELL_FLUID } from "@/lib/page-layout";

function formatDateTime(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function AdminDashboardPage() {
  const router = useRouter();
  const supabase = useMemo(() => getSupabaseBrowserClient(), []);
  const [payload, setPayload] = useState<AdminDashboardPayload | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadDashboard = async () => {
    const { data: sessionData } = await supabase.auth.getSession();
    const accessToken = sessionData.session?.access_token;

    if (!accessToken) {
      router.replace("/admin/login");
      return;
    }

    const response = await fetch("/api/admin/dashboard", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store",
    });

    const responseData = (await response.json().catch(() => ({}))) as AdminDashboardPayload & { error?: string };

    if (response.status === 401) {
      await supabase.auth.signOut();
      router.replace("/admin/login");
      return;
    }

    if (!response.ok) {
      throw new Error(responseData.error || "Unable to load the admin dashboard.");
    }

    setPayload(responseData);
  };

  useEffect(() => {
    let active = true;

    void (async () => {
      try {
        await loadDashboard();
      } catch (err) {
        if (!active) return;
        setError(err instanceof Error ? err.message : "Unable to load the admin dashboard.");
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    })();

    return () => {
      active = false;
    };
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);
    setError(null);
    try {
      await loadDashboard();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to refresh the admin dashboard.");
    } finally {
      setRefreshing(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.replace("/admin/login");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-(--brand-secondary)/5 to-white py-12 sm:py-16">
      <div className={PAGE_SHELL_FLUID}>
        <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-(--brand-primary)/20 bg-white p-6 shadow-(--shadow-depth-1) sm:p-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 font-ui text-xs font-semibold uppercase tracking-wide text-(--brand-primary)">
              Private Admin
            </p>
            <h1 className="font-headline text-3xl sm:text-4xl" style={{ color: "var(--brand-deep)" }}>
              Leads And Calls
            </h1>
            <p className="mt-3 max-w-2xl font-body text-sm leading-relaxed text-(--brand-neutral)">
              Review the latest intake submissions and booked calls without leaving the site.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              variant="ghost"
              size="md"
              icon="none"
              onClick={handleRefresh}
              disabled={loading || refreshing}
              className="gap-2"
            >
              <RefreshCw className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
              {refreshing ? "Refreshing..." : "Refresh"}
            </Button>
            <Button variant="primary" size="md" icon="none" onClick={handleSignOut} className="gap-2">
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>

        {error ? (
          <div className="mb-6 rounded-2xl border border-destructive/20 bg-white p-5 font-body text-sm text-destructive shadow-(--shadow-depth-1)">
            {error}
          </div>
        ) : null}

        <div className="mb-6 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-6 shadow-(--shadow-depth-1)">
            <div className="mb-4 flex items-center gap-3">
              <Mailbox className="h-5 w-5 text-(--brand-primary)" />
              <h2 className="font-headline text-2xl" style={{ color: "var(--brand-deep)" }}>
                Intake Submissions
              </h2>
            </div>
            <p className="font-body text-sm text-(--brand-neutral)">
              {loading ? "Loading..." : `${payload?.contacts.length ?? 0} recent submissions`}
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 shadow-(--shadow-depth-1)">
            <div className="mb-4 flex items-center gap-3">
              <CalendarDays className="h-5 w-5 text-(--brand-primary)" />
              <h2 className="font-headline text-2xl" style={{ color: "var(--brand-deep)" }}>
                Booked Calls
              </h2>
            </div>
            <p className="font-body text-sm text-(--brand-neutral)">
              {loading ? "Loading..." : `${payload?.bookings.length ?? 0} recent bookings`}
            </p>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <section className="rounded-2xl border border-border bg-white p-6 shadow-(--shadow-depth-1)">
            <h3 className="mb-5 font-headline text-2xl" style={{ color: "var(--brand-deep)" }}>
              Contact Submissions
            </h3>

            <div className="space-y-4">
              {loading ? (
                <p className="font-body text-sm text-(--brand-neutral)">Loading submissions...</p>
              ) : payload?.contacts.length ? (
                payload.contacts.map((contact) => (
                  <article key={contact.id} className="rounded-xl border border-border p-4">
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h4 className="font-ui text-base font-semibold text-(--brand-deep)">{contact.name}</h4>
                        <p className="font-body text-sm text-(--brand-neutral)">{contact.email}</p>
                      </div>
                      <span className="rounded-full bg-(--brand-primary)/10 px-3 py-1 font-ui text-[11px] font-semibold uppercase tracking-wide text-(--brand-primary)">
                        {contact.status}
                      </span>
                    </div>
                    <div className="mb-3 grid gap-1 font-body text-sm text-(--brand-neutral)">
                      <p>Received: {formatDateTime(contact.created_at)}</p>
                      <p>Company: {contact.company || "Not provided"}</p>
                      <p>Industry: {contact.industry || "Not provided"}</p>
                      <p>Source: {contact.source_page || "Unknown"}</p>
                    </div>
                    <p className="font-body text-sm leading-relaxed text-(--brand-deep)">{contact.message}</p>
                  </article>
                ))
              ) : (
                <p className="font-body text-sm text-(--brand-neutral)">No contact submissions yet.</p>
              )}
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-white p-6 shadow-(--shadow-depth-1)">
            <h3 className="mb-5 font-headline text-2xl" style={{ color: "var(--brand-deep)" }}>
              Call Bookings
            </h3>

            <div className="space-y-4">
              {loading ? (
                <p className="font-body text-sm text-(--brand-neutral)">Loading bookings...</p>
              ) : payload?.bookings.length ? (
                payload.bookings.map((booking) => (
                  <article key={booking.id} className="rounded-xl border border-border p-4">
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h4 className="font-ui text-base font-semibold text-(--brand-deep)">{booking.name}</h4>
                        <p className="font-body text-sm text-(--brand-neutral)">{booking.email}</p>
                      </div>
                      <span className="rounded-full bg-(--brand-primary)/10 px-3 py-1 font-ui text-[11px] font-semibold uppercase tracking-wide text-(--brand-primary)">
                        {booking.status}
                      </span>
                    </div>
                    <div className="mb-3 grid gap-1 font-body text-sm text-(--brand-neutral)">
                      <p>Booked: {formatDateTime(booking.created_at)}</p>
                      <p>Call Time: {formatDateTime(booking.starts_at)}</p>
                      <p>Company: {booking.company || "Not provided"}</p>
                    </div>
                    <p className="font-body text-sm leading-relaxed text-(--brand-deep)">
                      {booking.notes || "No notes were provided."}
                    </p>
                  </article>
                ))
              ) : (
                <p className="font-body text-sm text-(--brand-neutral)">No booked calls yet.</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
