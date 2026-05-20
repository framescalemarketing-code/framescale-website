"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { validateEmailConfirm } from "@/lib/email-validation";
import {
  bookingMonthBoundsPacific,
  currentYearMonthPacific,
  pacificDateKeyNow,
  shiftYearMonthPacific,
  yearMonthStartPacific,
  type BookingSlotDto,
  type BookingSlotsPayload,
} from "@/lib/booking-schedule";

export function useBookingScheduler() {
  const [yearMonth, setYearMonth] = useState(currentYearMonthPacific);
  const [payload, setPayload] = useState<BookingSlotsPayload | null>(null);
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

  const todayKey = pacificDateKeyNow();

  const loadSlotsForMonth = useCallback(async (ym: string) => {
    setLoading(true);
    setLoadError(null);
    try {
      const res = await fetch(`/api/booking?month=${encodeURIComponent(ym)}`, { method: "GET" });
      const data = (await res.json().catch(() => ({}))) as BookingSlotsPayload & { error?: string };
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
    let active = true;
    (async () => {
      await loadSlotsForMonth(yearMonth);
      if (!active) return;
    })();
    return () => {
      active = false;
    };
  }, [yearMonth, loadSlotsForMonth]);

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

  const monthTitle = useMemo(
    () => yearMonthStartPacific(yearMonth).toFormat("LLLL yyyy"),
    [yearMonth],
  );

  const { minYm, maxYm } = useMemo(() => bookingMonthBoundsPacific(), []);

  const prevDisabled = yearMonth <= minYm;
  const nextDisabled = yearMonth >= maxYm;

  const changeYearMonth = useCallback((ym: string) => {
    setYearMonth(ym);
    setSelectedDay(null);
    setSelectedSlot(null);
    setFormError(null);
  }, []);

  const goToPreviousMonth = useCallback(() => {
    changeYearMonth(shiftYearMonthPacific(yearMonth, -1));
  }, [changeYearMonth, yearMonth]);

  const goToNextMonth = useCallback(() => {
    changeYearMonth(shiftYearMonthPacific(yearMonth, 1));
  }, [changeYearMonth, yearMonth]);

  const firstPad = payload?.firstWeekdayPad ?? 0;
  const daysInMonth = payload?.daysInMonth ?? 31;

  const gridCells = useMemo(() => {
    if (!payload) return [];
    const cells: ({ kind: "empty" } | { kind: "day"; day: number; key: string })[] = [];
    for (let i = 0; i < firstPad; i++) cells.push({ kind: "empty" });
    for (let d = 1; d <= daysInMonth; d++) {
      const dayKey = yearMonthStartPacific(yearMonth).set({ day: d }).toFormat("yyyy-MM-dd");
      cells.push({ kind: "day", day: d, key: dayKey });
    }
    while (cells.length % 7 !== 0) cells.push({ kind: "empty" });
    return cells;
  }, [payload, firstPad, daysInMonth, yearMonth]);

  const selectedDaySlots = selectedDay ? (slotsByDay.get(selectedDay) ?? []) : [];

  const selectDay = useCallback((dayKey: string) => {
    setSelectedDay(dayKey);
    setSelectedSlot(null);
    setFormError(null);
  }, []);

  const selectSlot = useCallback((slot: BookingSlotDto) => {
    setSelectedSlot(slot);
    setFormError(null);
  }, []);

  const resetFormFields = useCallback(() => {
    setName("");
    setEmail("");
    setConfirmEmail("");
    setCompany("");
    setNotes("");
    setFormError(null);
    setSelectedSlot(null);
  }, []);

  const resetBooking = useCallback(() => {
    setSuccess(false);
    setBookedWhenLabel(null);
  }, []);

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
      resetFormFields();
      setSelectedDay(null);
      void loadSlotsForMonth(yearMonth);
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Booking failed.");
    } finally {
      setSubmitting(false);
    }
  };

  return {
    yearMonth,
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
    formError,
    setFormError,
    submitting,
    success,
    bookedWhenLabel,
    handleBook,
    resetBooking,
  };
}
