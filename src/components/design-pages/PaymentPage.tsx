"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Check, Lock } from "lucide-react";
import { Button } from "../design/Button";
import { PageBackLink } from "../design/PageBackLink";
import { slideUp, slideByIndex } from "@/lib/motion";
import { PAGE_HERO_INNER, PAGE_SHELL_FLUID, PAGE_SHELL_FLUID_RELATIVE_FULL } from "@/lib/page-layout";
import { paymentPackages, formatPrice } from "@/lib/pricing";

export const PaymentPage = () => {
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [errorNote, setErrorNote] = useState<string>("");
  const [canceled, setCanceled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("canceled")) setCanceled(true);
  }, []);

  const handlePay = async (packageId: string) => {
    if (loadingId) return;
    setErrorNote("");
    setCanceled(false);
    setLoadingId(packageId);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ packageId }),
      });

      const data = (await res.json().catch(() => ({}))) as { url?: string; error?: string };
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Unable to start checkout.");
      }

      // Redirect to Stripe's hosted Checkout page.
      window.location.href = data.url;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unable to start checkout right now.";
      setErrorNote(`${message} Please try again in a moment.`);
      setLoadingId(null);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden bg-linear-to-br from-white via-(--brand-secondary)/5 to-white pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-linear-to-br from-(--brand-primary)/10 to-(--brand-secondary)/10 rounded-full blur-3xl" />
        </div>

        <div className={PAGE_SHELL_FLUID_RELATIVE_FULL}>
          <div className={PAGE_HERO_INNER}>
            <motion.div variants={slideUp} initial="hidden" animate="show">
              <PageBackLink className="mb-6" />
              <span className="inline-block px-3 py-1.5 rounded-full bg-linear-to-r from-(--brand-primary)/10 to-(--brand-secondary)/10 border border-(--brand-primary)/20 font-ui text-xs font-semibold uppercase tracking-wide text-(--brand-primary) mb-6">
                Make a Payment
              </span>
              <h1
                className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 leading-tight px-1"
                style={{ color: "var(--brand-deep)" }}
              >
                Choose your package
              </h1>
              <p
                className="font-body text-base sm:text-lg md:text-xl lg:text-2xl mb-2 leading-relaxed max-w-2xl xl:max-w-3xl mx-auto px-1"
                style={{ color: "var(--brand-neutral)" }}
              >
                Pay securely with Stripe. Select a package below and you will be taken to a secure checkout to complete
                your payment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className={PAGE_SHELL_FLUID}>
          {canceled && (
            <div className="mx-auto mb-10 max-w-2xl rounded-xl border border-(--brand-primary)/30 bg-(--brand-primary)/5 px-5 py-4 text-center">
              <p className="font-body text-sm text-(--brand-deep)">
                Payment canceled. Nothing was charged, so you can pick a package and try again whenever you are ready.
              </p>
            </div>
          )}

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {paymentPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                variants={slideByIndex(index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex h-full flex-col rounded-2xl p-6 sm:p-8 ${
                  pkg.highlighted
                    ? "border-2 border-(--brand-primary) bg-linear-to-br from-(--brand-primary)/5 to-(--brand-secondary)/5 shadow-[var(--shadow-depth-2)]"
                    : "border border-border bg-white depth-card-soft"
                }`}
              >
                {pkg.highlighted && (
                  <span className="mb-4 inline-block w-fit rounded-full bg-linear-to-r from-(--brand-primary) to-(--brand-secondary) px-3 py-1 font-ui text-[11px] font-semibold uppercase tracking-wide text-white">
                    Most popular
                  </span>
                )}
                <h2 className="font-headline text-2xl mb-2" style={{ color: "var(--brand-deep)" }}>
                  {pkg.name}
                </h2>
                <p className="font-body text-sm leading-relaxed mb-6" style={{ color: "var(--brand-neutral)" }}>
                  {pkg.description}
                </p>
                <div className="mb-6">
                  <span
                    className="font-headline text-4xl bg-linear-to-r from-(--brand-primary) to-(--brand-secondary) bg-clip-text text-transparent"
                  >
                    {formatPrice(pkg.priceCents, pkg.currency)}
                  </span>
                </div>
                <ul className="mb-8 space-y-3 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-(--brand-primary)" />
                      <span className="font-body text-sm" style={{ color: "var(--brand-deep)" }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  type="button"
                  size="lg"
                  variant={pkg.highlighted ? "primary" : "ghost"}
                  icon="none"
                  className="w-full mt-auto"
                  disabled={loadingId === pkg.id}
                  onClick={() => handlePay(pkg.id)}
                >
                  {loadingId === pkg.id ? "Redirecting…" : `Pay ${formatPrice(pkg.priceCents, pkg.currency)}`}
                </Button>
              </motion.div>
            ))}
          </div>

          {errorNote && (
            <p className="mt-8 text-center font-body text-sm text-destructive">{errorNote}</p>
          )}

          <div className="mt-10 flex items-center justify-center gap-2 text-(--brand-neutral)">
            <Lock className="h-4 w-4" />
            <span className="font-body text-sm">Payments are processed securely by Stripe. Card details never touch our servers.</span>
          </div>
        </div>
      </section>
    </div>
  );
};
