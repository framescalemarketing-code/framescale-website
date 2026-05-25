"use client";

import { useId } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { Button } from "@/components/design/Button";
import { TurnstileWidget } from "@/components/design/TurnstileWidget";
import type { useBookingScheduler } from "@/lib/booking/use-booking-scheduler";
import type { BookingSlotDto } from "@/lib/booking-schedule";
import { PAGE_BOOKING_CAL_GRID, PAGE_SHELL_BOOK_MAIN } from "@/lib/page-layout";
import { slideUp } from "@/lib/motion";

type Scheduler = ReturnType<typeof useBookingScheduler>;

type BookingSchedulerPanelProps = {
  scheduler: Scheduler;
  turnstileSiteKey: string;
};

export const BookingSchedulerPanel = ({
  scheduler,
  turnstileSiteKey,
}: BookingSchedulerPanelProps) => {
  const turnstileDescriptionId = useId();
  const {
    payload,
    loading,
    loadError,
    monthTitle,
    prevDisabled,
    nextDisabled,
    goToPreviousMonth,
    goToNextMonth,
    gridCells,
    slotsByDay,
    todayKey,
    selectedDay,
    selectedDaySlots,
    selectedSlot,
    selectDay,
    selectSlot,
    name,
    setName,
    email,
    setEmail,
    confirmEmail,
    setConfirmEmail,
    company,
    setCompany,
    notes,
    setNotes,
    setTurnstileToken,
    turnstileResetCount,
    formError,
    setFormError,
    submitting,
    handleBook,
  } = scheduler;

  return (
    <section className="relative pb-14 sm:pb-16 lg:pb-20 bg-white">
      <div className={PAGE_SHELL_BOOK_MAIN}>
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-2xl border border-(--brand-primary)/20 bg-linear-to-br from-(--brand-primary)/5 to-(--brand-secondary)/5 p-4 sm:p-5 lg:p-6 shadow-[var(--shadow-depth-2)]"
        >
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-3 sm:gap-4 mb-5">
            <div className="flex items-center gap-2 justify-center sm:justify-start w-full sm:w-auto min-w-0">
              <button
                type="button"
                aria-label="Previous month"
                disabled={prevDisabled}
                onClick={goToPreviousMonth}
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
                onClick={goToNextMonth}
                className="shrink-0 p-2 rounded-lg border border-border bg-white text-(--brand-deep) hover:bg-muted disabled:opacity-40 disabled:pointer-events-none transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            {loading && (
              <div className="flex items-center justify-center gap-2 text-(--brand-neutral) font-body text-sm w-full sm:w-auto">
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden />
                Loading open times...
              </div>
            )}
          </div>

          {loadError && (
            <p className="text-center font-body text-destructive mb-4" role="alert">
              {loadError}
            </p>
          )}

          <div className={PAGE_BOOKING_CAL_GRID}>
            <div className="rounded-xl border border-border bg-white p-3 sm:p-4 lg:p-5 shadow-[var(--shadow-depth-1)] min-w-0">
              {loading && !payload ? (
                <div className="flex flex-col items-center justify-center min-h-[280px] gap-3 text-(--brand-neutral) font-body text-sm">
                  <Loader2 className="w-8 h-8 animate-spin text-(--brand-primary)" aria-hidden />
                  Loading calendar...
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
                      const isToday = cell.key === todayKey;
                      return (
                        <button
                          key={cell.key}
                          type="button"
                          disabled={!has}
                          onClick={() => selectDay(cell.key)}
                          aria-label={`${cell.key}${has ? `, ${openCount} bookable slots` : ", closed"}`}
                          aria-pressed={isSelected && has}
                          className={`relative aspect-square min-h-9 sm:min-h-10 md:min-h-11 rounded-md sm:rounded-lg font-ui text-xs sm:text-sm font-medium transition-colors
                          ${!has ? "text-(--brand-neutral)/35 cursor-not-allowed bg-muted/40" : "text-(--brand-deep) hover:bg-(--brand-primary)/10 cursor-pointer"}
                          ${isSelected && has ? "ring-2 ring-(--brand-primary) bg-(--brand-primary)/10" : ""}
                          ${isToday && has ? "border border-(--brand-secondary)" : ""}
                        `}
                        >
                          {cell.day}
                          {openCount > 0 ? (
                            <span
                              className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-(--brand-primary)"
                              aria-hidden
                            />
                          ) : null}
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>

            <div className="rounded-xl border border-border bg-white p-4 sm:p-5 shadow-[var(--shadow-depth-1)] min-h-[240px] sm:min-h-[260px] flex flex-col min-w-0 lg:min-h-[25rem] xl:min-h-[27rem]">
              {!selectedDay && (
                <p className="font-body text-(--brand-neutral) text-sm sm:text-base leading-relaxed">
                  Choose a weekday to see available times. Booked means the time is taken, and Unavailable means it is not open to book.
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
                  <ul className="flex flex-col gap-2 flex-1 min-h-0 max-h-44 sm:max-h-52 md:max-h-60 lg:max-h-56 xl:max-h-64 overflow-y-auto overscroll-auto pr-1 -mr-1">
                    {selectedDaySlots.map((slot) => (
                      <SlotRow
                        key={slot.start}
                        slot={slot}
                        selected={selectedSlot?.start === slot.start && slot.status === "available"}
                        onSelect={() => selectSlot(slot)}
                      />
                    ))}
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
                      autoComplete="organization"
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
                  {turnstileSiteKey ? (
                    <div className="space-y-3">
                      <TurnstileWidget
                        siteKey={turnstileSiteKey}
                        onTokenChange={setTurnstileToken}
                        resetSignal={turnstileResetCount}
                        label="Booking form security verification"
                        descriptionId={turnstileDescriptionId}
                      />
                      <p id={turnstileDescriptionId} className="font-body text-xs text-(--brand-neutral)">
                        This security check helps block spam and fake bookings.
                      </p>
                    </div>
                  ) : null}
                  {formError && (
                    <p className="text-sm text-destructive font-body" role="alert">
                      {formError}
                    </p>
                  )}
                  <Button type="submit" size="md" className="w-full" icon="none" disabled={submitting}>
                    {submitting ? "Booking..." : "Confirm this time"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

function SlotRow({
  slot,
  selected,
  onSelect,
}: {
  slot: BookingSlotDto;
  selected: boolean;
  onSelect: () => void;
}) {
  if (slot.status === "available") {
    return (
      <li>
        <button
          type="button"
          onClick={onSelect}
          aria-pressed={selected}
          className={`w-full text-left px-3 py-2.5 rounded-lg font-body text-sm border transition-colors flex justify-between items-center gap-2
            ${
              selected
                ? "border-(--brand-primary) bg-(--brand-primary)/10 text-(--brand-deep)"
                : "border-border hover:border-(--brand-primary)/40 text-(--brand-deep)"
            }`}
        >
          <span>{slot.label}</span>
          <span className="font-ui text-[10px] uppercase tracking-wide text-(--brand-primary) shrink-0">Book</span>
        </button>
      </li>
    );
  }

  const tag = slot.status === "booked" ? "Booked" : "Unavailable";
  return (
    <li>
      <div
        className="w-full px-3 py-2.5 rounded-lg font-body text-sm border border-border bg-muted/50 text-(--brand-neutral) flex justify-between items-center gap-2"
        aria-label={`${slot.label}, ${tag}`}
      >
        <span>{slot.label}</span>
        <span className="font-ui text-[10px] uppercase tracking-wide shrink-0">{tag}</span>
      </div>
    </li>
  );
}
