/**
 * A minimal iCalendar file for one call. Timestamps are UTC (`Z`), which
 * every calendar client converts to the reader's zone and which needs no
 * VTIMEZONE block.
 */

function stamp(date: Date): string {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

function escapeText(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\r?\n/g, "\\n");
}

/** RFC 5545 folds lines longer than 75 octets; 73 characters keeps ASCII safe. */
function fold(line: string): string {
  return line.match(/.{1,73}/g)?.join("\r\n ") ?? line;
}

export type IcsInput = {
  uid: string;
  start: Date;
  end: Date;
  summary: string;
  description: string;
  organizer: { name: string; email: string };
  attendee: { name: string; email: string };
};

export function buildIcs(input: IcsInput): string {
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//FrameScale Inc//Booking//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:REQUEST",
    "BEGIN:VEVENT",
    `UID:${input.uid}`,
    `DTSTAMP:${stamp(new Date())}`,
    `DTSTART:${stamp(input.start)}`,
    `DTEND:${stamp(input.end)}`,
    fold(`SUMMARY:${escapeText(input.summary)}`),
    fold(`DESCRIPTION:${escapeText(input.description)}`),
    "STATUS:CONFIRMED",
    fold(`ORGANIZER;CN=${escapeText(input.organizer.name)}:mailto:${input.organizer.email}`),
    fold(
      `ATTENDEE;CN=${escapeText(input.attendee.name)};ROLE=REQ-PARTICIPANT;PARTSTAT=ACCEPTED;RSVP=FALSE:mailto:${input.attendee.email}`,
    ),
    "END:VEVENT",
    "END:VCALENDAR",
    "",
  ].join("\r\n");
}
