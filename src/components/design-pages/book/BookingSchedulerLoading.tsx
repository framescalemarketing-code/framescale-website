"use client";

import { Loader2 } from "lucide-react";
import { PAGE_SHELL_BOOK_MAIN } from "@/lib/page-layout";

export const BookingSchedulerLoading = () => (
  <section className="relative pb-16 sm:pb-20 lg:pb-28 bg-white">
    <div className={PAGE_SHELL_BOOK_MAIN}>
      <div className="flex min-h-80 flex-col items-center justify-center gap-3 rounded-2xl border border-(--brand-primary)/20 bg-linear-to-br from-(--brand-primary)/5 to-(--brand-secondary)/5 p-8 sm:p-10">
        <Loader2 className="w-8 h-8 animate-spin text-(--brand-primary)" aria-hidden />
        <p className="font-body text-sm text-(--brand-neutral)">Loading calendar…</p>
      </div>
    </div>
  </section>
);
