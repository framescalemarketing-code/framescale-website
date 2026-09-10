import "server-only";
import { bookingEmails } from "@/content/booking";
import { buildIcs } from "@/lib/booking/ics";
import { formatBookingSlotPacificLabel } from "@/lib/booking/schedule";
import { getNoreplyFrom } from "@/lib/email/from";
import { bookingOwnerHtml, bookingVisitorHtml } from "@/lib/email/templates";
import { getContactNotificationEmail, getResendApiKey, postResendEmail } from "@/lib/resend-client";
import { principal, site } from "@/lib/site";

export type BookingNotificationInput = {
  eventId: string;
  startsAtIso: string;
  endsAtIso: string;
  name: string;
  email: string;
  phone: string;
  note: string;
};

function ownerPlainText(input: BookingNotificationInput, when: string): string {
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
  ].join("\n");
}

/**
 * The owner alert and the visitor confirmation with its .ics. The calendar
 * event already exists by the time this runs, so a Resend failure is logged
 * and does not undo the booking.
 */
export async function sendBookingNotifications(input: BookingNotificationInput): Promise<void> {
  const apiKey = getResendApiKey();
  if (!apiKey) {
    console.warn("[booking] RESEND_API_KEY is unset; no emails sent for event", input.eventId);
    return;
  }

  const when = formatBookingSlotPacificLabel(input.startsAtIso);
  const from = getNoreplyFrom();
  const ownerInbox = getContactNotificationEmail();

  const ics = buildIcs({
    uid: `${input.eventId}@${site.hostname}`,
    start: new Date(input.startsAtIso),
    end: new Date(input.endsAtIso),
    summary: bookingEmails.icsSummary,
    description: bookingEmails.icsDescription(input.phone),
    organizer: { name: principal.fullName, email: ownerInbox },
    attendee: { name: input.name, email: input.email },
  });

  const sends: Array<{ label: string; body: Record<string, unknown> }> = [
    {
      label: "owner",
      body: {
        from,
        to: [ownerInbox],
        reply_to: input.email,
        subject: bookingEmails.ownerSubject(input.name, when),
        text: ownerPlainText(input, when),
        html: bookingOwnerHtml({ ...input, when }),
      },
    },
    {
      label: "visitor",
      body: {
        from,
        to: [input.email],
        reply_to: ownerInbox,
        subject: bookingEmails.visitorSubject(when),
        text: bookingEmails.visitorParagraphs(input.phone, when).join("\n\n"),
        html: bookingVisitorHtml({ phone: input.phone, when }),
        attachments: [
          {
            filename: "call-with-jonathan.ics",
            content: Buffer.from(ics, "utf8").toString("base64"),
            content_type: "text/calendar; method=REQUEST",
          },
        ],
      },
    },
  ];

  for (const send of sends) {
    try {
      const response = await postResendEmail(apiKey, send.body);
      if (!response.ok) {
        console.warn(`[booking] ${send.label} email failed`, response.status, input.eventId);
      }
    } catch (err) {
      console.warn(`[booking] ${send.label} email threw`, err instanceof Error ? err.message : String(err));
    }
  }
}
