import { bookingEmails } from "@/content/booking";
import { contactReceipt } from "@/content/contact";
import { site } from "@/lib/site";
import { escapeHtml } from "@/lib/email/escape-html";

const BRAND_PRIMARY = "#17788e";
const BRAND_DEEP = "#264653";
const BRAND_MUTED = "#6c7a7c";
const BRAND_BG = "#f7f9fa";

const BODY_FONT = "Helvetica,Arial,sans-serif";

export function brandedShell(inner: string, preheader: string): string {
  const safePre = escapeHtml(preheader);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${safePre}</title>
</head>
<body style="margin:0;padding:0;background:${BRAND_BG};font-family:Georgia,'Times New Roman',serif;">
  <span style="display:none!important;visibility:hidden;opacity:0;color:transparent;height:0;width:0;">${safePre}</span>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${BRAND_BG};padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid rgba(23,120,142,0.18);">
          <tr>
            <td style="background:linear-gradient(135deg,${BRAND_PRIMARY} 0%,${BRAND_DEEP} 100%);padding:20px 24px;">
              <p style="margin:0;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.9);">${escapeHtml(site.shortName)}</p>
              <p style="margin:6px 0 0;font-family:Georgia,serif;font-size:22px;font-weight:600;color:#ffffff;line-height:1.25;">${escapeHtml(site.name)}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 24px 32px;font-size:16px;line-height:1.55;color:${BRAND_DEEP};">
              ${inner}
            </td>
          </tr>
          <tr>
            <td style="padding:16px 24px 22px;background:${BRAND_BG};border-top:1px solid rgba(38,70,83,0.08);">
              <p style="margin:0;font-family:${BODY_FONT};font-size:12px;line-height:1.5;color:${BRAND_MUTED};text-align:center;">
                ${escapeHtml(site.url)}<br />
                Questions? Reply to this message or write to ${escapeHtml(site.email)}.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/** A labelled line in the detail block of a notification. */
export function detailLine(label: string, value: string, first = false): string {
  return `<p style="margin:${first ? "0" : "8px 0 0"};font-family:${BODY_FONT};font-size:15px;color:${BRAND_DEEP};"><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`;
}

export function kickerAndTitle(kicker: string, title: string): string {
  return `
    <p style="margin:0 0 8px;font-family:${BODY_FONT};font-size:13px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:${BRAND_PRIMARY};">${escapeHtml(kicker)}</p>
    <h1 style="margin:0 0 16px;font-family:Georgia,serif;font-size:22px;font-weight:600;color:${BRAND_DEEP};line-height:1.3;">${escapeHtml(title)}</h1>
  `;
}

/** The notification Jonathan gets for a message from the form. */
export function contactInquiryOwnerHtml(input: {
  name: string;
  email: string;
  message: string;
  sourcePage: string;
}): string {
  const inner = `
    ${kickerAndTitle("Website inquiry", "New message")}
    ${detailLine("Name", input.name, true)}
    ${detailLine("Email", input.email)}
    ${detailLine("Source page", input.sourcePage)}
    <hr style="margin:18px 0;border:none;border-top:1px solid rgba(108,122,124,0.25);" />
    <p style="margin:0 0 6px;font-family:${BODY_FONT};font-size:13px;font-weight:600;color:${BRAND_DEEP};">Message</p>
    <p style="margin:0;font-family:${BODY_FONT};font-size:14px;color:${BRAND_MUTED};">${escapeHtml(input.message).replace(/\n/g, "<br />")}</p>
  `;
  return brandedShell(inner, `Inquiry from ${input.name}`);
}

/**
 * The receipt the visitor gets. Fixed wording from `src/content/contact.ts`
 * and nothing from the submitted message, so the form cannot be used to relay
 * arbitrary text to an arbitrary address.
 */
export function contactReceiptHtml(input: { name: string }): string {
  const paragraphs = contactReceipt.paragraphs(input.name);
  const inner = paragraphs
    .map(
      (paragraph, index) =>
        `<p style="margin:${index === 0 ? "0" : "12px 0 0"};font-family:${BODY_FONT};font-size:15px;line-height:1.6;color:${BRAND_DEEP};">${escapeHtml(paragraph)}</p>`,
    )
    .join("\n");
  return brandedShell(inner, contactReceipt.subject);
}

export function contactReceiptText(input: { name: string }): string {
  return contactReceipt.paragraphs(input.name).join("\n\n");
}

/** A button-shaped link, used for "Add to Google Calendar". The href is built server-side, never from user text. */
function linkButton(label: string, href: string): string {
  return `<p style="margin:18px 0 0;"><a href="${escapeHtml(href)}" style="display:inline-block;padding:10px 18px;border-radius:999px;background:${BRAND_PRIMARY};color:#ffffff;font-family:${BODY_FONT};font-size:14px;font-weight:600;text-decoration:none;">${escapeHtml(label)}</a></p>`;
}

/**
 * The alert Jonathan gets when a call is booked. When the site wrote the
 * calendar itself the link is a convenience; when it could not, the note says
 * so and the link plus the attached invite are how the slot gets closed.
 */
export function bookingOwnerHtml(input: {
  name: string;
  email: string;
  phone: string;
  note: string;
  when: string;
  calendarLink: string | null;
  calendarLabel: string;
  needsAdding: boolean;
}): string {
  const inner = `
    ${kickerAndTitle("Call booked", input.when)}
    ${detailLine("Name", input.name, true)}
    ${detailLine("Phone", input.phone)}
    ${detailLine("Email", input.email)}
    <hr style="margin:18px 0;border:none;border-top:1px solid rgba(108,122,124,0.25);" />
    <p style="margin:0 0 6px;font-family:${BODY_FONT};font-size:13px;font-weight:600;color:${BRAND_DEEP};">Note</p>
    <p style="margin:0;font-family:${BODY_FONT};font-size:14px;color:${BRAND_MUTED};">${escapeHtml(input.note || "None").replace(/\n/g, "<br />")}</p>
    ${
      input.needsAdding
        ? `<p style="margin:18px 0 0;font-family:${BODY_FONT};font-size:14px;line-height:1.6;color:${BRAND_DEEP};">${escapeHtml(bookingEmails.ownerAddNote)}</p>`
        : ""
    }
    ${input.calendarLink ? linkButton(input.calendarLabel, input.calendarLink) : ""}
  `;
  return brandedShell(inner, `Call booked: ${input.name}`);
}

/** The visitor's confirmation. The .ics is attached by the sender; wording lives in src/content/booking.ts. */
export function bookingVisitorHtml(input: { phone: string; when: string; calendarLink: string }): string {
  const inner =
    bookingEmails
      .visitorParagraphs(input.phone, input.when)
      .map(
        (paragraph, index) =>
          `<p style="margin:${index === 0 ? "0" : "12px 0 0"};font-family:${BODY_FONT};font-size:15px;line-height:1.6;color:${BRAND_DEEP};">${escapeHtml(paragraph)}</p>`,
      )
      .join("\n") + linkButton(bookingEmails.addToGoogle, input.calendarLink);
  return brandedShell(inner, bookingEmails.visitorSubject(input.when));
}
