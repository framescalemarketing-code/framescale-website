import { location, principal, site } from "@/lib/site";

/**
 * Everything the contact section and the form say. It used to be inline in
 * the components, which is against the rule that copy lives here.
 */

export const contactSteps = [
  "I read it myself.",
  "We talk for half an hour.",
  "I tell you whether I can help.",
  "You decide. I won't chase you.",
] as const;

export const contactSection = {
  /** Defaults. Each page passes its own title and lead. */
  title: "Let's talk",
  lead: "Tell me what's going on. Half an hour is enough to work out where to start.",
  card: {
    title: "Send me a note",
    lead: "Three boxes. It doesn't need to be long.",
  },
  hours: "Monday to Friday, 9 to 5 Pacific.",
  locationLine: `${location.city}, ${location.region}. Working with owners across ${location.serviceRegion}.`,
} as const;

export const contactForm = {
  labels: {
    name: "Your Name",
    email: "Email",
    message: "What's Going On",
  },
  placeholder: "A couple of sentences is plenty.",
  submit: "Send Message",
  sending: "Sending",
  helper: "I reply the next business day.",
  validation: {
    name: "Please enter your name.",
    messageEmpty: "A sentence or two helps me prepare.",
    messageShort: "Please add a little more detail.",
    summary: "Please correct the highlighted fields and try again.",
    securityMissing: "Please complete the security check and try again.",
  },
  /** `{phone}` and `{email}` are rendered as links by the form. */
  securityFallback: "The security check didn't load. Call me on {phone} or email {email} instead.",
  serverErrorLine: "Or call {phone} or email {email}.",
  success: {
    title: "Message received",
    body: "Thanks. I read every message myself and reply within one business day.",
    again: "Send another message",
  },
  /** Only ever read by bots. */
  honeypotLabel: "Leave this empty",
} as const;

/** The receipt the visitor gets. Fixed text, never echoes what they wrote. */
export const contactReceipt = {
  subject: "Got your message",
  paragraphs: (name: string) => [
    `Hi ${name}, thanks for writing.`,
    `I read every message myself and I'll come back to you within one business day. If it's urgent, call me on ${site.phone}.`,
    principal.firstName,
  ],
} as const;
