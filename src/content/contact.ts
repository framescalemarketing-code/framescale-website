import { location, principal, site } from "@/lib/site";

/**
 * Everything the contact section and the form say. It used to be inline in
 * the components, which is against the rule that copy lives here.
 */

export const contactSteps = [
  "I read your message myself.",
  "We talk for half an hour while I ask about your practice.",
  "We discuss whether I can help and where to start.",
  "You decide what happens next.",
] as const;

/** The same steps without the first: the booking page has no message box to read. */
export const bookingSteps = contactSteps.slice(1);

export const contactSection = {
  /** Defaults. Each page passes its own title and lead. */
  title: "Let's Talk",
  lead: "Tell me what is going on and we will work out where to start.",
  card: {
    title: "Send Me A Note",
  },
  hours: "Calls can be booked Monday to Friday, 9 to 5 Pacific.",
  locationLine: `I am based in ${location.regionName} and work remotely across ${location.serviceArea}.`,
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
  /** Shown when the browser could not reach the server at all. */
  sendFailed: "That did not send. Please try again.",
  success: {
    title: "Message Received",
    body: "Thanks. I will write back as soon as I can.",
    again: "Send Another Message",
  },
  /** Only ever read by bots. */
  honeypotLabel: "Leave this empty",
} as const;

/**
 * The receipt the visitor gets. Fixed text that echoes nothing they typed, not
 * even their name: the address is unverified, so the receipt must not carry
 * words chosen by whoever filled in the form.
 */
export const contactReceipt = {
  subject: "Got your message",
  paragraphs: [
    "Thanks for writing.",
    `I'll come back to you as soon as I can. If it's urgent, call me on ${site.phone}.`,
    principal.firstName,
  ],
} as const;
