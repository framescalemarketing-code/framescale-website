import { principal, site } from "@/lib/site";

/**
 * Everything the booking page says. `{phone}` and `{email}` in the fallback
 * lines are rendered as links; `{address}` in the success body is the
 * visitor's own email address.
 */
export const booking = {
  headline: "Book a free call",
  lead:
    "Half an hour, just the two of us. You tell me what's going on, I ask questions, and you leave knowing what " +
    "I'd do first. Pick a time and it comes straight to me.",
  aside: "If you'd rather write first, the form is at the bottom of every page.",
  calendar: {
    pickDay: "Pick A Day",
    pickTime: "Pick A Time",
    timezone: "Times are Pacific.",
    loading: "Checking the calendar.",
    emptyDay: "Nothing open that day. Try the next one.",
    noDay: "Pick a day first.",
    earlier: "Earlier",
    later: "Later",
  },
  labels: {
    name: "Your Name",
    email: "Email",
    phone: "Best Number To Call",
    note: "What's Going On",
  },
  notePlaceholder: "A sentence or two is plenty.",
  submit: "Book This Time",
  sending: "Booking",
  validation: {
    name: "Please enter your name.",
    phone: "Enter a number I can call you on.",
    slot: "Pick a day and a time first.",
    summary: "Please correct the highlighted fields and try again.",
    securityMissing: "Please complete the security check and try again.",
  },
  securityFallback: "The security check didn't load. Call me on {phone} or email {email} instead.",
  success: {
    title: "You're booked",
    body:
      "I've sent a calendar invite to {address} with the time and my number. If something comes up, reply to " +
      "that email and we'll move it.",
  },
  errors: {
    slotTaken: "That time just got taken. Pick another one.",
    calendarDown: "I can't reach my calendar right now. Call me on {phone} or email {email} and we'll sort it out.",
    generic: "Something went wrong on my end. Call me on {phone} or email {email}.",
  },
  honeypotLabel: "Leave this empty",
} as const;

/** Email wording. `when` is the formatted Pacific time, e.g. "Tuesday, September 16 at 9:00 AM Pacific". */
export const bookingEmails = {
  visitorSubject: (when: string) => `Your call with ${principal.firstName}, ${when}`,
  visitorParagraphs: (phone: string, when: string) => [
    `Thanks for booking. I'll call you on ${phone} at ${when}.`,
    "The invite is attached, and the link below puts it in Google Calendar. If you want to move the call, reply " +
      `to this email. If you need me before then, call ${site.phone}.`,
    principal.firstName,
  ],
  ownerSubject: (name: string, when: string) => `New call booked: ${name}, ${when}`,
  /** Shown in the owner alert only when the site could not write the calendar itself. */
  ownerAddNote:
    "This one isn't in your calendar yet. Add it now, with the link below or the attached invite. Until it's " +
    "there the site can offer the same time to someone else.",
  addToGoogle: "Add to Google Calendar",
  openInGoogle: "Open in Google Calendar",
  eventSummary: (name: string) => `Call with ${name}`,
  icsSummary: `Call with ${principal.fullName}`,
  icsDescription: (phone: string) =>
    `${principal.firstName} will call you on ${phone}. To move the call, reply to the confirmation email or ` +
    `write to ${site.email}. To reach him before then, call ${site.phone}.`,
} as const;
