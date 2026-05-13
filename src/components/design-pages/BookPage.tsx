"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Calendar, ChevronLeft, ChevronRight, Loader2, Mail } from "lucide-react";
import { DateTime } from "luxon";
import { Button } from "../design/Button";
import { PageBackLink } from "../design/PageBackLink";
import { site } from "@/lib/site";
import { slideUp } from "@/lib/motion";
import { validateEmailConfirm } from "@/lib/email-validation";
import { BOOKING_ZONE } from "@/lib/booking-schedule";
import {
  PAGE_BOOK_FOOTER,
  PAGE_BOOKING_CAL_GRID,
  PAGE_HERO_INNER,
  PAGE_SHELL_BOOK_MAIN,
  PAGE_SHELL_FLUID_RELATIVE_FULL,
  PAGE_SUCCESS_INNER,
} from "@/lib/page-layout";

type BookingSlotStatus = "available" | "booked" | "unavailable";

type BookingSlotDto = {
  start: string;
  label: string;
  calendarDay: string;
  status: BookingSlotStatus;
};

type SlotsPayload = {
  timeZone: string;
  year: number;
  month: number;
  firstWeekdayPad: number;
  daysInMonth: number;
  slots: BookingSlotDto[];
};

function initialYearMonth(): string {
  return DateTime.now().setZone(BOOKING_ZONE).toFormat("yyyy-MM");
}

function shiftYearMonth(ym: string, deltaMonths: number): string {
  const [y, m] = ym.split("-").map(Number);
  return DateTime.fromObject({ year: y, month: m, day: 1 }, { zone: BOOKING_ZONE })
    .plus({ months: deltaMonths })
    .toFormat("yyyy-MM");
}

function ymStart(ym: string): DateTime {
  const [y, m] = ym.split("-").map(Number);
  return DateTime.fromObject({ year: y, month: m, day: 1 }, { zone: BOOKING_ZONE });
}

