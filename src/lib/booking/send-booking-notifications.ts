import { site } from "@/lib/site";
import { formatBookingSlotPacificLabel } from "@/lib/booking-schedule";
import { getNoreplyFrom } from "@/lib/email/from";
import {
  introCallGuestConfirmationHtml,
  introCallGuestConfirmationText,
  introCallOwnerAlertHtml,
} from "@/lib/email/templates";
import { getContactNotificationEmail, getResendApiKey, postResendEmail } from "@/lib/resend-client";

function ownerAlertPlainText(input: {
  when: string;
  name: string;
  email: string;
  company: string;
  notes: string;
}): string {
  return [
    "New intro call booking",
    "",
    `When: ${input.when}`,
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Company: ${input.company || "N/A"}`,
    "",
    "Notes:",
    input.notes || "None",
  ].join("\n");
}

/** Sends owner alert and guest confirmation when Resend is configured. */
export async function sendBookingNotifications(input: {
  startsAt: string;
  name: string;
  email: string;
  company: string;
  notes: string;
}): Promise<void> {
  const apiKey = getResendApiKey();
  if (!apiKey) return;

  const when = formatBookingSlotPacificLabel(input.startsAt);
  const from = getNoreplyFrom();
  const ownerHtml = introCallOwnerAlertHtml({
    name: input.name,
    email: input.email,
    whenLine: when,
    company: input.company,
    notes: input.notes,
  });
  const guestHtml = introCallGuestConfirmationHtml({
    name: input.name,
    whenLine: when,
    company: input.company,
    notes: input.notes,
  });
  const guestText = introCallGuestConfirmationText({
    name: input.name,
    whenLine: when,
    company: input.company,
    notes: input.notes,
  });

  try {
    await postResendEmail(apiKey, {
      from,
      to: [getContactNotificationEmail()],
      reply_to: input.email,
      subject: `Intro call booked: ${input.name}`,
      text: ownerAlertPlainText({
        when,
        name: input.name,
        email: input.email,
        company: input.company,
        notes: input.notes,
      }),
      html: ownerHtml,
    });

    await postResendEmail(apiKey, {
      from,
      to: [input.email],
      reply_to: site.email,
      subject: `Your FrameScale intro call: ${when}`,
      text: guestText,
      html: guestHtml,
    });
  } catch {
    // Keep booking successful even if email provider is temporarily unavailable.
  }
}
