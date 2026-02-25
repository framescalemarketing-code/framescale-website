"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";
type FormState = {
  name: string;
  business: string;
  email: string;
  goal: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    business: "",
    email: "",
    goal: "",
  });

  const mailto = useMemo(() => {
    const subject = encodeURIComponent("FrameScale inquiry");
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Business: ${form.business}`,
        `Email: ${form.email}`,
        "",
        "Goal:",
        form.goal,
      ].join("\n"),
    );

    return `mailto:${site.email}?subject=${subject}&body=${body}`;
  }, [form]);

  return (
    <main>
      <section className="bg-gradient-to-b from-brand-sand to-white">
        <Container>
          <div className="py-14 md:py-18">
            <h1 className="font-display text-4xl tracking-tight text-brand-ink md:text-5xl">
              Contact
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-brand-ink/75">
              Share a few details and you will receive a suggested starting
              point. You can also reach out directly via email or phone.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid gap-10 py-14 md:grid-cols-12 md:py-18">
            <div className="md:col-span-7">
              <form
                className="rounded-3xl bg-white p-8 ring-1 ring-brand-ink/10"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = mailto;
                }}
              >
                <div className="grid gap-5">
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold text-brand-ink">
                      Your name
                    </span>
                    <input
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      className="rounded-2xl border border-brand-ink/15 px-4 py-3 text-sm outline-none focus:border-brand-teal"
                      required
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm font-semibold text-brand-ink">
                      Business name
                    </span>
                    <input
                      value={form.business}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, business: e.target.value }))
                      }
                      className="rounded-2xl border border-brand-ink/15 px-4 py-3 text-sm outline-none focus:border-brand-teal"
                      required
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm font-semibold text-brand-ink">
                      Email
                    </span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      className="rounded-2xl border border-brand-ink/15 px-4 py-3 text-sm outline-none focus:border-brand-teal"
                      required
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm font-semibold text-brand-ink">
                      What are you trying to achieve?
                    </span>
                    <textarea
                      value={form.goal}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, goal: e.target.value }))
                      }
                      rows={6}
                      className="resize-none rounded-2xl border border-brand-ink/15 px-4 py-3 text-sm outline-none focus:border-brand-teal"
                      placeholder="Example: increase new patient appointments, improve eyewear conversion, build a referral system"
                      required
                    />
                  </label>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-brand-teal px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-tealDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
                  >
                    Send message
                  </button>

                  <p className="text-xs text-brand-ink/60">
                    This form opens your email client with a prefilled message.
                  </p>
                </div>
              </form>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-3xl bg-brand-tealDark p-8 text-white">
                <p className="text-sm font-semibold">Direct contact</p>
                <p className="mt-4 text-sm text-white/85">
                  Email: {site.email}
                </p>
                <p className="mt-2 text-sm text-white/85">Phone: {site.phone}</p>
                <p className="mt-6 text-sm text-white/85">
                  Common starting points
                </p>
                <ul className="mt-3 space-y-2 text-sm text-white/85">
                  <li>Local visibility and review system</li>
                  <li>Paid media cleanup and relaunch</li>
                  <li>Retention and recall program</li>
                  <li>Website and offer conversion review</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