export const BookPage = () => {
  const [yearMonth, setYearMonth] = useState(initialYearMonth);
  const [payload, setPayload] = useState<SlotsPayload | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<BookingSlotDto | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [company, setCompany] = useState("");
  const [notes, setNotes] = useState("");
  const [formError, setFormError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [bookedWhenLabel, setBookedWhenLabel] = useState<string | null>(null);

  const [todayKey, setTodayKey] = useState<string | null>(null);
  useEffect(() => {
    setTodayKey(DateTime.now().setZone(BOOKING_ZONE).toFormat("yyyy-MM-dd"));
  }, []);

  const fetchSlots = useCallback(async (ym: string) => {
    setLoading(true);
    setLoadError(null);
    try {
      const res = await fetch(`/api/booking?month=${encodeURIComponent(ym)}`, { method: "GET" });
      const data = (await res.json().catch(() => ({}))) as SlotsPayload & { error?: string };
      if (!res.ok) {
        throw new Error(data.error || "Could not load times.");
      }
      setPayload(data);
    } catch (e) {
      setPayload(null);
      setLoadError(e instanceof Error ? e.message : "Could not load times.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchSlots(yearMonth);
  }, [yearMonth, fetchSlots]);

  const slotsByDay = useMemo(() => {
    const map = new Map<string, BookingSlotDto[]>();
    for (const s of payload?.slots ?? []) {
      const list = map.get(s.calendarDay) ?? [];
      list.push(s);
      map.set(s.calendarDay, list);
    }
    for (const list of map.values()) {
      list.sort((a, b) => a.start.localeCompare(b.start));
    }
    return map;
  }, [payload]);

  const monthTitle = useMemo(() => {
    const dt = ymStart(yearMonth);
    return dt.toFormat("LLLL yyyy");
  }, [yearMonth]);

  const minYm = useMemo(() => DateTime.now().setZone(BOOKING_ZONE).startOf("month").toFormat("yyyy-MM"), []);
  const maxYm = useMemo(
    () => DateTime.now().setZone(BOOKING_ZONE).plus({ months: 3 }).startOf("month").toFormat("yyyy-MM"),
    [],
  );

  const prevDisabled = yearMonth <= minYm;
  const nextDisabled = yearMonth >= maxYm;

  useEffect(() => {
    setSelectedDay(null);
    setSelectedSlot(null);
    setFormError(null);
  }, [yearMonth]);

  const firstPad = payload?.firstWeekdayPad ?? 0;
  const daysInMonth = payload?.daysInMonth ?? 31;

  const gridCells = useMemo(() => {
    if (!payload) return [];
    const cells: ({ kind: "empty" } | { kind: "day"; day: number; key: string })[] = [];
    for (let i = 0; i < firstPad; i++) cells.push({ kind: "empty" });
    for (let d = 1; d <= daysInMonth; d++) {
      const dayKey = ymStart(yearMonth).set({ day: d }).toFormat("yyyy-MM-dd");
      cells.push({ kind: "day", day: d, key: dayKey });
    }
    while (cells.length % 7 !== 0) cells.push({ kind: "empty" });
    return cells;
  }, [payload, firstPad, daysInMonth, yearMonth]);

  const selectedDaySlots = selectedDay ? (slotsByDay.get(selectedDay) ?? []) : [];

  const resetForm = () => {
    setName("");
    setEmail("");
    setConfirmEmail("");
    setCompany("");
    setNotes("");
    setFormError(null);
    setSelectedSlot(null);
  };

  const handleBook = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot || selectedSlot.status !== "available") return;
    const emailCheck = validateEmailConfirm(email, confirmEmail);
    if (emailCheck) {
      setFormError(emailCheck);
      return;
    }
    setSubmitting(true);
    setFormError(null);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          startsAt: selectedSlot.start,
          name,
          email,
          confirmEmail,
          company,
          notes,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string; whenLabel?: string };
      if (!res.ok) {
        throw new Error(data.error || "Booking failed.");
      }
      setBookedWhenLabel(data.whenLabel ?? selectedSlot.label);
      setSuccess(true);
      resetForm();
      setSelectedDay(null);
      void fetchSlots(yearMonth);
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Booking failed.");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen">
        <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-linear-to-br from-white via-(--brand-secondary)/5 to-white pt-28 pb-16 sm:pt-32 sm:pb-20">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 right-10 w-96 h-96 bg-linear-to-br from-(--brand-primary)/10 to-(--brand-secondary)/10 rounded-full blur-3xl" />
          </div>
          <div className={PAGE_SUCCESS_INNER}>
            <motion.div variants={slideUp} initial="hidden" animate="show" aria-live="polite">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-(--brand-primary) to-(--brand-secondary)">
                <Calendar className="h-8 w-8 text-white" aria-hidden />
              </div>
              <h1
                className="font-headline text-3xl sm:text-4xl md:text-5xl xl:text-6xl mb-4"
                style={{ color: "var(--brand-deep)" }}
              >
                You are on the calendar
              </h1>
              {bookedWhenLabel && (
                <p className="font-headline text-lg sm:text-xl md:text-2xl text-(--brand-primary) mb-6 leading-snug px-1">
                  {bookedWhenLabel}
                </p>
              )}
              <p className="font-body text-lg text-(--brand-neutral) leading-relaxed mb-4">
                Your time is saved on our site. You should receive a confirmation email at the address you entered.
                We also notify our team so everyone has the same details.
              </p>
              <p className="font-body text-sm text-(--brand-neutral) leading-relaxed mb-10">
                Need to change it? Email{" "}
                <a href={`mailto:${site.email}`} className="text-(--brand-primary) font-semibold hover:underline">
                  {site.email}
                </a>{" "}
                and reference the time you chose.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  icon="arrow"
                  onClick={() => {
                    setSuccess(false);
                    setBookedWhenLabel(null);
                  }}
                >
                  Book another time
                </Button>
                <Button variant="ghost" size="lg" href="/" icon="arrow">
                  Back to home
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[28vh] sm:min-h-[32vh] flex items-center overflow-hidden bg-linear-to-br from-white via-(--brand-secondary)/5 to-white pt-28 pb-8 sm:pt-32 sm:pb-10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-linear-to-br from-(--brand-primary)/10 to-(--brand-secondary)/10 rounded-full blur-3xl" />
        </div>

        <div className={PAGE_SHELL_FLUID_RELATIVE_FULL}>
          <div className={PAGE_HERO_INNER}>
            <motion.div variants={slideUp} initial="hidden" animate="show">
              <PageBackLink className="mb-6" />
              <span className="inline-block px-3 py-1.5 rounded-full bg-linear-to-r from-(--brand-primary)/10 to-(--brand-secondary)/10 border border-(--brand-primary)/20 font-ui text-xs font-semibold uppercase tracking-wide text-(--brand-primary) mb-6">
                Intro Call
              </span>
              <h1
                className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.5rem] 2xl:text-7xl mb-4 sm:mb-5 leading-tight px-1"
                style={{ color: "var(--brand-deep)" }}
              >
                Book your intro call
              </h1>
              <p
                className="font-body text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl xl:max-w-3xl mx-auto px-1"
                style={{ color: "var(--brand-neutral)" }}
              >
                Choose an open slot below. Hours are Monday through Friday, 9:00 AM to 5:00 PM Pacific, in
                thirty-minute blocks. The last start is 4:30 PM so the call ends by 5:00 PM.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative pb-16 sm:pb-20 lg:pb-28 bg-white">
        <div className={PAGE_SHELL_BOOK_MAIN}>
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-2xl border border-(--brand-primary)/20 bg-linear-to-br from-(--brand-primary)/5 to-(--brand-secondary)/5 p-4 sm:p-6 lg:p-8 xl:p-10 shadow-[var(--shadow-depth-2)]"
          >
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-3 sm:gap-4 mb-6">
              <div className="flex items-center gap-2 justify-center sm:justify-start w-full sm:w-auto min-w-0">
                <button
                  type="button"
                  aria-label="Previous month"
                  disabled={prevDisabled}
                  onClick={() => setYearMonth((ym) => shiftYearMonth(ym, -1))}
                  className="shrink-0 p-2 rounded-lg border border-border bg-white text-(--brand-deep) hover:bg-muted disabled:opacity-40 disabled:pointer-events-none transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <h2
                  className="font-headline text-xl sm:text-2xl min-w-0 flex-1 sm:flex-initial sm:min-w-[10rem] text-center px-2"
                  style={{ color: "var(--brand-deep)" }}
                >
                  {monthTitle}
                </h2>
                <button
                  type="button"
                  aria-label="Next month"
                  disabled={nextDisabled}
                  onClick={() => setYearMonth((ym) => shiftYearMonth(ym, 1))}
                  className="shrink-0 p-2 rounded-lg border border-border bg-white text-(--brand-deep) hover:bg-muted disabled:opacity-40 disabled:pointer-events-none transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              {loading && (
                <div className="flex items-center justify-center gap-2 text-(--brand-neutral) font-body text-sm w-full sm:w-auto">
                  <Loader2 className="w-4 h-4 animate-spin" aria-hidden />
                  Loading open times…
                </div>
              )}
            </div>

            {loadError && (
              <p className="text-center font-body text-destructive mb-4" role="alert">
                {loadError}
              </p>
            )}

            <div className={PAGE_BOOKING_CAL_GRID}>
              <div className="rounded-xl border border-border bg-white p-3 sm:p-5 lg:p-6 shadow-[var(--shadow-depth-1)] min-w-0">
                {loading && !payload ? (
                  <div className="flex flex-col items-center justify-center min-h-[280px] gap-3 text-(--brand-neutral) font-body text-sm">
                    <Loader2 className="w-8 h-8 animate-spin text-(--brand-primary)" aria-hidden />
                    Loading calendar…
                  </div>
                ) : !payload ? (
                  <div className="min-h-[200px] flex items-center justify-center font-body text-sm text-(--brand-neutral)">
                    No calendar data.
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-7 gap-0.5 sm:gap-1 text-center font-ui text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-(--brand-neutral) mb-1.5 sm:mb-2">
                      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                        <div key={d} className="py-1.5 sm:py-2 truncate px-0.5">
                          {d}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-0.5 sm:gap-1">
                      {gridCells.map((cell, idx) => {
                        if (cell.kind === "empty") {
                          return <div key={`e-${idx}`} className="aspect-square min-h-9 sm:min-h-10" />;
                        }
                        const daySlots = slotsByDay.get(cell.key) ?? [];
                        const has = daySlots.length > 0;
                        const openCount = daySlots.filter((s) => s.status === "available").length;
                        const isSelected = selectedDay === cell.key;
                        const isToday = todayKey !== null && cell.key === todayKey;
                        return (
                          <button
                            key={cell.key}
                            type="button"
                            disabled={!has}
                            onClick={() => {
                              setSelectedDay(cell.key);
                              setSelectedSlot(null);
                              setFormError(null);
                            }}
                            aria-label={`${cell.key}${has ? `, ${openCount} bookable slots` : ", closed"}`}
                            className={`relative aspect-square min-h-9 sm:min-h-10 md:min-h-11 rounded-md sm:rounded-lg font-ui text-xs sm:text-sm font-medium transition-colors
                          ${!has ? "text-(--brand-neutral)/35 cursor-not-allowed bg-muted/40" : "text-(--brand-deep) hover:bg-(--brand-primary)/10 cursor-pointer"}
                          ${isSelected && has ? "ring-2 ring-(--brand-primary) bg-(--brand-primary)/10" : ""}
                          ${isToday && has ? "border border-(--brand-secondary)" : ""}
                        `}
                          >
                            {cell.day}
                            {openCount > 0 ? (
                              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-(--brand-primary)" aria-hidden />
                            ) : null}
                          </button>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>

              <div className="rounded-xl border border-border bg-white p-4 sm:p-5 lg:p-6 shadow-[var(--shadow-depth-1)] min-h-[260px] sm:min-h-[280px] flex flex-col min-w-0 lg:min-h-[min(32rem,70vh)] xl:min-h-[min(36rem,72vh)]">
                {!selectedDay && (
                  <p className="font-body text-(--brand-neutral) text-sm sm:text-base leading-relaxed">
                    Choose a weekday on the calendar. Times that are already taken stay visible with a Booked
                    label. Gray rows marked Closed are outside the booking window or too soon to book.
                  </p>
                )}
                {selectedDay && selectedDaySlots.length === 0 && (
                  <p className="font-body text-(--brand-neutral) text-sm">Weekends are closed. Pick a weekday.</p>
                )}
                {selectedDaySlots.length > 0 && (
                  <div className="space-y-3 flex flex-col flex-1 min-h-0">
                    <p className="font-ui text-xs font-semibold uppercase tracking-wide text-(--brand-primary) shrink-0">
                      Times (Pacific)
                    </p>
                    <ul className="flex flex-col gap-2 flex-1 min-h-0 max-h-44 sm:max-h-52 md:max-h-60 lg:max-h-none overflow-y-auto overscroll-contain pr-1 -mr-1">
                      {selectedDaySlots.map((slot) => {
                        const isSel = selectedSlot?.start === slot.start && slot.status === "available";
                        if (slot.status === "available") {
                          return (
                            <li key={slot.start}>
                              <button
                                type="button"
                                onClick={() => {
                                  setSelectedSlot(slot);
                                  setFormError(null);
                                }}
                                className={`w-full text-left px-3 py-2.5 rounded-lg font-body text-sm border transition-colors flex justify-between items-center gap-2
                                  ${
                                    isSel
                                      ? "border-(--brand-primary) bg-(--brand-primary)/10 text-(--brand-deep)"
                                      : "border-border hover:border-(--brand-primary)/40 text-(--brand-deep)"
                                  }`}
                              >
                                <span>{slot.label}</span>
                                <span className="font-ui text-[10px] uppercase tracking-wide text-(--brand-primary) shrink-0">
                                  Open
                                </span>
                              </button>
                            </li>
                          );
                        }
                        const tag = slot.status === "booked" ? "Booked" : "Closed";
                        return (
                          <li key={slot.start}>
                            <div
                              className="w-full px-3 py-2.5 rounded-lg font-body text-sm border border-border bg-muted/50 text-(--brand-neutral) flex justify-between items-center gap-2"
                              aria-label={`${slot.label}, ${tag}`}
                            >
                              <span>{slot.label}</span>
                              <span className="font-ui text-[10px] uppercase tracking-wide shrink-0">{tag}</span>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                {selectedSlot?.status === "available" && (
                  <form
                    onSubmit={handleBook}
                    className="mt-4 sm:mt-6 space-y-4 border-t border-border pt-4 sm:pt-6 shrink-0"
                  >
                    <p className="font-ui text-xs font-semibold uppercase tracking-wide text-(--brand-primary)">
                      Your details
                    </p>
                    <div>
                      <label htmlFor="book-name" className="block font-ui text-xs font-medium mb-1 text-(--brand-deep)">
                        Name *
                      </label>
                      <input
                        id="book-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-3 py-2 rounded-lg border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-(--brand-primary)"
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label htmlFor="book-email" className="block font-ui text-xs font-medium mb-1 text-(--brand-deep)">
                        Email *
                      </label>
                      <input
                        id="book-email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setFormError(null);
                        }}
                        required
                        className="w-full px-3 py-2 rounded-lg border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-(--brand-primary)"
                        autoComplete="email"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="book-confirm-email"
                        className="block font-ui text-xs font-medium mb-1 text-(--brand-deep)"
                      >
                        Confirm email *
                      </label>
                      <input
                        id="book-confirm-email"
                        type="email"
                        value={confirmEmail}
                        onChange={(e) => {
                          setConfirmEmail(e.target.value);
                          setFormError(null);
                        }}
                        required
                        className="w-full px-3 py-2 rounded-lg border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-(--brand-primary)"
                        autoComplete="off"
                        placeholder="Re-enter your email"
                      />
                    </div>
                    <div>
                      <label htmlFor="book-company" className="block font-ui text-xs font-medium mb-1 text-(--brand-deep)">
                        Company (optional)
                      </label>
                      <input
                        id="book-company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-(--brand-primary)"
                      />
                    </div>
                    <div>
                      <label htmlFor="book-notes" className="block font-ui text-xs font-medium mb-1 text-(--brand-deep)">
                        Notes (optional)
                      </label>
                      <textarea
                        id="book-notes"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 rounded-lg border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-(--brand-primary) resize-none"
                        placeholder="Anything you want us to read before the call"
                      />
                    </div>
                    {formError && (
                      <p className="text-sm text-destructive font-body" role="alert">
                        {formError}
                      </p>
                    )}
                    <Button type="submit" size="md" className="w-full" icon="none" disabled={submitting}>
                      {submitting ? "Booking…" : "Confirm this time"}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            <p className="mt-6 sm:mt-8 text-center font-body text-sm sm:text-base text-(--brand-neutral) max-w-2xl xl:max-w-3xl mx-auto px-1">
              Prefer email first?{" "}
              <Link href="/contact" className="text-(--brand-primary) font-semibold hover:underline">
                Use the contact form
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-12 sm:py-16 bg-muted border-t border-border pb-[max(3rem,env(safe-area-inset-bottom,0px))]">
        <div className={PAGE_BOOK_FOOTER}>
          <Mail className="w-8 h-8 text-(--brand-primary) mx-auto mb-4" aria-hidden />
          <p className="font-body text-(--brand-neutral) leading-relaxed">
            Bookings use the same systems as the contact form on this site. We do not plug in a separate paid
            scheduling vendor. After you submit, you get a confirmation email and this screen. Questions?{" "}
            <a href={`mailto:${site.email}`} className="text-(--brand-primary) font-semibold hover:underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
};
