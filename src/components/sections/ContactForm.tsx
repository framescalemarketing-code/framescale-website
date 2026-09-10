"use client";

import { useCallback, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { TurnstileWidget } from "@/components/system/TurnstileWidget";
import { withContactLinks } from "@/components/ui/contact-links";
import { contactForm } from "@/content/contact";
import { validateEmailInput } from "@/lib/email-validation";
import { trackEvent } from "@/lib/analytics";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const EMPTY: FormState = { name: "", email: "", message: "" };

/** The honeypot's field name. Meaningless on purpose so no autofill maps to it. */
const HONEYPOT_FIELD = "fs_contact_extra";

function validateField(field: keyof FormState, value: string): string | undefined {
  if (field === "name" && !value.trim()) return contactForm.validation.name;
  if (field === "email") return validateEmailInput(value);
  if (field === "message") {
    if (!value.trim()) return contactForm.validation.messageEmpty;
    if (value.trim().length < 10) return contactForm.validation.messageShort;
  }
  return undefined;
}

export function ContactForm({ turnstileSiteKey }: { turnstileSiteKey: string }) {
  const [data, setData] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [note, setNote] = useState("");
  /** True when the failure came from the network or the API rather than validation. */
  const [serverError, setServerError] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [token, setToken] = useState("");
  const [turnstileFailed, setTurnstileFailed] = useState(false);
  const [resetCount, setResetCount] = useState(0);

  const onTurnstileFailed = useCallback(() => setTurnstileFailed(true), []);

  const update = (field: keyof FormState, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
    }
  };

  const blur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateField(field, data[field]) }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (status === "sending" || turnstileFailed) return;

    const nextErrors: FieldErrors = {
      name: validateField("name", data.name),
      email: validateField("email", data.email),
      message: validateField("message", data.message),
    };
    setErrors(nextErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.values(nextErrors).some(Boolean)) {
      setStatus("error");
      setServerError(false);
      setNote(contactForm.validation.summary);
      return;
    }

    if (turnstileSiteKey && !token) {
      setStatus("error");
      setServerError(false);
      setNote(contactForm.validation.securityMissing);
      return;
    }

    setStatus("sending");
    setServerError(false);
    setNote("");

    const sourcePage = typeof window !== "undefined" ? window.location.pathname : "/";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          [HONEYPOT_FIELD]: honeypot,
          turnstileToken: token,
          sourcePage,
        }),
      });

      const body = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(body.error || "Unable to submit the form.");

      setStatus("sent");
      setData(EMPTY);
      setTouched({});
      setErrors({});
      trackEvent("contact_form_submit", { form_location: "inline" });
      // The conversion event. It belongs here, after the API confirmed the
      // message was sent, and not on the submit event: that fires for validation
      // failures and failed sends too, which inflated the only metric that says
      // whether the site works.
      trackEvent("generate_lead", { form_id: "contact", form_location: "inline", location: sourcePage });
    } catch (err) {
      setStatus("error");
      setServerError(true);
      setNote(err instanceof Error ? err.message : "Unable to submit right now. Please try again.");
    } finally {
      if (turnstileSiteKey) {
        setToken("");
        setResetCount((n) => n + 1);
      }
    }
  };

  if (status === "sent") {
    return (
      <div className="hairline-box flex flex-col items-start gap-4 rounded-xl p-8" role="status" aria-live="polite">
        <CheckCircle2 className="size-9 text-(--brand-primary)" aria-hidden="true" />
        <h3 className="display-sm text-(--brand-deep)">{contactForm.success.title}</h3>
        <p className="text-(--text-muted)">{contactForm.success.body}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="link-quiet font-ui text-sm font-semibold text-(--brand-primary)"
        >
          {contactForm.success.again}
        </button>
      </div>
    );
  }

  const securityFallback = (
    <p className="text-sm text-(--text-muted)">{withContactLinks(contactForm.securityFallback)}</p>
  );

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label={contactForm.labels.name}
          required
          value={data.name}
          error={touched.name ? errors.name : undefined}
          onChange={(v) => update("name", v)}
          onBlur={() => blur("name")}
          autoComplete="name"
        />
        <Field
          id="email"
          label={contactForm.labels.email}
          type="email"
          required
          value={data.email}
          error={touched.email ? errors.email : undefined}
          onChange={(v) => update("email", v)}
          onBlur={() => blur("email")}
          autoComplete="email"
        />
      </div>

      <div>
        <label htmlFor="message" className="field-label">
          {contactForm.labels.message} <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="field resize-y"
          placeholder={contactForm.placeholder}
          value={data.message}
          onChange={(e) => update("message", e.target.value)}
          onBlur={() => blur("message")}
          aria-invalid={touched.message && Boolean(errors.message)}
          aria-describedby={touched.message && errors.message ? "message-error" : undefined}
        />
        {touched.message && errors.message ? (
          <p id="message-error" className="mt-1.5 text-sm text-(--destructive)">
            {errors.message}
          </p>
        ) : null}
      </div>

      {/* Honeypot. Off-screen, out of the tab order, and marked for every
          password manager that honours an opt-out, so nothing fills it in
          on a real visitor's behalf. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={HONEYPOT_FIELD}>{contactForm.honeypotLabel}</label>
        <input
          id={HONEYPOT_FIELD}
          name={HONEYPOT_FIELD}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          data-lpignore="true"
          data-1p-ignore=""
          data-bwignore=""
          data-form-type="other"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {turnstileSiteKey ? (
        <TurnstileWidget
          siteKey={turnstileSiteKey}
          onTokenChange={setToken}
          onFailed={onTurnstileFailed}
          fallback={securityFallback}
          resetSignal={resetCount}
        />
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "sending" || turnstileFailed}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-(--brand-primary) px-7 py-3.5 font-ui text-base font-semibold text-white transition-colors hover:bg-(--brand-primary-hover) disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              {contactForm.sending}
            </>
          ) : (
            contactForm.submit
          )}
        </button>
        <p className="text-sm text-(--text-muted)">{contactForm.helper}</p>
      </div>

      {note ? (
        <div className="flex flex-col gap-1">
          <p role="alert" className="text-sm text-(--destructive)">
            {note}
          </p>
          {serverError ? (
            <p className="text-sm text-(--text-muted)">{withContactLinks(contactForm.serverErrorLine)}</p>
          ) : null}
        </div>
      ) : null}
    </form>
  );
}

type FieldProps = {
  id: keyof FormState;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  type?: string;
  required?: boolean;
  error?: string;
  autoComplete?: string;
};

function Field({
  id,
  label,
  value,
  onChange,
  onBlur,
  type = "text",
  required = false,
  error,
  autoComplete,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="field"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-(--destructive)">
          {error}
        </p>
      ) : null}
    </div>
  );
}
