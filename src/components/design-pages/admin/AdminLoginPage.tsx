"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { LockKeyhole } from "lucide-react";
import { Button } from "@/components/design/Button";
import { PageBackLink } from "@/components/design/PageBackLink";
import { ADMIN_EMAIL } from "@/lib/admin-config";
import { slideUp } from "@/lib/motion";
import { PAGE_HERO_INNER, PAGE_SHELL_FLUID_RELATIVE_FULL } from "@/lib/page-layout";
import { getSupabaseBrowserClient } from "@/lib/supabase/browser";
import { motion } from "motion/react";

async function wait(ms: number) {
  await new Promise((resolve) => window.setTimeout(resolve, ms));
}

export function AdminLoginPage() {
  const router = useRouter();
  const supabase = useMemo(() => getSupabaseBrowserClient(), []);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    void (async () => {
      const { data } = await supabase.auth.getUser();
      if (!active) return;

      if (data.user?.email?.toLowerCase() === ADMIN_EMAIL) {
        router.replace("/admin");
        return;
      }

      setLoading(false);
    })();

    return () => {
      active = false;
    };
  }, [router, supabase]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setError(null);

    try {
      const bootstrapResponse = await fetch("/api/admin/bootstrap", {
        method: "POST",
      });

      if (!bootstrapResponse.ok) {
        throw new Error("Unable to prepare the admin login.");
      }

      let signInError: Error | null = null;
      const normalizedPassword = password.trim();

      for (let attempt = 0; attempt < 3; attempt += 1) {
        const { error } = await supabase.auth.signInWithPassword({
          email: ADMIN_EMAIL,
          password: normalizedPassword,
        });

        if (!error) {
          signInError = null;
          break;
        }

        signInError = error;
        if (attempt < 2) {
          await wait(400);
        }
      }

      if (signInError) {
        throw new Error("The password was not accepted.");
      }

      router.replace("/admin");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to sign in.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-white via-(--brand-secondary)/5 to-white py-20 sm:py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 h-96 w-96 rounded-full bg-linear-to-br from-(--brand-primary)/10 to-(--brand-secondary)/10 blur-3xl" />
        </div>

        <div className={PAGE_SHELL_FLUID_RELATIVE_FULL}>
          <div className={`${PAGE_HERO_INNER} max-w-xl`}>
            <motion.div variants={slideUp} initial="hidden" animate="show">
              <PageBackLink className="mb-6 text-left" />

              <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 lg:p-10 shadow-[var(--shadow-depth-2)] text-left">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-(--brand-primary) to-(--brand-secondary)">
                    <LockKeyhole className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-ui text-xs font-semibold uppercase tracking-wide text-(--brand-primary)">
                      Admin Access
                    </p>
                    <h1 className="font-headline text-3xl" style={{ color: "var(--brand-deep)" }}>
                      Sign In
                    </h1>
                  </div>
                </div>

                <p className="mb-6 font-body text-base leading-relaxed text-(--brand-neutral)">
                  This private area lets you review intake submissions and booked calls in one place.
                </p>

                {loading ? (
                  <p className="font-body text-sm text-(--brand-neutral)">Checking your session...</p>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="mb-2 block font-ui text-sm font-medium text-(--brand-deep)">
                        Admin Email
                      </label>
                      <input
                        type="email"
                        value={ADMIN_EMAIL}
                        readOnly
                        className="w-full rounded-lg border border-border bg-muted/40 px-4 py-3 font-body text-sm text-(--brand-neutral)"
                      />
                    </div>

                    <div>
                      <label htmlFor="admin-password" className="mb-2 block font-ui text-sm font-medium text-(--brand-deep)">
                        Password
                      </label>
                      <input
                        id="admin-password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                        className="w-full rounded-lg border border-border px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-(--brand-primary)"
                        placeholder="Enter the admin password"
                      />
                    </div>

                    {error ? (
                      <p className="font-body text-sm text-destructive" role="alert">
                        {error}
                      </p>
                    ) : null}

                    <Button type="submit" size="lg" className="w-full" icon="none" disabled={submitting}>
                      {submitting ? "Signing In..." : "Open Admin"}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
