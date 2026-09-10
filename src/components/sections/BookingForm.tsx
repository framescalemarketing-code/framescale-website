"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { TurnstileWidget } from "@/components/system/TurnstileWidget";
import { withContactLinks } from "@/components/ui/contact-links";
import { booking } from "@/content/booking";
import { trackEvent } from "@/lib/analytics";
import { validateEmailInput } from "@/lib/email-validation";

type Slot = {
  start: string;
  label: string;
  calendarDay: string;
  status: "available" | "unavailable";
};

type MonthPayload = {
  year: number;
  month: number;
  monthLabel: string;
  today: string;
  firstWeekdayPad: number;
  daysInMonth: number;
  prevMonth: string | null;
  nextMonth: string | null;
  slots: Slot[];
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  note: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const EMPTY: FormState = { name: "", email: "", phone: "", note: "" };
const HONEYPOT_FIELD = "fs_contact_extra";
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
/** Mirrors the server: digits and the usual punctuation, at least ten digits. */
const PHONE_SHAPE = /^\+?[\d\s().-]{10,40}$/;
/** Mirror the server's caps so nothing is cut off after the fact. */
const NAME_MAX = 120;
const NOTE_MAX = 1000;

function validateField(field: keyof FormState, value: string): string | undefined {
  if (field === "name" && !value.trim()) return booking.validation.name;
  if (field === "email") return validateEmailInput(value);
  if (field === "phone") {
    const trimmed = value.trim();
    if (trimmed.replace(/\D/g, "").length < 10 || !PHONE_SHAPE.test(trimmed)) return booking.validation.phone;
  }
  return undefined;
}

function dayKey(year: number, month: number, day: number): string {
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function monthKey(payload: MonthPayload): string {
  return `${payload.year}-${String(payload.month).padStart(2, "0")}`;
}

function longDayLabel(key: string): string {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}

/**
 * Day grid, time list, four fields. Availability comes from /api/booking,
 * which reads the calendar; the booking goes back the same way and is only
 * reported as made once the server has recorded it.
 */
export function BookingForm({ turnstileSiteKey }: { turnstileSiteKey: string }) {
  const [month, setMonth] = useState<string | null>(null);
  /** Bumped to fetch the month on screen again, from a 409 or the retry button. */
  const [reload, setReload] = useState(0);
  const [payload, setPayload] = useState<MonthPayload | null>(null);
  const [calendar, setCalendar] = useState<"loading" | "ready" | "down">("loading");
  const [day, setDay] = useState<string | null>(null);
  const [start, setStart] = useState<string | null>(null);

  const [data, setData] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [note, setNote] = useState("");
  const [noteHasLinks, setNoteHasLinks] = useState(false);
  const [bookedWhen, setBookedWhen] = useState("");
  const [bookedEmail, setBookedEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [token, setToken] = useState("");
  const [turnstileFailed, setTurnstileFailed] = useState(false);
  const [resetCount, setResetCount] = useState(0);

  const onTurnstileFailed = useCallback(() => setTurnstileFailed(true), []);

  const clearSelection = useCallback(() => {
    setDay(null);
    setStart(null);
  }, []);

  useEffect(() => {
    let cancelled = false;
    setCalendar("loading");
    (async () => {
      try {
        const res = await fetch(`/api/booking${month ? `?month=${month}` : ""}`, { cache: "no-store" });
        if (cancelled) return;
        // A month that was pageable when the payload was built can fall out
        // of the window at midnight. That is not the calendar being down; go
        // back to the current month, which the server always accepts.
        if (res.status === 400 && month) {
          clearSelection();
          setMonth(null);
          return;
        }
        if (!res.ok) throw new Error(String(res.status));
        const next = (await res.json()) as MonthPayload;
        if (cancelled) return;
        setPayload(next);
        setCalendar("ready");
      } catch {
        if (!cancelled) setCalendar("down");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [month, reload, clearSelection]);

  // Whatever was picked belongs to the month on screen, or to nothing.
  useEffect(() => {
    if (payload && day && !day.startsWith(monthKey(payload))) clearSelection();
  }, [payload, day, clearSelection]);

  const busy = calendar !== "ready" || status === "sending";

  /** Paging clears the selection, so nothing picked in another month is submitted unseen. */
  const goToMonth = (ym: string | null) => {
    if (busy || !ym) return;
    clearSelection();
    setMonth(ym);
  };

  const retry = () => {
    if (status === "sending") return;
    setReload((n) => n + 1);
  };

  const availableByDay = useMemo(() => {
    const counts = new Map<string, number>();
    for (const slot of payload?.slots ?? []) {
      if (slot.status === "available") counts.set(slot.calendarDay, (counts.get(slot.calendarDay) ?? 0) + 1);
    }
    return counts;
  }, [payload]);

  const daySlots = useMemo(
    () => (payload?.slots ?? []).filter((slot) => slot.calendarDay === day && slot.status === "available"),
    [payload, day],
  );

  const update = (field: keyof FormState, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
    }
  };

  const blur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateField(field, data[field]) }));
  };

  const fail = (message: string, links: boolean) => {
    setStatus("error");
    setNote(message);
    setNoteHasLinks(links);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (status === "sending" || turnstileFailed || calendar !== "ready") return;

    if (!start) {
      fail(booking.validation.slot, false);
      return;
    }

    const nextErrors: FieldErrors = {
      name: validateField("name", data.name),
      email: validateField("email", data.email),
      phone: validateField("phone", data.phone),
    };
    setErrors(nextErrors);
    setTouched({ name: true, email: true, phone: true });
    if (Object.values(nextErrors).some(Boolean)) {
      fail(booking.validation.summary, false);
      return;
    }

    if (turnstileSiteKey && !token) {
      fail(booking.validation.securityMissing, false);
      return;
    }

    setStatus("sending");
    setNote("");

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          startsAt: start,
          ...data,
          [HONEYPOT_FIELD]: honeypot,
          turnstileToken: token,
        }),
      });
      const body = (await res.json().catch(() => ({}))) as { error?: string; when?: string };

      if (res.status === 409) {
        // Taken, or gone stale. Drop it and fetch the month on screen again.
        setStart(null);
        setReload((n) => n + 1);
        fail(body.error || booking.errors.slotTaken, false);
        return;
      }
      if (res.status === 503) {
        fail(booking.errors.calendarDown, true);
        return;
      }
      if (res.status >= 500) {
        fail(booking.errors.generic, true);
        return;
      }
      if (!res.ok) {
        fail(body.error || booking.errors.generic, !body.error);
        return;
      }

      setBookedWhen(body.when ?? "");
      setBookedEmail(data.email);
      setStatus("sent");
      setData(EMPTY);
      setTouched({});
      setErrors({});
      trackEvent("generate_lead", { form_id: "booking", form_location: "book", location: "/book" });
    } catch {
      fail(booking.errors.generic, true);
    } finally {
      if (turnstileSiteKey) {
        setToken("");
        setResetCount((n) => n + 1);
      }
    }
  };

  if (status === "sent") {
    return (
      <div className="hairline-box flex flex-col items-start gap-4 rounded-xl p-8" role="status" aria-live="polite">
        <CheckCircle2 className="size-9 text-(--brand-primary)" aria-hidden="true" />
        <h2 className="display-sm text-(--brand-deep)">{booking.success.title}</h2>
        {bookedWhen ? <p className="font-ui font-semibold text-(--brand-deep)">{bookedWhen}</p> : null}
        {/* Function replacer, so a `$` in the address is inserted literally. */}
        <p className="text-(--text-muted)">{booking.success.body.replace("{address}", () => bookedEmail)}</p>
      </div>
    );
  }

  const securityFallback = (
    <p className="text-sm text-(--text-muted)">{withContactLinks(booking.securityFallback)}</p>
  );

  const cells: Array<number | null> = [
    ...Array.from({ length: payload?.firstWeekdayPad ?? 0 }, () => null),
    ...Array.from({ length: payload?.daysInMonth ?? 0 }, (_, index) => index + 1),
  ];

  // aria-disabled rather than disabled: a button that goes inert under the
  // keyboard user's focus must keep that focus, so the click is ignored instead.
  const canGoEarlier = !busy && Boolean(payload?.prevMonth);
  const canGoLater = !busy && Boolean(payload?.nextMonth);
  const pagerClass = (enabled: boolean) =>
    `rounded-full p-1.5 text-(--brand-deep) transition-colors ${
      enabled ? "hover:bg-(--muted)" : "cursor-default opacity-30"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-7">
      {/* Day picker. The legend names the group for assistive tech; the
          visible label sits in the header row next to the month controls. */}
      <fieldset className="flex flex-col gap-3">
        <legend className="sr-only">{booking.calendar.pickDay}</legend>
        <div className="flex items-center justify-between gap-4">
          <span className="field-label mb-0" aria-hidden="true">
            {booking.calendar.pickDay}
          </span>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => canGoEarlier && goToMonth(payload?.prevMonth ?? null)}
              aria-disabled={!canGoEarlier}
              className={pagerClass(canGoEarlier)}
              aria-label={booking.calendar.earlier}
            >
              <ChevronLeft className="size-4" aria-hidden="true" />
            </button>
            <span
              className="min-w-36 text-center font-ui text-sm font-semibold text-(--brand-deep)"
              aria-live="polite"
            >
              {payload?.monthLabel ?? ""}
            </span>
            <button
              type="button"
              onClick={() => canGoLater && goToMonth(payload?.nextMonth ?? null)}
              aria-disabled={!canGoLater}
              className={pagerClass(canGoLater)}
              aria-label={booking.calendar.later}
            >
              <ChevronRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {calendar === "down" ? (
          <div className="flex flex-col items-start gap-2">
            <p className="text-sm text-(--destructive)">{withContactLinks(booking.errors.calendarDown)}</p>
            <button
              type="button"
              onClick={retry}
              className="link-quiet font-ui text-sm font-semibold text-(--brand-primary)"
            >
              {booking.calendar.retry}
            </button>
          </div>
        ) : null}

        {calendar === "loading" && !payload ? (
          <p className="flex items-center gap-2 text-sm text-(--text-muted)">
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            {booking.calendar.loading}
          </p>
        ) : null}

        {payload ? (
          <div
            className={`grid grid-cols-7 gap-1 ${calendar === "loading" ? "opacity-50" : ""}`}
            aria-busy={calendar === "loading"}
          >
            {WEEKDAYS.map((weekday) => (
              <span
                key={weekday}
                className="py-1 text-center font-ui text-[11px] font-semibold tracking-[0.08em] text-(--text-muted) uppercase"
              >
                {weekday}
              </span>
            ))}
            {cells.map((cell, index) => {
              if (cell === null) return <span key={`pad-${index}`} aria-hidden="true" />;
              const key = dayKey(payload.year, payload.month, cell);
              const open = (availableByDay.get(key) ?? 0) > 0;
              const selected = key === day;
              return (
                <button
                  key={key}
                  type="button"
                  disabled={!open || busy}
                  aria-pressed={selected}
                  aria-label={longDayLabel(key)}
                  onClick={() => {
                    setDay(key);
                    setStart(null);
                  }}
                  className={`aspect-square rounded-full font-ui text-sm transition-colors ${
                    selected
                      ? "bg-(--brand-primary) font-semibold text-white"
                      : open
                        ? "font-semibold text-(--brand-deep) hover:bg-(--muted)"
                        : "text-(--text-muted)/40"
                  } ${key === payload.today && !selected ? "underline underline-offset-4" : ""}`}
                >
                  {cell}
                </button>
              );
            })}
          </div>
        ) : null}
      </fieldset>

      {/* Time picker */}
      <fieldset className="flex flex-col gap-3">
        <legend className="field-label">{booking.calendar.pickTime}</legend>
        {!day ? (
          <p className="text-sm text-(--text-muted)">{booking.calendar.noDay}</p>
        ) : daySlots.length === 0 ? (
          <p className="text-sm text-(--text-muted)">{booking.calendar.emptyDay}</p>
        ) : (
          <div className="flex flex-wrap gap-2" role="group" aria-label={booking.calendar.pickTime}>
            {daySlots.map((slot) => {
              const selected = slot.start === start;
              return (
                <button
                  key={slot.start}
                  type="button"
                  disabled={busy}
                  aria-pressed={selected}
                  onClick={() => setStart(slot.start)}
                  className={`rounded-full border px-4 py-2 font-ui text-sm font-semibold transition-colors ${
                    selected
                      ? "border-(--brand-primary) bg-(--brand-primary) text-white"
                      : "border-(--border) text-(--brand-deep) hover:border-(--brand-primary)"
                  }`}
                >
                  {slot.label}
                </button>
              );
            })}
          </div>
        )}
        <p className="text-xs text-(--text-muted)">{booking.calendar.timezone}</p>
      </fieldset>

      {/* Details */}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label={booking.labels.name}
          required
          value={data.name}
          error={touched.name ? errors.name : undefined}
          onChange={(v) => update("name", v)}
          onBlur={() => blur("name")}
          autoComplete="name"
          maxLength={NAME_MAX}
        />
        <Field
          id="phone"
          label={booking.labels.phone}
          type="tel"
          required
          value={data.phone}
          error={touched.phone ? errors.phone : undefined}
          onChange={(v) => update("phone", v)}
          onBlur={() => blur("phone")}
          autoComplete="tel"
          maxLength={40}
        />
        <Field
          id="email"
          label={booking.labels.email}
          type="email"
          required
          value={data.email}
          error={touched.email ? errors.email : undefined}
          onChange={(v) => update("email", v)}
          onBlur={() => blur("email")}
          autoComplete="email"
          maxLength={320}
        />
        <div>
          <label htmlFor="note" className="field-label">
            {booking.labels.note} <span className="font-normal text-(--text-muted) normal-case">(optional)</span>
          </label>
          <textarea
            id="note"
            name="note"
            rows={3}
            maxLength={NOTE_MAX}
            className="field resize-y"
            placeholder={booking.notePlaceholder}
            value={data.note}
            onChange={(e) => update("note", e.target.value)}
          />
        </div>
      </div>

      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`book-${HONEYPOT_FIELD}`}>{booking.honeypotLabel}</label>
        <input
          id={`book-${HONEYPOT_FIELD}`}
          name={HONEYPOT_FIELD}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          data-lpignore="true"
          data-1p-ignore=""
          data-bwignore=""
          data-form-type="other"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {turnstileSiteKey ? (
        <TurnstileWidget
          siteKey={turnstileSiteKey}
          onTokenChange={setToken}
          onFailed={onTurnstileFailed}
          fallback={securityFallback}
          resetSignal={resetCount}
        />
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={busy || turnstileFailed}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-(--brand-primary) px-7 py-3.5 font-ui text-base font-semibold text-white transition-colors hover:bg-(--brand-primary-hover) disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              {booking.sending}
            </>
          ) : (
            booking.submit
          )}
        </button>
      </div>

      {note ? (
        <p role="alert" className="text-sm text-(--destructive)">
          {noteHasLinks ? withContactLinks(note) : note}
        </p>
      ) : null}
    </form>
  );
}

type FieldProps = {
  id: keyof FormState;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  type?: string;
  required?: boolean;
  error?: string;
  autoComplete?: string;
  maxLength?: number;
};

function Field({
  id,
  label,
  value,
  onChange,
  onBlur,
  type = "text",
  required = false,
  error,
  autoComplete,
  maxLength,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        maxLength={maxLength}
        className="field"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-(--destructive)">
          {error}
        </p>
      ) : null}
    </div>
  );
}
