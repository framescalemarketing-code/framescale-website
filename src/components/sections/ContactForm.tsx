"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { TurnstileWidget } from "@/components/system/TurnstileWidget";
import { validateEmailInput } from "@/lib/email-validation";
import { trackEvent } from "@/lib/analytics";

type FormState = {
  name: string;
  email: string;
  company: string;
  industry: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const EMPTY: FormState = { name: "", email: "", company: "", industry: "", message: "" };

const INDUSTRIES = ["Healthcare or Optical", "Retail or E-commerce", "Professional Services", "Other"];

function validateField(field: keyof FormState, value: string): string | undefined {
  if (field === "name" && !value.trim()) return "Please enter your name.";
  if (field === "email") return validateEmailInput(value);
  if (field === "message") {
    if (!value.trim()) return "A short description helps me prepare.";
    if (value.trim().length < 10) return "Please add a little more detail.";
  }
  return undefined;
}

export function ContactForm({ turnstileSiteKey }: { turnstileSiteKey: string }) {
  const [data, setData] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [note, setNote] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [token, setToken] = useState("");
  const [resetCount, setResetCount] = useState(0);

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
    if (status === "sending") return;

    const nextErrors: FieldErrors = {
      name: validateField("name", data.name),
      email: validateField("email", data.email),
      message: validateField("message", data.message),
    };
    setErrors(nextErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.values(nextErrors).some(Boolean)) {
      setStatus("error");
      setNote("Please correct the highlighted fields and try again.");
      return;
    }

    if (turnstileSiteKey && !token) {
      setStatus("error");
      setNote("Please complete the security check and try again.");
      return;
    }

    setStatus("sending");
    setNote("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          website: honeypot,
          turnstileToken: token,
          sourcePage: typeof window !== "undefined" ? window.location.pathname : "/",
        }),
      });

      const body = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(body.error || "Unable to submit the form.");

      setStatus("sent");
      setData(EMPTY);
      setTouched({});
      setErrors({});
      trackEvent("contact_form_submit", { form_location: "inline" });
    } catch (err) {
      setStatus("error");
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
        <h3 className="display-sm text-(--brand-deep)">Message received</h3>
        <p className="text-(--text-muted)">
          Thanks for reaching out. I read every message myself and reply within one business day, usually sooner.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="link-quiet font-ui text-sm font-semibold text-(--brand-primary)"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Your Name"
          required
          value={data.name}
          error={touched.name ? errors.name : undefined}
          onChange={(v) => update("name", v)}
          onBlur={() => blur("name")}
          autoComplete="name"
        />
        <Field
          id="email"
          label="Email"
          type="email"
          required
          value={data.email}
          error={touched.email ? errors.email : undefined}
          onChange={(v) => update("email", v)}
          onBlur={() => blur("email")}
          autoComplete="email"
        />
        <Field
          id="company"
          label="Business Name"
          value={data.company}
          onChange={(v) => update("company", v)}
          onBlur={() => blur("company")}
          autoComplete="organization"
          optional
        />
        <div>
          <label htmlFor="industry" className="field-label">
            Industry <span className="font-normal text-(--text-muted) normal-case">(optional)</span>
          </label>
          <select
            id="industry"
            name="industry"
            className="field"
            value={data.industry}
            onChange={(e) => update("industry", e.target.value)}
          >
            <option value="">Select one</option>
            {INDUSTRIES.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="field-label">
          What Is Not Working <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="field resize-y"
          placeholder="Tell me about the business, what you have already tried, and what you want to change."
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

      {/* Honeypot. Positioned off-screen and hidden from assistive tech. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {turnstileSiteKey ? (
        <TurnstileWidget siteKey={turnstileSiteKey} onTokenChange={setToken} resetSignal={resetCount} />
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-(--brand-primary) px-7 py-3.5 font-ui text-base font-semibold text-white transition-colors hover:bg-(--brand-primary-hover) disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Sending
            </>
          ) : (
            "Send Message"
          )}
        </button>
        <p className="text-sm text-(--text-muted)">Replies within one business day.</p>
      </div>

      {note ? (
        <p role="alert" className="text-sm text-(--destructive)">
          {note}
        </p>
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
  optional?: boolean;
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
  optional = false,
  error,
  autoComplete,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
        {optional ? <span className="font-normal text-(--text-muted) normal-case"> (optional)</span> : null}
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
