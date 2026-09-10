import "server-only";
import { bookingEmails } from "@/content/booking";
import { buildIcs, googleCalendarLink } from "@/lib/booking/ics";
import { formatBookingSlotPacificLabel } from "@/lib/booking/schedule";
import { getNoreplyFrom } from "@/lib/email/from";
import { bookingOwnerHtml, bookingVisitorHtml } from "@/lib/email/templates";
import { getContactNotificationEmail, getResendApiKey, postResendEmail } from "@/lib/resend-client";
import { principal, site } from "@/lib/site";

export type BookingNotificationInput = {
  /** Google event id, or a generated id when the site could not write the calendar. */
  eventId: string;
  /** "google": the event is already in the calendar. "email": the owner has to add it. */
  mode: "google" | "email";
  /** The event's page in Google Calendar, when the site created it. */
  eventLink: string | null;
  startsAtIso: string;
  endsAtIso: string;
  name: string;
  email: string;
  phone: string;
  note: string;
};

export type BookingNotificationResult = {
  owner: boolean;
  visitor: boolean;
};

function ownerPlainText(
  input: BookingNotificationInput,
  when: string,
  cta: { label: string; href: string } | null,
): string {
  return [
    "New call booked",
    "",
    `When: ${when}`,
    `Name: ${input.name}`,
    `Phone: ${input.phone}`,
    `Email: ${input.email}`,
    "",
    "Note:",
    input.note || "None",
    "",
    ...(input.mode === "email" ? [bookingEmails.ownerAddNote, ""] : []),
    ...(cta ? [`${cta.label}: ${cta.href}`] : []),
  ].join("\n");
}

function attachment(filename: string, ics: string, method: "REQUEST" | "PUBLISH") {
  return {
    filename,
    content: Buffer.from(ics, "utf8").toString("base64"),
    content_type: `text/calendar; method=${method}`,
  };
}

/**
 * The owner alert and the visitor confirmation. Each result flag says whether
 * Resend accepted that message. In email mode the owner alert is the record
 * of the booking, so the route treats its failure as a failed booking; in
 * Google mode the event already exists and a failed email is only logged.
 */
export async function sendBookingNotifications(
  input: BookingNotificationInput,
): Promise<BookingNotificationResult> {
  const apiKey = getResendApiKey();
  if (!apiKey) {
    console.warn("[booking] RESEND_API_KEY is unset; no emails sent for", input.eventId);
    return { owner: false, visitor: false };
  }

  const when = formatBookingSlotPacificLabel(input.startsAtIso);
  const from = getNoreplyFrom();
  const ownerInbox = getContactNotificationEmail();
  const start = new Date(input.startsAtIso);
  const end = new Date(input.endsAtIso);

  const ownerDescription = [`${input.name}, ${input.phone}, ${input.email}`, input.note ? `Note: ${input.note}` : ""]
    .filter(Boolean)
    .join("\n");
  const visitorDescription = bookingEmails.icsDescription(input.phone);

  // In Google mode the event exists, so the button opens it; another "add"
  // link would only create a duplicate. In email mode the link and the
  // attached invite are how the owner puts it in his calendar.
  const ownerCta =
    input.mode === "google"
      ? input.eventLink
        ? { label: bookingEmails.openInGoogle, href: input.eventLink }
        : null
      : {
          label: bookingEmails.addToGoogle,
          href: googleCalendarLink({
            start,
            end,
            summary: bookingEmails.eventSummary(input.name),
            description: ownerDescription,
          }),
        };

  // The owner's copy is a plain event he adds to his own calendar (PUBLISH,
  // no attendee), so accepting it replies to nobody and he stays the owner
  // of the entry. The visitor's copy is an invitation from him to them.
  const ownerIcs = buildIcs({
    uid: `${input.eventId}-owner@${site.hostname}`,
    start,
    end,
    summary: bookingEmails.eventSummary(input.name),
    description: ownerDescription,
    organizer: { name: principal.fullName, email: ownerInbox },
    method: "PUBLISH",
  });
  const visitorIcs = buildIcs({
    uid: `${input.eventId}@${site.hostname}`,
    start,
    end,
    summary: bookingEmails.icsSummary,
    description: visitorDescription,
    organizer: { name: principal.fullName, email: ownerInbox },
    attendee: { name: input.name, email: input.email },
    method: "REQUEST",
  });
  const visitorLink = googleCalendarLink({ start, end, summary: bookingEmails.icsSummary, description: visitorDescription });

  const sends: Array<{ label: keyof BookingNotificationResult; body: Record<string, unknown> }> = [
    {
      label: "owner",
      body: {
        from,
        to: [ownerInbox],
        reply_to: input.email,
        subject: bookingEmails.ownerSubject(input.name, when),
        text: ownerPlainText(input, when, ownerCta),
        html: bookingOwnerHtml({
          ...input,
          when,
          calendarLink: ownerCta?.href ?? null,
          calendarLabel: ownerCta?.label ?? "",
          needsAdding: input.mode === "email",
        }),
        ...(input.mode === "email" ? { attachments: [attachment("call-booking.ics", ownerIcs, "PUBLISH")] } : {}),
      },
    },
    {
      label: "visitor",
      body: {
        from,
        to: [input.email],
        reply_to: ownerInbox,
        subject: bookingEmails.visitorSubject(when),
        text: [...bookingEmails.visitorParagraphs(input.phone, when), "", `${bookingEmails.addToGoogle}: ${visitorLink}`].join(
          "\n\n",
        ),
        html: bookingVisitorHtml({ phone: input.phone, when, calendarLink: visitorLink }),
        attachments: [attachment("call-with-jonathan.ics", visitorIcs, "REQUEST")],
      },
    },
  ];

  const result: BookingNotificationResult = { owner: false, visitor: false };
  for (const send of sends) {
    try {
      const response = await postResendEmail(apiKey, send.body);
      result[send.label] = response.ok;
      if (!response.ok) {
        console.warn(`[booking] ${send.label} email failed`, response.status, input.eventId);
      }
    } catch (err) {
      console.warn(`[booking] ${send.label} email threw`, err instanceof Error ? err.message : String(err));
    }
  }
  return result;
}
