/**
 * A minimal iCalendar file for one call, and the matching "add to Google
 * Calendar" link. Timestamps are UTC (`Z`), which every calendar client
 * converts to the reader's zone and which needs no VTIMEZONE block.
 */

function stamp(date: Date): string {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

/** TEXT values (SUMMARY, DESCRIPTION): RFC 5545 3.3.11 escaping. */
function escapeText(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\r?\n/g, "\\n");
}

/** Strip anything that could start a new line in the file, including the Unicode line separators. */
function oneLine(value: string): string {
  return value
    .replace(/[\r\n\u2028\u2029]+/g, " ")
    .replace(/[\x00-\x1f\x7f]/g, "")
    .trim();
}

/**
 * Parameter values (CN): always quoted, with RFC 6868 encoding for the two
 * characters a quoted value cannot hold. TEXT escaping is wrong here; a name
 * like `Jones, Sam` would render as `Jones\, Sam`, and a colon could end the
 * parameter list early.
 */
function paramValue(value: string): string {
  const cleaned = oneLine(value).replace(/\^/g, "^^").replace(/"/g, "^'");
  return `"${cleaned}"`;
}

/**
 * RFC 5545 folds lines longer than 75 octets. Measured in UTF-8 bytes on
 * code-point boundaries, so a multi-byte character or an emoji is never cut
 * in half; continuation lines lose one octet to their leading space.
 */
function fold(line: string): string {
  const out: string[] = [];
  let current = "";
  let bytes = 0;
  for (const ch of line) {
    const size = Buffer.byteLength(ch, "utf8");
    const limit = out.length === 0 ? 75 : 74;
    if (bytes + size > limit && current) {
      out.push(current);
      current = "";
      bytes = 0;
    }
    current += ch;
    bytes += size;
  }
  out.push(current);
  return out.join("\r\n ");
}

export type IcsParty = { name: string; email: string };

export type IcsInput = {
  uid: string;
  start: Date;
  end: Date;
  summary: string;
  description: string;
  organizer: IcsParty;
  /**
   * REQUEST invites the attendee and asks for a reply; PUBLISH is a plain
   * event the reader adds to their own calendar with no reply to anyone.
   */
  method: "REQUEST" | "PUBLISH";
  attendee?: IcsParty;
};

export function buildIcs(input: IcsInput): string {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//FrameScale Inc//Booking//EN",
    "CALSCALE:GREGORIAN",
    `METHOD:${input.method}`,
    "BEGIN:VEVENT",
    `UID:${oneLine(input.uid)}`,
    `DTSTAMP:${stamp(new Date())}`,
    `DTSTART:${stamp(input.start)}`,
    `DTEND:${stamp(input.end)}`,
    fold(`SUMMARY:${escapeText(oneLine(input.summary))}`),
    fold(`DESCRIPTION:${escapeText(input.description)}`),
    "STATUS:CONFIRMED",
    fold(`ORGANIZER;CN=${paramValue(input.organizer.name)}:mailto:${oneLine(input.organizer.email)}`),
  ];
  if (input.attendee) {
    lines.push(
      fold(
        `ATTENDEE;CN=${paramValue(input.attendee.name)};ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=TRUE:mailto:${oneLine(input.attendee.email)}`,
      ),
    );
  }
  lines.push("END:VEVENT", "END:VCALENDAR", "");
  return lines.join("\r\n");
}

/** A link that opens Google Calendar with the event filled in, one Save away. */
export function googleCalendarLink(input: { start: Date; end: Date; summary: string; description: string }): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: input.summary,
    dates: `${stamp(input.start)}/${stamp(input.end)}`,
    details: input.description,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
