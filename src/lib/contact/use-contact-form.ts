"use client";

import { useState } from "react";
import { validateEmailConfirm, validateEmailInput } from "@/lib/email-validation";

export type ContactFormState = {
  name: string;
  email: string;
  confirmEmail: string;
  company: string;
  industry: string;
  message: string;
};

export type ContactFieldErrors = Partial<Record<keyof ContactFormState, string>>;

const EMPTY_FORM: ContactFormState = {
  name: "",
  email: "",
  confirmEmail: "",
  company: "",
  industry: "",
  message: "",
};

export function createContactFormState(params: URLSearchParams): ContactFormState {
  const state = { ...EMPTY_FORM };
  const keys = ["name", "email", "confirmEmail", "company", "industry", "message"] as const;
  for (const key of keys) {
    const value = params.get(key);
    if (value) state[key] = value;
  }
  return state;
}

function validateField(name: keyof ContactFormState, value: string): string | undefined {
  if (name === "name" && !value.trim()) return "Please enter your name.";
  if (name === "email") return validateEmailInput(value);
  if (name === "message") {
    if (!value.trim()) return "A short message helps me prepare.";
    if (value.trim().length < 10) return "Please add a little more detail (10+ characters).";
  }
  return undefined;
}

function validateAll(data: ContactFormState): ContactFieldErrors {
  const next: ContactFieldErrors = {};
  (Object.keys(data) as (keyof ContactFormState)[]).forEach((k) => {
    if (k === "confirmEmail") return;
    const err = validateField(k, data[k]);
    if (err) next[k] = err;
  });
  const primaryEmailErr = validateEmailInput(data.email);
  if (primaryEmailErr) {
    next.email = primaryEmailErr;
  } else if (!data.confirmEmail.trim()) {
    next.confirmEmail = "Please confirm your email.";
  } else if (data.email.trim().toLowerCase() !== data.confirmEmail.trim().toLowerCase()) {
    next.confirmEmail = "Email addresses do not match.";
  }
  return next;
}

export function useContactForm(
  initial: ContactFormState,
  options?: { requireTurnstile?: boolean },
) {
  const requireTurnstile = options?.requireTurnstile ?? false;
  const [formData, setFormData] = useState<ContactFormState>(initial);
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormState, boolean>>>({});
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [submitNote, setSubmitNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileResetCount, setTurnstileResetCount] = useState(0);

  const resetTurnstile = () => {
    setTurnstileToken("");
    setTurnstileResetCount((count) => count + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const allErrors = validateAll(formData);
    setErrors(allErrors);
    setTouched({
      name: true,
      email: true,
      confirmEmail: true,
      company: true,
      industry: true,
      message: true,
    });
    if (Object.keys(allErrors).length > 0) {
      setSubmitNote("Please correct the highlighted fields and try again.");
      return;
    }
    if (requireTurnstile && !turnstileToken) {
      setSubmitNote("Please complete the security check and try again.");
      return;
    }

    setIsSubmitting(true);
    setSubmitNote("Sending your message...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
          sourcePage: typeof window !== "undefined" ? window.location.pathname : "/contact",
        }),
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        throw new Error(data.error || "Unable to submit form.");
      }

      setSubmitNote("Thanks. Your message was received.");
      setFormData(EMPTY_FORM);
      setTouched({});
      setErrors({});
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unable to submit right now.";
      setSubmitNote(`${message} Please try again in a moment.`);
    } finally {
      if (requireTurnstile) {
        resetTurnstile();
      }
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const name = e.target.name as keyof ContactFormState;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (!touched[name]) return;
    setErrors((prevErr) => {
      const nextErr: ContactFieldErrors = { ...prevErr, [name]: validateField(name, value) };
      if (name === "confirmEmail") {
        nextErr.confirmEmail = validateEmailConfirm(formData.email, value);
      }
      if (name === "email" && touched.confirmEmail) {
        nextErr.confirmEmail = validateEmailConfirm(value, formData.confirmEmail);
      }
      return nextErr;
    });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const name = e.target.name as keyof ContactFormState;
    const value = e.target.value;
    setTouched((prev) => ({ ...prev, [name]: true }));
    if (name === "confirmEmail") {
      setErrors((prev) => ({
        ...prev,
        confirmEmail: validateEmailConfirm(formData.email, value),
      }));
      return;
    }
    setErrors((prev) => {
      const next: ContactFieldErrors = { ...prev, [name]: validateField(name, value) };
      if (name === "email" && touched.confirmEmail) {
        next.confirmEmail = validateEmailConfirm(value, formData.confirmEmail);
      }
      return next;
    });
  };

  return {
    formData,
    touched,
    errors,
    submitNote,
    isSubmitting,
    turnstileToken,
    setTurnstileToken,
    turnstileResetCount,
    handleSubmit,
    handleChange,
    handleBlur,
  };
}
